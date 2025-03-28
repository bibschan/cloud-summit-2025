'use client';

import { useEffect, useState } from 'react';
import { AlertCircle } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

interface RemainingVotesProps {
  remainingVotes?: number;
  message?: string;
  className?: string;
}

export function RemainingVotes({ remainingVotes, message, className = '' }: RemainingVotesProps) {
  const [isVisible, setIsVisible] = useState(true);

  // Hide the alert after 5 seconds if there's no error
  useEffect(() => {
    if (message && !message.includes('error') && !message.includes('limit reached')) {
      const timer = setTimeout(() => setIsVisible(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [message]);

  if (!isVisible || (remainingVotes === undefined && !message)) {
    return null;
  }

  const isWarning = remainingVotes === 1 || message?.includes('limit reached');
  const variant = isWarning ? 'destructive' : 'default';

  return (
    <Alert 
      variant={variant}
      className={`transition-all duration-300 ${className}`}
    >
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>Vote Status</AlertTitle>
      <AlertDescription className="mt-2">
        {message || `You have ${remainingVotes} vote changes remaining today.`}
      </AlertDescription>
    </Alert>
  );
} 