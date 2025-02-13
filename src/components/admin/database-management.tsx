'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from 'sonner';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog';
import { RefreshCw, FileText } from 'lucide-react';
import Link from 'next/link';

export function DatabaseManagement({ appEnv }: { appEnv: string }) {
  const [isReseeding, setIsReseeding] = useState(false);

  const handleReseed = async () => {
    setIsReseeding(true);
    try {
      const response = await fetch('/api/admin/db/reseed', {
        method: 'POST',
      });
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Failed to reseed database');
      }
      
      toast.success('Database reseeded successfully');
      // Refresh the page to show new data
      window.location.reload();
    } catch (error) {
      toast.error(error instanceof Error ? error.message : 'Failed to reseed database');
    } finally {
      setIsReseeding(false);
    }
  };

  if (appEnv === 'production') {
    return null;
  }

  return (
    <Card className="bg-amber-900/20 backdrop-blur-xl border-amber-500/20 shadow-2xl">
      <CardHeader>
        <div className="flex items-center gap-2">
          <CardTitle className="text-xl font-semibold tracking-tight text-white">Database Management</CardTitle>
          <span className="text-xs font-medium bg-amber-500/20 text-amber-300 px-2 py-1 rounded-full">
            {appEnv}
          </span>
        </div>
        <CardDescription className="text-amber-200/60">
          Manage database operations. These actions are only available in development and staging environments.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-white">Reset Database</h3>
            <p className="text-sm text-amber-200/60">
              This will reset the database to its initial state with seed data. All current votes and configurations will be lost.
            </p>
            <div className="flex flex-col gap-2">
              <p className="text-xs text-amber-200/60">
                To modify the seeded data, consult <code className="px-1 py-0.5 rounded bg-amber-500/10 text-amber-300">prisma/seed.ts</code> or read the{' '}
                <Link href="https://github.com/bibschan/cloud-summit-2025/blob/voting-system/docs/database.md" className="text-amber-300 hover:text-amber-200 hover:underline">
                  <FileText className="w-3 h-3 inline-block mb-0.5 mr-0.5" />
                  documentation
                </Link>.
              </p>
              <div className="flex justify-end">
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button
                      variant="outline"
                      className="mt-2 border-amber-500/20 text-amber-300 hover:bg-amber-500/10 gap-2"
                      disabled={isReseeding}
                    >
                      <RefreshCw className={`w-4 h-4 ${isReseeding ? 'animate-spin' : ''}`} />
                      {isReseeding ? 'Reseeding Database...' : 'Reseed Database'}
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent className="bg-gray-900/95 backdrop-blur-xl border-white/10">
                    <AlertDialogHeader>
                      <AlertDialogTitle className="text-white">Are you absolutely sure?</AlertDialogTitle>
                      <AlertDialogDescription className="text-white/60">
                        This action cannot be undone. This will permanently delete all existing data and reset the database to its initial state with seed data.
                        <ul className="mt-4 list-disc list-inside space-y-1">
                          <li>All user votes will be deleted</li>
                          <li>Vote counts will be reset</li>
                          <li>System configurations will be reset</li>
                          <li>Only cloud providers will be preserved</li>
                        </ul>
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel className="border-white/10 text-white hover:bg-white/10">
                        Cancel
                      </AlertDialogCancel>
                      <AlertDialogAction
                        onClick={handleReseed}
                        className="bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/20"
                      >
                        Reset Database
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
} 