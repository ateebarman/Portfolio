"use client";

import { motion } from "framer-motion";
import { BookOpen, Code, Zap } from "lucide-react";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function About() {
  return (
    <section id="about" className="py-24 bg-white dark:bg-[#060606] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-blue-600 dark:text-blue-400 font-black uppercase tracking-[0.3em] text-[10px] mb-3">Identity & Core</p>
          <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tighter text-slate-900 dark:text-white leading-tight">
            THE <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 animate-gradient">ARCHITECT</span>
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Main Info */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="lg:col-span-7 space-y-8"
          >
            <motion.div variants={item} className="advanced-card group p-8 rounded-[2rem] transition-all duration-300">
              <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                <BookOpen size={80} />
              </div>
              <div className="flex items-start gap-6 relative z-10">
                <div className="p-4 rounded-2xl bg-blue-600 text-white shadow-xl">
                  <BookOpen size={24} />
                </div>
                <div>
                  <h3 className="text-[9px] font-black uppercase tracking-[0.4em] mb-3 text-blue-500">Academic Foundation</h3>
                  <p className="text-slate-900 dark:text-white font-black text-xl leading-none mb-1">
                    IIIT Sri City
                  </p>
                  <p className="text-base text-slate-500 font-bold italic">
                    B.Tech in CSE &bull; Class of 2026
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={item} className="advanced-card group p-8 rounded-[2rem] transition-all duration-300">
              <div className="flex items-start gap-6">
                <div className="p-4 rounded-2xl bg-purple-600 text-white shadow-xl">
                  <Code size={24} />
                </div>
                <div>
                  <h3 className="text-[9px] font-black uppercase tracking-[0.4em] mb-3 text-purple-500">Domain Expertise</h3>
                  <p className="text-slate-500 dark:text-slate-400 mb-6 leading-relaxed text-sm font-bold">
                    Specializing in <span className="text-slate-900 dark:text-white">high-performance backend architectures</span>{" "}
                    and distributed systems. Focusing on building resilient, secure, and lightning-fast services.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['Distributed Systems', 'DB Optimization', 'Cloud Infra', 'API Security'].map((tag) => (
                      <span key={tag} className="px-3.5 py-1.5 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 text-[9px] font-black uppercase tracking-widest border border-slate-200 dark:border-slate-800 transition-colors">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={item} className="advanced-card group p-8 rounded-[2rem] transition-all duration-300">
              <div className="flex items-start gap-6">
                <div className="p-4 rounded-2xl bg-pink-600 text-white shadow-xl">
                  <Zap size={24} />
                </div>
                <div>
                  <h3 className="text-[9px] font-black uppercase tracking-[0.4em] mb-3 text-pink-500">Philosophy</h3>
                  <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-base font-black italic">
                    &quot;Code is read more often than it is written. I strive for architectural elegance and
                    implementation clarity without compromising on system throughput.&quot;
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Stats & Highlights */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-8"
          >
            <div className="grid grid-cols-2 gap-6">
              <motion.div
                variants={item}
                whileHover={{ y: -5 }}
                className="advanced-card p-8 rounded-[2rem] text-center group"
              >
                <div className="text-4xl font-black text-slate-900 dark:text-white mb-1 group-hover:scale-110 transition-transform">600+</div>
                <p className="text-[9px] text-blue-500 uppercase tracking-[0.3em] font-black">DSA Solved</p>
              </motion.div>

              <motion.div
                variants={item}
                whileHover={{ y: -5 }}
                className="advanced-card p-8 rounded-[2rem] text-center group"
              >
                <div className="text-4xl font-black text-slate-900 dark:text-white mb-1 group-hover:scale-110 transition-transform">#1</div>
                <p className="text-[9px] text-purple-500 uppercase tracking-[0.3em] font-black">Leaderboard</p>
              </motion.div>
            </div>

            <motion.div
              variants={item}
              className="p-8 rounded-[2.5rem] bg-slate-950 border border-slate-900 text-white shadow-2xl relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-6">
                <div className="w-2 h-2 rounded-full bg-green-500 opacity-60" />
              </div>
              <h4 className="text-xl font-black text-white mb-8 flex items-center gap-3 uppercase tracking-tighter">
                <div className="w-10 h-1 bg-blue-600 rounded-full" />
                Specializations
              </h4>
              <ul className="space-y-4">
                {[
                  { label: 'System Design', color: 'bg-blue-500' },
                  { label: 'Database Architecture', color: 'bg-purple-500' },
                  { label: 'Cloud-Native Engineering', color: 'bg-pink-500' },
                  { label: 'Distributed Systems', color: 'bg-green-500' },
                ].map((item) => (
                  <li key={item.label} className="flex items-center gap-4 group/li">
                    <div className={`w-2 h-2 rounded-full ${item.color} group-hover/li:scale-125 transition-transform`} />
                    <span className="text-sm font-black text-slate-400 group-hover/li:text-white transition-colors uppercase tracking-widest">{item.label}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              variants={item}
              className="p-8 rounded-[2rem] border-2 border-dashed border-slate-200 dark:border-slate-800 flex flex-col items-center justify-center text-center space-y-2 opacity-60"
            >
              <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.4em]">Status</p>
              <p className="text-slate-900 dark:text-white font-black text-xl tracking-tighter uppercase">SDE Intern hunting 🎯</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
