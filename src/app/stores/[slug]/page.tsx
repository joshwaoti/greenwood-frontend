"use client";

import { notFound } from "next/navigation";
import Image from "next/image";
import { stores } from "@/lib/stores";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Globe } from "lucide-react";
import { Footer } from "@/components/layout/footer";

interface Props {
  params: { slug: string };
}

function isStoreOpen(hours: Record<string, string>): boolean {
  const now = new Date();
  const dayMap = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const key = dayMap[now.getDay()];
  const todayRange = hours[key];
  if (!todayRange) return false;
  const [open, close] = todayRange.split("-");
  const [oh, om] = open.split(":").map(Number);
  const [ch, cm] = close.split(":").map(Number);
  const openDate = new Date();
  openDate.setHours(oh, om, 0, 0);
  const closeDate = new Date();
  closeDate.setHours(ch, cm, 0, 0);
  return now >= openDate && now <= closeDate;
}

export default function StoreDetail({ params }: Props) {
  const store = stores.find((s) => s.slug === params.slug);
  if (!store) return notFound();

  const open = isStoreOpen(store.hours);

  return (
    <>
      <main className="min-h-screen bg-white py-12">
        <div className="container mx-auto px-4 space-y-12">
          {/* Header Card */}
          <div className="relative rounded-2xl overflow-hidden shadow-xl h-64 md:h-[420px]">
            <Image
              src={store.image}
              alt={store.name}
              fill
              className="object-cover"
              sizes="(max-width:768px) 100vw, 1200px"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/10" />
            <div className="absolute bottom-6 left-6 text-white space-y-2">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight">
                {store.name}
              </h1>
              <Badge className="bg-white/30 text-white backdrop-blur-sm border-white/50">
                {store.category}
              </Badge>
            </div>
          </div>

          {/* Details */}
          <section className="grid md:grid-cols-3 gap-12">
            {/* Details */}
            <div className="md:col-span-2 space-y-8">
              <div className="flex items-center gap-3">
                <Badge className={open ? "bg-emerald-600" : "bg-red-600"}>
                  {open ? "Open" : "Closed"}
                </Badge>
                <span className="text-gray-600">{store.floor}</span>
              </div>

              <p className="text-lg text-gray-700 leading-relaxed">
                {store.description}
              </p>

              {/* Opening Hours */}
              <div>
                <h2 className="text-2xl font-bold mb-4">Opening Hours</h2>
                <table className="w-full text-left border-collapse">
                  <tbody>
                    {Object.entries(store.hours).map(([day, range]) => {
                      const today = new Date().getDay();
                      const dayNames = [
                        "Sun",
                        "Mon",
                        "Tue",
                        "Wed",
                        "Thu",
                        "Fri",
                        "Sat",
                      ];
                      const isToday = dayNames[today] === day;
                      return (
                        <tr
                          key={day}
                          className={
                            isToday ? "text-emerald-600 font-semibold" : ""
                          }
                        >
                          <td className="py-2 pr-4 capitalize w-28">{day}</td>
                          <td className="py-2">{range}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Contact */}
            <aside className="space-y-6">
              <h2 className="text-2xl font-bold">Contact</h2>
              <div className="space-y-4 text-gray-700">
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-greenwood-gold" />
                  <span>{store.phone}</span>
                </div>
                {store.email && (
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-greenwood-gold" />
                    <a href={`mailto:${store.email}`} className="underline">
                      {store.email}
                    </a>
                  </div>
                )}
                {store.website && (
                  <div className="flex items-center gap-3">
                    <Globe className="h-5 w-5 text-greenwood-gold" />
                    <a
                      href={store.website}
                      target="_blank"
                      rel="noreferrer"
                      className="underline"
                    >
                      Visit Website
                    </a>
                  </div>
                )}
              </div>
              <Button className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white">
                Get Directions
              </Button>
            </aside>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
