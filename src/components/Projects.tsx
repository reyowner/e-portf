import type React from "react"
import { ExternalLink, Github } from "lucide-react"

const Projects: React.FC = () => {
  const featuredProject = {
    title: "TaskFlow - Full Stack Task Management Web App",
    duration: "March 2025 - April 2025",
    type: "Oaktree Innovations Curriculum Final Project",
    description:
      "A comprehensive task management web application developed as the capstone project for Oaktree Innovations' development curriculum. Demonstrates full-stack development capabilities with modern web technologies and best practices.",
    features: [
      "Complete CRUD Operations for task management",
      "User Authentication with secure login",
      "Session Handling across browser sessions",
      "Responsive Design for all devices",
      "Modern UI/UX with clean interface",
      "RESTful API endpoints",
    ],
    technologies: ["React.js", "Next.js", "Python", "FastAPI", "PostgreSQL", "JWT", "Git"],
    liveUrl: "https://task-flow-xxm5.onrender.com",
    featured: true,
  }

  const professionalProject = {
    title: "PREDIKTA Marketing App - Frontend Development",
    duration: "March 2025 - May 2025",
    company: "Netopia AI (via Oaktree Innovations)",
    role: "Full Stack Software Engineer Intern",
    description:
      "Contributed to the development of PREDIKTA Marketing App as part of the Oaktree Innovations internship program, working directly with client requirements and professional development standards.",
    contributions: [
      "Implemented UI components from Figma designs",
      "Integrated frontend components with backend APIs",
      "Collaborated in agile development environment",
      "Participated in code reviews and team meetings",
      "Ensured responsive design across devices",
    ],
    technologies: ["React.js", "Next.js", "Figma", "API Integration", "Agile/Scrum"],
    professional: true,
  }

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Showcasing my technical skills through real-world applications and professional contributions
          </p>
        </div>

        <div className="space-y-12">
          {/* Featured Project - TaskFlow */}
          <div className="rounded-lg border-2 border-blue-500/20 hover:border-blue-500/50 transition-all duration-300 shadow-lg hover:shadow-xl bg-white dark:bg-gray-800">
            <div className="p-6 pb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-600 text-white">
                  Featured Project
                </span>
                <span className="text-sm text-gray-600 dark:text-gray-400">{featuredProject.duration}</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-semibold mb-2 text-gray-900 dark:text-white">
                {featuredProject.title}
              </h3>
              <p className="text-blue-600 dark:text-blue-400 font-medium">{featuredProject.type}</p>
            </div>
            <div className="px-6 pb-6 space-y-6">
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">{featuredProject.description}</p>

              <div>
                <h4 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Key Features</h4>
                <div className="grid md:grid-cols-2 gap-2">
                  {featuredProject.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0"></div>
                      <span className="text-gray-600 dark:text-gray-400">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {featuredProject.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <a
                  href={featuredProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors duration-200"
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Live Demo
                </a>
                <a
                  href="https://github.com/reyowner/TaskFlow"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 rounded-lg border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 font-medium transition-colors duration-200"
                >
                  <Github className="mr-2 h-4 w-4" />
                  View Code
                </a>
              </div>
            </div>
          </div>

          {/* Professional Project - PREDIKTA */}
          <div className="rounded-lg border-2 border-gray-200 dark:border-gray-700 hover:border-blue-500/30 transition-all duration-300 shadow-md hover:shadow-lg bg-white dark:bg-gray-800">
            <div className="p-6 pb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200">
                  Professional Work
                </span>
                <span className="text-sm text-gray-600 dark:text-gray-400">{professionalProject.duration}</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-semibold mb-2 text-gray-900 dark:text-white">
                {professionalProject.title}
              </h3>
              <div className="space-y-1">
                <p className="text-blue-600 dark:text-blue-400 font-medium">{professionalProject.company}</p>
                <p className="text-gray-600 dark:text-gray-400">{professionalProject.role}</p>
              </div>
            </div>
            <div className="px-6 pb-6 space-y-6">
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
                {professionalProject.description}
              </p>

              <div>
                <h4 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">My Contributions</h4>
                <div className="grid md:grid-cols-2 gap-2">
                  {professionalProject.contributions.map((contribution, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0"></div>
                      <span className="text-gray-600 dark:text-gray-400">{contribution}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Skills Demonstrated</h4>
                <div className="flex flex-wrap gap-2">
                  {professionalProject.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
