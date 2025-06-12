import type React from "react"

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      description: "Professional experience building modern web applications",
      skills: [
        { name: "React.js", level: 85, experience: "Professional (3+ months)" },
        { name: "Next.js", level: 80, experience: "Professional (3+ months)" },
        { name: "HTML/CSS", level: 90, experience: "Professional (3+ months)" },
        { name: "JavaScript", level: 85, experience: "Professional (3+ months)" },
        { name: "Responsive Design", level: 85, experience: "Professional" },
        { name: "Figma to Code", level: 80, experience: "Professional" },
      ],
    },
    {
      title: "Backend Development",
      description: "Server-side development and API integration",
      skills: [
        { name: "FastAPI (Python)", level: 75, experience: "Professional (3+ months)" },
        { name: "API Integration", level: 80, experience: "Professional" },
        { name: "PostgreSQL", level: 70, experience: "Project Experience" },
        { name: "RESTful APIs", level: 75, experience: "Professional" },
      ],
    },
    {
      title: "Tools & Development",
      description: "Professional development tools and methodologies",
      skills: [
        { name: "Git/GitHub", level: 85, experience: "Professional" },
        { name: "VS Code", level: 90, experience: "Professional" },
        { name: "Docker", level: 65, experience: "Professional" },
        { name: "Agile/Scrum", level: 80, experience: "Professional" },
      ],
    },
    {
      title: "Professional Skills",
      description: "Soft skills and industry knowledge",
      skills: [
        { name: "Team Collaboration", level: 90, experience: "Proven in remote teams" },
        { name: "Problem Solving", level: 88, experience: "Demonstrated" },
        { name: "Fast Learning", level: 92, experience: "Continuous growth" },
        { name: "Communication", level: 85, experience: "Remote work experience" },
      ],
    },
  ]

  const additionalSkills = [
    "Microsoft Excel",
    "Microsoft Word",
    "Data Entry",
    "Document Transcription",
    "Cybersecurity Awareness",
    "Fast Typing",
    "Quality Assurance",
    "Time Management",
  ]

  // Custom Progress component
  const Progress = ({ value }: { value: number }) => (
    <div className="relative h-2 w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
      <div className="h-full bg-blue-600 transition-all" style={{ width: `${value}%` }}></div>
    </div>
  )

  return (
    <section id="skills" className="py-20 bg-gray-50/30 dark:bg-gray-800/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Technical expertise gained through professional experience and continuous learning
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="rounded-lg border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-md hover:shadow-lg hover:border-blue-500/30 dark:hover:border-blue-400/30 transition-all duration-300"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400">{category.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{category.description}</p>
              </div>
              <div className="px-6 pb-6 space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-gray-900 dark:text-white">{skill.name}</span>
                      <span className="text-sm text-gray-600 dark:text-gray-400">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} />
                    <p className="text-xs text-gray-600 dark:text-gray-400">{skill.experience}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="rounded-lg border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-md hover:border-blue-500/30 dark:hover:border-blue-400/30 transition-all duration-300">
          <div className="p-6">
            <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400">Additional Skills</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Transferable skills from previous experience and academic background
            </p>
          </div>
          <div className="px-6 pb-6">
            <div className="flex flex-wrap gap-2">
              {additionalSkills.map((skill, index) => (
                <span
                  key={index}
                  className="inline-flex items-center rounded-full border border-transparent px-2.5 py-0.5 text-xs font-semibold bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
