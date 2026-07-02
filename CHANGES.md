# Xpand AI — Rebrand of the "Stillpoint" template

Transformed the Stillpoint interior-design template into the Xpand AI landing page.
**Design system untouched** — no colors, type, spacing, animations, layout, or component
structure were changed. Only content, semantics, nav/CTA wiring, meta, and one new section.

Single conversion goal: **book a 20-minute call** (`#book-call`).

---

## Files touched

| File | Change |
|---|---|
| `app/layout.tsx` | Title, description, added OpenGraph + Twitter meta |
| `components/header.tsx` | Logo → "Xpand AI"; nav → Approach · Platform · Process · Contact (desktop + mobile) |
| `components/hero.tsx` | Eyebrow, H1, sub, primary/secondary CTA |
| `components/philosophy.tsx` | `id` → `approach`; eyebrow/H2/body; 3-stat row repurposed; image `alt` + `src` |
| `components/services.tsx` | `id` → `platform`; header; 4 cards rewritten; 4 icons swapped (same style) |
| `components/process.tsx` | 4 steps → 3 (Map/Build/Own) with week labels; sticky header rewritten |
| `components/product-proof.tsx` | **NEW** — clones the Approach image/text split; grey dashboard placeholder |
| `components/testimonial.tsx` | Fabricated testimonial → non-attributed pull-quote (sage band kept) |
| `components/contact.tsx` | Form removed; single booking CTA; `#book-call` anchor added |
| `components/footer.tsx` | Logo, tagline, nav, Connect links, legal line |
| `app/page.tsx` | Wired in `<ProductProof />` between Process and the pull-quote |
| `public/calm-workspace.jpg` | Renamed from `minimalist-japanese-interior-design-with-natural-w.jpg` |

New page order: Hero → Approach → Platform → Process → **Product Proof** → Pull-quote → Contact → Footer.

---

## Section-by-section before → after

### Meta (`app/layout.tsx`)
- **Title:** `Stillpoint Studio | Mindful Living Spaces` → `Xpand AI | Operations Platform for Advisory Firms`
- **Description:** interior-design copy → `One branded system that runs your intake, scoring, scheduling, and CRM — so your best prospects book fast and nothing leaks through the cracks.`
- Added OpenGraph + Twitter card tags (title/description/siteName). Removed the `generator: v0.app` tag.
- `viewport.themeColor` (`#f5f2ed`) left unchanged.

### Nav (`header.tsx`)
- Logo: `Stillpoint` → `Xpand AI`
- Links: `Philosophy/Services/Process/Contact` → `Approach/Platform/Process/Contact`
- Targets: `#philosophy → #approach`, `#services → #platform` (Process/Contact unchanged)

### Hero
- **Eyebrow:** `Interior Design Studio` → `Operations Platform for Advisory Firms`
- **H1:** `Spaces that / breathe` → `All your data. / Finally at your fingertips.` (green accent kept on the second line)
- **Sub:** Japanese-minimalism line → `One branded system that runs your intake, scoring, scheduling, and CRM — so your best prospects book fast and nothing leaks through the cracks.`
- **Primary CTA:** `Begin Your Journey → #contact` → `Book a 20-minute call → #book-call`
- **Secondary:** `Our Philosophy → #philosophy` → `See how it works → #platform`

