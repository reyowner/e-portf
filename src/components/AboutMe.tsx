"use client"

import type React from "react"
import { useState } from "react"
import { MapPin, GraduationCap, Briefcase, User, Award, Target, RefreshCw } from "lucide-react"

const About: React.FC = () => {
  const [activeTab, setActiveTab] = useState("overview")

  const quickFacts = [
    { icon: MapPin, label: "Location", value: "Taguig, Metro Manila, Philippines", color: "text-red-500" },
    {
      icon: GraduationCap,
      label: "Education",
      value: "BS Information Technology, TIP Manila (2025)",
      color: "text-blue-500",
    },
    {
      icon: Briefcase,
      label: "Recent Experience",
      value: "Fullstack Engineer",
      color: "text-green-500",
    },
    { icon: User, label: "Status", value: "Currently employed (Not Available)", color: "text-purple-500" },
  ]

  const values = [
    {
      icon: Target,
      title: "User-Centered Thinking",
      description: "I believe in creating solutions that truly serve users' needs and enhance their experience.",
    },
    {
      icon: Award,
      title: "Continuous Learning",
      description:
        "Technology evolves rapidly, and I'm committed to staying current with best practices and new tools.",
    },
    {
      icon: RefreshCw,
      title: "Very Adaptable",
      description: "I embrace change and quickly adjust to new challenges, technologies, and environments.",
    },
  ]

  const tabs = [
    { id: "overview", label: "Overview", icon: User },
    { id: "values", label: "Values", icon: RefreshCw },
  ]

  return (
    <section id="about" className="py-8 sm:py-12 lg:py-20 bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
            BS Information Technology Graduate passionate about creating innovative solutions with modern technologies.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8 sm:mb-12 px-4 sm:px-0">
          <div className="bg-gray-800/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-1.5 sm:p-2 border border-gray-700/50 w-full max-w-sm sm:max-w-none sm:w-auto">
            <div className="flex space-x-1 sm:space-x-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center justify-center px-3 py-2 sm:px-4 sm:py-2.5 lg:px-6 lg:py-3 rounded-lg sm:rounded-xl font-medium transition-all duration-300 flex-1 sm:flex-none ${
                    activeTab === tab.id
                      ? "bg-blue-600 text-white shadow-lg transform scale-105"
                      : "text-gray-400 hover:text-blue-400 hover:bg-gray-700/50"
                  }`}
                >
                  <tab.icon className="w-4 h-4 mr-1 sm:mr-2" />
                  <span className="text-sm sm:text-base">{tab.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Tab Content */}
        <div className="max-w-6xl mx-auto">
          {activeTab === "overview" && (
            <div className="space-y-6 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-12 lg:items-start">
              {/* My Story */}
              <div className="space-y-6 lg:space-y-8">
                <div className="bg-gray-800/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 border border-gray-700/50 shadow-lg">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-4 sm:mb-6">My Story</h3>
                  <div className="space-y-4 sm:space-y-6 text-gray-400 leading-relaxed text-sm sm:text-base text-justify">
                    <p>
                      My journey in technology began with my Bachelor of Science in Information Technology at the 
                      Technological Institute of the Philippines in Manila City, which provided a robust foundation in software 
                      development, analytical thinking, and problem-solving. This comprehensive academic experience shaped my 
                      approach to tackling complex technical challenges systematically.
                    </p>
                    <p>
                      During my recent internship experience as a Full Stack Software Engineer at Oaktree Innovations, I gained 
                      invaluable hands-on experience working in a fully remote setting. I contributed to real client projects, the 
                      PREDIKTA Marketing App for Netopia AI, where I implemented UI components from Figma designs and 
                      integrated frontend components with backend APIs.
                    </p>
                    <p>
                      What drives me most is user-centered thinking and problem-solving. I've proven my ability to adapt
                      in fast-paced environments while working both independently and collaboratively in teams. With my
                      recent BS Information Technology degree and professional development experience, I'm eager to
                      contribute to innovative projects and continue growing as a software developer.
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Facts & Work Style */}
              <div className="space-y-6 lg:space-y-8">
                <div className="bg-gray-800/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 border border-gray-700/50 shadow-lg">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-blue-400 mb-4 sm:mb-6">Quick Facts</h3>
                  <div className="space-y-4 sm:space-y-6">
                    {quickFacts.map((fact, index) => (
                      <div key={index} className="flex items-start space-x-3 sm:space-x-4 group">
                        <div className="p-2 sm:p-3 rounded-xl sm:rounded-2xl bg-gray-700 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                          <fact.icon className={`h-4 w-4 sm:h-5 sm:w-5 ${fact.color}`} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-semibold text-white text-sm sm:text-base">{fact.label}</p>
                          <p className="text-gray-400 mt-1 text-xs sm:text-sm leading-relaxed">{fact.value}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gray-800/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 border border-gray-700/50 shadow-lg">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-blue-400 mb-4 sm:mb-6">Work Style</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                    {[
                      "Remote Ready",
                      "Adaptable",
                      "Team Player",
                      "Continuous Learning",
                      "Detail Oriented",
                      "Problem Solver",
                    ].map((trait, index) => (
                      <div
                        key={index}
                        className="flex items-center space-x-2 p-2 sm:p-3 rounded-lg sm:rounded-xl bg-gray-700/50 hover:bg-blue-900/20 transition-colors duration-300"
                      >
                        <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0"></div>
                        <span className="text-gray-300 text-xs sm:text-sm font-medium">{trait}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "values" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="bg-gray-800/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 border border-gray-700/50 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 text-center"
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                    <value.icon className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8 text-white" />
                  </div>
                  <h3 className="text-base sm:text-lg lg:text-2xl font-bold text-white mb-3 sm:mb-4">{value.title}</h3>
                  <p className="text-gray-400 leading-relaxed text-sm sm:text-base">{value.description}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default About
