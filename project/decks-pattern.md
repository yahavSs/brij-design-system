# HTML Pitch Decks — Brij Pattern

A canonical multi-slide HTML deck pattern, validated on the Zentx · Enlight pitch deck (May 2026, pre-rebrand: the product is now Brij Signal). Read this **before** building any multi-slide deck, product co-brand deck, or bilingual Hebrew/English presentation. The canonical clone source for client-facing decks is `templates/client-deck-template.html` (dark identity, mobile-responsive); internal briefs clone `templates/internal-brief-template.html`. The older `templates/deck-template.html` stays as a working legacy reference for the co-brand patterns documented below: copy its patterns, but start new decks from the canonical templates.

---

## When this pattern applies

- **Pitch decks** with 10–20 slides, navigated by keyboard / click, exportable to PDF.
- **Product co-brand decks** (Brij + product like Brij Signal, Eldar) — product is primary, Brij is "Powered by".
- **Bilingual Hebrew/English decks** — long messages stay in Hebrew, short labels/titles in English.
- **Always white surface, not cream.** This is the one deliberate exception to the brand's cream-default. Product co-brand decks read more clinical and tech-forward on pure white.

If the artifact is a single slide, a poster, a one-pager, or a section on brij.ai — this is the wrong pattern. Use the standard brand rules from `README.md` instead.

---

## Client vs internal: two templates

- **Client-facing** (anything a client will see): clone `templates/client-deck-template.html`. Dark identity, the Ifat-deck visual language, mobile-responsive.
- **Internal brief**: clone `templates/internal-brief-template.html`. The Signal light language: sage greige ground, white floating panels, navy ink, the brand gradient wash. A scrolling document rather than a slide deck.

The rule: **light means internal, dark means client**, so anyone can tell at a glance which kind of artifact they are holding. Never mix the two in one artifact. The white-surface co-brand rules in this doc describe the legacy `deck-template.html` pattern; when cloning the canonical client template, its dark surface wins.

---

## The seven non-negotiables

These were earned through user feedback on the Zentx deck. Do not relitigate them per deck.

1. **White surface.** Pure `#ffffff`, not cream. No grid, no noise, no texture.
2. **Decoration = gradient hairlines only.** No halos, no panels, no blur-circles. The Brij gradient appears strictly as 1px lines and SVG strokes — never as a fill or background.
3. **English titles, Hebrew messages.** Short labels, section titles, and 1–3-word headlines go in English. Longer body copy, sentences, and the actual content stay in Hebrew (matching the source PPTX). Pair them with a small gray Hebrew echo beneath English titles where useful (`.step-title-he`, `.p-sub-he`, `.tagline-he` classes).
4. **Three fonts. Bilingual rules.**
   - **Heebo** — all Hebrew content, regardless of size. Weights 200–700.
   - **Plus Jakarta Sans** — all English content (titles, body, labels, **and all small decorative numbers**). Weights 200–800.
   - **Arbutus Slab** — reserved exclusively for the English brand tagline `Intelligence in Every Direction.` and `Time to brij.` Never on numbers, never on labels, never on body.
5. **Co-brand hierarchy.** Product logo (Brij Signal, Eldar, etc.) goes top-left at full opacity, height ~36px. Brij signs as "Powered by Brij" in the bottom-corner, full opacity, height ~24px. Order: **Brij logo first, then `POWERED BY` text** (the icon should always lead).
6. **Animation rules of thumb.**
   - Between **dissimilar slides** (e.g. cover → mission, mission → divider): cinematic push with blur + scale + translateX.
   - Between **similar slides in a group** (e.g. step 1 → step 2 → step 3, use cases A → B): plain fade only, no element-level theatrics. The deck shouldn't feel tiring.
   - Define groups explicitly in JS (see `softGroups` in template).
7. **No serif numbers.** Every small gray decorative number — slide counter, step numbers, divider numbers, pillar numbers, label-paired numbers — is **Plus Jakarta Sans**, never Arbutus Slab. Arbutus is brand-tagline-only.

---

## File structure

