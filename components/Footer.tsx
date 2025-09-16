import LanguageSwitcher from "./LanguageSwitcher";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-white/10">
      <div className="mx-auto max-w-6xl px-4 py-10 text-center text-sm text-white/70">
        {/* Kalbų perjungiklis apačioje – ryškiai matomas */}
        <div className="mb-6">
          <LanguageSwitcher size="md" position="footer" />
        </div>

        <p>© {new Date().getFullYear()} GSphotography. All rights reserved.</p>
        <p className="mt-1">Aust-Torpa, Norway</p>
      </div>
    </footer>
  );
}
