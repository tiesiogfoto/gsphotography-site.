// components/Footer.tsx
export default function Footer() {
  return (
    <footer className="border-t border-white/10 mt-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 py-6 px-4 text-sm text-gray-300">
        <p>© {new Date().getFullYear()} GSphotography. All rights reserved.</p>

        <div className="flex items-center gap-6">
          <a href="tel:+4746262381" className="hover:text-white">46 26 23 81</a>
          <a href="/contact" className="hover:text-white">Contact</a>
          <a href="mailto:hello@gsphotography.no" className="hover:text-white">hello@gsphotography.no</a>
        </div>
      </div>
    </footer>
  );
}

