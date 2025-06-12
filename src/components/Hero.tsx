"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Download, Mail, Github, Linkedin } from "lucide-react"

const Hero: React.FC = () => {
  const [typedText, setTypedText] = useState("")
  const roles = ["Full Stack Software Developer", "BS Information Technology", "Problem Solver"]
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

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
      isDeleting ? 50 : 100,
    )

    return () => clearTimeout(timeout)
  }, [typedText, currentRoleIndex, isDeleting, roles])

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-white to-gray-100 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800/50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-blue-500/10 dark:bg-blue-500/20 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-purple-500/10 dark:bg-purple-500/20 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-8 animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="block text-gray-900 dark:text-white">Reoner</span>
              <span className="block text-gradient">Domasi Jr.</span>
            </h1>
            <div className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-4 h-8">
              <span>{typedText}</span>
              <span className="animate-pulse">|</span>
            </div>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Recent BS IT Graduate with 3 months professional experience at Oaktree Innovations. Passionate about
              creating user-centered solutions with modern web technologies.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-8 animate-fade-in-up">
            <button
              onClick={() => scrollToSection("projects")}
              className="inline-flex items-center justify-center px-8 py-3 text-lg rounded-md bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors"
            >
              View My Work
            </button>
            <button className="inline-flex items-center justify-center px-8 py-3 text-lg rounded-md border-2 border-gray-300 dark:border-gray-600 hover:bg-blue-600 hover:border-blue-600 hover:text-white dark:hover:bg-blue-600 dark:hover:border-blue-600 text-gray-800 dark:text-gray-200 font-medium transition-all duration-300">
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="inline-flex items-center justify-center px-8 py-3 text-lg rounded-md border-2 border-gray-300 dark:border-gray-600 hover:bg-blue-600 hover:border-blue-600 hover:text-white dark:hover:bg-blue-600 dark:hover:border-blue-600 text-gray-800 dark:text-gray-200 font-medium transition-all duration-300"
            >
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </button>
          </div>

          <div className="flex justify-center space-x-6 animate-fade-in-up">
            <a
              href="https://github.com/reyowner"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 transform hover:scale-110"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://linkedin.com/in/rreonerjr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 transform hover:scale-110"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="#contact"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 transform hover:scale-110"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
