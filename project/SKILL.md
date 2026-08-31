---
name: brij-design
description: Use this skill to generate well-branded interfaces and assets for Brij (Intelligence Lab), either for production or throwaway prototypes/mocks/decks. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

# Brij Design Skill

Brij is an AI Intelligence Lab in Tel Aviv. The brand feels **light, clean, clinical, with warmth**. Restraint is the entire point. The brand fails the moment it gets busy, decorated, or "designed-looking". Less is the brand.

This skill has been getting frustrated feedback for jumping straight to building, picking the wrong logo, and over-decorating. The staged workflow below is mandatory and exists to fix that. Do not skip stages.

---

## Stage 0: Two questions, before anything else

Ask these two questions first, in this order, and **stop and wait** for the answers. Do not guess, do not infer from context, do not start designing until both are answered.

### Q1: Which product? (always ask)

> *Which product is this for: Brij Labs (company), Brij Signal, or Brij Agents?*

The chosen product dictates the palette **and** the logo. Never mix products in one artifact.

| Product | Tokens | Gradient | Logos |
|---|---|---|---|
| **Brij Labs** (the company, the parent Intelligence Lab; the default) | `colors_and_type.css` | The full 3-stop spectrum `#F3C06A` to `#D8E094` to `#98C6E7`. Parent brand only. | `assets/` logos: logotype-black / logotype-white, mark variants (pick per the Logo Decision Tree below) |
| **Brij Signal** (signal intelligence for reputation, "The Operating System for Reputation") | `signal/signal.css` | Two stops only, sage to sky: `#D8E094` to `#98C6E7`. Never three. Signal stays cool: its accent is sky. | `signal/assets/` logos |
| **Brij Agents** | Company-level tokens: an aliases-only identity with the same surface palette and fonts as Brij Labs (white surface, panel `#EBEDE7`, ink `#181B18`, Plus Jakarta Sans + Arbutus Slab + Heebo). The compiled reference is `dist/agent.css` in the unified token pipeline (`brij-command-center/design-system/`). | Two stops only, sage to sun: `#D8E094` to `#F3C06A`. Never three. | Same as Brij Labs |

**The gradient is per product, never shared.** Only the parent brand uses the 3-stop spectrum; the products use two stops, and sage is always one of them. A two-tone gradient names the product on sight, so putting the full spectrum on Signal or Agents material breaks the system. What genuinely is company-level: the type system (Plus Jakarta Sans + Arbutus Slab + Heebo) and sage as the one stop every gradient keeps. Radii and spacing are **not** shared: Brij Labs uses 28px panels and 52px pills, while Signal defines its own smaller scale in `signal/signal.css`. Take those from the product's own token file. See the brandbook's Gradient Usage section.

Routing notes for Signal (from `signal/brand.md`):

