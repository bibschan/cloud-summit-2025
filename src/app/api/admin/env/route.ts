import { NextResponse } from 'next/server';
import { auth } from '@/lib/auth';
import { isAdmin } from '@/lib/admin';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const session = await auth();
    if (!session?.user?.email || !isAdmin(session.user.email)) {
      return NextResponse.json(
        { 
          error: 'Unauthorized',
          message: 'You must be an admin to view environment information'
        }, 
        { status: 401 }
      );
    }

    return NextResponse.json({
      appEnv: process.env.APP_ENV || 'development'
    });
  } catch (error) {
    console.error('Error fetching environment:', error);
    return NextResponse.json(
      { 
        error: 'Failed to fetch environment',
        message: 'An error occurred while fetching the environment information',
      },
      { status: 500 }
    );
  }
} 