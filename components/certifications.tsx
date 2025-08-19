"use client"

import { useEffect, useRef } from "react"
import { Award, Shield, Lock, FileCheck, CheckCircle } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function Certifications() {
  const certRef = useRef<HTMLDivElement>(null)

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

    if (certRef.current) {
      const certItems = certRef.current.querySelectorAll(".cert-card")
      certItems.forEach((item, index) => {
        // Add staggered animation delay
        ;(item as HTMLElement).style.animationDelay = `${index * 0.2}s`
        observer.observe(item)
      })
    }

    return () => {
      if (certRef.current) {
        const certItems = certRef.current.querySelectorAll(".cert-card")
        certItems.forEach((item) => {
          observer.unobserve(item)
        })
      }
    }
  }, [])

  const certifications = [
    {
      name: "Practical Web Pentest Associate (PWPA)",
      issuer: "TCM Security",
      date: "2024",
      imageSrc: "/pwpa.png",
      icon: null,
      color: "from-purple-600 to-purple-800",
    },
    {
      name: "Junior Penetration Tester (eJPT)",
      issuer: "INE Security (FKA eLearnSecurity)",
      date: "2025",
      imageSrc: "/ejpt.png",
      icon: null,
      color: "from-indigo-600 to-indigo-800",
    },
    {
      name: "Jr Penetration Tester (PT1)",
      issuer: "TryHackMe",
      date: "2025",
      imageSrc: "/pt1.png",
      icon: null,
      color: "from-fuchsia-600 to-fuchsia-800",
    },
  ]

  return (
    <section id="certifications" className="py-20 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/10 rounded-full filter blur-3xl -z-10 animate-pulse-slow"></div>
      <div
        className="absolute bottom-0 left-0 w-96 h-96 bg-purple-800/10 rounded-full filter blur-3xl -z-10 animate-pulse-slow"
        style={{ animationDelay: "2s" }}
      ></div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 animate-on-scroll fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">
              Certifications
            </span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-purple-700 mx-auto"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Professional certifications that validate my expertise and knowledge in cybersecurity.
          </p>
        </div>

        <div ref={certRef} className="grid [grid-template-columns:repeat(auto-fit,minmax(260px,1fr))] gap-6 mx-auto max-w-6xl">
          {certifications.map((cert, index) => (
            <Card
              key={index}
              className="cert-card w-full bg-gray-900/50 backdrop-blur-sm border-gray-800 overflow-hidden hover:border-purple-500 transition-all duration-300 h-full flex flex-col relative animate-on-scroll scale-in group"
            >
              <CardContent className="p-6 flex flex-col items-center text-center h-full">
                <div
                  className={`w-20 h-20 rounded-full flex items-center justify-center bg-gradient-to-br ${cert.color} mb-4 transform group-hover:scale-110 transition-transform duration-300`}
                >
                  {cert.imageSrc ? (
                    <img src={cert.imageSrc} alt={cert.name} className="w-full h-full object-contain" />
                  ) : (
                    <div className="text-white">{cert.icon}</div>
                  )}
                </div>

                <h3 className="text-xl font-bold text-white mb-2">{cert.name}</h3>
                <div className="flex items-center justify-center mb-2 text-purple-400">
                  <CheckCircle className="h-4 w-4 mr-1" />
                  <span className="text-sm">Verified</span>
                </div>
                <p className="text-gray-400 mb-1">{cert.issuer}</p>
                <p className="text-gray-500 text-sm">Issued {cert.date}</p>

                <div className="mt-4 w-full">
                  <div className="h-1 w-full bg-gray-800 rounded-full overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${cert.color} w-0 group-hover:w-full transition-all duration-1000 ease-out`}
                    ></div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

