export default function ContactPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-4xl font-bold mb-8">Contact</h1>

      <p className="mb-6 text-lg text-gray-300">
        Ready to discuss a shoot? Fill out the form below and I’ll get back to you as soon as possible.
      </p>

      {/* Kontaktinė kortelė */}
      <div className="mb-10 rounded-lg bg-gray-900 p-6 shadow">
        <h2 className="font-semibold text-white mb-2">GSphotography</h2>
        
        {/* Telefono numeris kaip nuoroda */}
        <p className="text-gray-300">
          📞{" "}
          <a
            href="tel:+4746262381"
            className="hover:text-white hover:underline underline-offset-4"
            aria-label="Call 46 26 23 81"
          >
            46 26 23 81
          </a>
        </p>

        {/* El. paštas kaip nuoroda */}
        <p className="text-gray-300">
          ✉️{" "}
          <a
            href="mailto:hello@gsphotography.no"
            className="hover:text-white hover:underline underline-offset-4"
          >
            hello@gsphotography.no
          </a>
        </p>
      </div>

      {/* Forma su Formspree */}
      <form
        action="https://formspree.io/f/mblaenkb"
        method="POST"
        className="space-y-4"
      >
        <input
          type="text"
          name="name"
          placeholder="Name"
          required
          className="w-full rounded-md border border-gray-300 p-2 text-black"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          className="w-full rounded-md border border-gray-300 p-2 text-black"
        />
        <textarea
          name="message"
          placeholder="Message"
          required
          className="w-full rounded-md border border-gray-300 p-2 text-black"
        />
        <button
          type="submit"
          className="rounded-md bg-black px-6 py-2 text-white hover:bg-gray-800"
        >
          Send
        </button>
      </form>
    </main>
  );
}
