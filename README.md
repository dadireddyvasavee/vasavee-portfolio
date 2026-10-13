# Vasavee Dadireddy | AI & Software Engineering Portfolio

A working, static React + TypeScript + Vite portfolio using Tailwind CSS v4. Bespoke graphite / warm-white / electric-lime editorial design, asymmetric selected-work grid, locally hosted fonts, custom CSS system motifs, keyboard-accessible architecture maps, responsive navigation and detailed case studies.

## Workspace inspection

Only the master Markdown brief was available in the supplied workspace. No existing repository, package manifest, resume PDF, GitHub URL or screenshots were present. This is a new standalone project; no existing application was overwritten. The entire brief was read. No access to a local VS Code workspace or remote repository is implied.

## Run locally

Use Node.js 22.12+ (Node 24 was used for validation) and npm. Extract the ZIP and open a terminal in the folder containing `package.json`.

```sh
npm ci
npm run dev
```

Open the local address printed by Vite. Stop with Ctrl+C. The site requires JavaScript; contact information is also available in the noscript fallback.

```sh
npm run typecheck
npm run lint
npm run build
npm run preview
```

`dist/` is the static deployment output. Preview is for local verification, not a production server. A prebuilt `dist/` is included for inspection; rebuild after changing content or publication settings.

## Tests

```sh
npx playwright install chromium
npm run build
npm test
```

The Playwright suite checks desktop and mobile Chromium: runtime errors, failed asset requests, all filters, all case studies, focus containment and restoration, Escape close, direct case-study links, history, skills, learning, earlier-build inventory, internship expansion, contact controls, navigation, 320/390/768/1440px overflow, reduced motion and axe accessibility scans.

```sh
npm run check
```

If using a preinstalled browser, set `PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH` to its executable. The test runner starts and stops the preview server itself. No external backend is needed. See `VALIDATION.md` for the checks actually executed, rather than treating the presence of tests as evidence they passed. Automated checks are not a substitute for assistive-technology and cross-browser review.

## Edit content

- `src/data/portfolio.ts`: identity, links, three projects, internship overview, skills, education, awards, scholarships, leadership, learning and all nine unverified earlier builds.
- `src/components/`: navigation, hero, project cards, case-study dialog, architecture maps, link states and section headings.
- `src/sections/`: main content sections.
- `src/styles/global.css`: design tokens, custom CSS, breakpoints, hover/focus states and reduced-motion rules. Tailwind v4 is integrated through its Vite plugin; `sr-only` is used for filter announcements.
- `public/favicon.svg`: typographic VD placeholder favicon, not a portrait or a claimed project asset.
- `scripts/seo.mjs`: publication-aware canonical, Open Graph URL, robots and sitemap generation.

### Personal links and resume

Replace `null` values in `links` with exact verified URLs. Comments mark `GITHUB_URL`, `LINKEDIN_URL` and `LEETCODE_URL`. Until supplied, the UI shows non-clickable “Pending” labels, not fake links or broken buttons.

Add your real final PDF to `public/resume.pdf`, then set:

```ts
resume: `${import.meta.env.BASE_URL}resume.pdf`
```

Set each project's `repo` and `demo` only to real public URLs. Missing links are stated in the case study. Email uses mailto; phone uses tel; Copy email reports clipboard success or an honest fallback. No fake contact form is included.

### Screenshots and photos

No real screenshots or portrait were supplied. Existing visuals are explicitly illustrative CSS motifs and architecture diagrams, not benchmark screenshots. To add genuine output, place optimized WebP/AVIF files in `src/assets/`, import them in the relevant component and use meaningful alt text, width/height and `loading="lazy"` below the fold. Never add internal company screenshots. Do not replace the hero with an AI-generated portrait presented as real.

### Case-study links

Detail views are native modal dialogs with hash links such as `#case-intelliquery`. They support direct entry, browser history, keyboard focus containment, Escape and close/back controls. This avoids server route rewrites. The site is a client-rendered static app, not an SSR application; case studies share the home document's social metadata.

## Deploy

