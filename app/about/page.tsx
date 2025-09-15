export const metadata = { title: 'About – GSphotography' };

export default function AboutPage() {
  return (
    <section className="container-padded mt-12 max-w-3xl">
      <h1 className="text-3xl md:text-4xl font-semibold">About</h1>
      <p className="text-white/70 mt-4 leading-7">
        Hi, I’m Povilas — a Norway-based photographer focusing on clean product,
        portrait, and architecture imagery. I bring a builder’s eye for detail
        and lighting, keeping the look crisp and timeless.
      </p>
      <ul className="mt-6 space-y-2 text-white/80">
        <li>• Product & e‑commerce</li>
        <li>• Portraits & headshots</li>
        <li>• Architecture & interiors</li>
      </ul>
    </section>
  );
}
