import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@/lib/auth';
import { isAdmin } from '@/lib/admin';
import { db } from '@/lib/db';
import { unlink } from 'fs/promises';
import { join } from 'path';

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await auth();
    if (!session?.user?.email || !isAdmin(session.user.email)) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { id } = params;

    // Get the provider first to get the logo URL
    const provider = await db.cloudProvider.findUnique({
      where: { id },
    });

    if (!provider) {
      return NextResponse.json(
        { error: 'Cloud provider not found' },
        { status: 404 }
      );
    }

    // Delete the provider from the database
    await db.cloudProvider.delete({
      where: { id },
    });

    // Delete the logo file
    if (provider.logoUrl) {
      const fileName = provider.logoUrl.split('/').pop();
      if (fileName) {
        const filePath = join(process.cwd(), 'public', 'uploads', 'providers', fileName);
        try {
          await unlink(filePath);
        } catch (error) {
          console.error('Failed to delete logo file:', error);
          // Continue even if file deletion fails
        }
      }
    }

    return NextResponse.json(provider);
  } catch (error) {
    console.error('Error deleting cloud provider:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 