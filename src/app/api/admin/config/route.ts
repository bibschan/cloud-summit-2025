import { NextResponse } from 'next/server';
import { auth } from '@/lib/auth';
import { isAdmin } from '@/lib/admin';
import { db } from '@/lib/db';
import { z } from 'zod';

export const dynamic = 'force-dynamic';

// Schema for config validation
const configSchema = z.object({
  key: z.string(),
  value: z.string(),
  description: z.string().optional(),
});

export async function GET() {
  try {
    const session = await auth();
    if (!session?.user?.email || !isAdmin(session.user.email)) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const configs = await db.systemConfig.findMany();
    return NextResponse.json(configs);
  } catch (error) {
    console.error('Error fetching configs:', error);
    return NextResponse.json(
      { error: 'Failed to fetch configurations' },
      { status: 500 }
    );
  }
}

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

    const { key, value, description } = validation.data;

    const config = await db.systemConfig.upsert({
      where: { key },
      update: {
        value,
        description,
        updatedBy: session.user.email,
      },
      create: {
        key,
        value,
        description,
        updatedBy: session.user.email,
      },
    });

    return NextResponse.json({
      success: true,
      config,
      message: 'Configuration updated successfully',
    });
  } catch (error) {
    console.error('Error updating config:', error);
    return NextResponse.json(
      { error: 'Failed to update configuration' },
      { status: 500 }
    );
  }
} 