import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@/lib/auth';
import { isAdmin } from '@/lib/admin';
import { db } from '@/lib/db';
import { writeFile, mkdir } from 'fs/promises';
import { join } from 'path';

export async function GET() {
  try {
    const session = await auth();
    if (!session?.user?.email || !isAdmin(session.user.email)) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const providers = await db.cloudProvider.findMany({
      orderBy: { createdAt: 'desc' },
    });

    return NextResponse.json(providers);
  } catch (error) {
    console.error('Error fetching cloud providers:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  const session = await auth();
  if (!isAdmin(session?.user?.email)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const formData = await request.formData();
    const name = formData.get('name') as string;
    const displayName = formData.get('displayName') as string;
    const image = formData.get('image');
    const logoUrl = formData.get('logoUrl') as string | null;

    if (!name || !displayName) {
      return NextResponse.json({ error: 'Name and display name are required' }, { status: 400 });
    }

    let finalLogoUrl: string;

    // Handle logo URL based on input type
    if (logoUrl) {
      // Direct URL provided - use as is
      finalLogoUrl = logoUrl;
    } else if (image) {
      if (typeof image === 'string') {
        // Existing logo selected - use the path directly
        finalLogoUrl = image;
      } else if (image instanceof File) {
        // New logo upload
        const bytes = await image.arrayBuffer();
        const buffer = new Uint8Array(bytes);

        // Ensure the cloud-providers directory exists
        const uploadDir = join(process.cwd(), 'public', 'cloud-providers');
        try {
          await mkdir(uploadDir, { recursive: true });
        } catch (error) {
          // Ignore if directory already exists
        }

        // Use provider name for the file to ensure uniqueness
        const extension = image.name.split('.').pop()?.toLowerCase() || 'svg';
        const filename = `${name.toLowerCase()}.${extension}`;
        const filepath = join(uploadDir, filename);

        await writeFile(filepath, buffer);
        finalLogoUrl = `/cloud-providers/${filename}`;
      } else {
        return NextResponse.json(
          { error: 'Invalid image format' },
          { status: 400 }
        );
      }
    } else {
      // No logo provided - use generic
      finalLogoUrl = '/cloud-providers/generic.svg';
    }

    // Create the provider with the logo URL
    const provider = await db.cloudProvider.create({
      data: {
        name,
        displayName,
        logoUrl: finalLogoUrl,
      },
    });

    // Initialize vote count for the new provider
    await db.voteCount.create({
      data: {
        providerId: provider.id,
        count: 0,
      },
    });

    return NextResponse.json(provider);
  } catch (error) {
    console.error('Error creating cloud provider:', error);
    if (error instanceof Error && error.message.includes('Unique constraint')) {
      return NextResponse.json(
        { error: 'A provider with this name already exists' },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 