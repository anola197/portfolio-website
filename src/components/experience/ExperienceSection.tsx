'use client';

import React from 'react';
import { type ExperienceItem } from '@/lib/data';
import ExperienceCard from './ExperienceCard';

type ExperienceSectionProps = {
  experiences: ExperienceItem[];
};

export default function ExperienceSection({ experiences }: ExperienceSectionProps) {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Professional Experience</h2>
        <div className="border-t-4 border-orange-500 mb-12"></div>
        
        <div className="relative">
          {/* Timeline line - hidden on mobile, visible on medium screens and up */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gray-300 dark:bg-gray-600 transform -translate-x-1/2 z-0"></div>
          
          <div className="space-y-12 md:space-y-24">
            {experiences.map((experience, index) => (
              <div key={experience.id}>
                {/* Mobile view (stacked) */}
                <div className="md:hidden w-full mb-8 relative pl-8">
                  <div className="absolute left-0 top-0 h-full w-px bg-gray-300 dark:bg-gray-600"></div>
                  <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-orange-500 transform -translate-x-1/2"></div>
                  <ExperienceCard experience={experience} position="right" />
                </div>
                
                {/* Desktop view (side by side) with alternating layout */}
                <div className="hidden md:flex items-start relative">
                  {/* Left side card */}
                  <div className="w-1/2 pr-12">
                    {index % 2 === 0 ? (
                      <ExperienceCard experience={experience} position="right" />
                    ) : null}
                  </div>
                  
                  {/* Center timeline dot - positioned absolutely to overlay the line */}
                  <div className="absolute left-1/2 top-6 transform -translate-x-1/2 w-6 h-6 bg-orange-500 rounded-full z-10"></div>
                  
                  {/* Right side card */}
                  <div className="w-1/2 pl-12">
                    {index % 2 !== 0 ? (
                      <ExperienceCard experience={experience} position="left" />
                    ) : null}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}