"use client";

import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

// Mock blog data (should be shared in real app)
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
    content: `## Welcome to Greenwood Mall!\n\nOur grand opening was a spectacular event with live music, food stalls, and exclusive offers from our anchor tenants. Thank you to everyone who joined us for this milestone. Stay tuned for more events and promotions!`,
  },
  // ... (repeat for all 10 posts, each with a 'content' field)
];

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return notFound();

  return (
    <main className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50 py-12 px-2">
      <div className="container mx-auto max-w-3xl">
        <Link
          href="/blog"
          className="text-green-700 hover:underline mb-4 inline-block"
        >
          &larr; Back to Blog
        </Link>
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="relative h-64 w-full">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 600px"
            />
          </div>
          <div className="p-8">
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
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              {post.title}
            </h1>
            <div className="flex items-center gap-4 text-xs text-gray-400 mb-6">
              <span>{post.author}</span>
              <span>{new Date(post.date).toLocaleDateString()}</span>
              <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded">
                {post.category}
              </span>
            </div>
            <article className="prose max-w-none text-gray-800">
              {post.content.split("\n").map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </article>
          </div>
        </div>
      </div>
    </main>
  );
}
