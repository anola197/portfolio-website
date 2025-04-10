// src/app/page.tsx
import Hero from '@/components/home/Hero';
import FeaturedProjects from '@/components/home/FeaturedProjects';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { skills } from '@/lib/data';

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedProjects />
      
      {/* Skills Section */}
      <section className="py-16 container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">My Skills</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            These are the technologies I work with on a daily basis
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {skills.map((skill) => (
            <div 
              key={skill.name} 
              className="p-4 rounded-lg text-center bg-gray-100 dark:bg-gray-800 hover:shadow-md transition-shadow"
            >
              <div className="h-12 w-12 mx-auto mb-3 bg-blue-100 rounded-lg flex items-center justify-center">
                <span className="text-blue-600 font-bold text-xl">{skill.name.charAt(0)}</span>
              </div>
              <h3 className="font-medium">{skill.name}</h3>
            </div>
          ))}
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-blue-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Let's Work Together</h2>
          <p className="mb-8 max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
            I'm currently available for freelance work or full-time positions. If you have a project that needs my expertise, let's talk!
          </p>
          <Button href="/contact">
            Contact Me
          </Button>
        </div>
      </section>
    </>
  );
}