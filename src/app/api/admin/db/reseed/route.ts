import { NextResponse } from 'next/server';
import { auth } from '@/lib/auth';
import { isAdmin } from '@/lib/admin';
import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

export const dynamic = 'force-dynamic';

export async function POST() {
  try {
    const session = await auth();
    if (!session?.user?.email || !isAdmin(session.user.email)) {
      return NextResponse.json(
        { 
          error: 'Unauthorized',
          message: 'You must be an admin to reseed the database'
        }, 
        { status: 401 }
      );
    }

    const appEnv = process.env.APP_ENV || 'development';
    if (appEnv === 'production') {
      return NextResponse.json(
        { 
          error: 'Not allowed in production',
          message: 'Database reseeding is not allowed in production environment'
        }, 
        { status: 403 }
      );
    }

    // Run the reseed command
    const scriptName = appEnv === 'development' ? 'local:db:reseed' : `${appEnv}:db:reseed`;
    await execAsync(`npm run ${scriptName}`);

    return NextResponse.json({
      success: true,
      message: 'Database reseeded successfully'
    });
  } catch (error) {
    console.error('Error reseeding database:', error);
    return NextResponse.json(
      { 
        error: 'Failed to reseed database',
        message: 'An error occurred while reseeding the database',
        details: error instanceof Error ? error.message : undefined
      },
      { status: 500 }
    );
  }
} 