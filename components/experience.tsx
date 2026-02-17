'use client';

import { motion } from 'framer-motion';
import { Users, Heart, Briefcase } from 'lucide-react';

const experiences = [
  {
    title: 'SDE Intern (MERN Stack)',
    organization: 'TechTok4U Pvt Ltd',
    period: 'Jan 2025 – Mar 2025',
    description: 'Architected a modular backend system for the Instil platform, refactoring core services to improve system maintainability and multi-tenant scalability.',
    achievements: [
      'Architected a modular backend system for the Instil platform',
      'Optimized data retrieval via complex MongoDB aggregation pipelines',
      'Implemented standardized error handling and request validation',
      'Significantly reduced API response latency through indexing strategies',
    ],
    icon: Briefcase,
    color: 'from-blue-500 to-indigo-500',
  },
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
    <section id="experience" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Leadership & Experience</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full" />
        </motion.div>

        <div className="relative border-l-2 border-slate-200 dark:border-slate-700 ml-4 md:ml-8 space-y-12">
          {experiences.map((exp, idx) => {
            const Icon = exp.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: idx * 0.2 }}
                viewport={{ once: true }}
                className="relative pl-12 md:pl-16"
              >
                {/* Timeline marker */}
                <div className="absolute left-0 top-0 -translate-x-1/2">
                  <div className={`w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br ${exp.color} flex items-center justify-center text-white shadow-lg z-10`}>
                    <Icon size={24} />
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                        {exp.title}
                      </h3>
                      <p className="text-lg font-medium text-blue-600 dark:text-blue-400">
                        {exp.organization}
                      </p>
                    </div>
                    <span className="px-4 py-1 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400 text-sm font-semibold whitespace-nowrap">
                      {exp.period}
                    </span>
                  </div>

                  <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="grid md:grid-cols-2 gap-4">
                    {exp.achievements.map((achievement, aIdx) => (
                      <div key={aIdx} className="flex items-start gap-3">
                        <Heart size={14} className="text-pink-500 mt-1 flex-shrink-0" />
                        <span className="text-sm text-slate-600 dark:text-slate-400 leading-tight">
                          {achievement}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
