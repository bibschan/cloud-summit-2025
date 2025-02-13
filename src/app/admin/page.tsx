import { Metadata } from 'next';
import { ProvidersTable } from '@/components/admin/providers-table';
import { VoteLimitConfig } from '@/components/admin/vote-limit-config';
import { DatabaseManagement } from '@/components/admin/database-management';
import { auth } from '@/lib/auth';
import { redirect } from 'next/navigation';
import { isAdmin } from '@/lib/admin';

export const metadata: Metadata = {
  title: 'Admin Dashboard',
  description: 'Admin dashboard for managing providers',
};

export default async function AdminPage() {
  const session = await auth();
  if (!session?.user?.email || !isAdmin(session.user.email)) {
    redirect('/');
  }

  const appEnv = process.env.APP_ENV || 'development';

  return (
    <main className="min-h-screen bg-gray-950">
      <div className="container mx-auto px-6 py-24">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-1.5">
            <h1 className="text-3xl font-bold tracking-tight text-white">Admin Dashboard</h1>
            <p className="text-lg text-white/60">
              Manage cloud providers and system settings.
            </p>
          </div>

          {/* Settings Section */}
          <div className="grid gap-6 lg:grid-cols-2">
            <VoteLimitConfig className="w-full" />
            <DatabaseManagement appEnv={appEnv} />
          </div>

          {/* Providers Table */}
          <div className="bg-gray-900/50 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl p-8">
            <ProvidersTable />
          </div>
        </div>
      </div>
    </main>
  );
} 