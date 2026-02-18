'use client';

import { motion } from 'framer-motion';
import { Users, Heart } from 'lucide-react';

const experiences = [
  {
    title: 'Co-Lead, Hospitality',
    organization: 'Abhisarga (College Fest)',
    period: '2024 - 2025',
    description: 'Served as Co-Lead in Hospitality for Abhisarga, managing logistics for 200+ guests and coordinating a team of 15+ volunteers.',
    achievements: [
      'Managed logistics and guest coordination for 200+ guests',
      'Coordinated a team of 15+ volunteers for seamless execution',
      'Handled accommodation and hospitality for festival attendees',
      'Ensured high-quality guest experience through efficient planning',
    ],
    icon: Users,
    color: 'from-purple-500 to-pink-500',
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-white dark:bg-[#060606]">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-blue-600 dark:text-blue-400 font-black uppercase tracking-[0.3em] text-[10px] mb-3">Professional Path</p>
          <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tighter text-slate-900 dark:text-white leading-tight">
            LEADERSHIP <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 animate-gradient">& EXPERIENCE</span>
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 rounded-full" />
        </motion.div>

        <div className="relative space-y-12 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-200 dark:before:via-slate-800 before:to-transparent">
          {experiences.map((exp, idx) => {
            const Icon = exp.icon;
            return (
              <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                {/* Dot marker */}
                <div className="flex items-center justify-center w-8 h-8 rounded-full border border-white dark:border-slate-800 bg-slate-50 dark:bg-slate-900 text-blue-600 shadow-lg z-10 absolute left-0 md:left-1/2 md:-translate-x-1/2 transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white">
                  <Icon size={16} />
                </div>

                {/* Card */}
                <motion.div
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="w-[calc(100%-3rem)] md:w-[calc(50%-3rem)]"
                >
                  <div className="advanced-card p-0.5 rounded-[2rem]">
                    <div className="bg-white dark:bg-slate-950 rounded-[1.9rem] p-8 group-hover:bg-slate-50 dark:group-hover:bg-slate-900/50 transition-colors">
                      <div className="flex flex-col gap-4 mb-5">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                          <div>
                            <h3 className="text-xl font-black text-slate-900 dark:text-white tracking-tight leading-none mb-1">
                              {exp.title}
                            </h3>
                            <p className="text-sm font-bold text-blue-600 dark:text-blue-400">
                              {exp.organization}
                            </p>
                          </div>
                          <span className="px-3 py-1 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-500 dark:text-slate-400 text-[10px] font-black uppercase tracking-widest border border-slate-200 dark:border-slate-800 whitespace-nowrap">
                            {exp.period}
                          </span>
                        </div>
                      </div>

                      <p className="text-slate-500 dark:text-slate-400 mb-6 leading-relaxed text-sm font-medium">
                        {exp.description}
                      </p>

                      <div className="space-y-3">
                        {exp.achievements.map((achievement, aIdx) => (
                          <div key={aIdx} className="flex items-start gap-3 group/item">
                            <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-pink-500 flex-shrink-0 group-hover/item:scale-125 transition-transform" />
                            <span className="text-xs text-slate-600 dark:text-slate-400 leading-snug font-bold">
                              {achievement}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
