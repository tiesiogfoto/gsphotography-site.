// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "GSphotography",
  description: "Clean, timeless photography for brands and people.",
  icons: { icon: "/favicon.ico" },
  openGraph: {
    title: "GSphotography",
    description: "Clean, timeless photography for brands and people.",
    type: "website",
    images: ["/og-image.png"], // paprasčiau: tik string, be objektų
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-body antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
