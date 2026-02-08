'use client';

import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Code, Phone } from 'lucide-react';
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
      alert('Failed to send message. Please try again later.');
    } finally {
      setSubmitted(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Let's Connect</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto" />
          <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            I'm always interested in hearing about new projects, opportunities, and interesting problems.
            Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {contactLinks.map((link, idx) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={idx}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="group flex items-center gap-4 p-4 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-all"
                >
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${link.color} text-white`}>
                    <Icon size={24} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-500 dark:text-slate-500">{link.label}</p>
                    <p className="text-slate-900 dark:text-slate-100 font-semibold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {link.value}
                    </p>
                  </div>
                </motion.a>
              );
            })}
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-900 dark:text-slate-100 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:border-blue-500 dark:focus:border-blue-500 transition-colors"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-900 dark:text-slate-100 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:border-blue-500 dark:focus:border-blue-500 transition-colors"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-900 dark:text-slate-100 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:border-blue-500 dark:focus:border-blue-500 transition-colors resize-none"
                placeholder="Tell me about your project or opportunity..."
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              disabled={submitted}
              className={`w-full py-3 rounded-lg font-semibold transition-all ${
                submitted
                  ? 'bg-green-500 text-white'
                  : 'bg-blue-600 hover:bg-blue-700 text-white'
              }`}
            >
              {submitted ? '✓ Message Sent!' : 'Send Message'}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
