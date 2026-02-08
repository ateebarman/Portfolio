import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import { connectToDatabase } from '../../../../lib/mongodb';

export const dynamic = 'force-dynamic';

export async function GET(req: NextRequest) {
  try {
    const token = req.cookies.get('admin_token')?.value;
    const jwtSecret = process.env.JWT_SECRET;

    if (!token || !jwtSecret) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

    try {
      jwt.verify(token, jwtSecret as string);
    } catch (e) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const db = await connectToDatabase();
    const collection = db.collection('contacts');
    const messages = await collection.find().sort({ date: -1 }).toArray();

    return NextResponse.json({ messages });
  } catch (err: unknown) {
    console.error('Fetch messages error:', err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
