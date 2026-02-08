'use client';

import { motion } from 'framer-motion';
import { Users, Heart } from 'lucide-react';

const experiences = [
  {
    title: 'Co-Lead, Hospitality',
    organization: 'Abhisarga (College Fest)',
    period: '2024 - 2025',
    description: 'Managed logistics and guest coordination for 200+ attendees at the annual cultural festival. Led a team of 15+ volunteers to ensure seamless event execution.',
    achievements: [
      'Coordinated 200+ guest accommodations and logistics',
      'Managed a team of 15+ volunteers',
      'Ensured smooth event execution and positive attendee experience',
      'Developed processes for future fest coordination',
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

        <div className="space-y-8">
          {experiences.map((exp, idx) => {
            const Icon = exp.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: idx * 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Timeline marker */}
                <div className="absolute left-0 md:left-1/2 md:transform md:-translate-x-1/2 -translate-y-1/2 top-8">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${exp.color} flex items-center justify-center text-white shadow-lg`}>
                    <Icon size={28} />
                  </div>
                </div>

                {/* Content */}
                <div className={`md:w-1/2 ${idx % 2 === 0 ? 'md:ml-auto md:pl-8' : 'md:mr-auto md:pr-8'} ml-24 md:ml-0`}>
                  <div className="p-8 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                          {exp.title}
                        </h3>
                        <p className="text-lg text-slate-600 dark:text-slate-400">
                          {exp.organization}
                        </p>
                      </div>
                    </div>

                    <p className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-3">
                      {exp.period}
                    </p>

                    <p className="text-slate-600 dark:text-slate-400 mb-4">
                      {exp.description}
                    </p>

                    <div className="pl-4 border-l-2 border-slate-300 dark:border-slate-600">
                      <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Key Achievements</p>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, aIdx) => (
                          <li key={aIdx} className="text-sm text-slate-600 dark:text-slate-400 flex items-start gap-2">
                            <Heart size={14} className="text-pink-500 mt-1 flex-shrink-0" />
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
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
