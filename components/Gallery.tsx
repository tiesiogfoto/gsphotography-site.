type Item = { src: string; title?: string; category?: string };

const items: Item[] = Array.from({length: 9}, (_, i) => ({
  src: `/samples/${i+1}.jpg`,
  title: `Sample ${i+1}`,
  category: i % 3 === 0 ? 'Products' : i % 3 === 1 ? 'Portraits' : 'Architecture'
}));

export default function Gallery() {
  return (
    <section className="container-padded mt-12">
      <div className="flex items-baseline justify-between">
        <h2 className="text-2xl md:text-3xl font-semibold">Selected work</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
        {items.map((it, idx) => (
          <figure key={idx} className="group rounded-2xl overflow-hidden ring-1 ring-white/10">
            <img src={it.src} alt={it.title || ''} className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300" />
            <figcaption className="p-3 text-sm text-white/70 flex items-center justify-between">
              <span>{it.title}</span>
              <span className="text-white/40">{it.category}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
