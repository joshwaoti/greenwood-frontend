"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import {
  ShoppingBag,
  Utensils,
  Gamepad2,
  Sparkles,
  Baby,
  Heart,
  Car,
  Gift,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const categories = [
  {
    id: 1,
    name: "Fashion & Apparel",
    slug: "fashion-apparel",
    icon: ShoppingBag,
    image:
      "https://images.pexels.com/photos/1884584/pexels-photo-1884584.jpeg?auto=compress&cs=tinysrgb&w=600",
    storeCount: 45,
    color: "from-pink-500 to-rose-500",
  },
  {
    id: 2,
    name: "Food & Dining",
    slug: "food-dining",
    icon: Utensils,
    image:
      "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=600",
    storeCount: 32,
    color: "from-orange-500 to-red-500",
  },
  {
    id: 3,
    name: "Entertainment",
    slug: "entertainment",
    icon: Gamepad2,
    image:
      "https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=600",
    storeCount: 18,
    color: "from-purple-500 to-indigo-500",
  },
  {
    id: 4,
    name: "Beauty & Wellness",
    slug: "beauty-wellness",
    icon: Sparkles,
    image:
      "https://images.pexels.com/photos/3373736/pexels-photo-3373736.jpeg?auto=compress&cs=tinysrgb&w=600",
    storeCount: 28,
    color: "from-emerald-500 to-teal-500",
  },
  {
    id: 5,
    name: "Kids & Family",
    slug: "kids-family",
    icon: Baby,
    image:
      "https://images.pexels.com/photos/1148998/pexels-photo-1148998.jpeg?auto=compress&cs=tinysrgb&w=600",
    storeCount: 22,
    color: "from-yellow-500 to-orange-500",
  },
  {
    id: 6,
    name: "Health & Fitness",
    slug: "health-fitness",
    icon: Heart,
    image:
      "https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=600",
    storeCount: 15,
    color: "from-red-500 to-pink-500",
  },
  {
    id: 7,
    name: "Automotive",
    slug: "automotive",
    icon: Car,
    image:
      "https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg?auto=compress&cs=tinysrgb&w=600",
    storeCount: 12,
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 8,
    name: "Gifts & Specialty",
    slug: "gifts-specialty",
    icon: Gift,
    image:
      "https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=600",
    storeCount: 25,
    color: "from-violet-500 to-purple-500",
  },
];

export function Categories() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, index) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 20, rotateY: 10 },
          {
            opacity: 1,
            y: 0,
            rotateY: 0,
            duration: 0.4,
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

      // Background animations
      gsap.to(".category-blob-1", {
        x: "+=60",
        y: "+=40",
        scale: 1.3,
        duration: 12,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
      });

      gsap.to(".category-blob-2", {
        x: "-=50",
        y: "-=30",
        scale: 0.7,
        duration: 9,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
        delay: 4,
      });

      // Floating shapes
      gsap.to(".cat-shape-1", {
        y: "+=30",
        rotation: "+=360",
        duration: 8,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
      });

      gsap.to(".cat-shape-2", {
        x: "+=25",
        y: "-=20",
        rotation: "-=180",
        duration: 10,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
        delay: 3,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="category-blob-1 absolute -top-40 -right-40 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        <div className="category-blob-2 absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-25"></div>
        <div className="absolute top-1/3 left-1/4 w-48 h-48 bg-indigo-100 rounded-full mix-blend-multiply filter blur-2xl opacity-20"></div>

        {/* Subtle animated shapes */}
        <div className="cat-shape-1 absolute top-1/4 right-1/3 w-8 h-8 bg-blue-400 rounded-full opacity-15"></div>
        <div className="cat-shape-2 absolute bottom-1/4 left-1/3 w-6 h-6 bg-purple-500 rotate-45 opacity-20"></div>
        <div className="absolute top-2/3 right-1/4 w-4 h-4 bg-indigo-400 rounded-full opacity-25 animate-ping"></div>
        <div className="absolute top-1/2 left-1/6 w-5 h-5 bg-blue-300 rounded-full opacity-20 animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Shop by{" "}
            <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              Category
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our diverse range of categories, each offering unique
            experiences and premium brands.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Link key={category.id} href={`/categories/${category.slug}`}>
                <div
                  ref={(el) => {
                    if (el) cardsRef.current[index] = el;
                  }}
                  className="group relative overflow-hidden rounded-2xl bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                >
                  <div className="relative h-32 overflow-hidden">
                    <Image
                      src={category.image || "/placeholder.svg"}
                      alt={category.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-80 group-hover:opacity-70 transition-opacity`}
                    ></div>

                    <div className="absolute inset-0 flex items-center justify-center">
                      <IconComponent className="h-12 w-12 text-white" />
                    </div>
                  </div>

                  <div className="p-4 text-center">
                    <h3 className="font-bold text-gray-900 mb-1 group-hover:text-green-600 transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {category.storeCount} stores
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
