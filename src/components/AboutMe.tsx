import type React from "react"
import { MapPin, GraduationCap, Briefcase, User } from "lucide-react"

const About: React.FC = () => {
  const quickFacts = [
    { icon: MapPin, label: "Location", value: "Taguig, Metro Manila, Philippines" },
    { icon: GraduationCap, label: "Education", value: "BS Information Technology, TIP Manila (2025)" },
    {
      icon: Briefcase,
      label: "Recent Experience",
      value: "Full Stack Software Engineer Intern at Oaktree Innovations",
    },
    { icon: User, label: "Status", value: "Available for full-time opportunities" },
  ]

  return (
    <section id="about" className="py-20 bg-gray-50/30 dark:bg-gray-800/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Passionate software developer with a strong foundation in modern web technologies
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <div className="prose prose-lg max-w-none">
              <p className="mb-4 text-gray-600 dark:text-gray-400 leading-relaxed text-justify">
                My journey in technology began with my STEM education at Thy Covenant Montessori School in Taguig City,
                which provided a strong foundation in analytical thinking and problem-solving. This early exposure to
                structured learning environments shaped my approach to tackling complex challenges systematically.
              </p>

              <p className="mb-4 text-gray-600 dark:text-gray-400 leading-relaxed text-justify">
                During my internship as a Full Stack Software Engineer at Oaktree Innovations (March 2025 - May 2025),
                I gained invaluable hands-on experience working in a fully remote, agile development environment. I
                contributed to real client projects including the PREDIKTA Marketing App for Netopia AI, where I
                implemented UI components from Figma designs and integrated frontend components with backend APIs. The
                experience culminated with successfully completing the development curriculum through TaskFlow, my
                comprehensive task management web application.
              </p>

              <p className="mb-4 text-gray-600 dark:text-gray-400 leading-relaxed text-justify">
                What drives me most is user-centered thinking and problem-solving. I&apos;ve proven my ability to adapt
                in fast-paced environments while working both independently and collaboratively in teams. With my recent
                BS Information Technology degree and professional development experience, I&apos;m eager to contribute
                to innovative projects and continue growing as a software developer.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-lg border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-sm hover:border-blue-500/50 dark:hover:border-blue-400/50 transition-colors duration-300">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-blue-600 dark:text-blue-400">Quick Facts</h3>
                <div className="space-y-4">
                  {quickFacts.map((fact, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <fact.icon className="h-5 w-5 text-blue-600 dark:text-blue-400 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">{fact.label}</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{fact.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="rounded-lg border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-sm hover:border-blue-500/50 dark:hover:border-blue-400/50 transition-colors duration-300">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-blue-600 dark:text-blue-400">Work Style</h3>
                <div className="space-y-2">
                  <p className="text-gray-600 dark:text-gray-400">✓ Remote, agile development</p>
                  <p className="text-gray-600 dark:text-gray-400">✓ Collaborative team environment</p>
                  <p className="text-gray-600 dark:text-gray-400">✓ User-centered approach</p>
                  <p className="text-gray-600 dark:text-gray-400">✓ Continuous learning mindset</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
