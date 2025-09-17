"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

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
  const seg = pathname.split("/").filter(Boolean);

  // 🔧 default -> 'no' (sutampa su middleware defaultLocale)
  const current =
    seg.length > 0 && ["no", "en", "lt"].includes(seg[0])
      ? (seg[0] as "no" | "en" | "lt")
      : "no";

  const makeHref = (target: string) => {
    const parts = pathname.split("/").filter(Boolean);
    if (parts.length === 0) return `/${target}`;
    if (["no", "en", "lt"].includes(parts[0])) {
      parts[0] = target;
      return "/" + parts.join("/");
    }
    return `/${target}`;
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
            aria-current={active ? "page" : undefined}
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
