"use client";

import Link from "next/link";
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  MapPin,
  Phone,
  Mail,
  Clock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Brand Section - match navbar */}
          <div className="space-y-6">
            <div className="flex items-center justify-start">
              <Image
                src="/logo-dark.png"
                alt="Greenwood City Logo"
                width={110}
                height={110}
                priority
              />
            </div>
            <span className="text-2xl font-bold text-gray-100">
              Greenwood City Mall
            </span>
            <p className="text-gray-400 leading-relaxed">
              Meru's premier shopping destination featuring over 150 stores,
              diverse dining options, and family entertainment experiences in
              the heart of the city.
            </p>
            <div className="flex space-x-4">
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-400 hover:text-white hover:bg-gray-800"
              >
                <Facebook className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-400 hover:text-white hover:bg-gray-800"
              >
                <Twitter className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-400 hover:text-white hover:bg-gray-800"
              >
                <Instagram className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-400 hover:text-white hover:bg-gray-800"
              >
                <Youtube className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links (hidden on mobile) */}
          <div className="hidden md:block">
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <div className="space-y-3">
              <Link
                href="/stores"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Store Directory
              </Link>
              <Link
                href="/dining"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Dining Options
              </Link>
              <Link
                href="/entertainment"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Entertainment
              </Link>
              <Link
                href="/events"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Events Calendar
              </Link>
              <Link
                href="/services"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Services
              </Link>
              <Link
                href="/parking"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Parking Information
              </Link>
            </div>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Customer Service</h3>
            <div className="space-y-3">
              <Link
                href="/contact"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Contact Us
              </Link>
              <Link
                href="/faq"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                FAQ
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-400">Greenwood City Mall</p>
                  <p className="text-gray-400">Donholm Road, Nairobi</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-green-400 flex-shrink-0" />
                <p className="text-gray-400">+254 20 123 4567</p>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-green-400 flex-shrink-0" />
                <p className="text-gray-400">info@greenwoodcitymall.co.ke</p>
              </div>

              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-400">Mon-Thu: 9AM-9PM</p>
                  <p className="text-gray-400">Fri-Sat: 9AM-10PM</p>
                  <p className="text-gray-400">Sunday: 10AM-8PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-gray-800" />

        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-400 text-sm">
            © 2025 Greenwood City Mall. All rights reserved.
          </p>

          <div className="flex items-center space-x-6 text-sm text-gray-400">
            <Link
              href="/accessibility"
              className="hover:text-white transition-colors"
            >
              Accessibility
            </Link>
            <Link
              href="/sitemap"
              className="hover:text-white transition-colors"
            >
              Sitemap
            </Link>
            <Link
              href="/security"
              className="hover:text-white transition-colors"
            >
              Security
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
