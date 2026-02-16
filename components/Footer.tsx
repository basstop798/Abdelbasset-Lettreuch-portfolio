import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  return (
    <footer className="bg-zinc-950 border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <p className="text-zinc-500 text-sm">
            © {new Date().getFullYear()} John Doe. All rights reserved.
          </p>
          <p className="text-zinc-600 text-xs mt-1">
            Built with React, Tailwind CSS & Framer Motion
          </p>
        </div>

        <div className="flex items-center gap-6">
          <motion.a 
            href="https://github.com/basstop798" 
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, color: '#fff' }}
            whileTap={{ scale: 0.9 }}
            className="text-zinc-500 transition-colors"
          >
            <Github className="w-5 h-5" />
          </motion.a>
          <motion.a 
            href="https://www.linkedin.com/in/abdelbasset-lettreuch-133b5631a/" 
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, color: '#0A66C2' }}
            whileTap={{ scale: 0.9 }}
            className="text-zinc-500 transition-colors"
          >
            <Linkedin className="w-5 h-5" />
          </motion.a>
          <motion.a 
            href="https://x.com/Microbullet0" 
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, color: '#1DA1F2' }}
            whileTap={{ scale: 0.9 }}
            className="text-zinc-500 transition-colors"
          >
            <Twitter className="w-5 h-5" />
          </motion.a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;