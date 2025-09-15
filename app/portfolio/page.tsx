export const metadata = { title: 'Portfolio – GSphotography' };

const images = Array.from({length: 9}, (_, i) => `/samples/${i+1}.jpg`);

export default function PortfolioPage() {
  return (
    <section className="container-padded mt-12">
      <h1 className="text-3xl md:text-4xl font-semibold">Portfolio</h1>
      <p className="text-white/70 mt-2">A broader selection of projects and personal work.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8">
        {images.map((src, i) => (
          <div key={i} className="rounded-2xl overflow-hidden ring-1 ring-white/10">
            <img src={src} alt={`Portfolio ${i+1}`} className="w-full h-72 object-cover" />
          </div>
        ))}
      </div>
    </section>
  );
}
