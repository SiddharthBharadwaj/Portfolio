"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { TerminalIcon, Play, X, Minimize2 } from "lucide-react"

export function Terminal() {
  const [input, setInput] = useState("")
  const [history, setHistory] = useState<{ type: "input" | "output"; content: string }[]>([
    { type: "output", content: "Welcome to Siddharth Bharadwaj's Cybersecurity Terminal v1.1.0" },
    { type: "output", content: 'Type "help" to see available commands.' },
  ])
  const [isMinimized, setIsMinimized] = useState(false)
  const terminalRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  }, [history])

  const handleCommand = (cmd: string) => {
    const command = cmd.trim().toLowerCase()
    let response = ""

    switch (command) {
      case "help":
        response = `
Available commands:
- help: Show this help message
- about: Learn about me
- skills: List my technical skills
- projects: Highlighted projects with source links
- certs: Certifications and issued years
- contact: Email, phone, and website
- github: Open my GitHub profile
- scan: Run a mock security scan
- clear: Clear the terminal
- exit: Minimize the terminal
        `
        break
      case "about":
        response = `
Siddharth Bharadwaj - Cybersecurity Specialist
---------------------------------------------
Postgraduate student in Cyber Forensics & Cyber Security with 2+ years of hands-on
experience in application security, penetration testing, OSINT, and API reverse
engineering. Bug bounty hunter and freelance API reverse engineer; previously worked
as an Application Security Analyst (contract).
        `
        break
      case "skills":
        response = `
Technical Skills:
- Penetration Testing: ████████████████████ 95%
- Web & API Security: ████████████████████ 95%
- Python Automation: ███████████████████ 92%
- Networking (TCP/IP/VPNs/DNS/Firewalls): ██████████████████ 88%
- Cloud (AWS/GCP/DigitalOcean): █████████████████ 85%
- OSINT Techniques: █████████████████ 85%
        `
        break
      case "projects":
        response = `
Featured Projects:
- PrettyRecon-CLI: automates >90% of prettyrecon.com tasks
  Source: https://github.com/SiddharthBharadwaj/prettyrecon-cli
- AutoTrickster: automates fleet creation for Trickest Community
  Source: https://github.com/SiddharthBharadwaj/AutoTrickster
        `
        break
      case "certs":
        response = `
Certifications:
- Practical Web Pentest Associate (PWPA) — 2024
- Junior Penetration Tester (eJPT) — 2025
- Jr Penetration Tester (PT1) — 2025
        `
        break
      case "contact":
        response = `
Contact:
- Email: siddharthbharadwaj@proton.me
- Phone: +91-9122896596
- Location: Noida, Uttar Pradesh
- Website: https://siddharth.pro
        `
        break
      case "github":
        response = `GitHub: https://github.com/SiddharthBharadwaj`
        break
      case "scan":
        return runScan()
      case "clear":
        setHistory([])
        return
      case "exit":
        setIsMinimized(true)
        return
      case "":
        return
      default:
        response = `Command not found: ${command}. Type "help" for available commands.`
    }

    setHistory((prev) => [...prev, { type: "input", content: cmd }, { type: "output", content: response }])
  }

  const runScan = () => {
    setHistory((prev) => [
      ...prev,
      { type: "input", content: "scan" },
      { type: "output", content: "Starting security scan..." },
    ])

    const scanSteps = [
      "Initializing scan modules...",
      "Performing port discovery...",
      "Checking for common vulnerabilities...",
      "Analyzing network configuration...",
      "Testing for injection vulnerabilities...",
      "Checking authentication mechanisms...",
      "Scanning for outdated software...",
      "Generating report...",
    ]

    scanSteps.forEach((step, index) => {
      setTimeout(
        () => {
          setHistory((prev) => [...prev, { type: "output", content: step }])

          if (index === scanSteps.length - 1) {
            setTimeout(() => {
              setHistory((prev) => [
                ...prev,
                {
                  type: "output",
                  content: `
Scan complete! Results:
- 3 critical vulnerabilities detected
- 5 medium vulnerabilities detected
- 8 low vulnerabilities detected
- 12 informational findings

This is a simulated scan for demonstration purposes.
            `,
                },
              ])
            }, 800)
          }
        },
        600 * (index + 1),
      )
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    handleCommand(input)
    setInput("")
  }

  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }

  if (isMinimized) {
    return (
      <div
        id="terminal"
        className="fixed bottom-4 right-4 z-30 bg-gray-900/90 backdrop-blur-md p-3 rounded-full shadow-lg cursor-pointer hover:bg-gray-800 transition-all duration-300 border border-purple-500/50"
        onClick={() => setIsMinimized(false)}
      >
        <TerminalIcon className="h-6 w-6 text-purple-400" />
      </div>
    )
  }

  return (
    <section id="terminal" className="py-10 md:py-16 relative overflow-hidden">
      <div className="absolute top-40 right-20 w-72 h-72 bg-purple-600/10 rounded-full filter blur-3xl -z-10 animate-pulse-slow"></div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-8 animate-on-scroll fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Interactive{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">
              Terminal
            </span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-purple-700 mx-auto"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Try out my interactive cybersecurity terminal. Type commands to learn more about my skills and experience.
          </p>
        </div>

        <div className="max-w-4xl mx-auto animate-on-scroll fade-in-up">
          <div className="bg-gray-900/70 backdrop-blur-md rounded-lg border border-gray-800 overflow-hidden shadow-2xl">
            <div className="bg-gray-800 px-4 py-2 flex items-center justify-between">
              <div className="flex items-center">
                <TerminalIcon className="h-4 w-4 text-purple-400 mr-2" />
                <span className="text-gray-300 text-sm font-medium">Cybersecurity Terminal</span>
              </div>
              <div className="flex space-x-2">
                <button
                  className="text-gray-400 hover:text-gray-200 transition-colors"
                  onClick={() => setIsMinimized(true)}
                >
                  <Minimize2 className="h-4 w-4" />
                </button>
                <button className="text-gray-400 hover:text-gray-200 transition-colors" onClick={() => setHistory([])}>
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div
              ref={terminalRef}
              className="h-96 overflow-y-auto p-4 font-mono text-sm bg-black/80"
              onClick={focusInput}
            >
              {history.map((entry, index) => (
                <div key={index} className={`mb-2 ${entry.type === "input" ? "text-green-400" : "text-gray-300"}`}>
                  {entry.type === "input" ? (
                    <div className="flex">
                      <span className="text-purple-400 mr-2">$</span>
                      <span>{entry.content}</span>
                    </div>
                  ) : (
                    <div className="whitespace-pre-wrap pl-4">{entry.content}</div>
                  )}
                </div>
              ))}

              <form onSubmit={handleSubmit} className="flex items-center mt-2">
                <span className="text-purple-400 mr-2">$</span>
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="flex-1 bg-transparent outline-none text-green-400"
                  autoFocus
                />
              </form>
            </div>

            <div className="bg-gray-800 px-4 py-2 flex items-center justify-between">
              <span className="text-gray-400 text-xs">Type "help" for available commands</span>
              <button
                className="bg-purple-600 hover:bg-purple-700 text-white text-xs px-2 py-1 rounded flex items-center"
                onClick={() => handleCommand("scan")}
              >
                <Play className="h-3 w-3 mr-1" />
                Run Scan
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

