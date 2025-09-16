"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Uždaryt meniu kai keičiasi kelias (saugiau, jei vėliau naudosime Link navigaciją)
  useEffect(() => {
    const closeOnEsc = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", closeOnEsc);
    return () => document.removeEventListener("keydown", closeOnEsc);
  }, []);

  return (
    <nav className="bg-white/90 backdrop-blur shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
        {/* Brand */}
        <div className="font-bold text-gray-900 text-lg">
          GSphotography
        </div>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6 text-gray-700 font-medium">
          <Link href="/">Home</Link>
          <Link href="/portfolio">Portfolio</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>

        {/* Desktop contacts */}
        <div className="hidden md:flex items-center gap-4 text-sm">
          <a href="tel:+4746262381" className="text-blue-600 hover:underline">
            📱 46 26 23 81
          </a>
          <a href="mailto:hello@gsphotography.no" className="text-blue-600 hover:underline">
            ✉️ hello@gsphotography.no
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100"
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {/* Icon */}
          <svg
            className={`h-6 w-6 transition-transform ${open ? "rotate-90" : ""}`}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
          >
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile panel */}
      <div
        className={`md:hidden border-t overflow-hidden transition-[max-height,opacity] duration-300 ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 py-3 space-y-3 bg-white">
          <div className="grid gap-2 text-gray-800 font-medium">
            <Link href="/" onClick={() => setOpen(false)} className="py-2">Home</Link>
            <Link href="/portfolio" onClick={() => setOpen(false)} className="py-2">Portfolio</Link>
            <Link href="/about" onClick={() => setOpen(false)} className="py-2">About</Link>
            <Link href="/contact" onClick={() => setOpen(false)} className="py-2">Contact</Link>
          </div>

          <div className="pt-3 border-t grid gap-2 text-sm">
            <a
              href="tel:+4746262381"
              className="w-full inline-flex items-center justify-center rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white py-2"
              onClick={() => setOpen(false)}
            >
              📞 Call 46 26 23 81
            </a>
            <a
              href="mailto:hello@gsphotography.no"
              className="w-full inline-flex items-center justify-center rounded-lg bg-gray-900 hover:bg-gray-800 text-white py-2"
              onClick={() => setOpen(false)}
            >
              ✉️ Email hello@gsphotography.no
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
