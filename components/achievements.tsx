'use client';

import { motion } from 'framer-motion';
import { Trophy, Users, Code } from 'lucide-react';

const achievements = [
  {
    title: 'DSA Mastery',
    description: '600+ problems solved across competitive programming platforms',
    icon: Code,
    stat: '600+',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Coding Excellence',
    description: 'Secured Rank 1 in College CodeChef Monthly leaderboard',
    icon: Trophy,
    stat: 'Top 1',
    color: 'from-yellow-500 to-orange-500',
  },
  {
    title: 'Leadership',
    description: 'Co-Lead in Hospitality, managed 200+ guests at Abhisarga fest',
    icon: Users,
    stat: '200+',
    color: 'from-purple-500 to-pink-500',
  },
];

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

export function Achievements() {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Achievements & Impact</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full" />
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {achievements.map((achievement, idx) => {
            const Icon = achievement.icon;
            return (
              <motion.div
                key={idx}
                variants={item}
                className="group relative p-8 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all"
              >
                {/* Animated gradient background */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl transition-opacity duration-300" />

                <div className="relative z-10">
                  <div className={`inline-block p-4 rounded-lg bg-gradient-to-br ${achievement.color} text-white mb-4`}>
                    <Icon size={28} />
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-2">
                    {achievement.title}
                  </h3>

                  <p className="text-4xl font-bold gradient-text mb-4">
                    {achievement.stat}
                  </p>

                  <p className="text-slate-600 dark:text-slate-400">
                    {achievement.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Additional Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 p-8 rounded-xl bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 border border-slate-200 dark:border-slate-700"
        >
          <h3 className="text-2xl font-bold mb-6">Recognition & Highlights</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              'Participated in 15+ competitive programming matches at Spectra (IIIT Sri City Sports Fest)',
              'Secured 2 championships in inter-season competitions',
              'Mentored junior developers in system design and backend architecture',
              'Active contributor to college technical societies',
            ].map((highlight, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-3"
              >
                <div className="text-blue-600 dark:text-blue-400 text-xl font-bold mt-1">✓</div>
                <p className="text-slate-600 dark:text-slate-400">{highlight}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
