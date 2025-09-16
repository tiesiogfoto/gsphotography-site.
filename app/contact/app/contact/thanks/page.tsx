// app/contact/thanks/page.tsx
export const metadata = {
  title: "Takk – GSphotography",
};

export default function ContactThanksPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-16 text-center">
      <h1 className="mb-4 text-4xl font-bold text-gray-100">Takk for meldingen!</h1>
      <p className="mb-8 text-gray-300">
        Jeg har mottatt henvendelsen din og svarer så snart som mulig.
      </p>
      <a
        href="/"
        className="inline-flex items-center rounded-lg bg-white/10 px-5 py-2.5 font-medium text-gray-100 ring-1 ring-white/15 hover:bg-white/20"
      >
        Tilbake til forsiden
      </a>
    </div>
  );
}
