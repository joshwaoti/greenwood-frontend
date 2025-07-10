"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { Footer } from "@/components/layout/footer";

// Mock blog data
const blogPosts = [
  {
    slug: "grand-opening-festival",
    title: "Grand Opening Festival: Greenwood Mall Launches in Style!",
    image: "/blog/1.jpg",
    excerpt:
      "Experience the excitement of Greenwood Mall's grand opening with live music, food, and exclusive offers.",
    date: "2024-06-01",
    author: "Mall Team",
    tags: ["Events", "News"],
    category: "Events",
  },
  {
    slug: "summer-fashion-trends",
    title: "Top 5 Summer Fashion Trends at Greenwood",
    image: "/blog/2.jpg",
    excerpt:
      "Discover the hottest looks and where to shop them at Greenwood Mall this summer.",
    date: "2024-06-05",
    author: "Jane Wambui",
    tags: ["Fashion", "Shopping"],
    category: "Fashion",
  },
  {
    slug: "family-fun-guide",
    title: "Family Fun Guide: Activities for All Ages",
    image: "/blog/3.jpg",
    excerpt:
      "Plan your perfect family day out with our guide to entertainment, dining, and more.",
    date: "2024-06-10",
    author: "Mall Team",
    tags: ["Family", "Guide"],
    category: "Family",
  },
  {
    slug: "dining-delights",
    title: "Dining Delights: Must-Try Restaurants",
    image: "/blog/4.jpg",
    excerpt:
      "Explore Greenwood's diverse dining scene, from quick bites to gourmet experiences.",
    date: "2024-06-12",
    author: "Chef Otieno",
    tags: ["Dining", "Food"],
    category: "Dining",
  },
  {
    slug: "tech-gadgets-launch",
    title: "Latest Tech Gadgets Now at Greenwood",
    image: "/blog/5.jpg",
    excerpt:
      "Stay ahead with the newest electronics and gadgets available at our stores.",
    date: "2024-06-15",
    author: "Mall Team",
    tags: ["Tech", "Shopping"],
    category: "Technology",
  },
  {
    slug: "wellness-weekend",
    title: "Wellness Weekend: Health & Beauty Offers",
    image: "/blog/6.jpg",
    excerpt:
      "Pamper yourself with exclusive spa, salon, and wellness deals this weekend.",
    date: "2024-06-18",
    author: "Dr. Amina",
    tags: ["Wellness", "Beauty"],
    category: "Wellness",
  },
  {
    slug: "kids-zone-launch",
    title: "Kids Zone Launch: Play, Learn, Explore!",
    image: "/blog/7.jpg",
    excerpt:
      "Our new Kids Zone is open! Discover fun, safe activities for children of all ages.",
    date: "2024-06-20",
    author: "Mall Team",
    tags: ["Kids", "Family"],
    category: "Family",
  },
  {
    slug: "eco-friendly-initiatives",
    title: "Greenwood Goes Green: Eco-Friendly Initiatives",
    image: "/blog/8.jpg",
    excerpt:
      "Learn about our sustainability efforts and how you can participate.",
    date: "2024-06-22",
    author: "Mall Team",
    tags: ["Sustainability", "News"],
    category: "Sustainability",
  },
  {
    slug: "art-exhibition",
    title: "Art Exhibition: Local Talent on Display",
    image: "/blog/9.jpg",
    excerpt:
      "Support local artists and enjoy stunning works at our month-long exhibition.",
    date: "2024-06-25",
    author: "Curator Njeri",
    tags: ["Art", "Events"],
    category: "Events",
  },
  {
    slug: "back-to-school-tips",
    title: "Back to School: Shopping & Success Tips",
    image: "/blog/10.jpg",
    excerpt:
      "Get ready for the new term with our back-to-school shopping guide and expert advice.",
    date: "2024-06-28",
    author: "Jane Wambui",
    tags: ["School", "Guide"],
    category: "Shopping",
  },
];

const categories = Array.from(new Set(blogPosts.map((p) => p.category)));
const tags = Array.from(new Set(blogPosts.flatMap((p) => p.tags)));

const POSTS_PER_PAGE = 6;

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchesCategory = selectedCategory
        ? post.category === selectedCategory
        : true;
      const matchesTag = selectedTag ? post.tags.includes(selectedTag) : true;
      return matchesCategory && matchesTag;
    });
  }, [selectedCategory, selectedTag]);

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE) || 1;
  const paginatedPosts = useMemo(() => {
    const start = (currentPage - 1) * POSTS_PER_PAGE;
    return filteredPosts.slice(start, start + POSTS_PER_PAGE);
  }, [filteredPosts, currentPage]);

  return (
    <>
      <main className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50 py-12 px-2">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-center">
            Greenwood Mall{" "}
            <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              Blog
            </span>
          </h1>
          <p className="text-lg text-gray-600 text-center mb-8 max-w-2xl mx-auto">
            News, stories, and guides from Meru's premier shopping destination.
          </p>

          {/* Filters */}
          <div className="flex flex-wrap gap-4 justify-center mb-8">
            <select
              className="border rounded px-3 py-2 text-gray-700 bg-white shadow-sm"
              value={selectedCategory || ""}
              onChange={(e) => {
                setSelectedCategory(e.target.value || null);
                setCurrentPage(1);
              }}
            >
              <option value="">All Categories</option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
            <select
              className="border rounded px-3 py-2 text-gray-700 bg-white shadow-sm"
              value={selectedTag || ""}
              onChange={(e) => {
                setSelectedTag(e.target.value || null);
                setCurrentPage(1);
              }}
            >
              <option value="">All Tags</option>
              {tags.map((tag) => (
                <option key={tag} value={tag}>
                  {tag}
                </option>
              ))}
            </select>
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {paginatedPosts.map((post) => (
            <Link
                key={post.slug}
              href={`/blog/${post.slug}`}
                className="block group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="relative h-56 w-full">
                  <Image
                    src={post.image}
                  alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 400px"
                />
              </div>
                <div className="p-6 space-y-2">
                  <div className="flex flex-wrap gap-2 mb-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full"
                      >
                        {tag}
                </span>
                    ))}
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 group-hover:text-green-700 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 text-sm line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-400 mt-2">
                    <span>{post.author}</span>
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
              </div>
            </Link>
          ))}
        </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-10 flex justify-center items-center gap-2">
              {Array.from({ length: totalPages }).map((_, idx) => (
                <button
                  key={idx}
                  className={`px-3 py-1 rounded border ${
                    currentPage === idx + 1
                      ? "bg-green-600 text-white"
                      : "bg-white text-gray-700"
                  }`}
                  onClick={() => setCurrentPage(idx + 1)}
                >
                  {idx + 1}
                </button>
              ))}
            </div>
      )}
    </div>
      </main>
      <Footer />
    </>
  );
}
