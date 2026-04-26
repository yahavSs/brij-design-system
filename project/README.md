# Brij — Design System

> **Brij** is an **Intelligence Lab**. We guide organizations across the bridge of transformation — translating complex AI technology into focused, strategic solutions that deliver a decisive competitive advantage. Home lab, not a vendor. Tel Aviv.

This folder is the single source of truth for Brij's brand and visual language. Everything here derives from the canonical `brandbook.html` held in the `brij-brandbook` repo (see Sources below). If the token doesn't live here, it doesn't exist.

---

## Index

| File / folder             | What it is                                                                              |
| ------------------------- | --------------------------------------------------------------------------------------- |
| `README.md`               | This file — brand context, content + visual foundations, iconography.                   |
| `colors_and_type.css`     | Single source of truth for color, type, spacing, component primitives (CSS vars).       |
| `SKILL.md`                | Cross-compatible Agent Skill entry point for Claude Code etc.                            |
| `assets/`                 | Logos, marks, arrows, lines, gradient circle, logo motion video.                        |
| `fonts/`                  | Font loading notes (Plus Jakarta Sans + Arbutus Slab via Google Fonts — no local TTF).  |
| `preview/`                | One-card-per-concept HTML specimens registered to the Design System tab.                |
| `ui_kits/website/`        | JSX + index.html recreation of the `brij.ai` marketing website.                         |

---

## Sources

All canonical design decisions in this system come from:

- **`brij-brandbook/brandbook.html`** — the explicit, authored brand guidelines (tokens, type, logo, button variants, panel rules, manifesto). Treat this file as law.
- **`brij-brandbook/assets/*.svg`** — logo + mark variants (dark / gradient / color), pentagon arrows, gradient lines. Copied into `assets/`.
- **`brij-brandbook/src/components/**`** — working React implementation of the marketing site. Used for component structure/interaction, *not* for tokens — the site was mid-rebuild and uses different surface colors than the brandbook.
- **`uploads/`** — user-supplied logotype and icon variants (white + black, PNG + SVG).

> ⚠️ The React site under `brij-brandbook/src/` ships with a legacy **dark purple** theme (`--color-brij-accent: #8B5CF6`, Poppins, black backgrounds) that pre-dates the current brand. **The brandbook — cream surface, orange accent, Plus Jakarta Sans + Arbutus Slab — is the correct system.** The UI kit in this repo rebuilds the site against the brandbook.

---

## Products represented

Brij is currently one company, one surface:

1. **brij.ai — marketing website** (only live surface). Narrative landing page following the manifesto arc: chaos → recognition → clarity → Brij. See `ui_kits/website/`.
2. **Zentx** (product): AI-powered PR monitoring / crisis detection platform. Spun out of a client engagement with one of Israel's largest PR firms. No public product UI yet — not included in this system.
3. **Eldar Group sector partnership** (real estate). Engagement-first, product to follow. No UI.

---

## CONTENT FUNDAMENTALS

### Tone
Sharp, direct, bold. No filler. No hedging. **The manifesto is the north star** — every piece of copy should sound like it could belong inside it.

### Voice in practice
- **Declarative.** Sentences end. They don't trail.
- **First-person plural.** *"We guide."* *"We move with the current."* Never *"our team helps you leverage…"*.
- **Second person for the reader.** *"You get access to everything we develop."*
- **Sentence case everywhere.** Never Title Case Headlines. Arbutus Slab is never all-caps.
- **Bracket notation** for micro-labels: `[ Label ]`, `[ 02 — What We Do ]`. This is a signature.
- **One idea per sentence.** Short is brave. Length is a hedge.

### Anchor phrases (the brand lexicon)
- *Intelligence Lab.* — the tagline. Always with the period.
- *Time to brij.* — the CTA refrain. Lowercase verb. Always with the period.
- *Structured movement through change.*
- *Decisive competitive advantage.*
- *We are not a vendor. We are a home lab.*
- *We don't wait for things to settle. We move with the current.*

### Banned phrases (AI-agency slop — NEVER use)
- "Cutting-edge AI solutions"
- "Seamless integration"
- "Digital transformation journey"
- "Leverage"
- "Unlock" / "empower" / "supercharge"
- Passive voice. Hedging adverbs ("potentially", "arguably"). Filler adjectives.

