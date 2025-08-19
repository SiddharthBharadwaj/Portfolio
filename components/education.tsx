"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function Education() {
  const educationDetails = [
    {
      degree: "Bachelors in Computer Application",
      institution: "Institute of Technical Education and Research, S’O’A",
      year: "2021-2024",
      grade: "9.45 CGPA",
    },
    {
      degree: "M.Sc in Cyber Forensics & Cyber Security",
      institution: "Amity Institute, Noida",
      year: "2024-2026",
      grade: "8.61 CGPA",
    },
    {
      degree: "Advance Diploma in Hardware & Networking",
      institution: "Computics, Darbhanga",
      year: "2019",
      grade: "A+ Grade",
    },
  ]

  return (
    <section id="education" className="py-20 bg-gray-950 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 animate-on-scroll fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">Education</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-purple-700 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {educationDetails.map((edu, index) => (
            <Card key={index} className="bg-gray-900 border-gray-800 overflow-hidden hover:border-purple-500 transition-all duration-300 h-full flex flex-col relative animate-on-scroll scale-in">
              <CardHeader>
                <CardTitle className="text-xl text-white">{edu.degree}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-gray-400">{edu.institution}</p>
                <p className="text-gray-500">{edu.year}</p>
                <p className="text-gray-500">{edu.grade}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
