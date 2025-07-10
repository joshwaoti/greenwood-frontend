"use client";

import Link from "next/link";
import Image from "next/image";
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

const categories = [
  {
    id: 1,
    name: "Fashion & Apparel",
    slug: "fashion-apparel",
    icon: ShoppingBag,
    image:
      "https://images.unsplash.com/photo-1521334884684-d80222895322?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
    name: "Food & Dining",
    slug: "food-dining",
    icon: Utensils,
    image:
      "https://images.unsplash.com/photo-1541542684-5b4b46a83f31?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    name: "Entertainment",
    slug: "entertainment",
    icon: Gamepad2,
    image:
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 4,
    name: "Beauty & Wellness",
    slug: "beauty-wellness",
    icon: Sparkles,
    image:
      "https://images.unsplash.com/photo-1556228724-4b43a826b5c7?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 5,
    name: "Kids & Family",
    slug: "kids-family",
    icon: Baby,
    image:
      "https://images.unsplash.com/photo-1504151932400-72d4384f04b3?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 6,
    name: "Health & Fitness",
    slug: "health-fitness",
    icon: Heart,
    image:
      "https://images.unsplash.com/photo-1571019613523-33c3ec3e6e34?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 7,
    name: "Automotive",
    slug: "automotive",
    icon: Car,
    image:
      "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 8,
    name: "Gifts & Specialty",
    slug: "gifts-specialty",
    icon: Gift,
    image:
      "https://images.unsplash.com/photo-1512427691650-51bed1a6ffbe?auto=format&fit=crop&w=600&q=80",
  },
];

export default function CategoriesPage() {
  return (
    <main className="py-20 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900">
          Categories
        </h1>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <Link
                key={cat.id}
                href={`/categories/${cat.slug}`}
                className="group rounded-xl overflow-hidden shadow hover:shadow-lg transition-all bg-white"
              >
                <div className="relative h-48 w-full">
                  <Image
                    src={cat.image}
                    alt={cat.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 flex items-center gap-4">
                  <Icon className="w-8 h-8 text-emerald-600" />
                  <span className="text-xl font-semibold text-gray-800 group-hover:text-emerald-600">
                    {cat.name}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </main>
  );
}