### Emoji
**Never.** No emoji anywhere in product copy, web, slides, or UI. Icons carry feeling, not faces.

### Casing
- Sentence case for headlines, titles, buttons.
- ALL CAPS reserved for eyebrow tags (`HOW WE WORK`, tracking 0.12em, 11px). Always tracked.
- Tagline punctuation: `Intelligence Lab.` — the period is mandatory. Same for `Time to brij.`

### Examples of on-brand copy (lifted verbatim from brandbook)

> The era of intelligence has arrived, and with it, a new kind of chaos. Entire industries reshaped by a single model release. And this is just the beginning.

> The current is growing stronger. The tide is rising higher. The advantage isn't jumping into the current with another generic solution. It's the ability to adapt to its changing rhythm with sharpness and creativity.

> That's what brij enables — structured movement through change, and a clear path across the bridge.

---

## VISUAL FOUNDATIONS

### Feel in one line
**Light, clean, clinical — with warmth.** White dominates. Warmth comes from cream + sage + a single gradient. Never grey. Never dark (except the pentagon mark and the footer).

### Color
- **Primary surface:** `--brij-white` `#FFFFFF`. The page should feel open and bright.
- **Page / card:** `--brij-cream` `#FAF9F4`. Cream replaces white whenever white would feel too clinical.
- **Panels:** `--brij-sage` `#EBEDE7` at **10% opacity** (`rgba(235,237,231,0.1)`) over cream. Intentionally barely-there.
- **Ink:** `--brij-ink` `#181B18`. Headlines, dark surfaces, the mark fill. Warmer than pure black.
- **Text ramp:** `--brij-t1` `#181B18` · `--brij-t2` `#6B6B63` · `--brij-t3` `#A3A39B`. Three steps. No in-between.
- **Orange:** `--brij-orange` `#FFCE65` is the **only standalone accent**. Use it at most once per section — active tabs, badge highlights, selection. Gradient buttons are the only exception.
- **Green `#D8E094` + Blue `#98C6E7`** exist **only inside the gradient**. Never as solid fills.
- **The signature gradient:** `linear-gradient(135deg, #F3C06A, #D8E094, #98C6E7)`. Used on mark fills, gradient buttons, and the loading beam only — not as page backgrounds.

### Type
Two families only.

- **Plus Jakarta Sans** — primary (400 / 500 / 600 / 700 / 800). Headings, body, labels.
- **Arbutus Slab** — accent (400 only). Panel titles, buttons, badges, wordmark. Never body, never caps.

Only **five sizes** (Display 72/48/36 · Headline 48/36/30 · Title 24 · Body 18 · Label 13). No in-between values.

Body size is `18px` with tracking `0.02em` and line-height `1.4`. Labels are `13px` with tracking `0.08em` and color `--brij-t3`.

### Spacing
Rhythm is `4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96 / 120`. Panels always have `40px` interior padding. Cards + panels use `28px` radius (`--brij-panel-radius`). Buttons use a pill `52px` radius. Sections on the page are `120px` tall at top and bottom.

### Backgrounds
- The **page background is cream**. Nothing else.
- **No repeating patterns. No illustrations. No hand-drawn textures.**
- The only background animation is **animated gradient lines** (thin horizontal beams, `line-gradient.svg`) flowing slowly across the page, at low opacity.
- Dark surfaces are rare by policy: the dark-variant logo card + the footer + inside the pentagon mark. That's it.

### Effects — glass panels
Panels are the primary content container. Always:
- `background: rgba(235, 237, 231, 0.1)`
- `backdrop-filter: blur(4px)`
- `border-radius: 28px`
- `padding: 40px`
- Optional **blur-circle** inside: a 280px color disc with `filter: blur(60px)` and 30% opacity, positioned off-edge. Use orange (warm) or green (cool) only. Never a full gradient background.

### Effects — noise on marks
Every pentagon and every arrow uses an SVG `feTurbulence` (fractalNoise) filter composited at 15% opacity. This is **only on the marks / arrows, never on backgrounds or cards.** Frequencies: 3.09 large · 4.55 medium · 8.77 small · 3 octaves · overlay `rgba(99,99,99,0.15)`.

