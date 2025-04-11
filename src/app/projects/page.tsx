// src/app/projects/page.tsx
'use client';
import { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Github, ExternalLink, Tag, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';

// Define a type for project data
type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  category: string;
};

// Sample project data - replace with your own projects
const projects: Project[] = [
  {
    id: 'e-commerce-platform',
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce platform built with Next.js, including product management, cart functionality, user authentication, and payment processing.',
    image: '/images/projects/ecommerce.jpg',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Stripe', 'MongoDB'],
    githubUrl: 'https://github.com/yourusername/ecommerce-platform',
    liveUrl: 'https://ecommerce-demo.yourdomain.com',
    featured: true,
    category: 'Web Application'
  },
  {
    id: 'task-management-app',
    title: 'Task Management App',
    description: 'A Kanban-style task management application with drag-and-drop functionality, team collaboration features, and real-time updates.',
    image: '/images/projects/task-app.jpg',
    technologies: ['React', 'Redux', 'Node.js', 'Socket.io', 'PostgreSQL'],
    githubUrl: 'https://github.com/yourusername/task-management',
    liveUrl: 'https://tasks.yourdomain.com',
    featured: true,
    category: 'Web Application'
  },
  {
    id: 'fitness-tracker',
    title: 'Fitness Tracker Dashboard',
    description: 'A fitness tracking application that allows users to log workouts, track progress, and view statistics on a personalized dashboard.',
    image: '/images/projects/fitness-tracker.jpg',
    technologies: ['React', 'Chart.js', 'Express', 'MongoDB', 'Auth0'],
    githubUrl: 'https://github.com/yourusername/fitness-tracker',
    liveUrl: 'https://fitness.yourdomain.com',
    featured: false,
    category: 'Web Application'
  },
  {
    id: 'weather-app',
    title: 'Weather Forecast App',
    description: 'A weather application that provides current conditions and forecasts based on user location or search queries, with interactive maps and visualizations.',
    image: '/images/projects/weather-app.jpg',
    technologies: ['React', 'OpenWeather API', 'MapBox', 'CSS Modules'],
    githubUrl: 'https://github.com/yourusername/weather-app',
    liveUrl: 'https://weather.yourdomain.com',
    featured: false,
    category: 'Web Application'
  },
  {
    id: 'portfolio-website',
    title: 'Portfolio Website',
    description: 'A personal portfolio website showcasing my projects, skills, and experience. Built with Next.js and Tailwind CSS.',
    image: '/images/projects/portfolio.jpg',
    technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'TypeScript'],
    githubUrl: 'https://github.com/yourusername/portfolio',
    liveUrl: 'https://yourdomain.com',
    featured: false,
    category: 'Website'
  },
  {
    id: 'recipe-sharing-platform',
    title: 'Recipe Sharing Platform',
    description: 'A community-driven recipe sharing platform where users can discover, share, and rate recipes. Features include user profiles, recipe collections, and search functionality.',
    image: '/images/projects/recipe-app.jpg',
    technologies: ['Vue.js', 'Firebase', 'Algolia', 'Cloudinary'],
    githubUrl: 'https://github.com/yourusername/recipe-platform',
    liveUrl: 'https://recipes.yourdomain.com',
    featured: false,
    category: 'Web Application'
  },
  {
    id: 'blog-platform',
    title: 'Dynamic Blog Platform',
    description: 'A modern blog platform with markdown support, tagging, categories, and a powerful search feature.',
    image: '/images/projects/blog.jpg',
    technologies: ['Gatsby', 'MDX', 'GraphQL', 'Netlify CMS'],
    githubUrl: 'https://github.com/yourusername/blog-platform',
    liveUrl: 'https://blog.yourdomain.com',
    featured: false,
    category: 'Website'
  },
  {
    id: 'chat-application',
    title: 'Real-time Chat Application',
    description: 'A real-time messaging platform with private chats, group conversations, and file sharing capabilities.',
    image: '/images/projects/chat-app.jpg',
    technologies: ['React', 'Firebase', 'WebSockets', 'Material UI'],
    githubUrl: 'https://github.com/yourusername/chat-app',
    liveUrl: 'https://chat.yourdomain.com',
    featured: false,
    category: 'Web Application'
  },
];

