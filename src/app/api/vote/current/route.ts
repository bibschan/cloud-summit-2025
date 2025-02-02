import { prisma } from '@/lib/db';
import { auth } from '@/lib/auth';
import { NextResponse } from 'next/server';

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

    const vote = await prisma.vote.findFirst({
      where: {
        userId: userId,
      },
    });

    return NextResponse.json({ vote });
  } catch (error) {
    console.error('Error fetching user vote:', error);
    return NextResponse.json(
      { error: 'Failed to fetch user vote' },
      { status: 500 }
    );
  }
} 