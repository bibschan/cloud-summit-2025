import { NextResponse } from 'next/server';
import { auth } from '@/lib/auth';
import { isAdmin } from '@/lib/admin';
import { db } from '@/lib/db';

export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
  try {
    const session = await auth();
    if (!session?.user?.email || !isAdmin(session.user.email)) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const startDate = searchParams.get('startDate');
    const endDate = searchParams.get('endDate');

    const query: any = {};
    
    if (startDate && endDate) {
      query.date = {
        gte: new Date(startDate),
        lte: new Date(endDate),
      };
    }

    // Fetch analytics data
    const analytics = await db.voteAnalytics.findMany({
      where: query,
      orderBy: {
        date: 'desc',
      },
    });

    // Fetch providers to map names
    const providers = await db.cloudProvider.findMany({
      select: {
        id: true,
        name: true,
        displayName: true,
      },
    });

    // Map provider details to analytics
    const analyticsWithProviders = analytics.map(stat => {
      const provider = providers.find(p => p.id === stat.providerId);
      return {
        ...stat,
        provider: provider ? {
          name: provider.name,
          displayName: provider.displayName,
        } : null,
      };
    });

    // Calculate summary statistics
    const summary = analytics.reduce((acc, curr) => {
      return {
        totalVotes: acc.totalVotes + curr.totalVotes,
        uniqueVoters: acc.uniqueVoters + curr.uniqueVoters,
        voteChanges: acc.voteChanges + curr.voteChanges,
      };
    }, { totalVotes: 0, uniqueVoters: 0, voteChanges: 0 });

    return NextResponse.json({
      analytics: analyticsWithProviders,
      summary,
    });
  } catch (error) {
    console.error('Error fetching analytics:', error);
    return NextResponse.json(
      { error: 'Failed to fetch analytics' },
      { status: 500 }
    );
  }
} 