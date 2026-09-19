# Cuff's Coastal Landscaping — Website Project

This is a free/favor project: a static website for a friend's landscaping
business, and a learning project for the site owner (a web dev beginner).
Explanations should be kept simple as changes are made.

## Business facts (do not invent anything beyond this list)

- Name: Cuff's Coastal Landscaping
- Phone: +1 604 845 8999 (tap-to-call)
- Email: cufflandscaping@gmail.com
- Service areas: the Greater Victoria area, including Victoria, Saanich,
  Oak Bay, Gordon Head, and Esquimalt, BC (all confirmed by the site
  owner — Gordon Head is a neighbourhood within Saanich, mentioned by
  name at the site owner's request)
- Google Business Profile: https://maps.app.goo.gl/aHWSuG1cP7B1a3Hs6 —
  linked from the Reviews section button and the JSON-LD `sameAs`
  field. No reviews yet as of 2026-09-19 (the owner expects one or two
  soon), so the Reviews section says reviews "will show up there soon"
  rather than claiming any exist. Update that copy once real reviews
  are in — and never add fake ones.
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
  photos eventually. There is deliberately no visible "stock photo"
  label anymore (removed at the site owner's request) — each photo has
  a hover caption naming a service category (e.g. "Lawn Care", "Hedge
  Trimming") instead. Replace each photo file and its caption/alt text
  with the real thing as real project photos come in.
- Whether homeowners need to be home for the on-site quote, and the
  range of project sizes handled: the site owner asked Claude to write
  real answers for these two FAQ questions rather than leave them as
  placeholders (see the FAQ in index.html) — they're reasonable,
  generic, non-committal answers Claude wrote on request, not confirmed
  policy from the business owner. Worth double-checking with him.
- The "Do you charge for a design consultation?" FAQ question was
  removed entirely at the site owner's request (previously a
  [DESIGN_CONSULTATION_FEE] placeholder).
- Contact form backend: the quote form on the page needs a Formspree
  account (free tier) to actually deliver email, since GitHub Pages has
  no server of its own. [FORMSPREE_ENDPOINT] in the form's `action`
  attribute in index.html is a placeholder — the site owner needs to
  create a free account at formspree.io themselves (Claude can't create
  accounts) and provide the resulting form URL.

### Services (core)
Regular lawn and garden maintenance; lawn mowing and edging; spring and
fall cleanups; leaf removal; hedge and shrub trimming; pruning; weeding;
mulching and bark mulch; garden bed installation and maintenance;
planting (flowers, shrubs, small trees); lawn aeration; overseeding;
dethatching; sod installation (small yards); fertilizing; power washing
(patios, driveways); gutter cleaning (if he does it); yard waste hauling;
seasonal planters and containers; moss control.

(The site deliberately does NOT list lawn aeration, overseeding,
dethatching, or fertilizing — the owner asked for a more concise
services list. They're still services the business offers per the
original list above; they're just not shown on the page. Don't
re-add them without being asked.)

### Services (winter & additional)
Snow removal; holiday lighting installation; paver patios; fencing repair.
(One combined category on the site — "Winter & Additional Services" —
at the site owner's request, winter items listed first.)

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
4. **Tap-to-call required.** The phone number must be a `tel:` link, and
   it and a `mailto:` link must always be available. (Originally this
   rule banned any contact form — the site owner explicitly reversed
   that and asked for a quote form in addition to tap-to-call/email, so
   there's now also a form in the Contact section, backed by Formspree.)
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
  uppercase "eyebrow" label above each `<h2>` (e.g. "SERVICES" in
  Space Mono, no numbering — the site owner didn't like the numbered
  "01 // ..." look); alternating light/dark section backgrounds for
  rhythm.
- The hero deliberately has no placeholder photo — it's a solid dark
  forest-green band with bold type instead, so it reads as an
  intentional choice rather than "missing image." Once a real hero
  photo exists, it can become a photo background with a dark overlay.

## Site structure (single page)

Header (logo + full "Cuff's Coastal Landscaping" title, one line +
phone + "Get a Free Quote" button + a hamburger menu button, animated
open/close, that opens a dropdown of CENTERED section links — a
compact right-anchored card on desktop, a full-width bar on mobile) →
Hero (headline, CTA buttons, trust badges) → Recent Projects (photo
gallery, placed right after the hero; each photo has a hover-reveal
caption naming a service category) → Reviews (links to the Google
Business Profile; says reviews "will show up there soon" until real
ones exist) → Services (dark section; collapsed into <details>
accordions with a smooth animated open/close via script.js —
deliberately de-emphasized, not the page's main focus; 4 categories:
Lawn & Garden Care, Cleanup & Seasonal Maintenance, Planting & Beds,
Winter & Additional Services) → About
(text + a 3-tile stats row, plus a full-width dark "Fully insured"
tile — the owner wants insurance to be the loudest thing there) → FAQ (heading on the
left, animated <details> accordion list on the right, via the
`.split-layout` pattern — see below) → Contact (heading + call/email
buttons on the left, the quote form on the right, same
`.split-layout` pattern) → Footer (brand, phone/email, the "Serving
the Greater Victoria area, including ..." line, and a SMALL SQUARE
220px map beside it — the owner didn't like the map as its own big
section, and dropped the footer's quick-link list because the
hamburger menu already does that job).

The map uses plain lat/lng coordinates (48.45,-123.37, z=10), never a
text place name: a query like "Greater Victoria, BC" made Google drop a
stray business pin. Its box is the same size on every screen, so one
zoom level is enough (an earlier version needed three zoom levels
because the box changed size; that machinery was removed). If the map
box is ever resized, re-test the zoom against its real pixel size —
the same zoom shows very different areas in different-sized boxes.

The FAQ was removed once, then re-added at the site owner's request
with a different question set.

There is no "Why Choose Us" section anymore — the owner felt it just
repeated the About section, so it was removed (2026-09-19). Its one
useful idea lives on as a FAQ item ("Who will be working on my
property?"). Note that section had made a few claims that were never
actually confirmed by the owner (e.g. "no rotating subcontractors",
"we show up when we say we will") — don't reintroduce those.

### The `.split-layout` pattern (FAQ and Contact)

Both sections were originally a single centered column (heading, then
content, stacked) and were "too long" — a lot of vertical scrolling to
see very little at once. `.split-layout` is a reusable two-column grid
(`.split-heading` on the left, the actual content — `.faq-list` or
`.quote-form` — on the right) that only activates at 700px+; below
that it just stacks normally like everything else on mobile, since
there's no width to spare for two columns on a phone. The heading
column is `position: sticky` on desktop so it stays in view while the
(usually taller) content column scrolls past it. Apply this same
pattern to any future section that has a short heading paired with a
much longer content block.

No fake star ratings, testimonials, or review counts anywhere on the
page — the Reviews section stays a plain placeholder until the Google
Business Profile actually has reviews to link to.

## Known CSS gotcha (already fixed, but worth knowing)

`.section:nth-of-type(even)` (used for alternating light/tan section
backgrounds) has higher CSS specificity than a single class like
`.contact-dark` or `.services-dark`, because a `:nth-of-type` pseudo-
class counts the same as a class in specificity. A lone `.contact-dark
{ background: ... }` rule can silently lose to the alternating-
background rule if that section happens to land on an even position —
which is exactly what happened once (white text became unreadable on
an accidentally-light background). Both dark-section overrides are now
written as `.section.contact-dark` / `.section.services-dark` (two
classes combined) specifically to outrank the nth-of-type rule
regardless of section order. Follow that same pattern for any new
dark-background section added later.
