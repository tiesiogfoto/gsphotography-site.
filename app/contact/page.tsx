export const metadata = { title: 'Contact – GSphotography' };

export default function ContactPage() {
  return (
    <section className="container-padded mt-12 max-w-xl">
      <h1 className="text-3xl md:text-4xl font-semibold">Contact</h1>
      <p className="text-white/70 mt-3">
        Ready to discuss a shoot? Send an email and I’ll get back to you.
      </p>
      <div className="mt-6 flex flex-col gap-3">
        <a
          className="rounded-2xl px-5 py-3 bg-white text-black font-medium text-center hover:opacity-90 transition"
          href="mailto:hello@gsphotography.no?subject=Project%20inquiry"
        >
          Email hello@gsphotography.no
        </a>
        <p className="text-white/50 text-sm">
          Don’t have the domain yet? Use your current email and update this link later in <code>app/contact/page.tsx</code>.
        </p>
      </div>
    </section>
  );
}
