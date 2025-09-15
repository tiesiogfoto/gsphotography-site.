import Link from 'next/link';

export default function Hero() {
  return (
    <section className="container-padded mt-16 md:mt-24">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Clean, timeless photography<br />
            for brands and people.
          </h1>
          <p className="text-white/70 mt-5 max-w-xl">
            I capture products, architecture, and portraits with a crisp,
            minimalist aesthetic. Available across Innlandet and Oslo region.
          </p>
          <div className="flex gap-3 mt-8">
            <Link href="/portfolio" className="rounded-2xl px-5 py-3 bg-white text-black font-medium hover:opacity-90 transition">See Portfolio</Link>
            <Link href="/contact" className="rounded-2xl px-5 py-3 border border-white/20 hover:bg-white/10 transition">Book a shoot</Link>
          </div>
        </div>
        <div className="aspect-square rounded-3xl overflow-hidden ring-1 ring-white/10">
          <div className="w-full h-full bg-[url('/samples/1.jpg')] bg-cover bg-center" />
        </div>
      </div>
    </section>
  );
}
