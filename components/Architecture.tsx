import React from 'react';
import Section from './ui/Section';
import { motion } from 'framer-motion';
import { Lock, Server, Globe, Database } from 'lucide-react';

const steps = [
  {
    id: 1,
    title: 'Client (Next.js)',
    icon: Globe,
    desc: 'Server-side rendered React pages for optimal SEO and performance. Interacts with API via secure HTTP requests.'
  },
  {
    id: 2,
    title: 'Security (JWT)',
    icon: Lock,
    desc: 'Stateless authentication using JSON Web Tokens. HttpOnly cookies protect against XSS attacks.'
  },
  {
    id: 3,
    title: 'REST API (Express)',
    icon: Server,
    desc: 'Modular route structure with middleware for validation, error handling, and business logic separation.'
  },
  {
    id: 4,
    title: 'Data (MongoDB)',
    icon: Database,
    desc: 'Flexible schema design using Mongoose. Indexing strategies for high-performance query execution.'
  }
];

const Architecture: React.FC = () => {
  return (
    <Section id="architecture" title="My Architecture Approach" subtitle="How I build scalable and secure systems">
      <div className="relative">
        {/* Connector Line (Desktop) - Animated */}
        <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-zinc-800 -translate-y-1/2 z-0">
            <motion.div 
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="w-full h-full bg-gradient-to-r from-primary/10 via-primary to-primary/10 origin-left"
            />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
          {steps.map((step, idx) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.3, duration: 0.5 }}
              whileHover={{ y: -10 }}
              className="bg-surface p-6 rounded-2xl border border-white/5 hover:border-primary/50 transition-colors group relative"
            >
              <div className="w-12 h-12 bg-zinc-900 border border-zinc-800 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:border-primary transition-all duration-300 relative z-10 group-hover:scale-110 shadow-lg group-hover:shadow-primary/20">
                <step.icon className="w-5 h-5 text-zinc-400 group-hover:text-primary transition-colors" />
                <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: 0.5 + (idx * 0.3), type: "spring" }}
                    className="absolute -top-2 -right-2 w-6 h-6 bg-primary text-white text-xs font-bold rounded-full flex items-center justify-center border-2 border-surface"
                >
                  {step.id}
                </motion.div>
              </div>
              <h3 className="text-center text-lg font-bold text-white mb-3">{step.title}</h3>
              <p className="text-center text-sm text-zinc-400 leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.6 }}
            className="mt-16 p-8 bg-zinc-900/50 rounded-2xl border border-white/5 backdrop-blur-sm"
        >
          <h3 className="text-xl font-bold text-white mb-4">Deployment Strategy</h3>
          <div className="flex flex-col md:flex-row gap-6 text-zinc-400 text-sm">
            <div className="flex-1">
              <strong className="text-primary block mb-1">Frontend</strong>
              Deployed on Vercel for global edge caching and automatic CI/CD pipelines from GitHub.
            </div>
            <div className="flex-1">
              <strong className="text-primary block mb-1">Backend</strong>
              Hosted on specialized node providers (like Render or AWS EC2) with PM2 for process management.
            </div>
            <div className="flex-1">
              <strong className="text-primary block mb-1">Database</strong>
              MongoDB Atlas clusters with automated backups and IP whitelisting for security.
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

export default Architecture;