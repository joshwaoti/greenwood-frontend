"use client";

import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import Link from "next/link";
import { Menu, Search, MapPin, Phone, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import Image from "next/image";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (navRef.current) {
      gsap.fromTo(
        navRef.current,
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power2.out" }
      );
    }
  }, []);

  const handleLinkClick = () => {
    setIsSheetOpen(false);
  };

  return (
    <>
      {/* Top Bar */}
      <div className="bg-slate-900 text-white py-2 px-4 text-sm hidden md:block">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <MapPin className="h-4 w-4" />
              <span>Meru Road, Meru</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <span>+254 20 123 4567</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="h-4 w-4" />
              <span>Mon-Sun: 10AM-10PM</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Link
              href="/directory"
              className="hover:text-green-400 transition-colors"
            >
              Store Directory
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav
        ref={navRef}
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-white"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center justify-center">
              <Image
                src="/logo-dark.png"
                alt="Greenwood City Logo"
                width={110}
                height={110}
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <Link
                href="/"
                className="text-gray-700 hover:text-greenwood-gold transition-colors font-medium"
              >
                Home
              </Link>
              <Link
                href="/stores"
                className="text-gray-700 hover:text-greenwood-gold transition-colors font-medium"
              >
                Stores
              </Link>
              <Link
                href="/dining"
                className="text-gray-700 hover:text-greenwood-gold transition-colors font-medium"
              >
                Dining
              </Link>
              <Link
                href="/entertainment"
                className="text-gray-700 hover:text-greenwood-gold transition-colors font-medium"
              >
                Entertainment
              </Link>
              <Link
                href="/blog"
                className="text-gray-700 hover:text-greenwood-gold transition-colors font-medium"
              >
                Blog
              </Link>
              <Link
                href="/services"
                className="text-gray-700 hover:text-greenwood-gold transition-colors font-medium"
              >
                Services
              </Link>
              <Link
                href="/contact"
                className="text-gray-700 hover:text-greenwood-gold transition-colors font-medium"
              >
                Contact
              </Link>
            </div>

            {/* Search and Mobile Menu */}
            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    type="search"
                    placeholder="Search stores..."
                    className="pl-10 w-64 bg-gray-50 border-gray-200 focus:bg-white"
                  />
                </div>
              </div>

              {/* Mobile Menu */}
              <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="lg:hidden">
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-80">
                  <div className="flex flex-col space-y-6 mt-8">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                      <Input
                        type="search"
                        placeholder="Search stores..."
                        className="pl-10 bg-gray-50"
                      />
                    </div>

                    <div className="flex flex-col space-y-4">
                      <Link
                        href="/"
                        onClick={handleLinkClick}
                        className="text-lg font-medium text-gray-700 hover:text-greenwood-gold transition-colors"
                      >
                        Home
                      </Link>
                      <Link
                        href="/stores"
                        onClick={handleLinkClick}
                        className="text-lg font-medium text-gray-700 hover:text-greenwood-gold transition-colors"
                      >
                        Stores
                      </Link>
                      <Link
                        href="/dining"
                        onClick={handleLinkClick}
                        className="text-lg font-medium text-gray-700 hover:text-greenwood-gold transition-colors"
                      >
                        Dining
                      </Link>
                      <Link
                        href="/entertainment"
                        onClick={handleLinkClick}
                        className="text-lg font-medium text-gray-700 hover:text-greenwood-gold transition-colors"
                      >
                        Entertainment
                      </Link>
                      <Link
                        href="/blog"
                        onClick={handleLinkClick}
                        className="text-lg font-medium text-gray-700 hover:text-greenwood-gold transition-colors"
                      >
                        Blog
                      </Link>
                      <Link
                        href="/services"
                        onClick={handleLinkClick}
                        className="text-lg font-medium text-gray-700 hover:text-greenwood-gold transition-colors"
                      >
                        Services
                      </Link>
                      <Link
                        href="/contact"
                        onClick={handleLinkClick}
                        className="text-lg font-medium text-gray-700 hover:text-greenwood-gold transition-colors"
                      >
                        Contact
                      </Link>
                    </div>

                    <div className="pt-6 border-t">
                      <div className="space-y-3 text-sm text-gray-600">
                        <div className="flex items-center space-x-2">
                          <MapPin className="h-4 w-4" />
                          <span>Donholm Road, Nairobi</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Phone className="h-4 w-4" />
                          <span>+254 20 123 4567</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock className="h-4 w-4" />
                          <span>Mon-Sun: 10AM-10PM</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
