"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function WorkExperience() {
  const workExperiences = [
    {
      title: "Application Security Analyst [Contractor]",
      company: "Airwallex",
      duration: "2021 - 2022",
      description: "Conducted over 15+ comprehensive security assessments for web and mobile applications, identifying 10+ critical vulnerabilities and reducing overall risk exposure by 30%. Reduced manual testing time by 40% by integrating Nuclei-based scans with 15+ custom templates tailored to the app stack.",
    },
    {
      title: "Bug Bounty Hunter",
      company: "Freelance",
      duration: "2021 - PRESENT",
      description: "Reported 25+ vulnerabilities (including 10 critical) across platforms like OKX and JIO, earning acknowledgments and bounties worth $5,000+. Strengthened systems by identifying bugs in production-grade web/mobile applications. Acknowledged by multiple organizations for critical security insights and fixes.",
    },
    {
      title: "Freelance API Reverse Engineer",
      company: "Fiverr",
      duration: "2023 - PRESENT",
      description: "Specialized in reverse engineering undocumented APIs for client use cases. Reverse-engineered and automated 5+ undocumented APIs, cutting client data-fetch time by 80% and improving reliability.",
    },
    {
      title: "Intern",
      company: "State Forensic Science Laboratory (SFSL), Junga",
      duration: "May - June 2025",
      description: "Gained hands-on experience in digital evidence analysis, mobile forensics, and incident response procedures. Analyzed 10+ forensic images, assisted in 3 active cybercrime investigations, and contributed to 2 case reports on digital evidence findings. Shadowed senior forensic experts during ongoing cybercrime investigations.",
    },
  ]

  return (
    <section id="work-experience" className="py-20 bg-gray-950 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 animate-on-scroll fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">Work Experience</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-purple-700 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {workExperiences.map((work, index) => (
            <Card key={index} className="bg-gray-900 border-gray-800 overflow-hidden hover:border-purple-500 transition-all duration-300 h-full flex flex-col relative animate-on-scroll scale-in">
              <CardHeader>
                <CardTitle className="text-xl text-white">{work.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-gray-400">{work.company}</p>
                <p className="text-gray-500">{work.duration}</p>
                <p className="text-gray-500">{work.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
