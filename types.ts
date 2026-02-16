import { LucideIcon } from 'lucide-react';

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  features: string[];
  githubUrl: string;
  demoUrl: string;
  architecture: {
    frontend: string;
    backend: string;
    database: string;
  };
}

export interface SkillCategory {
  title: string;
  skills: string[];
  icon: LucideIcon;
}

export interface NavItem {
  label: string;
  href: string;
}