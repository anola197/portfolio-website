// src/components/projects/ProjectCard.tsx
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { type Project } from '@/lib/data';

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="rounded-lg overflow-hidden shadow-lg bg-white dark:bg-gray-700">
      <div className="relative h-48 w-full">
        <Image 
          src={project.image} 
          alt={project.title} 
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span 
              key={tag} 
              className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded dark:bg-blue-900 dark:text-blue-200"
            >
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {project.description}
        </p>
        <Link 
          href={`/projects/${project.id}`} 
          className="text-blue-600 font-medium hover:underline flex items-center"
        >
          View Project <ArrowRight size={16} className="ml-1" />
        </Link>
      </div>
    </div>
  );
}