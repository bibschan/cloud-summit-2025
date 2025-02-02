import { prisma } from '@/lib/db';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // First check database connection
    await prisma.$connect();

    const providers = await prisma.cloudProvider.findMany({
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
  } finally {
    await prisma.$disconnect();
  }
} 