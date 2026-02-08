import { NextResponse } from 'next/server';
import { connectToDatabase } from '../../../lib/mongodb';

export async function POST(req: Request) {
  try {
    const data: unknown = await req.json();
    const { name, email, message } = (data as Record<string, unknown>) || {};

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const db = await connectToDatabase();
    const collection = db.collection('contacts');

    await collection.insertOne({ name, email, message, date: new Date() });

    return NextResponse.json({ ok: true });
  } catch (err: unknown) {
    console.error('Contact API error:', err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
