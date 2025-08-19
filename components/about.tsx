"use client"

import type React from "react"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { FileText, Code, Shield, Database } from "lucide-react"

export function About() {
  const skillsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in")
          }
        })
      },
      { threshold: 0.1 },
    )

    if (skillsRef.current) {
      const skillItems = skillsRef.current.querySelectorAll(".skill-item")
      skillItems.forEach((item) => {
        observer.observe(item)
      })
    }

    return () => {
      if (skillsRef.current) {
        const skillItems = skillsRef.current.querySelectorAll(".skill-item")
        skillItems.forEach((item) => {
          observer.unobserve(item)
        })
      }
    }
  }, [])

  const handleResumeDownload = () => {
    window.open('/Siddharth Bharadwaj - Resume.pdf', '_blank')
  }

  const skills: any[] = []

  const tools: any[] = []

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/10 rounded-full filter blur-3xl -z-10 animate-pulse-slow"></div>
      <div
        className="absolute bottom-0 left-0 w-96 h-96 bg-purple-800/10 rounded-full filter blur-3xl -z-10 animate-pulse-slow"
        style={{ animationDelay: "2s" }}
      ></div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 animate-on-scroll fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">Me</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-purple-700 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="animate-on-scroll fade-in-right">
            <h3 className="text-2xl font-bold mb-4">
              Cybersecurity Professional with a Passion for Digital Protection
            </h3>
            <p className="text-gray-300 mb-6">
              I'm a dedicated cybersecurity expert with over 2 years of hands-on experience in application security, penetration testing, and reverse engineering. My expertise includes roles in bug bounty programs, freelance API reverse engineering, and an internship at a state forensics lab. Passionate about cyber investigations and securing digital assets through advanced forensic and security techniques.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start group hover:-translate-y-1 transition-transform duration-300">
                <div className="bg-purple-900/30 p-2 rounded-lg mr-4 group-hover:bg-purple-800/50 transition-colors">
                  <Shield className="h-5 w-5 text-purple-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Security Assessment</h4>
                  <p className="text-gray-400 text-sm">
                    Comprehensive evaluation of security posture and vulnerabilities
                  </p>
                </div>
              </div>

              <div className="flex items-start group hover:-translate-y-1 transition-transform duration-300">
                <div className="bg-purple-900/30 p-2 rounded-lg mr-4 group-hover:bg-purple-800/50 transition-colors">
                  <Code className="h-5 w-5 text-purple-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Secure Development</h4>
                  <p className="text-gray-400 text-sm">
                    Implementation of security best practices in software development
                  </p>
                </div>
              </div>

              <div className="flex items-start group hover:-translate-y-1 transition-transform duration-300">
                <div className="bg-purple-900/30 p-2 rounded-lg mr-4 group-hover:bg-purple-800/50 transition-colors">
                  <Database className="h-5 w-5 text-purple-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Data Protection</h4>
                  <p className="text-gray-400 text-sm">
                    Safeguarding sensitive information with advanced encryption techniques
                  </p>
                </div>
              </div>
            </div>

            <Button
              className="bg-purple-700 hover:bg-purple-800 text-white group relative overflow-hidden"
              onClick={handleResumeDownload}
            >
              <FileText className="h-4 w-4 mr-2" />
              <span className="relative z-10">Download CV</span>
              <span className="absolute inset-0 bg-white/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
            </Button>
          </div>

          <div ref={skillsRef} className="animate-on-scroll fade-in-left">
            <h3 className="text-2xl font-bold mb-6">Skills</h3>
            <p className="text-gray-400 mb-4">Explore my full skills and tooling in the dedicated section below.</p>
            <a href="#skills" className="text-purple-400 hover:text-purple-300 underline">Go to Skills</a>
          </div>
        </div>
      </div>
    </section>
  )
}

