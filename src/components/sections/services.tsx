"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Car, Wifi, ShoppingCart, CreditCard, MapPin, Headphones, Shield, Gift } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

gsap.registerPlugin(ScrollTrigger)

const services = [
  {
    id: 1,
    title: "Free Parking",
    description: "Complimentary parking for all visitors with over 2000 spaces available.",
    icon: Car,
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 2,
    title: "Free WiFi",
    description: "High-speed internet access throughout the mall for your convenience.",
    icon: Wifi,
    color: "from-green-500 to-emerald-500",
  },
  {
    id: 3,
    title: "Personal Shopping",
    description: "Expert personal shoppers to help you find exactly what you're looking for.",
    icon: ShoppingCart,
    color: "from-purple-500 to-pink-500",
  },
  {
    id: 4,
    title: "Easy Payments",
    description: "Multiple payment options including contactless and mobile payments.",
    icon: CreditCard,
    color: "from-orange-500 to-red-500",
  },
  {
    id: 5,
    title: "Mall Navigation",
    description: "Interactive maps and wayfinding to help you navigate easily.",
    icon: MapPin,
    color: "from-indigo-500 to-purple-500",
  },
  {
    id: 6,
    title: "Customer Support",
    description: "24/7 customer service desk for any assistance you may need.",
    icon: Headphones,
    color: "from-teal-500 to-green-500",
  },
  {
    id: 7,
    title: "Security Services",
    description: "Round-the-clock security ensuring a safe shopping environment.",
    icon: Shield,
    color: "from-red-500 to-pink-500",
  },
  {
    id: 8,
    title: "Gift Cards",
    description: "Purchase gift cards for any store in the mall - perfect for any occasion.",
    icon: Gift,
    color: "from-yellow-500 to-orange-500",
  },
]

export function Services() {
  const sectionRef = useRef<HTMLElement>(null)
  const cardsRef = useRef<HTMLDivElement[]>([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, index) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 50, scale: 0.8 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: "back.out(1.7)",
            delay: index * 0.1,
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              end: "bottom 15%",
              toggleActions: "play none none reverse",
            },
          },
        )
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Premium{" "}
            <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Enjoy a seamless shopping experience with our comprehensive range of services designed for your comfort and
            convenience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <Card
                key={service.id}
                ref={(el) => {
                  if (el) cardsRef.current[index] = el
                }}
                className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg bg-white overflow-hidden"
              >
                <CardContent className="p-6 text-center">
                  <div
                    className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                  >
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
