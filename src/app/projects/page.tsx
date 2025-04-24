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
    id: 'image-recognition',
    title: 'Image Recognition as a Service',
    description: 'Python-based cloud video analysis app. Utilizes AWS Lambda to process uploaded videos and perform face recognition on extracted frames.',
    image: '/images/image-recognition.png',
    technologies: ['Python', 'AWS Lambda', 'S3', 'Docker'],
    githubUrl: 'https://github.com/anola197/cse546-project-2-face-recognition-',
    liveUrl: '',
    featured: false,
    category: 'Academic Projects'
  },  
  {
    id: 'smart-factory-dashboard',
    title: 'Smart Factory Monitoring Dashboard',
    description: 'Built during Honeywell hackathon, a real-time smart factory dashboard integrates Arduino-based IoT sensors and streams data via a Python-Flask API to a centralized dashboard. It features live alerts, historical logs, and ML-powered predictive maintenance to enable rapid fault detection and reduce downtime.',
    image: '/images/factory-dashboard.png',
    technologies: ['Python', 'Next.js', 'SQLlite', 'Flask', 'Arduino'],
    githubUrl: 'https://github.com/anola197/honeywell_hack',
    liveUrl: '',
    featured: false,
    category: 'Hackathons'
  },
  {
    id: 'werewolves-game',
    title: 'Distributed Werewolves Multiplayer Game',
    description: 'A real-time multiplayer social deduction game using Python MPI for distributed communication and multithreading for chat and game logic.',
    image: '/images/werewolves-mpi.png',
    technologies: ['Python', 'mpi4py', 'Multithreading'],
    githubUrl: 'https://github.com/anola197/werewolves-mpi.png',
    liveUrl: '',
    featured: false,
    category: 'Academic Projects'
  },
  {
    id: 'happiness-vis',
    title: 'HappinessVis: Visual Exploration of Happiness Metrics in Multivariate Data',
    description: 'An interactive D3.js dashboard for exploring global happiness trends (2015–2023). Features include t-SNE projection, choropleth map, radar charts, sparklines, and parallel coordinates for multivariate analysis across countries.',
    image: '/images/happinessvis.png',
    technologies: ['D3.js', 'JavaScript', 'HTML/CSS'],
    githubUrl: 'https://github.com/anola197/happinessvis',
    liveUrl: '',
    featured: false,
    category: 'Academic Projects'
  },  
  {
    id: 'fake-review-detection',
    title: 'Improving E-Commerce Trust: Fake Review Detection',
    description: 'Built a machine learning system to detect fake reviews using linguistic and behavioral features from the Amazon Reviews dataset.',
    image: '/images/fake-review.png',
    technologies: ['Python', 'scikit-learn', 'TextBlob', 'VADER', 'Pandas'],
    githubUrl: 'https://github.com/anola197/fake-review-detection',
    liveUrl: '',
    featured: false,
    category: 'Academic Projects'
  },
  {
    id: 'ekonnect-ethical-sketicals',
    title: 'EKONNECT – Sustainable Heat Exchange Platform',
    description: 'Built during the Ethical Skeptics Hackathon, EKONNECT is a web platform that connects data centers with local industries to repurpose waste heat. It promotes energy efficiency, reduces carbon emissions, and generates new revenue streams for both sectors.',
    image: '/images/ekconnect.png',
    technologies: ['Express.js', 'React.js', 'HTML', 'CSS','MongoDB'],
    githubUrl: 'https://github.com/anola197/ekonnect-ethical-skeptics',
    liveUrl: '',
    featured: false,
    category: 'Hackathons'
  },
  {
    id: 'portfolio-website',
    title: 'Personal Portfolio Website',
    description: 'A responsive portfolio site showcasing projects, experience, and contact information. Built with Next.js, Tailwind CSS, and hosted on Vercel.',
    image: '/images/portfolio.png',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel'],
    githubUrl: 'https://github.com/anola197/portfolio',
    liveUrl: 'https://aayushi.vercel.app',
    featured: false,
    category: 'Personal Projects'
  }  
  
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
        <Image 
          src={project.image} 
          alt={project.title} 
          fill
          className="object-cover"
        />
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