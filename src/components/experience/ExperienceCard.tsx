'use client';

import React, { useState } from 'react';
import { InfoIcon } from 'lucide-react';
import { type ExperienceItem } from '@/lib/data';

type ExperienceCardProps = {
  experience: ExperienceItem;
  position: 'left' | 'right';
};

export default function ExperienceCard({ experience, position }: ExperienceCardProps) {
  const [showAllSkills, setShowAllSkills] = useState(false);
  const displaySkills = showAllSkills ? experience.skills : experience.skills.slice(0, 3);
  const skillCount = experience.skills.length;

  return (
    <div className={`bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6 relative ${position === 'left' ? 'text-right' : 'text-left'}`}>
      <div className="absolute top-4 right-4">
        <InfoIcon size={20} className="text-gray-500" />
      </div>
      <h3 className="text-xl font-bold mb-1">{experience.title}</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-1">{experience.organization}</p>
      <p className="text-gray-600 dark:text-gray-300 mb-4">{experience.startDate} - {experience.endDate}</p>
      <p className="mb-4 text-gray-700 dark:text-gray-200">{experience.description}</p>
      
      <div className={`flex flex-wrap gap-2 mt-4 ${position === 'left' ? 'justify-end' : 'justify-start'}`}>
        {displaySkills.map((skill) => (
          <span 
            key={skill} 
            className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded dark:bg-blue-900 dark:text-blue-200"
          >
            {skill}
          </span>
        ))}
        
        {skillCount > 3 && (
          <button 
            onClick={() => setShowAllSkills(!showAllSkills)}
            className="px-3 py-1 bg-gray-100 text-gray-800 text-xs font-medium rounded dark:bg-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          >
            {showAllSkills ? "Show Less" : `Show All (${skillCount})`}
          </button>
        )}
      </div>
    </div>
  );
}