### Approach (`philosophy.tsx`)
- `id="philosophy"` → `id="approach"`
- **Eyebrow:** `Our Philosophy` → `Our Approach`
- **H2:** `The art of intentional living` → `We build on top of what works`
- **Body:** no rip-and-replace; connect/complete the existing stack; one accountable partner. (Contains the page's single in-passing use of "AI".)
- **Stats:** `12 Years / 140+ Projects / 8 Awards` → `3–4 Weeks to live / 20+ Automations, one client / 2 Years, longest partnership`
- **Image:** `alt` neutralized ("A calm, uncluttered workspace"); file renamed to `/calm-workspace.jpg`

### Platform (`services.tsx`)
- `id="services"` → `id="platform"`
- **Eyebrow/H2:** `Our Services / What we offer` → `The Platform / What your firm gets`
- **Cards:** Residential Design / Spatial Planning / Material Curation / Light Design → **Intake & Scoring / Smart Scheduling / One Dashboard / Automated Back Office** (copy verbatim from the content map)
- **Icons:** swapped to fitting line icons (clipboard-check, calendar, dashboard grid, refresh) using the *same* `viewBox`, `strokeWidth={1}`, `w-8 h-8`, and sage color — no icon pack, no restyle.

### Process
- Reduced from **4 steps to 3**: `Listen / Envision / Craft / Dwell` → **Map (Week 1) / Build (Weeks 2–3) / Own (Week 4)**
- Added a small terracotta uppercase week label per step (reuses an existing text pattern).
- **Sticky header:** `A journey of intention` → `Live in four weeks`; intro rewritten to "three steps, one month, no disruption."

### Product Proof (NEW `product-proof.tsx`)
- Clones the Approach image/text split (same grid, aspect handling, IntersectionObserver reveal, terracotta corner accent). Layout mirrored (content left / image right) so the two split sections alternate.
- **H2:** `From six tools to one`
- **Body:** the anonymized DC-area advisory-firm story (verbatim from the content map).
- **Image slot:** grey block (`bg-stone/30`) at 16:10 with an on-block "Dashboard screenshot" label and a JSX comment marking where the real export drops in.

### Pull-quote (`testimonial.tsx`)
- Fabricated client testimonial ("Mari & Henrik Lindqvist") **removed** (guardrail: no fabricated testimonials).
- Sage full-bleed band **kept** and repurposed into a non-attributed positioning statement: *"Your best prospects should never wait behind your worst leads…"*, attributed to "The Xpand AI Principle" (brand voice, not a fake person).

### Contact
- **Contact form removed** — the call is the only action (per spec).
- **Eyebrow/H2:** `Contact / Ready to begin?` → `Contact / See your funnel clearly.`
- **Sub:** `20 minutes. We'll walk your current stack and show you exactly what one platform would replace.`
- Right column is now a booking-CTA card with `id="book-call"` (`scroll-mt-32`) — the future calendar embed lands here.
- Email `hello@stillpoint.studio` → `raunek@xpandai.com`; Location `Copenhagen & Stockholm` → `Los Angeles, CA`.

### Footer
- Logo `Stillpoint` → `Xpand AI`; tagline → "One branded operations platform for wealth-advisory firms."
- Nav relabeled/retargeted to match the header.
- Social (`Instagram / Pinterest / LinkedIn`) → `Connect` (`Book a call → #book-call`, `LinkedIn`) — dropped the off-brand interior-design socials.
- Legal line → `© <year> Xpand Technology LLC · Los Angeles, CA`; sub-line → "All rights reserved."

---

## Acceptance tests

- [x] **Build runs with zero errors** — `pnpm run build` compiles and prerenders 3 static routes. (Pre-existing `baseline-browser-mapping` dependency warnings are not introduced by this work.)
- [x] **No "Stillpoint / interior / design studio / spaces / hygge / ma" in user-facing strings** — grep clean. (`space-y-*`/`space-x-*` are Tailwind class names, not copy; the interior-named image file was renamed.)
- [x] **Nav links scroll to correct sections** — `#approach`, `#platform`, `#process`, `#contact` all present in rendered HTML.
- [x] **Every primary CTA → `#book-call`** — Hero + Contact + footer "Book a call" all point to `#book-call`; the anchor exists on the Contact booking card.
- [x] **Scroll animations unchanged** — every component keeps its original `useState`/`IntersectionObserver`/`delay-*` reveal logic verbatim.
- [x] **Mobile layout intact** — no grid/spacing/breakpoint classes changed; new section reuses the Approach responsive grid.
- [x] **Title + meta description + OG tags reflect Xpand AI** — verified in rendered `<head>`.
- [x] **Banned words = 0** (`AI-powered`, `orchestration`, `seamless`, `revolutionize`, `leverage`, `cutting-edge`, `supercharge`); **"AI" as a technology term appears exactly once**, in the Approach body. All other "AI" occurrences are the brand name "Xpand AI".

---

## Deviations from the prompt (with reasons)

1. **Git:** the folder was not a git repository, so "one commit per section" could not run as written. Per your approval, ran `git init` and committed a baseline plus one `content: <section>` commit per section. Rollback = revert the single commit.
2. **Testimonial section** (absent from the mapping table): per your approval, repurposed the sage band into a **non-attributed pull-quote** rather than removing it — preserves a key visual beat without fabricating a testimonial.
3. **Platform icons swapped:** the interior-design icons (house/room/materials/lamp) were replaced with topic-appropriate line icons. This is a *content* change within the existing icon slot — same size, stroke weight, viewBox, and color. No new icon library was added.
4. **Process week labels:** added a small terracotta uppercase label per step to surface "Week 1 / Weeks 2–3 / Week 4" (numbers are the animation on this page). It reuses an existing text style; no new design token.
5. **Image asset renamed** `minimalist-japanese-interior-design-with-natural-w.jpg` → `calm-workspace.jpg` and `alt` neutralized, so the served URL and accessibility text pass the "interior/design" grep. The photo itself (calm, minimal) was kept as texture and fits the "quiet money" aesthetic; no new stock imagery introduced.
6. **Hero "See how it works"** points to `#platform` (the first "what you get" section) rather than a dedicated how-it-works anchor.
7. **Contact email/location** set to `raunek@xpandai.com` / `Los Angeles, CA` (not specified in the prompt; derived from the founder/legal line).

## Follow-ups (not done — need your input/assets)
- Drop the real dashboard screenshot into the Product Proof slot (16:10) — placeholder is clearly marked.
- Wire the calendar embed into the `#book-call` card in Contact.
- Real LinkedIn URL in the footer (currently `#`).
- `@vercel/analytics` is still present from the template (`app/layout.tsx`). Left as-is; the guardrail was about not *adding* tracking. Remove if you want zero analytics.
