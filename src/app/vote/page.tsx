"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import Nav from "@/components/nav";
import { ProviderCard } from "@/components/vote/provider-card";
import { SearchBar } from "@/components/vote/search-bar";
import { LoadingSkeleton } from "@/components/vote/loading-skeleton";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

interface CloudProvider {
  id: string;
  name: string;
  displayName: string;
}

interface VoteCount {
  providerId: string;
  count: number;
}

interface Vote {
  id: string;
  providerId: string;
  userId: string;
}

export default function VotePage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [providers, setProviders] = useState<CloudProvider[]>([]);
  const [voteCounts, setVoteCounts] = useState<VoteCount[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [userVote, setUserVote] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/auth/signin");
    }
  }, [status, router]);

  useEffect(() => {
    const fetchData = async () => {
      if (!session?.user) return;
      
      try {
        setError(null);
        const [providersRes, votesRes] = await Promise.all([
          fetch("/api/providers"),
          fetch("/api/vote")
        ]);
        
        if (!providersRes.ok || !votesRes.ok) {
          throw new Error("Failed to fetch voting data");
        }
        
        const providers = await providersRes.json();
        const votes = await votesRes.json();
        
        setProviders(providers);
        setVoteCounts(votes);

        const userVoteRes = await fetch("/api/vote/current");
        if (!userVoteRes.ok) {
          if (userVoteRes.status !== 401) {
            console.error("Failed to fetch user vote:", await userVoteRes.text());
          }
          return;
        }
        
        const data = await userVoteRes.json();
        if (data.vote) {
          setUserVote(data.vote.providerId);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Failed to load voting data. Please try refreshing the page.");
        toast.error("Failed to load voting data. Please try refreshing the page.");
      }
    };

    if (status !== "loading") {
      fetchData();
    }
  }, [session, status]);

  const handleVote = async (providerId: string) => {
    if (loading) return;
    if (!session?.user) {
      toast.error("Please sign in to vote");
      router.push("/auth/signin");
      return;
    }
    
    setLoading(true);
    const oldVote = userVote;
    const oldVoteCounts = [...voteCounts];
    
    try {
      // Optimistic update
      setUserVote(providerId);
      setVoteCounts(prev => {
        const newCounts = [...prev];
        if (oldVote) {
          const oldIndex = newCounts.findIndex(vc => vc.providerId === oldVote);
          if (oldIndex !== -1) {
            newCounts[oldIndex] = { ...newCounts[oldIndex], count: Math.max(0, newCounts[oldIndex].count - 1) };
          }
        }
        const newIndex = newCounts.findIndex(vc => vc.providerId === providerId);
        if (newIndex !== -1) {
          newCounts[newIndex] = { ...newCounts[newIndex], count: newCounts[newIndex].count + 1 };
        }
        return newCounts;
      });

      const response = await fetch("/api/vote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ providerId }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ error: "Failed to cast vote" }));
        throw new Error(errorData.error || "Failed to cast vote");
      }

      const data = await response.json();
      
      if (data.changed) {
        toast.success(oldVote ? "Vote changed successfully!" : "Vote cast successfully!");
        
        const votesRes = await fetch("/api/vote");
        if (votesRes.ok) {
          const votes = await votesRes.json();
          setVoteCounts(votes);
        }
      } else {
        toast.success("Already voted for this provider");
      }
    } catch (error) {
      // Rollback on error
      setUserVote(oldVote);
      setVoteCounts(oldVoteCounts);
      console.error("Error casting vote:", error);
      toast.error(error instanceof Error ? error.message : "Failed to cast vote");
    } finally {
      setLoading(false);
    }
  };

  const getTotalVotes = () => voteCounts.reduce((sum, vc) => sum + vc.count, 0);

  const filteredProviders = providers.filter(provider =>
    provider.displayName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (status === "loading" || !providers.length) {
    return (
      <>
        <Nav />
        <main className="min-h-screen bg-gradient-to-b from-blue-700 to-blue-300 pt-20 relative">
          <LoadingSkeleton />
        </main>
      </>
    );
  }

  if (error) {
    toast.error(error);
    return (
      <>
        <Nav />
        <main className="min-h-screen bg-gradient-to-b from-blue-700 to-blue-300 pt-20 relative">
          <div className="container mx-auto px-4 text-center">
            <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-8 max-w-xl mx-auto">
              <h2 className="text-2xl font-bold text-white mb-4">Oops! Something went wrong</h2>
              <p className="text-gray-200 mb-6">{error}</p>
              <Button
                onClick={() => window.location.reload()}
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10"
              >
                Try Again
              </Button>
            </div>
          </div>
        </main>
      </>
    );
  }

  return (
    <>
      <Nav />
      <main className="min-h-screen bg-gradient-to-b from-blue-700 to-blue-300 pt-20 relative">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center space-y-6 mb-12">
            <h1 className="text-3xl font-bold text-white text-center drop-shadow-sm">
              Vote for Your Favorite Cloud Provider
            </h1>
            <div className="w-full max-w-md drop-shadow-sm">
              <SearchBar value={searchQuery} onChange={setSearchQuery} />
            </div>
          </div>
          
          {filteredProviders.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProviders.map((provider) => {
                const voteCount = voteCounts.find(vc => vc.providerId === provider.id)?.count || 0;
                return (
                  <ProviderCard
                    key={provider.id}
                    provider={provider}
                    voteCount={voteCount}
                    totalVotes={getTotalVotes()}
                    isSelected={userVote === provider.id}
                    userHasVoted={!!userVote}
                    loading={loading}
                    onVote={handleVote}
                  />
                );
              })}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-semibold text-white mb-2">
                Don&apos;t see your cloud provider?
              </h3>
              <p className="text-gray-300 mb-4">
                Help us expand our list by nominating a provider.
              </p>
              <Button 
                variant="outline" 
                className="border-white/20 text-white hover:bg-white/10"
                onClick={() => window.open('https://forms.gle/1XDU3sdR94UgbcUEA', '_blank')}
              >
                Nominate a Provider
              </Button>
            </div>
          )}
        </div>
      </main>
    </>
  );
} 