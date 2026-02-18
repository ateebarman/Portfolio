'use client';

import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: 'Languages',
    skills: ['C++', 'Python', 'JavaScript', 'TypeScript'],
    color: 'from-red-500 to-orange-500',
  },
  {
    title: 'Core Subjects',
    skills: ['Data Structures & Algorithms', 'DBMS', 'Operating Systems', 'OOPs', 'Computer Networks'],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Web Frameworks',
    skills: ['React.js', 'Node.js', 'Express.js', 'TailwindCSS'],
    color: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Databases',
    skills: ['MySQL', 'MongoDB', 'Redis'],
    color: 'from-green-500 to-emerald-500',
  },
  {
    title: 'Tools',
    skills: ['Git', 'GitHub', 'Postman', 'Linux'],
    color: 'from-yellow-500 to-orange-500',
  },
  {
    title: 'Security & Architecture',
    skills: ['JWT', 'CORS', 'RESTful Architecture', 'MVC Pattern', 'RBAC'],
    color: 'from-indigo-500 to-purple-500',
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, scale: 0.9 },
  show: { opacity: 1, scale: 1 },
};

export function Skills() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-white dark:bg-[#060606]">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="text-blue-600 dark:text-blue-400 font-black uppercase tracking-[0.3em] text-[10px] mb-3">Technical Stack</p>
          <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tighter text-slate-900 dark:text-white leading-tight">
            EXPERTISE <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 animate-gradient">& ARSENAL</span>
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 rounded-full mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="advanced-card p-8 rounded-[2rem] transition-all duration-300 group"
            >
              <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-xl bg-gradient-to-r ${category.color} text-white text-[9px] font-black uppercase tracking-widest mb-6 shadow-xl`}>
                <div className="w-1.5 h-1.5 rounded-full bg-white opacity-80" />
                {category.title}
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIdx) => (
                  <span
                    key={skillIdx}
                    className="px-4 py-2 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 text-[10px] font-black uppercase tracking-widest border border-slate-200 dark:border-slate-800 transition-all"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Proficiency Matrix */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="mt-24 p-12 rounded-[3rem] bg-slate-950 border border-slate-900 shadow-2xl relative overflow-hidden group"
        >
          {/* Decorative Elements */}
          <div className="absolute inset-0 opacity-40 pointer-events-none">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(59,130,246,0.06)_0%,transparent_70%)]" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(139,92,246,0.06)_0%,transparent_70%)]" />
          </div>

          <div className="relative z-10">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
              <h3 className="text-3xl md:text-3xl font-black text-white tracking-tighter uppercase leading-none">
                Core <br />
                <span className="text-blue-500">Proficiency</span>
              </h3>
              <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
                <p className="text-[9px] font-black uppercase tracking-[0.4em] text-slate-500">Benchmark Data</p>
                <p className="text-white text-xs font-bold leading-none">Standard Performance Index</p>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-x-12 gap-y-8">
              {[
                { name: 'Backend Systems (Node.js)', level: 95 },
                { name: 'Data Structures & Algorithms', level: 98 },
                { name: 'Database Architecture', level: 90 },
                { name: 'Frontend Engineering (React)', level: 85 },
                { name: 'Scalability & Performance', level: 88 },
                { name: 'System Security', level: 82 },
              ].map((skill, idx) => (
                <div key={idx} className="space-y-3 group/skill">
                  <div className="flex justify-between items-end">
                    <p className="font-black text-slate-100 text-sm uppercase tracking-widest">{skill.name}</p>
                    <p className="text-xl font-black text-blue-500 font-mono tracking-tighter transition-transform">{skill.level}%</p>
                  </div>
                  <div className="w-full bg-slate-900 rounded-full h-3 overflow-hidden p-0.5 border border-slate-800 transition-all group-hover/skill:border-blue-500/30">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1.2, ease: "easeOut", delay: idx * 0.05 }}
                      viewport={{ once: true }}
                      style={{ willChange: 'width' }}
                      className="h-full rounded-full bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 relative overflow-hidden"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
