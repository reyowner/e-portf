"use client"

import type React from "react"
import { useState, useEffect, useMemo } from "react"
import { Download, Mail, Github, Linkedin, MapPin, Calendar, Code2, ChevronDown } from "lucide-react"
import Image from "next/image"

const Hero: React.FC = () => {
  const [typedText, setTypedText] = useState("")
  const roles = useMemo(() => [
    "Developer",
    "BS Information Technology",
    "Problem Solver",
    "Adaptable",
    "Fast Learner"
  ], []);
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
    // Image settings
    profileImage: {
      src: "/profile-hehe.jpg", // Replace with your image path
      alt: "DP",
      showImage: true, // Set to true or false to determine to show the image.
    },
    // Background customization
    background: {
      showParticles: true,
      primaryColor: "blue",
      secondaryColor: "purple",
    },
    // Social links
    social: {
      github: "https://github.com/reyowner",
      linkedin: "https://linkedin.com/in/rreonerjr",
      email: "domasigreoner@gmail.com",
      resume: "/RReoner_Resume.pdf"
    }
  }

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

  const handleDownloadResume = () => {
    const link = document.createElement('a')
    link.href = personalInfo.social.resume
    link.download = `${personalInfo.name.replace(/\s+/g, '_')}_Resume.pdf`
    link.click()
  }

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated gradient orbs */}
        <div className={`absolute top-0 right-0 w-96 h-96 bg-${personalInfo.background.primaryColor}-500/10 blur-3xl transform -translate-y-1/2 translate-x-1/2 animate-pulse`}></div>
        <div className={`absolute bottom-0 left-0 w-96 h-96 bg-${personalInfo.background.secondaryColor}-500/10 blur-3xl transform translate-y-1/2 -translate-x-1/2 animate-pulse`}></div>
        
        {/* Floating particles effect */}
        {personalInfo.background.showParticles && (
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className={`absolute w-1 h-1 bg-${personalInfo.background.primaryColor}-400/20 rounded-full animate-bounce`}
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${3 + Math.random() * 2}s`
                }}
              />
            ))}
          </div>
        )}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left Column - Main Content */}
          <div className="text-center lg:text-left space-y-8 animate-fade-in-up">
            {/* Greeting & Name */}
            <div>
              <div className="inline-flex items-center px-4 py-2 mt-18 md:mt-24 lg:mt-1 rounded-full bg-gray-800/50 border border-gray-700/50 text-gray-300 text-sm mb-6 backdrop-blur-sm">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                {personalInfo.status}
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
                <span className="block text-gray-300 text-lg font-normal mb-2">Hi, I'm</span>
                <div className="flex items-center justify-center lg:justify-start gap-8 md:gap-12">
                  <div>
                    <span className="block text-white">{personalInfo.name.split(' ')[0]}</span>
                    <span className={`block bg-gradient-to-r from-${personalInfo.background.primaryColor}-400 to-${personalInfo.background.secondaryColor}-400 bg-clip-text text-transparent`}>
                      {personalInfo.name.split(' ').slice(1).join(' ')}
                    </span>
                  </div>
                  {personalInfo.profileImage.showImage && (
                    <div className="relative">
                      <div className={`absolute inset-0 bg-gradient-to-r from-${personalInfo.background.primaryColor}-400 to-${personalInfo.background.secondaryColor}-400 rounded-3xl blur-xl opacity-30 animate-pulse`}></div>
                      <Image
                        src="/profile-hehe.jpg"
                        alt="DP"
                        width={200}
                        height={200}
                        className="relative w-32 h-32 md:w-36 md:h-36 lg:w-43 lg:h-43 object-cover rounded-3xl border-2 border-gray-700/50 shadow-md"
                        priority
                      />
                    </div>
                  )}
                </div>
              </h1>
            </div>

            {/* Dynamic Role */}
            <div className="h-16 flex items-center justify-center lg:justify-start">
              <div className="text-2xl md:text-3xl font-semibold text-gray-400">
                <span>{typedText}</span>
                <span className="animate-pulse text-blue-400">|</span>
              </div>
            </div>

            {/* Description */}
            <p className="text-lg text-gray-400 max-w-2xl leading-relaxed">
              Recent BS IT Graduate with {personalInfo.experience} at {personalInfo.company}. 
              Passionate about creating user-centered solutions with modern web technologies.
            </p>

            {/* Quick Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-md mx-auto lg:mx-0">
              <div className="flex items-center space-x-3 p-3 rounded-xl bg-gray-800/30 border border-gray-700/30 backdrop-blur-sm">
                <MapPin className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300 text-sm">{personalInfo.location.split(',')[0]}</span>
              </div>
              <div className="flex items-center space-x-3 p-3 rounded-xl bg-gray-800/30 border border-gray-700/30 backdrop-blur-sm">
                <Calendar className="h-5 w-5 text-green-400" />
                <span className="text-gray-300 text-sm">Available Now</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <button
                onClick={() => scrollToSection("projects")}
                className={`cursor-pointer inline-flex items-center justify-center px-8 py-3 text-base rounded-xl bg-gradient-to-r from-${personalInfo.background.primaryColor}-600 to-${personalInfo.background.secondaryColor}-600 hover:from-${personalInfo.background.primaryColor}-500 hover:to-${personalInfo.background.secondaryColor}-500 text-white font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl`}
              >
                <Code2 className="mr-2 h-5 w-5" />
                View My Work
              </button>
              
              <button
                onClick={handleDownloadResume}
                className="cursor-pointer inline-flex items-center justify-center px-8 py-3 text-base rounded-xl border-2 border-gray-600 hover:border-gray-500 text-gray-300 hover:text-white font-medium transition-all duration-300 transform hover:scale-105 hover:bg-gray-800/50 backdrop-blur-sm"
              >
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start space-x-6">
              <a
                href={personalInfo.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 rounded-xl bg-gray-800/50 border border-gray-700/50 hover:border-gray-600 transition-all duration-300 transform hover:scale-110 hover:shadow-lg backdrop-blur-sm"
                aria-label="GitHub Profile"
              >
                <Github className="h-6 w-6 text-gray-400 group-hover:text-white transition-colors duration-300" />
              </a>
              <a
                href={personalInfo.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 rounded-xl bg-gray-800/50 border border-gray-700/50 hover:border-gray-600 transition-all duration-300 transform hover:scale-110 hover:shadow-lg backdrop-blur-sm"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="h-6 w-6 text-gray-400 group-hover:text-blue-400 transition-colors duration-300" />
              </a>
              <button
                onClick={() => scrollToSection("contact")}
                className="group p-3 rounded-xl bg-gray-800/50 border border-gray-700/50 hover:border-gray-600 transition-all duration-300 transform hover:scale-110 hover:shadow-lg backdrop-blur-sm"
                aria-label="Contact Me"
              >
                <Mail className="h-6 w-6 text-gray-400 group-hover:text-green-400 transition-colors duration-300" />
              </button>
            </div>
          </div>

          {/* Right Column - Interactive Code Block */}
          <div className="flex justify-center lg:justify-end animate-fade-in-up">
            <div className="relative max-w-md mb-16">
              <div className={`absolute inset-0 bg-gradient-to-r from-${personalInfo.background.primaryColor}-400/20 to-${personalInfo.background.secondaryColor}-400/20 rounded-3xl blur-xl animate-pulse`}></div>
              <div className="relative bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/50 shadow-2xl">
                <div className="flex items-center space-x-2 mb-6">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  <span className="ml-4 text-gray-400 text-sm">opportunities.tsx</span>
                </div>
                <div className="font-mono text-sm space-y-2">
                  {/* Open to Opportunities */}
                  <div className="text-blue-400">const <span className="text-white">opportunities</span> = &#123;</div>
                  <div className="ml-4 text-gray-300">education: <span className="text-green-400">"BS Information Technology"</span>,</div>
                  <div className="ml-4 text-gray-300">status: <span className="text-green-400">"Recent Graduate"</span>,</div>
                  <div className="ml-4 text-gray-300">roles: <span className="text-yellow-400">[</span></div>
                  <div className="ml-8 text-gray-300">"Entry Level IT Positions",</div>
                  <div className="ml-8 text-gray-300">"Web Developer",</div>
                  <div className="ml-8 text-gray-300">"Software Development",</div>
                  <div className="ml-8 text-gray-300">"And more...",</div>
                  <div className="ml-4 text-gray-300"><span className="text-yellow-400">]</span>,</div>
                  <div className="ml-4 text-gray-300">available: <span className="text-blue-400">true</span></div>
                  <div className="text-blue-400">&#125;</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute -py-8 bottom-1 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={() => scrollToSection("about")}
            className="p-2 rounded-full bg-gray-800/50 border border-gray-700/50 backdrop-blur-sm hover:bg-gray-700/50 transition-all duration-300"
            aria-label="Scroll to About section"
          >
            <ChevronDown className="h-6 w-6 text-gray-400" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero