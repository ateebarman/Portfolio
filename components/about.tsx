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
    <section id="about" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left Column - Education & Background (takes 7 columns) */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="lg:col-span-7 space-y-6"
          >
            <motion.div variants={item} className="p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-blue-500/50 transition-colors shadow-sm">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                  <BookOpen size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1 text-slate-900 dark:text-slate-100">Education</h3>
                  <p className="text-slate-600 dark:text-slate-400 font-semibold text-lg">
                    Indian Institute of Information Technology, Sri City
                  </p>
                  <p className="text-slate-500 dark:text-slate-500">
                    B.Tech in Computer Science and Engineering (2022 - 2026)
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={item} className="p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-purple-500/50 transition-colors shadow-sm">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400">
                  <Code size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-slate-100">Technical Focus</h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-3 leading-relaxed">
                    Building robust backend systems and high-performance real-time applications.
                  </p>
                  <div className="flex flex-wrap gap-2 text-xs">
                    {['Real-time Systems', 'DB Optimization', 'RESTful Arch', 'Security Patterns', 'Cloud Infrastructure'].map((tag) => (
                      <span key={tag} className="px-2 py-1 rounded bg-slate-100 dark:bg-slate-700/50 text-slate-500 dark:text-slate-400">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={item} className="p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400">
                  <Zap size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-slate-100">Philosophy</h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    I believe in writing code that is as performant as it is readable. Strong fundamentals in DSA and architecture allow me to build solutions that scale seamlessly under heavy load.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Stats & Highlights (takes 5 columns) */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-4"
          >
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                variants={item}
                className="p-5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-center"
              >
                <h4 className="text-3xl font-bold gradient-text mb-1">600+</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider font-bold">DSA Solved</p>
              </motion.div>

              <motion.div
                variants={item}
                className="p-5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-center"
              >
                <h4 className="text-3xl font-bold gradient-text mb-1">6x Rank 1</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider font-bold">Code360 Leader</p>
              </motion.div>
            </div>

            <motion.div
              variants={item}
              className="p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm"
            >
              <h4 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-4 flex items-center gap-2">
                <Zap size={18} className="text-yellow-500" />
                Core Strengths
              </h4>
              <ul className="space-y-3">
                {[
                  'Clean Backend Systems (Node.js, Express)',
                  'Complex DB Queries (Aggregation, Indexing)',
                  'Real-time Comm (WebSockets, WebRTC)',
                  'Security (JWT, RBAC, OAuth2)',
                ].map((strength) => (
                  <li key={strength} className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                    {strength}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              variants={item}
              className="p-6 rounded-2xl bg-slate-900 text-white border border-slate-800 shadow-xl"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-slate-400 text-xs uppercase tracking-widest font-bold">Status</span>
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              </div>
              <p className="text-sm font-medium">Currently building at TechTok4U</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
