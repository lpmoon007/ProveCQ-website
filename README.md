# Prove — provecq.com

Production rebuild of **Prove** (brand) / **Commitment Quotient™** (methodology),
the people-decision system from Be Legendary. Behavioral proof of who will
deliver — before you promote, hire, or hand over the keys.

This repo is the production rebuild of the design-approved prototype in
[`/prototype`](./prototype), per the developer handoff
([`prototype/Claude Code Handoff.dc.html`](./prototype)).

## Stack

- **Next.js 15** (App Router) + **TypeScript**
- **Tailwind CSS 3** with the Prove design tokens (`tailwind.config.ts`)
- Fonts: **Space Grotesk** (display/numerals) + **Figtree** (body) via `next/font`
- Static-first: every marketing route prerenders; the Heatmap is a client island

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm run typecheck  # tsc --noEmit
```

## What's in this phase

This is **Phase 1** of the handoff build order (marketing site + Guides/SEO
layer). Shipped:

| Route | Source | Notes |
|-------|--------|-------|
| `/` | `Home.dc.html` | Full narrative home |
| `/how-it-works` | `HowItWorks.dc.html` | Snapshot / Validation / Decision + paper-vs-drive |
| `/eos` | `EOS.dc.html` | GWC Capacity wedge |
| `/certainty-gap` | `CertaintyGap.dc.html` | Manifesto |
| `/better-every-day` | `BetterEveryDay.dc.html` | Retention subscription |
| `/work-with-us` | `WorkWithUs.dc.html` | Prove Sprint / BED / Implementer |
| `/about` | `About.dc.html` | James Carter + the bench |
| `/contact` | `Contact.dc.html` | Booking + note form (mailto interim) |
| `/heatmap` | `Heatmap.dc.html` | **Interactive** CQ Heatmap demo |
| `/free-tools` | `FreeTools.dc.html` | Funnel hub |
| `/guides` | `Guides.dc.html` | SEO/GEO index |
| `/ethics` | `Ethics.dc.html` | What CQ is & isn't (fair-use) |

Plus `sitemap.xml`, `robots.txt`, Organization JSON-LD, and FPO→Prove redirects
(`next.config.mjs`).

## CQ scoring

The Commitment Quotient engine lives in [`lib/cq.ts`](./lib/cq.ts). Per the CQ
Technical Specification, weights and tier bands live in a **versioned scoring
profile** — never hard-coded at the call site. The current profile
`cq-core-2026-demo` v0.1.0 is **provisional** (weights 40/35/25 on the prototype's
0–10 display scale). Production uses a 0–100 trait + composite scale.

"Applied Grit" is the data-model trait name; "Grit" is display-only. Archetype /
percentile / norm-referenced claims are intentionally **disabled** until the
source item bank and archetype rules are recovered.

## Not yet built (later phases)

- Individual free-tool pages (Diagnostic, 4 AM Test, Hidden Gem, Get to Green)
  and the 25 guide articles — hub cards currently route to `/contact`.
- Auth + Postgres, the self-serve Get to Green account, the Prove engine
  (Snapshot/Validation/Decision), Better Every Day billing (Stripe), and the
  HubSpot CRM form wiring. See the handoff for the full roadmap.

## Design tokens

Warm near-black (`#14130E`) + signal-green (`#1F8B57`) + R/Y/G signal dots.
A disciplined "measurement/proof" sibling to belegendary.org — deliberately not
the old FPO cream/sage look. Full palette in `tailwind.config.ts`.
