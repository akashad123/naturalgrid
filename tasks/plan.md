# Implementation Plan: Review fixes (2026-10-25)

## Overview
Apply every finding from the 2026-10-25 code review: lead-losing phone bug,
image weight, social links, 404 styling, share image, accessibility, security
headers, dead code and copy fixes. Static site, no build step, deployed on Vercel.

## Architecture Decisions
- **Stay buildless.** No bundler or templating. Shared header/footer markup stays
  duplicated; shared *behaviour* moves to `js/nav.js` so it exists once.
- **All inline scripts move to `js/*.js`.** Removes duplication and lets the CSP
  use `script-src 'self'` with no `'unsafe-inline'`.
- **Pure logic in testable modules** (`js/calculator.js`, new `js/phone.js`),
  following the existing `window.NaturalGrid*` pattern. Tests use `node --test`
  (built in, no dependencies, no package.json so Vercel's static deploy is unchanged).
- **Images:** Pillow generates 800w and 1600w WebP for each photo, a 320px logo
  and a 1200x630 JPEG share image. Originals are removed from the tree (still in git history).
- **Lightbox uses native `<dialog>` + `showModal()`** for focus trap, Esc and inert background.
- **Headers in `vercel.json`;** `.vercelignore` keeps `tests/` and `tasks/` off the site.

## Task List
See `tasks/todo.md`.

## Verification harness (outside the repo, in the session scratchpad)
- Local static server that applies `vercel.json` headers and serves `404.html` like Vercel.
- Headless Chrome over CDP, reduced motion: full-page screenshots, console/CSP
  errors, failed requests, and scripted behaviour checks (form submit is stubbed,
  so no real enquiry is ever sent).
- Phase 1 refactors must produce pixel-identical screenshots against the baseline.

## Risks and Mitigations
| Risk | Impact | Mitigation |
|------|--------|------------|
| CSP blocks fonts, map or form on the live site | High | Run every page under the exact headers locally, require zero CSP errors; rollback = remove the header from `vercel.json` |
| Dead-CSS removal changes the look | Med | Pixel diff every page at desktop and mobile widths |
| Resized images look soft | Low | 1600w for full-screen use, visual check |

## Open Questions
- About page heading "Your solar plant deserves" is cut off. Completed as
  "Your solar plant deserves regular care"; owner to confirm wording.
- A full privacy policy page needs facts only the owner knows (retention, who
  reads enquiries). A factual one-line notice is added under the form now.
