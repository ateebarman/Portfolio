import { NextResponse } from 'next/server';
import path from 'path';
import { promises as fs } from 'fs';

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), 'ateeb-arman.pdf');
    const data = await fs.readFile(filePath);

    return new NextResponse(data, {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="Ateeb_Arman_Resume.pdf"',
        'Cache-Control': 'public, max-age=31536000, immutable',
      },
    });
  } catch (err) {
    console.error('Resume download error:', err);
    return NextResponse.json({ error: 'Resume not found' }, { status: 404 });
  }
}
