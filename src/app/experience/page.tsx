import ExperienceSection from '@/components/experience/ExperienceSection';
import { experienceData } from '@/lib/data';

export default function ExperiencePage() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-800">
      <ExperienceSection experiences={experienceData} />
    </main>
  );
}