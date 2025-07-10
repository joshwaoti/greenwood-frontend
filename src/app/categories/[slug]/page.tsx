"use client";

import { useMemo } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { stores } from "@/lib/stores";
import { Card, CardContent } from "@/components/ui/card";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";

export default function CategorySlugPage() {
  const params = useParams();
  const slug = Array.isArray(params?.slug)
    ? params.slug[0]
    : ((params as any)?.slug as string);

  const filteredStores = useMemo(() => {
    if (!slug) return stores;
    const search = slug.replace(/-/g, " ").toLowerCase();
    return stores.filter((store) =>
      store.category.toLowerCase().includes(search)
    );
  }, [slug]);

  const title = slug
    ? slug
        .split("-")
        .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
        .join(" ")
    : "Category";

  return (
    <>
      <main className="min-h-screen bg-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">
            {title}
          </h1>

          {filteredStores.length === 0 ? (
            <p className="text-center text-gray-500">
              No stores found for this category.
            </p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredStores.map((store) => (
                <Link
                  key={store.id}
                  href={`/stores/${store.slug}`}
                  className="block group"
                >
                  <Card className="group overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border-0">
                    <div className="relative h-56 overflow-hidden">
                      <Image
                        src={store.image}
                        alt={store.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <CardContent className="p-6 space-y-3">
                      <h3 className="text-xl font-bold text-gray-900">
                        {store.name}
                      </h3>
                      <p className="text-gray-600 text-sm line-clamp-3">
                        {store.description}
                      </p>
                      <Button variant="outline" size="sm" className="mt-2">
                        View Details
                      </Button>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
