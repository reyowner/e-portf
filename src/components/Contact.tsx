"use client"

import type React from "react"
import { useState } from "react"
import { Mail, Phone, MapPin, Linkedin, CheckCircle, Clock, Globe, MessageSquare } from "lucide-react"
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

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "domasigreoner@gmail.com",
      href: "mailto:domasigreoner@gmail.com",
      color: "text-blue-500",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+63 967 205 4484",
      href: "tel:+639672054484",
      color: "text-green-500",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Taguig, Metro Manila, Philippines",
      href: null,
      color: "text-red-500",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/rreonerjr",
      href: "https://linkedin.com/in/rreonerjr",
      color: "text-blue-600",
    },
  ]

  const availability = [
    { icon: CheckCircle, label: "Status", value: "Available", color: "text-green-600" },
    { icon: Clock, label: "Notice Period", value: "Immediate", color: "text-blue-600" },
    { icon: Globe, label: "Work Preference", value: "Remote / Hybrid / On-site", color: "text-purple-600" },
    { icon: MessageSquare, label: "Open to", value: "Full-time opportunities", color: "text-orange-600" },
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      await emailjs.send(
        "service_1y4uagr", // Service ID
        "template_sd87jyc", // Template ID
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
        "J1iypjLPkmIVIeREW", // Public Key
      )

      setSubmitStatus("success")
      setFormData({ name: "", email: "", subject: "", message: "" })
    } catch {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Ready to start and available for any opportunities you can offer.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gray-800 rounded-2xl shadow-sm border border-gray-700 p-8">
            <h3 className="text-2xl font-bold text-white mb-6">
              Send a Message
            </h3>

            {submitStatus === "success" && (
              <div className="mb-6 p-4 rounded-xl bg-green-900/20 border border-green-800">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
                  <span className="text-green-300 font-medium">
                    Message sent successfully! I'll get back to you soon.
                  </span>
                </div>
              </div>
            )}

            {submitStatus === "error" && (
              <div className="mb-6 p-4 rounded-xl bg-red-900/20 border border-red-800">
                <div className="flex items-center">
                  <MessageSquare className="h-5 w-5 text-red-400 mr-2" />
                  <span className="text-red-300 font-medium">
                    Failed to send message. Please try again or contact me directly.
                  </span>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-700 bg-gray-800 text-white focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-700 bg-gray-800 text-white focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-700 bg-gray-800 text-white focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200"
                  placeholder="What's this about?"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-700 bg-gray-800 text-white focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200 resize-none"
                  placeholder="Your message..."
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-gray-800 rounded-2xl shadow-sm border border-gray-700 p-8">
              <h3 className="text-2xl font-bold text-white mb-6">
                Contact Information
              </h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-4 p-4 py-0.5 rounded-xl hover:bg-gray-700/30 transition-colors duration-200"
                  >
                    <div className={`w-10 h-10 rounded-lg bg-gray-700 flex items-center justify-center`}>
                      <info.icon className={`h-5 w-5 ${info.color}`} />
                    </div>
                    <div>
                      <p className="font-medium text-white">{info.label}</p>
                      {info.href ? (
                        <a
                          href={info.href}
                          target={info.href.startsWith("http") ? "_blank" : undefined}
                          rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="text-blue-400 hover:text-blue-300 transition-colors duration-200"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-gray-400">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-800 rounded-2xl shadow-sm border border-gray-700 p-8">
              <h3 className="text-2xl font-bold text-white mb-6">
                Current Status
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {availability.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 p-3 rounded-lg bg-gray-700/30"
                  >
                    <item.icon className={`h-4 w-4 ${item.color}`} />
                    <div>
                      <p className="text-sm text-gray-400">{item.label}</p>
                      <p className="font-medium text-white">{item.value}</p>
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

export default Contact
