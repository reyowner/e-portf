export interface Project {
  slug: string;
  title: string;
  duration: string;
  company?: string;
  role?: string;
  type?: string;
  category: string;
  description: string;
  features: string[];
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  professional?: boolean;
  stats: {
    duration: string;
    team: string;
    status: string;
  };
  seoTitle: string;
  seoDescription: string;
}

export const projects: Project[] = [
  {
    slug: 'predikta-marketing-platform',
    title: 'PREDIKTA Marketing Platform — AI-Powered Campaign Intelligence',
    duration: 'March 2025 - August 2026',
    company: 'Netopia AI (via Oaktree Innovations)',
    role: 'Intern → Junior Fullstack Engineer',
    category: 'Professional Work',
    description:
      'Sole frontend developer on PREDIKTA, a comprehensive AI-powered marketing intelligence platform for Netopia AI. Owns the entire frontend — rebranding the platform from Figma designs to production, integrating FastAPI backend services, triaging UAT feedback from client stakeholders, and shipping features against a client-driven Gantt chart timeline. Ads scoring higher on Predikta achieve 3.4× higher CTR and 2.6× lower CPC in real-world campaigns.',
    features: [
      'Sole frontend developer — fully rebranded the platform from Figma designs to production',
      'Audience creation with 88K+ Filipino consumer dataset and advanced filtering',
      'AI-powered campaign simulation, ad performance prediction, and benchmarked scoring',
      'Creative testing and refinement with behavioral science purchase intent insights',
      'Real-time campaign monitoring and social media tracking dashboard',
      'Program-based campaign organization and full workflow management',
      'Admin console for organization and user management',
      'Direct UAT triage with Netopia AI stakeholders against Gantt chart delivery timelines',
    ],
    technologies: [
      'React 19',
      'Next.js 16',
      'TypeScript',
      'Tailwind CSS',
      'Radix UI',
      'TanStack Query',
      'Zustand',
      'Python 3.12',
      'FastAPI',
      'MongoDB',
      'AWS SQS/S3',
      'Google Cloud Pub/Sub/Storage',
      'Firebase',
      'Docker',
    ],
    professional: true,
    stats: {
      duration: '12+ months',
      team: '3-5 developers',
      status: 'Active Development',
    },
    seoTitle: 'PREDIKTA AI Marketing Platform - Renato Reoner Jr.',
    seoDescription: 'Sole frontend developer for PREDIKTA, an AI-powered marketing intelligence platform. Ads using Predikta achieve 3.4× higher CTR and 2.6× lower CPC in real campaigns.',
  },
  {
    slug: 'black-rose-gaming-platform',
    title: 'Black Rose — Gaming & Esports Community Platform',
    duration: 'July 2026 - Present',
    type: 'Voluntary Community Work',
    category: 'Full Stack Development',
    description:
      'Built Black Rose (blackrose.asia), a gaming and esports community platform led by Alodia Gosiengfiao, end-to-end. Features user profiles with Discord account verification and ROSE role-gated access, team and roster management for tournament participation, game discovery, and a Hall of Champions tracking tournament winners. Includes an admin console with tournament CRUD, Single Elimination, Swiss, and Double Elimination bracket formats, game management, and audit logging — supporting an officially partnered VALORANT / Riot Games event.',
    features: [
      'Discord OAuth authentication with member role verification',
      'Member profiles and team management system',
      'Tournament registration with multiple bracket formats',
      'Live bracket visualization and real-time updates',
      'Admin console for tournament lifecycle management',
      'In-app notifications and community features',
      'Mobile-ready with cross-platform support',
    ],
    technologies: [
      'React 19',
      'TanStack Start',
      'Supabase (SQL + RLS)',
      'TypeScript',
      'Tailwind CSS',
      'Capacitor',
    ],
    liveUrl: 'https://blackrose.asia',
    stats: {
      duration: 'Ongoing',
      team: 'Team',
      status: 'Active Development',
    },
    seoTitle: 'Black Rose Gaming Platform - Renato Reoner Jr.',
    seoDescription: 'Full-stack developer for Black Rose, a gaming and esports community platform with Discord OAuth, tournament brackets, and team management for VALORANT events.',
  },
  {
    slug: 'personal-e-portfolio-website',
    title: 'My Personal E-Portfolio Website',
    duration: 'June 2025 - Present',
    type: 'Personal Project',
    category: 'Frontend Development',
    description:
      "A modern, responsive portfolio website built with Next.js and React that you're currently viewing. Features dynamic animations, contact form integration, pagination, and optimized performance. Showcases my projects, skills, and professional journey with an emphasis on user experience and modern design principles.",
    features: [
      'Responsive design with Tailwind CSS',
      'Dynamic typing animations and interactive elements',
      'Contact form with EmailJS integration',
      'Smooth scrolling navigation and pagination',
      'SEO optimized and performance focused',
      'Modern UI/UX with glassmorphism effects',
    ],
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'EmailJS'],
    liveUrl: '#',
    githubUrl: undefined,
    stats: {
      duration: 'Ongoing',
      team: 'Individual',
      status: 'Ongoing',
    },
    seoTitle: 'Personal Portfolio Website - Renato Reoner Jr.',
    seoDescription: 'Modern portfolio website built with Next.js and React, featuring dynamic animations, contact form integration, and optimized performance for showcasing projects and skills.',
  },
  {
    slug: 'personalized-e-portfolio-website',
    title: 'Personalized E-Portfolio Website',
    duration: 'August 2026',
    type: 'Client Project',
    category: 'Frontend Development',
    description:
      'A personalized portfolio website developed in collaboration with the client to translate their vision, preferred design direction, and content requirements into a modern digital portfolio.',
    features: [
      'Client-driven design and content planning',
      'Architecture project showcases with detailed presentations',
      'Graphics portfolio with integrated PDF viewer',
      'Video portfolio for long-form and short-form content',
      'Contact form for freelance and full-time opportunities',
      'Responsive design with modern visual interactions',
    ],
    technologies: [
      'React 19',
      'TanStack Start',
      'TanStack Router',
      'TypeScript',
      'Tailwind CSS',
      'EmailJS',
    ],
    liveUrl: 'https://habagat-jervin-eport.vercel.app/',
    githubUrl: undefined,
    stats: {
      duration: 'Ongoing',
      team: 'Individual',
      status: 'Active Development',
    },
    seoTitle: 'Client Portfolio Website - Renato Reoner Jr.',
    seoDescription: 'Custom portfolio website development for clients, featuring architecture showcases, graphics portfolio with PDF viewer, video content, and contact forms for opportunities.',
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projects.map((project) => project.slug);
}
