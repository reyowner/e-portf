"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Calendar, MapPin, Building, Award, Users, Code, ChevronLeft, ChevronRight } from "lucide-react"
import { AnimatePresence, motion } from "framer-motion"
import LoadingSpinner from "./LoadingSpinner"
import SkeletonLoader from "./SkeletonLoader"

const Experience: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [dragOffset, setDragOffset] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  const allExperiences = [
    {
      title: "Bachelor of Science in Information Technology",
      company: "Technological Institute of the Philippines - Manila",
      duration: "2021 - 2025",
      location: "Manila, Philippines",
      type: "Education",
      status: "Completed",
      category: "Academic Achievement",
      description:
        "Completed a comprehensive 4-year Information Technology program that provided strong foundations in software development, database management, and system analysis.",
      achievements: [
        "4-year comprehensive IT program with focus on modern technologies",
        "Software development principles and methodologies",
        "Strong foundation in problem-solving and analytical thinking",
        "Database design and management coursework",
        "Academic projects in various programming languages and technologies",
        "Capstone project demonstrating full-stack development and documentation skills",
        "Graduated with solid technical foundation for professional career",
      ],
      technologies: [
        "Programming Fundamentals",
        "Database Management",
        "Web Development",
        "Software Engineering",
        "System Analysis",
        "Project Management",
        "Security Best Practices",
      ],
      highlights: [
        "4-year degree completion",
        "Strong academic foundation",
        "Multiple programming languages",
        "Cybersecurity Specialization",
      ],
    },
    {
      title: "Full Stack Software Engineer Intern",
      company: "Oaktree Innovations",
      duration: "March 2025 - May 2025",
      location: "Remote",
      type: "Internship",
      status: "Completed",
      category: "Professional Experience",
      description:
        "Gained comprehensive full-stack development experience in a fully remote, agile environment. Contributed to both internal tools and client-facing applications while following professional development practices.",
      achievements: [
        "Contributed to internal and client-facing web applications in fully remote, agile development environment",
        "Developed and enhanced features using React.js, Next.js, and Python (FastAPI)",
        "Ensured alignment with Figma-based UI/UX designs and implemented custom designs when needed",
        "Successfully participated in development of PREDIKTA Marketing App for Netopia AI",
        "Completed comprehensive development curriculum with TaskFlow as final project",
        "Gained valuable hands-on experience in real-world software development",
        "Improved technical proficiency, problem-solving skills, and team communication",
      ],
      technologies: ["React.js", "Next.js", "FastAPI", "Python", "Figma to Code", "Git", "Agile Development"],
      highlights: [
        "First professional software development role",
        "100% remote work experience",
        "Client project contribution",
        "Agile methodology exposure",
      ],
    },
    {
      title: "Data Entry Clerk",
      company: "Nelpa Lifesciences Inc.",
      duration: "February 2021 - March 2021",
      location: "Philippines",
      type: "Work Immersion",
      status: "Completed",
      category: "Early Experience",
      description:
        "Completed work immersion program focusing on medical document processing and data management. Developed attention to detail and quality assurance skills.",
      achievements: [
        "Transcribed medical documents from PDFs and images into Microsoft Word",
        "Maintained original document format and structure with high accuracy",
        "Ensured consistency and quality in documentation processes",
        "Developed fast and precise typing skills for high-volume data entry",
        "Demonstrated attention to detail and quality assurance mindset",
        "Completed work immersion requirements successfully",
        "Gained early professional work experience",
      ],
      technologies: ["Microsoft Word", "Microsoft Excel", "Data Entry", "Quality Assurance", "Document Processing"],
      highlights: ["First work experience", "High accuracy standards", "Medical document expertise", "Quality focus"],
    },
  ]

  const totalItems = allExperiences.length

  // Simulate loading state
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1200)
    return () => clearTimeout(timer)
  }, [])

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
        ...allExperiences[index],
        position: i,
        index: index,
      })
    }
    return items
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-green-900/30 text-green-300 border-green-800"
      case "Current":
        return "bg-blue-900/30 text-blue-300 border-blue-800"
      case "Ongoing":
        return "bg-yellow-900/30 text-yellow-300 border-yellow-800"
      default:
        return "bg-gray-800 text-gray-300 border-gray-700"
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Internship":
        return "bg-blue-900/20 text-blue-300 border-blue-800/30"
      case "Education":
        return "bg-purple-900/30 text-purple-300 border-purple-800"
      case "Work Immersion":
        return "bg-orange-900/30 text-orange-300 border-orange-800"
      case "Academic Work":
        return "bg-indigo-900/30 text-indigo-300 border-indigo-800"
      default:
        return "bg-gray-800 text-gray-300 border-gray-700"
    }
  }

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Professional Experience":
        return Code
      case "Academic Achievement":
        return Award
      case "Early Experience":
        return Users
      case "Academic Foundation":
        return Building
      case "Project Experience":
        return Code
      default:
        return Building
    }
  }

  const Badge = ({ className, children }: { className: string; children: React.ReactNode }) => (
    <span
      className={`inline-flex items-center rounded-full border px-2 py-1 sm:px-3 sm:py-1 text-xs font-semibold transition-colors ${className}`}
    >
      {children}
    </span>
  )

  const swipeConfidenceThreshold = 50

  if (isLoading) {
    return (
      <section
        id="experience"
        className="py-8 sm:py-12 lg:py-20 bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12">
            <SkeletonLoader className="h-12 w-80 mx-auto mb-4" />
            <SkeletonLoader className="h-4 w-96 mx-auto" />
          </div>

          <div className="relative max-w-7xl mx-auto">
            <div className="flex justify-center items-center min-h-[600px]">
              <div className="flex flex-col items-center space-y-4">
                <LoadingSpinner size="lg" />
                <p className="text-gray-400 text-sm">Loading experience...</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section
      id="experience"
      className="py-8 sm:py-12 lg:py-20 bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
            Professional Journey
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-400 max-w-2xl mx-auto px-4 sm:px-0">
            My educational background, professional development, and overall progressive growth in the field of IT
          </p>
        </div>

        <div className="relative max-w-7xl mx-auto">
          {/* Navigation Arrows */}
          <div className="hidden md:flex justify-between absolute w-full top-1/2 -translate-y-1/2 z-20">
            <button
              onClick={prevSlide}
              className="group flex items-center justify-center w-12 h-12 rounded-full bg-gray-800/90 backdrop-blur-sm border border-gray-700 hover:bg-gray-700 transition-all duration-300 shadow-lg -translate-x-3 sm:-translate-x-6 hover:scale-110"
              aria-label="Previous experience"
            >
              <ChevronLeft className="h-5 w-5 text-gray-400 group-hover:text-blue-400 transition-colors duration-300" />
            </button>

            <button
              onClick={nextSlide}
              className="group flex items-center justify-center w-12 h-12 rounded-full bg-gray-800/90 backdrop-blur-sm border border-gray-700 hover:bg-gray-700 transition-all duration-300 shadow-lg translate-x-3 sm:translate-x-6 hover:scale-110"
              aria-label="Next experience"
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
              {getVisibleItems().map((exp) => {
                const CategoryIcon = getCategoryIcon(exp.category)
                const isCenter = exp.position === 0
                const wheelPos = getWheelPosition(exp.index, isDragging ? dragOffset : 0)

                return (
                  <motion.div
                    key={`${exp.index}-${currentIndex}`}
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
                      className={`group rounded-2xl sm:rounded-3xl border-2 bg-gray-800 shadow-lg transition-all duration-500 ${
                        isCenter
                          ? "border-blue-400/50 hover:border-blue-400/70 hover:shadow-2xl"
                          : "border-gray-700/50 hover:border-gray-600"
                      } ${!isCenter ? "cursor-pointer" : ""}`}
                      onClick={() => !isCenter && handleNavigation(exp.index)}
                    >
                      {/* Experience Header */}
                      <div className="p-3 pb-2 sm:p-4 sm:pb-3 lg:p-6 lg:pb-4">
                        <div className="flex flex-wrap items-center gap-1 sm:gap-2 lg:gap-3 mb-2 sm:mb-4">
                          <Badge className={getTypeColor(exp.type)}>
                            <CategoryIcon className="w-2 h-2 sm:w-3 sm:h-3 mr-1" />
                            <span className="text-xs sm:text-xs">{exp.type}</span>
                          </Badge>
                          <Badge className={getStatusColor(exp.status)}>
                            <span className="text-xs sm:text-xs">{exp.status}</span>
                          </Badge>
                          <span className="text-xs text-gray-500 flex items-center">
                            <Calendar className="w-2 h-2 sm:w-3 sm:h-3 lg:w-4 lg:h-4 mr-1" />
                            <span className="text-xs sm:text-xs">{exp.duration}</span>
                          </span>
                        </div>

                        <h3
                          className={`font-bold mb-2 sm:mb-3 text-white group-hover:text-blue-400 transition-colors duration-300 leading-tight ${
                            isCenter ? "text-sm sm:text-lg md:text-xl lg:text-3xl" : "text-xs sm:text-sm lg:text-base"
                          }`}
                        >
                          {exp.title}
                        </h3>

                        <div className="flex flex-col gap-1 sm:gap-2 lg:gap-4 lg:flex-row lg:items-center mb-2 sm:mb-4">
                          <div className="flex items-center text-blue-400 font-semibold text-xs sm:text-sm lg:text-base">
                            <Building className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4 lg:h-5 lg:w-5 flex-shrink-0" />
                            <span className="truncate text-xs sm:text-sm">{exp.company}</span>
                          </div>
                          <div className="flex items-center text-gray-400 text-xs">
                            <MapPin className="mr-1 sm:mr-2 h-2 w-2 sm:h-3 sm:w-3 lg:h-4 lg:w-4 flex-shrink-0" />
                            <span className="text-xs">{exp.location}</span>
                          </div>
                        </div>

                        <p
                          className={`text-gray-400 leading-relaxed ${
                            isCenter ? "text-xs sm:text-sm lg:text-base" : "text-xs line-clamp-2 sm:line-clamp-3"
                          }`}
                        >
                          {exp.description}
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
                          {/* Highlights */}
                          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1 sm:gap-2 lg:gap-3 mb-4 sm:mb-6">
                            {exp.highlights.map((highlight, highlightIndex) => (
                              <motion.div
                                key={highlightIndex}
                                className="text-center p-2 sm:p-3 rounded-lg sm:rounded-xl bg-blue-900/20 border border-blue-800/50"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.3 + highlightIndex * 0.1, duration: 0.3 }}
                              >
                                <div className="text-xs sm:text-sm font-medium text-blue-300">{highlight}</div>
                              </motion.div>
                            ))}
                          </div>

                          {/* Achievements */}
                          <div className="mb-4 sm:mb-6">
                            <h4 className="text-xs sm:text-sm lg:text-base font-semibold text-white mb-2 sm:mb-3">
                              Key Achievements
                            </h4>
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-1 sm:gap-2 lg:gap-3">
                              {exp.achievements.slice(0, 6).map((achievement, achievementIndex) => (
                                <motion.div
                                  key={achievementIndex}
                                  className="flex items-start space-x-2 sm:space-x-3 p-2 sm:p-3 rounded-lg sm:rounded-xl bg-gray-700/30 hover:bg-blue-900/20 transition-colors duration-300"
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: 0.4 + achievementIndex * 0.05, duration: 0.3 }}
                                >
                                  <div className="w-1 h-1 sm:w-2 sm:h-2 bg-blue-600 rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></div>
                                  <span className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                                    {achievement}
                                  </span>
                                </motion.div>
                              ))}
                            </div>
                            {exp.achievements.length > 6 && (
                              <div className="text-center mt-2">
                                <span className="text-xs text-gray-500">
                                  +{exp.achievements.length - 6} more achievements
                                </span>
                              </div>
                            )}
                          </div>

                          {/* Technologies */}
                          <div>
                            <h4 className="text-xs sm:text-sm lg:text-base font-semibold text-white mb-2 sm:mb-3">
                              Technologies & Skills
                            </h4>
                            <div className="flex flex-wrap gap-1 sm:gap-2">
                              {exp.technologies.map((tech, techIndex) => (
                                <motion.span
                                  key={techIndex}
                                  className="inline-flex items-center px-2 py-1 sm:px-3 sm:py-1.5 rounded-lg sm:rounded-xl text-xs font-medium bg-gradient-to-r from-gray-700 to-gray-600 text-gray-200 hover:from-blue-900/30 hover:to-blue-800/30 transition-all duration-300 transform hover:scale-105"
                                  initial={{ opacity: 0, scale: 0.8 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  transition={{ delay: 0.5 + techIndex * 0.05, duration: 0.3 }}
                                  whileHover={{ scale: 1.1 }}
                                  whileTap={{ scale: 0.95 }}
                                >
                                  {tech}
                                </motion.span>
                              ))}
                            </div>
                          </div>
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
            aria-label="Previous experience"
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
                aria-label={`Go to experience ${index + 1}`}
              >
                <div
                  className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full transition-all duration-300 ${
                    currentIndex === index ? "bg-blue-400 scale-125" : "bg-gray-600 group-hover:bg-gray-500"
                  }`}
                />
                <AnimatePresence>
                  {currentIndex === index && (
                    <motion.div
                      className="absolute inset-0 rounded-full bg-blue-400/20"
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
            aria-label="Next experience"
          >
            <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400 group-hover:text-blue-400 transition-colors duration-300" />
          </button>
        </div>

        {/* Current Status */}
        <div className="text-center mt-8 sm:mt-12 lg:mt-16">
          <div className="inline-block bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-2xl sm:rounded-3xl border-2 border-blue-800/20 shadow-lg max-w-4xl mx-auto">
            <div className="p-3 sm:p-4 lg:p-8">
              <h3 className="text-sm sm:text-base lg:text-lg font-bold text-blue-400 mb-2 sm:mb-4 flex items-center justify-center">
                <Award className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 mr-2" />
                Current Status
              </h3>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed px-2 sm:px-4 lg:px-0">
                Recent BS Information Technology Graduate (2025) • Currently employed as Fullstack Engineer (Contractual) at Oaktree Global (since July 2025)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
