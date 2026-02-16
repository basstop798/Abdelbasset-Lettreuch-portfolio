import React, { useState, useEffect } from 'react';
import { Menu, X, Code2, Terminal } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Architecture', href: '#architecture' },
  { label: 'Contact', href: '#contact' },
];

const terminalLines = [
  "INITIALIZING SYSTEM OVERRIDE...",
  "ACCESSING HIDDEN DEVELOPER PROFILE...",
  "SKILL_LEVEL: MAXIMUM",
  "COFFEE_DEPENDENCY: CRITICAL",
  "HIRE_ME_STATUS: AVAILABLE",
  "WELCOME RECRUITER! 🚀"
];

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  
  // Easter Egg States
  const [secretClicks, setSecretClicks] = useState(0);
  const [showEasterEgg, setShowEasterEgg] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Easter Egg Logic: Reset clicks if not sequential within 500ms
  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    if (secretClicks > 0) {
      timer = setTimeout(() => setSecretClicks(0), 500);
    }
    if (secretClicks === 3) {
      setShowEasterEgg(true);
      setSecretClicks(0);
      // Auto close after animation
      setTimeout(() => setShowEasterEgg(false), 5500);
    }
    return () => clearTimeout(timer);
  }, [secretClicks]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    
    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    setSecretClicks(prev => prev + 1);
    handleNavClick(e, '#');
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled || isOpen ? 'bg-background/90 backdrop-blur-md border-b border-white/5 shadow-lg' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <a 
            href="#" 
            onClick={handleLogoClick}
            className="flex items-center gap-2 group select-none"
          >
            <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors relative overflow-hidden">
              <Code2 className="w-6 h-6 text-primary relative z-10" />
              {/* Subtle visual cue for interaction */}
              <motion.div 
                key={secretClicks}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: secretClicks > 0 ? 1.5 : 0, opacity: secretClicks > 0 ? 0.3 : 0 }}
                className="absolute inset-0 bg-white rounded-full"
              />
            </div>
            <span className="font-bold text-xl tracking-tight text-white">DevPortfolio</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-sm font-medium text-zinc-400 hover:text-white transition-colors relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="px-5 py-2.5 bg-white text-zinc-950 text-sm font-semibold rounded-full hover:bg-zinc-200 transition-colors transform hover:scale-105 active:scale-95 duration-200"
            >
              Hire Me
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-zinc-400 hover:text-white transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: '100vh' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-background/95 backdrop-blur-xl border-t border-white/5 absolute top-20 left-0 right-0 overflow-hidden h-screen"
            >
              <div className="flex flex-col items-center justify-center h-full gap-8 pb-20">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="text-2xl font-bold text-zinc-400 hover:text-white hover:scale-110 transition-all"
                  >
                    {item.label}
                  </a>
                ))}
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, '#contact')}
                  className="mt-4 px-8 py-3 bg-primary text-white text-lg font-bold rounded-full hover:bg-primaryHover transition-colors"
                >
                  Hire Me
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Easter Egg Overlay */}
      <AnimatePresence>
        {showEasterEgg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.5 } }}
            className="fixed inset-0 z-[100] bg-black text-green-500 font-mono p-4 md:p-12 flex flex-col justify-end md:justify-center overflow-hidden"
          >
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-green-500/5 to-transparent animate-scan" />
            
            <div className="max-w-3xl mx-auto w-full space-y-4 relative z-10">
              <Terminal className="w-16 h-16 mb-8 text-green-500 animate-pulse" />
              {terminalLines.map((line, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.8, duration: 0.3 }}
                  className="text-lg md:text-2xl font-bold tracking-wider"
                >
                  <span className="mr-4">{`>`}</span>
                  {line}
                  {index === terminalLines.length - 1 && (
                    <motion.span
                      animate={{ opacity: [0, 1, 0] }}
                      transition={{ repeat: Infinity, duration: 0.8 }}
                      className="inline-block w-3 h-6 bg-green-500 ml-2 align-middle"
                    />
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;