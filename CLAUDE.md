# Cuff's Coastal Landscaping — Website Project

This is a free/favor project: a static website for a friend's landscaping
business, and a learning project for the site owner (a web dev beginner).
Explanations should be kept simple as changes are made.

## Business facts (do not invent anything beyond this list)

- Name: Cuff's Coastal Landscaping
- Phone: +1 604 845 8999 (tap-to-call)
- Email: cufflandscaping@gmail.com
- Service areas: Greater Victoria area, including Victoria and Saanich
- Google Business Profile: created, awaiting Google verification — use
  [GOOGLE_BUSINESS_URL] placeholder for the reviews link/button until
  the real profile link is provided
- Payment methods accepted: e-transfer, cash, and cheques
- Hours: available all the time, call to inquire
- In business 3+ years, client base of 50+
- Quote process: free on-site quote, reply within 24 hours
- Crew of 1–3 people, local, owner-operator has lived in Victoria 6+ years,
  went to UVic
- Fully insured
- Photos: originals live in `./photos` (not yet provided as of project start);
  compressed/resized copies go in `./images`
- Gallery currently shows 4 stock photos (`images/gallery-*.jpg`), NOT
  real photos of this business's work — downloaded from Unsplash under
  the free Unsplash License (free for commercial use, no attribution
  required). The site owner explicitly approved using stock photos as
  placeholders, on the condition that they get swapped for real project
  photos eventually. The gallery caption says "stock photos" honestly;
  update/remove that caption as each one is replaced with a real photo.

### Services (core)
Regular lawn and garden maintenance; lawn mowing and edging; spring and
fall cleanups; leaf removal; hedge and shrub trimming; pruning; weeding;
mulching and bark mulch; garden bed installation and maintenance;
planting (flowers, shrubs, small trees); lawn aeration; overseeding;
dethatching; sod installation (small yards); fertilizing; power washing
(patios, driveways); gutter cleaning (if he does it); yard waste hauling;
seasonal planters and containers; moss control.

### Services (additional)
Paver patios; fencing repair; snow removal; holiday lighting installation.

## Hard rules for this project

1. **Never invent facts.** No fake testimonials, licence numbers, years in
   business, awards, prices, or service areas beyond what's listed above.
   If information is missing, use a visible placeholder like `[PHONE]` or
   `[EMAIL]` and list every placeholder at the end of any work summary.
2. **Static site only.** Plain HTML, CSS, and minimal vanilla JS. No
   frameworks, no build step, no npm dependencies. Must be hostable as-is
   on GitHub Pages. (Google Fonts via a `<link>` tag are fine — that's
   still just static HTML, no build step involved.)
3. **Mobile first.** Most visitors will be on phones.
4. **Tap-to-call required.** The phone number must be a `tel:` link. No
   contact form in v1 — use tap-to-call plus a `mailto:` link.
5. **No autonomous git push, deployment, or global package installs.**
   Always ask the user first before running `git push`, deploying
   anything, or installing global packages.

## Technical requirements

- Compress/resize photos from `./photos` to WebP, output to `./images`.
  Never overwrite originals. Add width/height attributes and real alt text.
- Lazy-load images below the fold.
- Proper `<title>`, meta description, and viewport tag.
- LocalBusiness JSON-LD schema using only real details above; placeholders
  for anything missing.
- Semantic HTML, readable contrast, no text baked into images.

## Design system

Modeled after a reference site the site owner liked (fonts/colors/layout
patterns only — never its made-up facts, stock photos, fake reviews, or
its contact form, which conflicts with rule 4 above).

- **Fonts** (Google Fonts, loaded via `<link>` in `<head>`):
  `DM Serif Display` for headings (with italic used for one accent word
  per heading, e.g. "Your <em>Favourite</em> Place"), `Manrope` for body
  text, `Space Mono` for small tracked-out uppercase labels (eyebrows,
  tags, stat labels).
- **Colors** (CSS variables in `styles.css`): cream `#f7f5f0` and tan
  `#eae5d9` for light sections, forest green `#1b3626` and near-black
  green `#121c16` for dark sections/footer, terracotta `#c27d38` as the
  one accent color (buttons, italic emphasis, numbers).
- **Components**: pill-shaped buttons (`border-radius: 999px`); a plain
  uppercase "eyebrow" label above each `<h2>` (e.g. "WHY CHOOSE US" in
  Space Mono, no numbering — the site owner didn't like the numbered
  "01 // ..." look); cards with a small mono tag pill; alternating
  light/dark section backgrounds for rhythm.
- The hero deliberately has no placeholder photo — it's a solid dark
  forest-green band with bold type instead, so it reads as an
  intentional choice rather than "missing image." Once a real hero
  photo exists, it can become a photo background with a dark overlay.

## Site structure (single page)

Header (logo + full "Cuff's Coastal Landscaping" title, one line +
phone + "Get a Free Quote" button + a hamburger menu button that opens
a dropdown of section links) → Hero (headline, CTA buttons, trust
badges) → Recent Projects (photo gallery — deliberately placed right
after the hero, per the site owner's request) → Why Choose Us (3
value-prop cards: reliable/timely, tailored plans, small dedicated
crew) → Reviews (placeholder until Google reviews exist) → What We Do
(services, collapsed into <details> accordions — deliberately
de-emphasized, not the main focus of the page; 5 categories: Lawn &
Garden Care, Cleanup & Seasonal Maintenance, Planting & Beds,
Additional Services, Winter Services) → About (text + stats grid) →
Service Area (map, zoomed to show the wider region — Saanich, Langford,
Colwood — not just downtown) → Contact → Footer (with quick-link nav
matching the header's hamburger menu).

There is no FAQ section — removed at the site owner's request in favor
of just calling.

No fake star ratings, testimonials, or review counts anywhere on the
page — the Reviews section stays a plain placeholder until the Google
Business Profile actually has reviews to link to.
