import React from 'react';
import Section from './ui/Section';
import { Database, Server, Layout, Box } from 'lucide-react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <Section id="about" title="About Me" subtitle="My journey and focus in the tech world">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6 text-zinc-300 text-lg leading-relaxed"
        >
          <p>
            I am a results-oriented Full-Stack Developer with deep expertise in the MERN stack. 
            My passion lies not just in writing code, but in architecting systems that solve real business problems.
          </p>
          <p>
            With a strong foundation in both frontend and backend technologies, I specialize in building 
            <span className="text-white font-semibold"> scalable APIs, secure authentication systems, and responsive user interfaces</span>. 
            I prioritize clean code architecture, performance optimization, and developer experience.
          </p>
          <p>
            Currently, I am focused on mastering Next.js for server-side rendering and static site generation to deliver lightning-fast web experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-4">
          {[
            { icon: Layout, label: 'Frontend', desc: 'React, Next.js, Tailwind' },
            { icon: Server, label: 'Backend', desc: 'Node.js, Express, REST' },
            { icon: Database, label: 'Database', desc: 'MongoDB, Mongoose' },
            { icon: Box, label: 'Architecture', desc: 'Microservices, MVC' },
          ].map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-surface border border-white/5 rounded-2xl hover:border-primary/50 transition-colors group shadow-lg"
            >
              <item.icon className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-white font-semibold mb-1">{item.label}</h3>
              <p className="text-sm text-zinc-500">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default About;