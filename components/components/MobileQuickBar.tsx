"use client";

export default function MobileQuickBar() {
  // rodoma tik mobiliuose (md:hidden) ir prilimpa apačioje
  return (
    <div
      className="
        fixed bottom-0 left-0 right-0 z-50 md:hidden
        bg-white/95 backdrop-blur border-t
        [padding-bottom:env(safe-area-inset-bottom)]  /* iOS safe area */
      "
      role="region"
      aria-label="Quick contact actions"
    >
      <div className="max-w-6xl mx-auto px-4 py-3 grid grid-cols-2 gap-3">
        <a
          href="tel:+4746262381"
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white py-3 font-semibold"
          aria-label="Call GSphotography"
        >
          📞 Call
        </a>
        <a
          href="mailto:hello@gsphotography.no"
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-gray-900 hover:bg-gray-800 text-white py-3 font-semibold"
          aria-label="Email GSphotography"
        >
          ✉️ Email
        </a>
      </div>
    </div>
  );
}
