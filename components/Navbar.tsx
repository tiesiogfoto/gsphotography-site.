import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="border-b border-white/10 sticky top-0 z-50 backdrop-blur">
      <nav className="container-padded flex items-center justify-between py-4">
        <Link href="/" className="text-xl font-semibold tracking-wide">
          GS<span className="text-white/60">photography</span>
        </Link>
        <div className="flex items-center gap-6 text-sm">
          <Link href="/portfolio" className="hover:text-white/80">Portfolio</Link>
          <Link href="/about" className="hover:text-white/80">About</Link>
          <Link href="/contact" className="border border-white/20 rounded-xl px-3 py-1 hover:bg-white/10 transition">
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
}
