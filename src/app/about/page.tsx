// src/app/about/page.tsx
import Image from 'next/image';
import { Briefcase, GraduationCap, Award, User } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl font-bold mb-6">About Me</h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              I'm a passionate full-stack developer with a strong foundation in both frontend and backend technologies. From building intuitive UIs with React and Next.js to architecting scalable backends using .NET, FastAPI, and PostgreSQL, 
              I thrive on creating seamless digital experiences that solve meaningful, real-world problems.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              Currently pursuing my Master’s in Computer Science at Arizona State University, I've led projects like the Knowledge Alliance Tool that connect researchers and communities through intelligent design and smart search. 
              I'm always exploring new tools, refining my craft, and pushing the boundaries of what great software can do.
              </p>
              <div className="flex space-x-4">
                <Button href="/contact">Contact Me</Button>
                <Button href="/projects" variant="outline">View Projects</Button>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-lg overflow-hidden shadow-xl">
                {/* Replace with your image */}
                <div className="absolute inset-0 flex items-center justify-center bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400">
                  <User size={40} />
                </div>
                {/* 
                <Image 
                  src="/images/about-me.jpg" 
                  alt="About Me" 
                  fill
                  className="object-cover"
                  priority
                />
                */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">My Experience</h2>
          
          <div className="space-y-12">
            {/* Experience Item 1 */}
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/4">
                <div className="bg-blue-100 dark:bg-blue-900 p-4 rounded-lg inline-flex">
                  <Briefcase className="text-blue-600 dark:text-blue-300" size={24} />
                </div>
                <h3 className="text-xl font-bold mt-3">Software Developer</h3>
                <p className="text-gray-600 dark:text-gray-400">2024 - Present</p>
                <p className="font-medium">Knowledge Exchange for Resiliance, ASU</p>
              </div>
              <div className="md:w-3/4">
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                Led the development of the Knowledge Alliance Tool at ASU using React, .NET 8, FastAPI, and PostgreSQL to connect researchers with community organizations. 
                Implemented full-stack features, semantic search, and role-based access, enhancing collaboration and discovery.
                </p>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                  <li>Reduced search latency by 20% with optimized indexing and query tuning</li>
                  <li>Improved match accuracy and user engagement by 40% using semantic ranking</li>
                  <li>Built secure RBAC with JWT and enhanced UX with tagging, filtering, and pagination</li>
                  <li>Collaborated with researchers and stakeholders to refine platform features</li>
                </ul>
              </div>
            </div>
            
            {/* Experience Item 2 */}
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/4">
                <div className="bg-blue-100 dark:bg-blue-900 p-4 rounded-lg inline-flex">
                  <Briefcase className="text-blue-600 dark:text-blue-300" size={24} />
                </div>
                <h3 className="text-xl font-bold mt-3">Application Development Senior Analyst</h3>
                <p className="text-gray-600 dark:text-gray-400">2019 - 2023</p>
                <p className="font-medium">Accenture, India</p>
              </div>
              <div className="md:w-3/4">
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                Worked as an Application Development Senior Analyst at Accenture, where I built scalable, cloud-based solutions for manufacturing clients. 
                My focus was on automation, performance optimization, and real-time system monitoring across distributed environments.
                </p>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                  <li>Reduced stockouts by 30% by automating print job scheduling with Azure Functions</li>
                  <li>Improved API response time from 30s to 10ms by optimizing PL/SQL procedures</li>
                  <li>Built real-time monitoring dashboards using Grafana and Prometheus</li>
                  <li>Led CI/CD implementation with Docker and Azure DevOps, cutting deployment cycles by 50%</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Education Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Education</h2>
          
          <div className="space-y-8">
            {/* Education Item 1 */}
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/4">
                <div className="bg-blue-100 dark:bg-blue-900 p-4 rounded-lg inline-flex">
                  <GraduationCap className="text-blue-600 dark:text-blue-300" size={24} />
                </div>
                <h3 className="text-xl font-bold mt-3">Master's Degree</h3>
                <p className="text-gray-600 dark:text-gray-400">2023 - 2025</p>
                <p className="font-medium">Computer Science</p>
              </div>
              <div className="md:w-3/4">
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                    <strong>Arizona State University - </strong> Specialized in web technologies and cloud computing.
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  Relevant Coursework: Advanced Operating Systems, Cloud Computing, Distributed Database System, Artificial Intelligence, Data Mining, Advanced Data Structures and Algorithms, NLP.
                </p>
              </div>
            </div>
            
            {/* Education Item 2 */}
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/4">
                <div className="bg-blue-100 dark:bg-blue-900 p-4 rounded-lg inline-flex">
                  <GraduationCap className="text-blue-600 dark:text-blue-300" size={24} />
                </div>
                <h3 className="text-xl font-bold mt-3">Bachelor's Degree</h3>
                <p className="text-gray-600 dark:text-gray-400">2015 - 2019</p>
                <p className="font-medium">Electronics and Communication</p>
              </div>
              <div className="md:w-3/4">
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                    <strong>Visvesvaraya Technological University.</strong>
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  Relevant Coursework: Object-Oriented Programming, Database Systems, Web Development, and Software Project Management.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Skills & Tools Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Skills & Tools</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Frontend Skills */}
            <div>
              <h3 className="text-xl font-bold mb-6">Frontend</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">JavaScript & TypeScript</span>
                    <span>95%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                    <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: "95%" }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">React & Next.js</span>
                    <span>90%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                    <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: "90%" }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">CSS & Tailwind</span>
                    <span>85%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                    <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: "85%" }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">UI/UX Design</span>
                    <span>75%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                    <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: "75%" }}></div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Backend Skills */}
            <div>
              <h3 className="text-xl font-bold mb-6">Backend</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">Node.js & Express</span>
                    <span>90%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                    <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: "90%" }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">Databases (SQL & NoSQL)</span>
                    <span>85%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                    <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: "85%" }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">APIs & GraphQL</span>
                    <span>80%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                    <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: "80%" }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">Docker & DevOps</span>
                    <span>70%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                    <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: "70%" }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Personal Interests Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Personal Interests</h2>
          
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              When I'm not coding, you can find me exploring these interests:
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="p-4 rounded-lg bg-white dark:bg-gray-700 shadow-md">
                <div className="bg-blue-100 dark:bg-blue-900 p-4 rounded-full mx-auto mb-3 w-16 h-16 flex items-center justify-center">
                  <span className="text-blue-600 dark:text-blue-300 text-2xl">📚</span>
                </div>
                <h3 className="font-medium">Reading</h3>
              </div>
              
              <div className="p-4 rounded-lg bg-white dark:bg-gray-700 shadow-md">
                <div className="bg-blue-100 dark:bg-blue-900 p-4 rounded-full mx-auto mb-3 w-16 h-16 flex items-center justify-center">
                  <span className="text-blue-600 dark:text-blue-300 text-2xl">🏃</span>
                </div>
                <h3 className="font-medium">Running</h3>
              </div>
              
              <div className="p-4 rounded-lg bg-white dark:bg-gray-700 shadow-md">
                <div className="bg-blue-100 dark:bg-blue-900 p-4 rounded-full mx-auto mb-3 w-16 h-16 flex items-center justify-center">
                  <span className="text-blue-600 dark:text-blue-300 text-2xl">✈️</span>
                </div>
                <h3 className="font-medium">Traveling</h3>
              </div>
              
              <div className="p-4 rounded-lg bg-white dark:bg-gray-700 shadow-md">
                <div className="bg-blue-100 dark:bg-blue-900 p-4 rounded-full mx-auto mb-3 w-16 h-16 flex items-center justify-center">
                  <span className="text-blue-600 dark:text-blue-300 text-2xl">🎸</span>
                </div>
                <h3 className="font-medium">Music</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Let's Work Together</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Now that you know a bit more about me, let's discuss how I can help bring your next project to life.
          </p>
          <Button href="/contact">Get In Touch</Button>
        </div>
      </section>
    </>
  );
}