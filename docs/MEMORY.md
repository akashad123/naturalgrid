# Project Memory and Developer Handover

Last updated: Full-Bleed Overlapping How It Works Deck & Normal Scroll Complete

## Current Status
- **Current Phase:** Phase 5 — QA, Verification & Handover (Overlapping How It Works Deck & Normal Scroll Verified)
- **Overall Status:** Migration, UI/copy parity, landing hero cleanup, compact hero/floating button sizing, static zero-translate/zero-scale hover boxes with [`StaggerRollText`](file:///C:/Akash files/Proffesional/Freelance/naturalgrid-main/src/components/common/StaggerRollText.tsx) character-roll hover animation on both `'Get a Free Quote'` and `'Our Services'`, Who We Are badge removal, normal-scroll full-bleed dark-green `HowItWorksCarousel` overlapping 4-card deck (`src/components/home/HowItWorksCarousel.tsx`), Lenis smooth scroll jitter optimization, repository cleanup, dynamic OG/Twitter SEO, build-time SSR prerendering (`src/entry-server.tsx` + `scripts/prerender.mjs`), and Vercel clean-URL configuration are complete. On `/` only, `<TopBar />`, the header/drawer `Contact Now` button (`SiteHeader.tsx`), `.hero-eyebrow`, `.hero-trust`, `.hero-featurebar`, and `#about .hero-badge` (`Service-first solar, across Kerala`) are omitted while keeping inner-page `<TopBar />` + `Contact Now` and `/` lower-section/footer CTAs intact. Global Lenis smooth scrolling (`lenis@^1.3.27`) runs cleanly with `lerp: 0.08`, zero scroll-frame React re-renders, compositor-safe header/WhatsApp/marquee styles, and offscreen hero video pausing.

## Pages / Modules Completed
- `src/pages/HomePage.tsx`: Hero with background photo/video, `.hero-headline`, `.hero-headline-accent`, `.hero-text`, and `.hero-actions` (both `Get a Free Quote` and `Our Services` using `StaggerRollText` with static no-translate/no-scale button boxes), `#about` metrics & service links (with `Service-first solar, across Kerala` badge removed), normal-scroll full-bleed `<HowItWorksCarousel />`, `#projects`, `.features`, and 4-set brand marquee (`TrustMarquee.tsx`).
- `src/components/common/StaggerRollText.tsx`: Dynamic per-character vertical roll-in text component preserving flex whitespace (`white-space: pre`) and keeping button bounds fixed on hover.
- `src/components/home/HowItWorksCarousel.tsx`: Normal-scroll full-bleed dark-green `.how` section (`100%` viewport width, `min-height: calc(100svh - var(--header-h))`, centered `.how-inner`) with a CSS-grid overlapping 4-card deck (`Consultation & Survey`, `Design & Quote`, `Installation & Approvals`, `Service & AMC`): Step 01 starts `100%` visible, and each subsequent card glides in from the right *over* the previous card leaving only `var(--how-spine)` (`8.3333%` desktop) logo-only rails exposed on the left (`1/4` combined across Steps 01–03 and `3/4` `Service & AMC` at Step 04), with Prev/Next/step-dot/covered-rail/touch/keyboard navigation.
- `src/pages/AboutPage.tsx`: `.journey` (`About our journey` badge, KSS collaboration copy, CTA), `.stats-row` (`14`, `24h`, `24–48h`, `8+` with `useCounter` on numeric stats), `.process` (`How We Work` 5-step list), interactive 3-card `EnergySlider`, `.precision` (`Our Vision`), brand marquee.
- `src/pages/CalculatorPage.tsx`: Dedicated calculator page with live sync slider/input, residential/commercial mode, results pop animation, stale state dimming, and all 5 FAQ accordions.
- `src/pages/GalleryPage.tsx`: Grid of 6 project installations with native accessible `<dialog>` lightbox modal, keyboard navigation (Esc, ArrowLeft, ArrowRight), and clean `body.style.overflow` cleanup.
- `src/pages/service/ServiceInstallationPage.tsx`: Solar Power Plant Installation service details, 3 steps, system types, assessment, commissioning, FAQs.
- `src/pages/service/ServiceBatteryPage.tsx`: Battery Backup & Grid Systems service details, 3 steps, off-grid/hybrid features, FAQs.
- `src/pages/service/ServiceAmcPage.tsx`: Annual Maintenance Contracts (AMC) details, 3 steps, coverage list, commitment, FAQs.
- `src/pages/service/ServiceSubsidyPage.tsx`: Solar Subsidy & Net Metering details, 3 steps, factors, documents needed, FAQs.
- `src/pages/service/ServiceWaterHeaterPage.tsx`: Solar Water Heaters details, 3 steps, ETC/FPC collector types, FAQs.
- `src/pages/ContactPage.tsx`: Address, phone, email, WhatsApp, Web3Forms integration, exact `Naturalgrid` Google Maps embed (`siteConfig.address.googleMapsEmbedUrl`), and all 5 FAQs.
- `src/pages/NotFoundPage.tsx`: Branded 404 error page with return link and `<meta name="robots" content="noindex" />`.

## Key Implementation Map
- **Routes:**
  - `/` (Home)
  - `/about` (About Us)
  - `/calculator` (Solar Savings Calculator)
  - `/gallery` (Completed Projects)
  - `/service-installation` (Solar Power Plant Installation)
  - `/service-battery-backup` (Battery Backup & Hybrid Systems)
  - `/service-amc` (Annual Maintenance (AMC))
  - `/service-subsidy` (Solar Subsidy & Net Metering)
  - `/service-water-heater` (Solar Water Heaters)
  - `/contact` (Contact Us)
  - `*` (404 Not Found with `noindex`)
  - Backward compatibility redirects from all `*.html` paths to clean extensionless paths (`public/sitemap.xml` uses extensionless URLs).
- **Shared Components & Styles:**
  - `src/main.tsx` & `src/styles/index.css`: Imports `src/styles/tailwind-base.css` -> `src/styles/legacy.css` -> `lenis/dist/lenis.css` -> `src/styles/index.css` so Tailwind Preflight never overrides `legacy.css`, `html.lenis, html.lenis.lenis-smooth` disables native `scroll-behavior: smooth` easing conflicts, `.hero-btn` CTAs (`Get a Free Quote` / `Our Services`) render compactly (`182×39`/`133×39` desktop, `169×37`/`122×37` side-by-side mobile), `.float-btn` corner actions (WhatsApp/Call) render compactly (`38×38` desktop, `36×36` mobile), `.scroll-progress` updates via direct `scaleX` transforms without CSS transition lag, `.site-header.is-stuck` avoids sticky height/top/blur layout thrash, `.hero-btn--ghost`/`.menu-toggle` avoid blurring live hero video, `.float-btn--whatsapp::after` uses compositor-only `wa-pulse-gpu`, and `.trusted-track` / `[data-reveal]:not(.is-visible)` hint compositor promotion; `src/main.tsx` uses `hydrateRoot` when `data-ssr-route` matches `window.location.pathname` and `createRoot` otherwise.
  - `src/entry-server.tsx` & `scripts/prerender.mjs`: Build-time SSR renderer (`StaticRouter` + `SeoCollectorProvider`) outputting prerendered `dist/*.html` for all 10 public routes and `dist/404.html` (`noindex`).
  - `Layout`: Stitches `ScrollProgress`, `TopBar` (rendered on inner routes, omitted on `/` / `/index.html`), `SiteHeader` (flush at `top: 0` on `/` via `body:not(:has(.topbar))`, and omits `.contact-btn` / `.nav-contact` `Contact Now` CTA on `/`), `<Outlet />`, `FloatingActions`, `SiteFooter`, and runs `useScrollReveal(location.pathname)` + `useSmoothScroll(location.pathname)`.
  - `useSmoothScroll` (`src/hooks/useSmoothScroll.ts`), `useScrollProgress` (`src/hooks/useScrollProgress.ts`), `useCounter` (`src/hooks/useCounter.ts`): `Lenis` (`^1.3.27`) configured with exponential `lerp: 0.08` (replacing wheel-ratchet `duration`), `autoRaf: true`, `anchors: true`, `stopInertiaOnNavigate: true`, `respectReducedMotion: true`, `<dialog[open]>`/`overflow: hidden` scroll guard, and immediate scroll reset on route changes; `ScrollProgress` caches `ResizeObserver` `maxScroll` and writes `transform` directly; `useCounter` returns a `span` ref and updates `textContent` on integer ticks with zero React re-renders.
  - `SeoHead` & `src/utils/seo.ts`: Shared resolver and DOM/SSR updater for `<title>`, `description`, `keywords`, `og:*`, `twitter:*`, `canonical`, and `noindex`.
  - `PageHero`: Standard inner page hero banner with word-by-word rising title animation (`split-title` / `title-word`).
  - `SolarCalculator`: Pure logic calculation with dual-input synchronization.
  - `ContactForm`: Inline validated form with 10-digit phone normalization and Web3Forms submission.
  - `GalleryModal`: Native accessible `<dialog>` image viewer with keyboard navigation and cleanup.
  - `EnergySlider`: Interactive 3-card slider with background photo cross-fading.
  - `HeroVideo`: Background video switcher with poster fallback, reduced-motion guard, and `IntersectionObserver` (`rootMargin: "160px 0px"`) offscreen pause/resume so background video decode does not compete with scrolling lower sections.
- **Configuration & Utilities:**
  - `src/config/site.ts`: Centralized brand metadata, contacts, social links, ordered `services` array (with `title`, `shortTitle`, `footerTitle`), `districts` array, and exact Google Maps embed URL.
  - `src/hooks/useScrollReveal.ts`: Ken Burns hero drift, staggered `[data-reveal]` observer, and pointer-device `.has-sheen` card effect with `prefers-reduced-motion` guard.
  - `src/utils/calculator.ts`: Pure solar calculation logic.
  - `src/utils/phone.ts`: Indian phone normalizer.
  - `src/utils/formatters.ts`: INR currency and kW formatters.

## Confirmed Technical Decisions
- **Stack:** React 18 + Vite + TypeScript.
- **Styling:** Tailwind CSS mapped to existing tokens, strict `tailwind-base.css` -> `legacy.css` -> `index.css` cascade, and sharp edges (`border-radius: 0 !important`) per user global rule.
- **Animations:** Lenis (`^1.3.27`) smooth wheel & anchor scrolling (`useSmoothScroll`) plus native CSS transitions, keyframes, and IntersectionObserver hooks (`useScrollReveal`, `useStickyHeader`, `useScrollProgress`, `useSheen`, `useCounter`, `useReducedMotion`).
- **Form Submissions:** Direct client-side POST to Web3Forms API.
- **Hosting:** Vercel static deployment with `cleanUrls: true`, `trailingSlash: false`, strict Content-Security-Policy headers, and immutable asset cache headers in `vercel.json` (plus updated `.vercelignore` and `README.md`).

## Verification Performed
1. `npm test` (`node --test --experimental-strip-types`):
   - 25 / 25 tests passing (`tests/calculator.test.js`, `tests/phone.test.js`, `tests/react-utils.test.js` importing `src/utils/calculator.ts`, `src/utils/phone.ts`, `src/utils/formatters.ts`, and `src/utils/seo.ts`).
2. `npm run build` (`tsc && vite build && vite build --ssr ... && node scripts/prerender.mjs`):
   - Zero TypeScript, Vite, or React SSR warnings/errors.
   - Client bundle: `dist/index.html` 4.27 kB (gzip 1.51 kB), `dist/assets/index-DHrPde7y.css` 67.95 kB (gzip 14.05 kB), `dist/assets/index-DH0CSmbL.js` 293.56 kB (gzip 86.21 kB); SSR bundle `.prerender-ssr/entry-server.js` 180.17 kB (cleaned after prerendering 11 HTML files into `dist/`).
3. Headless Chrome (`vite preview --port 4174` & dev `3000`) audit:
   - Tested all 11 routes at `1440×900` (desktop) and `390×844` (mobile): 0 console errors, 0 console warnings (clean hydration), 0 page exceptions, 0 failed asset requests, `0px` horizontal overflow (`-15px` delta with vertical scrollbar on desktop, `0px` on mobile), sharp `0px` radius, single `<h1>` per route, `noindex` restricted to 404.
   - Verified normal-scroll full-bleed `HowItWorksCarousel` overlapping deck (`verify-how-deck.mjs`): `hasCurtainWrapper: false`, `howPosition: "relative"`, full `1425×816px` (`390×782px` mobile) dark-green edge-to-edge coverage (`projectsTop === howRect.bottom`, zero sticky overlap on scroll), Step 01 (`widthShare: 1`) -> Step 02 (`Design & Quote` `0.917` over Step 01 logo rail) -> Step 03 (`0.833`) -> Step 04 (`Service & AMC` exact `0.75` width share with Steps 01–03 logo rails consuming `1/4`), and covered rail click returning cleanly to `01 / 04`.
   - Verified both hero CTA buttons share static zero-translate/zero-scale hover behavior and `StaggerRollText` vertical character roll (`0px` border-radius, `transform: none` on hover): `.hero-btn--solid` (`Get a Free Quote`, `178.56×36.39px`) and `.hero-btn--ghost` (`Our Services`, `130.98×36.39px`), alongside compact `.float-btn` (`38×38px` desktop, `36×36px` mobile).
   - Verified `/` hero & header omit `.topbar`, `.site-header .contact-btn`, `.hero-eyebrow`, `.hero-trust`, and `.hero-featurebar` (both DOM and raw prerendered HTML), `.site-header` aligns at `top: 0px`, footer retains contacts on `/`, and `/about` retains `.topbar` and `.site-header .contact-btn`.
   - Verified Lenis (`1.3.27`) runtime initialization (`html.lenis`, wheel scroll -> sticky header activation `is-stuck`, `#about` smooth anchor jump, and immediate reset to `y=0` upon navigating to `/about`).
   - Verified raw prerendered HTTP responses (`/`, `/about.html`, `/calculator.html`, `/404.html`) contain expected SSR metadata/content before JS runs.
   - Verified calculator (`300` units -> `1.4` / `₹14,400` Residential; `2.9` / `₹28,800` Commercial), gallery lightbox open/next/close + overflow reset, about slider slide switch (`activeCardIdx: 1`) + stat refs (`["0","24h","24–48h","0+"]`), contact invalid phone validation message + map embed, and mobile drawer/submenu open & route-change close.

## Git State
- **Branch:** `master`
- **Previous Commit:** `bb603b8`
- **Remote Status:** Local Git repository only (no remote upstream configured yet).

## Next Exact Step
1. Configure a Git remote (`git remote add origin <url>`), push `master`, configure `VITE_SITE_URL` and `VITE_WEB3FORMS_ACCESS_KEY` in Vercel, and run one live Contact form submission smoke test on the deployed URL.
