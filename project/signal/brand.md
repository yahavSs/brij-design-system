# Brij Signal — product brand

Brij Signal is Brij's product: **signal intelligence for reputation**. An AI-native, agentic operating system for strategic decision-making. Positioning line: **The Operating System for Reputation.**

This identity was extracted from the product's live design system (`zentix-interface-1` @ `design/rebrand`, `shared/frontend/src/styles/design-system.css`). Any Brij Signal artifact built outside the product repo (page, deck, one-pager, mock) must use these values so it looks identical to the product.

*(Brij Signal is the rebrand of the product formerly called Zentx / Zentix. The old Zentx identity — Poppins, Z-mark, "Above The Noise" — is retired. Never use it.)*

## When to use this identity

- **Signal-native work** (product UI mocks, Signal-owned marketing, a page or deck about the product): use this file. Surface, type, and tokens come from here.
- **Brij-led work that features Signal** (Brij investor deck mentioning the product, the brij.ai product section): stay in the parent Brij brand (`README.md`, `colors_and_type.css`). Signal appears as a named product, in type.

## Surfaces

- **Page**: sage greige `hsl(75 9% 93%)`. Not cream (that's parent Brij), not white.
- **Panels / cards**: pure white, floating on the sage page with ink-tinted two-layer shadows. Surfaces read as floating, not outlined.
- **Dark mode**: soft cool charcoal `hsl(222 28% 10%)`, never pure black. Cards lift to 14%. Full token set in `signal.css`.

## Type

- **Plus Jakarta Sans** carries everything: UI, body, labels, numerals, code.
- **Arbutus Slab** (weight 400 only) is the display face: main headings, hero moments, large metric numbers.
- **Heebo** is the Hebrew fallthrough (the Latin faces carry no Hebrew).
- Product name is always set in type: "Brij Signal", sentence case, no special lockup.

```html
<link href="https://fonts.googleapis.com/css2?family=Arbutus+Slab&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Heebo:wght@300;400;500;600;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="signal.css" />
```

## Color rules

- **Navy ink `#1A2540`** is the primary: text, primary buttons, active states. It replaces parent-Brij's near-black t1.
- **Orange `#F3C06A`** is the single earned accent: at most one appearance per view. It's also the focus ring.
- **The brand gradient** (sun `#F3C06A` → leaf `#D8E094` → sky `#98C6E7`) is the ONLY place green and blue exist. Never as solid fills. Gradient use is earned, not decorative: active indicators, a focused card's top hairline, a loading beam.
- **Status**: destructive `#BB3325`, success `#3D7E2C`, warning `#E0A83E`, info `#2563EB`. Compose tints with alpha (`hsl(var(--success) / 0.1)`), never separate bg tokens.
- **Charts**: the ten-step "Brij Bloom" palette in `signal.css` (`--chart-1..10`). Same hues in light and dark; it encodes data identity, not UI state.
- **Sentiment**: positive green, negative red, neutral grey (never black).

## Logo

Brij Signal has its **own product mark** — a distinct angular mark (canonical source: the "Brij Design System" Claude Design project, `assets/logos/brij-signal-*.svg`). Files in `signal/assets/`:

| File | Use |
|---|---|
| `brij-signal-mark-ink.svg` | The Signal mark in navy `#172542` — on light surfaces (sage page, white card) |
| `brij-signal-mark-gradient.svg` | The Signal mark in the Signal gradient `#DDE782 → #7DC0F0` (green → blue, no orange) — on ink / dark surfaces |
| `brij-logo-black.svg` / `brij-logo-white.svg` | Parent Brij full logo — co-brand contexts, "Powered by Brij" signoffs |
| `brij-arrow-black.svg` / `brij-arrow-white.svg` | Directional arrow glyph |
| `favicon.svg` | Product favicon |

The product name "Brij Signal" sits in type next to or under the mark, never baked into the SVG. The Signal gradient (`#DDE782 → #7DC0F0`) belongs to the mark only — it is not the parent brand gradient and is never used as a surface fill.

## Shape and depth

- Radius scale: 2 / 4 / 8 / 12 / 16 / 24 px (chips → badges → buttons → cards → dialogs → hero panels), pills at full.
- Shadows are always two-layer composites tinted with navy ink `rgb(26 37 64 / …)` in light mode. No pure-black shadows, no borders-as-elevation.
- Motion: 150/200/300ms, expo-out easing by default, spring only for playful accents.

## Voice

Same as parent Brij (see `README.md`): sentence case, declarative, first-person plural, no em-dashes, no banned phrases ("leverage", "unlock", "seamless", …). Product-specific vocabulary: signals, narratives, sources, the operating picture. Talk about what the product notices and surfaces, not features.
