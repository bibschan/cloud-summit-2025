import { NextResponse } from 'next/server';
import { db } from '@/lib/db';

// Force this route to be dynamic since it uses database
export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    // Check database connection by attempting to count cloud providers
    await db.cloudProvider.count();

    return NextResponse.json(
      { status: 'healthy', message: 'All systems operational' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Health check failed:', error);
    return NextResponse.json(
      { status: 'unhealthy', message: 'System check failed' },
      { status: 503 }
    );
  }
} 