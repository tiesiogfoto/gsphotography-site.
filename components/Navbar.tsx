import Link from "next/link";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Navbar() {
  return (
    <header className="bg-white/90 backdrop-blur sticky top-0 z-50 border-b border-black/10">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        {/* Kairė – logotipas */}
        <Link href="/" className="text-xl font-bold text-gray-900">
          GSphotography
        </Link>

        {/* Centras – nuorodos */}
        <nav className="hidden md:flex items-center gap-6 text-gray-700 font-medium">
          <Link href="/">{/* Home */}Home</Link>
          <Link href="/portfolio">Portfolio</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        {/* Dešinė – kalbų perjungiklis */}
        <div className="flex items-center gap-3">
          <LanguageSwitcher size="sm" position="header" />
        </div>
      </div>

      {/* Mobili navigacija (pasirenkama – jei nori, gali pridėti burger) */}
      <div className="md:hidden border-t border-black/5">
        <nav className="px-4 py-2 flex items-center justify-between text-gray-700">
          <Link href="/">Home</Link>
          <Link href="/portfolio">Portfolio</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
