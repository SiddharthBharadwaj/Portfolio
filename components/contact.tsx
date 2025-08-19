"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Send, Twitter, Github } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const mailto = `mailto:me@siddharth.pro?subject=${encodeURIComponent(
      formData.subject,
    )}&body=${encodeURIComponent(`From: ${formData.name} <${formData.email}>\n\n${formData.message}`)}`
    window.location.href = mailto
  }

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="absolute top-20 right-20 w-96 h-96 bg-purple-600/10 rounded-full filter blur-3xl -z-10 animate-pulse-slow"></div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 animate-on-scroll fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get In{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">Touch</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-purple-700 mx-auto"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Have a security concern or interested in my services? Reach out and let's discuss how I can help secure your
            digital assets.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="animate-on-scroll fade-in-right">
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-800 h-full hover:border-purple-500/50 transition-colors duration-300">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <p className="text-gray-400 mb-8">
                Feel free to reach out through any of the following channels. I'm available for consultations, security
                assessments, and project inquiries.
              </p>

              <div className="space-y-6">
                <div className="flex items-start group hover:-translate-y-1 transition-transform duration-300">
                  <div className="bg-purple-900/30 p-3 rounded-lg mr-4 group-hover:bg-purple-800/50 transition-colors">
                    <Mail className="h-6 w-6 text-purple-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Email</h4>
                    <p className="text-gray-400">siddharthbharadwaj@proton.me</p>
                  </div>
                </div>



                <div className="flex items-start group hover:-translate-y-1 transition-transform duration-300">
                  <div className="bg-purple-900/30 p-3 rounded-lg mr-4 group-hover:bg-purple-800/50 transition-colors">
                    <MapPin className="h-6 w-6 text-purple-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Location</h4>
                    <p className="text-gray-400">Noida, Uttar Pradesh</p>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <h4 className="font-semibold text-white mb-4">Connect with me</h4>
                <div className="flex space-x-4">
                  <a
                    href="https://x.com/____Siddharth__"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="X (Twitter)"
                    className="bg-gray-800 p-3 rounded-full text-gray-400 hover:text-purple-400 hover:bg-gray-700 transition-all duration-300 hover:-translate-y-1"
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a
                    href="https://t.me/SiddharthBharadwaj"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Telegram"
                    className="bg-gray-800 p-3 rounded-full text-gray-400 hover:text-purple-400 hover:bg-gray-700 transition-all duration-300 hover:-translate-y-1"
                  >
                    <Send className="h-5 w-5" />
                  </a>
                  <a
                    href="https://github.com/SiddharthBharadwaj"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="bg-gray-800 p-3 rounded-full text-gray-400 hover:text-purple-400 hover:bg-gray-700 transition-all duration-300 hover:-translate-y-1"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="animate-on-scroll fade-in-left">
            <form
              onSubmit={handleSubmit}
              className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-800 hover:border-purple-500/50 transition-colors duration-300"
            >
              <h3 className="text-2xl font-bold mb-6">Send a Message</h3>

              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Siddharth Bharadwaj"
                    className="bg-gray-800 border-gray-700 text-white focus:border-purple-500"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                    Your Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="bg-gray-800 border-gray-700 text-white focus:border-purple-500"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-2">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Security Consultation"
                    className="bg-gray-800 border-gray-700 text-white focus:border-purple-500"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="I'd like to discuss a security assessment..."
                    className="bg-gray-800 border-gray-700 text-white min-h-[150px] focus:border-purple-500"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 text-white group relative overflow-hidden"
                >
                  <span className="relative z-10 flex items-center">
                    <Send className="h-4 w-4 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                    Send Message
                  </span>
                  <span className="absolute inset-0 bg-white/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