### Borders & dividers
One color: `--brij-border` `#E8E6E1`. Always `1px solid`. Used for card borders (rare), header bottom, table rows, vertical column dividers. **No rounded-corner + colored-left-border cards.**

### Shadows
**None.** The brand explicitly does not use shadows. Depth comes from backdrop blur, gradient halos, and warmth of surface — never from a drop shadow.

### Corner radii
Only three values:
- `28px` — panels, cards, dark logo card (21px when small).
- `52px` — pills / buttons.
- `4px` — inline code, micro-badges, swatches.

### Animation
- **Easing:** custom ease-out for smooth scroll (`Lenis`, `1 - 2^(-10t)`). For everything else: standard `ease-out`, 200–600ms.
- **Entrance:** `opacity 0→1` + `translateY(30px → 0)`, 600–800ms, staggered by 100–200ms. Viewport-triggered once.
- **Logo motion:** the brand's loading screen. Plays at **2× speed**, loops, muted. `assets/logo-motion.mp4`. This is the "bridge" — directional, structured, purposeful.
- **Gradient lines:** thin 2px beams flowing horizontally across the viewport at slow varying speeds (5–13s per pass). The page's ambient motion layer.
- **No bounces. No springy overshoot. No parallax gimmicks.**

### Hover / press states
- **Hover:** reduce opacity to `0.85`. Underline color → orange for links. Border color → ink for outline buttons. **No darkening, no glows, no lift.**
- **Press:** `transform: scale(0.98)`. That's it.
- **Focus:** 2px outline in orange, 2px offset. Must be visible.

### Transparency & blur
Only in two places:
1. The fixed header — `rgba(250, 249, 244, 0.85)` + `backdrop-filter: blur(12px)`.
2. Glass panels — see above.
Do not use blur to hide low-quality imagery or to fake depth.

### Imagery
- Team headshots: warm, natural, neutral backgrounds. Cropped to a 64px circle.
- Product dashboards: a single dark reference image exists (`dashboard-background-dark.png`) — **do not use** in new work; it belongs to the deprecated dark theme.
- **Avoid stock AI imagery.** No neural nets, no glowing brains, no robot hands. If you need a visual, use the **pentagon mark** or the **gradient** instead.

### Layout rules
- Fixed 64px header with backdrop blur + cream wash.
- Max content width **880px** for prose-heavy sections; up to **1120px** for full galleries.
- Horizontal padding scales: `20px` mobile → `48px` desktop.
- Eyebrow labels sit above titles with a **`_sec-num_` + `_sec-tag_`** pair (e.g. `01` in Arbutus Slab 13px + `FOUNDATION` caps 11px tracked).
- Pentagon badges (37px small) can sit in a vertical sidebar connected by a 1px line — that's the section-nav pattern.

### Things we never do (from the brandbook, enforced)
- Hardcode colors or fonts outside CSS variables.
- Use dark backgrounds, grey tones, or drop shadows.
- Use green or blue as standalone solid fills.
- Use orange more than once per section.
- Write passive, hedging, or filler copy.
- Use generic AI buzzwords.
- Add grid patterns or noise textures on backgrounds (noise is marks-only).
- Design something so clinical it loses its humanity.

---

## ICONOGRAPHY

### Approach
Brij's icon language is **minimal, purposeful, and mark-based**. The pentagon is the core visual atom — not decorative line icons.

### What's used
- **Pentagon mark** (`assets/mark-dark-*.svg`, `assets/mark-3colors.svg`, `assets/mark-gradient-md.svg`) — the primary icon. Three sizes (90 / 54 / 37 px), three fills (ink + white number · gradient · ink + orange number for active state). Carries numbers (01, 02…) in Arbutus Slab. Use as: numbered badges, section-nav markers, decorative anchors.
- **Pentagon arrow** (`assets/arrow-dark.svg`, `arrow-white.svg`, `arrow-gradient.svg`) — a diagonal arrow inside a pentagon, always with the noise texture. Used **inside every button** and as a link affordance. Never use a plain chevron or a lucide/heroicon arrow.
- **Gradient lines** (`assets/line-dark.svg`, `line-gradient.svg`, `line-border.svg`) — thin 2px animated beams, the site's ambient motion.
- **Gradient circle with noise** (`assets/gradient-circle-noise.svg`) — the decorative blur-halo inside panels, pre-baked.
- **Color circles** (`assets/color-circles.svg`) — the three gradient-stop swatches used in the Color section header.

