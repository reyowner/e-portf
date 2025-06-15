"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Code2 } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const navLinks = [
  { href: "#", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
]

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (scrollTop / docHeight) * 100

      setScrolled(scrollTop > 50)
      setScrollProgress(progress)

      // Update active section based on scroll position
      const sections = navLinks.map((link) => link.href.replace("#", "") || "home")
      const currentSection = sections.find((section) => {
        const element = section === "home" ? document.body : document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (section === "home") {
            return rect.top >= 0 && rect.top <= 50
          }
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })

      if (currentSection) {
        setActiveSection(currentSection === "home" ? "" : currentSection)
      } else {
        setActiveSection("")
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (!sidebarOpen) return
    const handleClick = (e: MouseEvent) => {
      const sidebar = document.getElementById("mobile-sidebar")
      if (sidebar && !sidebar.contains(e.target as Node)) {
        setSidebarOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClick)
    return () => document.removeEventListener("mousedown", handleClick)
  }, [sidebarOpen])

  const handleNavClick = (href: string) => {
    setSidebarOpen(false)
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" })
    } else {
      const element = document.getElementById(href.replace("#", ""))
      element?.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <>
      <motion.nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-gray-900/95 backdrop-blur-md shadow-lg border-b border-gray-700/20" : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Progress Bar */}
        <motion.div
          className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600"
          style={{ width: `${scrollProgress}%` }}
          initial={{ width: 0 }}
          animate={{ width: `${scrollProgress}%` }}
          transition={{ duration: 0.1 }}
        />

        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Enhanced Logo */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="#"
                onClick={() => handleNavClick("#")}
                className="flex items-center space-x-2 text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:from-blue-500 hover:to-purple-500 transition-all duration-200"
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                >
                  <Code2 className="w-6 h-6 text-blue-600" />
                </motion.div>
                <span>Ren</span>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navLinks.map((link, index) => {
                const isActive =
                  (link.href === "#" && activeSection === "") ||
                  (link.href !== "#" && activeSection === link.href.replace("#", ""))

                return (
                  <motion.button
                    key={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      isActive ? "text-blue-400" : "text-gray-300 hover:text-blue-400 hover:bg-gray-800/50"
                    }`}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {link.label}
                    {isActive && (
                      <motion.div
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"
                        layoutId="activeTab"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </motion.button>
                )
              })}
            </div>

            {/* Mobile menu button */}
            <motion.button
              className="md:hidden p-2 rounded-lg hover:bg-gray-800/50 transition-colors duration-200"
              onClick={() => setSidebarOpen(true)}
              aria-label="Open menu"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Menu className="h-6 w-6 text-white" />
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Enhanced Mobile Sidebar */}
      <AnimatePresence>
        {sidebarOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setSidebarOpen(false)}
            />
            <motion.aside
              id="mobile-sidebar"
              className="fixed top-0 right-0 h-full w-80 bg-gray-900/95 backdrop-blur-md shadow-2xl z-50"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
            >
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-700/20">
                  <motion.span
                    className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    Navigation
                  </motion.span>
                  <motion.button
                    className="p-2 rounded-lg hover:bg-gray-800/50 transition-colors duration-200"
                    onClick={() => setSidebarOpen(false)}
                    aria-label="Close menu"
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <X className="h-5 w-5 text-white" />
                  </motion.button>
                </div>

                {/* Navigation Links */}
                <nav className="flex-1 p-6">
                  <div className="space-y-2">
                    {navLinks.map((link, index) => {
                      const isActive =
                        (link.href === "#" && activeSection === "") ||
                        (link.href !== "#" && activeSection === link.href.replace("#", ""))

                      return (
                        <motion.button
                          key={link.href}
                          onClick={() => handleNavClick(link.href)}
                          className={`w-full text-left px-4 py-3 rounded-xl text-lg font-medium transition-all duration-200 ${
                            isActive
                              ? "bg-blue-900/30 text-blue-400 shadow-sm"
                              : "text-white hover:text-blue-400 hover:bg-gray-800/50"
                          }`}
                          initial={{ opacity: 0, x: 50 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 + index * 0.05 }}
                          whileHover={{ scale: 1.02, x: 5 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          {link.label}
                        </motion.button>
                      )
                    })}
                  </div>
                </nav>

                {/* Footer */}
                <motion.div
                  className="p-6 border-t border-gray-700/20"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <p className="text-sm text-gray-400 text-center">Ready for new opportunities</p>
                  <div className="flex justify-center mt-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  </div>
                </motion.div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar
