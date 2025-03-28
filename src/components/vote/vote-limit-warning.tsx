'use client';

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertTriangle } from "lucide-react";

export function VoteLimitWarning() {
  return (
    <Alert variant="destructive" className="bg-red-500/10 border-red-500/20">
      <AlertTriangle className="h-4 w-4" />
      <AlertTitle>Daily Vote Limit Reached</AlertTitle>
      <AlertDescription className="mt-2 text-sm text-white/80">
        You have reached your daily vote limit. Your voting ability will reset at midnight. You can still see your current vote highlighted in green.
      </AlertDescription>
    </Alert>
  );
} 