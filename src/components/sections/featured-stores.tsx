"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { Star, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

gsap.registerPlugin(ScrollTrigger);

const featuredStores = [
  {
    id: 1,
    name: "Nakumatt Supermarket",
    category: "Supermarket & Groceries",
    image:
      "https://images.unsplash.com/photo-1506617420156-8e4536971650?auto=format&fit=crop&w=600&q=80",
    rating: 4.5,
    description: "Your one-stop shop for groceries and household items",
    floor: "Ground Floor",
    isNew: false,
  },
  {
    id: 2,
    name: "Java House",
    category: "Coffee & Dining",
    image:
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=600&q=80",
    rating: 4.7,
    description: "Premium coffee and contemporary dining experience",
    floor: "First Floor",
    isNew: false,
  },
  {
    id: 3,
    name: "Bata Shoes",
    category: "Footwear",
    image:
      "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=600&q=80",
    rating: 4.4,
    description: "Quality footwear for the whole family",
    floor: "Ground Floor",
    isNew: false,
  },
  {
    id: 4,
    name: "Woolworths",
    category: "Fashion & Lifestyle",
    image:
      "https://images.unsplash.com/photo-1521334884684-d80222895322?auto=format&fit=crop&w=600&q=80",
    rating: 4.6,
    description: "Premium fashion and lifestyle products",
    floor: "First Floor",
    isNew: true,
  },
];

