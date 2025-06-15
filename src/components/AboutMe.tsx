"use client"

import type React from "react"
import { useState } from "react"
import { MapPin, GraduationCap, Briefcase, User, Award, Target, RefreshCw, } from "lucide-react"

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
      value: "Full Stack Software Engineer Intern at Oaktree Innovations",
      color: "text-green-500",
    },
    { icon: User, label: "Status", value: "Available for full-time opportunities", color: "text-purple-500" },
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
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-gray-800/30 via-gray-900 to-gray-800/50"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
            BS Information Technology Graduate passionate about creating innovative solutions with 
            modern technologies.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-800/80 backdrop-blur-sm rounded-2xl p-2 border border-gray-700/50">
            <div className="flex space-x-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    activeTab === tab.id
                      ? "bg-blue-600 text-white shadow-lg transform scale-105"
                      : "text-gray-400 hover:text-blue-400 hover:bg-gray-700/50"
                  }`}
                >
                  <tab.icon className="w-4 h-4 mr-2" />
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Tab Content */}
        <div className="max-w-6xl mx-auto">
          {activeTab === "overview" && (
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div className="space-y-8">
                <div className="bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/50 shadow-lg">
                  <h3 className="text-2xl font-bold text-white mb-6">My Story</h3>
                  <div className="space-y-6 text-gray-400 leading-relaxed text-justify">
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

              <div className="space-y-8">
                <div className="bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/50 shadow-lg">
                  <h3 className="text-2xl font-bold text-blue-400 mb-6">Quick Facts</h3>
                  <div className="space-y-6">
                    {quickFacts.map((fact, index) => (
                      <div key={index} className="flex items-start space-x-4 group">
                        <div
                          className={`p-3 rounded-2xl bg-gray-700 group-hover:scale-110 transition-transform duration-300`}
                        >
                          <fact.icon className={`h-5 w-5 ${fact.color}`} />
                        </div>
                        <div className="flex-1">
                          <p className="font-semibold text-white">{fact.label}</p>
                          <p className="text-gray-400 mt-1">{fact.value}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/50 shadow-lg">
                  <h3 className="text-2xl font-bold text-blue-400 mb-6">Work Style</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      "Remote Ready",
                      "Adaptable",
                      "Team Player",
                      "Continuous Learning Mindset",
                      "Detail Oriented",
                      "Problem Solver",
                    ].map((trait, index) => (
                      <div
                        key={index}
                        className="flex items-center space-x-2 p-3 rounded-xl bg-gray-700/50 hover:bg-blue-900/20 transition-colors duration-300"
                      >
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <span className="text-gray-300 text-sm font-medium">{trait}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "values" && (
            <div className="grid md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/50 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{value.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{value.description}</p>
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
