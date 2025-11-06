"use client";

import type React from "react";
import { useState, useEffect } from "react";
import { Calendar, MapPin, Building, Award, Users, Code } from "lucide-react";
import { motion } from "framer-motion";
import LoadingSpinner from "./LoadingSpinner";
import SkeletonLoader from "./SkeletonLoader";

const Experience: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [mouseStart, setMouseStart] = useState(0);
  const [mouseEnd, setMouseEnd] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

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
      technologies: [
        "React.js",
        "Next.js",
        "FastAPI",
        "Python",
        "Figma to Code",
        "Git",
        "Agile Development",
      ],
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
      technologies: [
        "Microsoft Word",
        "Microsoft Excel",
        "Data Entry",
        "Quality Assurance",
        "Document Processing",
      ],
      highlights: [
        "First work experience",
        "High accuracy standards",
        "Medical document expertise",
        "Quality focus",
      ],
    },
  ];

  const totalItems = allExperiences.length;

  // Simulate loading state
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200);
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

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-green-900/30 text-green-300 border-green-800";
      case "Current":
        return "bg-blue-900/30 text-blue-300 border-blue-800";
      case "Ongoing":
        return "bg-yellow-900/30 text-yellow-300 border-yellow-800";
      default:
        return "bg-gray-800 text-gray-300 border-gray-700";
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Internship":
        return "bg-blue-900/20 text-blue-300 border-blue-800/30";
      case "Education":
        return "bg-purple-900/30 text-purple-300 border-purple-800";
      case "Work Immersion":
        return "bg-orange-900/30 text-orange-300 border-orange-800";
      case "Academic Work":
        return "bg-indigo-900/30 text-indigo-300 border-indigo-800";
      default:
        return "bg-gray-800 text-gray-300 border-gray-700";
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Professional Experience":
        return Code;
      case "Academic Achievement":
        return Award;
      case "Early Experience":
        return Users;
      case "Academic Foundation":
        return Building;
      case "Project Experience":
        return Code;
      default:
        return Building;
    }
  };

  const Badge = ({
    className,
    children,
  }: {
    className: string;
    children: React.ReactNode;
  }) => (
    <span
      className={`inline-flex items-center rounded-full border px-2 py-1 sm:px-3 sm:py-1 text-xs font-semibold transition-colors ${className}`}
    >
      {children}
    </span>
  );

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
    );
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
            My educational background, professional development, and overall
            progressive growth in the field of IT
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
              {allExperiences.map((exp, index) => {
                const CategoryIcon = getCategoryIcon(exp.category);
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
                      {/* Experience Header */}
                      <div className="p-4 pb-3">
                        <div className="flex flex-wrap items-center gap-2 mb-3">
                          <Badge className={getTypeColor(exp.type)}>
                            <CategoryIcon className="w-3 h-3 mr-1" />
                            <span className="text-xs">{exp.type}</span>
                          </Badge>
                          <Badge className={getStatusColor(exp.status)}>
                            <span className="text-xs">{exp.status}</span>
                          </Badge>
                          <span className="text-xs text-gray-500 flex items-center">
                            <Calendar className="w-3 h-3 mr-1" />
                            <span className="text-xs">{exp.duration}</span>
                          </span>
                        </div>

                        <h3 className="font-bold mb-3 text-white text-lg leading-tight">
                          {exp.title}
                        </h3>

                        <div className="flex flex-col gap-2 mb-3">
                          <div className="flex items-center text-blue-400 font-semibold text-sm">
                            <Building className="mr-2 h-4 w-4 flex-shrink-0" />
                            <span className="truncate text-sm">
                              {exp.company}
                            </span>
                          </div>
                          <div className="flex items-center text-gray-400 text-xs">
                            <MapPin className="mr-2 h-3 w-3 flex-shrink-0" />
                            <span className="text-xs">{exp.location}</span>
                          </div>
                        </div>

                        <p className="text-gray-400 leading-relaxed text-sm">
                          {exp.description}
                        </p>
                      </div>

                      {/* Content */}
                      <motion.div
                        className="p-4 pt-0"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                      >
                        {/* Highlights */}
                        <div className="grid grid-cols-2 gap-2 mb-4">
                          {exp.highlights.map((highlight, highlightIndex) => (
                            <motion.div
                              key={highlightIndex}
                              className="text-center p-2 rounded-lg bg-blue-900/20 border border-blue-800/50"
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{
                                delay: 0.3 + highlightIndex * 0.1,
                                duration: 0.3,
                              }}
                            >
                              <div className="text-xs font-medium text-blue-300">
                                {highlight}
                              </div>
                            </motion.div>
                          ))}
                        </div>

                        {/* Achievements */}
                        <div className="mb-4">
                          <h4 className="text-sm font-semibold text-white mb-2">
                            Key Achievements
                          </h4>
                          <div className="grid grid-cols-1 gap-2">
                            {exp.achievements
                              .slice(0, 6)
                              .map((achievement, achievementIndex) => (
                                <motion.div
                                  key={achievementIndex}
                                  className="flex items-start space-x-2 p-2 rounded-lg bg-gray-700/30"
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{
                                    delay: 0.4 + achievementIndex * 0.05,
                                    duration: 0.3,
                                  }}
                                >
                                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-1.5 flex-shrink-0"></div>
                                  <span className="text-gray-300 text-xs leading-relaxed">
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
                          <h4 className="text-sm font-semibold text-white mb-2">
                            Technologies & Skills
                          </h4>
                          <div className="flex flex-wrap gap-1.5">
                            {exp.technologies.map((tech, techIndex) => (
                              <motion.span
                                key={techIndex}
                                className="inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-medium bg-gradient-to-r from-gray-700 to-gray-600 text-gray-200"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{
                                  delay: 0.5 + techIndex * 0.05,
                                  duration: 0.3,
                                }}
                              >
                                {tech}
                              </motion.span>
                            ))}
                          </div>
                        </div>
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
            {allExperiences.map((exp, index) => {
              const CategoryIcon = getCategoryIcon(exp.category);
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
                    {/* Experience Header */}
                    <div className="p-3 pb-2 sm:p-4 sm:pb-3 lg:p-6 lg:pb-4">
                      <div className="flex flex-wrap items-center gap-1 sm:gap-2 lg:gap-3 mb-2 sm:mb-4">
                        <Badge className={getTypeColor(exp.type)}>
                          <CategoryIcon className="w-2 h-2 sm:w-3 sm:h-3 mr-1" />
                          <span className="text-xs sm:text-xs">{exp.type}</span>
                        </Badge>
                        <Badge className={getStatusColor(exp.status)}>
                          <span className="text-xs sm:text-xs">
                            {exp.status}
                          </span>
                        </Badge>
                        <span className="text-xs text-gray-500 flex items-center">
                          <Calendar className="w-2 h-2 sm:w-3 sm:h-3 lg:w-4 lg:h-4 mr-1" />
                          <span className="text-xs sm:text-xs">
                            {exp.duration}
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
                        {exp.title}
                      </h3>

                      <div className="flex flex-col gap-1 sm:gap-2 lg:gap-4 lg:flex-row lg:items-center mb-2 sm:mb-4">
                        <div className="flex items-center text-blue-400 font-semibold text-xs sm:text-sm lg:text-base">
                          <Building className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4 lg:h-5 lg:w-5 flex-shrink-0" />
                          <span className="truncate text-xs sm:text-sm">
                            {exp.company}
                          </span>
                        </div>
                        <div className="flex items-center text-gray-400 text-xs">
                          <MapPin className="mr-1 sm:mr-2 h-2 w-2 sm:h-3 sm:w-3 lg:h-4 lg:w-4 flex-shrink-0" />
                          <span className="text-xs">{exp.location}</span>
                        </div>
                      </div>

                      <p
                        className={`text-gray-400 leading-relaxed ${
                          isCenter
                            ? "text-xs sm:text-sm lg:text-base"
                            : "text-xs line-clamp-2 sm:line-clamp-3"
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
                              transition={{
                                delay: 0.3 + highlightIndex * 0.1,
                                duration: 0.3,
                              }}
                            >
                              <div className="text-xs sm:text-sm font-medium text-blue-300">
                                {highlight}
                              </div>
                            </motion.div>
                          ))}
                        </div>

                        {/* Achievements */}
                        <div className="mb-4 sm:mb-6">
                          <h4 className="text-xs sm:text-sm lg:text-base font-semibold text-white mb-2 sm:mb-3">
                            Key Achievements
                          </h4>
                          <div className="grid grid-cols-1 lg:grid-cols-2 gap-1 sm:gap-2 lg:gap-3">
                            {exp.achievements
                              .slice(0, 6)
                              .map((achievement, achievementIndex) => (
                                <motion.div
                                  key={achievementIndex}
                                  className="flex items-start space-x-2 sm:space-x-3 p-2 sm:p-3 rounded-lg sm:rounded-xl bg-gray-700/30 hover:bg-blue-900/20 transition-colors duration-300"
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{
                                    delay: 0.4 + achievementIndex * 0.05,
                                    duration: 0.3,
                                  }}
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
                                transition={{
                                  delay: 0.5 + techIndex * 0.05,
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
          {allExperiences.map((_, index) => (
            <button
              key={index}
              onClick={() => handleNavigation(index)}
              className={`transition-all duration-300 rounded-full ${
                currentIndex === index
                  ? "w-3 h-3 bg-blue-400"
                  : "w-2.5 h-2.5 bg-gray-600 hover:bg-gray-500"
              }`}
              aria-label={`Go to experience ${index + 1}`}
            />
          ))}
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
                Recent BS Information Technology Graduate (2025) • Currently
                employed as Fullstack Engineer (Contractual) at Oaktree Global
                (since July 2025)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
