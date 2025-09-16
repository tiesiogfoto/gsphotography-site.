"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white/90 backdrop-blur shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
        
        {/* Brand logo / name */}
        <div className="font-bold text-gray-900 text-lg">
          GSphotography
        </div>

        {/* Navigation links */}
        <div className="flex items-center space-x-6 text-gray-700 font-medium">
          <Link href="/">Home</Link>
          <Link href="/portfolio">Portfolio</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>

        {/* Contact links (phone + email) */}
        <div className="hidden md:flex items-center space-x-4 text-sm">
          <a href="tel:+4746262381" className="text-blue-600 hover:underline">
            📱 46 26 23 81
          </a>
          <a href="mailto:hello@gsphotography.no" className="text-blue-600 hover:underline">
            ✉️ hello@gsphotography.no
          </a>
        </div>
      </div>
    </nav>
  );
}