### What is NOT used
- **No icon font.** No Font Awesome, no Material Icons, no Lucide, no Heroicons. The system is deliberately icon-sparse.
- **No emoji.** Anywhere.
- **No Unicode glyph icons** (no ➔, ★, ✓, etc.).
- **No hand-drawn / illustrated line icons.**

### If you need an icon that doesn't exist
The brand prefers **no icon** over a wrong one. In order of preference:
1. **Use a pentagon arrow** (if it's a link / CTA).
2. **Use a numbered pentagon badge** (if you'd otherwise list something — the number replaces the icon).
3. **Use a word** — a bracketed label like `[ Export ]` is more on-brand than an icon.
4. **Only if none of the above work**, substitute from **Lucide** (1.5px stroke, `#181B18`, squared-off terminals) and **flag the substitution to the design team** — Lucide is *not officially part of the system* and should not be used without sign-off.

### Logo variants

The brandbook defines **exactly 3 brand variants**. Every use must map to one of these three. Do not invent a fourth.

1. **Full logo** (mark + wordmark) — the brand named in full. Headers, footers, top of decks, anywhere identification matters. On cream or white. → `assets/brij-wordmark.svg`
2. **Mark · gradient** — standalone pentagon mark, gradient fill. On dark / ink backgrounds (deck intros, video bumpers, dark surfaces). → `assets/mark-gradient-md.svg`
3. **Mark · ink** — standalone pentagon mark, ink fill. On cream or white (decorative anchor, section badge, contact CTA at low opacity). → `assets/mark-dark-md.svg` (use `-sm` / `-lg` for size only, same variant).

**Brand motion ident** — `assets/logo-motion.mp4`. The Full Logo in motion. Used at the top of decks, video bumpers, and the home page hero. Plays at 2× speed, looped, muted. Not a fourth variant.

#### Other files in `assets/` — NOT brand variants

These exist for size, reference, or are deprecated drafts. **Do not treat as brand variants. Do not pull from this list without checking with the design team first.**

- `mark-dark-sm.svg` / `mark-dark-lg.svg` — same variant as `mark-dark-md.svg`, different sizes (37 / 54 / 90 px).
- `logo-3variants.svg`, `mark-3colors.svg` — composite reference images showing all three variants side by side. Documentation only, never embed.
- `logotype-black.svg` / `logotype-white.svg` — wordmark only, no mark. Reserved for very tight contexts where the mark cannot fit. Treat as a special case, never a default.
- `logo-b-mark.svg`, `logo-c-mark.svg`, `logo-b-mark-gradient.svg`, `logo-b-mark.png`, `logotype-black.png`, `logotype-white.png` — early drafts and PNG fallbacks. Not part of the brand.

### Rules
- Mark always sits **left of the wordmark**.
- Wordmark text: **Arbutus Slab Regular, letter-spacing `7.37px`**.
- Light logo on cream/white; dark logo (inverted) on ink backgrounds only.
- The icon alone (pentagon mark at `3–4%` opacity) appears behind the Contact CTA block. This is its *only* decorative use at low opacity.

---

## Font substitution note

**Both fonts are loaded from Google Fonts — no local TTF files required.** The original brandbook uses the Google Fonts versions directly, so this is a match (not a substitution):

```html
<link href="https://fonts.googleapis.com/css2?family=Arbutus+Slab&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">
```

If you need to self-host, download from the same URLs and drop TTFs in `fonts/`.

---

## Caveats (things a designer should know before shipping)

- **Two competing themes exist in the source repo.** Always follow the brandbook (cream / orange / Plus Jakarta / Arbutus Slab). Ignore `src/styles/index.css` (dark / purple / Poppins).
- **No production product UI exists yet** — Zentx has no public surface. UI kit is website-only.
- **Icon library is intentionally empty.** If you find yourself reaching for a generic icon, reach for a pentagon mark or a word instead.
