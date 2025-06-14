"use client"

import type React from "react"
import { useState } from "react"
import { ExternalLink, Github, Calendar, Users, Code, Zap, ChevronLeft, ChevronRight } from "lucide-react"
import { AnimatePresence, motion } from "framer-motion"

const Projects: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const projectsPerPage = 1

  const allProjects = [
    {
      title: "TaskFlow - Full Stack Task Management Web App",
      duration: "March 2025 - April 2025",
      type: "Oaktree Innovations Curriculum Final Project",
      category: "Full Stack Development",
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
      githubUrl: "https://github.com/reyowner/TaskFlow",
      featured: true,
      stats: {
        duration: "2 months",
        team: "Individual",
        status: "Live",
      },
    },
    {
      title: "PREDIKTA Marketing App - Frontend Development",
      duration: "March 2025 - May 2025",
      company: "Netopia AI (via Oaktree Innovations)",
      role: "Full Stack Software Engineer Intern",
      category: "Professional Work",
      description:
        "Contributed to the development of PREDIKTA Marketing App as part of the Oaktree Innovations internship program, working directly with client requirements and professional development standards.",
      features: [
        "Implemented UI components from Figma designs",
        "Integrated frontend components with backend APIs",
        "Collaborated in agile development environment",
        "Participated in code reviews and team meetings",
        "Ensured responsive design across devices",
      ],
      technologies: ["React.js", "Next.js", "Figma to Code", "API Integration", "Agile/Scrum"],
      professional: true,
      stats: {
        duration: "3 months",
        team: "3 developers",
        status: "Completed",
      },
    },
    {
      title: "E-Portfolio Website",
      duration: "June 2025 - Present",
      type: "Personal Project",
      category: "Frontend Development",
      description:
        "A modern, responsive portfolio website built with Next.js and React that you're currently viewing. Features dynamic animations, contact form integration, pagination, and optimized performance. Showcases my projects, skills, and professional journey with an emphasis on user experience and modern design principles.",
      features: [
        "Responsive design with Tailwind CSS",
        "Dynamic typing animations and interactive elements",
        "Contact form with EmailJS integration",
        "Smooth scrolling navigation and pagination",
        "SEO optimized and performance focused",
        "Modern UI/UX with glassmorphism effects",
      ],
      technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "EmailJS"],
      liveUrl: "#",
      githubUrl: "https://github.com/reyowner/e-portfolio",
      stats: {
        duration: "Ongoing",
        team: "Individual",
        status: "Ongoing",
      },
    },
  ]

  const totalPages = Math.ceil(allProjects.length / projectsPerPage)
  const startIndex = (currentPage - 1) * projectsPerPage
  const currentProjects = allProjects.slice(startIndex, startIndex + projectsPerPage)

  const getProjectIcon = (category: string) => {
    switch (category) {
      case "Full Stack Development":
        return Code
      case "Professional Work":
        return Users
      case "Frontend Development":
        return Zap
      default:
        return Code
    }
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Full Stack Development":
        return "bg-blue-100 text-blue-800 border-blue-200 dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-800"
      case "Professional Work":
        return "bg-green-100 text-green-800 border-green-200 dark:bg-green-900/30 dark:text-green-300 dark:border-green-800"
      case "Frontend Development":
        return "bg-purple-100 text-purple-800 border-purple-200 dark:bg-purple-900/30 dark:text-purple-300 dark:border-purple-800"
      case "Database Management":
        return "bg-orange-100 text-orange-800 border-orange-200 dark:bg-orange-900/30 dark:text-orange-300 dark:border-orange-800"
      case "API Integration":
        return "bg-pink-100 text-pink-800 border-pink-200 dark:bg-pink-900/30 dark:text-pink-300 dark:border-pink-800"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-700"
    }
  }

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-50/50 via-white to-purple-50/30 dark:from-gray-800/30 dark:via-gray-900 dark:to-gray-800/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A showcase of my professional work and personal projects
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Navigation Arrows - Desktop */}
          <div className="hidden md:flex justify-between absolute w-full top-1/2 -translate-y-1/2 z-10">
            <button
              onClick={() => setCurrentPage(currentPage === 1 ? totalPages : currentPage - 1)}
              className="group flex items-center justify-center w-12 h-12 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 shadow-lg -translate-x-16"
              aria-label="Previous project"
            >
              <ChevronLeft className="h-5 w-5 text-gray-600 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300" />
            </button>

            <button
              onClick={() => setCurrentPage(currentPage === totalPages ? 1 : currentPage + 1)}
              className="group flex items-center justify-center w-12 h-12 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 shadow-lg translate-x-16"
              aria-label="Next project"
            >
              <ChevronRight className="h-5 w-5 text-gray-600 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300" />
            </button>
          </div>

          {/* Projects Container */}
          <div className="max-w-5xl mx-auto relative">
            <div className="bg-white dark:bg-gray-800 rounded-3xl border border-gray-200 dark:border-gray-700 shadow-lg overflow-hidden">
              {currentProjects.map((project, index) => {
                const ProjectIcon = getProjectIcon(project.category)
                return (
                  <div
                    key={startIndex + index}
                    className="group rounded-3xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-lg hover:shadow-2xl hover:border-blue-500/30 dark:hover:border-blue-400/30 transition-all duration-500 hover:scale-[1.02]"
                  >
                    {/* Project Header */}
                    <div className="p-6 pb-4">
                      <div className="flex flex-wrap items-center gap-3 mb-4">
                        {project.featured && (
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg">
                            ⭐ Featured Project
                          </span>
                        )}
                        <span
                          className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border ${getCategoryColor(project.category)}`}
                        >
                          <ProjectIcon className="w-3 h-3 mr-1" />
                          {project.category}
                        </span>
                        <span className="text-sm text-gray-500 dark:text-gray-400 flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {project.duration}
                        </span>
                      </div>

                      <h3 className="text-2xl md:text-3xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                        {project.title}
                      </h3>

                      {project.company && (
                        <div className="mb-2">
                          <p className="text-base font-semibold text-blue-600 dark:text-blue-400">{project.company}</p>
                          {project.role && <p className="text-sm text-gray-600 dark:text-gray-400">{project.role}</p>}
                        </div>
                      )}

                      {project.type && !project.company && (
                        <p className="text-base font-medium text-blue-600 dark:text-blue-400 mb-2">{project.type}</p>
                      )}
                    </div>

                    {/* Project Content */}
                    <div className="p-6 pt-0">
                      <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-6">{project.description}</p>

                      <div>
                        <h4 className="text-xl font-bold mb-4 text-gray-900 dark:text-white flex items-center">
                          <Zap className="w-5 h-5 mr-2 text-blue-600 dark:text-blue-400" />
                          Key Features
                        </h4>
                        <div className="mb-8 grid md:grid-cols-2 gap-3">
                          {project.features.map((feature, featureIndex) => (
                            <div
                              key={featureIndex}
                              className="flex items-start space-x-3 p-3 rounded-xl bg-gray-50 dark:bg-gray-700/30 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors duration-300"
                            >
                              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="text-xl font-bold mb-4 text-gray-900 dark:text-white flex items-center">
                          <Code className="w-5 h-5 mr-2 text-blue-600 dark:text-blue-400" />
                          Technologies Used
                        </h4>
                        <div className="mb-8 flex flex-wrap gap-2">
                          {project.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="inline-flex items-center px-4 py-2 rounded-xl text-sm font-medium bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 text-gray-800 dark:text-gray-200 hover:from-blue-100 hover:to-blue-200 dark:hover:from-blue-900/30 dark:hover:to-blue-800/30 transition-all duration-300 transform hover:scale-105"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Links */}
                      <div className="flex flex-wrap gap-3">
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm group inline-flex items-center px-5 py-3 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                          >
                            <ExternalLink className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                            {project.liveUrl === "#" ? "You're Here!" : "Live Demo"}
                          </a>
                        )}
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm group inline-flex items-center px-4 py-2 rounded-2xl border-2 border-gray-300 dark:border-gray-600 hover:border-blue-600 dark:hover:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-semibold transition-all duration-300 transform hover:scale-105"
                          >
                            <Github className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                            View Code
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Pagination and Mobile Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            {/* Mobile Navigation Arrows */}
            <button
              onClick={() => setCurrentPage(currentPage === 1 ? totalPages : currentPage - 1)}
              className="md:hidden group flex items-center justify-center w-10 h-10 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 shadow-lg"
              aria-label="Previous project"
            >
              <ChevronLeft className="h-5 w-5 text-gray-600 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300" />
            </button>

            {/* Pagination Dots */}
            <div className="flex items-center space-x-2">
              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPage(index + 1)}
                  className="group relative"
                  aria-label={`Go to project ${index + 1}`}
                >
                  <div
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      currentPage === index + 1
                        ? "bg-blue-600 dark:bg-blue-400 scale-125"
                        : "bg-gray-300 dark:bg-gray-600 group-hover:bg-gray-400 dark:group-hover:bg-gray-500"
                    }`}
                  />
                  <AnimatePresence>
                    {currentPage === index + 1 && (
                      <motion.div
                        className="absolute inset-0 rounded-full bg-blue-600/20 dark:bg-blue-400/20"
                        initial={{ scale: 0 }}
                        animate={{ scale: 2.5 }}
                        exit={{ scale: 0 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </AnimatePresence>
                </button>
              ))}
            </div>

            {/* Mobile Navigation Arrows */}
            <button
              onClick={() => setCurrentPage(currentPage === totalPages ? 1 : currentPage + 1)}
              className="md:hidden group flex items-center justify-center w-10 h-10 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 shadow-lg"
              aria-label="Next project"
            >
              <ChevronRight className="h-5 w-5 text-gray-600 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
