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
    <section id="skills" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="p-6 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow"
            >
              <div className={`inline-block px-3 py-1 rounded-full bg-gradient-to-r ${category.color} text-white text-xs font-semibold mb-4`}>
                {category.title}
              </div>

              <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="flex flex-wrap gap-2"
              >
                {category.skills.map((skill, skillIdx) => (
                  <motion.span
                    key={skillIdx}
                    variants={item}
                    className="px-3 py-2 rounded-lg bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-slate-200 text-sm font-medium hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Proficiency Matrix */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 p-8 rounded-xl bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 border border-slate-200 dark:border-slate-700"
        >
          <h3 className="text-2xl font-bold mb-8">Proficiency Level</h3>
          <div className="space-y-6">
            {[
              { name: 'Backend Development (Node.js, Express)', level: 90 },
              { name: 'Frontend Development (React)', level: 85 },
              { name: 'Database Design & Optimization', level: 85 },
              { name: 'System Design & Architecture', level: 80 },
              { name: 'Data Structures & Algorithms', level: 95 },
            ].map((skill, idx) => (
              <div key={idx}>
                <div className="flex justify-between mb-2">
                  <p className="font-medium text-slate-800 dark:text-slate-200">{skill.name}</p>
                  <p className="text-sm font-semibold text-blue-600 dark:text-blue-400">{skill.level}%</p>
                </div>
                <div className="w-full bg-slate-300 dark:bg-slate-700 rounded-full h-2 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
