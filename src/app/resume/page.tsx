import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Download,
  Mail,
  Github,
  Linkedin,
  MapPin,
  Calendar,
  ArrowLeft,
  Code2,
  Database,
  Server,
  Users,
  Award,
  Building,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Resume - Renato Reoner Jr. | Fullstack Developer',
  description:
    'Professional resume of Renato Reoner Jr., a Fullstack Developer with experience in React, Next.js, TypeScript, and modern web technologies. BS Information Technology graduate from Technological Institute of the Philippines.',
  alternates: {
    canonical: 'https://e-portfolio-reyowners-projects.vercel.app/resume',
  },
  openGraph: {
    title: 'Resume - Renato Reoner Jr. | Fullstack Developer',
    description:
      'Professional resume of Renato Reoner Jr., a Fullstack Developer with experience in React, Next.js, TypeScript, and modern web technologies.',
    type: 'website',
    url: 'https://e-portfolio-reyowners-projects.vercel.app/resume',
    images: [
      {
        url: '/profile-konato.jpg',
        width: 1200,
        height: 630,
        alt: 'Renato Reoner Jr.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Resume - Renato Reoner Jr. | Fullstack Developer',
    description:
      'Professional resume of Renato Reoner Jr., a Fullstack Developer with experience in React, Next.js, TypeScript, and modern web technologies.',
    images: ['/profile-konato.jpg'],
  },
};

export default function ResumePage() {
  const personalInfo = {
    name: 'Renato Reoner Jr.',
    title: 'Fullstack Developer',
    location: 'Taguig, Metro Manila, Philippines',
    email: 'domasigreoner@gmail.com',
    github: 'https://github.com/reyowner',
    linkedin: 'https://linkedin.com/in/rreonerjr',
  };

  const experiences = [
    {
      title: 'Junior Fullstack Engineer',
      company: 'Oaktree Innovations',
      duration: 'June 2025 - August 2026',
      location: 'Remote',
      type: 'Full-time',
      status: 'Recent',
      description:
        "Served as the sole frontend developer for PREDIKTA, completely rebranding the platform based on Netopia AI's UI/UX team designs and translating Figma designs into production-ready components, interfaces, and pages. Integrated REST APIs and backend services for each feature, connecting the React/Next.js frontend with FastAPI while independently testing integrations and resolving issues. Works directly with client stakeholders — translating requirements into functional features, triaging UAT feedback, and shipping fixes against a client-driven Gantt chart timeline — in a 3–5 person agile team. Promoted from intern to full-time based on internship performance.",
      achievements: [
        'Sole frontend developer for PREDIKTA marketing intelligence platform',
        'Complete platform rebrand from Figma designs to production',
        'Direct client stakeholder communication and UAT feedback triage',
        'Feature delivery against client-driven Gantt chart timeline',
        'Integration of FastAPI backend services with React/Next.js frontend',
        'Promoted from intern to full-time based on performance',
      ],
      technologies: [
        'React 19',
        'Next.js 16',
        'TypeScript',
        'Tailwind CSS',
        'Radix UI',
        'TanStack Query',
        'Zustand',
        'FastAPI',
        'MongoDB',
        'AWS SQS/S3',
        'Google Cloud Pub/Sub/Storage',
      ],
    },
    {
      title: 'Full Stack Software Engineer Intern',
      company: 'Oaktree Innovations',
      duration: 'March 2025 - May 2025',
      location: 'Remote',
      type: 'Internship',
      status: 'Completed',
      description:
        'Gained comprehensive full-stack development experience in a fully remote, agile environment. Contributed to both internal tools and client-facing applications while following professional development practices.',
      achievements: [
        'Contributed to internal and client-facing web applications in fully remote, agile development environment',
        'Developed and enhanced features using React.js, Next.js, and Python (FastAPI)',
        'Ensured alignment with Figma-based UI/UX designs and implemented custom designs when needed',
        'Successfully participated in development of PREDIKTA Marketing App for Netopia AI',
        'Completed comprehensive development curriculum with TaskFlow as final project',
        'Gained valuable hands-on experience in real-world software development',
      ],
      technologies: [
        'React.js',
        'Next.js',
        'FastAPI',
        'Python',
        'Figma to Code',
        'Git',
        'Agile Development',
      ],
    },
    {
      title: 'Bachelor of Science in Information Technology',
      company: 'Technological Institute of the Philippines - Manila',
      duration: '2021 - 2025',
      location: 'Manila, Philippines',
      type: 'Education',
      status: 'Completed',
      description:
        'Completed a comprehensive 4-year Information Technology program that provided strong foundations in software development, database management, and system analysis.',
      achievements: [
        '4-year comprehensive IT program with focus on modern technologies',
        'Software development principles and methodologies',
        'Strong foundation in problem-solving and analytical thinking',
        'Database design and management coursework',
        'Academic projects in various programming languages and technologies',
        'Capstone project demonstrating full-stack development and documentation skills',
        'Graduated with solid technical foundation for professional career',
      ],
      technologies: [
        'Programming Fundamentals',
        'Database Management',
        'Web Development',
        'Software Engineering',
        'System Analysis',
        'Project Management',
        'Security Best Practices',
      ],
    },
  ];

  const skillCategories = {
    frontend: {
      title: 'Frontend Development',
      icon: Code2,
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'React.js', level: 98 },
        { name: 'Next.js', level: 90 },
        { name: 'HTML/CSS', level: 100 },
        { name: 'JavaScript', level: 95 },
        { name: 'TypeScript', level: 98 },
        { name: 'Tailwind CSS', level: 95 },
      ],
    },
    backend: {
      title: 'Backend Development',
      icon: Database,
      color: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'FastAPI (Python)', level: 75 },
        { name: 'API Integration', level: 95 },
        { name: 'PostgreSQL', level: 70 },
        { name: 'RESTful APIs', level: 75 },
        { name: 'JWT Auth', level: 72 },
      ],
    },
    tools: {
      title: 'Tools & Development',
      icon: Server,
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'Git/GitHub', level: 95 },
        { name: 'VS Code', level: 100 },
        { name: 'Docker', level: 85 },
        { name: 'Agile/Scrum', level: 95 },
        { name: 'Figma', level: 75 },
      ],
    },
    soft: {
      title: 'Professional Skills',
      icon: Users,
      color: 'from-orange-500 to-red-500',
      skills: [
        { name: 'Team Collaboration', level: 100 },
        { name: 'Problem Solving', level: 95 },
        { name: 'Fast Learning', level: 98 },
        { name: 'Communication', level: 85 },
        { name: 'Time Management', level: 95 },
      ],
    },
  };

  const Progress = ({ value, color }: { value: number; color: string }) => (
    <div className="relative h-2 w-full overflow-hidden rounded-full bg-gray-700">
      <div
        className={`h-full bg-gradient-to-r ${color} transition-all duration-1000 ease-out`}
        style={{ width: `${value}%` }}
      ></div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800">
      <div className="container mx-auto px-4 py-8 sm:py-12 lg:py-20 max-w-5xl">
        {/* Back Button */}
        <Link
          href="/"
          className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Portfolio
        </Link>

        {/* Header */}
        <div className="bg-gray-800/50 rounded-2xl p-6 sm:p-8 mb-8 border border-gray-700">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">
                {personalInfo.name}
              </h1>
              <p className="text-xl text-blue-400 mb-3">{personalInfo.title}</p>
              <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                <span className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  {personalInfo.location}
                </span>
                <span className="flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  {personalInfo.email}
                </span>
              </div>
            </div>
            <div className="flex gap-3">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-gray-700 hover:bg-gray-600 text-gray-300 transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-gray-700 hover:bg-gray-600 text-gray-300 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="/RReoner_Resume.pdf"
                download
                className="inline-flex items-center px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold transition-all"
              >
                <Download className="w-4 h-4 mr-2" />
                Download PDF
              </a>
            </div>
          </div>
        </div>

        {/* Experience */}
        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-white flex items-center">
            <Building className="w-6 h-6 mr-3 text-blue-400" />
            Experience & Education
          </h2>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">{exp.title}</h3>
                    <p className="text-lg text-blue-400 mb-2">{exp.company}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                      <span className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {exp.duration}
                      </span>
                      <span className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {exp.location}
                      </span>
                    </div>
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      exp.status === 'Current'
                        ? 'bg-green-900/30 text-green-300 border border-green-800'
                        : 'bg-gray-700 text-gray-300 border border-gray-600'
                    }`}
                  >
                    {exp.status}
                  </span>
                </div>
                <p className="text-gray-400 mb-4 leading-relaxed">{exp.description}</p>
                <div className="mb-4">
                  <h4 className="text-sm font-bold text-white mb-2">Key Achievements</h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start text-gray-300 text-sm">
                        <Award className="w-4 h-4 mr-2 text-blue-400 mt-0.5 flex-shrink-0" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white mb-2">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-lg text-xs font-medium bg-gray-700 text-gray-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-white flex items-center">
            <Code2 className="w-6 h-6 mr-3 text-blue-400" />
            Skills & Technologies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.entries(skillCategories).map(([key, category]) => {
              const Icon = category.icon;
              return (
                <div key={key} className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                  <h3 className="text-lg font-bold text-white mb-4 flex items-center">
                    <Icon className="w-5 h-5 mr-2 text-blue-400" />
                    {category.title}
                  </h3>
                  <div className="space-y-4">
                    {category.skills.map((skill) => (
                      <div key={skill.name}>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm text-gray-300">{skill.name}</span>
                          <span className="text-sm text-gray-400">{skill.level}%</span>
                        </div>
                        <Progress value={skill.level} color={category.color} />
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Footer */}
        <div className="text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Renato Reoner Jr. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}
