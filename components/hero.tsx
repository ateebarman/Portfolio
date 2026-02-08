"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";

export function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen pt-32 pb-20 flex items-center justify-center"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800"
          >
            <p className="text-sm font-medium text-blue-600 dark:text-blue-400">
              Aspiring Software Development Engineer • Backend• DSA Oriented
            </p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-7xl font-bold leading-tight"
          >
            Hey, I'm <span className="gradient-text">Ateeb Arman</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed"
          >
            I am a Aspiring Software Development Engineer who builds robust, scalable,
            high-performance systems with a focus on backend architecture and
            clean code. Currently pursuing a B.Tech in Computer Science (Class
            of 2026) at{" "}
            <span className="font-semibold text-slate-900 dark:text-slate-100">
              IIIT Sri City
            </span>
            .
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-lg text-slate-500 dark:text-slate-500 max-w-2xl"
          >
            I have experience building RESTful APIs, authentication and
            authorization systems, real-time services, and data-driven
            applications using Node.js, Express, MongoDB, and React. I have a strong
            foundations in DSA, Operating Systems, DBMS, and Computer Networks,
            and hands-on experience with production-grade projects. Actively
            seeking SDE – Backend or backend-focused Full-Stack roles and open
            to learning new technologies as required.{" "}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap gap-4 pt-8"
          >
            <button
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-8 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold flex items-center gap-2 transition-all hover:gap-3"
            >
              View Projects <ArrowRight size={20} />
            </button>

            <a
              href="/api/resume"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 rounded-lg border-2 border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 hover:bg-slate-50 dark:hover:bg-slate-900 font-semibold flex items-center gap-2 transition-all"
            >
              Download Resume <Download size={20} />
            </a>

            <button
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-8 py-3 rounded-lg text-slate-900 dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800 font-semibold transition-all"
            >
              Let's Talk
            </button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
      </div>
    </section>
  );
}
