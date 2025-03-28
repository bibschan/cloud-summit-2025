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
    console.log('Health check started');
    console.log('Environment:', process.env.APP_ENV);
    console.log('Database URL:', process.env.DATABASE_URL ? 'Configured' : 'Missing');

    // Verify database connection
    try {
      console.log('Attempting database connection...');
      await db.$connect();
      console.log('Database connection successful');
    } catch (dbError: any) {
      console.error('Database connection failed:', {
        error: dbError?.message,
        code: dbError?.code,
        name: dbError?.name,
        stack: dbError?.stack
      });
      return NextResponse.json(
        { 
          status: 'unhealthy', 
          message: 'Database connection failed',
          error: dbError?.message || 'Unknown database error',
          details: {
            code: dbError?.code,
            name: dbError?.name,
            env: process.env.APP_ENV
          }
        },
        { status: 503 }
      );
    }

    // Verify we can query the database
    try {
      console.log('Attempting database query...');
      const providerCount = await db.cloudProvider.count();
      console.log('Database query successful, provider count:', providerCount);
    } catch (queryError: any) {
      console.error('Database query failed:', {
        error: queryError?.message,
        code: queryError?.code,
        name: queryError?.name,
        stack: queryError?.stack
      });
      return NextResponse.json(
        { 
          status: 'unhealthy', 
          message: 'Database query failed',
          error: queryError?.message || 'Unknown query error',
          details: {
            code: queryError?.code,
            name: queryError?.name,
            env: process.env.APP_ENV
          }
        },
        { status: 503 }
      );
    }

    return NextResponse.json(
      { 
        status: 'healthy', 
        message: 'All systems operational',
        environment: process.env.APP_ENV,
        database: 'connected'
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Health check failed:', {
      error: error?.message,
      code: error?.code,
      name: error?.name,
      stack: error?.stack
    });
    return NextResponse.json(
      { 
        status: 'unhealthy', 
        message: 'System check failed',
        error: error?.message || 'Unknown error',
        details: {
          code: error?.code,
          name: error?.name,
          env: process.env.APP_ENV
        }
      },
      { status: 503 }
    );
  } finally {
    try {
      await db.$disconnect();
      console.log('Database disconnected');
    } catch (error) {
      console.error('Error disconnecting from database:', error);
    }
  }
} 