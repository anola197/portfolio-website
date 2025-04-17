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
  
  export interface ExperienceItem {
    id: string;
    title: string;
    organization: string;
    startDate: string;
    endDate: string;
    description: string;
    skills: string[];
  }
  
  export const experienceData: ExperienceItem[] = [
    {
      id: 'software-engineer-asu',
      title: 'Software Engineer - Graduate Research Aide',
      organization: 'Knowledge Exchange for Resilience at ASU',
      startDate: 'Jun 2024',
      endDate: 'Present',
      description:
        'Led full-stack development of the Knowledge Alliance Tool (KAT) using React, .NET Core, and FastAPI. Improved semantic search with FAISS, optimized PostgreSQL queries, migrated data from SQL Server, and enforced secure access with JWT-based RBAC.',
      skills: ['React', '.NET Core', 'FastAPI', 'PostgreSQL', 'SQL Server', 'FAISS', 'RBAC', 'JWT', 'CI/CD', 'DynamodB']
    },
    {
      id: 'senior-analyst-accenture',
      title: 'Application Development Senior Analyst',
      organization: 'Accenture',
      startDate: 'Mar 2022',
      endDate: 'Jul 2023',
      description:
        'Developed distributed MES APIs and dashboards using .NET, React, and Azure. Refactored PL/SQL for faster APIs, implemented CI/CD pipelines, real-time monitoring with Grafana, and automated multi-tenant script deployments.',
      skills: ['C#', '.NET', 'React', 'Azure', 'PL/SQL', 'Docker', 'Grafana', 'Prometheus']
    },
    {
      id: 'analyst-accenture',
      title: 'Application Development Analyst',
      organization: 'Accenture',
      startDate: 'Jun 2021',
      endDate: 'Feb 2022',
      description:
        'Built serverless data pipelines with Azure Functions for financial data processing. Created KPIs and reporting APIs secured by AAD, handling millions of records efficiently.',
      skills: ['Azure Functions', 'CI/CD', 'SQL', 'AAD', 'ETL', 'API Development']
    },
    {
      id: 'associate-accenture',
      title: 'Application Development Associate',
      organization: 'Accenture',
      startDate: 'Aug 2019',
      endDate: 'May 2021',
      description:
        'Developed responsive web interfaces and integrated real-time MES dashboards with SCADA/PLC systems for a tire manufacturing client. Translated complex workflows into scalable .NET + Angular solutions.',
      skills: ['C#', '.NET', 'Angular', 'SCADA', 'MES', 'Manufacturing Systems']
    }
  ];
  