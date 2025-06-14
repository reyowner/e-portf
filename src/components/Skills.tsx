"use client"

import type React from "react"
import { useState } from "react"
import { Code, Database, Wrench, Users, Award } from "lucide-react"

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("frontend")

  const skillCategories = {
    frontend: {
      title: "Frontend Development",
      icon: Code,
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
      title: "Backend Development",
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
      title: "Tools & Development",
      icon: Wrench,
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
      title: "Professional Skills",
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
    <div className="relative h-2 w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
      <div
        className={`h-full bg-gradient-to-r ${color} transition-all duration-1000 ease-out`}
        style={{ width: `${value}%` }}
      ></div>
    </div>
  )

  const currentCategory = skillCategories[activeCategory as keyof typeof skillCategories]
  const CategoryIcon = currentCategory.icon

  return (
    <section
      id="skills"
      className="py-20 bg-gradient-to-br from-gray-50/50 via-white to-purple-50/30 dark:from-gray-800/30 dark:via-gray-900 dark:to-gray-800/50"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Technical expertise gained through professional experience and hands-on development
          </p>
        </div>

        {/* Category Navigation */}
        <div className="flex justify-center mb-10">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-3 border border-gray-200 dark:border-gray-700 shadow-lg">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {Object.entries(skillCategories).map(([key, category]) => {
                const Icon = category.icon
                return (
                  <button
                    key={key}
                    onClick={() => setActiveCategory(key)}
                    className={`flex items-center px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                      activeCategory === key
                        ? `bg-gradient-to-r ${category.color} text-white shadow-md`
                        : "text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-700"
                    }`}
                  >
                    <Icon className="w-5 h-5 mr-2" />
                    <span className="hidden sm:inline">{category.title.split(" ")[0]}</span>
                    <span className="sm:hidden">{category.title.split(" ")[0].slice(0, 4)}</span>
                  </button>
                )
              })}
            </div>
          </div>
        </div>

        {/* Skills Display */}
        <div className="max-w-5xl mx-auto mb-12">
          <div className="bg-white dark:bg-gray-800 rounded-3xl border border-gray-200 dark:border-gray-700 shadow-lg overflow-hidden">
            {/* Category Header */}
            <div className={`bg-gradient-to-r ${currentCategory.color} p-8 text-white`}>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mr-4">
                  <CategoryIcon className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold">{currentCategory.title}</h3>
              </div>
            </div>

            {/* Skills Grid */}
            <div className="p-8">
              <div className="grid md:grid-cols-2 gap-6">
                {currentCategory.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="group p-5 rounded-xl bg-gray-50 dark:bg-gray-700/30 hover:bg-white dark:hover:bg-gray-700/50 border border-gray-200 dark:border-gray-600 hover:border-blue-500/30 dark:hover:border-blue-400/30 transition-all duration-300"
                  >
                    <div className="flex justify-between items-center mb-3">
                      <h4 className="text-lg font-medium text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                        {skill.name}
                      </h4>
                      <div className="text-base font-medium text-blue-600 dark:text-blue-400">{skill.level}%</div>
                    </div>
                    <Progress value={skill.level} color={currentCategory.color} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Additional Skills */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800/50 dark:to-gray-900/50 rounded-3xl border border-gray-200/50 dark:border-gray-700/50 shadow-lg overflow-hidden">
            <div className="p-8">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mr-4">
                  <Award className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Additional Skills</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Complementary skills and competencies</p>
                </div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {additionalSkills.map((skill, index) => (
                  <div
                    key={index}
                    className="group p-4 rounded-xl bg-white dark:bg-gray-800 hover:bg-blue-50 dark:hover:bg-blue-900/20 border border-gray-200 dark:border-gray-700 hover:border-blue-500/30 dark:hover:border-blue-400/30 transition-all duration-300 hover:shadow-md"
                  >
                    <div className="font-medium text-base text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                      {skill.name}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400 mt-1 flex items-center">
                      <span className="w-1.5 h-1.5 bg-blue-500/50 dark:bg-blue-400/50 rounded-full mr-2"></span>
                      {skill.category}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
