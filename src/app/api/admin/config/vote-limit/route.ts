import { NextResponse } from 'next/server';
import { auth } from '@/lib/auth';
import { isAdmin } from '@/lib/admin';
import { db } from '@/lib/db';
import { z } from 'zod';

export const dynamic = 'force-dynamic';

const configSchema = z.object({
  enabled: z.boolean(),
  value: z.string().nullable(),
});

export async function POST(request: Request) {
  try {
    const session = await auth();
    if (!session?.user?.email || !isAdmin(session.user.email)) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const validation = configSchema.safeParse(body);

    if (!validation.success) {
      return NextResponse.json(
        { error: 'Invalid configuration data', details: validation.error },
        { status: 400 }
      );
    }

    const { enabled, value } = validation.data;

    // If disabled, remove the config
    if (!enabled) {
      await db.systemConfig.delete({
        where: { key: 'DAILY_VOTE_LIMIT' },
      });

      return NextResponse.json({
        success: true,
        message: 'Vote limit disabled',
      });
    }

    // Update or create the config
    const config = await db.systemConfig.upsert({
      where: { key: 'DAILY_VOTE_LIMIT' },
      update: {
        value: value || '3',
        updatedBy: session.user.email,
      },
      create: {
        key: 'DAILY_VOTE_LIMIT',
        value: value || '3',
        description: 'Maximum number of vote changes allowed per user per day',
        updatedBy: session.user.email,
      },
    });

    return NextResponse.json({
      success: true,
      config,
      message: 'Vote limit configuration updated',
    });
  } catch (error) {
    console.error('Error updating vote limit config:', error);
    return NextResponse.json(
      { error: 'Failed to update configuration' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const session = await auth();
    if (!session?.user?.email || !isAdmin(session.user.email)) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const config = await db.systemConfig.findUnique({
      where: { key: 'DAILY_VOTE_LIMIT' },
    });

    return NextResponse.json({
      enabled: !!config,
      value: config?.value || '3',
    });
  } catch (error) {
    console.error('Error fetching vote limit config:', error);
    return NextResponse.json(
      { error: 'Failed to fetch configuration' },
      { status: 500 }
    );
  }
} 