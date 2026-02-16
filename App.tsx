import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Architecture from './components/Architecture';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Background from './components/Background';
import { motion, useScroll, useSpring } from 'framer-motion';

const App: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-background text-zinc-100 selection:bg-primary selection:text-white overflow-x-hidden relative">
      <Background />
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary origin-left z-[100]"
        style={{ scaleX }}
      />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Architecture />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;