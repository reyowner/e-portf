"use client"

import type React from "react"
import { useState } from "react"
import { Mail, Phone, MapPin, Linkedin, Send } from "lucide-react"
import emailjs from "emailjs-com"

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "domasigreoner@gmail.com",
      href: "mailto:domasigreoner@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+63 967 205 4484",
      href: "tel:+639672054484",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Taguig, Metro Manila, Philippines",
      href: null,
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/rreonerjr",
      href: "https://linkedin.com/in/rreonerjr",
    },
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

    emailjs
      .send(
        "service_1y4uagr", // Service ID
        "template_sd87jyc", // Template ID
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          initials: formData.name
            .split(' ')
            .map(n => n[0])
            .join('')
            .toUpperCase(),
          time: new Date().toLocaleString(),
        },
        "J1iypjLPkmIVIeREW" // Public Key
      )
      .then(
        () => {
          alert("Message sent! Thank you for your message. I'll get back to you soon!")
          setFormData({ name: "", email: "", subject: "", message: "" })
          setIsSubmitting(false)
        },
        () => {
          alert("Failed to send message. Please try again later.")
          setIsSubmitting(false)
        }
      )
  }

  return (
    <section id="contact" className="py-20 dark:bg-gray-800/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Ready to start immediately and available for full-time software development opportunities
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="rounded-lg border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-sm hover:border-blue-500/30 dark:hover:border-blue-400/30 transition-colors duration-300">
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-blue-600 dark:text-blue-400">Let&apos;s Connect</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  I&apos;m always open to discussing new opportunities and interesting projects.
                </p>
              </div>
              <div className="px-6 pb-6 space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                      <info.icon className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-gray-900 dark:text-white">{info.label}</p>
                      {info.href ? (
                        <a
                          href={info.href}
                          target={info.href.startsWith("http") ? "_blank" : undefined}
                          rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-gray-600 dark:text-gray-400">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-lg border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-sm hover:border-blue-500/30 dark:hover:border-blue-400/30 transition-colors duration-300">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400">Current Availability</h3>
              </div>
              <div className="px-6 pb-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Status</span>
                  <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-green-100 text-green-800 border-green-200 dark:bg-green-900/30 dark:text-green-300 dark:border-green-800">
                    Available
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Notice Period</span>
                  <span className="font-medium text-gray-900 dark:text-white">Immediate</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Work Preference</span>
                  <span className="font-medium text-gray-900 dark:text-white">Remote / Hybrid / On-site</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Open to</span>
                  <span className="font-medium text-gray-900 dark:text-white">Full-time opportunities</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-lg border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-sm hover:border-blue-500/30 dark:hover:border-blue-400/30 transition-colors duration-300">
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-blue-600 dark:text-blue-400">Send Message</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Drop me a message and I&apos;ll get back to you as soon as possible.
              </p>
            </div>
            <div className="px-6 pb-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-gray-900 dark:text-white">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="flex h-10 w-full rounded-md border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-3 py-2 text-base text-gray-900 dark:text-white focus:border-blue-600 dark:focus:border-blue-400 focus:outline-none"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-900 dark:text-white">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="flex h-10 w-full rounded-md border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-3 py-2 text-base text-gray-900 dark:text-white focus:border-blue-600 dark:focus:border-blue-400 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-gray-900 dark:text-white">
                    Subject
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="flex h-10 w-full rounded-md border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-3 py-2 text-base text-gray-900 dark:text-white focus:border-blue-600 dark:focus:border-blue-400 focus:outline-none"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-gray-900 dark:text-white">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="flex min-h-[80px] w-full rounded-md border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-3 py-2 text-base text-gray-900 dark:text-white focus:border-blue-600 dark:focus:border-blue-400 focus:outline-none resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center w-full h-11 px-6 py-3 rounded-md bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
