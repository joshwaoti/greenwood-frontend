"use client";

import Image from "next/image";
import Link from "next/link";
import { events } from "@/lib/events";
import { Calendar, Clock, MapPin, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/layout/footer";

export default function EventsPage() {
  return (
    <>
      <main className="min-h-screen bg-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900">
            Events
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {events.map((event) => (
              <Card key={event.id} className="overflow-hidden shadow group">
                <div className="relative h-64 w-full">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6 space-y-4">
                  <h3 className="text-2xl font-bold text-gray-900">
                    {event.title}
                  </h3>
                  <p className="text-gray-600 line-clamp-3">{event.summary}</p>

                  <div className="flex items-center text-gray-600 gap-6 text-sm">
                    <span className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {new Date(event.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </span>
                    <span className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      {event.time}
                    </span>
                    <span className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      {event.location}
                    </span>
                  </div>

                  <Link href={`/events/${event.slug}`} className="inline-block">
                    <Button
                      variant="outline"
                      className="mt-2 inline-flex items-center gap-2"
                    >
                      Learn More <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
