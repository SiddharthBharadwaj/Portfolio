"use client"

import { useState } from "react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

export function Testimonials() {
  const testimonials = [
    {
      content:
        "The security assessment conducted was thorough and identified critical vulnerabilities we had overlooked. The remediation plan was clear and effective.",
      author: "Sarah Johnson",
      position: "CTO, TechCorp Inc.",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      content:
        "Implementing the zero trust architecture recommended has transformed our security posture. We've seen a significant reduction in security incidents.",
      author: "Michael Chen",
      position: "CISO, HealthSecure",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      content:
        "The incident response during our security breach was exceptional. Quick thinking and expertise prevented what could have been a catastrophic data loss.",
      author: "Emily Rodriguez",
      position: "IT Director, Global Finance",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      content:
        "Our cloud migration security was handled with incredible attention to detail. Every potential vulnerability was addressed before it could become an issue.",
      author: "David Wilson",
      position: "Cloud Architect, RetailNow",
      image: "/placeholder.svg?height=80&width=80",
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1))
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1))
  }

  return (
    <section id="testimonials" className="py-20 bg-black">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Client <span className="text-emerald-500">Testimonials</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-emerald-500 to-cyan-500 mx-auto"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Hear what my clients have to say about their experience working with me on their cybersecurity needs.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-br from-gray-900 to-gray-950 border-gray-800 overflow-hidden">
            <CardContent className="pt-10 pb-6 px-6 md:px-10">
              <div className="text-emerald-500 mb-6 flex justify-center">
                <Quote className="h-12 w-12 rotate-180" />
              </div>

              <p className="text-gray-300 text-lg md:text-xl text-center mb-8">{testimonials[currentIndex].content}</p>

              <div className="flex items-center justify-center">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-emerald-500 mr-4">
                  <img
                    src={testimonials[currentIndex].image || "/placeholder.svg"}
                    alt={testimonials[currentIndex].author}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-white">{testimonials[currentIndex].author}</h4>
                  <p className="text-gray-400 text-sm">{testimonials[currentIndex].position}</p>
                </div>
              </div>
            </CardContent>

            <CardFooter className="border-t border-gray-800 flex justify-between p-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={prevTestimonial}
                className="text-gray-400 hover:text-emerald-400 hover:bg-gray-800"
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>

              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full ${index === currentIndex ? "bg-emerald-500" : "bg-gray-700"}`}
                  />
                ))}
              </div>

              <Button
                variant="ghost"
                size="icon"
                onClick={nextTestimonial}
                className="text-gray-400 hover:text-emerald-400 hover:bg-gray-800"
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  )
}

