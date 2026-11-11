# Natural Grid website

React + Vite + TypeScript frontend for [naturalgrid.in](https://naturalgrid.in), statically prerendered at build time and deployed on Vercel.

## Architecture

- `index.html` & `src/main.tsx`: Vite client entrypoint (hydrates prerendered static HTML on matching routes).
- `src/entry-server.tsx` & `scripts/prerender.mjs`: Build-time SSR prerenderer producing per-route HTML, canonical links, Open Graph/Twitter metadata, and `dist/404.html` (`noindex`).
- `src/config/site.ts`: Centralized business details, contacts, services, district list, and Web3Forms/site URL configuration from environment variables.
- `src/pages/` & `src/components/`: Route pages and reusable UI sections (`Layout`, `SeoHead`, `PageHero`, `HeroVideo`, `SolarCalculator`, `ContactForm`, `GalleryGrid`, `GalleryModal`, `EnergySlider`, `TrustMarquee`).
- `src/utils/` & `src/hooks/`: Pure TypeScript calculation/phone/formatting/SEO helpers (`calculator.ts`, `phone.ts`, `formatters.ts`, `seo.ts`) and DOM hooks (`useScrollReveal.ts`, `useStickyHeader.ts`, `useScrollProgress.ts`, `useCounter.ts`, `useSheen.ts`, `useReducedMotion.ts`).
- `public/`: Static images (`public/images/`), favicons (`public/favicon/`), `robots.txt`, and `sitemap.xml`.

## Commands

Requires Node.js 22+ (native TypeScript stripping for tests).

```bash
npm install
npm run dev      # Start Vite dev server (http://localhost:3000)
npm test         # Run unit tests (node --test --experimental-strip-types)
npm run build    # Type-check, build client + SSR bundles, and prerender routes into dist/
npm run preview  # Preview dist/ locally
```

## Environment Variables

Copy `.env.example` to `.env` for local builds, and set the same variables in your Vercel project settings:

- `VITE_SITE_URL`: Canonical base URL (e.g. `https://naturalgrid.in`)
- `VITE_WEB3FORMS_ACCESS_KEY`: Web3Forms form submission key

## Adding Images

Keep source photos optimized before placing them in `public/images/`: export responsive WebP sizes (e.g. `800px` and `1600px`), wire both with `srcset`, and specify explicit `width` and `height` attributes to prevent layout shift. Because static assets are cached (`max-age=604800, immutable` in `vercel.json`), use a new filename when replacing an image.

## Security & Hosting (`vercel.json`)

- `cleanUrls: true` and `trailingSlash: false` serve prerendered HTML files (`dist/*.html`) at extensionless paths (`/about`, `/calculator`, etc.), permanently redirect legacy `*.html` URLs, and serve `dist/404.html` with `noindex` for missing routes.
- Content-Security-Policy restricts resources to same-origin plus Google Fonts, the Google Maps embed (`www.google.com`), and Web3Forms (`api.web3forms.com`). Update matching CSP directives in `vercel.json` before adding third-party embeds or scripts.
