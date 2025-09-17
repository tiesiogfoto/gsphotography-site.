// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";

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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}

