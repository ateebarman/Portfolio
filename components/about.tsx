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
    <section id="about" className="py-20 bg-slate-50 dark:bg-slate-900/50">
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

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Column - Education & Background */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.div variants={item} className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                  <BookOpen size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Education</h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    <strong>
                      Indian Institute of Information Technology, Sri City
                    </strong>
                  </p>
                  <p className="text-slate-500 dark:text-slate-500 text-sm">
                    B.Tech in Computer Science and Engineering (2022 - 2026)
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={item} className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400">
                  <Code size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Technical Focus</h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-2">
                    Backend systems, scalable architecture, and performance
                    optimization
                  </p>
                  <ul className="text-sm text-slate-500 dark:text-slate-500 space-y-1">
                    <li>• Real-time communication systems</li>
                    <li>• Database optimization & caching strategies</li>
                    <li>• RESTful API design & MVC architecture</li>
                    <li>• Security & authentication patterns</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            <motion.div variants={item} className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400">
                  <Zap size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Philosophy</h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    Writing clean, maintainable code with strong fundamentals in
                    data structures and algorithms. I believe in building
                    solutions that scale, perform well under load, and
                    prioritize user experience.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Stats & Highlights */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.div
              variants={item}
              className="p-6 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow"
            >
              <h4 className="text-3xl font-bold gradient-text mb-2">600+</h4>
              <p className="text-slate-600 dark:text-slate-400">
                Data Structures & Algorithms Problems Solved
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-500 mt-2">
                Across LeetCode, GeeksforGeeks, and CodeChef
              </p>
            </motion.div>

            <motion.div
              variants={item}
              className="p-6 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow"
            >
              <h4 className="text-3xl font-bold gradient-text mb-2">Top 1</h4>
              <p className="text-slate-600 dark:text-slate-400">
                College Rank in Code360 Monthly
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-500 mt-2">
                Competitive programming excellence
              </p>
            </motion.div>

            <motion.div
              variants={item}
              className="p-6 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow"
            >
              <h4 className="text-3xl font-bold gradient-text mb-2">200+</h4>
              <p className="text-slate-600 dark:text-slate-400">
                Guests Managed as Co-Lead
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-500 mt-2">
                Hospitality at Abhisarga - College Fest
              </p>
            </motion.div>

            <motion.div
              variants={item}
              className="p-6 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow"
            >
              <h4 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-3">
                Core Strengths
              </h4>
              <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 dark:text-blue-400 mt-1">
                    •
                  </span>
                  <span>
                    Backend API Design (REST, MVC, Clean Architecture)
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 dark:text-blue-400 mt-1">
                    •
                  </span>
                  <span>Authentication, Authorization & Security Patterns</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 dark:text-blue-400 mt-1">
                    •
                  </span>
                  <span>Database Design, Indexing & Query Optimization</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 dark:text-blue-400 mt-1">
                    •
                  </span>
                  <span>
                    Scalable & Real-time Systems (WebSockets, Caching)
                  </span>
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
