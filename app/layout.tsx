import './globals.css';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'GSphotography – Portfolio',
  description: 'Minimal, modern photography portfolio.',
  icons: { icon: '/favicon.ico' },
  openGraph: {
    title: 'GSphotography',
    description: 'Minimal, modern photography portfolio.',
    images: [{ url: '/og-image.png' }],
    type: 'website',
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
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
