# Review fixes: task list

Test command: `node --test` (from the repo root)

## Phase 0: Safety net
- [x] T0 Baseline screenshots of all 11 pages (1440 + 390 wide); characterization tests for `calculator.js`

## Phase 1: Refactors with no visual change (pixel-identical to baseline)
- [x] T1 Remove CSS rules no page can match
- [x] T2 Move inline scripts to `js/nav.js`, `js/calculator-page.js`, `js/contact-form.js`, `js/gallery.js`, `js/about-slider.js`
- [x] T3 Remove dead JS (unused calculator outputs + per-kW prices, stale selectors, gallery filter leftover)

### Checkpoint A: tests pass, screenshots identical, no console errors (passed)

## Phase 2: Bugs
- [x] T4 Phone numbers: accept +91 / 0 / spaced formats, store clean 10 digits (TDD, `js/phone.js`)
- [x] T5 Social links: Instagram, Facebook, LinkedIn, YouTube in top bar, footer, JSON-LD on all pages
- [x] T6 404 page: root-relative paths, no inline style

## Phase 3: Images
- [x] T7 Resized WebP photos with srcset + width/height, small logo, 1200x630 share image; drop originals, duplicate hero, raster favicon.svg

### Checkpoint B: tests pass, every page renders, page weight measured (passed: gallery 9.6 MB -> 0.9 MB, about 6.1 -> 0.9, home 5.7 -> 1.2)

## Phase 4: Accessibility and copy
- [x] T8 Gallery lightbox as `<dialog>`
- [x] T9 Calculator: aria-pressed, visible label as name, no fake 850 ms delay
- [x] T10 Contact form: errors linked with aria-describedby; privacy notice line
- [x] T11 Services dropdown: drop menu roles, add aria-expanded
- [x] T12 Heading order (service pages, footer) and contrast (brand names, placeholders)
- [x] T13 About page typos and cut-off heading

## Phase 5: Hosting
- [x] T14 `vercel.json` security headers + CSP + image caching; `.vercelignore`

### Checkpoint C: full e2e under real headers, zero CSP errors, code review (passed)
