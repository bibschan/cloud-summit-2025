import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Cloud } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

interface ProviderCardProps {
  provider: {
    id: string;
    name: string;
    displayName: string;
    logoUrl: string;
  };
  voteCount: number;
  totalVotes: number;
  isSelected: boolean;
  userHasVoted: boolean;
  loading: boolean;
  disabled?: boolean;
  onVote: (providerId: string) => void;
}

export function ProviderCard({
  provider,
  voteCount,
  totalVotes,
  isSelected,
  userHasVoted,
  loading,
  disabled,
  onVote,
}: ProviderCardProps) {
  const [imageError, setImageError] = useState(false);
  const useExternalNominationForm = process.env.NEXT_PUBLIC_USE_EXTERNAL_NOMINATION_FORM === "true";
  const externalNominationFormUrl = process.env.NEXT_PUBLIC_EXTERNAL_NOMINATION_FORM_URL as string;
  const percentage = totalVotes > 0 
    ? ((voteCount / totalVotes) * 100).toFixed(1)
    : "0";

  return (
    <Card className={cn(
      "border-white/5 backdrop-blur-sm",
      !disabled && "transition-all duration-200 hover:bg-gray-900/50 hover:scale-[1.02] hover:-translate-y-0.5",
      isSelected && "ring-2 ring-green-400",
      disabled 
        ? "opacity-40 bg-gray-900/20 cursor-not-allowed saturate-50" 
        : "bg-gray-900/40"
    )}>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className={cn(
            "text-xl",
            disabled ? "text-white/70" : "text-white"
          )}>{provider.displayName}</CardTitle>
          <div className="relative w-10 h-10 flex items-center justify-center">
            {!imageError ? (
              <Image
                src={provider.logoUrl}
                alt={provider.displayName}
                width={40}
                height={40}
                className={cn(
                  "object-contain",
                  disabled && "grayscale"
                )}
                onError={() => setImageError(true)}
                unoptimized
              />
            ) : (
              <div className="text-center py-12 bg-gray-900/50 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl">
                <h3 className="text-xl font-semibold text-white mb-2">
                  Don&apos;t see your cloud provider?
                </h3>
                <p className="text-gray-300 mb-4">
                  Help us expand our list by nominating a provider.
                </p>
                <div className="flex flex-col items-center gap-3">
                  <Button 
                    variant="outline" 
                    className="border-white/20 text-white hover:bg-white/10"
                    asChild
                  >
                    {useExternalNominationForm ? (
                      <Link 
                        href={externalNominationFormUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Nominate a Provider
                      </Link>
                    ) : (
                      <Link href="/nominate">
                        Nominate a Provider
                      </Link>
                    )}
                  </Button>
                  <p className="text-sm text-white/60">
                    Your nominations help us make the platform more comprehensive.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <Progress 
          value={parseFloat(percentage)} 
          className={cn(
            "mb-2",
            isSelected 
              ? "bg-green-500/20" 
              : disabled 
                ? "bg-gray-700/10" 
                : "bg-gray-700/30"
          )}
        />
        <div className="flex justify-between items-center">
          <p className={cn(
            "text-sm",
            disabled ? "text-white/50" : "text-white/80"
          )}>
            {voteCount > 0 
              ? `${voteCount} vote${voteCount !== 1 ? 's' : ''} (${percentage}%)`
              : 'No votes yet - be the first!'
            }
          </p>
          {voteCount > 0 && (
            <p className={cn(
              "text-xs",
              disabled ? "text-white/40" : "text-white/70"
            )}>
              {percentage}%
            </p>
          )}
        </div>
      </CardContent>
      <CardFooter>
        <Button 
          className={cn(
            "w-full",
            isSelected 
              ? "bg-green-500 hover:bg-green-600 text-white" 
              : disabled
                ? "bg-gray-600 text-white/70 cursor-not-allowed hover:bg-gray-600"
                : "bg-blue-500 hover:bg-blue-600 text-white"
          )}
          onClick={() => onVote(provider.id)}
          disabled={loading || disabled}
        >
          {isSelected ? "Current Vote" : userHasVoted ? "Change Vote" : "Vote"}
        </Button>
      </CardFooter>
    </Card>
  );
} 