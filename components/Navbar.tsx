"use client";

import Link from "next/link";
import {useTranslations, useLocale} from "next-intl";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Navbar() {
  const t = useTranslations("nav");
  const locale = useLocale();

  return (
    <nav className="bg-white shadow-md p-4 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="text-xl font-bold text-gray-800">GSphotography</div>

        <div className="space-x-6 text-gray-700 font-medium flex items-center">
          {/* Naudojam locale prefiksą */}
          <Link href={`/${locale}`}>{t("home")}</Link>
          <Link href={`/${locale}/portfolio`}>{t("portfolio")}</Link>
          <Link href={`/${locale}/about`}>{t("about")}</Link>
          <Link href={`/${locale}/contact`}>{t("contact")}</Link>

          {/* Telefonas */}
          <a href="tel:+4746262381" className="text-gray-700 hover:underline">
            46 26 23 81
          </a>

          {/* El. paštas */}
          <Link href={`/${locale}/contact`} className="text-gray-700 hover:underline">
            hello@gsphotography.no
          </Link>

          {/* Kalbų perjungiklis */}
          <LanguageSwitcher />
        </div>
      </div>
    </nav>
  );
}
