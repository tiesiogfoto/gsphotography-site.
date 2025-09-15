
# GSphotography – Portfolio (Next.js + Tailwind)

A minimal, modern photography portfolio built with Next.js (App Router) and Tailwind CSS.
Optimized for quick deployment on Vercel.

## Quick start

1. **Install dependencies**
   ```bash
   npm install
   # or: pnpm install / yarn
   ```

2. **Run locally**
   ```bash
   npm run dev
   ```
   Visit http://localhost:3000

3. **Push to GitHub**
   - Create a new repository (e.g., `gsphotography`).
   - Commit & push this folder.

4. **Deploy on Vercel**
   - Import the GitHub repo in Vercel.
   - Framework preset: **Next.js** (detected automatically).
   - Build command: `next build` (default).
   - Output dir: `.next` (default).

5. **Connect a domain (optional)**
   - Add your domain in Vercel Project → Domains.
   - Update DNS (CNAME / A record) at your registrar.

## Content

- Replace placeholder images in `public/samples/` with your own JPEGs.
- Update texts:
  - `components/Hero.tsx`
  - `components/Gallery.tsx`
  - `app/about/page.tsx`
  - `app/contact/page.tsx` (update the mail link)

## Tech

- Next.js 14 (App Router)
- Tailwind CSS 3
- TypeScript enabled (loose)

## Notes

- The gallery is static for simplicity. You can later plug in a CMS (Notion, Sanity, etc.).
- If you want a contact form without email links, use a service like Formspree and
  replace the button in `app/contact/page.tsx` with their form snippet.
