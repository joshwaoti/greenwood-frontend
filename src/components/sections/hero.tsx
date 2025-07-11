"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShoppingBag, Utensils, ShieldCheck } from "lucide-react";
import Image from "next/image";
import LeafConfetti from "@/components/animations/LeafConfetti";
import ScrollIndicator from "@/components/animations/ScrollIndicator";
import WaveSeparator from "@/components/layout/WaveSeparator";
import ParticlesContainer from "@/components/animations/ParticlesContainer";
import FloatingShapes from "@/components/animations/FloatingShapes";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);
  const floatingCard1Ref = useRef<HTMLDivElement>(null);
  const floatingCard2Ref = useRef<HTMLDivElement>(null);
  const glowingTextRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Glowing text effect
      if (glowingTextRef.current) {
        gsap.to(glowingTextRef.current, {
          textShadow:
            "0 0 20px rgba(16, 185, 129, 0.8), 0 0 40px rgba(16, 185, 129, 0.4)",
          duration: 2,
          ease: "power2.inOut",
          yoyo: true,
          repeat: -1,
        });
      }

      // Initial entrance animations
      const tl = gsap.timeline();

      tl.fromTo(
        titleRef.current,
        { opacity: 0, y: 100 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
      )
        .fromTo(
          subtitleRef.current,
          { opacity: 0, y: 80 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
          "-=0.5"
        )
        .fromTo(
          buttonsRef.current,
          { opacity: 0, y: 60 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
          "-=0.3"
        )
        .fromTo(
          statsRef.current,
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
          "-=0.2"
        )
        .fromTo(
          imageRef.current,
          { opacity: 0, scale: 0.8, x: 100 },
          { opacity: 1, scale: 1, x: 0, duration: 1, ease: "power3.out" },
          "-=0.8"
        );

      // Scroll-triggered animations
      ScrollTrigger.create({
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress;

          gsap.set(titleRef.current, {
            y: -150 * progress,
            opacity: 1 - progress * 1.5,
            scale: 1 - progress * 0.2,
          });

          gsap.set(subtitleRef.current, {
            y: -120 * progress,
            opacity: 1 - progress * 1.2,
            x: -50 * progress,
          });

          gsap.set(buttonsRef.current, {
            y: -100 * progress,
            x: -80 * progress,
            opacity: 1 - progress * 1.3,
            scale: 1 - progress * 0.3,
          });

          gsap.set(statsRef.current, {
            y: -80 * progress,
            x: 60 * progress,
            opacity: 1 - progress * 1.1,
          });

          gsap.set(imageRef.current, {
            y: -200 * progress,
            x: 100 * progress,
            scale: 1 - progress * 0.4,
            rotationY: 15 * progress,
          });
        },
      });

      // Floating cards scroll effects
      ScrollTrigger.create({
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 2,
        onUpdate: (self) => {
          const progress = self.progress;

          gsap.set(floatingCard1Ref.current, {
            y: -180 * progress,
            x: -100 * progress,
            rotation: -25 * progress,
            opacity: 1 - progress * 1.5,
          });

          gsap.set(floatingCard2Ref.current, {
            y: -160 * progress,
            x: 120 * progress,
            rotation: 20 * progress,
            opacity: 1 - progress * 1.3,
          });
        },
      });

      // Background parallax
      ScrollTrigger.create({
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 0.5,
        onUpdate: (self) => {
          gsap.set(backgroundRef.current, {
            y: -300 * self.progress,
            scale: 1 + self.progress * 0.2,
          });
        },
      });

      // Continuous floating animations
      gsap.to(imageRef.current, {
        y: "+=15",
        duration: 4,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
      });

      gsap.to(floatingCard1Ref.current, {
        y: "+=8",
        rotation: "+=2",
        duration: 3,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
      });

      gsap.to(floatingCard2Ref.current, {
        y: "+=12",
        rotation: "-=3",
        duration: 3.5,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
        delay: 1,
      });

      // Animated background blobs
      gsap.to(".bg-blob-1", {
        x: "+=40",
        y: "+=30",
        scale: 1.1,
        duration: 8,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
      });

      gsap.to(".bg-blob-2", {
        x: "-=35",
        y: "-=25",
        scale: 0.9,
        duration: 6,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
        delay: 2,
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center bg-gradient-to-br from-green-50 via-white to-emerald-50 bg-[length:200%_200%] animate-gradient-pan overflow-hidden"
      >
        {/* Micro Leaf Confetti */}
        <LeafConfetti />

        {/* Particles Background */}
        <div className="absolute inset-0 z-10">
          <ParticlesContainer />
        </div>

        {/* Floating Shapes */}
        <FloatingShapes />

        {/* Enhanced Background Elements */}
        <div ref={backgroundRef} className="absolute inset-0 overflow-hidden">
          <div className="bg-blob-1 absolute -top-40 -right-40 w-96 h-96 bg-green-400 rounded-full mix-blend-multiply filter blur-xl opacity-20"></div>
          <div className="bg-blob-2 absolute -bottom-40 -left-40 w-80 h-80 bg-emerald-400 rounded-full mix-blend-multiply filter blur-xl opacity-25"></div>
          <div className="absolute top-1/3 left-1/4 w-32 h-32 bg-teal-300 rounded-full mix-blend-multiply filter blur-2xl opacity-15 animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/3 w-24 h-24 bg-green-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>

          {/* Subtle animated shapes */}
          <div className="absolute top-1/4 right-1/4 w-4 h-4 bg-green-500 rounded-full opacity-30 animate-ping"></div>
          <div className="absolute bottom-1/4 left-1/3 w-6 h-6 bg-emerald-400 rotate-45 opacity-20 animate-pulse"></div>
          <div className="absolute top-2/3 left-1/5 w-3 h-3 bg-teal-500 rounded-full opacity-25 animate-bounce"></div>
        </div>

        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center relative z-20">
            {/* Content */}
            <div className="space-y-8">
              {/* Heading */}
              <h1
                ref={titleRef}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-center lg:text-left"
              >
                <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                  Welcome to
                </span>
                <br />
                <span ref={glowingTextRef} className="text-gray-900 glow-text">
                  Greenwood City Mall
                </span>
              </h1>

              <p
                ref={subtitleRef}
                className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed max-w-lg mx-auto lg:mx-0 text-center lg:text-left"
              >
                Meru's premier shopping destination featuring over 150 stores,
                diverse dining options, and family entertainment experiences in
                the heart of the city.
              </p>

              <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4">
                <div className="relative group">
                  {/* Halo */}
                  <span className="absolute inset-0 rounded-full bg-greenwood-gold opacity-0 group-hover:opacity-20 animate-halo-pulse" />
                  <Link href="/stores" className="block">
                    <Button
                      size="lg"
                      className="w-full relative bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 py-4 text-lg transform hover:scale-105 transition-all duration-300"
                    >
                      Explore Stores
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Stats (desktop/tablet) */}
              <div
                ref={statsRef}
                className="hidden md:grid relative grid-cols-3 gap-8 pt-8 border-t border-gray-200"
              >
                <div className="text-center relative">
                  <ShoppingBag className="mx-auto h-6 w-6 text-greenwood-gold mb-1" />
                  <div className="text-3xl font-bold text-green-600">150+</div>
                  <div className="text-sm text-gray-600">Premium Stores</div>
                  <span className="hidden md:block absolute right-0 top-4 h-10 w-px bg-emerald-100" />
                </div>
                <div className="text-center relative">
                  <Utensils className="mx-auto h-6 w-6 text-greenwood-gold mb-1" />
                  <div className="text-3xl font-bold text-emerald-600">40+</div>
                  <div className="text-sm text-gray-600">Dining Options</div>
                  <span className="hidden md:block absolute right-0 top-4 h-10 w-px bg-emerald-100" />
                </div>
                <div className="text-center">
                  <ShieldCheck className="mx-auto h-6 w-6 text-greenwood-gold mb-1" />
                  <div className="text-3xl font-bold text-teal-600">24/7</div>
                  <div className="text-sm text-gray-600">Security</div>
                </div>
              </div>
            </div>

            {/* Stats for mobile, placed below image */}
            <div className="md:hidden mt-6 grid grid-cols-3 gap-6 text-center">
              <div>
                <ShoppingBag className="mx-auto h-6 w-6 text-greenwood-gold mb-1" />
                <div className="text-2xl font-bold text-green-600">150+</div>
                <div className="text-xs text-gray-600">Premium Stores</div>
              </div>
              <div>
                <Utensils className="mx-auto h-6 w-6 text-greenwood-gold mb-1" />
                <div className="text-2xl font-bold text-emerald-600">40+</div>
                <div className="text-xs text-gray-600">Dining Options</div>
              </div>
              <div>
                <ShieldCheck className="mx-auto h-6 w-6 text-greenwood-gold mb-1" />
                <div className="text-2xl font-bold text-teal-600">24/7</div>
                <div className="text-xs text-gray-600">Security</div>
              </div>
            </div>

            {/* Hero Image */}
            <div
              ref={imageRef}
              className="relative perspective-1000 w-full h-72 sm:h-80 md:h-96 lg:h-[500px] mx-auto"
            >
              {/* removed mobile overlay heading */}

              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl transform-gpu">
                <Image
                  src="/greenwood-mall.png"
                  alt="Greenwood City Mall Exterior"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent md:from-black/20"></div>
              </div>

              {/* Enhanced Floating Cards */}
              <div
                ref={floatingCard1Ref}
                className="absolute top-2 left-2 md:-top-4 md:-left-4 bg-white/95 backdrop-blur-sm rounded-lg shadow-xl p-4 border border-green-100"
              >
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-gray-800">
                    Open Now
                  </span>
                </div>
              </div>

              <div
                ref={floatingCard2Ref}
                className="absolute bottom-2 right-2 md:-bottom-4 md:-right-4 bg-white/95 backdrop-blur-sm rounded-lg shadow-xl p-4 border border-emerald-100"
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">4.9</div>
                  <div className="text-xs text-gray-600">Customer Rating</div>
                  <div className="flex justify-center mt-1">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className="w-2 h-2 bg-yellow-400 rounded-full mx-0.5"
                      ></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        {/* <ScrollIndicator /> */}
      </section>

      {/* Wave Separator */}
      <WaveSeparator />
    </>
  );
}
