'use client';

import { ThemeProvider } from '@/components/theme-provider';
import { Navbar } from '@/components/navbar';
import { Hero } from '@/components/hero';
import { About } from '@/components/about';
import { Skills } from '@/components/skills';
import { Projects } from '@/components/projects';
import { Achievements } from '@/components/achievements';
import { Experience } from '@/components/experience';
import { Contact } from '@/components/contact';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <ThemeProvider>
      <Navbar />
      <main className="w-full">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </ThemeProvider>
  );
}
