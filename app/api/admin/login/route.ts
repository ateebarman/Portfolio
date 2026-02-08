import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { connectToDatabase } from '../../../../lib/mongodb';

export async function POST(req: NextRequest) {
  try {
    const { username, password } = await req.json();

    const jwtSecret = process.env.JWT_SECRET;
    if (!jwtSecret) {
      return NextResponse.json({ error: 'Server not configured' }, { status: 500 });
    }

    const db = await connectToDatabase();
    const admins = db.collection('admin_users');

    let admin = await admins.findOne({ username });

    // If admin user doesn't exist yet, allow bootstrapping from env vars
    if (!admin) {
      const envUser = process.env.ADMIN_USER;
      const envPass = process.env.ADMIN_PASS;
      if (envUser && envPass && username === envUser && password === envPass) {
        const hash = await bcrypt.hash(envPass, 10);
        await admins.insertOne({ username: envUser, password: hash, createdAt: new Date() });
        admin = await admins.findOne({ username: envUser });
      } else {
        return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
      }
    }

    if (!admin) {
      return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
    }

    const match = await bcrypt.compare(password, admin.password);
    if (!match) {
      return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
    }

    const token = jwt.sign({ user: username }, jwtSecret, { expiresIn: '2h' });
    const res = NextResponse.json({ ok: true });
    res.cookies.set('admin_token', token, { httpOnly: true, path: '/', maxAge: 60 * 60 * 2 });
    return res;
  } catch (err) {
    console.error('Admin login error:', err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
