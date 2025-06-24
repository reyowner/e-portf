"use client"

import type React from "react"
import { useState, useRef } from "react"
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  CheckCircle,
  Clock,
  Globe,
  MessageSquare,
  AlertCircle,
  Send,
  User,
  FileText,
} from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import emailjs from "emailjs-com"

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({})
  const [focusedField, setFocusedField] = useState<string | null>(null)
  const formRef = useRef<HTMLFormElement>(null)

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "domasigreoner@gmail.com",
      href: "mailto:domasigreoner@gmail.com",
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+63 967 205 4484",
      href: "tel:+639672054484",
      color: "text-green-500",
      bgColor: "bg-green-500/10",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Taguig, Metro Manila, Philippines",
      href: null,
      color: "text-red-500",
      bgColor: "bg-red-500/10",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/rreonerjr",
      href: "https://linkedin.com/in/rreonerjr",
      color: "text-blue-600",
      bgColor: "bg-blue-600/10",
    },
  ]

  const availability = [
    { icon: CheckCircle, label: "Status", value: "Employed (Not Available)", color: "text-gray-400", bgColor: "bg-gray-600/10" },
    { icon: Clock, label: "Notice Period", value: "Not accepting new offers", color: "text-gray-400", bgColor: "bg-gray-600/10" },
    {
      icon: Globe,
      label: "Work Preference",
      value: "Remote / Hybrid / On-site",
      color: "text-purple-600",
      bgColor: "bg-purple-600/10",
    },
    {
      icon: MessageSquare,
      label: "Open to",
      value: "Currently not open to new opportunities",
      color: "text-orange-600",
      bgColor: "bg-orange-600/10",
    },
  ]

  // Real-time validation
  const validateField = (name: string, value: string) => {
    switch (name) {
      case "name":
        if (!value.trim()) return "Name is required"
        if (value.trim().length < 2) return "Name must be at least 2 characters"
        return ""
      case "email":
        if (!value.trim()) return "Email is required"
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(value)) return "Please enter a valid email address"
        return ""
      case "subject":
        if (!value.trim()) return "Subject is required"
        if (value.trim().length < 5) return "Subject must be at least 5 characters"
        return ""
      case "message":
        if (!value.trim()) return "Message is required"
        if (value.trim().length < 10) return "Message must be at least 10 characters"
        return ""
      default:
        return ""
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Real-time validation
    const error = validateField(name, value)
    setFieldErrors((prev) => ({ ...prev, [name]: error }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Validate all fields
    const errors: Record<string, string> = {}
    Object.entries(formData).forEach(([key, value]) => {
      const error = validateField(key, value)
      if (error) errors[key] = error
    })

    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors)
      return
    }

    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      await emailjs.send(
        "service_1y4uagr",
        "template_sd87jyc",
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          initials: formData.name
            .split(" ")
            .map((n) => n[0])
            .join("")
            .toUpperCase(),
          time: new Date().toLocaleString(),
        },
        "J1iypjLPkmIVIeREW",
      )

      setSubmitStatus("success")
      setFormData({ name: "", email: "", subject: "", message: "" })
      setFieldErrors({})

      // Auto-hide success message after 5 seconds
      setTimeout(() => setSubmitStatus("idle"), 5000)
    } catch {
      setSubmitStatus("error")
      setTimeout(() => setSubmitStatus("idle"), 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  const getFieldIcon = (fieldName: string) => {
    switch (fieldName) {
      case "name":
        return User
      case "email":
        return Mail
      case "subject":
        return FileText
      case "message":
        return MessageSquare
      default:
        return User
    }
  }

  return (
    <section id="contact" className="py-8 sm:py-12 lg:py-20 bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-8 sm:mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-400 max-w-2xl mx-auto px-4 sm:px-0">
            Currently employed as Fullstack Engineer (Contractual) at Oaktree Global. Not available for new opportunities.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto space-y-6 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-12">
          {/* Enhanced Contact Form */}
          <motion.div
            className="bg-gray-800 rounded-xl sm:rounded-2xl shadow-sm border border-gray-700 p-4 sm:p-6 lg:p-8 order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center mb-4 sm:mb-6">
              <motion.div
                className="w-10 h-10 bg-blue-600/20 rounded-xl flex items-center justify-center mr-3"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <Send className="w-5 h-5 text-blue-400" />
              </motion.div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white">Send a Message</h3>
            </div>

            {/* Enhanced Status Messages */}
            <AnimatePresence>
              {submitStatus === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: -20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.95 }}
                  className="mb-4 sm:mb-6 p-3 sm:p-4 rounded-lg sm:rounded-xl bg-green-900/20 border border-green-800"
                >
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-400 mr-2 flex-shrink-0" />
                    <span className="text-green-300 font-medium text-sm sm:text-base">
                      Message sent successfully! I'll get back to you soon.
                    </span>
                  </div>
                </motion.div>
              )}

              {submitStatus === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: -20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.95 }}
                  className="mb-4 sm:mb-6 p-3 sm:p-4 rounded-lg sm:rounded-xl bg-red-900/20 border border-red-800"
                >
                  <div className="flex items-center">
                    <AlertCircle className="h-4 w-4 sm:h-5 sm:w-5 text-red-400 mr-2 flex-shrink-0" />
                    <span className="text-red-300 font-medium text-sm sm:text-base">
                      Failed to send message. Please try again or contact me directly.
                    </span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {["name", "email"].map((field) => {
                  const Icon = getFieldIcon(field)
                  const hasError = fieldErrors[field]
                  const isFocused = focusedField === field

                  return (
                    <motion.div
                      key={field}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 }}
                    >
                      <label htmlFor={field} className="block text-sm font-medium text-gray-300 mb-2 capitalize">
                        {field === "name" ? "Full Name" : "Email Address"}
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Icon
                            className={`h-4 w-4 transition-colors duration-200 ${
                              hasError ? "text-red-400" : isFocused ? "text-blue-400" : "text-gray-500"
                            }`}
                          />
                        </div>
                        <input
                          id={field}
                          name={field}
                          type={field === "email" ? "email" : "text"}
                          value={formData[field as keyof typeof formData]}
                          onChange={handleInputChange}
                          onFocus={() => setFocusedField(field)}
                          onBlur={() => setFocusedField(null)}
                          className={`w-full pl-10 pr-3 py-2.5 sm:py-3 rounded-lg border bg-gray-800 text-white focus:ring-2 focus:border-transparent transition-all duration-200 text-sm sm:text-base ${
                            hasError ? "border-red-500 focus:ring-red-400" : "border-gray-700 focus:ring-blue-400"
                          }`}
                          placeholder={field === "name" ? "Your name" : "your.email@example.com"}
                        />
                      </div>
                      <AnimatePresence>
                        {hasError && (
                          <motion.p
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="mt-1 text-xs text-red-400"
                          >
                            {hasError}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  )
                })}
              </div>

              {/* Subject Field */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Subject
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FileText
                      className={`h-4 w-4 transition-colors duration-200 ${
                        fieldErrors.subject
                          ? "text-red-400"
                          : focusedField === "subject"
                            ? "text-blue-400"
                            : "text-gray-500"
                      }`}
                    />
                  </div>
                  <input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField("subject")}
                    onBlur={() => setFocusedField(null)}
                    className={`w-full pl-10 pr-3 py-2.5 sm:py-3 rounded-lg border bg-gray-800 text-white focus:ring-2 focus:border-transparent transition-all duration-200 text-sm sm:text-base ${
                      fieldErrors.subject ? "border-red-500 focus:ring-red-400" : "border-gray-700 focus:ring-blue-400"
                    }`}
                    placeholder="What's this about?"
                  />
                </div>
                <AnimatePresence>
                  {fieldErrors.subject && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="mt-1 text-xs text-red-400"
                    >
                      {fieldErrors.subject}
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* Message Field */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <div className="relative">
                  <div className="absolute top-3 left-3 pointer-events-none">
                    <MessageSquare
                      className={`h-4 w-4 transition-colors duration-200 ${
                        fieldErrors.message
                          ? "text-red-400"
                          : focusedField === "message"
                            ? "text-blue-400"
                            : "text-gray-500"
                      }`}
                    />
                  </div>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField("message")}
                    onBlur={() => setFocusedField(null)}
                    rows={4}
                    className={`w-full pl-10 pr-3 py-2.5 sm:py-3 rounded-lg border bg-gray-800 text-white focus:ring-2 focus:border-transparent transition-all duration-200 resize-none text-sm sm:text-base ${
                      fieldErrors.message ? "border-red-500 focus:ring-red-400" : "border-gray-700 focus:ring-blue-400"
                    }`}
                    placeholder="Your message..."
                  />
                </div>
                <AnimatePresence>
                  {fieldErrors.message && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="mt-1 text-xs text-red-400"
                    >
                      {fieldErrors.message}
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-4 py-3 sm:px-6 sm:py-3.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base flex items-center justify-center space-x-2"
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                {isSubmitting ? (
                  <>
                    <motion.div
                      className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                    />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Enhanced Contact Information */}
          <div className="space-y-6 lg:space-y-8 order-1 lg:order-2">
            <motion.div
              className="bg-gray-800 rounded-xl sm:rounded-2xl shadow-sm border border-gray-700 p-4 sm:p-6 lg:p-8"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-4 sm:mb-6">Contact Information</h3>
              <div className="space-y-4 sm:space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start space-x-3 sm:space-x-4 p-2 sm:p-3 rounded-lg sm:rounded-xl hover:bg-gray-700/30 transition-colors duration-200"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    whileHover={{ scale: 1.02, x: 5 }}
                  >
                    <div
                      className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg ${info.bgColor} flex items-center justify-center flex-shrink-0`}
                    >
                      <info.icon className={`h-4 w-4 sm:h-5 sm:w-5 ${info.color}`} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="font-medium text-white text-sm sm:text-base">{info.label}</p>
                      {info.href ? (
                        <a
                          href={info.href}
                          target={info.href.startsWith("http") ? "_blank" : undefined}
                          rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="text-blue-400 hover:text-blue-300 transition-colors duration-200 text-sm sm:text-base break-all"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-gray-400 text-sm sm:text-base">{info.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="bg-gray-800 rounded-xl sm:rounded-2xl shadow-sm border border-gray-700 p-4 sm:p-6 lg:p-8"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-4 sm:mb-6">Current Status</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {availability.map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-2 sm:space-x-3 p-2 sm:p-3 rounded-lg bg-gray-700/30"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div
                      className={`w-8 h-8 rounded-lg ${item.bgColor} flex items-center justify-center flex-shrink-0`}
                    >
                      <item.icon className={`h-4 w-4 ${item.color}`} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-xs sm:text-sm text-gray-400">{item.label}</p>
                      <p className="font-medium text-white text-sm sm:text-base">{item.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