// Project card component
function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden flex flex-col h-full transition-transform hover:scale-[1.02] min-w-[300px] md:min-w-[340px] max-w-md flex-shrink-0">
      {/* Project Image */}
      <div className="relative h-48 w-full">
        {/* Placeholder for when image isn't available */}
        <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
          <span className="text-gray-500 dark:text-gray-400 text-lg font-medium">Project Image</span>
        </div>
        {/* Uncomment when you have actual images */}
        {/* <Image 
          src={project.image} 
          alt={project.title} 
          fill
          className="object-cover"
        /> */}
      </div>
      
      {/* Project Content */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">
          {project.description}
        </p>
        
        {/* Technologies */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <span 
                key={index} 
                className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs font-medium px-2.5 py-0.5 rounded flex items-center"
              >
                <Tag size={12} className="mr-1" />
                {tech}
              </span>
            ))}
          </div>
        </div>
        
        {/* Project Links */}
        <div className="flex space-x-3">
          {project.githubUrl && (
            <a 
              href={project.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              aria-label={`GitHub repository for ${project.title}`}
            >
              <Github size={20} />
            </a>
          )}
          {project.liveUrl && (
            <a 
              href={project.liveUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              aria-label={`Live demo for ${project.title}`}
            >
              <ExternalLink size={20} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

// Scrollable project section component
function ScrollableProjectSection({ title, projects }: { title: string, projects: Project[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  
  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = direction === 'left' 
        ? -current.offsetWidth / 1.5
        : current.offsetWidth / 1.5;
      
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };
  
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">{title}</h2>
          <div className="flex space-x-2">
            <button 
              onClick={() => scroll('left')}
              className="p-2 bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
              aria-label="Scroll left"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="p-2 bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
              aria-label="Scroll right"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
        
        <div 
          ref={scrollRef}
          className="flex overflow-x-auto pb-6 space-x-6 scrollbar-hide snap-x"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {projects.map(project => (
            <div key={project.id} className="snap-start">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function ProjectsPage() {
  // Get unique categories
  const categories = Array.from(new Set(projects.map(p => p.category)));
  
  // Split projects into featured and by category
  const featuredProjects = projects.filter(project => project.featured);
  
  return (
    <>
      {/* Hero Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6 text-center">My Projects</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-center mb-6">
            Explore a selection of my recent work, showcasing my skills in web development,
            design, and problem-solving across various domains and technologies.
          </p>
          <div className="flex justify-center">
            <Button href="#featured" variant="outline">Explore My Work</Button>
          </div>
        </div>
      </section>
      
      {/* Featured Projects */}
      {featuredProjects.length > 0 && (
        <section id="featured">
          <ScrollableProjectSection title="Featured Projects" projects={featuredProjects} />
        </section>
      )}
      
      {/* Projects by Category */}
      {categories.map(category => {
        const categoryProjects = projects.filter(p => p.category === category && !p.featured);
        
        if (categoryProjects.length === 0) return null;
        
        return (
          <ScrollableProjectSection 
            key={category} 
            title={category} 
            projects={categoryProjects} 
          />
        );
      })}
      
      {/* Project Inquiry */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Have a Project in Mind?</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          <Button href="/contact">Start a Conversation</Button>
        </div>
      </section>
      
      {/* Custom CSS to hide scrollbar but maintain scrolling functionality */}
      <style jsx global>{`
        /* Hide scrollbar for Chrome, Safari and Opera */
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        
        /* Hide scrollbar for IE, Edge and Firefox */
        .scrollbar-hide {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
      `}</style>
    </>
  );
}