"use client";

import { useState, useRef } from "react";
import {
  Car,
  Wifi,
  ShoppingCart,
  CreditCard,
  MapPin,
  Headphones,
  Shield,
  Gift,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";
import { Footer } from "@/components/layout/footer";

const services = [
  {
    id: 1,
    title: "Free Parking",
    description:
      "Complimentary parking for all visitors with over 2000 spaces available.",
    icon: Car,
    color: "from-blue-500 to-cyan-500",
    details: {
      hours: "24/7",
      location: "Multi-level parking structure",
      capacity: "2000+ spaces",
      features: [
        "Covered parking",
        "Security cameras",
        "Well-lit areas",
        "Disabled parking",
      ],
      notes: "No time limit. First come, first served basis.",
    },
  },
  {
    id: 2,
    title: "Free WiFi",
    description:
      "High-speed internet access throughout the mall for your convenience.",
    icon: Wifi,
    color: "from-green-500 to-emerald-500",
    details: {
      speed: "Up to 100 Mbps",
      coverage: "Entire mall premises",
      password: "No password required",
      features: [
        "High-speed connection",
        "Secure network",
        "No time limit",
        "Multiple device support",
      ],
      notes: "Connect to 'Greenwood_Free_WiFi' network automatically.",
    },
  },
  {
    id: 3,
    title: "Personal Shopping",
    description:
      "Expert personal shoppers to help you find exactly what you're looking for.",
    icon: ShoppingCart,
    color: "from-purple-500 to-pink-500",
    details: {
      availability: "Mon-Sat: 10AM-8PM",
      location: "Information Desk, Ground Floor",
      booking: "Walk-in or call ahead",
      features: [
        "Style consultation",
        "Store recommendations",
        "Gift suggestions",
        "Size assistance",
      ],
      notes: "Free service. Appointments recommended for busy periods.",
    },
  },
  {
    id: 4,
    title: "Easy Payments",
    description:
      "Multiple payment options including contactless and mobile payments.",
    icon: CreditCard,
    color: "from-orange-500 to-red-500",
    details: {
      methods: "All major cards accepted",
      mobile: "M-Pesa, Airtel Money, PayPal",
      contactless: "Tap & Go available",
      features: [
        "Credit/Debit cards",
        "Mobile money",
        "Contactless payments",
        "Cash accepted",
      ],
      notes: "Most stores accept all major payment methods.",
    },
  },
  {
    id: 5,
    title: "Mall Navigation",
    description: "Interactive maps and wayfinding to help you navigate easily.",
    icon: MapPin,
    color: "from-indigo-500 to-purple-500",
    details: {
      locations: "Multiple kiosks",
      mobile: "Mobile app available",
      features: [
        "Interactive touchscreens",
        "Digital directories",
        "Store locator",
        "Floor plans",
        "Accessibility routes",
      ],
      notes: "Download our mobile app for navigation on the go.",
    },
  },
  {
    id: 6,
    title: "Customer Support",
    description: "24/7 customer service desk for any assistance you may need.",
    icon: Headphones,
    color: "from-teal-500 to-green-500",
    details: {
      hours: "24/7",
      location: "Main entrance, Ground Floor",
      phone: "+254 20 123 4567",
      features: [
        "General inquiries",
        "Lost & found",
        "Complaints",
        "Emergency assistance",
      ],
      notes:
        "Multilingual staff available. Emergency services contact available.",
    },
  },
  {
    id: 7,
    title: "Security Services",
    description:
      "Round-the-clock security ensuring a safe shopping environment.",
    icon: Shield,
    color: "from-red-500 to-pink-500",
    details: {
      coverage: "24/7 surveillance",
      personnel: "Trained security staff",
      emergency: "Emergency response team",
      features: [
        "CCTV monitoring",
        "Patrol services",
        "Emergency response",
        "Lost child assistance",
      ],
      notes: "Security personnel are easily identifiable in uniform.",
    },
  },
  {
    id: 8,
    title: "Gift Cards",
    description:
      "Purchase gift cards for any store in the mall - perfect for any occasion.",
    icon: Gift,
    color: "from-yellow-500 to-orange-500",
    details: {
      denominations: "KSh 500 - KSh 50,000",
      validity: "12 months",
      locations: "Information Desk, Customer Service",
      features: [
        "Custom amounts",
        "Store-specific cards",
        "Online purchase",
        "Balance checking",
      ],
      notes:
        "Available in physical and digital formats. Perfect for birthdays and holidays.",
    },
  },
];

export default function ServicesPage() {
  const [hoveredService, setHoveredService] = useState<number | null>(null);
  const hideTimeout = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (id: number) => {
    if (hideTimeout.current) clearTimeout(hideTimeout.current);
    setHoveredService(id);
  };

  const handleMouseLeave = () => {
    hideTimeout.current = setTimeout(() => setHoveredService(null), 120);
  };

  return (
    <>
      <main className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50 py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Premium{" "}
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                Services
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Enjoy a seamless shopping experience with our comprehensive range
              of services designed for your comfort and convenience. Hover over
              any service to learn more details.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={service.id}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(service.id)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Card className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg bg-white overflow-hidden cursor-default">
                    <CardContent className="p-6 text-center">
                      <div
                        className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                      >
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>

                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                        {service.title}
                      </h3>

                      <p className="text-gray-600 leading-relaxed">
                        {service.description}
                      </p>
                    </CardContent>
                  </Card>

                  {/* Hover Card */}
                  <AnimatePresence>
                    {hoveredService === service.id && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.96, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.96, y: 10 }}
                        transition={{ duration: 0.18, ease: "easeOut" }}
                        className="hidden md:block absolute z-50 bg-white rounded-xl shadow-2xl border border-gray-100 p-6 min-w-[260px] max-w-xs"
                        style={{
                          top: "50%",
                          left: index % 4 === 3 ? "auto" : "100%",
                          right: index % 4 === 3 ? "100%" : "auto",
                          transform:
                            "translateY(-50%)" +
                            (index % 4 === 3
                              ? " translateX(-16px)"
                              : " translateX(16px)"),
                        }}
                      >
                        {/* Arrow */}
                        <div
                          className={
                            "absolute top-1/2 -translate-y-1/2 " +
                            (index % 4 === 3 ? "-right-3" : "-left-3")
                          }
                          style={{ zIndex: 51 }}
                        >
                          <svg
                            width="24"
                            height="32"
                            viewBox="0 0 24 32"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <polygon
                              points={
                                index % 4 === 3
                                  ? "24,16 0,8 0,24"
                                  : "0,16 24,8 24,24"
                              }
                              fill="#fff"
                              stroke="#e5e7eb"
                              strokeWidth="1.5"
                              filter="drop-shadow(0 2px 6px rgba(0,0,0,0.08))"
                            />
                          </svg>
                        </div>
                        <div className="flex items-center gap-3 mb-4">
                          <div
                            className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center`}
                          >
                            <IconComponent className="h-6 w-6 text-white" />
                          </div>
                          <h4 className="text-lg font-bold text-gray-900">
                            {service.title}
                          </h4>
                        </div>
                        <div className="space-y-3">
                          {Object.entries(service.details).map(
                            ([key, value]) => {
                              if (key === "features") return null;
                              return (
                                <div key={key} className="flex justify-between">
                                  <span className="text-sm font-medium text-gray-600 capitalize">
                                    {key.replace(/([A-Z])/g, " $1").trim()}:
                                  </span>
                                  <span className="text-sm text-gray-900">
                                    {value}
                                  </span>
                                </div>
                              );
                            }
                          )}
                          {service.details.features && (
                            <div className="mt-4">
                              <h5 className="text-sm font-medium text-gray-600 mb-2">
                                Features:
                              </h5>
                              <ul className="space-y-1">
                                {service.details.features.map(
                                  (feature, idx) => (
                                    <li
                                      key={idx}
                                      className="text-sm text-gray-700 flex items-center gap-2"
                                    >
                                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                                      {feature}
                                    </li>
                                  )
                                )}
                              </ul>
                            </div>
                          )}
                          {service.details.notes && (
                            <div className="mt-4 p-3 bg-green-50 rounded-lg">
                              <p className="text-sm text-green-800 italic">
                                {service.details.notes}
                              </p>
                            </div>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
