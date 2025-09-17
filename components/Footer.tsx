"use client";

import Link from "next/link";
import {useTranslations, useLocale} from "next-intl";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Footer() {
  const t = useTranslations("footer");
  const tNav = useTranslations("nav");
  const locale = useLocale();

  return (
    <footer className="border-t border-white/10 mt-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 py-6 px-4 text-sm text-gray-300">
        
        {/* Tekstas iš vertimų */}
        <p>© {new Date().getFullYear()} GSphotography. {t("rights")}</p>

        <div className="flex items-center gap-6">
          {/* Telefonas */}
          <a href="tel:+4746262381" className="hover:text-white">46 26 23 81</a>

          {/* Contact link */}
          <Link href={`/${locale}/contact`} className="hover:text-white">
            {tNav("contact")}
          </Link>

          {/* Email */}
          <a href="mailto:hello@gsphotography.no" className="hover:text-white">
            hello@gsphotography.no
          </a>

          {/* Kalbos perjungiklis */}
          <LanguageSwitcher position="footer" size="sm" />
        </div>
      </div>
    </footer>
  );
}

