// components/MobileQuickBar.tsx
export default function MobileQuickBar() {
  return (
    <div
      className="
        fixed bottom-0 left-0 right-0 z-50
        bg-black text-white
        py-3 text-center text-sm md:hidden
      "
      aria-label="Quick contacts"
    >
      <div className="flex justify-center gap-6">
        <a href="tel:+4746262381" className="hover:underline">
          46 26 23 81
        </a>
        <a href="mailto:hello@gsphotography.no" className="hover:underline">
          hello@gsphotography.no
        </a>
      </div>
    </div>
  );
}
