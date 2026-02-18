'use client';

import { motion } from 'framer-motion';
import { Trophy, Users, Code } from 'lucide-react';

const achievements = [
  {
    title: 'Data Structures & Algorithms',
    description: 'Solved 600+ problems across LeetCode, GeeksforGeeks, and Code360',
    icon: Code,
    stat: '600+',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'College Rank 1',
    description: 'Secured first position 6 times in the monthly college Code360 coding leaderboard',
    icon: Trophy,
    stat: '6x Rank 1',
    color: 'from-yellow-500 to-orange-500',
  },
  {
    title: 'Leadership',
    description: 'Served as Co-Lead for Hospitality at Abhisarga (College Fest), managing logistics for 200+ guests',
    icon: Users,
    stat: '200+ Guests',
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
    <section className="py-24 relative overflow-hidden bg-white dark:bg-[#060606]">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="text-blue-600 dark:text-blue-400 font-black uppercase tracking-[0.3em] text-[10px] mb-3">Milestones & Impact</p>
          <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tighter text-slate-900 dark:text-white leading-tight">
            RECOGNITION <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 animate-gradient">& IMPACT</span>
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 rounded-full mx-auto" />
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
                whileHover={{ y: -5 }}
                className="advanced-card p-0.5 rounded-[2rem] transition-all duration-300 group"
              >
                <div className="bg-white dark:bg-slate-950 p-8 rounded-[1.9rem] h-full relative overflow-hidden">
                  <div className="relative z-10">
                    <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${achievement.color} text-white mb-6 shadow-xl transition-transform duration-500`}>
                      <Icon size={24} />
                    </div>

                    <h3 className="text-[9px] font-black text-slate-400 uppercase tracking-[0.3em] mb-3">
                      {achievement.title}
                    </h3>

                    <p className="text-3xl font-black text-slate-900 dark:text-white mb-4 tracking-tighter">
                      {achievement.stat}
                    </p>

                    <p className="text-slate-500 dark:text-slate-400 font-medium leading-relaxed text-sm">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Recognition & Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="mt-24 p-12 rounded-[3rem] bg-slate-950 border border-slate-900 shadow-2xl relative overflow-hidden group"
        >
          <div className="relative z-10">
            <h3 className="text-2xl font-black text-white mb-10 uppercase tracking-tighter">
              Additional <span className="text-blue-500">Highlights</span>
            </h3>
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
              {[
                'Competed in three seasons of Spectra (IIITS), participating in 15+ matches',
                'Secured two championships in inter-season competitions at Spectra',
                'Coordinated a team of 15+ volunteers for Abhisarga hospitality',
                'Managed guest accommodations and logistics for 200+ festival attendees',
              ].map((highlight, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-4 group/li"
                >
                  <div className="w-8 h-8 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover/li:bg-blue-600 transition-all">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 group-hover/li:bg-white" />
                  </div>
                  <p className="text-slate-400 group-hover/li:text-white transition-colors text-sm font-medium leading-relaxed">
                    {highlight}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
