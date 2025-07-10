"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Hero } from "@/components/sections/hero";
import { FeaturedStores } from "@/components/sections/featured-stores";
import { Categories } from "@/components/sections/categories";
import { Events } from "@/components/sections/events";
import { Services } from "@/components/sections/services";
import { Newsletter } from "@/components/sections/newsletter";
import { Footer } from "@/components/layout/footer";

gsap.registerPlugin(ScrollTrigger);

export default function HomePage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate sections on scroll
      gsap.utils.toArray(".animate-section").forEach((section: any) => {
        gsap.fromTo(
          section,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen">
      <Hero />
      <div className="animate-section">
        <FeaturedStores />
      </div>
      <div className="animate-section">
        <Categories />
      </div>
      <div className="animate-section">
        <Events />
      </div>
      <div className="animate-section">
        <Services />
      </div>
      <div className="animate-section">
        <Newsletter />
      </div>
      <Footer />
    </div>
  );
}
