import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md p-4 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="text-xl font-bold text-gray-800">GSphotography</div>
        <div className="space-x-6 text-gray-700 font-medium flex items-center">
          <Link href="/">Home</Link>
          <Link href="/portfolio">Portfolio</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>

          {/* Telefonas */}
          <a href="tel:+4746262381" className="text-gray-700 hover:underline">
            46 26 23 81
          </a>

          {/* El. paštą nukreipiam į kontaktų puslapį */}
          <Link href="/contact" className="text-gray-700 hover:underline">
            hello@gsphotography.no
          </Link>
        </div>
      </div>
    </nav>
  );
}
