"use client";

import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { Footer } from "@/components/layout/footer";

export default function ContactPage() {
  return (
    <>
      <main className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50 py-12 px-4">
        <div className="container mx-auto max-w-5xl">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-center">
            Contact{" "}
            <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              Us
            </span>
          </h1>
          <p className="text-lg text-gray-600 text-center mb-10 max-w-2xl mx-auto">
            We'd love to hear from you! Reach out for inquiries, feedback, or
            assistance.
          </p>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="h-6 w-6 text-green-600 mt-1" />
                <div>
                  <span className="font-semibold text-gray-800">Address:</span>
                  <p className="text-gray-700">
                    Meru Greenwood Park
                    <br />
                    Meru, Kenya
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="h-6 w-6 text-green-600" />
                <div>
                  <span className="font-semibold text-gray-800">Phone:</span>
                  <p className="text-gray-700">+254 700 123 456</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="h-6 w-6 text-green-600" />
                <div>
                  <span className="font-semibold text-gray-800">Email:</span>
                  <p className="text-gray-700">info@merugreenwood.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Clock className="h-6 w-6 text-green-600" />
                <div>
                  <span className="font-semibold text-gray-800">Hours:</span>
                  <p className="text-gray-700">Mon-Sun: 10AM-10PM</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <form className="bg-white rounded-xl shadow-lg p-8 space-y-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Message
                </label>
                <textarea
                  className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
                  rows={4}
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white font-bold py-2 rounded hover:from-green-700 hover:to-emerald-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Google Map */}
          <div className="rounded-xl overflow-hidden shadow-lg">
            <iframe
              title="Greenwood City Mall Location"
              src="https://www.google.com/maps?q=Meru+Greenwood+Park,+Meru,+Kenya&output=embed"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