export function FeaturedStores() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const backgroundRef = useRef<HTMLDivElement>(null);
  const mallModelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Cards entrance animation
      cardsRef.current.forEach((card, index) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 15, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.3,
            ease: "power2.out",
            delay: index * 0.03,
            scrollTrigger: {
              trigger: card,
              start: "top 98%",
              end: "bottom 5%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      // 3D Mall model rotation based on scroll
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
        onUpdate: (self) => {
          const rotation = self.progress * 360;
          gsap.set(mallModelRef.current, {
            rotation: rotation,
            scale: 0.8 + self.progress * 0.4,
          });
        },
      });

      // Background blobs animation
      gsap.to(".store-blob-1", {
        x: "+=50",
        y: "+=30",
        scale: 1.2,
        duration: 10,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
      });

      gsap.to(".store-blob-2", {
        x: "-=40",
        y: "-=35",
        scale: 0.8,
        duration: 8,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
        delay: 3,
      });

      // Subtle shape animations
      gsap.to(".floating-shape-1", {
        y: "+=20",
        rotation: "+=180",
        duration: 6,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
      });

      gsap.to(".floating-shape-2", {
        x: "+=15",
        y: "-=25",
        rotation: "-=90",
        duration: 8,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
        delay: 2,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-white relative overflow-hidden"
    >
      {/* Background with 3D Mall Model and Color Blobs */}
      <div ref={backgroundRef} className="absolute inset-0 overflow-hidden">
        {/* Color Blobs */}
        <div className="store-blob-1 absolute -top-32 -right-32 w-96 h-96 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        <div className="store-blob-2 absolute -bottom-32 -left-32 w-80 h-80 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-25"></div>
        <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-teal-100 rounded-full mix-blend-multiply filter blur-2xl opacity-20"></div>

        {/* 3D Mall Model (Simple representation) */}
        <div
          ref={mallModelRef}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-10"
        >
          <div className="relative w-32 h-32">
            {/* Mall building representation */}
            <div className="absolute inset-0 bg-gradient-to-br from-green-300 to-emerald-400 rounded-lg transform rotate-45"></div>
            <div className="absolute top-2 left-2 right-2 bottom-2 bg-gradient-to-br from-green-200 to-emerald-300 rounded transform rotate-12"></div>
            <div className="absolute top-4 left-4 right-4 bottom-4 bg-gradient-to-br from-green-100 to-emerald-200 rounded-sm"></div>
          </div>
        </div>

        {/* Subtle animated shapes */}
        <div className="floating-shape-1 absolute top-1/4 right-1/4 w-6 h-6 bg-green-400 rounded-full opacity-20"></div>
        <div className="floating-shape-2 absolute bottom-1/3 left-1/4 w-4 h-4 bg-emerald-500 rotate-45 opacity-15"></div>
        <div className="absolute top-2/3 right-1/3 w-3 h-3 bg-teal-400 rounded-full opacity-25 animate-ping"></div>
        <div className="absolute top-1/2 left-1/5 w-5 h-5 bg-green-300 rounded-full opacity-20 animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured{" "}
            <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              Stores
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our handpicked selection of premium stores offering the
            best in fashion, technology, dining, and lifestyle.
          </p>
        </div>

        {/* Continuous Scrolling Carousel */}
        <div className="relative mb-12">
          {/* Mobile: Swipeable horizontal scroll */}
          <div className="md:hidden">
            <div
              className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {featuredStores.map((store, index) => (
                <Card
                  key={store.id}
                  className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg overflow-hidden backdrop-blur-sm bg-white/90 flex-shrink-0 w-80 snap-start"
                >
                  <div className="relative overflow-hidden">
                    <Image
                      src={store.image || "/placeholder.svg"}
                      alt={store.name}
                      width={400}
                      height={300}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {store.isNew && (
                      <div className="absolute top-4 left-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        New
                      </div>
                    )}
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-500 fill-current" />
                      <span className="text-sm font-medium">
                        {store.rating}
                      </span>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <div className="mb-2">
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-green-600 transition-colors">
                        {store.name}
                      </h3>
                      <p className="text-sm text-green-600 font-medium">
                        {store.category}
                      </p>
                    </div>

                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                      {store.description}
                    </p>

                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">
                        {store.floor}
                      </span>
                      <Link href={`/stores/${store.id}`}>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-green-600 hover:text-green-700 hover:bg-green-50 p-2"
                        >
                          <ArrowRight className="h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Desktop: Auto-scrolling carousel */}
          <div className="hidden md:block relative overflow-hidden">
            <div
              ref={(el) => {
                if (el) cardsRef.current[0] = el;
              }}
              className="flex gap-8 animate-scroll-left"
              style={{
                width: "calc(200% + 2rem)",
                animation: "scrollLeft 20s linear infinite",
              }}
            >
              {/* First set of cards */}
              {featuredStores.map((store, index) => (
                <Card
                  key={`first-${store.id}`}
                  className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg overflow-hidden backdrop-blur-sm bg-white/90 flex-shrink-0 w-80"
                >
                  <div className="relative overflow-hidden">
                    <Image
                      src={store.image || "/placeholder.svg"}
                      alt={store.name}
                      width={400}
                      height={300}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {store.isNew && (
                      <div className="absolute top-4 left-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        New
                      </div>
                    )}
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-500 fill-current" />
                      <span className="text-sm font-medium">
                        {store.rating}
                      </span>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <div className="mb-2">
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-green-600 transition-colors">
                        {store.name}
                      </h3>
                      <p className="text-sm text-green-600 font-medium">
                        {store.category}
                      </p>
                    </div>

                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                      {store.description}
                    </p>

                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">
                        {store.floor}
                      </span>
                      <Link href={`/stores/${store.id}`}>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-green-600 hover:text-green-700 hover:bg-green-50 p-2"
                        >
                          <ArrowRight className="h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}

              {/* Duplicate set for seamless loop */}
              {featuredStores.map((store, index) => (
                <Card
                  key={`second-${store.id}`}
                  className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg overflow-hidden backdrop-blur-sm bg-white/90 flex-shrink-0 w-80"
                >
                  <div className="relative overflow-hidden">
                    <Image
                      src={store.image || "/placeholder.svg"}
                      alt={store.name}
                      width={400}
                      height={300}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {store.isNew && (
                      <div className="absolute top-4 left-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        New
                      </div>
                    )}
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-500 fill-current" />
                      <span className="text-sm font-medium">
                        {store.rating}
                      </span>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <div className="mb-2">
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-green-600 transition-colors">
                        {store.name}
                      </h3>
                      <p className="text-sm text-green-600 font-medium">
                        {store.category}
                      </p>
                    </div>

                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                      {store.description}
                    </p>

                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">
                        {store.floor}
                      </span>
                      <Link href={`/stores/${store.id}`}>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-green-600 hover:text-green-700 hover:bg-green-50 p-2"
                        >
                          <ArrowRight className="h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-8 bg-transparent"
          >
            View All Stores
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
