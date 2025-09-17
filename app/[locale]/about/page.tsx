"use client";
import { useTranslations } from "next-intl";

export default function AboutPage() {
  const t = useTranslations("about");
  return (
    <section style={{ padding: 24 }}>
      <h1 style={{ fontSize: 28, marginBottom: 8 }}>{t("title")}</h1>
      <p>{t("body")}</p>
    </section>
  );
}
