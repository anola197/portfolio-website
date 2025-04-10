// src/components/layout/Footer.tsx
'use client';

import Link from 'next/link';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-8 bg-gray-100 dark:bg-gray-900 text-gray-600 dark:text-gray-300">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link href="/" className="font-bold text-xl">
              <span className="text-blue-600">Dev</span>Portfolio
            </Link>
            <p className="mt-2">© {new Date().getFullYear()} Aayushi. All rights reserved.</p>
          </div>
          
          <div className="flex space-x-4">
            <a 
              href="https://github.com/anola197" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/aayushi197/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="mailto:aaayushi971@gmail.com" 
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}