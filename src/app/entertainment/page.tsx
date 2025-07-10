"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { entertainment } from "@/lib/entertainment";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Filter, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/layout/footer";

const categories = Array.from(new Set(entertainment.map((v) => v.category)));
const floors = Array.from(new Set(entertainment.map((v) => v.floor)));

export default function EntertainmentPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedFloor, setSelectedFloor] = useState<string | null>(null);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const PER_PAGE = 6;

  const filtered = useMemo(() => {
    return entertainment.filter((e) => {
      const cat = selectedCategory ? e.category === selectedCategory : true;
      const fl = selectedFloor ? e.floor === selectedFloor : true;
      const q = e.name.toLowerCase().includes(query.toLowerCase());
      return cat && fl && q;
    });
  }, [selectedCategory, selectedFloor, query]);

  const total = Math.ceil(filtered.length / PER_PAGE) || 1;
  const paged = useMemo(() => {
    const start = (page - 1) * PER_PAGE;
    return filtered.slice(start, start + PER_PAGE);
  }, [filtered, page]);

  const goto = (p: number) => {
    if (p < 1 || p > total) return;
    setPage(p);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const Sidebar = (
    <div className="space-y-8 p-6 w-64">
      <div>
        <h3 className="font-semibold text-gray-800 mb-3">Search</h3>
        <Input
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <div>
        <h3 className="font-semibold text-gray-800 mb-3">Category</h3>
        <div className="flex flex-col gap-2">
          <Button
            variant={selectedCategory ? "outline" : "default"}
            onClick={() => setSelectedCategory(null)}
          >
            All
          </Button>
          {categories.map((c) => (
            <Button
              key={c}
              variant={selectedCategory === c ? "default" : "outline"}
              onClick={() => setSelectedCategory(c)}
            >
              {c}
            </Button>
          ))}
        </div>
      </div>
      <div>
        <h3 className="font-semibold text-gray-800 mb-3">Floor</h3>
        <div className="flex flex-col gap-2">
          <Button
            variant={selectedFloor ? "outline" : "default"}
            onClick={() => setSelectedFloor(null)}
          >
            All
          </Button>
          {floors.map((f) => (
            <Button
              key={f}
              variant={selectedFloor === f ? "default" : "outline"}
              onClick={() => setSelectedFloor(f)}
            >
              {f}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <>
      <main className="min-h-screen bg-white">
        <section className="relative py-20 bg-gradient-to-br from-green-50 via-white to-emerald-50 animate-gradient-pan bg-[length:200%_200%] overflow-hidden">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-center">
              Entertainment{" "}
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                Options
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto text-center mb-12">
              Discover cinemas, bowling and family fun activities available at
              Greenwood City Mall.
            </p>

            {/* Mobile filter and marquee */}
            <div className="md:hidden mb-6 text-center">
              <Sheet>
                <SheetTrigger asChild>
                  <Button
                    variant="outline"
                    className="inline-flex items-center gap-2"
                  >
                    <Filter className="h-5 w-5" /> Filters
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="overflow-y-auto">
                  {Sidebar}
                </SheetContent>
              </Sheet>
              <div className="relative overflow-hidden mt-4">
                <div
                  className="flex gap-4 animate-scroll-left"
                  style={{
                    width: "calc(200% + 2rem)",
                    animation: "scrollLeft 18s linear infinite",
                  }}
                >
                  {Array.from({ length: 2 }).map((_, d) =>
                    categories.map((c) => (
                      <Button
                        key={`${d}-${c}`}
                        size="sm"
                        variant={selectedCategory === c ? "default" : "outline"}
                        className="whitespace-nowrap"
                        onClick={() => setSelectedCategory(c)}
                      >
                        {c}
                      </Button>
                    ))
                  )}
                </div>
              </div>
            </div>

            <div className="flex gap-8">
              <aside className="hidden md:block sticky top-24 h-max">
                {Sidebar}
              </aside>

              <div className="flex-1">
                {paged.length === 0 ? (
                  <p className="text-center text-gray-500">
                    No venues match your filters.
                  </p>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {paged.map((v) => (
                      <Link
                        key={v.id}
                        href={`/stores/${v.slug}`}
                        className="block group"
                      >
                        <Card className="group overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border-0">
                          <div className="relative h-56 overflow-hidden">
                            <Image
                              fill
                              src={v.image}
                              alt={v.name}
                              className="object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                          </div>
                          <CardContent className="p-6 space-y-3">
                            <h3 className="text-xl font-bold text-gray-900">
                              {v.name}
                            </h3>
                            <p className="text-sm text-gray-600 line-clamp-2">
                              {v.description}
                            </p>
                            <div className="flex items-center gap-2 flex-wrap">
                              <Badge
                                variant="secondary"
                                className="bg-white/80 text-gray-900 border"
                              >
                                {v.category}
                              </Badge>
                              <Badge
                                variant="secondary"
                                className="bg-white/80 text-gray-900 border"
                              >
                                {v.floor}
                              </Badge>
                            </div>
                          </CardContent>
                        </Card>
                      </Link>
                    ))}
                  </div>
                )}

                {total > 1 && (
                  <div className="mt-10 flex justify-center items-center gap-2">
                    <Button
                      size="icon"
                      variant="outline"
                      disabled={page === 1}
                      onClick={() => goto(page - 1)}
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </Button>
                    {Array.from({ length: total }).map((_, i) => (
                      <Button
                        key={i}
                        size="icon"
                        variant={page === i + 1 ? "default" : "outline"}
                        onClick={() => goto(i + 1)}
                      >
                        {i + 1}
                      </Button>
                    ))}
                    <Button
                      size="icon"
                      variant="outline"
                      disabled={page === total}
                      onClick={() => goto(page + 1)}
                    >
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
