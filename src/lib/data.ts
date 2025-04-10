// src/lib/data.ts
export type Project = {
    id: string;
    title: string;
    description: string;
    image: string;
    tags: string[];
    liveUrl?: string;
    githubUrl?: string;
    featured: boolean;
  };
  
  export const projects: Project[] = [
    {
      id: 'distributed-job-scheduler',
      title: 'Distributed Job Scheduler',
      description:
        'Scalable job scheduling system with C#, Redis, DynamoDB, and Kafka using a master-worker architecture with Kubernetes for auto-scaling and resilience.',
      image: '/images/projects/distributed-job-scheduler.jpg',
      tags: ['C#', 'Redis', 'Kafka', 'DynamoDB', 'Kubernetes', 'Docker'],
      liveUrl: '', // Add if available
      githubUrl: '', // Add GitHub repo link if public
      featured: true,
    },
    {
      id: 'image-recognition-api',
      title: 'Image Recognition as a Service',
      description:
        'Serverless image recognition API using AWS Lambda, Flask, and S3, built to handle thousands of concurrent requests with dynamic EC2 scaling.',
      image: '/images/projects/image-recognition.jpg',
      tags: ['Python', 'Flask', 'AWS Lambda', 'S3', 'SQS'],
      liveUrl: '', // Add if available
      githubUrl: '', // Add GitHub repo link if public
      featured: true,
    },
    {
      id: 'predictive-maintenance',
      title: 'Real-Time Predictive Maintenance System',
      description:
        'Built a real-time predictive maintenance system using Flask and Random Forest. Visualized live sensor data and ML insights via a Next.js dashboard.',
      image: '/images/projects/predictive-maintenance.jpg',
      tags: ['Next.js', 'Flask', 'Python', 'SQLite', 'Machine Learning'],
      liveUrl: '', // Add if available
      githubUrl: '', // Add GitHub repo link if public
      featured: true,
    },
  ];  
  
  export type Skill = {
    name: string;
    category: 'frontend' | 'backend' | 'other';
  };
  
  export const skills: Skill[] = [
    // Frontend
    { name: 'JavaScript', category: 'frontend' },
    { name: 'TypeScript', category: 'frontend' },
    { name: 'React', category: 'frontend' },
    { name: 'Next.js', category: 'frontend' },
    { name: 'Tailwind CSS', category: 'frontend' },
    { name: 'HTML5', category: 'frontend' },
    { name: 'CSS3', category: 'frontend' },
  
    // Backend
    { name: 'C#', category: 'backend' },
    { name: '.NET Core', category: 'backend' },
    { name: 'FastAPI', category: 'backend' },
    { name: 'Flask', category: 'backend' },
    { name: 'Node.js', category: 'backend' },
    { name: 'PostgreSQL', category: 'backend' },
    { name: 'SQL Server', category: 'backend' },
    { name: 'MongoDB', category: 'backend' },
    { name: 'Redis', category: 'backend' },
    { name: 'DynamoDB', category: 'backend' },
    { name: 'GraphQL', category: 'backend' },
  
    // Other / DevOps / Tools
    { name: 'Docker', category: 'other' },
    { name: 'Kubernetes', category: 'other' },
    { name: 'Git', category: 'other' },
    { name: 'AWS', category: 'other' },
    { name: 'Microsoft Azure', category: 'other' },
    { name: 'CI/CD', category: 'other' },
    { name: 'Linux/Unix', category: 'other' },
  ];
  