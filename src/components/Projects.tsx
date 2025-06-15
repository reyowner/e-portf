"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { ExternalLink, Github, Calendar, Users, Code, Zap, ChevronLeft, ChevronRight } from "lucide-react"
import { AnimatePresence, motion } from "framer-motion"
import LoadingSpinner from "./LoadingSpinner"
import SkeletonLoader from "./SkeletonLoader"

const Projects: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [dragOffset, setDragOffset] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

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
      githubUrl: "https://github.com/reyowner/e-portf",
      stats: {
        duration: "Ongoing",
        team: "Individual",
        status: "Ongoing",
      },
    },
  ]

  const totalItems = allProjects.length

  // Simulate loading state
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)
    return () => clearTimeout(timer)
  }, [])

  const nextSlide = () => {
    setIsDragging(true)
    setDragOffset(-0.5)

    setTimeout(() => {
      const next = (currentIndex + 1) % totalItems
      setCurrentIndex(next)
      setIsDragging(false)
      setDragOffset(0)
    }, 150)
  }

  const prevSlide = () => {
    setIsDragging(true)
    setDragOffset(0.5)

    setTimeout(() => {
      const prev = (currentIndex - 1 + totalItems) % totalItems
      setCurrentIndex(prev)
      setIsDragging(false)
      setDragOffset(0)
    }, 150)
  }

  const handleNavigation = (newIndex: number) => {
    if (newIndex !== currentIndex) {
      const direction = newIndex > currentIndex ? -0.5 : 0.5
      setIsDragging(true)
      setDragOffset(direction)

      setTimeout(() => {
        setCurrentIndex(newIndex)
        setIsDragging(false)
        setDragOffset(0)
      }, 150)
    }
  }

  // Calculate wheel positions for each card
  const getWheelPosition = (index: number, offset = 0) => {
    const totalOffset = ((index - currentIndex + totalItems) % totalItems) + offset
    const angle = (totalOffset * 360) / totalItems
    const radius = 300

    const x = Math.sin((angle * Math.PI) / 180) * radius
    const z = Math.cos((angle * Math.PI) / 180) * radius - radius

    const scale = Math.max(0.6, 1 - Math.abs(totalOffset) * 0.2)
    const opacity = Math.max(0.3, 1 - Math.abs(totalOffset) * 0.35)

    return {
      x,
      z,
      scale,
      opacity,
      rotateY: -angle * 0.01,
    }
  }

  const getVisibleItems = () => {
    const items = []
    for (let i = -1; i <= 1; i++) {
      const index = (currentIndex + i + totalItems) % totalItems
      items.push({
        ...allProjects[index],
        position: i,
        index: index,
      })
    }
    return items
  }

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
        return "bg-blue-900/30 text-blue-300 border-blue-800"
      case "Professional Work":
        return "bg-green-900/30 text-green-300 border-green-800"
      case "Frontend Development":
        return "bg-purple-900/30 text-purple-300 border-purple-800"
      case "Database Management":
        return "bg-orange-900/30 text-orange-300 border-orange-800"
      case "API Integration":
        return "bg-pink-900/30 text-pink-300 border-pink-800"
      default:
        return "bg-gray-800 text-gray-300 border-gray-700"
    }
  }

  const swipeConfidenceThreshold = 50

  if (isLoading) {
    return (
      <section
        id="projects"
        className="py-8 sm:py-12 lg:py-20 bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12">
            <SkeletonLoader className="h-12 w-64 mx-auto mb-4" />
            <SkeletonLoader className="h-4 w-96 mx-auto" />
          </div>

          <div className="relative max-w-7xl mx-auto">
            <div className="flex justify-center items-center min-h-[600px]">
              <div className="flex flex-col items-center space-y-4">
                <LoadingSpinner size="lg" />
                <p className="text-gray-400 text-sm">Loading projects...</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="projects" className="py-8 sm:py-12 lg:py-20 bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-400 max-w-2xl mx-auto px-4 sm:px-0">
            A showcase of my professional work and personal projects
          </p>
        </div>

        <div className="relative max-w-7xl mx-auto">
          {/* Navigation Arrows */}
          <div className="hidden md:flex justify-between absolute w-full top-1/2 -translate-y-1/2 z-20">
            <button
              onClick={prevSlide}
              className="group flex items-center justify-center w-12 h-12 rounded-full bg-gray-800/90 backdrop-blur-sm border border-gray-700 hover:bg-gray-700 transition-all duration-300 shadow-lg -translate-x-3 sm:-translate-x-6 hover:scale-110"
              aria-label="Previous project"
            >
              <ChevronLeft className="h-5 w-5 text-gray-400 group-hover:text-blue-400 transition-colors duration-300" />
            </button>

            <button
              onClick={nextSlide}
              className="group flex items-center justify-center w-12 h-12 rounded-full bg-gray-800/90 backdrop-blur-sm border border-gray-700 hover:bg-gray-700 transition-all duration-300 shadow-lg translate-x-3 sm:translate-x-6 hover:scale-110"
              aria-label="Next project"
            >
              <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-blue-400 transition-colors duration-300" />
            </button>
          </div>

          {/* Wheel Carousel Container */}
          <div className="relative overflow-hidden" style={{ perspective: "1000px" }}>
            <motion.div
              className="relative flex items-start justify-center gap-3 sm:gap-6 min-h-[350px] sm:min-h-[450px] lg:min-h-[600px]"
              style={{ transformStyle: "preserve-3d" }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.1}
              onDragStart={() => setIsDragging(true)}
              onDragEnd={(e, { offset }) => {
                setIsDragging(false)
                setDragOffset(0)
                if (Math.abs(offset.x) > swipeConfidenceThreshold) {
                  if (offset.x > 0) {
                    prevSlide()
                  } else {
                    nextSlide()
                  }
                }
              }}
              onDrag={(e, { offset }) => {
                setDragOffset(offset.x / 200)
              }}
            >
              {getVisibleItems().map((project) => {
                const ProjectIcon = getProjectIcon(project.category)
                const isCenter = project.position === 0
                const wheelPos = getWheelPosition(project.index, isDragging ? dragOffset : 0)

                return (
                  <motion.div
                    key={`${project.index}-${currentIndex}`}
                    className={`flex-shrink-0 ${
                      isCenter
                        ? "w-full max-w-xs sm:max-w-2xl lg:max-w-5xl py-1 sm:py-2"
                        : "w-48 sm:w-64 lg:w-80 max-w-xs sm:max-w-sm"
                    }`}
                    style={{ transformStyle: "preserve-3d" }}
                    animate={{
                      x: wheelPos.x,
                      z: wheelPos.z,
                      scale: isCenter ? 1 : 0.8,
                      opacity: isCenter ? 1 : 0.6,
                      rotateY: wheelPos.rotateY,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 200,
                      damping: 30,
                      mass: 1,
                    }}
                    whileHover={
                      isCenter
                        ? {
                            scale: 1.02,
                            transition: { type: "spring", stiffness: 400, damping: 25 },
                          }
                        : {
                            scale: 0.85,
                            transition: { type: "spring", stiffness: 400, damping: 25 },
                          }
                    }
                    whileTap={!isCenter ? { scale: 0.75 } : {}}
                  >
                    <div
                      className={`group rounded-2xl sm:rounded-3xl border-2 bg-gray-800/80 shadow-lg transition-all duration-500 ${
                        isCenter
                          ? "border-blue-400/50 hover:border-blue-400/70 hover:shadow-2xl"
                          : "border-gray-700/50 hover:border-gray-600"
                      } ${!isCenter ? "cursor-pointer" : ""}`}
                      onClick={() => !isCenter && handleNavigation(project.index)}
                    >
                      {/* Project Header */}
                      <div className="p-3 pb-2 sm:p-4 sm:pb-3 lg:p-6 lg:pb-4">
                        <div className="flex flex-wrap items-center gap-1 sm:gap-2 lg:gap-3 mb-2 sm:mb-4">
                          <span
                            className={`inline-flex items-center px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs font-semibold border ${getCategoryColor(project.category)}`}
                          >
                            <ProjectIcon className="w-2 h-2 sm:w-3 sm:h-3 mr-1" />
                            <span className="text-xs sm:text-xs">{project.category}</span>
                          </span>
                          <span className="text-xs text-gray-500 flex items-center">
                            <Calendar className="w-2 h-2 sm:w-3 sm:h-3 lg:w-4 lg:h-4 mr-1" />
                            <span className="text-xs sm:text-xs">{project.duration}</span>
                          </span>
                        </div>

                        <h3
                          className={`font-bold mb-2 sm:mb-3 text-white group-hover:text-blue-400 transition-colors duration-300 leading-tight ${
                            isCenter ? "text-sm sm:text-lg md:text-xl lg:text-3xl" : "text-xs sm:text-sm lg:text-base"
                          }`}
                        >
                          {project.title}
                        </h3>

                        {project.company && (
                          <div className="mb-1 sm:mb-2">
                            <p className="text-xs sm:text-sm lg:text-base font-semibold text-blue-400">
                              {project.company}
                            </p>
                            {project.role && <p className="text-xs text-gray-400">{project.role}</p>}
                          </div>
                        )}

                        {project.type && !project.company && (
                          <p className="text-xs sm:text-sm lg:text-base font-medium text-blue-400 mb-1 sm:mb-2">
                            {project.type}
                          </p>
                        )}

                        <p
                          className={`text-gray-400 leading-relaxed ${
                            isCenter ? "text-xs sm:text-sm lg:text-base" : "text-xs line-clamp-2 sm:line-clamp-3"
                          }`}
                        >
                          {project.description}
                        </p>
                      </div>

                      {/* Content - Only show full content for center card */}
                      {isCenter && (
                        <motion.div
                          className="p-3 pt-0 sm:p-4 sm:pt-0 lg:p-6 lg:pt-0"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2, duration: 0.5 }}
                        >
                          <div className="mb-4 sm:mb-6 lg:mb-8">
                            <h4 className="text-xs sm:text-sm lg:text-xl font-bold mb-2 sm:mb-4 text-white flex items-center">
                              <Zap className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-blue-400" />
                              Key Features
                            </h4>
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-1 sm:gap-2 lg:gap-3">
                              {project.features.map((feature, featureIndex) => (
                                <motion.div
                                  key={featureIndex}
                                  className="flex items-start space-x-2 sm:space-x-3 p-2 sm:p-3 rounded-lg sm:rounded-xl bg-gray-700/30 hover:bg-blue-900/20 transition-colors duration-300"
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: 0.3 + featureIndex * 0.05, duration: 0.3 }}
                                >
                                  <div className="w-1 h-1 sm:w-2 sm:h-2 bg-blue-600 rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></div>
                                  <span className="text-gray-300 text-xs sm:text-sm leading-relaxed">{feature}</span>
                                </motion.div>
                              ))}
                            </div>
                          </div>

                          <div className="mb-4 sm:mb-6 lg:mb-8">
                            <h4 className="text-xs sm:text-sm lg:text-xl font-bold mb-2 sm:mb-4 text-white flex items-center">
                              <Code className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-blue-400" />
                              Technologies Used
                            </h4>
                            <div className="flex flex-wrap gap-1 sm:gap-2">
                              {project.technologies.map((tech, techIndex) => (
                                <motion.span
                                  key={techIndex}
                                  className="inline-flex items-center px-2 py-1 sm:px-3 sm:py-1.5 lg:px-4 lg:py-2 rounded-lg sm:rounded-xl text-xs font-medium bg-gradient-to-r from-gray-700 to-gray-600 text-gray-200 hover:from-blue-900/30 hover:to-blue-800/30 transition-all duration-300 transform hover:scale-105"
                                  initial={{ opacity: 0, scale: 0.8 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  transition={{ delay: 0.4 + techIndex * 0.05, duration: 0.3 }}
                                  whileHover={{ scale: 1.1 }}
                                  whileTap={{ scale: 0.95 }}
                                >
                                  {tech}
                                </motion.span>
                              ))}
                            </div>
                          </div>

                          {/* Links with loading states */}
                          <motion.div
                            className="flex flex-wrap gap-2 sm:gap-3"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.3 }}
                          >
                            {project.liveUrl && (
                              <motion.a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-xs sm:text-sm group inline-flex items-center px-3 py-2 sm:px-4 sm:py-2 lg:px-5 lg:py-3 rounded-xl sm:rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={(e) => {
                                  if (project.liveUrl !== "#") {
                                    // Show loading state for external links
                                    const button = e.currentTarget
                                    const originalContent = button.innerHTML
                                    button.innerHTML =
                                      '<div class="flex items-center"><div class="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>Loading...</div>'
                                    setTimeout(() => {
                                      button.innerHTML = originalContent
                                    }, 2000)
                                  }
                                }}
                              >
                                <ExternalLink className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4 lg:h-5 lg:w-5 group-hover:rotate-12 transition-transform duration-300" />
                                {project.liveUrl === "#" ? "You're Here!" : "Live Demo"}
                              </motion.a>
                            )}
                            {project.githubUrl && (
                              <motion.a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-xs sm:text-sm group inline-flex items-center px-3 py-2 sm:px-4 sm:py-2 lg:px-5 lg:py-3 rounded-xl sm:rounded-2xl border-2 border-gray-700 hover:border-blue-600 hover:bg-blue-900/20 text-gray-300 hover:text-blue-400 font-semibold transition-all duration-300 transform hover:scale-105"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                              >
                                <Github className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4 lg:h-5 lg:w-5 group-hover:rotate-12 transition-transform duration-300" />
                                View Code
                              </motion.a>
                            )}
                          </motion.div>
                        </motion.div>
                      )}

                      {/* Side cards preview */}
                      {!isCenter && (
                        <div className="p-3 pt-0 sm:p-6 sm:pt-0">
                          <div className="text-center">
                            <div className="text-xs text-gray-500 mb-1 sm:mb-2">Click to view details</div>
                            <div className="flex justify-center">
                              <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4 text-blue-400" />
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </motion.div>
                )
              })}
            </motion.div>
          </div>
        </div>

        {/* Pagination and Mobile Navigation */}
        <div className="flex items-center justify-center gap-4 mt-6 sm:mt-8">
          {/* Mobile Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="md:hidden group flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-800 border border-gray-700 hover:bg-gray-700 transition-all duration-300 shadow-lg hover:scale-110"
            aria-label="Previous project"
          >
            <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400 group-hover:text-blue-400 transition-colors duration-300" />
          </button>

          {/* Pagination Dots */}
          <div className="flex items-center space-x-2">
            {Array.from({ length: totalItems }).map((_, index) => (
              <button
                key={index}
                onClick={() => handleNavigation(index)}
                className="group relative"
                aria-label={`Go to project ${index + 1}`}
              >
                <div
                  className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full transition-all duration-300 ${
                    currentIndex === index ? "bg-blue-600 scale-125" : "bg-gray-700 group-hover:bg-gray-600"
                  }`}
                />
                <AnimatePresence>
                  {currentIndex === index && (
                    <motion.div
                      className="absolute inset-0 rounded-full bg-blue-600/20"
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
            onClick={nextSlide}
            className="md:hidden group flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-800 border border-gray-700 hover:bg-gray-700 transition-all duration-300 shadow-lg hover:scale-110"
            aria-label="Next project"
          >
            <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400 group-hover:text-blue-400 transition-colors duration-300" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default Projects
