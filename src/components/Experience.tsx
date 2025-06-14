"use client"

import type React from "react"
import { useState } from "react"
import { Calendar, MapPin, Building, Award, Users, Code, ChevronLeft, ChevronRight } from "lucide-react"
import { AnimatePresence, motion } from "framer-motion"

const Experience: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const experiencesPerPage = 1

  const allExperiences = [
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
        "Developed and enhanced features using React.js, Next.js, and FastAPI",
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
        "Capstone project demonstrating full-stack development skills",
        "Graduated with solid technical foundation for professional career",
      ],
      technologies: [
        "Programming Fundamentals",
        "Database Management",
        "Web Development",
        "Software Engineering",
        "System Analysis",
        "Project Management",
      ],
      highlights: [
        "4-year degree completion",
        "Strong academic foundation",
        "Multiple programming languages",
        "Database expertise",
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

  const totalPages = Math.ceil(allExperiences.length / experiencesPerPage)
  const startIndex = (currentPage - 1) * experiencesPerPage
  const currentExperiences = allExperiences.slice(startIndex, startIndex + experiencesPerPage)

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-green-100 text-green-800 border-green-200 dark:bg-green-900/30 dark:text-green-300 dark:border-green-800"
      case "Current":
        return "bg-blue-100 text-blue-800 border-blue-200 dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-800"
      case "Ongoing":
        return "bg-yellow-100 text-yellow-800 border-yellow-200 dark:bg-yellow-900/30 dark:text-yellow-300 dark:border-yellow-800"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-700"
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Internship":
        return "bg-blue-100/50 text-blue-800 border-blue-200 dark:bg-blue-900/20 dark:text-blue-300 dark:border-blue-800/30"
      case "Education":
        return "bg-purple-100 text-purple-800 border-purple-200 dark:bg-purple-900/30 dark:text-purple-300 dark:border-purple-800"
      case "Work Immersion":
        return "bg-orange-100 text-orange-800 border-orange-200 dark:bg-orange-900/30 dark:text-orange-300 dark:border-orange-800"
      case "Academic Work":
        return "bg-indigo-100 text-indigo-800 border-indigo-200 dark:bg-indigo-900/30 dark:text-indigo-300 dark:border-indigo-800"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-700"
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

  // Custom Badge component
  const Badge = ({ className, children }: { className: string; children: React.ReactNode }) => (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold transition-colors ${className}`}
    >
      {children}
    </span>
  )

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-gray-50/50 via-white to-purple-50/30 dark:from-gray-800/30 dark:via-gray-900 dark:to-gray-800/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
            Professional Journey
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My educational background, professional development, and progressive growth in software development
          </p>
            </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Navigation Arrows - Desktop */}
          <div className="hidden md:flex justify-between absolute w-full top-1/2 -translate-y-1/2 z-10">
            <button
              onClick={() => setCurrentPage(currentPage === 1 ? totalPages : currentPage - 1)}
              className="group flex items-center justify-center w-12 h-12 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 shadow-lg -translate-x-16"
              aria-label="Previous experience"
            >
              <ChevronLeft className="h-5 w-5 text-gray-600 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300" />
            </button>

            <button
              onClick={() => setCurrentPage(currentPage === totalPages ? 1 : currentPage + 1)}
              className="group flex items-center justify-center w-12 h-12 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 shadow-lg translate-x-16"
              aria-label="Next experience"
            >
              <ChevronRight className="h-5 w-5 text-gray-600 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300" />
            </button>
        </div>

          {/* Experiences Container */}
          <div className="max-w-5xl mx-auto relative">
            <div className="bg-white dark:bg-gray-800 rounded-3xl border border-gray-200 dark:border-gray-700 shadow-lg overflow-hidden">
            {currentExperiences.map((exp, index) => {
              const CategoryIcon = getCategoryIcon(exp.category)
              return (
                <div
                  key={startIndex + index}
                  className="group rounded-3xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-lg hover:shadow-2xl hover:border-blue-500/30 dark:hover:border-blue-400/30 transition-all duration-500 hover:scale-[1.02]"
                >
                  {/* Experience Header */}
                    <div className="p-6 pb-4">
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <Badge className={getTypeColor(exp.type)}>
                        <CategoryIcon className="w-3 h-3 mr-1" />
                        {exp.type}
                      </Badge>
                      <Badge className={getStatusColor(exp.status)}>{exp.status}</Badge>
                      <span className="text-sm text-gray-500 dark:text-gray-400 flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {exp.duration}
                      </span>
                    </div>

                      <h3 className="text-2xl md:text-3xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                      {exp.title}
                    </h3>

                      <div className="flex flex-wrap items-center gap-4 mb-4">
                        <div className="flex items-center text-blue-600 dark:text-blue-400 font-semibold text-base">
                        <Building className="mr-2 h-5 w-5" />
                        {exp.company}
                      </div>
                        <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm">
                        <MapPin className="mr-2 h-4 w-4" />
                        {exp.location}
                      </div>
                    </div>

                      <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">{exp.description}</p>
                  </div>

                  {/* Highlights */}
                    <div className="p-6 pt-0">
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                      {exp.highlights.map((highlight, highlightIndex) => (
                        <div
                          key={highlightIndex}
                          className="text-center p-3 rounded-xl bg-blue-50 dark:bg-blue-900/20 border border-blue-200/50 dark:border-blue-800/50"
                        >
                          <div className="text-sm font-medium text-blue-800 dark:text-blue-300">{highlight}</div>
                        </div>
                      ))}
                  </div>

                      {/* Achievements */}
                    <div>
                        <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Key Achievements</h4>
                      <div className="grid md:grid-cols-2 gap-3">
                        {exp.achievements.map((achievement, achievementIndex) => (
                          <div
                            key={achievementIndex}
                              className="flex items-start space-x-3 p-3 rounded-xl bg-gray-50 dark:bg-gray-700/30 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors duration-300"
                          >
                              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-gray-700 dark:text-gray-300">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                      {/* Technologies */}
                      <div className="mt-6">
                        <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Technologies & Skills</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                              className="inline-flex items-center px-4 py-2 rounded-xl text-sm font-medium bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 text-gray-800 dark:text-gray-200 hover:from-blue-100 hover:to-blue-200 dark:hover:from-blue-900/30 dark:hover:to-blue-800/30 transition-all duration-300 transform hover:scale-105"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
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
              aria-label="Previous experience"
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
                  aria-label={`Go to experience ${index + 1}`}
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
              aria-label="Next experience"
            >
              <ChevronRight className="h-5 w-5 text-gray-600 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300" />
            </button>
          </div>
        </div>

        {/* Current Status */}
        <div className="text-center mt-16">
          <div className="inline-block bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-3xl border-2 border-blue-500/20 dark:border-blue-800/20 shadow-lg">
            <div className="p-8">
              <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4 flex items-center justify-center">
                <Award className="w-6 h-6 mr-2" />
                Current Status
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
                Recent BS Information Technology Graduate (2025) • Completed Full Stack Software Engineer Internship •
                Available for Full-time Opportunities • Ready to Start Immediately
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
