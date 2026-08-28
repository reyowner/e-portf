import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ExternalLink, Github, Calendar, Users, Code, Zap, ArrowLeft } from 'lucide-react';
import { getProjectBySlug, getAllProjectSlugs } from '@/lib/projects';

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const slugs = getAllProjectSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  return {
    title: project.seoTitle,
    description: project.seoDescription,
    alternates: {
      canonical: `https://e-portfolio-reyowners-projects.vercel.app/projects/${project.slug}`,
    },
    openGraph: {
      title: project.seoTitle,
      description: project.seoDescription,
      type: 'website',
      url: `https://e-portfolio-reyowners-projects.vercel.app/projects/${project.slug}`,
      images: [
        {
          url: '/profile-konato.jpg',
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: project.seoTitle,
      description: project.seoDescription,
      images: ['/profile-konato.jpg'],
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const getProjectIcon = (category: string) => {
    switch (category) {
      case 'Full Stack Development':
        return Code;
      case 'Professional Work':
        return Users;
      case 'Frontend Development':
        return Zap;
      default:
        return Code;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Full Stack Development':
        return 'bg-blue-900/30 text-blue-300 border-blue-800';
      case 'Professional Work':
        return 'bg-green-900/30 text-green-300 border-green-800';
      case 'Frontend Development':
        return 'bg-purple-900/30 text-purple-300 border-purple-800';
      case 'Database Management':
        return 'bg-orange-900/30 text-orange-300 border-orange-800';
      case 'API Integration':
        return 'bg-pink-900/30 text-pink-300 border-pink-800';
      default:
        return 'bg-gray-800 text-gray-300 border-gray-700';
    }
  };

  const ProjectIcon = getProjectIcon(project.category);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800">
      <div className="container mx-auto px-4 py-8 sm:py-12 lg:py-20">
        {/* Back Button */}
        <Link
          href="/"
          className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Portfolio
        </Link>

        {/* Project Header */}
        <div className="mb-8 sm:mb-12">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span
              className={`inline-flex items-center px-3 py-1.5 rounded-full text-sm font-semibold border ${getCategoryColor(
                project.category
              )}`}
            >
              <ProjectIcon className="w-4 h-4 mr-2" />
              {project.category}
            </span>
            <span className="text-sm text-gray-500 flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              {project.duration}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white leading-tight">
            {project.title}
          </h1>

          {project.company && (
            <div className="mb-4">
              <p className="text-lg font-semibold text-blue-400">{project.company}</p>
              {project.role && <p className="text-sm text-gray-400">{project.role}</p>}
            </div>
          )}

          {project.type && !project.company && (
            <p className="text-lg font-medium text-blue-400 mb-4">{project.type}</p>
          )}

          <p className="text-gray-400 leading-relaxed text-lg max-w-4xl">{project.description}</p>

          {/* Stats */}
          <div className="flex flex-wrap gap-4 mt-6">
            <div className="bg-gray-800/50 rounded-lg px-4 py-2">
              <p className="text-xs text-gray-500">Duration</p>
              <p className="text-sm font-semibold text-white">{project.stats.duration}</p>
            </div>
            <div className="bg-gray-800/50 rounded-lg px-4 py-2">
              <p className="text-xs text-gray-500">Team</p>
              <p className="text-sm font-semibold text-white">{project.stats.team}</p>
            </div>
            <div className="bg-gray-800/50 rounded-lg px-4 py-2">
              <p className="text-xs text-gray-500">Status</p>
              <p className="text-sm font-semibold text-white">{project.stats.status}</p>
            </div>
          </div>
        </div>

        {/* Key Features */}
        <div className="mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-white flex items-center">
            <Zap className="w-6 h-6 mr-3 text-blue-400" />
            Key Features
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {project.features.map((feature, index) => (
              <div
                key={index}
                className="flex items-start space-x-3 p-4 rounded-xl bg-gray-800/50 hover:bg-blue-900/20 transition-colors duration-300"
              >
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-300 leading-relaxed">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies */}
        <div className="mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-white flex items-center">
            <Code className="w-6 h-6 mr-3 text-blue-400" />
            Technologies Used
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="inline-flex items-center px-4 py-2 rounded-xl text-sm font-medium bg-gradient-to-r from-gray-700 to-gray-600 text-gray-200 hover:from-blue-900/30 hover:to-blue-800/30 transition-all duration-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Links */}
        <div className="flex flex-wrap gap-4">
          {project.liveUrl && project.liveUrl !== '#' && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold transition-all duration-300"
            >
              <ExternalLink className="mr-2 h-5 w-5" />
              Live Demo
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 rounded-xl border-2 border-gray-700 hover:border-blue-600 hover:bg-blue-900/20 text-gray-300 hover:text-blue-400 font-semibold transition-all duration-300"
            >
              <Github className="mr-2 h-5 w-5" />
              View Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