```
deck-name/
├─ index.html                # the deck — single file, JS + CSS inline
├─ colors_and_type.css       # copy from skill, never link upstream
├─ assets/
│  ├─ brij-wordmark.svg      # for "Powered by" mark
│  ├─ {product}-mark.png     # the product brand mark (e.g. zentx-mark.png)
│  ├─ {product}-wordmark.svg # product wordmark — for top-left HUD
│  └─ team/                  # if a founders slide, drop circular-ready portraits here
│     ├─ Roey.jpg
│     ├─ Joel.jpg
│     └─ ...
└─ Deck.pdf                  # generated via Chrome headless ?print=1
```

Never link assets into `~/.claude/skills/`. Copy them to the working directory.

---

## Bilingual typography

```css
/* default body — Heebo first so any Hebrew falls back to it gracefully */
body { font-family: 'Heebo', 'Plus Jakarta Sans', system-ui, sans-serif; }

/* English display + headline classes — PJS preferred, Heebo for Hebrew fallback chars */
.display, .divider-title, .gl-title {
  font-family: 'Plus Jakarta Sans', 'Heebo', sans-serif;
}

/* Hebrew-only body / leads / messages */
.hero-line, .lead-xl, .body-xl, .pain-display, .every-display, .step-body, .case-body {
  font-family: 'Heebo', sans-serif;
}

/* English brand tagline — the one Arbutus surface */
.tagline-en { font-family: 'Arbutus Slab', Georgia, serif; }

/* Hebrew tagline echo under English titles */
.tagline-he { font-family: 'Heebo', sans-serif; }
```

Direction handling:
- `<html lang="he" dir="rtl">` for Hebrew-led decks.
- Inline `<span class="ltr">` (direction: ltr) for English fragments inside Hebrew sentences.
- Inline `<span class="rtl">` for the reverse when needed.

---

## Slide types catalog

Every slide is a `<section class="slide s-{type}" data-slide="{n}">…</section>`. Only one is `.is-active` at a time. The `s-{type}` class triggers the layout-specific CSS. Reference implementations live in `templates/deck-template.html`.

| Type            | Class       | When to use                                                           |
|-----------------|-------------|-----------------------------------------------------------------------|
| Cover           | `s-cover`   | Slide 1. Product mark + wordmark + tagline. No hero copy.             |
| Mission / Lead  | `s-mission` | Big AI lead statement. Optionally with triangle/grid value-prop.      |
| Why we're here  | `s-why`     | Eyebrow + single body-xl paragraph. Hebrew context-setting.           |
| Pain            | `s-pain`    | Big two-line Hebrew display statement. The dramatic moment.           |
| Founders        | `s-team`    | 5-column grayscale circle photo grid. Names + roles + Hebrew foot.    |
| Section divider | `s-divider` | Number + ring-animated mark + gradient rule + big English title + Hebrew echo. Used between major sections. |
| Step            | `s-step`    | Two-column: number (left) + title + Hebrew body (right). Steps 1/2/3. |
| Every           | `s-every`   | Centered "every X, every Y, every Z" stack with mask reveal per line. |
| Use cases       | `s-cases`   | Two-column A/B with eyebrows, titles, body, and "what {product} enables:" callouts. |
| Implementation  | `s-impl`    | English display title + numbered Hebrew rows in 2-column grid.        |
| Launch / CTA    | `s-golive`  | Final divider with mark + light gradient rule + light-weight title.   |

**Mission triangle pattern** (`templates/deck-template.html#slide-5`):
- Two-column row layout.
- Right column (RTL: visually right): eyebrow + Hebrew lead statement.
- Left column: SVG path with rounded corners (uses `tri-grad` linear gradient), product mark in the geometric centroid (`top: 66.7%`), three corner labels with small gray PJS numbers + plain Hebrew text.
- Triangle dimensions: `clamp(360px, 30vw, 480px)` width, aspect ratio 1.155.
- Mark size inside triangle: `clamp(96px, 9vw, 140px)`.

---

## Animation system

Named entrance classes, each with paired `@keyframes`. Apply with `d-N` stagger delay (N × 120ms).

