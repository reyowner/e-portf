"use client"

import type React from "react"
import { useState } from "react"
import { Code2, Database, Server, Users, Plus, ChevronDown } from "lucide-react"

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("frontend")
  const [showAdditional, setShowAdditional] = useState(false)

  const skillCategories = {
    frontend: {
      title: "Frontend",
      fullTitle: "Frontend Development",
      icon: Code2,
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "React.js", level: 85 },
        { name: "Next.js", level: 80 },
        { name: "HTML/CSS", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "TypeScript", level: 75 },
        { name: "Tailwind CSS", level: 88 },
      ],
    },
    backend: {
      title: "Backend",
      fullTitle: "Backend Development",
      icon: Database,
      color: "from-green-500 to-emerald-500",
      skills: [
        { name: "FastAPI (Python)", level: 75 },
        { name: "API Integration", level: 80 },
        { name: "PostgreSQL", level: 70 },
        { name: "RESTful APIs", level: 75 },
        { name: "JWT Auth", level: 72 },
      ],
    },
    tools: {
      title: "Tools",
      fullTitle: "Tools & Development",
      icon: Server,
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "Git/GitHub", level: 85 },
        { name: "VS Code", level: 90 },
        { name: "Docker", level: 65 },
        { name: "Agile/Scrum", level: 80 },
        { name: "Figma", level: 75 },
      ],
    },
    soft: {
      title: "Professional",
      fullTitle: "Professional Skills",
      icon: Users,
      color: "from-orange-500 to-red-500",
      skills: [
        { name: "Team Collaboration", level: 90 },
        { name: "Problem Solving", level: 88 },
        { name: "Fast Learning", level: 92 },
        { name: "Communication", level: 85 },
        { name: "Time Management", level: 87 },
      ],
    },
  }

  const additionalSkills = [
    { name: "Microsoft Excel", category: "Office" },
    { name: "Microsoft Word", category: "Office" },
    { name: "Data Entry", category: "Administrative" },
    { name: "Document Transcription", category: "Administrative" },
    { name: "Cybersecurity Awareness", category: "Security" },
    { name: "Fast Typing", category: "Technical" },
    { name: "Quality Assurance", category: "Process" },
    { name: "Time Management", category: "Soft Skills" },
  ]

  // Custom Progress component
  const Progress = ({ value, color }: { value: number; color: string }) => (
    <div className="relative h-1.5 sm:h-2 w-full overflow-hidden rounded-full bg-gray-700">
      <div
        className={`h-full bg-gradient-to-r ${color} transition-all duration-1000 ease-out`}
        style={{ width: `${value}%` }}
      ></div>
    </div>
  )

  const currentCategory = skillCategories[activeCategory as keyof typeof skillCategories]

  return (
    <section id="skills" className="py-8 sm:py-12 lg:py-20 bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-400 max-w-2xl mx-auto px-4 sm:px-0">
            Technical expertise gained through professional experience and hands-on development
          </p>
        </div>

        {/* Category Navigation */}
        <div className="flex justify-center mb-6 sm:mb-10">
          <div className="bg-gray-800 rounded-xl sm:rounded-2xl p-2 px-3 sm:p-2.5 border border-gray-700 shadow-lg w-full max-w-2xl">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-1 sm:gap-2 lg:gap-3">
              {Object.entries(skillCategories).map(([key, category]) => {
                const Icon = category.icon
                const isActive = activeCategory === key

                return (
                  <button
                    key={key}
                    onClick={() => setActiveCategory(key)}
                    className={`flex flex-col sm:flex-row items-center justify-center px-2 py-2 sm:px-3 sm:py-2.5 lg:px-6 lg:py-3 rounded-lg sm:rounded-xl font-medium transition-all duration-300 ${
                      isActive
                        ? "bg-blue-600 text-white shadow-lg transform scale-105"
                        : "text-gray-400 hover:text-blue-400 hover:bg-gray-700/50"
                    }`}
                  >
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 mb-1 sm:mb-0 sm:mr-2 lg:mr-3 flex-shrink-0" />
                    <span className="text-xs sm:text-sm lg:text-md text-center sm:text-left">
                      <span className="sm:hidden block">{category.title}</span>
                      <span className="hidden sm:block">{category.fullTitle}</span>
                    </span>
                  </button>
                )
              })}
            </div>
          </div>
        </div>

        {/* Skills Content */}
        <div className="max-w-4xl mx-auto mb-6 sm:mb-12">
          <div className="bg-gray-800 rounded-2xl sm:rounded-3xl border border-gray-700 shadow-lg overflow-hidden">
            {/* Category Header */}
            <div className={`bg-gradient-to-r ${currentCategory.color} p-3 sm:p-4 lg:p-6 text-white`}>
              <div className="flex items-center">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/20 rounded-lg sm:rounded-xl flex items-center justify-center mr-3 sm:mr-4">
                  <currentCategory.icon className="h-4 w-4 sm:h-5 sm:w-5" />
                </div>
                <h3 className="text-base sm:text-lg lg:text-xl font-bold">{currentCategory.fullTitle}</h3>
              </div>
            </div>

            {/* Skills Grid */}
            <div className="p-3 sm:p-4 lg:p-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 lg:gap-4">
                {currentCategory.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="group p-2.5 sm:p-3 lg:p-4 rounded-lg sm:rounded-xl bg-gray-700/30 hover:bg-blue-900/20 border border-gray-700/50 hover:border-blue-500/30 transition-all duration-300"
                  >
                    <div className="flex justify-between items-center mb-2 sm:mb-3">
                      <h4 className="text-xs sm:text-sm lg:text-base font-medium text-white group-hover:text-blue-400 transition-colors duration-300">
                        {skill.name}
                      </h4>
                      <div className="text-xs sm:text-sm font-medium text-blue-400">{skill.level}%</div>
                    </div>
                    <Progress value={skill.level} color={currentCategory.color} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Additional Skills */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl sm:rounded-3xl border border-gray-700/50 shadow-lg overflow-hidden">
            <div className="p-3 sm:p-4 lg:p-6">
              <button
                onClick={() => setShowAdditional(!showAdditional)}
                className="flex items-center justify-between w-full mb-4 sm:mb-6 group"
              >
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-blue-900/20 rounded-lg sm:rounded-xl flex items-center justify-center">
                    <Plus className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-blue-400" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-sm sm:text-base lg:text-lg font-bold text-white">Additional Skills</h3>
                    <p className="text-xs sm:text-sm text-gray-400 mt-1">Complementary skills and competencies</p>
                  </div>
                </div>
                <ChevronDown
                  className={`h-4 w-4 sm:h-5 sm:w-5 text-gray-400 group-hover:text-blue-400 transition-all duration-300 ${
                    showAdditional ? "rotate-180" : ""
                  }`}
                />
              </button>

              {showAdditional && (
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3">
                  {additionalSkills.map((skill, index) => (
                    <div
                      key={index}
                      className="group p-2 sm:p-3 rounded-lg sm:rounded-xl bg-gray-800 hover:bg-blue-900/20 border border-gray-700 hover:border-blue-500/30 transition-all duration-300 hover:shadow-md"
                    >
                      <div className="font-medium text-xs sm:text-sm text-white group-hover:text-blue-400 transition-colors duration-300 leading-tight">
                        {skill.name}
                      </div>
                      <div className="text-xs text-gray-400 mt-1 flex items-center">
                        <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-blue-500/50 rounded-full mr-1 sm:mr-2 flex-shrink-0"></span>
                        <span className="truncate">{skill.category}</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
