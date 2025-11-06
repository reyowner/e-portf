"use client";

import type React from "react";
import { useState, useEffect } from "react";
import { ExternalLink, Github, Calendar, Users, Code, Zap } from "lucide-react";
import { motion } from "framer-motion";
import LoadingSpinner from "./LoadingSpinner";
import SkeletonLoader from "./SkeletonLoader";

const Projects: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [mouseStart, setMouseStart] = useState(0);
  const [mouseEnd, setMouseEnd] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

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
      technologies: [
        "React.js",
        "Next.js",
        "Python",
        "FastAPI",
        "PostgreSQL",
        "JWT",
        "Git",
      ],
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
      technologies: [
        "React.js",
        "Next.js",
        "Figma to Code",
        "API Integration",
        "Agile/Scrum",
      ],
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
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "EmailJS",
      ],
      liveUrl: "#",
      githubUrl: "https://github.com/reyowner/e-portf",
      stats: {
        duration: "Ongoing",
        team: "Individual",
        status: "Ongoing",
      },
    },
  ];

  const totalItems = allProjects.length;

  // Simulate loading state
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleNavigation = (newIndex: number) => {
    setCurrentIndex(newIndex);
  };

  // Swipe handlers
  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(0);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      setCurrentIndex((prev) => (prev === totalItems - 1 ? 0 : prev + 1));
    }
    if (isRightSwipe) {
      setCurrentIndex((prev) => (prev === 0 ? totalItems - 1 : prev - 1));
    }
  };

  // Mouse drag handlers for desktop
  const onMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setMouseEnd(0);
    setMouseStart(e.clientX);
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    setMouseEnd(e.clientX);
  };

  const onMouseUp = () => {
    if (!isDragging) return;
    setIsDragging(false);
    if (!mouseStart || !mouseEnd) return;
    const distance = mouseStart - mouseEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      setCurrentIndex((prev) => (prev === totalItems - 1 ? 0 : prev + 1));
    }
    if (isRightSwipe) {
      setCurrentIndex((prev) => (prev === 0 ? totalItems - 1 : prev - 1));
    }
    setMouseStart(0);
    setMouseEnd(0);
  };

  // Calculate card style based on position relative to current index
  const getCardStyle = (index: number) => {
    // Calculate signed offset accounting for wrapping
    let offset = index - currentIndex;
    if (offset > totalItems / 2) {
      offset -= totalItems;
    } else if (offset < -totalItems / 2) {
      offset += totalItems;
    }

    // Center card
    if (offset === 0) {
      return {
        transform: "translateX(0) scale(1) translateZ(0) rotateY(0deg)",
        zIndex: 50,
        opacity: 1,
      };
    }

    // Right cards (positive offset)
    if (offset === 1) {
      return {
        transform:
          "translateX(65%) scale(0.85) translateZ(-100px) rotateY(-8deg)",
        zIndex: 40,
        opacity: 0.9,
      };
    }
    if (offset === 2) {
      return {
        transform:
          "translateX(110%) scale(0.7) translateZ(-200px) rotateY(-12deg)",
        zIndex: 30,
        opacity: 0.6,
      };
    }

    // Left cards (negative offset)
    if (offset === -1) {
      return {
        transform:
          "translateX(-65%) scale(0.85) translateZ(-100px) rotateY(8deg)",
        zIndex: 40,
        opacity: 0.9,
      };
    }
    if (offset === -2) {
      return {
        transform:
          "translateX(-110%) scale(0.7) translateZ(-200px) rotateY(12deg)",
        zIndex: 30,
        opacity: 0.6,
      };
    }

    // Hidden cards
    return {
      transform: "translateX(150%) scale(0.5) translateZ(-300px)",
      zIndex: 10,
      opacity: 0,
    };
  };

  const getProjectIcon = (category: string) => {
    switch (category) {
      case "Full Stack Development":
        return Code;
      case "Professional Work":
        return Users;
      case "Frontend Development":
        return Zap;
      default:
        return Code;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Full Stack Development":
        return "bg-blue-900/30 text-blue-300 border-blue-800";
      case "Professional Work":
        return "bg-green-900/30 text-green-300 border-green-800";
      case "Frontend Development":
        return "bg-purple-900/30 text-purple-300 border-purple-800";
      case "Database Management":
        return "bg-orange-900/30 text-orange-300 border-orange-800";
      case "API Integration":
        return "bg-pink-900/30 text-pink-300 border-pink-800";
      default:
        return "bg-gray-800 text-gray-300 border-gray-700";
    }
  };

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

          <div className="relative max-w-full mx-auto">
            <div className="flex justify-center items-center min-h-[600px]">
              <div className="flex flex-col items-center space-y-4">
                <LoadingSpinner size="lg" />
                <p className="text-gray-400 text-sm">Loading projects...</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="projects"
      className="py-8 sm:py-12 lg:py-20 bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-400 max-w-2xl mx-auto px-4 sm:px-0">
            A showcase of my professional work and personal projects
          </p>
        </div>

        <div className="relative max-w-full mx-auto">
          {/* Mobile: Simple Card Stack */}
          <div
            className="md:hidden px-4"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            <div className="max-w-2xl mx-auto">
              {allProjects.map((project, index) => {
                const ProjectIcon = getProjectIcon(project.category);
                const isActive = index === currentIndex;

                if (!isActive) return null;

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="w-full"
                  >
                    <div className="rounded-2xl border-2 bg-gray-800 border-blue-400/50 shadow-lg">
                      {/* Project Header */}
                      <div className="p-4 pb-3">
                        <div className="flex flex-wrap items-center gap-2 mb-3">
                          <span
                            className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold border ${getCategoryColor(
                              project.category
                            )}`}
                          >
                            <ProjectIcon className="w-3 h-3 mr-1" />
                            <span className="text-xs">{project.category}</span>
                          </span>
                          <span className="text-xs text-gray-500 flex items-center">
                            <Calendar className="w-3 h-3 mr-1" />
                            <span className="text-xs">{project.duration}</span>
                          </span>
                        </div>

                        <h3 className="font-bold mb-3 text-white text-lg leading-tight">
                          {project.title}
                        </h3>

                        {project.company && (
                          <div className="mb-2">
                            <p className="text-sm font-semibold text-blue-400">
                              {project.company}
                            </p>
                            {project.role && (
                              <p className="text-xs text-gray-400">
                                {project.role}
                              </p>
                            )}
                          </div>
                        )}

                        {project.type && !project.company && (
                          <p className="text-sm font-medium text-blue-400 mb-2">
                            {project.type}
                          </p>
                        )}

                        <p className="text-gray-400 leading-relaxed text-sm">
                          {project.description}
                        </p>
                      </div>

                      {/* Content */}
                      <motion.div
                        className="p-4 pt-0"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                      >
                        <div className="mb-4">
                          <h4 className="text-sm font-bold text-white mb-2 flex items-center">
                            <Zap className="w-4 h-4 mr-2 text-blue-400" />
                            Key Features
                          </h4>
                          <div className="grid grid-cols-1 gap-2">
                            {project.features.map((feature, featureIndex) => (
                              <motion.div
                                key={featureIndex}
                                className="flex items-start space-x-2 p-2 rounded-lg bg-gray-700/30"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{
                                  delay: 0.3 + featureIndex * 0.05,
                                  duration: 0.3,
                                }}
                              >
                                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-1.5 flex-shrink-0"></div>
                                <span className="text-gray-300 text-xs leading-relaxed">
                                  {feature}
                                </span>
                              </motion.div>
                            ))}
                          </div>
                        </div>

                        <div className="mb-4">
                          <h4 className="text-sm font-bold text-white mb-2 flex items-center">
                            <Code className="w-4 h-4 mr-2 text-blue-400" />
                            Technologies Used
                          </h4>
                          <div className="flex flex-wrap gap-1.5">
                            {project.technologies.map((tech, techIndex) => (
                              <motion.span
                                key={techIndex}
                                className="inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-medium bg-gradient-to-r from-gray-700 to-gray-600 text-gray-200"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{
                                  delay: 0.4 + techIndex * 0.05,
                                  duration: 0.3,
                                }}
                              >
                                {tech}
                              </motion.span>
                            ))}
                          </div>
                        </div>

                        {/* Links */}
                        <motion.div
                          className="flex flex-wrap gap-2"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.5, duration: 0.3 }}
                        >
                          {project.liveUrl && (
                            <motion.a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-xs group inline-flex items-center px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold transition-all duration-300"
                              whileTap={{ scale: 0.95 }}
                            >
                              <ExternalLink className="mr-2 h-4 w-4" />
                              {project.liveUrl === "#"
                                ? "You're Here!"
                                : "Live Demo"}
                            </motion.a>
                          )}
                          {project.githubUrl && (
                            <motion.a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-xs group inline-flex items-center px-4 py-2 rounded-xl border-2 border-gray-700 hover:border-blue-600 hover:bg-blue-900/20 text-gray-300 hover:text-blue-400 font-semibold transition-all duration-300"
                              whileTap={{ scale: 0.95 }}
                            >
                              <Github className="mr-2 h-4 w-4" />
                              View Code
                            </motion.a>
                          )}
                        </motion.div>
                      </motion.div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Desktop: 3D Carousel Container */}
          <div
            className="hidden md:block relative min-h-[600px] md:min-h-[750px] lg:min-h-[900px] xl:min-h-[1000px] overflow-x-hidden overflow-y-visible cursor-grab active:cursor-grabbing"
            style={{ perspective: "2000px" }}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
            onMouseDown={onMouseDown}
            onMouseMove={onMouseMove}
            onMouseUp={onMouseUp}
            onMouseLeave={onMouseUp}
          >
            {allProjects.map((project, index) => {
              const ProjectIcon = getProjectIcon(project.category);
              const isCenter = index === currentIndex;
              const style = getCardStyle(index);

              return (
                <div
                  key={index}
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-700 ease-out"
                  style={{
                    width: isCenter
                      ? "clamp(320px, 55vw, 1100px)"
                      : "clamp(280px, 40vw, 700px)",
                    transform: style.transform,
                    zIndex: style.zIndex,
                    opacity: style.opacity,
                    transformStyle: "preserve-3d",
                  }}
                >
                  <div
                    className={`group rounded-2xl sm:rounded-3xl border-2 shadow-lg transition-all duration-500 ${
                      isCenter
                        ? "bg-gray-800 border-blue-400/50 hover:border-blue-400/70 hover:shadow-2xl cursor-default"
                        : "bg-gray-800/60 border-gray-700/50 hover:border-gray-600 cursor-pointer"
                    }`}
                    onClick={() => !isCenter && handleNavigation(index)}
                  >
                    {/* Project Header */}
                    <div className="p-3 pb-2 sm:p-4 sm:pb-3 lg:p-6 lg:pb-4">
                      <div className="flex flex-wrap items-center gap-1 sm:gap-2 lg:gap-3 mb-2 sm:mb-4">
                        <span
                          className={`inline-flex items-center px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs font-semibold border ${getCategoryColor(
                            project.category
                          )}`}
                        >
                          <ProjectIcon className="w-2 h-2 sm:w-3 sm:h-3 mr-1" />
                          <span className="text-xs sm:text-xs">
                            {project.category}
                          </span>
                        </span>
                        <span className="text-xs text-gray-500 flex items-center">
                          <Calendar className="w-2 h-2 sm:w-3 sm:h-3 lg:w-4 lg:h-4 mr-1" />
                          <span className="text-xs sm:text-xs">
                            {project.duration}
                          </span>
                        </span>
                      </div>

                      <h3
                        className={`font-bold mb-2 sm:mb-3 text-white group-hover:text-blue-400 transition-colors duration-300 leading-tight ${
                          isCenter
                            ? "text-sm sm:text-lg md:text-xl lg:text-3xl"
                            : "text-xs sm:text-sm lg:text-base"
                        }`}
                      >
                        {project.title}
                      </h3>

                      {project.company && (
                        <div className="mb-1 sm:mb-2">
                          <p className="text-xs sm:text-sm lg:text-base font-semibold text-blue-400">
                            {project.company}
                          </p>
                          {project.role && (
                            <p className="text-xs text-gray-400">
                              {project.role}
                            </p>
                          )}
                        </div>
                      )}

                      {project.type && !project.company && (
                        <p className="text-xs sm:text-sm lg:text-base font-medium text-blue-400 mb-1 sm:mb-2">
                          {project.type}
                        </p>
                      )}

                      <p
                        className={`text-gray-400 leading-relaxed ${
                          isCenter
                            ? "text-xs sm:text-sm lg:text-base"
                            : "text-xs line-clamp-2 sm:line-clamp-3"
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
                                transition={{
                                  delay: 0.3 + featureIndex * 0.05,
                                  duration: 0.3,
                                }}
                              >
                                <div className="w-1 h-1 sm:w-2 sm:h-2 bg-blue-600 rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></div>
                                <span className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                                  {feature}
                                </span>
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
                                transition={{
                                  delay: 0.4 + techIndex * 0.05,
                                  duration: 0.3,
                                }}
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
                                  const button = e.currentTarget;
                                  const originalContent = button.innerHTML;
                                  button.innerHTML =
                                    '<div class="flex items-center"><div class="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>Loading...</div>';
                                  setTimeout(() => {
                                    button.innerHTML = originalContent;
                                  }, 2000);
                                }
                              }}
                            >
                              <ExternalLink className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4 lg:h-5 lg:w-5 group-hover:rotate-12 transition-transform duration-300" />
                              {project.liveUrl === "#"
                                ? "You're Here!"
                                : "Live Demo"}
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
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center items-center gap-3 mt-8 sm:mt-12">
          {allProjects.map((_, index) => (
            <button
              key={index}
              onClick={() => handleNavigation(index)}
              className={`transition-all duration-300 rounded-full ${
                currentIndex === index
                  ? "w-3 h-3 bg-blue-400"
                  : "w-2.5 h-2.5 bg-gray-600 hover:bg-gray-500"
              }`}
              aria-label={`Go to project ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
