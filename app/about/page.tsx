export default function AboutPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-4xl font-bold mb-8">About</h1>

      <p className="mb-6 text-lg text-gray-300">
        Hi, I’m <span className="font-semibold">Giedre</span> — a Norway-based photographer 
        focusing on clean product, portrait, and architecture imagery. 
        I bring a creative eye for detail and lighting, keeping the look crisp and timeless.
      </p>

      <ul className="list-disc list-inside text-gray-300 space-y-2">
        <li>Product & e-commerce</li>
        <li>Portraits & headshots</li>
        <li>Architecture & interiors</li>
      </ul>
    </main>
  );
}

