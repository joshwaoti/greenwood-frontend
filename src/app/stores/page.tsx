"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { stores } from "@/lib/stores";
import Link from "next/link";
import { Footer } from "@/components/layout/footer";

const categories = Array.from(new Set(stores.map((s) => s.category)));
const floors = Array.from(new Set(stores.map((s) => s.floor)));

export default function StoresPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedFloor, setSelectedFloor] = useState<string | null>(null);
  const [query, setQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const ITEMS_PER_PAGE = 6;

  const filteredStores = useMemo(() => {
    return stores.filter((store) => {
      const matchesCategory = selectedCategory
        ? store.category === selectedCategory
        : true;
      const matchesFloor = selectedFloor ? store.floor === selectedFloor : true;
      const matchesQuery = store.name
        .toLowerCase()
        .includes(query.toLowerCase());
      return matchesCategory && matchesFloor && matchesQuery;
    });
  }, [selectedCategory, selectedFloor, query]);

  const totalPages = Math.ceil(filteredStores.length / ITEMS_PER_PAGE) || 1;
  const paginatedStores = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredStores.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredStores, currentPage]);

  const goToPage = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const FilterSidebar = (
    <div className="space-y-8 p-6 w-64">
      <div>
        <h3 className="font-semibold text-gray-800 mb-3">Search</h3>
        <Input
          placeholder="Search stores..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      <div>
        <h3 className="font-semibold text-gray-800 mb-3">Category</h3>
        <div className="flex flex-col gap-2">
          <Button
            variant={selectedCategory === null ? "default" : "outline"}
            className="justify-start"
            onClick={() => setSelectedCategory(null)}
          >
            All Categories
          </Button>
          {categories.map((cat) => (
            <Button
              key={cat}
              variant={selectedCategory === cat ? "default" : "outline"}
              className="justify-start"
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </Button>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-semibold text-gray-800 mb-3">Floor</h3>
        <div className="flex flex-col gap-2">
          <Button
            variant={selectedFloor === null ? "default" : "outline"}
            className="justify-start"
            onClick={() => setSelectedFloor(null)}
          >
            All Floors
          </Button>
          {floors.map((fl) => (
            <Button
              key={fl}
              variant={selectedFloor === fl ? "default" : "outline"}
              className="justify-start"
              onClick={() => setSelectedFloor(fl)}
            >
              {fl}
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
              Store{" "}
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                Directory
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto text-center mb-12">
              Browse all tenants at Greenwood City Mall. Use the filters to
              quickly find what you need.
            </p>

            {/* Mobile Filter Button */}
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
                  {FilterSidebar}
                </SheetContent>
              </Sheet>

              {/* Auto-scrolling category pills */}
              <div className="relative overflow-hidden mt-4">
                <div
                  className="flex gap-4 animate-scroll-left"
                  style={{
                    width: "calc(200% + 2rem)",
                    animation: "scrollLeft 18s linear infinite",
                  }}
                >
                  {Array.from({ length: 2 }).map((_, dup) =>
                    categories.map((cat) => (
                      <Button
                        key={`${dup}-${cat}`}
                        size="sm"
                        variant={
                          selectedCategory === cat ? "default" : "outline"
                        }
                        className="whitespace-nowrap"
                        onClick={() => setSelectedCategory(cat)}
                      >
                        {cat}
                      </Button>
                    ))
                  )}
                </div>
              </div>
            </div>

            <div className="flex gap-8">
              {/* Desktop Sidebar */}
              <aside className="hidden md:block sticky top-24 h-max">
                {FilterSidebar}
              </aside>

              <div className="flex-1">
                {filteredStores.length === 0 ? (
                  <p className="text-center text-gray-500">
                    No stores match your filters.
                  </p>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {paginatedStores.map((store) => (
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
                            <p className="text-sm text-gray-600 line-clamp-2">
                              {store.description}
                            </p>
                            <div className="flex items-center gap-2 flex-wrap">
                              <Badge
                                variant="secondary"
                                className="bg-white/80 text-gray-900 border"
                              >
                                {store.category}
                              </Badge>
                              <Badge
                                variant="secondary"
                                className="bg-white/80 text-gray-900 border"
                              >
                                {store.floor}
                              </Badge>
                            </div>
                          </CardContent>
                        </Card>
                      </Link>
                    ))}
                  </div>
                )}
                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="mt-10 flex justify-center items-center gap-2">
                    <Button
                      size="icon"
                      variant="outline"
                      disabled={currentPage === 1}
                      onClick={() => goToPage(currentPage - 1)}
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </Button>
                    {Array.from({ length: totalPages }).map((_, idx) => (
                      <Button
                        key={idx}
                        size="icon"
                        variant={
                          currentPage === idx + 1 ? "default" : "outline"
                        }
                        onClick={() => goToPage(idx + 1)}
                      >
                        {idx + 1}
                      </Button>
                    ))}
                    <Button
                      size="icon"
                      variant="outline"
                      disabled={currentPage === totalPages}
                      onClick={() => goToPage(currentPage + 1)}
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