1. Complete the publication checklist below.
2. Set `SITE_URL` in the hosting environment to your actual HTTPS address with a trailing slash. No domain is invented in this project.
3. For root hosting, leave `BASE_PATH` unset. For repository/subpath hosting, set `BASE_PATH` to the actual path, including leading and trailing slashes.
4. Build with `npm run build` and publish `dist/` to your static host. On a Git-connected host, use `npm ci && npm run build` as the build command and `dist` as the output directory.
5. Confirm favicon, fonts, all links, PDF download, contact behavior, mobile navigation and direct case-study links on the deployed address.

POSIX shell build:

```sh
SITE_URL="$YOUR_ACTUAL_HTTPS_ADDRESS" BASE_PATH="/" npm run build
```

PowerShell build:

```powershell
$env:SITE_URL = $YourActualHttpsAddress
$env:BASE_PATH = "/"
npm run build
```

The script deliberately blocks crawling in `robots.txt` and omits canonical/sitemap when `SITE_URL` is absent. This is a preview safeguard, not access control: the site is still public if uploaded. When supplied, the actual address is used to generate canonical, og:url, robots and sitemap. Environment settings must be exported or configured in the host; `.env.example` is documentation, not an automatically loaded Node configuration. Add a genuine Open Graph image later; none is fabricated.

For GitHub Pages, build with the real repository subpath and upload `dist/` using the platform's static-site workflow. For a root domain on any static host, use `/`. No server, API key or database is required.

## Content integrity and confidentiality

The brief is the supplied source, not independent verification. Project metrics are labeled “reported,” and their missing evaluation context is explained. F1 is not accuracy; mAP is not FPS; relative depth is not calibrated physical distance. No users, business impact, adoption, revenue, screenshots, repositories, testimonials or endorsements are invented. Lessons and problem framing are editorial interpretations of the described engineering, not new achievements.

The internship date is “Started June 2026,” with an explicit current-status confirmation note, rather than an invented end date. The public overview is sanitized. Detailed company corpus counts, internal evaluation values and implementation-specific model/retry settings are intentionally not included in the public bundle until disclosure permission is confirmed. Proposed GPT/Pattern Engine/Validation/Coverage/multi-agent extensions are not claimed as completed. See the separately delivered private publication checklist for every held item. Do not commit that checklist, the original brief or company artifacts to a public repository.

Scholarship amounts are omitted pending wording and permission. Learning is grouped into job simulations, cloud badges/learning and courses, not promoted to professional credentials. Earlier builds remain a collapsed verification queue with all nine names and only supplied descriptions. This is intentionally separate from selected work.

## Before publishing

- [ ] Verify name, email, public phone and Hyderabad location; decide whether to publish phone.
- [ ] Supply GitHub, LinkedIn and LeetCode URLs.
- [ ] Add final resume PDF and activate its real download link.
- [ ] Supply public repo/demo URLs for each primary project.
- [ ] Supply genuine project outputs and an optional real photo; check permission and alt text.
- [ ] Verify education period, current CGPA, graduation year and current coding count.
- [ ] Confirm internship current status/date range and permission for the public summary.
- [ ] Review separately held company metrics and architecture details with the appropriate disclosure owner.
- [ ] Confirm metric evaluation protocols: dataset, split, IoU definition, hardware and timing as applicable.
- [ ] Confirm exact hackathon/tech-fest names, placements and any team-count wording.
- [ ] Confirm scholarship names and whether Katalyst/Cadence references overlap; do not disclose amounts without permission.
- [ ] Confirm Design Head organization wording and Navigator event role.
- [ ] Verify credential titles, issuer, course vs badge vs simulation, completion dates and links.
- [ ] Verify all nine earlier projects before promoting any to a case study.
- [ ] Set actual SITE_URL / BASE_PATH; add real Open Graph image if desired.
- [ ] Re-run checks, test on the deployed host and perform keyboard/screen-reader and cross-browser review.

## Design and implementation notes

Manrope headings, DM Sans body and IBM Plex Mono labels are served locally through Fontsource, avoiding third-party font requests. The design uses thin borders, a restrained lime accent and system traces rather than generic blobs. Architecture is responsive HTML/CSS with SVG icon arrows, ordered workflow nodes and focus/hover descriptions. Native dialog handles focus containment; mobile navigation is a simple disclosure, not a fake modal. Motion is CSS-only and disabled under prefers-reduced-motion. There are no trackers, remote APIs, client secrets, analytics counters or backend dependencies.
