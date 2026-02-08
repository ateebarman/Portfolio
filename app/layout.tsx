import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Ateeb Arman - Full-Stack Developer',
  description: 'Full-Stack Developer | Backend-Heavy | Systems & DSA Oriented. Building scalable systems with React, Node.js, and modern cloud architecture.',
  keywords: 'developer, portfolio, React, Node.js, backend, systems design',
  authors: [{ name: 'Ateeb Arman' }],
  openGraph: {
    title: 'Ateeb Arman - Full-Stack Developer',
    description: 'Full-Stack Developer | Backend-Heavy | Systems & DSA Oriented',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
