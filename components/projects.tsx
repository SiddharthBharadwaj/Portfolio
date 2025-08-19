"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Lock, Server, Code } from "lucide-react"
import Link from "next/link"
import { useEffect, useRef } from "react"

export function Projects() {
  const projectsRef = useRef<HTMLDivElement>(null)

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

    if (projectsRef.current) {
      const projectCards = projectsRef.current.querySelectorAll(".project-card")
      projectCards.forEach((card, index) => {
        // Add staggered animation delay
        ;(card as HTMLElement).style.animationDelay = `${index * 0.2}s`
        observer.observe(card)
      })
    }

    return () => {
      if (projectsRef.current) {
        const projectCards = projectsRef.current.querySelectorAll(".project-card")
        projectCards.forEach((card) => {
          observer.unobserve(card)
        })
      }
    }
  }, [])

  const projects = [
    {
      title: "PrettyRecon-CLI",
      description:
        "Developed PrettyRecon-CLI, an open-source Python tool that automates over 90% of tasks for prettyrecon.com, reducing task time from 30 minutes to 5 minutes.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["Python", "Automation", "API"],
      icon: <Code className="h-8 w-8" />,
      link: "https://github.com/SiddharthBharadwaj/prettyrecon-cli",
      github: "https://github.com/SiddharthBharadwaj/prettyrecon-cli",
    },
    {
      title: "AutoTrickster",
      description:
        "AutoTrickster is a command line utility to automate the complete process of creating and adding fleets to the Trickest Community edition.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["Automation", "Command Line", "Trickest"],
      icon: <Code className="h-8 w-8" />,
      link: "https://github.com/SiddharthBharadwaj/AutoTrickster",
      github: "https://github.com/SiddharthBharadwaj/AutoTrickster",
    },
  ]

  return (
    <section id="projects" className="py-20 bg-gray-950 relative overflow-hidden">
      <div className="absolute top-40 left-20 w-72 h-72 bg-purple-600/10 rounded-full filter blur-3xl -z-10 animate-pulse-slow"></div>
      <div
        className="absolute bottom-20 right-20 w-72 h-72 bg-purple-800/10 rounded-full filter blur-3xl -z-10 animate-pulse-slow"
        style={{ animationDelay: "3s" }}
      ></div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 animate-on-scroll fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">
              Projects
            </span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-purple-700 mx-auto"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Explore some of my recent cybersecurity projects that have helped strengthen security postures.
          </p>
        </div>

        <div ref={projectsRef} className="grid [grid-template-columns:repeat(auto-fit,minmax(300px,1fr))] gap-8 mx-auto max-w-6xl">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="project-card w-full bg-gray-900 border-gray-800 overflow-hidden hover:border-purple-500 transition-all duration-300 h-full flex flex-col relative animate-on-scroll scale-in"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent z-10 opacity-60"></div>
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-black/70 p-2 rounded-full z-20 text-purple-400">
                  {project.icon}
                </div>
              </div>

              <CardHeader>
                <CardTitle className="text-xl text-white">{project.title}</CardTitle>
                <CardDescription className="text-gray-400">{project.description}</CardDescription>
              </CardHeader>

              <CardContent className="flex-grow">
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge
                      key={tagIndex}
                      variant="outline"
                      className="bg-purple-950/30 text-purple-300 border-purple-800"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="border-t border-gray-800 pt-4 flex justify-between">
                <Button variant="ghost" size="sm" asChild>
                  <Link href={project.github} className="text-gray-400 hover:text-white group">
                    <Github className="h-4 w-4 mr-2 group-hover:text-purple-400" />
                    Code
                  </Link>
                </Button>
                <Button variant="ghost" size="sm" asChild>
                  <Link href={project.link} className="text-purple-400 hover:text-purple-300 group">
                    <ExternalLink className="h-4 w-4 mr-2 group-hover:rotate-45 transition-transform duration-300" />
                    View Project
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-6 animate-on-scroll fade-in-up">
          <Button
            asChild
            variant="outline"
            className="border-purple-500 text-purple-400 hover:bg-purple-950 group relative overflow-hidden"
          >
            <Link href="https://github.com/SiddharthBharadwaj">
              <span className="relative z-10">View All Projects</span>
              <span className="absolute inset-0 bg-purple-500/10 transform -translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

