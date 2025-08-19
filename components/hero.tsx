"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronDown, Download, ExternalLink } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function Hero() {
  const [text, setText] = useState("")
  const [isTyping, setIsTyping] = useState(true)
  const fullText = "Cybersecurity Specialist"

  useEffect(() => {
    if (isTyping) {
      if (text.length < fullText.length) {
        const timeout = setTimeout(() => {
          setText(fullText.slice(0, text.length + 1))
        }, 100)
        return () => clearTimeout(timeout)
      } else {
        setIsTyping(false)
        const timeout = setTimeout(() => {
          setIsTyping(true)
          setText("")
        }, 2000)
        return () => clearTimeout(timeout)
      }
    }
  }, [text, isTyping])

  const handleResumeDownload = () => {
    window.open('/Siddharth Bharadwaj - Resume.pdf', '_blank')
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black opacity-90"></div>

        {/* Animated particles */}
        <div className="stars-container">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="star"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${5 + Math.random() * 10}s`,
              }}
            ></div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="text-center md:text-left md:w-1/2 animate-on-scroll fade-in-up">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 text-white">
              Hi, I'm{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">
                Siddharth Bharadwaj
              </span>
            </h1>

            <div className="h-12 mb-6">
              <h2 className="text-xl md:text-2xl font-medium text-gray-300">
                <span className="mr-2">I am a</span>
                <span className="text-purple-400 border-r-2 border-purple-400 pr-1 animate-pulse">{text}</span>
              </h2>
            </div>

            <p className="text-gray-400 text-lg md:text-xl mb-8 max-w-2xl mx-auto md:mx-0">
              I specialize in penetration testing, vulnerability assessment, and security architecture. Let me help
              protect your digital assets with cutting-edge security solutions.
            </p>

            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 mb-12">
              <Button
                className="bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 text-white px-8 py-6 text-lg h-auto group relative overflow-hidden"
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              >
                <span className="relative z-10 flex items-center">
                  <ExternalLink className="h-5 w-5 mr-2" />
                  View My Work
                </span>
                <span className="absolute inset-0 bg-white/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
              </Button>
              <Button
                variant="outline"
                className="border-purple-500 text-purple-400 hover:bg-purple-950 px-8 py-6 text-lg h-auto group relative overflow-hidden"
                onClick={handleResumeDownload}
              >
                <span className="relative z-10 flex items-center">
                  <Download className="h-5 w-5 mr-2" />
                  Download Resume
                </span>
                <span className="absolute inset-0 bg-purple-500/10 transform -translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
              </Button>
            </div>
          </div>

          <div className="md:w-1/2 flex justify-center animate-on-scroll fade-in-right">
            <div className="relative">
              <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-purple-600/30 to-purple-800/30 blur-xl animate-pulse-slow"></div>
              <div className="relative rounded-full overflow-hidden border-4 border-purple-500/30 w-64 h-64 md:w-80 md:h-80">
                <Image
                  src="/profile.jpeg"
                  alt="Siddharth Bharadwaj - Cybersecurity Expert"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Link href="#about" className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-8 w-8 text-purple-400" />
      </Link>
    </section>
  )
}

