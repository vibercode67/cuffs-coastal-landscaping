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
- Whether design consultations are free or charged: unknown — use
  [DESIGN_CONSULTATION_FEE] placeholder in the FAQ
- Hours: available all the time, call to inquire
- In business 3+ years, client base of 50+
- Quote process: free on-site quote, reply within 24 hours
- Crew of 1–3 people, local, owner-operator has lived in Victoria 6+ years,
  went to UVic
- Fully insured
- Photos: originals live in `./photos` (not yet provided as of project start);
  compressed/resized copies go in `./images`

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
   on GitHub Pages.
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
- Clean, simple design: restrained colour palette, one or two fonts max,
  system fonts preferred.

## Site structure (single page)

Header (logo + phone + "Get a Free Quote" button, no dropdown nav) →
Hero (headline, CTA buttons, trust line, hero photo placeholder) →
Why Choose Us (3 value-prop cards) → Reviews (placeholder until Google
reviews exist) → Recent Projects (photo gallery) → What We Do (services,
collapsed into <details> accordions — deliberately de-emphasized, not
the main focus of the page) → About (text + stats grid) → FAQ
(<details> accordions) → Service Area (map) → Contact → Footer (with
quick-link nav, since the header itself has no nav links).

No fake star ratings, testimonials, or review counts anywhere on the
page — the Reviews section stays a plain placeholder until the Google
Business Profile actually has reviews to link to.
