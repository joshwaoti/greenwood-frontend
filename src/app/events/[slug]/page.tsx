"use client";

import { useParams } from "next/navigation";
import { events } from "@/lib/events";
import Image from "next/image";
import { Calendar, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/layout/footer";
import Link from "next/link";

export default function EventDetailPage() {
  const params = useParams();
  const slug = Array.isArray(params?.slug)
    ? params.slug[0]
    : ((params as any)?.slug as string);

  const event = events.find((e) => e.slug === slug);

  if (!event) {
    return <p className="text-center py-20">Event not found.</p>;
  }

  return (
    <>
      <main className="min-h-screen bg-white pt-20 pb-32">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-center">
            {event.title}
          </h1>
          <div className="relative h-80 w-full mb-8 rounded-lg overflow-hidden shadow">
            <Image
              src={event.image}
              alt={event.title}
              fill
              className="object-cover"
            />
          </div>

          <div className="flex flex-col md:flex-row md:items-center justify-center gap-6 text-gray-700 mb-10 text-lg">
            <span className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              {new Date(event.date).toLocaleDateString("en-US", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              {event.time}
            </span>
            <span className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              {event.location}
            </span>
          </div>

          <p className="text-gray-800 leading-relaxed mb-12 whitespace-pre-line">
            {event.description}
          </p>

          <div className="text-center">
            <Button className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 px-8 py-4 text-lg">
              Register Now
            </Button>
          </div>

          <div className="mt-12 text-center">
            <Link href="/events">
              <Button variant="outline">← Back to Events</Button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
