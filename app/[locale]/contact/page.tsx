"use client";
import { useTranslations } from "next-intl";

export default function ContactPage() {
  const t = useTranslations("contact");
  return (
    <section style={{ padding: 24 }}>
      <h1 style={{ fontSize: 28, marginBottom: 8 }}>{t("title")}</h1>
      <p style={{ marginBottom: 12 }}>{t("ready")}</p>
      <button style={{ padding: "8px 16px", border: "1px solid #000" }}>
        {t("send")}
      </button>
    </section>
  );
}
