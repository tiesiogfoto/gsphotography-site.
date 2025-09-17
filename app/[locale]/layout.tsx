// app/[locale]/layout.tsx
import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { unstable_setRequestLocale } from "next-intl/server"; // ⬅️ nauja eilutė
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title: "GSphotography",
  description: "Clean, timeless photography for brands and people.",
  icons: { icon: "/favicon.ico" },
  openGraph: {
    title: "GSphotography",
    description: "Clean, timeless photography for brands and people.",
    type: "website",
    images: [{ url: "/og-image.png" }]
  }
};

// ⬅️ pranešam Next'ui, kokias lokalės maršrutus statyti
export function generateStaticParams() {
  return [{ locale: "no" }, { locale: "en" }, { locale: "lt" }];
}

export default async function RootLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale); // ⬅️ nauja eilutė

  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch {
    notFound();
  }

  return (
    <html lang={locale}>
      <body className="font-body antialiased">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
