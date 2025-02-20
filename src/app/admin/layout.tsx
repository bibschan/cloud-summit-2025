import { redirect } from 'next/navigation';
import { auth } from '@/lib/auth';
import { isAdmin } from '@/lib/admin';

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  
  if (!session?.user?.email || !isAdmin(session.user.email)) {
    redirect('/');
  }

  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex-1">
        {children}
      </div>
    </div>
  );
} 