import React, { useState } from 'react';
import Section from './ui/Section';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Layers, Database, Layout, Filter, X } from 'lucide-react';
import { Project } from '../types';

const projects: Project[] = [
  {
    id: 'reservit',
    title: 'Reservit-Vit',
    description: 'A comprehensive doctor appointment booking system designed to streamline healthcare scheduling.',
    image: 'https://picsum.photos/id/1/800/600',
    techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT'],
    features: ['Role-based Auth (Doctor/Patient)', 'Real-time Booking Slots', 'Admin Dashboard', 'Appointment History'],
    githubUrl: '#',
    demoUrl: '#',
    architecture: {
      frontend: 'React with Context API for state management',
      backend: 'Express.js REST API with middleware validation',
      database: 'MongoDB with robust Mongoose schemas'
    }
  },
  {
    id: 'ecommerce',
    title: 'E-Commerce Platform',
    description: 'A full-featured online store with secure checkout and inventory management.',
    image: 'https://picsum.photos/id/2/800/600',
    techStack: ['Next.js', 'Redux Toolkit', 'Stripe', 'MongoDB'],
    features: ['Cart & Wishlist Logic', 'Secure Checkout Flow', 'Order Tracking', 'Product Filtering'],
    githubUrl: '#',
    demoUrl: '#',
    architecture: {
      frontend: 'Next.js App Router with SSR',
      backend: 'Serverless functions integrated with Database',
      database: 'MongoDB Atlas for scalable product data'
    }
  },
  {
    id: 'techstore',
    title: 'Computer Store',
    description: 'A specialized niche store for computer parts focusing on UI/UX and complex filtering.',
    image: 'https://picsum.photos/id/3/800/600',
    techStack: ['React', 'Tailwind', 'Framer Motion'],
    features: ['Complex State Management', 'Advanced Filtering', 'Responsive UI', 'Animation Micro-interactions'],
    githubUrl: '#',
    demoUrl: '#',
    architecture: {
      frontend: 'React SPA with custom hooks',
      backend: 'Express.js providing filter metadata',
      database: 'MongoDB optimized for query performance'
    }
  }
];

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
    return (
        <motion.div
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
            className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-start mb-24 last:mb-0`}
        >
            {/* Image Side */}
            <motion.div 
                className="w-full lg:w-1/2 group relative perspective-1000 cursor-pointer"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
            >
                <div className="relative rounded-2xl overflow-hidden border border-white/5 shadow-2xl bg-surface group-hover:border-primary/50 transition-all duration-500">
                    <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors z-10 duration-500" />
                    <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-auto object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                    />
                </div>
                
                {/* Architecture Quick View */}
                <div className="mt-6 grid grid-cols-3 gap-4">
                <div className="p-3 rounded-lg bg-surface border border-white/5 text-center group-hover:border-primary/30 transition-colors duration-300">
                    <Layout className="w-5 h-5 mx-auto text-primary mb-2" />
                    <p className="text-xs text-zinc-500 font-mono">Frontend</p>
                </div>
                <div className="p-3 rounded-lg bg-surface border border-white/5 text-center group-hover:border-primary/30 transition-colors duration-300">
                    <Layers className="w-5 h-5 mx-auto text-primary mb-2" />
                    <p className="text-xs text-zinc-500 font-mono">Backend</p>
                </div>
                <div className="p-3 rounded-lg bg-surface border border-white/5 text-center group-hover:border-primary/30 transition-colors duration-300">
                    <Database className="w-5 h-5 mx-auto text-primary mb-2" />
                    <p className="text-xs text-zinc-500 font-mono">DB</p>
                </div>
                </div>
            </motion.div>

            {/* Content Side */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center">
                <motion.h3 
                    layout="position"
                    className="text-3xl font-bold text-white mb-4 group-hover:text-primary transition-colors duration-300"
                >
                    {project.title}
                </motion.h3>
                <motion.p 
                    layout="position"
                    className="text-zinc-400 text-lg mb-6 leading-relaxed"
                >
                    {project.description}
                </motion.p>

                <div className="mb-8">
                <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-3">Key Features</h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {project.features.map((feature, fIdx) => (
                    <motion.li 
                        key={fIdx} 
                        layout="position"
                        className="flex items-center gap-2 text-zinc-400 text-sm"
                    >
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {feature}
                    </motion.li>
                    ))}
                </ul>
                </div>

                <div className="flex flex-wrap gap-2 mb-8">
                {project.techStack.map((tech, tIdx) => (
                    <span 
                        key={tech} 
                        className="px-3 py-1 text-xs font-medium text-primary bg-primary/10 rounded-full border border-primary/20 hover:bg-primary/20 transition-colors cursor-default"
                    >
                    {tech}
                    </span>
                ))}
                </div>

                <div className="flex gap-4">
                <motion.a 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.githubUrl} 
                    className="flex items-center gap-2 px-6 py-3 bg-zinc-800 hover:bg-zinc-700 text-white rounded-lg transition-colors font-medium"
                >
                    <Github className="w-4 h-4" /> Code
                </motion.a>
                <motion.a 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.demoUrl} 
                    className="flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primaryHover text-white rounded-lg transition-colors font-medium"
                >
                    <ExternalLink className="w-4 h-4" /> Live Demo
                </motion.a>
                </div>
            </div>
        </motion.div>
    );
};

const Projects: React.FC = () => {
  const [selectedTech, setSelectedTech] = useState<string[]>([]);

  // Extract unique technologies from all projects
  const allTech = Array.from(new Set(projects.flatMap(p => p.techStack))).sort();

  const toggleTech = (tech: string) => {
    setSelectedTech(prev => 
      prev.includes(tech) 
        ? prev.filter(t => t !== tech)
        : [...prev, tech]
    );
  };

  const clearFilters = () => setSelectedTech([]);

  const filteredProjects = projects.filter(project => {
    if (selectedTech.length === 0) return true;
    // Strict filtering: Project must contain ALL selected tags
    return selectedTech.every(tech => project.techStack.includes(tech));
  });

  return (
    <Section id="projects" title="Featured Projects" subtitle="Real-world applications solving complex problems">
      
      {/* Filters */}
      <div className="mb-16">
        <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2 text-zinc-400">
                <Filter className="w-4 h-4" />
                <span className="text-xs font-bold uppercase tracking-widest">Filter by Tech Stack</span>
            </div>
            {selectedTech.length > 0 && (
                <button 
                    onClick={clearFilters}
                    className="flex items-center gap-1 text-xs font-medium text-primary hover:text-white transition-colors"
                >
                    <X className="w-3 h-3" /> Clear Filters
                </button>
            )}
        </div>
        
        <div className="flex flex-wrap gap-3">
            {allTech.map(tech => {
                const isSelected = selectedTech.includes(tech);
                return (
                    <motion.button
                        key={tech}
                        onClick={() => toggleTech(tech)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-300 ${
                            isSelected 
                                ? 'bg-primary/20 border-primary text-primary shadow-[0_0_15px_rgba(6,182,212,0.25)]' 
                                : 'bg-surface/50 border-white/5 text-zinc-400 hover:border-white/20 hover:text-white'
                        }`}
                    >
                        {tech}
                    </motion.button>
                );
            })}
        </div>
      </div>

      <div className="min-h-[400px]">
        <AnimatePresence mode="popLayout">
            {filteredProjects.length > 0 ? (
                filteredProjects.map((project, index) => (
                    <ProjectCard key={project.id} project={project} index={index} />
                ))
            ) : (
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="flex flex-col items-center justify-center py-20 text-center border border-dashed border-white/10 rounded-2xl bg-white/5"
                >
                    <Filter className="w-12 h-12 text-zinc-600 mb-4" />
                    <h3 className="text-xl font-bold text-white mb-2">No projects found</h3>
                    <p className="text-zinc-400 mb-6">No projects match the combination of selected filters.</p>
                    <button 
                        onClick={clearFilters}
                        className="px-6 py-2 bg-zinc-800 hover:bg-zinc-700 text-white rounded-lg transition-colors font-medium text-sm"
                    >
                        Clear All Filters
                    </button>
                </motion.div>
            )}
        </AnimatePresence>
      </div>
    </Section>
  );
};

export default Projects;