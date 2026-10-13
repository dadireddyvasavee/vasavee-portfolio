# Validation report

Validated on 13 October 2026 in the supplied Linux environment with Node 24.16.0 and npm 11.19.1. Source and tests were checked after the final content edits.

## Passed

- TypeScript strict checking: application, Vite config, Playwright config and test source.
- ESLint: no errors or warnings in delivered source.
- Production build: Vite 7.3.7 with React, TypeScript and Tailwind CSS v4; successful optimized static output.
- Playwright: **20 passed**, 10 scenarios each on desktop Chromium and mobile-emulated Chromium.
- Runtime and asset checks: no page errors, console errors or HTTP asset failures during the home-load checks.
- All three project case studies, filters, Escape close, focus containment/restoration, direct hash links and browser history.
- Nine skill groups, all nine earlier-build entries, learning disclosure and internship expansion.
- Email/phone targets, pending-link states and clipboard status behavior.
- Mobile navigation and desktop anchors.
- No horizontal page or case-dialog overflow at 320, 390, 768 and 1440px in the tested layouts.
- Reduced-motion behavior.
- Axe WCAG 2 A/AA and 2.1 AA scans: zero detected violations on home and IntelliQuery detail in both browser profiles.
- Publication SEO fixture: canonical, sitemap and robots generation with an explicitly synthetic test-only address. No fixture URL is included in the shipped build.
- Preview build has no fabricated canonical/domain; robots disallows crawling and a noindex meta tag is present.

## Output size

Main JavaScript: approximately 264 kB uncompressed / 83 kB gzip. Main CSS: approximately 44 kB uncompressed / 12 kB gzip. Fonts are served locally. These are build artifact sizes, not Lighthouse scores or performance guarantees.

## Not claimed / still required

- No existing repository was supplied, so this standalone build is not an edit to your local or remote project.
- No public deployment was performed and no personal profile URL, resume PDF, project demo, repository link or genuine project screenshot was supplied.
- No independent verification or reproduction of the portfolio's project benchmarks, awards or credentials was performed.
- No Lighthouse score, Safari/Firefox test, real-device test, manual screen-reader audit or production-host test is claimed.
- Company-specific metrics/configuration are held for disclosure review in the separately delivered private checklist.
- Font licenses are included in public/licenses and the static build.

## Reproduce

```sh
npm ci
npx playwright install chromium
npm run check
```

The browser used here was the preinstalled Chromium executable via PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH. Users with a normal Playwright install do not need that setting. See README for deployment and content-editing instructions.
