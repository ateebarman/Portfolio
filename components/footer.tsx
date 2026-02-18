'use client';

import { motion } from 'framer-motion';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-16 bg-white dark:bg-[#0a0a0a] border-t border-slate-200 dark:border-slate-800 relative z-10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="text-2xl font-black bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 tracking-tighter">
              ATEEB.
            </div>
            <p className="text-slate-500 dark:text-slate-500 text-sm font-medium max-w-xs text-center md:text-left">
              Crafting high-performance backend systems and elegant digital experiences.
            </p>
          </div>

          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-3 px-5 py-2 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-ping" />
              <span className="text-sm font-bold text-slate-600 dark:text-slate-400">Available for immediate hiring</span>
            </div>
            <div className="text-slate-400 dark:text-slate-600 text-sm font-bold flex items-center gap-4">
              <a href="https://github.com/ateebarman" target="_blank" className="hover:text-blue-500 transition-colors">GitHub</a>
              <a href="https://linkedin.com/in/ateeb-arman-42019a254/" target="_blank" className="hover:text-blue-500 transition-colors">LinkedIn</a>
              <a href="mailto:ateeb.a220@iiits.in" className="hover:text-blue-500 transition-colors">Contact</a>
            </div>
          </div>

          <div className="text-center md:text-right">
            <p className="text-slate-500 dark:text-slate-500 text-sm font-bold mb-1">
              © {currentYear} Ateeb Arman
            </p>
            <p className="text-slate-400 dark:text-slate-600 text-xs font-black uppercase tracking-widest">
              Design Excellence &bull; Ported to IIITS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
