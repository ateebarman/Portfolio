'use client';

import { motion } from 'framer-motion';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center gap-6"
        >
          <div>
            <p className="text-slate-600 dark:text-slate-400">
              © {currentYear} Ateeb Arman. All rights reserved.
            </p>
          </div>

          <div className="flex items-center gap-4 text-sm text-slate-600 dark:text-slate-400">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              Available for opportunities
            </span>
          </div>

          <div className="text-sm text-slate-600 dark:text-slate-400">
            <p>Built with React, Next.js, and Tailwind CSS</p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
