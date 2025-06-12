import type React from "react"
import { Calendar, MapPin, Building } from "lucide-react"

const Experience: React.FC = () => {
  const experiences = [
    {
      title: "Full Stack Software Engineer Intern",
      company: "Oaktree Innovations",
      duration: "March 2025 - June 2025",
      location: "Remote",
      type: "Internship",
      status: "Completed",
      achievements: [
        "Contributed to internal and client-facing web applications in fully remote, agile development environment",
        "Developed and enhanced features using React.js, Next.js, and FastAPI",
        "Ensured alignment with Figma-based UI/UX designs and implemented custom designs when needed",
        "Successfully participated in development of PREDIKTA Marketing App for Netopia AI",
        "Completed comprehensive development curriculum with TaskFlow as final project",
        "Gained valuable hands-on experience in real-world software development",
        "Improved technical proficiency, problem-solving skills, and team communication",
      ],
      technologies: ["React.js", "Next.js", "FastAPI", "Python", "Figma", "Git", "Agile Development"],
    },
    {
      title: "Bachelor of Science in Information Technology",
      company: "Technological Institute of the Philippines - Manila",
      duration: "Graduated 2025",
      location: "Manila, Philippines",
      type: "Education",
      status: "Completed",
      achievements: [
        "4-year comprehensive IT program",
        "Software development principles and methodologies",
        "Strong foundation in problem-solving and analytical thinking",
        "Technical foundation for current professional role",
        "Academic projects in various programming languages and technologies",
      ],
      technologies: ["Programming Fundamentals", "Database Management", "Web Development", "Software Engineering"],
    },
    {
      title: "Data Entry Clerk",
      company: "Nelpa Lifesciences Inc.",
      duration: "February 2021 - March 2021",
      location: "Philippines",
      type: "Work Immersion",
      status: "Completed",
      achievements: [
        "Transcribed medical documents from PDFs and images into Microsoft Word",
        "Maintained original document format and structure with high accuracy",
        "Ensured consistency and quality in documentation processes",
        "Developed fast and precise typing skills for high-volume data entry",
        "Demonstrated attention to detail and quality assurance mindset",
      ],
      technologies: ["Microsoft Word", "Microsoft Excel", "Data Entry", "Quality Assurance"],
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-green-100 text-green-800 border-green-200 dark:bg-green-900/30 dark:text-green-300 dark:border-green-800"
      case "Current":
        return "bg-blue-100 text-blue-800 border-blue-200 dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-800"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-700"
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Internship":
        return "bg-blue-100/30 text-blue-800 border-blue-200 dark:bg-blue-900/20 dark:text-blue-300 dark:border-blue-800/30"
      case "Education":
        return "bg-purple-100 text-purple-800 border-purple-200 dark:bg-purple-900/30 dark:text-purple-300 dark:border-purple-800"
      case "Work Immersion":
        return "bg-orange-100 text-orange-800 border-orange-200 dark:bg-orange-900/30 dark:text-orange-300 dark:border-orange-800"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-700"
    }
  }

  // Custom Badge component
  const Badge = ({ className, children }: { className: string; children: React.ReactNode }) => (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors ${className}`}
    >
      {children}
    </span>
  )

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Professional Journey
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My educational background and professional development in software development
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="rounded-lg border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-md hover:shadow-lg hover:border-blue-500/30 dark:hover:border-blue-400/30 transition-all duration-300"
              >
                <div className="p-6 pb-4">
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <Badge className={getTypeColor(exp.type)}>{exp.type}</Badge>
                    <Badge className={getStatusColor(exp.status)}>{exp.status}</Badge>
                  </div>
                  <h3 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-white mb-2">{exp.title}</h3>
                  <div className="space-y-2">
                    <div className="flex items-center text-blue-600 dark:text-blue-400 font-medium">
                      <Building className="mr-2 h-4 w-4" />
                      {exp.company}
                    </div>
                    <div className="flex flex-wrap items-center gap-4 text-gray-600 dark:text-gray-400 text-sm">
                      <div className="flex items-center">
                        <Calendar className="mr-1 h-4 w-4" />
                        {exp.duration}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="mr-1 h-4 w-4" />
                        {exp.location}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="px-6 pb-6 space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">
                      {exp.type === "Education" ? "Academic Highlights" : "Key Achievements"}
                    </h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="flex items-start">
                          <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-600 dark:text-gray-400 leading-relaxed">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">
                      {exp.type === "Education" ? "Key Areas" : "Technologies & Skills"}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="inline-flex items-center rounded-full border border-transparent px-2.5 py-0.5 text-xs font-semibold bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <div className="inline-block rounded-lg border-2 border-blue-500/20 bg-blue-50/50 dark:bg-blue-900/10 dark:border-blue-800/20 shadow-sm">
            <div className="p-6">
              <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-2">Current Status</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Recent BS Information Technology Graduate (2025) • Completed Full Stack Software Engineer Internship •
                Available for Full-time Opportunities
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
