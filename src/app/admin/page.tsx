import { Metadata } from 'next';
import { ProvidersTable } from '@/components/admin/providers-table';
import { VoteLimitConfig } from '@/components/admin/vote-limit-config';

export const metadata: Metadata = {
  title: 'Admin Dashboard',
  description: 'Admin dashboard for managing providers',
};

export default async function AdminPage() {
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
          <div className="grid gap-6 md:grid-cols-2">
            <VoteLimitConfig />
            {/* Add more settings cards here */}
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