"use client"

import type React from "react"
import { useState, useEffect, useMemo } from "react"
import { Download, Mail, Github, Linkedin, MapPin, Calendar, Code2, ChevronDown, Sparkles, Zap } from "lucide-react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

const Hero: React.FC = () => {
  const [typedText, setTypedText] = useState("")
  const [showCursor, setShowCursor] = useState(true)
  const [isLoaded, setIsLoaded] = useState(false)
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 })
  const roles = useMemo(
    () => ["Developer", "BS Information Technology", "Problem Solver", "Adaptable", "Fast Learner"],
    [],
  )
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  // Personalization Configuration
  const personalInfo = {
    name: "Renato Reoner Jr.",
    nickname: "Ren",
    title: "Full Stack Developer",
    location: "Taguig, Metro Manila, Philippines",
    experience: "3 months professional experience",
    company: "Oaktree Innovations",
    status: "Available for full-time opportunities",
    profileImage: {
      src: "/profile-hehe.jpg",
      alt: "DP",
      showImage: true,
    },
    background: {
      showParticles: true,
      primaryColor: "blue",
      secondaryColor: "purple",
    },
    social: {
      github: "https://github.com/reyowner",
      linkedin: "https://linkedin.com/in/rreonerjr",
      email: "domasigreoner@gmail.com",
      resume: "/RReoner_Resume.pdf",
    },
  }

  // Handle window resize and initial size
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    // Set initial size
    if (typeof window !== "undefined") {
      handleResize()
      window.addEventListener("resize", handleResize)
      return () => window.removeEventListener("resize", handleResize)
    }
  }, [])

  // Enhanced typing animation
  useEffect(() => {
    const currentRole = roles[currentRoleIndex]
    const timeout = setTimeout(
      () => {
        if (!isDeleting && typedText === currentRole) {
          setTimeout(() => setIsDeleting(true), 2000)
        } else if (isDeleting && typedText === "") {
          setIsDeleting(false)
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length)
        } else if (isDeleting) {
          setTypedText(currentRole.substring(0, typedText.length - 1))
        } else {
          setTypedText(currentRole.substring(0, typedText.length + 1))
        }
      },
      isDeleting ? 50 : Math.random() * 100 + 50, // More realistic typing speed
    )

    return () => clearTimeout(timeout)
  }, [typedText, currentRoleIndex, isDeleting, roles])

  // Cursor blink animation
  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 530)
    return () => clearInterval(interval)
  }, [])

  // Loading animation
  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 500)
    return () => clearTimeout(timer)
  }, [])

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
  }

  const handleDownloadResume = () => {
    const link = document.createElement("a")
    link.href = personalInfo.social.resume
    link.download = `${personalInfo.name.replace(/\s+/g, "_")}_Resume.pdf`
    link.click()
  }

  // Fixed floating particles component with proper SSR handling
  const FloatingParticles = () => {
    const [particles, setParticles] = useState<
      Array<{ id: number; x: number; y: number; targetX: number; targetY: number }>
    >([])

    useEffect(() => {
      if (typeof window === "undefined" || windowSize.width === 0 || windowSize.height === 0) return

      // Initialize particles only on client side
      const initialParticles = Array.from({ length: 20 }, (_, i) => ({
        id: i,
        x: Math.random() * windowSize.width,
        y: Math.random() * windowSize.height,
        targetX: Math.random() * windowSize.width,
        targetY: Math.random() * windowSize.height,
      }))

      setParticles(initialParticles)

      // Update particle positions periodically
      const interval = setInterval(() => {
        setParticles((prev) =>
          prev.map((particle) => ({
            ...particle,
            targetX: Math.random() * windowSize.width,
            targetY: Math.random() * windowSize.height,
          })),
        )
      }, 10000) // Update every 10 seconds

      return () => clearInterval(interval)
    }, [])

    if (typeof window === "undefined" || particles.length === 0) {
      return null
    }

    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
            initial={{
              x: particle.x,
              y: particle.y,
            }}
            animate={{
              x: particle.targetX,
              y: particle.targetY,
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              ease: "linear",
            }}
          />
        ))}
      </div>
    )
  }

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated gradient orbs */}
        <motion.div
          className="absolute top-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-blue-500/10 blur-3xl rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          style={{ transform: "translate(50%, -50%)" }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-64 h-64 md:w-96 md:h-96 bg-purple-500/10 blur-3xl rounded-full"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 2,
          }}
          style={{ transform: "translate(-50%, 50%)" }}
        />

        {/* Floating particles - only render on client side */}
        {personalInfo.background.showParticles && <FloatingParticles />}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <AnimatePresence>
          {isLoaded && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-6xl mx-auto"
            >
              {/* Mobile Profile Image */}
              {personalInfo.profileImage.showImage && (
                <motion.div
                  className="relative lg:hidden order-1"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.3, duration: 0.6, type: "spring" }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-2xl blur-lg opacity-30"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  />
                  <Image
                    src="/profile-hehe.jpg"
                    alt="DP"
                    width={120}
                    height={120}
                    className="relative w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-2xl border-2 border-gray-700/50 shadow-lg mx-auto"
                    priority
                  />
                  <motion.div
                    className="absolute -top-1 -right-1 w-6 h-6 bg-green-400 rounded-full border-2 border-gray-900"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  />
                </motion.div>
              )}

              {/* Main Content */}
              <div className="text-center lg:text-left space-y-6 lg:space-y-8 order-2 lg:order-1">
                {/* Enhanced Status Badge */}
                <motion.div
                  className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-gray-800/50 border border-gray-700/50 text-gray-300 text-xs sm:text-sm backdrop-blur-sm"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                  whileHover={{ scale: 1.05, borderColor: "rgb(34 197 94)" }}
                >
                  <motion.div
                    className="w-2 h-2 bg-green-400 rounded-full mr-2"
                    animate={{ scale: [1, 1.3, 1], opacity: [1, 0.7, 1] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  />
                  <span className="hidden sm:inline">{personalInfo.status}</span>
                  <span className="sm:hidden">Available for opportunities</span>
                  <Sparkles className="w-3 h-3 ml-2 text-yellow-400" />
                </motion.div>

                {/* Enhanced Name Section */}
                <div>
                  <motion.span
                    className="block text-gray-300 text-sm sm:text-base lg:text-lg font-normal mb-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                  >
                    Hi, I'm
                  </motion.span>
                  <motion.h1
                    className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-4 leading-tight"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                  >
                    <div className="flex items-center justify-center lg:justify-start gap-4 lg:gap-12">
                      <div>
                        <motion.span
                          className="block text-white"
                          whileHover={{ scale: 1.05 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          {personalInfo.name.split(" ")[0]}
                        </motion.span>
                        <motion.span
                          className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
                          whileHover={{ scale: 1.05 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          {personalInfo.name.split(" ").slice(1).join(" ")}
                        </motion.span>
                      </div>
                      {/* Desktop Profile Image */}
                      {personalInfo.profileImage.showImage && (
                        <motion.div
                          className="relative hidden lg:block"
                          initial={{ scale: 0, rotate: -180 }}
                          animate={{ scale: 1, rotate: 0 }}
                          transition={{ delay: 1, duration: 0.6, type: "spring" }}
                        >
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-3xl blur-xl opacity-30"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                          />
                          <Image
                            src="/profile-hehe.jpg"
                            alt="DP"
                            width={200}
                            height={200}
                            className="relative w-32 h-32 lg:w-40 lg:h-40 object-cover rounded-3xl border-2 border-gray-700/50 shadow-md"
                            priority
                          />
                          <motion.div
                            className="absolute -top-2 -right-2 w-8 h-8 bg-green-400 rounded-full border-4 border-gray-900 flex items-center justify-center"
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                          >
                            <Zap className="w-4 h-4 text-gray-900" />
                          </motion.div>
                        </motion.div>
                      )}
                    </div>
                  </motion.h1>
                </div>

                {/* Enhanced Dynamic Role */}
                <div className="h-10 sm:h-12 lg:h-16 flex items-center justify-center lg:justify-start">
                  <div className="text-base sm:text-lg md:text-xl lg:text-3xl font-semibold text-gray-400">
                    <span>{typedText}</span>
                    <motion.span
                      className="text-blue-400 ml-1"
                      animate={{ opacity: showCursor ? 1 : 0 }}
                      transition={{ duration: 0.1 }}
                    >
                      |
                    </motion.span>
                  </div>
                </div>

                {/* Enhanced Description */}
                <motion.p
                  className="text-sm sm:text-base lg:text-lg text-gray-400 max-w-2xl leading-relaxed px-4 sm:px-0"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2 }}
                >
                  Recent BS IT Graduate with {personalInfo.experience} at {personalInfo.company}. Passionate about
                  creating user-centered solutions with modern web technologies.
                </motion.p>

                {/* Enhanced Quick Info Cards */}
                <motion.div
                  className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-sm sm:max-w-md mx-auto lg:mx-0"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.4 }}
                >
                  <motion.div
                    className="flex items-center space-x-2 sm:space-x-3 p-2 sm:p-3 rounded-lg sm:rounded-xl bg-gray-800/30 border border-gray-700/30 backdrop-blur-sm"
                    whileHover={{ scale: 1.05, backgroundColor: "rgba(59, 130, 246, 0.1)" }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-blue-400 flex-shrink-0" />
                    <span className="text-gray-300 text-xs sm:text-sm truncate">
                      {personalInfo.location.split(",")[0]}
                    </span>
                  </motion.div>
                  <motion.div
                    className="flex items-center space-x-2 sm:space-x-3 p-2 sm:p-3 rounded-lg sm:rounded-xl bg-gray-800/30 border border-gray-700/30 backdrop-blur-sm"
                    whileHover={{ scale: 1.05, backgroundColor: "rgba(34, 197, 94, 0.1)" }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Calendar className="h-4 w-4 sm:h-5 sm:w-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300 text-xs sm:text-sm">Available Now</span>
                  </motion.div>
                </motion.div>

                {/* Enhanced Action Buttons */}
                <motion.div
                  className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start px-4 sm:px-0"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.6 }}
                >
                  <motion.button
                    onClick={() => scrollToSection("projects")}
                    className="inline-flex items-center justify-center px-5 py-2.5 sm:px-6 sm:py-3 lg:px-8 lg:py-3 text-sm sm:text-base rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Code2 className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                    View My Work
                  </motion.button>

                  <motion.button
                    onClick={handleDownloadResume}
                    className="inline-flex items-center justify-center px-5 py-2.5 sm:px-6 sm:py-3 lg:px-8 lg:py-3 text-sm sm:text-base rounded-xl border-2 border-gray-600 hover:border-gray-500 text-gray-300 hover:text-white font-medium transition-all duration-300 hover:bg-gray-800/50 backdrop-blur-sm"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Download className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                    Download Resume
                  </motion.button>
                </motion.div>

                {/* Enhanced Social Links */}
                <motion.div
                  className="flex justify-center lg:justify-start space-x-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.8 }}
                >
                  {[
                    { icon: Github, href: personalInfo.social.github, label: "GitHub", color: "hover:text-white" },
                    {
                      icon: Linkedin,
                      href: personalInfo.social.linkedin,
                      label: "LinkedIn",
                      color: "hover:text-blue-400",
                    },
                    {
                      icon: Mail,
                      onClick: () => scrollToSection("contact"),
                      label: "Contact",
                      color: "hover:text-green-400",
                    },
                  ].map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      onClick={social.onClick}
                      target={social.href ? "_blank" : undefined}
                      rel={social.href ? "noopener noreferrer" : undefined}
                      className={`group p-2.5 sm:p-3 rounded-xl bg-gray-800/50 border border-gray-700/50 hover:border-gray-600 transition-all duration-300 backdrop-blur-sm ${social.color}`}
                      aria-label={social.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.8 + index * 0.1 }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <social.icon className="h-5 w-5 sm:h-6 sm:w-6 text-gray-400 group-hover:scale-110 transition-all duration-300" />
                    </motion.a>
                  ))}
                </motion.div>
              </div>

              {/* Enhanced Code Block - Desktop Only */}
              <motion.div
                className="hidden lg:flex justify-center lg:justify-end order-3 lg:order-2"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 2 }}
              >
                <div className="relative max-w-md">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-3xl blur-xl"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                  />
                  <motion.div
                    className="relative bg-gray-800/80 backdrop-blur-sm rounded-3xl p-6 lg:p-8 border border-gray-700/50 shadow-2xl"
                    whileHover={{ scale: 1.02, y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="flex items-center space-x-2 mb-6">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                      <span className="ml-4 text-gray-400 text-sm">opportunities.tsx</span>
                    </div>
                    <div className="font-mono text-sm space-y-2">
                      <motion.div
                        className="text-blue-400"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 2.2 }}
                      >
                        const <span className="text-white">opportunities</span> = &#123;
                      </motion.div>
                      <motion.div
                        className="ml-4 text-gray-300"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 2.4 }}
                      >
                        education: <span className="text-green-400">"BS Information Technology"</span>,
                      </motion.div>
                      <motion.div
                        className="ml-4 text-gray-300"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 2.6 }}
                      >
                        status: <span className="text-green-400">"Recent Graduate"</span>,
                      </motion.div>
                      <motion.div
                        className="ml-4 text-gray-300"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 2.8 }}
                      >
                        roles: <span className="text-yellow-400">[</span>
                      </motion.div>
                      {[
                        '"Entry Level IT Positions",',
                        '"Web Developer",',
                        '"Software Development",',
                        '"And more...",',
                      ].map((role, index) => (
                        <motion.div
                          key={index}
                          className="ml-8 text-gray-300"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 3 + index * 0.2 }}
                        >
                          {role}
                        </motion.div>
                      ))}
                      <motion.div
                        className="ml-4 text-gray-300"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 4 }}
                      >
                        <span className="text-yellow-400">]</span>,
                      </motion.div>
                      <motion.div
                        className="ml-4 text-gray-300"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 4.2 }}
                      >
                        available: <span className="text-blue-400">true</span>
                      </motion.div>
                      <motion.div
                        className="text-blue-400"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 4.4 }}
                      >
                        &#125;
                      </motion.div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Enhanced Scroll Indicator */}
        <motion.div
          className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5 }}
        >
          <motion.button
            onClick={() => scrollToSection("about")}
            className="group p-3 rounded-full bg-gray-800/50 border border-gray-700/50 backdrop-blur-sm hover:bg-gray-700/50 transition-all duration-300"
            aria-label="Scroll to About section"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronDown className="h-5 w-5 sm:h-6 sm:w-6 text-gray-400 group-hover:text-blue-400 transition-colors duration-300" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
