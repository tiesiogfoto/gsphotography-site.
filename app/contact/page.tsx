"use client";

import { useState } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">(
    "idle"
  );

  // 1) Gauk savo Formspree formos ID (pvz., f/abcdxyz) iš formspree.io
  // 2) Pakeisk žemiau esantį URL į savo:
  const FORMSPREE_URL = "https://formspree.io/f/your-form-id";

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });

      if (res.ok) {
        setStatus("ok");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-10 space-y-8">
      <h1 className="text-4xl font-bold text-white">Contact</h1>

      {/* Kontaktų kortelė */}
      <div className="bg-white rounded-xl shadow p-6 space-y-3">
        <h2 className="text-xl font-semibold text-gray-900">GSphotography</h2>

        <p className="text-gray-700">
          <a
            href="tel:+4746262381"
            className="underline hover:no-underline font-medium"
            aria-label="Call GSphotography"
          >
            46 26 23 81
          </a>
        </p>

        <p className="text-gray-700">
          <a
            href="mailto:hello@gsphotography.no"
            className="underline hover:no-underline font-medium"
            aria-label="Email GSphotography"
          >
            hello@gsphotography.no
          </a>
        </p>
      </div>

      {/* Forma per Formspree */}
      <div className="bg-white rounded-xl shadow p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">
          Send us a message
        </h2>

        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <label className="block text-sm text-gray-700 mb-1">Name</label>
            <input
              name="name"
              type="text"
              required
              className="w-full border rounded px-4 py-2"
              placeholder="Your name"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-700 mb-1">Email</label>
            <input
              name="email"
              type="email"
              required
              className="w-full border rounded px-4 py-2"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-700 mb-1">Message</label>
            <textarea
              name="message"
              required
              rows={5}
              className="w-full border rounded px-4 py-2"
              placeholder="Write your message…"
            />
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            className="bg-black text-white px-6 py-2 rounded disabled:opacity-60"
          >
            {status === "sending" ? "Sending…" : "Send"}
          </button>

          {status === "ok" && (
            <p className="text-green-700 text-sm mt-2">
              Thank you! Your message has been sent.
            </p>
          )}
          {status === "error" && (
            <p className="text-red-700 text-sm mt-2">
              Something went wrong. Please try again, or email
              {" "}
              <a
                href="mailto:hello@gsphotography.no"
                className="underline"
              >
                hello@gsphotography.no
              </a>.
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
