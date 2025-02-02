import { prisma } from '@/lib/db';
import { auth } from '@/lib/auth';
import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

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

    // Check if provider exists
    const provider = await prisma.cloudProvider.findUnique({
      where: { id: providerId },
    });

    if (!provider) {
      return NextResponse.json(
        { error: 'Invalid provider ID' },
        { status: 400 }
      );
    }

    // Find user's existing vote
    const existingVote = await prisma.vote.findFirst({
      where: {
        userId: userId,
      },
    });

    // Start a transaction to ensure vote counts stay consistent
    const result = await prisma.$transaction(async (tx: PrismaClient) => {
      if (existingVote) {
        // If voting for the same provider, do nothing
        if (existingVote.providerId === provider.id) {
          return { vote: existingVote, changed: false };
        }

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

        return { vote: updatedVote, changed: true };
      } else {
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

        return { vote: newVote, changed: true };
      }
    });

    return NextResponse.json({
      success: true,
      vote: result.vote,
      changed: result.changed,
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
    const voteCounts = await prisma.voteCount.findMany({
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