"use client";

import { useState, useEffect } from 'react';

export default function AdminPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [messages, setMessages] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchMessages = async () => {
    setLoading(true);
    const res = await fetch('/api/admin/messages', { credentials: 'include' });
    if (res.ok) {
      const data = await res.json();
      setMessages(data.messages || []);
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
    setLoading(false);
  };

  useEffect(() => {
    // Try to fetch messages on mount to detect existing session
    fetchMessages();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const res = await fetch('/api/admin/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
      credentials: 'include',
    });

    if (res.ok) {
      await fetchMessages();
    } else {
      alert('Invalid credentials');
    }
    setLoading(false);
  };

  const handleLogout = async () => {
    await fetch('/api/admin/logout', { method: 'POST', credentials: 'include' });
    setLoggedIn(false);
    setMessages([]);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900/50 py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Admin — Messages</h1>

        {!loggedIn ? (
          <form onSubmit={handleLogin} className="space-y-4 max-w-md">
            <div>
              <label className="block text-sm font-medium mb-1">Username</label>
              <input value={username} onChange={(e) => setUsername(e.target.value)} className="w-full px-3 py-2 rounded bg-white dark:bg-slate-800 border" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Password</label>
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full px-3 py-2 rounded bg-white dark:bg-slate-800 border" />
            </div>
            <div>
              <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded" disabled={loading}>
                {loading ? 'Signing in…' : 'Sign in'}
              </button>
            </div>
          </form>
        ) : (
          <div>
            <div className="flex items-center justify-between mb-6">
              <div className="text-sm text-slate-500">Signed in as <strong>{username || 'admin'}</strong></div>
              <div>
                <button onClick={handleLogout} className="px-3 py-2 bg-red-600 text-white rounded">Logout</button>
              </div>
            </div>

            {loading ? (
              <div>Loading messages…</div>
            ) : messages.length === 0 ? (
              <div className="text-slate-500">No messages yet.</div>
            ) : (
              <div className="space-y-4">
                {messages.map((m) => (
                  <div key={m._id} className="p-4 rounded bg-white dark:bg-slate-800 border">
                    <div className="flex items-center justify-between mb-2">
                      <div className="text-sm font-semibold">{m.name} &lt;{m.email}&gt;</div>
                      <div className="text-xs text-slate-500">{new Date(m.date).toLocaleString()}</div>
                    </div>
                    <div className="text-slate-700 dark:text-slate-200 whitespace-pre-wrap">{m.message}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
