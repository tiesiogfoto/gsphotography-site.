"use client";
import { useTranslations } from "next-intl";

export default function HomePage() {
  const t = useTranslations("home");
  return (
    <section style={{ padding: 24 }}>
      <h1 style={{ fontSize: 28, marginBottom: 8 }}>{t("welcome")}</h1>
      <p>{t("intro")}</p>
    </section>
  );
}
