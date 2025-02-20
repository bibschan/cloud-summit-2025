'use client';

import { useState, useEffect } from 'react';
import { Switch } from '@/components/ui/switch';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Save, X } from 'lucide-react';
import { routes } from '@/lib/routes';
import { cn } from '@/lib/utils';

interface VoteLimitConfigProps {
  className?: string;
}

export function VoteLimitConfig({ className }: VoteLimitConfigProps) {
  const [isEnabled, setIsEnabled] = useState(false);
  const [limit, setLimit] = useState<string>('3');
  const [isLoading, setIsLoading] = useState(true);
  
  // Keep track of original values for comparison and reset
  const [originalEnabled, setOriginalEnabled] = useState(false);
  const [originalLimit, setOriginalLimit] = useState('3');
  
  // Track if there are unsaved changes
  const hasChanges = isEnabled !== originalEnabled || limit !== originalLimit;

  // Fetch initial config
  useEffect(() => {
    async function fetchConfig() {
      try {
        const response = await fetch(routes.api.admin.config.voteLimit);
        if (response.ok) {
          const data = await response.json();
          setIsEnabled(data.enabled);
          setOriginalEnabled(data.enabled);
          if (data.value) {
            setLimit(data.value);
            setOriginalLimit(data.value);
          }
        }
      } catch (error) {
        console.error('Error fetching vote limit config:', error);
        toast.error('Failed to load vote limit configuration');
      } finally {
        setIsLoading(false);
      }
    }

    fetchConfig();
  }, []);

  // Update config in the database
  const saveChanges = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(routes.api.admin.config.voteLimit, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          enabled: isEnabled,
          value: isEnabled ? limit : null,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to update configuration');
      }

      // Update original values to match current
      setOriginalEnabled(isEnabled);
      setOriginalLimit(limit);
      
      toast.success('Vote limit configuration updated');
    } catch (error) {
      console.error('Error updating vote limit config:', error);
      toast.error('Failed to update vote limit configuration');
    } finally {
      setIsLoading(false);
    }
  };

  // Discard changes and reset to original values
  const discardChanges = () => {
    setIsEnabled(originalEnabled);
    setLimit(originalLimit);
  };

  return (
    <div className={cn("bg-gray-900/50 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl p-8", className)}>
      <div className="flex flex-col gap-1.5 mb-6">
        <h2 className="text-xl font-semibold tracking-tight text-white">Daily Vote Limit</h2>
        <p className="text-sm text-white/60">
          Configure the maximum number of votes allowed per user per day
        </p>
      </div>

      <div className="space-y-6">
        <div className="grid grid-cols-2 gap-8">
          <div className="space-y-2">
            <Label htmlFor="vote-limit-toggle" className="text-sm font-medium text-white">
              Enable Vote Limit
            </Label>
            <div className="flex items-center h-10">
              <Switch
                id="vote-limit-toggle"
                checked={isEnabled}
                onCheckedChange={setIsEnabled}
                disabled={isLoading}
              />
            </div>
          </div>
          
          <div className={`space-y-2 transition-opacity duration-200 ${!isEnabled ? 'opacity-50' : ''}`}>
            <Label 
              htmlFor="vote-limit-value" 
              className={`text-sm font-medium text-white`}
            >
              Maximum Votes Per Day
            </Label>
            <Input
              id="vote-limit-value"
              type="number"
              min="1"
              value={limit}
              onChange={(e) => setLimit(e.target.value)}
              disabled={!isEnabled || isLoading}
              className="w-32 bg-gray-800/50 border-white/10 text-white placeholder:text-white/40"
            />
          </div>
        </div>

        {/* Save/Discard Buttons */}
        {hasChanges && (
          <div className="flex items-center gap-3 pt-2 justify-end">
            <Button
              onClick={saveChanges}
              disabled={isLoading}
              className="bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 border border-blue-500/20 gap-2"
            >
              <Save className="w-4 h-4" />
              Save Changes
            </Button>
            <Button
              onClick={discardChanges}
              disabled={isLoading}
              variant="outline"
              className="border-white/10 text-white hover:bg-white/10 gap-2"
            >
              <X className="w-4 h-4" />
              Discard
            </Button>
          </div>
        )}
      </div>
    </div>
  );
} 