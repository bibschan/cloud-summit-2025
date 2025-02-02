"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { toast } from "sonner";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Nav from "@/components/nav";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { Server } from "lucide-react";

interface CloudProvider {
  id: string;
  name: string;
  displayName: string;
  logoUrl: string;
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
        // Fetch providers and vote counts
        const [providersRes, votesRes] = await Promise.all([
          fetch("/api/providers"),
          fetch("/api/vote")
        ]);
        
        if (!providersRes.ok || !votesRes.ok) {
          throw new Error("Failed to fetch providers or vote counts");
        }
        
        const providers = await providersRes.json();
        const votes = await votesRes.json();
        
        setProviders(providers);
        setVoteCounts(votes);

        // Find user's current vote
        const userVoteRes = await fetch("/api/vote/current");
        if (!userVoteRes.ok) {
          if (userVoteRes.status !== 401) {  // Ignore 401 errors
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
    
    // Store old state for rollback
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
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ providerId }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ error: "Failed to cast vote" }));
        throw new Error(errorData.error || "Failed to cast vote");
      }

      const data = await response.json();
      
      if (data.changed) {
        toast.success(oldVote ? "Vote changed successfully!" : "Vote cast successfully!");
        
        // Refresh vote counts to ensure accuracy
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

  const LoadingSkeleton = () => (
    <div className="container mx-auto px-4">
      <div className="flex flex-col items-center mb-8">
        {/* Title Skeleton */}
        <Skeleton className="h-9 w-96 mb-4" />
        
        {/* Search Bar Skeleton */}
        <div className="relative w-full max-w-md">
          <Skeleton className="h-10 w-full rounded-lg" />
        </div>
      </div>
      
      {/* Cards Grid Skeleton */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, index) => (
          <Card key={index} className="bg-gray-800/80 border-gray-700">
            <CardHeader>
              <div className="flex items-center justify-between">
                {/* Provider Name */}
                <Skeleton className="h-7 w-40" />
                {/* Logo */}
                <Skeleton className="h-10 w-10 rounded-md" />
              </div>
            </CardHeader>
            <CardContent>
              {/* Progress Bar */}
              <Skeleton className="h-2 w-full rounded-full mb-2" />
              <Skeleton className="h-4 w-24" />
            </CardContent>
            <CardFooter>
              {/* Button */}
              <Skeleton className="h-10 w-full rounded-md bg-white/10" />
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );

  if (status === "loading" || !providers.length) {
    return (
      <>
        <Nav />
        <main className="min-h-screen bg-gradient-to-b from-blue-700 to-blue-300 pt-20">
          <LoadingSkeleton />
        </main>
      </>
    );
  }

  return (
    <>
      <Nav />
      <main className="min-h-screen bg-gradient-to-b from-blue-700 to-blue-300 pt-20">
      <div className="container mx-auto px-4">
          <div className="flex flex-col items-center mb-8">
            <h1 className="text-3xl font-bold mb-4 text-white text-center">Vote for Your Favorite Cloud Provider</h1>
            
            {/* Search Component */}
            <div className="relative w-full max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                type="text"
                placeholder="Search cloud providers..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-gray-400"
              />
      </div>
    </div>
          
          {filteredProviders.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProviders.map((provider) => {
                const voteCount = voteCounts.find(vc => vc.providerId === provider.id)?.count || 0;
                const percentage = getTotalVotes() > 0 
                  ? ((voteCount / getTotalVotes()) * 100).toFixed(1)
                  : "0";
                const isSelected = userVote === provider.id;
                
                return (
                  <Card key={provider.id} className={cn(
                    "bg-gray-800 border-gray-700 transition-all",
                    isSelected && "ring-2 ring-green-500"
                  )}>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-xl text-white">{provider.displayName}</CardTitle>
                        <div className="relative w-10 h-10">
                          <Image
                            src={`/cloud-providers/${provider.name.toLowerCase()}${
                              provider.name === "Tencent" || provider.name === "Huawei" ? ".png" : ".svg"
                            }`}
                            alt={provider.displayName}
                            width={40}
                            height={40}
                            className="object-contain"
                            onError={(e) => {
                              const parent = e.currentTarget.parentElement;
                              if (parent) {
                                parent.innerHTML = `<div class="flex items-center justify-center h-full">
                                  <svg class="w-8 h-8 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"></path>
                                  </svg>
                                </div>`;
                              }
                            }}
                          />
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <Progress value={parseFloat(percentage)} className="mb-2" />
                      <p className="text-sm text-gray-400">{voteCount} votes ({percentage}%)</p>
                    </CardContent>
                    <CardFooter>
                      <Button 
                        className="w-full"
                        onClick={() => handleVote(provider.id)}
                        disabled={loading}
                        variant={isSelected ? "secondary" : "default"}
                      >
                        {isSelected ? "Current Vote" : userVote ? "Change Vote" : "Vote"}
                      </Button>
                    </CardFooter>
                  </Card>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-semibold text-white mb-2">Don&apos;t see your cloud provider?</h3>
              <p className="text-gray-300 mb-4">Help us expand our list by nominating a provider.</p>
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