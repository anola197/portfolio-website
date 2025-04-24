'use client';

import React, { useEffect, useRef } from 'react';
import { type ExperienceItem } from '@/lib/data';
import { ChevronRight, Calendar, MapPin, ExternalLink } from 'lucide-react';

type ExperienceSectionProps = {
  experiences: ExperienceItem[];
};

export default function ExperienceSection({ experiences }: ExperienceSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const handleIntersect = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    // Observe all experience items
    const experienceItems = document.querySelectorAll('.experience-item');
    experienceItems.forEach(item => {
      observer.observe(item);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section 
      className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800" 
      ref={sectionRef}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Professional Experience</h2>
            <div className="h-1 bg-indigo-600 mx-auto rounded-full"></div>
            {/* <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              A timeline of my professional experiences and the skills I've developed along the way
            </p> */}
          </div>
          
          {/* Experience Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-indigo-200 dark:bg-indigo-800 transform -translate-x-1/2"></div>
            
            <div className="space-y-12">
              {experiences.map((experience, index) => (
                <div 
                  key={experience.id} 
                  className="experience-item opacity-0 transform translate-y-8 transition-all duration-700 ease-out"
                >
                  <div className="flex flex-col md:flex-row items-center">
                    {/* For Desktop: Left/Right alternating layout */}
                    <div className="hidden md:block md:w-1/2 md:pr-12 md:text-right">
                      {index % 2 === 0 ? (
                        <>
                          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{experience.title}</h3>
                          <p className="text-indigo-600 dark:text-indigo-400 font-medium text-lg mt-1">{experience.organization}</p>
                          <div className="flex items-center justify-end mt-2">
                            <Calendar size={16} className="text-gray-500 dark:text-gray-400" />
                            <span className="ml-2 text-gray-600 dark:text-gray-300">{experience.startDate} - {experience.endDate}</span>
                          </div>
                          <div className="flex items-center justify-end mt-1">
                            <MapPin size={16} className="text-gray-500 dark:text-gray-400" />
                            <span className="ml-2 text-gray-600 dark:text-gray-300">{experience.location || 'Remote'}</span>
                          </div>
                        </>
                      ) : null}
                    </div>
                    
                    {/* For Desktop: Timeline Node */}
                    <div className="hidden md:flex md:items-center md:justify-center md:w-12 md:relative">
                      <div className="w-12 h-12 bg-white dark:bg-gray-800 rounded-full border-4 border-indigo-500 flex items-center justify-center z-10">
                        <span className="text-indigo-600 dark:text-indigo-400 font-bold">{index + 1}</span>
                      </div>
                    </div>
                    
                    {/* For Desktop: Right content */}
                    <div className="hidden md:block md:w-1/2 md:pl-12">
                      {index % 2 === 1 ? (
                        <>
                          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{experience.title}</h3>
                          <p className="text-indigo-600 dark:text-indigo-400 font-medium text-lg mt-1">{experience.organization}</p>
                          <div className="flex items-center mt-2">
                            <Calendar size={16} className="text-gray-500 dark:text-gray-400" />
                            <span className="ml-2 text-gray-600 dark:text-gray-300">{experience.startDate} - {experience.endDate}</span>
                          </div>
                          <div className="flex items-center mt-1">
                            <MapPin size={16} className="text-gray-500 dark:text-gray-400" />
                            <span className="ml-2 text-gray-600 dark:text-gray-300">{experience.location || 'Remote'}</span>
                          </div>
                        </>
                      ) : null}
                    </div>
                    
                    {/* For Mobile: Full width content */}
                    <div className="md:hidden w-full">
                      <div className="flex items-center">
                        <div className="flex items-center justify-center w-10 h-10 bg-white dark:bg-gray-800 rounded-full border-4 border-indigo-500 mr-4">
                          <span className="text-indigo-600 dark:text-indigo-400 font-bold">{index + 1}</span>
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white">{experience.title}</h3>
                          <p className="text-indigo-600 dark:text-indigo-400 font-medium">{experience.organization}</p>
                        </div>
                      </div>
                      <div className="ml-14">
                        <div className="flex items-center mt-2">
                          <Calendar size={14} className="text-gray-500 dark:text-gray-400" />
                          <span className="ml-2 text-sm text-gray-600 dark:text-gray-300">{experience.startDate} - {experience.endDate}</span>
                        </div>
                        <div className="flex items-center mt-1">
                          <MapPin size={14} className="text-gray-500 dark:text-gray-400" />
                          <span className="ml-2 text-sm text-gray-600 dark:text-gray-300">{experience.location || 'Remote'}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Experience Content Card - Full width for both mobile and desktop */}
                  <div className={`mt-4 md:mt-8 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border-l-4 border-indigo-500 ${
                    index % 2 === 0 ? 'md:ml-[calc(50%+1.5rem)]' : 'md:mr-[calc(50%+1.5rem)]'
                  }`}>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      {experience.description}
                    </p>
                    
                    {/* Skills */}
                    <div className="mt-6">
                      <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-3">Technologies & Skills</h4>
                      <div className="flex flex-wrap gap-2">
                        {experience.skills.map((skill) => (
                          <span 
                            key={skill} 
                            className="px-3 py-1 bg-indigo-50 text-indigo-700 text-xs font-medium rounded-full dark:bg-indigo-900 dark:text-indigo-200"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .experience-item.animate-in {
          opacity: 1;
          transform: translateY(0);
          transition-delay: 0.1s;
        }
        
        @media (prefers-reduced-motion) {
          .experience-item {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}