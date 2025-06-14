"use client"
import { Github, Linkedin, Mail, Heart, ArrowUp, Code, Coffee } from "lucide-react"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/reyowner",
      label: "GitHub",
      color: "hover:text-gray-900 dark:hover:text-white",
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/rreonerjr",
      label: "LinkedIn",
      color: "hover:text-blue-600",
    },
    {
      icon: Mail,
      href: "mailto:domasigreoner@gmail.com",
      label: "Email",
      color: "hover:text-red-500",
    },
  ]

  const quickLinks = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#experience", label: "Experience" },
    { href: "#contact", label: "Contact" },
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const handleNavClick = (href: string) => {
    const element = document.getElementById(href.replace("#", ""))
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-40 h-40 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        {/* Main footer content */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
            {/* Brand section */}
            <div className="lg:col-span-2">
              <div className="mb-6">
                <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
                  Renato Reoner Jr.
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed max-w-md">
                  Full Stack Developer passionate about creating innovative solutions with modern web technologies.
                  Ready to contribute to your next project.
                </p>
              </div>

              <div className="flex items-center space-x-2 text-gray-400 mb-6">
                <Code className="h-4 w-4" />
                <span className="text-sm">Built with</span>
                <Heart className="h-4 w-4 text-red-400" />
                <span className="text-sm">using Next.js, React & Tailwind CSS</span>
              </div>

              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target={social.href.startsWith("http") ? "_blank" : undefined}
                    rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className={`group p-3 rounded-2xl bg-gray-800/50 border border-gray-700/50 hover:border-gray-600 transition-all duration-300 transform hover:scale-110 hover:shadow-lg ${social.color}`}
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5 transition-transform duration-300 group-hover:rotate-12" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick links */}
            <div>
              <h4 className="text-xl font-semibold mb-6 text-white">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => handleNavClick(link.href)}
                      className="text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact info */}
            <div>
              <h4 className="text-xl font-semibold mb-6 text-white">Get In Touch</h4>
              <div className="space-y-4">
                <div>
                  <p className="text-gray-400 text-sm mb-1">Email</p>
                  <a
                    href="mailto:domasigreoner@gmail.com"
                    className="text-blue-400 hover:text-blue-300 transition-colors duration-300"
                  >
                    domasigreoner@gmail.com
                  </a>
                </div>
                <div>
                  <p className="text-gray-400 text-sm mb-1">Phone</p>
                  <a
                    href="tel:+639672054484"
                    className="text-blue-400 hover:text-blue-300 transition-colors duration-300"
                  >
                    +63 967 205 4484
                  </a>
                </div>
                <div>
                  <p className="text-gray-400 text-sm mb-1">Location</p>
                  <p className="text-gray-300">Taguig, Metro Manila, Philippines</p>
                </div>
                <div className="pt-4">
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-900/30 border border-green-800/50 text-green-300 text-sm">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                    Available for opportunities
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex items-center space-x-4 text-gray-400 text-sm">
                <span>&copy; {currentYear} Renato Reoner Jr. All rights reserved.</span>
                <div className="hidden md:flex items-center space-x-2">
                  <Coffee className="h-4 w-4" />
                  <span>Crafted with passion</span>
                </div>
              </div>

              <button
                onClick={scrollToTop}
                className="group p-3 rounded-2xl bg-blue-600/20 border border-blue-500/30 hover:bg-blue-600/30 hover:border-blue-400/50 transition-all duration-300 transform hover:scale-110"
                aria-label="Scroll to top"
              >
                <ArrowUp className="h-5 w-5 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
