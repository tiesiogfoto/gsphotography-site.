export default function Footer() {
  return (
    <footer className="border-t mt-12">
      <div className="max-w-6xl mx-auto p-6 text-sm text-gray-600 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
        {/* Brand / copyright */}
        <p>© {new Date().getFullYear()} GSphotography. All rights reserved.</p>

        {/* Contact links */}
        <div className="space-x-4">
          <a
            href="tel:+4746262381"
            className="text-blue-600 hover:underline"
          >
            📱 46 26 23 81
          </a>
          <a
            href="mailto:hello@gsphotography.no"
            className="text-blue-600 hover:underline"
          >
            ✉️ hello@gsphotography.no
          </a>
        </div>
      </div>
    </footer>
  );
}