| Class         | Animation                                              | Best for                          |
|---------------|--------------------------------------------------------|-----------------------------------|
| `anim`        | rise + slight blur (default)                           | Body text, lists                  |
| `anim-fade`   | pure opacity fade                                      | Subtle elements, taglines         |
| `anim-scale`  | scale 0.78 → 1 with overshoot                          | Mid-priority entrances            |
| `anim-rtl`    | slide in from right                                    | RTL content blocks                |
| `anim-ltr`    | slide in from left                                     | Counter-balance, columns          |
| `anim-mask`   | clip-path reveal top-to-bottom                         | Hero lines, big display text      |
| `anim-drop`   | drop from top                                          | Eyebrows, labels                  |
| `anim-rule`   | scale-x gradient hairline                              | Gradient lines, dividers          |
| `anim-ring`   | scale 0.2 → 1.08 → 1 with rotation                     | Logo marks, ring entrances        |
| `anim-shock`  | scale up + overshoot                                   | Divider titles, launch moments    |
| `anim-swoop`  | translate + rotate combo                               | Special accents                   |
| `anim-burst`  | letter-spacing expands inward                          | Brand wordmark on cover           |

**Soft transitions**. Define `softGroups = [[7,8,9], [12,13,14]]` (1-indexed slide numbers). When navigating between two slides in the same group, the deck applies `dir-soft` and the destination slide gets `is-soft` — overriding all entrance animations with a simple 400ms fade. This is essential for sequences (steps, use cases) where the dramatic push between similar layouts gets tiring.

---

## Photo treatment for team grids

- Square container, `border-radius: 50%`, sized `clamp(140px, 12.5vw, 192px)`.
- `object-fit: cover` with `filter: grayscale(1)`.
- **Per-person crop tweaks** via `data-p="name"` attribute. Use `object-position` + `transform: scale + transform-origin` to land the face squarely in the circle:

```css
.team-photo[data-p="roey"]  img { object-position: 50% 18%; transform: scale(1.34); transform-origin: center 22%; }
.team-photo[data-p="joel"]  img { object-position: 38% 4%;  transform: scale(1.22); transform-origin: 38% 8%; }
.team-photo[data-p="gidon"] img { object-position: center 5%; transform: scale(1.22); transform-origin: center 8%; }
.team-photo[data-p="ziv"]   img { object-position: center 12%; transform: scale(1.18); transform-origin: center 16%; }
.team-photo.is-circle img    { object-position: center center; transform: scale(1); } /* pre-cropped circular PNGs */
```

Photos for the founders live at `assets/team/`:
- `Roey.jpg` — Roey Eliram (CEO)
- `Joel.jpg` — Yoel Schreiber (CTO)
- `Gidon.jpg` — Gidon Schreiber (CPO)
- `Ziv.jpg` — Ziv Sobol (VP Growth)
- `Motti.png` — Motti Sharaf (Chief Strategist) — already a pre-cropped circular PNG

---

## HUD pattern

Fixed top + bottom bars, visible on every slide.

**Top-left:** product wordmark, dominant. `opacity: 0.92`, height `36px`. Direction: ltr.

**Top-right:** slide counter `01 / 16`. Plus Jakarta Sans 11px, tracked 0.18em, gray.

**Bottom-left:** tagline `Intelligence in Every Direction.` in Arbutus Slab. Brand element.

**Bottom-right (in RTL: bottom-left visually):** `[Brij logo] POWERED BY` chip. Brij icon first, then label. Full opacity, height `24px`. `direction: ltr` to keep order regardless of page direction.

**Top hairline progress bar:** scaleX 0 → 1 across the gradient as slides advance.

---

## Mobile fit (mandatory)

Decks are designed desktop-first at 1920×1080, but they ship as raw `.html` files over WhatsApp and get opened on phones. Every deck MUST also collapse cleanly at narrow widths and pass the mobile checker. This wins over any older habit of locking layouts to the desktop canvas.

- **Desktop-first, then collapse.** Design at 1920×1080. At `@media (max-width: 700px)` the deck switches to a vertical-scroll collapse: each slide becomes a static block, `min-height: 100svh`, slide navigation hidden.
- **Fluid type.** Headings sized with `clamp()`; body text never below 15px on mobile.
- **No fixed px widths of 500 or more outside `@media` blocks.** Use `max-width` + `width: 100%`, percentages, `minmax()` grids.
- **No hover-only content.** Phones have no hover; reveals trigger on scroll (IntersectionObserver), never `:hover`.
- **Self-contained single file.** No local asset references (the file gets forwarded alone); inline SVG, data URIs, or Google Fonts links with system fallbacks.
- **The gate.** Before delivering, run the checker from the `brij-agent` repo. It must PASS:

