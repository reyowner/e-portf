"use client"

import type React from "react"
import { useState, useEffect, useMemo } from "react"
import { Download, Mail, Github, Linkedin } from "lucide-react"

const Hero: React.FC = () => {
  const [typedText, setTypedText] = useState("")
  const roles = useMemo(() => [
    "Developer",
    "BS Information Technology",
    "Problem Solver",
    "Adaptable"
  ], []);
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
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 dark:bg-blue-500/10 blur-3xl transform -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/5 dark:bg-purple-500/10 blur-3xl transform translate-y-1/2 -translate-x-1/2"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <div className="mb-12 animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight tracking-tight">
              <span className="block text-gray-900 dark:text-white">Renato</span>
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Reoner Jr.</span>
            </h1>
            <div className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-6 h-8">
              <span className="font-medium">{typedText}</span>
              <span className="animate-pulse">|</span>
            </div>
            <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Recent BS IT Graduate with 3 months professional experience at Oaktree Innovations. Passionate about
              creating user-centered solutions with modern web technologies.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in-up">
            <button
              onClick={() => scrollToSection("projects")}
              className="inline-flex items-center justify-center px-6 py-2.5 text-base rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors duration-200"
            >
              View My Work
            </button>
            <a
              href="/RReoner_Resume.pdf"
              download
              className="inline-flex items-center justify-center px-6 py-2.5 text-base rounded-lg border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 font-medium transition-all duration-200"
            >
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </a>
            <button
              onClick={() => scrollToSection("contact")}
              className="inline-flex items-center justify-center px-6 py-2.5 text-base rounded-lg border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 font-medium transition-all duration-200"
            >
              <Mail className="mr-2 h-4 w-4" />
              Get In Touch
            </button>
          </div>

          <div className="flex justify-center space-x-8 animate-fade-in-up">
            <a
              href="https://github.com/reyowner"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com/in/rreonerjr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="#contact"
              className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
