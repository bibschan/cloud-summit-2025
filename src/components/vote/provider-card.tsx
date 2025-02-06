import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Cloud } from "lucide-react";
import { useState } from "react";

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
  onVote: (providerId: string) => void;
}

export function ProviderCard({
  provider,
  voteCount,
  totalVotes,
  isSelected,
  userHasVoted,
  loading,
  onVote,
}: ProviderCardProps) {
  const [imageError, setImageError] = useState(false);
  const percentage = totalVotes > 0 
    ? ((voteCount / totalVotes) * 100).toFixed(1)
    : "0";

  return (
    <Card className={cn(
      "bg-gray-900/40 border-white/5 backdrop-blur-sm transition-all duration-200 hover:bg-gray-900/50 hover:scale-[1.02] hover:-translate-y-0.5",
      isSelected && "ring-2 ring-green-400"
    )}>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl text-white">{provider.displayName}</CardTitle>
          <div className="relative w-10 h-10 flex items-center justify-center">
            {!imageError ? (
              <Image
                src={provider.logoUrl}
                alt={provider.displayName}
                width={40}
                height={40}
                className="object-contain"
                onError={() => setImageError(true)}
                unoptimized
              />
            ) : (
              <Cloud className="w-8 h-8 text-white/70" />
            )}
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <Progress 
          value={parseFloat(percentage)} 
          className={cn(
            "mb-2",
            isSelected ? "bg-green-500/20" : "bg-gray-700/30"
          )}
        />
        <div className="flex justify-between items-center">
          <p className="text-sm text-white/80">
            {voteCount > 0 
              ? `${voteCount} vote${voteCount !== 1 ? 's' : ''} (${percentage}%)`
              : 'No votes yet - be the first!'
            }
          </p>
          {voteCount > 0 && (
            <p className="text-xs text-white/70">
              {percentage}%
            </p>
          )}
        </div>
      </CardContent>
      <CardFooter>
        <Button 
          className={cn(
            "w-full transition-colors",
            isSelected 
              ? "bg-green-500 hover:bg-green-600 text-white" 
              : "bg-blue-500 hover:bg-blue-600 text-white"
          )}
          onClick={() => onVote(provider.id)}
          disabled={loading}
        >
          {isSelected ? "Current Vote" : userHasVoted ? "Change Vote" : "Vote"}
        </Button>
      </CardFooter>
    </Card>
  );
} 