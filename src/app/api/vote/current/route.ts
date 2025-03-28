import { db } from '@/lib/db';
import { auth } from '@/lib/auth';
import { NextResponse } from 'next/server';

const DEFAULT_DAILY_VOTE_LIMIT = 3;

/**
 * This route must be dynamic (no caching) because:
 * 1. Returns user-specific vote data that varies per user
 * 2. Requires fresh authentication check on each request
 * 3. Must reflect the user's most recent vote
 * 4. Must reflect current daily vote limits
 */
export const dynamic = 'force-dynamic';

async function getVoteLimitConfig() {
  try {
    const config = await db.systemConfig.findUnique({
      where: { key: 'DAILY_VOTE_LIMIT' },
    });
    return {
      enabled: !!config,
      limit: config ? parseInt(config.value, 10) : DEFAULT_DAILY_VOTE_LIMIT
    };
  } catch (error) {
    console.warn('Failed to fetch vote limit config:', error);
    return {
      enabled: false,
      limit: DEFAULT_DAILY_VOTE_LIMIT
    };
  }
}

export async function GET() {
  try {
    const session = await auth();
    // OAuth providers use email as a unique identifier
    const userId = session?.user?.email;
    
    if (!userId) {
      return NextResponse.json(
        { error: 'Authentication required' },
        { status: 401 }
      );
    }

    // Get today's date (without time) for daily limit check
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    // Get vote limit configuration
    const { enabled, limit } = await getVoteLimitConfig();

    // Only check daily vote count if limit is enabled
    const dailyVoteCount = enabled ? await db.voteHistory.count({
      where: {
        userId,
        voteDate: {
          gte: today,
        },
      },
    }) : 0;

    const vote = await db.vote.findFirst({
      where: {
        userId: userId,
      },
    });

    return NextResponse.json({ 
      vote,
      voteLimitEnabled: enabled,
      dailyVotesRemaining: enabled ? Math.max(0, limit - dailyVoteCount) : null,
      dailyVoteCount: dailyVoteCount
    });
  } catch (error) {
    console.error('Error fetching user vote:', error);
    return NextResponse.json(
      { error: 'Failed to fetch user vote' },
      { status: 500 }
    );
  }
} 