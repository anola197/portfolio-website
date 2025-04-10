// src/components/home/FeaturedProjects.tsx
'use client';

import Link from 'next/link';
import { projects } from '@/lib/data';
import ProjectCard from '../projects/ProjectCard';

export default function FeaturedProjects() {
  const featuredProjects = projects.filter(project => project.featured);
  
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are some of my latest works that showcase my skills and experience
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link 
            href="/projects" 
            className="px-6 py-3 rounded-lg font-medium bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
}