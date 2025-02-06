import { db } from '@/lib/db';
import { NextResponse } from 'next/server';

/**
 * This route uses revalidation instead of being dynamic because:
 * 1. Cloud providers rarely change (stable data)
 * 2. No user-specific content is returned
 * 3. Benefits from caching for better performance
 * 4. Same response for all users
 * 
 * Revalidation every hour provides a good balance between 
 * data freshness and performance.
 */
export const revalidate = 3600; // 1 hour

export async function GET() {
  try {
    const providers = await db.cloudProvider.findMany({
      orderBy: {
        name: 'asc',
      },
    });

    if (!providers.length) {
      console.warn('No cloud providers found in database');
    }

    return NextResponse.json(providers);
  } catch (error) {
    console.error('Error fetching providers:', error);
    return NextResponse.json(
      { error: 'Failed to fetch providers. Please try again later.' },
      { status: 500 }
    );
  }
} 