- **Signal-native work** (product UI mocks, Signal-owned marketing, a page or deck about the product): use the Brij Signal identity. Read `signal/brand.md`, link `signal/signal.css`, use the logos in `signal/assets/`.
- **Brij-led work that features Signal** (Brij selling the product, a Brij investor deck mentioning it, the Brij website's product section): stay in the Brij Labs identity. The product is named in type; surface and voice are Brij's.

*(Brij Signal is the rebrand of the product formerly called Zentx. The old Zentx identity, Poppins, Z-mark, "Above The Noise", is retired. Never use it.)*

### Q2: Client-facing or internal? (ask for any presentation, deck, or brief)

> *Is this client-facing or internal?*

- **Client-facing**: you MUST clone `templates/client-deck-template.html`. Dark identity. Anything a client will see is dark.
- **Internal**: you MUST clone `templates/internal-brief-template.html`. The Signal light language: sage greige ground, white floating panels, navy ink, the brand gradient wash. A scrolling document for internal briefs.

The rule is deliberate and absolute: **light means internal, dark means client**, so anyone can tell at a glance which kind of artifact they are holding. Both templates pass the mobile checker; keep them passing when you edit (see the mobile rule in Stage 6).

If either answer is unclear, ask again. Then proceed to Stage 1.

---

## The six stages (run in order, every time)

Default: run all six stages. The user can override only with an explicit phrase like "skip to build" or "no questions, just sketch it", and even then, still run Stage 6 (pre-flight) before delivery.

### Stage 1 — Content (always start here)

The design has nothing to wrap until the content exists. Start by asking:

> *What content do you have for this?*
> 1. **A document, deck, image, link, or text** to share. Paste it, send the path, or describe it.
> 2. **Rough notes or bullet points** to shape together.
> 3. **Nothing yet** — let's develop the content first.

Handle each path before moving on:

- **Shared content:** read it carefully. Reply with a 2–3 sentence summary of what you understood the message to be. Ask: *"Did I get the substance right? Anything to sharpen before we move to design?"* Wait for confirmation.
- **Rough notes:** shape them into clean Brij-voice copy following the voice rules in `README.md` (sentence case, declarative, first-person plural, no banned phrases, no em-dashes, sharp and direct). Show the result and ask for approval.
- **Nothing yet:** ask three short questions — what's the topic, who's the viewer, what should they walk away with. Draft copy in Brij voice. Show the result and ask for approval.

Do not move to Stage 2 until the user has explicitly approved the content. Designing around vague or assumed content is the single biggest cause of off-brand output.

### Stage 2 — Design brief (ask only after content is approved)

Ask these three questions as a numbered list, then **stop and wait** for answers. Do not infer. If the user answers some but not all, ask only the missing ones.

The brandbook in this skill is the only reference. Never ask the user for an external reference, a screenshot, or a "design like X". Every design originates from the system here. Your job is to apply it, not to reinterpret it.

1. **What are we making, and where does it live?** Three parts:
   - Type of artifact (social post, deck slide, deck cover, website section, product mock, lockup, banner, one-pager)
   - Size or format (1080×1080, 16:9, A4, full-bleed web, 1200×628 LinkedIn header)
   - Where it will be seen (LinkedIn, a pitch deck, brij.ai homepage, internal Slack)

2. **What's the one thing that has to land?** Pick the single moment, sentence, image, or number the viewer should walk away with. Example answers: *"the words 'Time to brij.'"* / *"the gradient mark, big and centered"* / *"that we work with major Israeli PR firms"*. If the user gives more than one, ask them to pick. The brand fails when everything is shouting.

3. **What energy, within the brand range?** Pick exactly one:
   - **Quiet and serious** — legal-doc gravity, lots of whitespace, no gradient, mostly type, t1/t2 only.
   - **Warm and optimistic** — cream surface, one gradient halo, friendly hierarchy, more breathing room, gentle pacing.
   - **Sharp and decisive** — high-contrast type, the one orange accent earned, tight rhythm, eyebrow labels working hard.

   The brand fails when a piece tries to be all three at once. One setting only. This single answer sets density, gradient use, accent rate, and pacing for the entire artifact.

Only after all three are answered, move on.

### Stage 3 — Brief recap + layout proposal (text only, no code)

Reply with:
- A 2–3 sentence recap of what you understood.
- A bulleted layout proposal in plain words, using real brand primitives by name: eyebrow label, glass panel, pentagon badge, gradient line, pill button, wordmark, etc.
- The **focal element** — name the single thing from the user's Q2 answer that the layout is built around, and how the rest of the layout defers to it.
- **Energy → decisions:** translate the user's Q3 answer into specific calls. Examples:
  - *Quiet and serious* → no gradient halo, no orange accent, type-led, body at t2, 96–120px section padding.
  - *Warm and optimistic* → one gradient halo behind the focal element, sentence-case type at generous size, blur-circle in panels, no orange.
  - *Sharp and decisive* → orange accent earned exactly once on the focal element, headline at Display 48, tighter 64px rhythm, eyebrow label active.
- Which **logo variant** you'll use, and why (see Logo Decision Tree below).
- Which `preview/*.html` exemplars you'll mirror (e.g. "follows `preview/component-glass-panel.html` + `preview/spacing-scale.html`").

Then ask: *"Want me to proceed to a low-fi sketch, or adjust this brief first?"* Wait for explicit approval. Do not produce final code yet.

### Stage 4 — Low-fi sketch

Build a stripped-down HTML version: real layout + real type + real spacing, but placeholder copy, no gradient halos, no decorative flourishes, no logo. The goal is to confirm the **bones** before adding the skin.

Save as `lowfi.html` in the working directory. Tell the user the file path and ask: *"Does this skeleton match what you had in mind? Any adjustments before I add the brand layer?"* Wait for explicit approval.

### Stage 5 — Build

Now produce the final artifact. Pick the output format that matches the artifact type from Stage 2 Q1.

**For HTML / web prototypes** (slides, landing mocks, site sections, social posts, banners):

- Load fonts and tokens:
  ```html
  <link href="https://fonts.googleapis.com/css2?family=Arbutus+Slab&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Heebo:wght@200;300;400;500;600;700;800&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="colors_and_type.css" />
  ```
  *(Heebo is only required when the artifact contains Hebrew content.)*
- Use only `--brij-*` CSS variables. Never hardcode colors, fonts, or spacing.
- Copy `colors_and_type.css` and any logo/mark/arrow SVG you reference into the working directory. Never link into `~/.claude/skills/`.

**For multi-slide pitch decks** (10–20 slide HTML decks, often bilingual, often product co-brand):

- **Read `decks-pattern.md` first.** It captures rules earned through real user feedback that don't appear elsewhere.
- Set the product FIRST: both templates open with a banner-wrapped `PRODUCT TOKENS` block at the top of their `<style>`. Uncomment the block for the Stage 0 Q1 product, comment the one that was active, and swap the logo using the `LOGO` section right below it. Tokens and logo must name the same product, and exactly one product block is ever uncommented.
- Clone the template that matches the Stage 0 Q2 answer: `templates/client-deck-template.html` is the canonical clone source for client-facing decks (dark identity, Ifat-deck visual language, mobile-responsive); `templates/internal-brief-template.html` for internal briefs (Signal light language: sage ground, white floating panels, gradient wash, scrolling document). `templates/deck-template.html` remains as a legacy reference for the HUD, animation system, soft-transition logic, print mode, and slide-type layouts.
- Founders portraits available at `assets/team/` for team slides.

**For a one-pager delivered as a PDF and a link** (a sales or product one-pager the team sends over WhatsApp, not a document they keep editing): clone `templates/one-pager-template.html`. One source file renders both: the screen keeps real glass and a scroll reveal, and its `@media print` block flattens to an A4 page you make with headless Chrome. Its header comment carries the mechanics and the four traps that cost time, including the CSS specificity one. Worked example: `brij-agent/presentations/brij-signal/one-pager/`.

**For editable documents** (briefs, proposals, anything the team will keep editing in Word or Google Docs): use `scripts/brij_doc.py`. See `scripts/README.md` for the full API. Quick form:

```python
from brij_doc import BrijDocument
doc = BrijDocument(title="Brij Signal One-Pager")
doc.eyebrow("[ 01 — Introduction ]")
doc.display("Time to brij.")
doc.lead("Brij is an Intelligence Lab.")
doc.headline("What we do")
doc.bullet_list(["Diagnose.", "Build.", "Hand off."])
doc.callout("We are not a vendor. We are a home lab.")
doc.save("output.docx")
```

The script needs `python-docx` (one-time `pip3 install -r scripts/requirements.txt`). The output opens in Word and Google Docs with brand fonts intact (Plus Jakarta Sans + Arbutus Slab, native in Google Docs).

**For document-shaped artifacts, default to producing both** an HTML preview (full visual) and a `.docx` (editable). Slides and landing pages stay HTML-only.

In all cases: read `README.md` once if you haven't already this session, and never deviate from the rule list there.

### Stage 6 — Pre-flight checklist (run before delivering, every time)

Re-read your own output and verify each box. If any fails, fix and re-run the full list. Do not deliver until all pass.

> **Multi-slide pitch decks and bilingual Hebrew/English decks have a separate, additive checklist** in `decks-pattern.md` (white surface allowed, Heebo permitted, co-brand rules). Run **both** lists if you're building a deck.

**Restraint**
- [ ] Page background is `--brij-cream`. Not white, not dark, not gradient. *(Exception: product co-brand pitch decks use white — see `decks-pattern.md`.)*
- [ ] Orange (`--brij-orange`) appears at most once per section (gradient buttons exempt).
- [ ] No drop shadows.
- [ ] No grey tones as fills (only `--brij-t1` / `--brij-t2` / `--brij-t3` for text).
- [ ] Green and blue appear **only** inside the gradient, never as solid fills.
- [ ] No emoji, no Unicode glyphs (★ ➔ ✓), no Lucide/Heroicons/Material Icons unless the user explicitly approved a substitution.
- [ ] No grid patterns or noise textures on backgrounds (noise is marks-only).

**Type**
- [ ] Plus Jakarta Sans + Arbutus Slab loaded for English. *(Add Heebo if Hebrew content is present — see `decks-pattern.md`.)*
- [ ] Sentence case on headlines, titles, buttons. ALL CAPS only on tracked eyebrow labels.
- [ ] Sizes come from the five-step scale only (Display / Headline / Title / Body / Label). No arbitrary values.
- [ ] **Arbutus Slab is brand-tagline-only.** Never on numbers, never on labels, never on body. Decorative numbers (slide counters, step numbers, divider numbers) go in Plus Jakarta Sans.

**Logo**
- [ ] Correct variant for the surface (see Logo Decision Tree).
- [ ] Mark sits LEFT of wordmark when both are shown.
- [ ] Wordmark letter-spacing is `7.37px`, Arbutus Slab Regular.

**Copy**
- [ ] No em-dash (`—`) anywhere. Use comma, period, colon, or `-`.
- [ ] None of the banned phrases: "leverage", "unlock", "empower", "supercharge", "cutting-edge", "seamless", "digital transformation".
- [ ] No passive voice. No hedging ("potentially", "arguably").
- [ ] If used, the taglines end with a period: `Intelligence Lab.` and `Time to brij.`

**Structure**
- [ ] Section vertical padding is 120px top/bottom (or 64/96 for tight slides).
- [ ] Panels use 28px radius + 40px interior padding.
- [ ] Buttons use 52px pill radius.
- [ ] All spacing values come from the rhythm scale: 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96 / 120.

**Mobile-fit is mandatory**
- [ ] Every HTML deliverable passes `python3 scripts/check_mobile_html.py <file.html>` from the `brij-agent` repo. Deliverables ship as raw HTML files over WhatsApp and are opened on phones, so mobile fit is not optional.
- [ ] `templates/client-deck-template.html` and `templates/internal-brief-template.html` already pass the checker; keep them (and anything cloned from them) passing when you edit.

If a check fails, state which one, fix it, then re-run the checklist from the top. Only then deliver.

---

## Logo Decision Tree

The brandbook defines exactly **3 logo variants**. Every use must map to one of these three. Never invent a fourth, never use legacy alt files in `assets/` that aren't listed below (e.g. `logo-c-mark.svg`, `logo-3variants.svg`, `logotype-black.svg`, `logotype-white.svg`, `mark-3colors.svg` - these are reference / draft files, not brand variants).

**The Brij mark is the pentagon WITH the diagonal cut through the middle.** A solid, uncut pentagon is NOT the Brij logo. The files `mark-gradient-md.svg`, `mark-dark-sm.svg`, `mark-dark-md.svg`, `mark-dark-lg.svg`, `mark-gradient-*.svg` are solid-pentagon drafts: never use them, and never draw a solid pentagon (or any invented shape) as a stand-in.

| Brandbook variant | When to use | File |
|---|---|---|
| **Full logo** (mark + wordmark) | The brand named in full. Headers, footers, the top of decks, anywhere identification matters. Always on cream or white. | `assets/brij-wordmark.svg` |
| **Mark · gradient** | Standalone cut-pentagon mark. Works on dark / ink surfaces and on light surfaces (it is the same mark that sits inside the full logo). Deck intros, video bumpers, badges. | `assets/logo-b-mark-gradient.svg` |
| **Mark · ink** | Standalone cut-pentagon mark in ink, on **cream or white**. Decorative anchor, section badge, contact CTA block at low opacity. It is one scalable SVG: size with width/height. | `assets/logo-b-mark.svg` |

**Logo motion ident** (`assets/logo-motion.mp4`) is the canonical brand-open animation — 2× speed, looped, muted. Use at the top of decks, video bumpers, and the home page hero. It's not a fourth variant; it's the Full Logo in motion.

If a request seems to need something outside these three (e.g. wordmark only, mark on a colored background, custom color fill), STOP and ask the user before improvising. The brand is deliberately tight here.

**Brij Signal has its own product mark** (ink and gradient variants) — for Signal-native artifacts use the marks in `signal/assets/` per `signal/brand.md`, not the parent pentagon mark.

---

## Canonical brandbook and sync chain

There is exactly **one** brandbook: the **"Brij Design System" Claude Design project** (claude.ai/design). Everything else is a synced copy of it:

1. **This skill folder** is the working mirror. `Brij Design System.html` here is the same bundled file as in the cloud project; `ui_kits/component_library/` is its editable source.
2. **Published read-only view**: https://yahavss.github.io/brij-design-system/ (the `brij-design-system` repo publishes `project/`, which mirrors this folder).
3. **Team distribution**: the `brij-design` plugin in `brij-plugin-marketplace` (org `brijlabs-ai`) ships this skill to every team member's machine.

When brand values change: edit here → push to the Claude Design project with DesignSync (`/design-sync`) → commit + push `brij-design-system` (publishes the live page) → sync + version-bump the plugin in `brij-plugin-marketplace`. Never fork brand values into a project-local brandbook; point to this chain instead.

---

## Reference file map (read on demand, not all at once)

**Brij (parent brand):**
- `README.md` — brand context, voice, visual foundations, full rule list. Read once at the start of any non-trivial Brij task.
- `decks-pattern.md`: **multi-slide HTML pitch decks**. bilingual rules, co-brand layout, slide types catalog, animation system, mobile fit, print/PDF workflow. **Read before any pitch deck.** Pairs with `templates/client-deck-template.html`.
- `colors_and_type.css` — every Brij CSS variable and primitive. Always link; never copy values into your output.
- `preview/*.html` — 25 component exemplars. Read the relevant one **before** building (e.g. before designing a button, open `preview/component-buttons.html`).
- `templates/client-deck-template.html`: canonical client-facing deck template (dark identity, mobile-responsive). Clone for any client-facing presentation.
- `templates/internal-brief-template.html`: canonical internal brief template (Signal light language: sage ground, white floating panels, gradient wash, scrolling document). Clone for internal briefs.
- `templates/deck-template.html`: legacy 16-slide pitch deck reference (built pre-rebrand as "Zentx · Enlight"). No longer the clone source; keep for the HUD, animation, and print-mode patterns.
- `screenshots/*.png` — visual references for full sections of the brandbook.
- `assets/` — all Brij logos, marks, arrows, lines. Copy required SVG into the working directory.
- `assets/team/` — founders portraits (Roey, Yoel, Gidon, Ziv, Motti), ready for circular crop in team grids.
- `scripts/brij_doc.py` — Python helper for `.docx` generation. Read `scripts/README.md` for the API.
- `Brij Design System.html` — the full canonical brandbook (1.9 MB). Treat as law if a rule conflict comes up. Only open when a question can't be answered from `README.md`.

**Brij Signal (product brand under Brij):**
- `signal/brand.md` — product identity: surfaces, navy ink, logo usage, color rules, voice. Read this **instead of** `README.md` when building Signal-native artifacts.
- `signal/signal.css` — the product token set (light + dark), extracted from the product's live design system. Always link; never copy values into your output.
- `signal/assets/` — Brij logo variants as used by the product (full logo, mark, arrow, favicon in black / white / gradient).

---

## Mode: production vs. throwaway vs. pitch deck

Decide based on the artifact type from Stage 2 Q1:

- **Production** (real shipped surface — website code in the brij.ai repo, a section being merged into the site, a product UI): work in the project's actual file structure, not a loose `lowfi.html` at the project root. Copy `colors_and_type.css` into the project's styles folder and align with the project's existing token names.
- **Pitch deck** (multi-slide HTML deck for a product co-brand, investor / client pitch, often bilingual): **read `decks-pattern.md` first.** Clone the template that matches Stage 0 Q2: `templates/client-deck-template.html` for client-facing, `templates/internal-brief-template.html` for internal. Heebo for Hebrew, English for short labels, product logo top-left + Brij bottom signoff. `templates/deck-template.html` (built pre-rebrand as Zentx · Enlight) remains a legacy reference; today's product name is Brij Signal.
- **Throwaway** (single slides, mocks, social posts, banners, sketches): output static HTML files in the working directory that the user can open immediately.
- **One-pager** (a sales or product one-pager sent as a PDF and a link, not something the team keeps editing): clone `templates/one-pager-template.html`. One file renders the screen version and the A4 print version.
- **Document** (brief, proposal, internal doc — anything the team will edit in Google Docs / Word): use `scripts/brij_doc.py` to write a `.docx`. Pair it with an HTML preview when the visual matters too.

If unclear from Stage 2 alone, ask explicitly before Stage 4.

---

## When in doubt

The Brij brand prefers *less* over *more*. If you're choosing between two options, pick the simpler one. If a layout looks "designed", strip something out. Restraint is not a constraint, it's the brand.
