'use client';

import React, { useState } from 'react';
import { type ExperienceItem } from '@/lib/data';

type ExperienceCardProps = {
  experience: ExperienceItem;
  position?: 'left' | 'right';  // Making position optional since we're changing the layout
};

export default function ExperienceCard({ experience, position = 'left' }: ExperienceCardProps) {
  const [showAllSkills, setShowAllSkills] = useState(false);
  const displaySkills = showAllSkills ? experience.skills : experience.skills.slice(0, 5);
  const skillCount = experience.skills.length;

  return (
    <div className="w-full bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
      <div className="flex flex-col p-6">
        {/* Header with title and dates */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">{experience.title}</h3>
            <p className="text-blue-600 dark:text-blue-400 font-medium">{experience.organization}</p>
          </div>
          <div className="mt-2 md:mt-0">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
              {experience.startDate} - {experience.endDate}
            </span>
          </div>
        </div>
        
        {/* Description */}
        <p className="text-gray-700 dark:text-gray-300 mb-4">{experience.description}</p>
        
        {/* Skills */}
        <div className="mt-auto">
          <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">Skills & Technologies:</p>
          <div className="flex flex-wrap gap-2">
            {displaySkills.map((skill) => (
              <span 
                key={skill} 
                className="px-2 py-1 bg-gray-100 text-gray-800 text-xs font-medium rounded dark:bg-gray-700 dark:text-gray-300"
              >
                {skill}
              </span>
            ))}
            
            {skillCount > 5 && (
              <button 
                onClick={() => setShowAllSkills(!showAllSkills)}
                className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded dark:bg-blue-900 dark:text-blue-200 hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors"
              >
                {showAllSkills ? "Show Less" : `+${skillCount - 5} More`}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}