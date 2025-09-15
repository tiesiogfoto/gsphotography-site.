export default function Footer() {
  return (
    <footer className="border-t border-white/10 mt-24">
      <div className="container-padded py-10 text-sm text-white/60 flex items-center justify-between">
        <p>© {new Date().getFullYear()} GSphotography. All rights reserved.</p>
        <p className="text-white/40">Aust-Torpa, Norway</p>
      </div>
    </footer>
  );
}
