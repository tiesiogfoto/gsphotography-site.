"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

/**
 * Paprastas kalbų perjungiklis su vėliavėlėmis.
 * Veikia su kelių prefiksu URL'e: /no, /en, /lt
 * Jei dabartinis kelias be prefikso, laikoma, kad tai EN ir sugeneruojami /no, /en, /lt.
 *
 * PASTABA: Jeigu dar nenaudoji /no /en /lt maršrutų, nuorodos vis tiek veiks
 * ir ves į atitinkamų kalbų pradžios puslapį (pvz., /no).
 */

type Props = {
  size?: "sm" | "md";
  position?: "header" | "footer";
};

const LOCALES = [
  { code: "no", label: "NO", flag: "🇳🇴" },
  { code: "en", label: "EN", flag: "🇬🇧" },
  { code: "lt", label: "LT", flag: "🇱🇹" },
];

export default function LanguageSwitcher({ size = "md", position = "header" }: Props) {
  const pathname = usePathname() || "/";
  // Bandome ištraukti lokalę iš pirmo URL segmente
  const seg = pathname.split("/").filter(Boolean);
  const current =
    seg.length > 0 && ["no", "en", "lt"].includes(seg[0]) ? (seg[0] as "no" | "en" | "lt") : "en";

  // Funkcija pakeisti tik 1-ą segmentą (locale), likusią kelio dalį palikti
  const makeHref = (target: string) => {
    const parts = pathname.split("/").filter(Boolean);
    if (parts.length === 0) return `/${target}`; // esame / -> /{target}
    if (["no", "en", "lt"].includes(parts[0])) {
      parts[0] = target;
      return "/" + parts.join("/");
    }
    return `/${target}`; // jei kelias be locale -> nukreipti į /{target}
  };

  const baseBtn =
    "inline-flex items-center gap-1 rounded-full transition shadow-sm hover:shadow px-3 py-1.5";
  const sizeCls = size === "sm" ? "text-sm" : "text-base";

  return (
    <nav
      aria-label="Language switcher"
      className={clsx(
        "flex items-center gap-2",
        position === "header" ? "justify-end" : "justify-center"
      )}
    >
      {LOCALES.map((loc) => {
        const active = loc.code === current;
        return (
          <Link
            key={loc.code}
            href={makeHref(loc.code)}
            className={clsx(
              baseBtn,
              sizeCls,
              active
                ? "bg-white/90 text-gray-900"
                : "bg-white/20 text-white hover:bg-white/30 backdrop-blur"
            )}
            prefetch={true}
          >
            <span className="text-xl leading-none" aria-hidden>
              {loc.flag}
            </span>
            <span className="font-semibold">{loc.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
