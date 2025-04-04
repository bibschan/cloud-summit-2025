"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { ProviderCard } from "@/components/vote/provider-card";
import { SearchBar } from "@/components/vote/search-bar";
import { LoadingSkeleton } from "@/components/vote/loading-skeleton";
import { cn } from "@/lib/utils";
import { VoteLimitWarning } from "@/components/vote/vote-limit-warning";

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
type ToggleProps = {
  setToggle: React.Dispatch<React.SetStateAction<"vote" | "nominate">>;
};

export default function Vote({ setToggle }: ToggleProps) {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [providers, setProviders] = useState<CloudProvider[]>([]);
  const [voteCounts, setVoteCounts] = useState<VoteCount[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [userVote, setUserVote] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [isNominateOpen, setIsNominateOpen] = useState(false);
  const [remainingVotes, setRemainingVotes] = useState<number | null>(null);
  const [voteLimitEnabled, setVoteLimitEnabled] = useState(false);
  const [dailyVoteCount, setDailyVoteCount] = useState(0);

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/auth/signin");
    }
  }, [status, router]);

  useEffect(() => {
    let isSubscribed = true;
    const controller = new AbortController();
    const fetchData = async () => {
      if (!session?.user) return;
      try {
        setError(null);
        const [providersRes, votesRes, userVoteRes] = await Promise.all([
          fetch("/api/providers", { signal: controller.signal }),
          fetch("/api/vote", { signal: controller.signal }),
          fetch("/api/vote/current", { signal: controller.signal }),
        ]);
        if (!isSubscribed) return;
        if (!providersRes.ok || !votesRes.ok) {
          throw new Error("Failed to fetch voting data");
        }
        const providers = await providersRes.json();
        const votes = await votesRes.json();
        if (!isSubscribed) return;
        setProviders(providers);
        setVoteCounts(votes);
        if (userVoteRes.ok) {
          const data = await userVoteRes.json();
          if (!isSubscribed) return;
          if (data.vote) {
            setUserVote(data.vote.providerId);
          }
          setVoteLimitEnabled(data.voteLimitEnabled);
          if (data.dailyVotesRemaining !== undefined) {
            setRemainingVotes(data.dailyVotesRemaining);
          }
          setDailyVoteCount(
            data.dailyVotesRemaining !== undefined
              ? data.dailyVotesRemaining
              : 0
          );
        } else if (userVoteRes.status !== 401) {
          console.error("Failed to fetch user vote:", await userVoteRes.text());
        }
      } catch (error: unknown) {
        if (error instanceof Error && error.name === "AbortError") return;
        if (!isSubscribed) return;
        console.error("Error fetching data:", error);
        setError("Failed to load voting data. Please try refreshing the page.");
        toast.error(
          "Failed to load voting data. Please try refreshing the page."
        );
      }
    };

    if (status !== "loading") {
      fetchData();
    }

    return () => {
      isSubscribed = false;
      controller.abort();
    };
  }, [session, status]);

  const handleVote = async (providerId: string) => {
    if (loading) return;
    if (!session?.user) {
      toast.error("Please sign in to vote");
      router.push("/auth/signin");
      return;
    }
    if (remainingVotes === 0 && userVote !== providerId) {
      toast.error(
        "You have no more vote changes remaining today. Please try again tomorrow."
      );
      return;
    }

    setLoading(true);
    const oldVote = userVote;
    const oldVoteCounts = [...voteCounts];
    try {
      console.log("Attempting to vote for company:", {
        providerId,
        provider: providers.find((p) => p.id === providerId),
        currentVote: userVote,
      });
      setUserVote(providerId);
      setVoteCounts((prev) => {
        const newCounts = [...prev];
        if (oldVote) {
          const oldIndex = newCounts.findIndex(
            (vc) => vc.providerId === oldVote
          );
          if (oldIndex !== -1) {
            newCounts[oldIndex] = {
              ...newCounts[oldIndex],
              count: Math.max(0, newCounts[oldIndex].count - 1),
            };
          }
        }
        const newIndex = newCounts.findIndex(
          (vc) => vc.providerId === providerId
        );
        if (newIndex !== -1) {
          newCounts[newIndex] = {
            ...newCounts[newIndex],
            count: newCounts[newIndex].count + 1,
          };
        }
        return newCounts;
      });

      const response = await fetch("/api/vote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ providerId }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Vote failed:", errorData);
        throw new Error(
          errorData.message || errorData.error || "Failed to cast vote"
        );
      }

      const data = await response.json();
      if (data.dailyVotesRemaining !== undefined) {
        setRemainingVotes(data.dailyVotesRemaining);
      }

      if (data.changed) {
        toast.success(
          data.message ||
            (oldVote ? "Vote changed successfully!" : "Vote cast successfully!")
        );
        const votesRes = await fetch("/api/vote");
        if (votesRes.ok) {
          const votes = await votesRes.json();
          setVoteCounts(votes);
        }
      } else {
        toast.success(data.message || "Already voted for this company");
      }
    } catch (error) {
      console.error("Vote error:", {
        error,
        providerId,
        provider: providers.find((p) => p.id === providerId),
      });
      setUserVote(oldVote);
      setVoteCounts(oldVoteCounts);
      toast.error(
        error instanceof Error ? error.message : "Failed to cast vote"
      );
    } finally {
      setLoading(false);
    }
  };

  const getTotalVotes = () => voteCounts.reduce((sum, vc) => sum + vc.count, 0);

  const filteredProviders = providers.filter((provider) =>
    provider.displayName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (status === "loading") {
    return <LoadingSkeleton />;
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 text-center py-0">
        <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-8 max-w-xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-4">
            Oops! Something went wrong
          </h2>
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
    );
  }

  if (!providers.length) {
    return (
      <section className="py-0 mt-0">
        <div className="container mx-auto px-6 py-0">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-3xl font-bold tracking-tight text-white mb-6">
              Coming Soon!
            </h1>
            <div className="bg-gray-900/50 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl p-8">
              <p className="text-md md:text-xl text-white mb-4">
                We&apos;re preparing the list of companies for voting.
              </p>
              <p className="text-md md:text-lg text-white">
                Check back soon to cast your vote for your favorite local tech
                companies!
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-0">
      <div className="container mx-auto px-6 py-0">
        <div className="flex flex-col gap-12">
          {/* Header Section */}
          <div className="flex flex-col items-center text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white mb-3">
              Vote for Your Favorite Local Tech Company!
            </h2>
            <p className="text-sm md:text-lg text-white/60">
              Cast your vote for your favorite company.
              {voteLimitEnabled &&
                remainingVotes !== null &&
                dailyVoteCount > 0 && (
                  <span className="block mt-2 text-sm">
                    {remainingVotes > 0
                      ? `You have ${remainingVotes} vote change${
                          remainingVotes !== 1 ? "s" : ""
                        } remaining today.`
                      : "You have no more vote changes remaining today."}
                  </span>
                )}
            </p>
          </div>

          {/* Search Section */}
          <div className="w-full max-w-md mx-auto">
            <SearchBar value={searchQuery} onChange={setSearchQuery} />
            {providers.length > 0 && (
              <p className="text-sm text-white/40 text-center mt-3">
                Don&apos;t see the company you&apos;re looking for?{" "}
                <button
                  onClick={() => setIsNominateOpen(true)}
                  className="text-white/60 hover:text-white transition-colors duration-200"
                >
                  Nominate one →
                </button>
              </p>
            )}
          </div>

          {/* Vote Limit Warning */}
          {voteLimitEnabled && remainingVotes === 0 && (
            <div className="w-full max-w-2xl mx-auto">
              <VoteLimitWarning />
            </div>
          )}

          {/* Content Section */}
          {filteredProviders.length > 0 ? (
            <div
              className={cn(
                "grid md:grid-cols-2 lg:grid-cols-3 gap-6",
                voteLimitEnabled &&
                  remainingVotes === 0 &&
                  "pointer-events-none"
              )}
            >
              {filteredProviders.map((provider) => {
                const voteCount =
                  voteCounts.find((vc) => vc.providerId === provider.id)
                    ?.count || 0;
                const isCurrentVote = userVote === provider.id;
                const isDisabled =
                  voteLimitEnabled && remainingVotes === 0 && !isCurrentVote;
                return (
                  <ProviderCard
                    key={provider.id}
                    provider={provider}
                    voteCount={voteCount}
                    totalVotes={getTotalVotes()}
                    isSelected={isCurrentVote}
                    userHasVoted={!!userVote}
                    loading={loading}
                    onVote={handleVote}
                    disabled={isDisabled}
                  />
                );
              })}
            </div>
          ) : (
            // This is the "No results found" section that appears when search has no matches
            <div className="max-w-xl mx-auto w-full">
              <div className="text-center px-4 py-6 bg-gray-900/50 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl">
                <h3 className="font-body text-xl font-semibold text-white mb-2">
                  No companies match your search
                </h3>
                <p className="text-sm text-gray-300 mb-4 ">
                  Try a different search term or nominate a company if it&apos;s
                  not in our list.
                </p>
                <div className="flex flex-col items-center gap-3">
                  <Button
                    variant="outline"
                    className="border-white/20 text-white hover:bg-white/10"
                    onClick={() => setToggle("nominate")}
                  >
                    Nominate a Company
                  </Button>
                  <Button
                    variant="ghost"
                    className="text-white/60 hover:text-white hover:bg-transparent"
                    onClick={() => setSearchQuery("")}
                  >
                    Clear Search
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
