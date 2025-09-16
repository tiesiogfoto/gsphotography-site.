import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md p-4 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Kairėje logotipas */}
        <div className="text-xl font-bold text-gray-800">GSphotography</div>

        {/* Meniu dešinėje */}
        <div className="space-x-6 text-gray-700 font-medium flex items-center">
          <Link href="/">Home</Link>
          <Link href="/portfolio">Portfolio</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>

          {/* Telefonas */}
          <a href="tel:+4746262381" className="hover:text-black">
            46 26 23 81
          </a>

          {/* El. paštas */}
          <a href="mailto:hello@gsphotography.no" className="hover:text-black">
            hello@gsphotography.no
          </a>
        </div>
      </div>
    </nav>
  );
}

