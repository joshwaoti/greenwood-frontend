"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Mail, Gift, Bell, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"

gsap.registerPlugin(ScrollTrigger)

export function Newsletter() {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, y: 50, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        },
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubscribed(true)
      setEmail("")
      setTimeout(() => setIsSubscribed(false), 3000)
    }
  }

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <Card ref={cardRef} className="max-w-4xl mx-auto bg-white/95 backdrop-blur-sm border-0 shadow-2xl">
          <CardContent className="p-8 md:p-12">
            <div className="text-center mb-8">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-emerald-600 rounded-2xl flex items-center justify-center">
                  <Mail className="h-8 w-8 text-white" />
                </div>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Stay in the Loop</h2>

              <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
                Subscribe to our newsletter and be the first to know about exclusive offers, new store openings, and
                upcoming events.
              </p>
            </div>

            {/* Benefits */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Gift className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Exclusive Offers</h3>
                <p className="text-sm text-gray-600">Get access to member-only discounts and promotions</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Bell className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Event Updates</h3>
                <p className="text-sm text-gray-600">Never miss out on exciting events and activities</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Star className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">VIP Access</h3>
                <p className="text-sm text-gray-600">Early access to sales and new store openings</p>
              </div>
            </div>

            {/* Newsletter Form */}
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 h-12 px-4 border-2 border-gray-200 focus:border-green-500"
                  required
                />
                <Button
                  type="submit"
                  size="lg"
                  className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 h-12"
                  disabled={isSubscribed}
                >
                  {isSubscribed ? "Subscribed!" : "Subscribe"}
                </Button>
              </div>

              <p className="text-xs text-gray-500 mt-3 text-center">
                By subscribing, you agree to our Privacy Policy and Terms of Service.
              </p>
            </form>

            {isSubscribed && (
              <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg text-center">
                <p className="text-green-800 font-medium">
                  🎉 Thank you for subscribing! Check your email for a welcome gift.
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
