// pages/index.tsx
import Image from 'next/image';
import Link from 'next/link';
import { FaLinkedin, FaGithub, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';
import React from 'react';

// Define types for social media links
interface SocialLink {
  icon: React.ReactNode;
  text: string;
  href: string;
}

// Define types for content sections
interface ContentSection {
  emoji: string;
  title: string;
  content: string;
}

const Home: React.FC = () => {
  // Social media links data with proper typing
  const socialLinks: SocialLink[] = [
    { icon: <FaMapMarkerAlt />, text: 'Tempe, AZ', href: '#' },
    { icon: <FaEnvelope />, text: 'Email', href: 'mailto:aaayushi971@gmail.com' },
    { icon: <FaLinkedin />, text: 'LinkedIn', href: 'https://www.linkedin.com/in/aayushi197/' },
    { icon: <FaGithub />, text: 'Github', href: 'https://github.com/anola197' }
  ];

  // Content sections data with proper typing
  const contentSections: ContentSection[] = [
    {
      emoji: '🚀',
      title: 'Meet Aayushi: The Architect of Meaningful Tech',
      content: `Hey there! I'm Aayushi, a tech enthusiast from Tempe, AZ, who sees code as more than 
                just logic—it's a language for solving human puzzles. Whether it's AI that understands 
                nuance or systems that bring people together, I build bridges between technology and 
                the real world, one innovative solution at a time.`
    },
    {
      emoji: '💎',
      title: 'From Bangalore to Arizona: A Journey of Curiosity',
      content: `My story began in the bustling tech hubs of Bangalore, where I first discovered how electronics could speak the language of innovation. 
                Today at Arizona State University, I'm weaving that foundation into the future—exploring how AI and distributed systems can not only compute, 
                but connect and empower. This isn't just an academic path—it's a mission to build technology that understands people as deeply as it does data.`
    },
    {
      emoji: '🎨',
      title: 'Where Data Meets Creativity',
      content: `At Accenture, I didn’t just optimize MES systems—I turned factories into symphonies of 
                real-time data, reducing downtime by 100+ hours yearly. My secret? Treating every 
                algorithm like a blank canvas and every problem like an opportunity to innovate.`
    },
    {
      emoji: '🌍',
      title: 'Building Tools That Connect Ideas',
      content: `The Knowledge Alliance Tool isn’t just another platform—it’s a digital ecosystem where 
                researchers collaborate seamlessly. By weaving semantic search and intuitive design into 
                its core, I helped ideas find their perfect match, boosting engagement by 40%.`
    },
    {
      emoji: '🔮',
      title: 'The Future: Tech with Heart',
      content: `What excites me most? AI that empowers, systems that scale ethically, and code that 
                tells a story. I’m currently obsessed with making distributed systems as graceful as 
                they are powerful—because complexity shouldn’t mean compromise.`
    }
  ];


  return (
    <div className="min-h-screen bg-white">
      {/* Main Content */}
      <main className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col md:flex-row pt-10 pb-20">
          {/* Left Sidebar */}
          <div className="md:w-1/4 flex flex-col items-center mb-8 md:mb-0">
            <div className="w-48 h-48 relative mb-4 overflow-hidden rounded-full">
              <Image
                src="/images/profile-placeholder.jpg"
                alt="Aayushi"
                fill
                sizes="(max-width: 768px) 100vw, 33vw" 
                className="object-cover"
                priority
              />
            </div>
            <h2 className="text-xl font-medium mb-2">Aayushi</h2>
            <p className="text-gray-600 text-sm mb-4 text-center">
              Graduate Student at <br></br>Arizona State University
            </p>
            
            <div className="flex flex-col space-y-2 text-gray-600">
              {socialLinks.map((link, index) => (
                <Link 
                  key={index} 
                  href={link.href} 
                  className="flex items-center hover:text-gray-900"
                >
                  <span className="mr-2">{link.icon}</span>
                  <span>{link.text}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Right Content */}
          <div className="md:w-3/4 md:pl-12">
            <h1 className="text-3xl font-bold mb-6">About me</h1>
            
            {contentSections.map((section, index) => (
              <div key={index} className="mb-8">
                <p className="flex items-center font-medium mb-3">
                  <span className="mr-2">{section.emoji}</span>
                  {section.title}
                  <span className="ml-2">{section.emoji}</span>
                </p>
                
                <p className="text-gray-700 mb-6">
                  {section.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;