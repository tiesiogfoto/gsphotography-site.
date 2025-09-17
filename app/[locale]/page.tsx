"use client";

import {useTranslations} from "next-intl";

export default function HomePage() {
  const t = useTranslations("home");

  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="text-4xl font-bold mb-6">{t("welcome")}</h1>
      <p className="text-lg text-gray-300">{t("intro")}</p>
    </main>
  );
}
