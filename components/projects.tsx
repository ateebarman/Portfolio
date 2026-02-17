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

export function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full" />
          <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-2xl">
            Production-grade applications showcasing backend architecture, real-time systems, and scalable design patterns.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-8"
        >
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              variants={item}
              className="group relative rounded-xl overflow-hidden bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:shadow-2xl transition-all duration-300"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-5 bg-gradient-to-r from-blue-600 to-purple-600 transition-opacity duration-300" />

              <div className="p-8 relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-4xl">{project.icon}</span>
                    <h3 className="text-3xl font-bold text-slate-900 dark:text-slate-100">
                      {project.title}
                    </h3>
                  </div>
                </div>

                <p className="text-lg text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mb-6">
                  <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">Tech Stack</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIdx) => (
                      <span
                        key={techIdx}
                        className="px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Focus Areas */}
                <div className="mb-6">
                  <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">Architecture Focus</p>
                  <div className="flex flex-wrap gap-2">
                    {project.focus.map((area, areaIdx) => {
                      const icons: { [key: string]: React.ReactNode } = {
                        'Performance': <Zap size={16} />,
                        'Security': <Network size={16} />,
                        'Real-time Systems': <Cpu size={16} />,
                        'Scalability': <Zap size={16} />,
                        'UX/Performance': <Zap size={16} />,
                        'AI Integration': <Cpu size={16} />,
                      };
                      return (
                        <span
                          key={areaIdx}
                          className="px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-xs font-medium flex items-center gap-1"
                        >
                          {icons[area]} {area}
                        </span>
                      );
                    })}
                  </div>
                </div>

                {/* Highlights */}
                <div className="mb-8 pl-4 border-l-2 border-slate-300 dark:border-slate-600">
                  <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">Key Highlights</p>
                  <ul className="space-y-2">
                    {project.highlights.map((highlight, hIdx) => (
                      <li key={hIdx} className="text-sm text-slate-600 dark:text-slate-400 flex items-start gap-2">
                        <span className="text-blue-600 dark:text-blue-400 mt-1">✓</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Buttons */}
                <div className="flex gap-4 pt-4 border-t border-slate-200 dark:border-slate-700">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 px-6 py-3 rounded-lg bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-200 font-semibold transition-colors"
                  >
                    <Github size={18} />
                    GitHub
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center gap-2 px-6 py-3 rounded-lg border-2 border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 hover:bg-slate-50 dark:hover:bg-slate-700 font-semibold transition-colors"
                  >
                    <ExternalLink size={18} />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
