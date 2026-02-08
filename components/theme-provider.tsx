'use client';

import { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const isDarkMode = localStorage.getItem('theme') === 'dark' ||
      (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
    setIsDark(isDarkMode);
    document.documentElement.classList.toggle('dark', isDarkMode);
  }, []);

  const toggleTheme = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    localStorage.setItem('theme', newIsDark ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', newIsDark);
  };

  if (!mounted) return children;

  return (
    <div>
      {children}
      <button
        onClick={toggleTheme}
        className="fixed bottom-8 right-8 p-3 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-900 dark:text-slate-100 shadow-lg hover:shadow-xl transition-all z-40 hover:scale-110"
        aria-label="Toggle theme"
      >
        {isDark ? <Sun size={20} /> : <Moon size={20} />}
      </button>
    </div>
  );
}
