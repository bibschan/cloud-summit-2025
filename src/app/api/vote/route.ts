import { db } from '@/lib/db';
import { auth } from '@/lib/auth';
import { NextResponse } from 'next/server';

const DEFAULT_DAILY_VOTE_LIMIT = 3;

/**
 * This route must be dynamic (no caching) because:
 * 1. POST: Processes real-time voting actions that modify database state
 * 2. GET: Returns current vote counts that must be fresh
 * 3. Requires user authentication on each request
 * 4. Handles concurrent voting with transactions
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

async function updateAnalytics(providerId: string, isNewVote: boolean, isVoteChange: boolean) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  // Find existing analytics for today
  const existing = await db.voteAnalytics.findFirst({
    where: {
      providerId,
      date: today,
    },
  });

  if (existing) {
    await db.voteAnalytics.update({
      where: { id: existing.id },
      data: {
        totalVotes: { increment: isNewVote ? 1 : 0 },
        uniqueVoters: { increment: isNewVote ? 1 : 0 },
        voteChanges: { increment: isVoteChange ? 1 : 0 },
      },
    });
  } else {
    await db.voteAnalytics.create({
      data: {
        providerId,
        date: today,
        totalVotes: isNewVote ? 1 : 0,
        uniqueVoters: isNewVote ? 1 : 0,
        voteChanges: isVoteChange ? 1 : 0,
      },
    });
  }
}

export async function POST(request: Request) {
  try {
    const session = await auth();
    const userId = session?.user?.email;
    
    if (!userId) {
      return NextResponse.json(
        { error: 'Authentication required' },
        { status: 401 }
      );
    }

    const { providerId } = await request.json();
    if (!providerId) {
      return NextResponse.json(
        { error: 'Provider ID is required' },
        { status: 400 }
      );
    }

    console.log('Vote attempt:', { userId, providerId });

    // Check if provider exists
    const provider = await db.cloudProvider.findUnique({
      where: { id: providerId },
    });

    if (!provider) {
      console.error('Invalid provider ID:', {
        attemptedId: providerId,
        userId,
        timestamp: new Date().toISOString()
      });

      // List all available providers for debugging
      const availableProviders = await db.cloudProvider.findMany({
        select: { id: true, name: true }
      });
      console.log('Available providers:', availableProviders);

      return NextResponse.json(
        { 
          error: 'Invalid provider ID',
          details: 'The specified provider ID does not exist in the database',
          providerId 
        },
        { status: 400 }
      );
    }

    // Get today's date (without time) for daily limit check
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    // Get vote limit configuration
    const { enabled, limit } = await getVoteLimitConfig();

    // Get daily vote count regardless of whether limit is enabled
    const dailyVoteCount = await db.voteHistory.count({
      where: {
        userId,
        voteDate: {
          gte: today,
        },
      },
    });

    // Only check daily vote count if limit is enabled
    if (enabled) {
      if (dailyVoteCount >= limit) {
        return NextResponse.json(
          { 
            error: 'Daily vote limit reached',
            message: `You can only change your vote ${limit} times per day. Please try again tomorrow.`,
            dailyVotesRemaining: 0,
            voteLimitEnabled: enabled
          },
          { status: 429 }
        );
      }
    }

    // Find user's existing vote
    const existingVote = await db.vote.findFirst({
      where: {
        userId: userId,
      },
    });

    // Start a transaction to ensure vote counts stay consistent
    const result = await db.$transaction(async (tx) => {
      if (existingVote) {
        // If voting for the same provider, do nothing
        if (existingVote.providerId === provider.id) {
          return { 
            vote: existingVote, 
            changed: false,
            dailyVotesRemaining: enabled ? limit - dailyVoteCount : null
          };
        }

        // Record the vote change in history
        if (enabled) {
          await tx.voteHistory.create({
            data: {
              userId,
              providerId: provider.id,
              voteDate: today,
            },
          });
        }

        // Update analytics
        await updateAnalytics(provider.id, false, true);

        // Decrement the old provider's count
        await tx.voteCount.update({
          where: { providerId: existingVote.providerId },
          data: {
            count: {
              decrement: 1,
            },
          },
        });

        // Update the vote to the new provider
        const updatedVote = await tx.vote.update({
          where: { id: existingVote.id },
          data: {
            providerId: provider.id,
          },
        });

        // Increment the new provider's count
        await tx.voteCount.upsert({
          where: { providerId: provider.id },
          update: {
            count: {
              increment: 1,
            },
          },
          create: {
            providerId: provider.id,
            count: 1,
          },
        });

        return { 
          vote: updatedVote, 
          changed: true,
          dailyVotesRemaining: enabled ? limit - (dailyVoteCount + 1) : null
        };
      } else {
        // Record the initial vote in history
        if (enabled) {
          await tx.voteHistory.create({
            data: {
              userId,
              providerId: provider.id,
              voteDate: today,
            },
          });
        }

        // Update analytics for new vote
        await updateAnalytics(provider.id, true, false);

        // Create new vote
        const newVote = await tx.vote.create({
          data: {
            userId: userId,
            providerId: provider.id,
          },
        });

        // Increment the provider's count
        await tx.voteCount.upsert({
          where: { providerId: provider.id },
          update: {
            count: {
              increment: 1,
            },
          },
          create: {
            providerId: provider.id,
            count: 1,
          },
        });

        return { 
          vote: newVote, 
          changed: true,
          dailyVotesRemaining: enabled ? limit - (dailyVoteCount + 1) : null
        };
      }
    });

    return NextResponse.json({
      success: true,
      vote: result.vote,
      changed: result.changed,
      dailyVotesRemaining: result.dailyVotesRemaining,
      voteLimitEnabled: enabled,
      message: result.changed 
        ? enabled
          ? `Vote updated successfully. You have ${result.dailyVotesRemaining} vote changes remaining today.`
          : 'Vote updated successfully.'
        : 'Already voted for this provider.'
    });
  } catch (error) {
    console.error('Error processing vote:', error);
    return NextResponse.json(
      { error: 'Failed to process vote' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const voteCounts = await db.voteCount.findMany({
      orderBy: {
        count: 'desc',
      },
    });

    return NextResponse.json(voteCounts);
  } catch (error) {
    console.error('Error fetching vote counts:', error);
    return NextResponse.json(
      { error: 'Failed to fetch vote counts' },
      { status: 500 }
    );
  }
} 