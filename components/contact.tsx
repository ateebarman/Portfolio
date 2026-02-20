'use client';

import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Code, Phone, Send, MapPin, ExternalLink } from 'lucide-react';
import { useState } from 'react';

const contactLinks = [
  {
    icon: Mail,
    label: 'Email',
    value: 'ateeb.a220@iiits.in',
    href: 'mailto:ateeb.a220@iiits.in',
    color: 'from-red-500 to-orange-500',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91-6206356331',
    href: 'tel:+91-6206356331',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/ateeb-arman-42019a254/',
    href: 'https://linkedin.com/in/ateeb-arman-42019a254/',
    color: 'from-blue-600 to-blue-400',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/ateebarman',
    href: 'https://github.com/ateebarman',
    color: 'from-gray-700 to-gray-900',
  },
  {
    icon: Code,
    label: 'LeetCode',
    value: 'leetcode.com/ateebarman',
    href: 'https://leetcode.com/ateebarman',
    color: 'from-yellow-500 to-yellow-600',
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
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0 },
};

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error('Network error');

      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      console.error('Failed to send contact message', err);
    } finally {
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-white dark:bg-[#060606]">
      {/* Optimized Background Blobs */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(59,130,246,0.06)_0%,transparent_70%)]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(139,92,246,0.04)_0%,transparent_70%)]" />
      </div>

      <div className="max-w-6xl mx-auto px-6 sm:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="text-blue-600 dark:text-blue-400 font-black uppercase tracking-[0.3em] text-[10px] mb-3">Transmission</p>
          <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tighter text-slate-900 dark:text-white leading-tight">
            GET IN <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 animate-gradient">TOUCH</span>
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 rounded-full mx-auto" />
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-10 items-start">
          {/* Contact Information Cards */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="advanced-card p-10 rounded-[2.5rem]">
              <h3 className="text-xl font-black text-slate-900 dark:text-white mb-8 tracking-tight uppercase">Channel Access</h3>
              <div className="space-y-6">
                {contactLinks.map((link, idx) => {
                  const Icon = link.icon;
                  return (
                    <motion.a
                      key={idx}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      variants={item}
                      className="group flex items-center gap-5 p-4 rounded-3xl transition-all duration-300 hover:bg-slate-50 dark:hover:bg-white/5 relative z-10"
                    >
                      <div className={`p-4 rounded-2xl bg-gradient-to-br ${link.color} text-white shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 relative z-20`}>
                        <Icon size={22} />
                      </div>
                      <div className="flex-1">
                        <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 group-hover:text-blue-500 transition-colors mb-1">{link.label}</p>
                        <p className="text-slate-900 dark:text-white font-black text-lg tracking-tight leading-none break-all">
                          {link.value}
                        </p>
                      </div>
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-slate-300 dark:text-slate-700">
                        <ExternalLink size={18} />
                      </div>
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Premium Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <div className="advanced-card p-0.5 rounded-[2.5rem]">
              <form onSubmit={handleSubmit} className="bg-white dark:bg-slate-950 p-10 md:p-12 rounded-[2.4rem] space-y-8 relative z-10">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label htmlFor="name" className="text-[9px] font-black uppercase tracking-[0.4em] text-slate-400 ml-4">
                      Identifier
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Jane Doe"
                      className="w-full px-6 py-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all font-bold text-sm text-slate-900 dark:text-white placeholder:text-slate-400"
                    />
                  </div>
                  <div className="space-y-3">
                    <label htmlFor="email" className="text-[9px] font-black uppercase tracking-[0.4em] text-slate-400 ml-4">
                      Electronic Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="jane@example.com"
                      className="w-full px-6 py-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all font-bold text-sm text-slate-900 dark:text-white placeholder:text-slate-400"
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <label htmlFor="message" className="text-[9px] font-black uppercase tracking-[0.4em] text-slate-400 ml-4">
                    The Payload
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    placeholder="Tell me about your vision..."
                    className="w-full px-6 py-4 rounded-[1.5rem] bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all font-bold text-sm text-slate-900 dark:text-white placeholder:text-slate-400 resize-none"
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={submitted}
                  className={`w-full py-5 rounded-[1.5rem] font-black uppercase tracking-[0.3em] text-[10px] shadow-xl transition-all flex items-center justify-center gap-3 ${submitted
                    ? 'bg-green-500 text-white'
                    : 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:shadow-blue-500/20'
                    }`}
                >
                  {submitted ? (
                    '✓ Transmitted'
                  ) : (
                    <>
                      Transmit Message <Send size={16} />
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
