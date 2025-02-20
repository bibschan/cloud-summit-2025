import { db } from '@/lib/db';
import { NextResponse } from 'next/server';

/**
 * This route is dynamic because:
 * 1. Cloud providers can be added/removed through admin panel
 * 2. Changes should be reflected immediately
 * 3. The performance impact is minimal due to low provider count
 */
export const dynamic = 'force-dynamic';

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