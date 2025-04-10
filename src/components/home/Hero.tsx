// src/components/home/Hero.tsx
'use client';

import Image from 'next/image';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '../ui/Button';

export default function Hero() {
  return (
    <section className="py-16 md:py-24 lg:py-32 container mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div>
            <p className="text-blue-600 font-medium mb-2">👋 Hello, I'm</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Aayushi</h1>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-600 dark:text-gray-300">
              Full Stack Developer
            </h2>
          </div>
          
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            I build responsive, accessible and high-performance web applications with modern technologies.
            Specialized in React, Next.js and Node.js.
          </p>
          
          <div className="flex space-x-4">
            <Button href="/projects">
              See My Work <ArrowRight size={18} className="ml-2" />
            </Button>
            <Button href="/contact" variant="outline">
              Contact Me
            </Button>
          </div>
          
          <div className="flex space-x-4 pt-4">
            <a 
              href="https://github.com/anola197" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full border hover:bg-gray-100 dark:hover:bg-gray-800 border-gray-300 dark:border-gray-700"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/aayushi197/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full border hover:bg-gray-100 dark:hover:bg-gray-800 border-gray-300 dark:border-gray-700"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="mailto:aaayushi971@gmail.com" 
              className="p-2 rounded-full border hover:bg-gray-100 dark:hover:bg-gray-800 border-gray-300 dark:border-gray-700"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
        
        <div className="flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-gray-500">
            {/* Replace with your image */}
            <Image 
              src="/images/profile-placeholder.jpg" 
              alt="Your Name" 
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}