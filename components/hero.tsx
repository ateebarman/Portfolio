"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";

export function Hero() {
  return (
    <section
      id="home"
      className="min-h-[90vh] relative flex items-center justify-center overflow-hidden bg-white dark:bg-[#060606]"
    >
      {/* Static Optimized Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute -top-[10%] -right-[10%] w-[800px] h-[800px] rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.1)_0%,transparent_70%)] opacity-40"
        />
        <div
          className="absolute -bottom-[10%] -left-[10%] w-[800px] h-[800px] rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.1)_0%,transparent_70%)] opacity-40"
        />
      </div>

      <div className="max-w-5xl mx-auto px-6 sm:px-8 w-full relative z-10">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 backdrop-blur-sm mb-10"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <p className="text-[10px] font-black tracking-[0.2em] text-slate-500 uppercase">
              Available for Strategic Roles
            </p>
          </motion.div>

          <div className="space-y-6 mb-10">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-tight text-slate-900 dark:text-white"
            >
              ATEEB <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-500 pb-1">
                ARMAN
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col md:flex-row items-center justify-center gap-3 text-base md:text-lg font-bold text-slate-500"
            >
              <span className="px-3 py-1 rounded-lg border border-slate-200 dark:border-white/10 bg-white/5 backdrop-blur-sm">Software Development Engineer</span>
              <div className="hidden md:block w-1.5 h-1.5 rounded-full bg-blue-600" />
              <span className="text-blue-600 dark:text-blue-400 font-bold uppercase tracking-wide">IIIT Sri City &bull; 2026</span>
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="text-base md:text-lg text-slate-500 dark:text-slate-400 max-w-xl leading-relaxed italic mb-12"
          >
            Engaging in the alchemy of code to build <span className="text-slate-900 dark:text-white font-black not-italic">high-performance backend architectures</span>{" "}
            and resilient distributed systems.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-wrap items-center justify-center gap-5"
          >
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              className="px-8 py-4 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold uppercase tracking-widest text-xs flex items-center gap-3 shadow-xl transition-all"
            >
              Explore Portfolio <ArrowRight size={18} />
            </motion.button>

            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="/api/resume"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-xl border-2 border-slate-200 dark:border-white/10 text-slate-900 dark:text-white font-bold uppercase tracking-widest text-xs flex items-center gap-3 backdrop-blur-sm hover:bg-slate-50 dark:hover:bg-white/5 transition-all"
            >
              Resume <Download size={18} />
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Modern Tech Marquee/Strip */}
      <div className="absolute bottom-12 w-full flex justify-center opacity-30 group">
        <div className="flex gap-12 text-slate-400 font-black uppercase tracking-[0.5em] text-[10px] animate-pulse">
          <span>Scalability</span>
          <span>&bull;</span>
          <span>Efficiency</span>
          <span>&bull;</span>
          <span>Reliability</span>
        </div>
      </div>
    </section>
  );
}
