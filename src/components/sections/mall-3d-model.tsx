"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export function Mall3DModel() {
  const containerRef = useRef<HTMLDivElement>(null)
  const modelRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Basic animation: rotate the model
      gsap.to(modelRef.current, {
        rotation: 360,
        duration: 20,
        repeat: -1,
        ease: "linear",
      })

      // ScrollTrigger to control the rotation speed
      gsap.to(modelRef.current, {
        rotation: 0, // Reset rotation
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true, // Smoothly scrub the animation
        },
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={containerRef} className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Explore in{" "}
            <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">3D</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Interact with a 3D model of our mall and discover all the amazing stores and amenities we have to offer.
          </p>
        </div>

        <div className="relative">
          <div
            ref={modelRef}
            className="mx-auto w-64 h-64 bg-blue-300 rounded-full flex items-center justify-center text-white text-4xl font-bold animate-spin"
          >
            3D Model
          </div>
        </div>
      </div>
    </section>
  )
}
