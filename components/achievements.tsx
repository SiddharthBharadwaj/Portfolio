"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function Achievements() {
  const achievements = [
    {
      title: "2nd position at Pentathon 2024",
      organization: "NCIIPC AICTE",
      year: "2024",
    },
    {
      title: "1st position at a jeopardy style CTF",
      organization: "NIT, Rourkela",
      year: "2023",
    },
    {
      title: "1st position at a jeopardy style CTF",
      organization: "NIT, Rourkela",
      year: "2022",
    },
    {
      title: "2nd position at a jeopardy style CTF",
      organization: "ITER, SOA",
      year: "2021",
    },
    {
      title: "1st position at World Youth Skills for Network Administration",
      organization: "",
      year: "2019",
    },
  ]

  return (
    <section id="achievements" className="py-20 bg-gray-950 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 animate-on-scroll fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">Achievements</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-purple-700 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <Card key={index} className="bg-gray-900 border-gray-800 overflow-hidden hover:border-purple-500 transition-all duration-300 h-full flex flex-col relative animate-on-scroll scale-in">
              <CardHeader>
                <CardTitle className="text-xl text-white">{achievement.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-gray-400">{achievement.organization}</p>
                <p className="text-gray-500">{achievement.year}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
