import { NextResponse } from 'next/server';
import { db } from '@/lib/db';

/**
 * @name Health Check Endpoint
 * @description Required by Railway for zero-downtime deployments. This endpoint verifies:
 * 1. The application is running and can handle HTTP requests
 * 2. The database connection is established and operational
 * 
 * Railway will call this endpoint during deployment to ensure the service is healthy
 * before routing traffic to it. The endpoint must return a 200 status code for the
 * deployment to be considered successful.
 * 
 * @returns {Promise<NextResponse>} 
 * - 200: Application is healthy and can handle requests
 * - 503: Application is unhealthy (database connection failed)
 */

// Force this route to be dynamic since it uses database
export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    // Verify database connection
    try {
      await db.$connect();
    } catch (dbError: any) {
      console.error('Database connection failed:', dbError);
      return NextResponse.json(
        { 
          status: 'unhealthy', 
          message: 'Database connection failed',
          error: dbError?.message || 'Unknown database error'
        },
        { status: 503 }
      );
    }

    // Verify we can query the database
    try {
      await db.cloudProvider.count();
    } catch (queryError: any) {
      console.error('Database query failed:', queryError);
      return NextResponse.json(
        { 
          status: 'unhealthy', 
          message: 'Database query failed',
          error: queryError?.message || 'Unknown query error'
        },
        { status: 503 }
      );
    }

    return NextResponse.json(
      { status: 'healthy', message: 'All systems operational' },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Health check failed:', error);
    return NextResponse.json(
      { 
        status: 'unhealthy', 
        message: 'System check failed',
        error: error?.message || 'Unknown error'
      },
      { status: 503 }
    );
  }
} 