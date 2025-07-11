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
      "https://images.pexels.com/photos/1884584/pexels-photo-1884584.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 2,
    name: "Food & Dining",
    slug: "food-dining",
    icon: Utensils,
    image:
      "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 3,
    name: "Entertainment",
    slug: "entertainment",
    icon: Gamepad2,
    image:
      "https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 4,
    name: "Beauty & Wellness",
    slug: "beauty-wellness",
    icon: Sparkles,
    image:
      "https://images.pexels.com/photos/3373736/pexels-photo-3373736.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 5,
    name: "Kids & Family",
    slug: "kids-family",
    icon: Baby,
    image:
      "https://images.pexels.com/photos/1148998/pexels-photo-1148998.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 6,
    name: "Health & Fitness",
    slug: "health-fitness",
    icon: Heart,
    image:
      "https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 7,
    name: "Automotive",
    slug: "automotive",
    icon: Car,
    image:
      "https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 8,
    name: "Gifts & Specialty",
    slug: "gifts-specialty",
    icon: Gift,
    image:
      "https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=600",
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
