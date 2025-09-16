// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";
import MobileQuickBar from "@/components/MobileQuickBar";

export const metadata: Metadata = {
  title: "GSphotography",
  description: "Clean, timeless photography for brands and people.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        {/* Viršutinė navigacija + kontaktai (desktop) */}
        <header className="bg-neutral-100 text-gray-800">
          <div className="mx-auto max-w-6xl px-4">
            <div className="flex items-center justify-between py-3">
              {/* Kairėje – brand + nuorodos */}
              <nav className="flex items-center gap-6">
                <Link href="/" className="font-semibold text-lg">
                  GSphotography
                </Link>
                <div className="hidden sm:flex items-center gap-6 text-sm">
                  <Link href="/">Home</Link>
                  <Link href="/portfolio">Portfolio</Link>
                  <Link href="/about">About</Link>
                  <Link href="/contact">Contact</Link>
                </div>
              </nav>

              {/* Dešinėje – telefonas ir el. paštas (be ikonų), kaip paprastas tekstas */}
              <div className="hidden md:flex items-center gap-6 text-sm">
                <a href="tel:+4746262381" className="hover:underline">
                  46 26 23 81
                </a>
                <a href="mailto:hello@gsphotography.no" className="hover:underline">
                  hello@gsphotography.no
                </a>
              </div>
            </div>
          </div>
        </header>

        {/* Puslapio turinys */}
        <main>{children}</main>

        {/* Mobile quick bar (be ikonų) */}
        <MobileQuickBar />

        {/* Footer (jei yra – palik kaip turėjai; žemiau minimalus variantas) */}
        {/* <footer className="mx-auto max-w-6xl px-4 py-10 text-sm text-white/60">© {new Date().getFullYear()} GSphotography. All rights reserved.</footer> */}
      </body>
    </html>
  );
}
