import React from 'react';
import Section from './ui/Section';
import { motion } from 'framer-motion';
import { Code, Server, Database, Terminal } from 'lucide-react';
import { SkillCategory } from '../types';

const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend',
    icon: Code,
    skills: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Redux / Zustand', 'Framer Motion'],
  },
  {
    title: 'Backend',
    icon: Server,
    skills: ['Node.js', 'Express.js', 'REST API Design', 'JWT Auth', 'WebSockets', 'Middleware'],
  },
  {
    title: 'Database',
    icon: Database,
    skills: ['MongoDB', 'Mongoose', 'Schema Design', 'Aggregation', 'Indexing', 'Redis'],
  },
  {
    title: 'DevOps & Tools',
    icon: Terminal,
    skills: ['Git & GitHub', 'Docker', 'AWS (Basic)', 'Vercel', 'Postman', 'CI/CD'],
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

const Skills: React.FC = () => {
  return (
    <Section id="skills" title="Technical Arsenal" subtitle="The tools I use to bring ideas to life">
      <motion.div 
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {skillCategories.map((category, idx) => (
          <motion.div
            key={idx}
            variants={item}
            whileHover={{ y: -5, borderColor: 'rgba(6, 182, 212, 0.5)' }}
            className="bg-surface p-6 rounded-2xl border border-white/5 transition-colors group cursor-default shadow-lg shadow-black/20"
          >
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
              <category.icon className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">{category.title}</h3>
            <ul className="space-y-2">
              {category.skills.map((skill, sIdx) => (
                <li key={sIdx} className="flex items-center gap-2 text-zinc-400 text-sm group-hover:text-zinc-300 transition-colors">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary/50 group-hover:bg-primary transition-colors" />
                  {skill}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
};

export default Skills;