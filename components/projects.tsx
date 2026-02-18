'use client';

import { motion } from 'framer-motion';
import { Github, ExternalLink, Zap, Cpu, Network } from 'lucide-react';

const projects = [
  {
    title: 'LearnSphere AI',
    description: 'Next-generation learning platform leveraging Gemini and Groq AI to generate personalized roadmaps, RAG-driven curriculum from PDFs, and a gamified Skill Tree.',
    tech: ['React 18', 'Node.js', 'Express', 'MongoDB', 'Gemini 2.0', 'Groq (Llama-3)', 'Monaco Editor', 'Judge0'],
    highlights: [
      'Personalized AI Roadmap Generation via Gemini 1.5',
      'RAG-Enabled Roadmaps for PDF-to-Curriculum generation',
      'Integrated Coding Arena with real-time compilation via Judge0',
      'Dynamic AI Quiz Assessment System based on learning modules',
      'Gamified Learning Analytics with a dynamic Skill Tree',
      'AI Tutor Chat with streaming support using Groq Cloud',
    ],
    focus: ['AI Integration', 'Real-time Processing', 'Scalability'],
    github: 'https://github.com/ateebarman/LearnSphere-AI',
    demo: 'https://learn-sphere-ai-36no.vercel.app/',
    icon: '🚀',
  },
  {
    title: 'RecoSense',
    description: 'Architected a hybrid recommendation engine combining review-level signals and user interaction data to generate personalized top-N recommendations.',
    tech: ['Node.js', 'Express.js', 'MongoDB', 'Python (LightFM)', 'React'],
    highlights: [
      'Architected a hybrid recommendation engine with review-level signals',
      'Engineered high-performance pipeline with Node.js inference',
      'Python LightFM fallback for cold-start scenarios',
      'Counter-based trigger mechanism for automatic model retraining',
      'Built admin dashboard to monitor system health and inspect logs',
    ],
    focus: ['Performance', 'Scalability', 'Real-time Processing'],
    github: 'https://github.com/ateebarman/RecoSense',
    demo: 'https://reco-sense.vercel.app/',
    icon: '🎯',
  },
  {
    title: 'DriveSphere',
    description: 'Developed a scalable car rental platform featuring Role-Based Access Control (RBAC) for admins and users, securing routes via JWT authentication.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Redis', 'Multer', 'Swagger UI'],
    highlights: [
      'Role-Based Access Control (RBAC) for admins and users',
      'Optimized database performance using Redis caching',
      'Designed RESTful APIs adhering to MVC architecture',
      'Integrated Multer for secure image uploads and storage',
      'Documented API endpoints using Swagger UI',
    ],
    focus: ['Security', 'Performance', 'Scalability'],
    github: 'https://github.com/ateebarman/DriveSphere',
    demo: 'https://drive-sphere.vercel.app/',
    icon: '🚗',
  },
  {
    title: 'WaveConnect',
    description: 'Built a real-time communication platform supporting 1-on-1 and group video calls using Stream.io SDK and WebRTC protocols.',
    tech: ['React.js', 'Node.js', 'MongoDB', 'Stream.io SDK', 'Socket.io', 'TanStack Query', 'Zustand', 'WebRTC'],
    highlights: [
      'Real-time communication for 1-on-1 and group video calls',
      'Integrated Stream.io SDK and WebRTC protocols',
      'Used TanStack Query and Zustand for global state management',
      'Robust backend logic for friend requests and user presence',
      'Implemented real-time notifications and typing indicators',
    ],
    focus: ['Real-time Systems', 'Scalability', 'UX/Performance'],
    github: 'https://github.com/ateebarman/RealtimeChat',
    demo: 'https://realtimechatvideo.onrender.com/',
    icon: '📞',
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

// Optimization: Use spring transitions for smoother feel and GPU-accelerated properties
const springTransition = { type: 'spring', stiffness: 400, damping: 30 };

export function Projects() {
  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-white dark:bg-[#060606]">
      {/* Optimized Background - Static gradients */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 right-10 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(59,130,246,0.08)_0%,transparent_70%)]" />
        <div className="absolute bottom-0 left-10 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(139,92,246,0.08)_0%,transparent_70%)]" />
      </div>

      <div className="max-w-6xl mx-auto px-6 sm:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="text-blue-600 dark:text-blue-400 font-black uppercase tracking-[0.3em] text-[10px] mb-3">Engineering Showcase</p>
          <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tighter text-slate-900 dark:text-white leading-tight">
            FEATURED <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 animate-gradient">SYSTEMS</span>
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 rounded-full mx-auto" />
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              variants={item}
              whileHover={{ y: -5 }}
              className="advanced-card group rounded-[1.5rem] p-0.5 transition-all duration-300"
              style={{ willChange: 'transform' }}
            >
              <div className="relative h-full bg-white dark:bg-slate-950 rounded-[1.4rem] p-8 flex flex-col">
                <span className="absolute top-8 right-8 text-4xl font-black opacity-[0.03] dark:opacity-[0.05] group-hover:opacity-10 transition-opacity">
                  0{idx + 1}
                </span>

                <div className="flex items-start gap-5 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-slate-50 dark:bg-slate-900 flex items-center justify-center text-3xl shadow-inner border border-slate-200 dark:border-slate-800 transition-colors duration-300">
                    {project.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-slate-900 dark:text-white tracking-tight leading-none group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex gap-2 mt-3">
                      {project.focus.map((f, i) => (
                        <span key={i} className="text-[9px] uppercase font-black tracking-widest text-slate-400 bg-slate-100 dark:bg-slate-900 px-2.5 py-1 rounded-full border border-slate-200 dark:border-slate-800">
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <p className="text-slate-500 dark:text-slate-400 mb-6 leading-relaxed text-sm font-medium">
                  {project.description}
                </p>

                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIdx) => (
                      <span
                        key={techIdx}
                        className="px-3 py-1.5 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-700 dark:text-slate-300 text-[10px] font-bold border border-slate-200 dark:border-slate-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-3 mb-10 flex-grow">
                  {project.highlights.slice(0, 3).map((highlight, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-3">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                      <p className="text-xs text-slate-600 dark:text-slate-400 leading-snug font-bold">
                        {highlight}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="flex gap-3 pt-4 border-t border-slate-100 dark:border-slate-900 mt-auto">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold uppercase tracking-widest text-[10px]"
                  >
                    <Github size={16} />
                    Source
                  </motion.a>
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border-2 border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white font-bold uppercase tracking-widest text-[10px] hover:border-blue-600 transition-all font-mono"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
