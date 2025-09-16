// app/contact/page.tsx
export const metadata = {
  title: "Contact – GSphotography",
  description:
    "Send en forespørsel – kontakt GSphotography for booking og priser.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="mb-6 text-4xl font-bold text-gray-100">Contact</h1>
      <p className="mb-8 text-gray-300">
        Har du spørsmål eller ønsker å booke en fotografering? Fyll ut skjemaet
        så svarer jeg så snart som mulig.
      </p>

      {/* FormSubmit – siunčia laišką į hello@gsphotography.no */}
      <form
        action="https://formsubmit.co/hello@gsphotography.no"
        method="POST"
        className="rounded-2xl bg-white/5 p-6 shadow-lg ring-1 ring-white/10 backdrop-blur"
      >
        {/* --- FormSubmit nustatymai --- */}
        {/* po sėkmės – peradresuos į /contact/thanks */}
        <input type="hidden" name="_next" value="/contact/thanks" />
        {/* uždraudžiam captcha, jei nenori – ištrink šią eilutę */}
        <input type="hidden" name="_captcha" value="false" />
        {/* temos eilutė laiške */}
        <input type="hidden" name="_subject" value="Ny melding fra GSphotography.no" />
        {/* anti-spam honeypot (nematomam laukui nekeisk pavadinimo) */}
        <input type="text" name="_honey" className="hidden" />

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-200">
              Navn
            </label>
            <input
              type="text"
              name="name"
              required
              className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-gray-100 outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-emerald-400"
              placeholder="Ditt navn"
            />
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-200">
              E-post
            </label>
            <input
              type="email"
              name="email"
              required
              className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-gray-100 outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-emerald-400"
              placeholder="din@email.no"
            />
          </div>
        </div>

        <div className="mt-5">
          <label className="mb-2 block text-sm font-medium text-gray-200">
            Melding
          </label>
          <textarea
            name="message"
            required
            rows={6}
            className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-gray-100 outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-emerald-400"
            placeholder="Skriv meldingen her…"
          />
        </div>

        <button
          type="submit"
          className="mt-6 inline-flex items-center rounded-lg bg-emerald-500 px-5 py-2.5 font-semibold text-white hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-400"
        >
          Send
        </button>

        {/* Alternatyvūs kontaktai */}
        <div className="mt-6 text-sm text-gray-400">
          Eller skriv til:{" "}
          <a
            href="mailto:hello@gsphotography.no"
            className="font-medium text-gray-200 underline-offset-4 hover:underline"
          >
            hello@gsphotography.no
          </a>{" "}
          · ring:{" "}
          <a
            href="tel:+4746262381"
            className="font-medium text-gray-200 underline-offset-4 hover:underline"
          >
            46 26 23 81
          </a>
        </div>
      </form>

      <p className="mt-4 text-xs text-gray-500">
        Ved å sende skjemaet samtykker du i at informasjonen behandles for å
        svare på henvendelsen.
      </p>
    </div>
  );
}