```bash
python3 scripts/check_mobile_html.py deck.html
```

`templates/client-deck-template.html` is the reference implementation of this collapse; study its mobile media block before writing your own.

---

## Print / PDF export

The template supports a `?print=1` query that renders all slides stacked for PDF export. The flow:

1. Open `file://path/to/index.html?print=1` in a browser, OR run headless Chrome:

```bash
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" \
  --headless=new --disable-gpu --no-pdf-header-footer --no-margins \
  --hide-scrollbars --window-size=1920,1080 --virtual-time-budget=10000 \
  --print-to-pdf="Deck.pdf" \
  "file://$PWD/index.html?print=1"
```

2. Output is 1920×1080 16:9 pages, one per slide. Animations disabled in print. HUD cloned into each slide so counter + branding appear correctly per-page.

3. The `body.print-all` class overrides responsive media queries that would otherwise collapse grids on the narrow headless viewport. This override applies to print export only: on screen, the mobile collapse from "Mobile fit (mandatory)" must remain intact. Always test in print mode if you add a new layout.

---

## Pre-flight checklist (deck-specific)

In addition to the standard Stage 6 checklist from `SKILL.md`, also verify:

**Surface + co-brand**
- [ ] Page background is `#ffffff` (white). Deliberately not cream for product decks.
- [ ] Product logo top-left at full opacity, ~36px height.
- [ ] Brij `Powered by` bottom-corner at full opacity, ~24px, **icon before label**.
- [ ] Slide counter visible top-right or top-end, never overlaps content.

**Bilingual**
- [ ] Hebrew content uses Heebo (verify by inspector — no Arbutus on Hebrew chars).
- [ ] English short labels in Plus Jakarta Sans.
- [ ] Tagline `Intelligence in Every Direction.` in Arbutus Slab.
- [ ] Direction: rtl on root, ltr islands for English fragments.

**Numbers**
- [ ] All small gray decorative numbers (counter, divider-num, step-num, pillar-num, label-num) in Plus Jakarta Sans. **No Arbutus Slab on numbers, ever.**

**Animations**
- [ ] Same-group slides (steps, use cases) use soft fade only.
- [ ] Different-section slides use cinematic push.
- [ ] Each slide's entrance animations resolve under 2 seconds total.

**Mobile**
- [ ] `python3 scripts/check_mobile_html.py` (from the `brij-agent` repo) passes.
- [ ] At 700px and below, the deck collapses to a vertical scroll: static slides, `min-height: 100svh`, nav hidden.
- [ ] No horizontal scroll at 390px; headings wrap, nothing clipped.

**Print**
- [ ] `?print=1` mode renders all slides stacked.
- [ ] HUD appears on every page.
- [ ] Counter shows correct number per page.

---

## Quick-start

1. **Clone the template** (client-facing shown; internal briefs clone `internal-brief-template.html` instead):
   ```bash
   mkdir my-deck && cd my-deck
   cp ~/.claude/skills/brij-design/templates/client-deck-template.html ./index.html
   cp ~/.claude/skills/brij-design/colors_and_type.css ./
   mkdir -p assets/team
   cp ~/.claude/skills/brij-design/assets/brij-wordmark.svg ./assets/
   ```

2. **Add the product mark + wordmark:**
   - `assets/{product}-mark.png` — standalone product mark
   - `assets/{product}-wordmark.svg` — for top-left HUD (mark + name, optional tagline removed)

3. **Edit slide content.** Each `<section class="slide s-{type}" data-slide="{n}">` is independent. Keep slide types matching the source content, not the other way around.

4. **Update `softGroups`** in the script block to match your deck's grouped sequences.

5. **Smoke test**: open in browser, arrow through slides, verify each layout, then export to PDF via headless Chrome and visually check 3–4 spot-pages.

---

## Reference deck

The legacy reference is the Zentx · Enlight pitch (16 slides, May 2026) at `templates/deck-template.html`; every co-brand and animation pattern documented here exists in that file. For new work, clone `templates/client-deck-template.html` (client-facing) or `templates/internal-brief-template.html` (internal) per the rule above.
