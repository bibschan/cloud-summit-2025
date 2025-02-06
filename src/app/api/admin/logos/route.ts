import { NextResponse } from 'next/server';
import { readdir } from 'fs/promises';
import { join } from 'path';
import { auth } from '@/lib/auth';
import { isAdmin } from '@/lib/admin';

export async function GET() {
  try {
    const session = await auth();
    if (!session?.user?.email || !isAdmin(session.user.email)) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const publicDir = join(process.cwd(), 'public', 'cloud-providers');
    const files = await readdir(publicDir);
    
    // Filter for image files and exclude hidden files
    const logoFiles = files.filter(
      (file) =>
        !file.startsWith('.') &&
        (file.endsWith('.svg') || file.endsWith('.png'))
    );

    // Map filenames to logo objects
    const logos = logoFiles.map((file) => {
      const name = file.replace(/\.(svg|png)$/, '');
      const formattedName = name
        .split(/[-_]/)
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');

      return {
        name: formattedName,
        path: `/cloud-providers/${file}`,
      };
    });

    return NextResponse.json({ logos });
  } catch (error) {
    console.error('Error reading logos directory:', error);
    return NextResponse.json(
      { error: 'Failed to read logos directory' },
      { status: 500 }
    );
  }
} 