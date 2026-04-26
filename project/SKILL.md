---
name: brij-design
description: Use this skill to generate well-branded interfaces and assets for Brij (Intelligence Lab), either for production or throwaway prototypes/mocks/decks. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

# Brij Design Skill

Brij is an AI Intelligence Lab in Tel Aviv. The brand feels **light, clean, clinical, with warmth**. Restraint is the entire point. The brand fails the moment it gets busy, decorated, or "designed-looking". Less is the brand.

This skill has been getting frustrated feedback for jumping straight to building, picking the wrong logo, and over-decorating. The staged workflow below is mandatory and exists to fix that. Do not skip stages.

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
  <link href="https://fonts.googleapis.com/css2?family=Arbutus+Slab&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="colors_and_type.css" />
  ```
- Use only `--brij-*` CSS variables. Never hardcode colors, fonts, or spacing.
- Copy `colors_and_type.css` and any logo/mark/arrow SVG you reference into the working directory. Never link into `~/.claude/skills/`.

**For editable documents** (one-pagers, briefs, proposals, anything the team will keep editing in Word or Google Docs): use `scripts/brij_doc.py`. See `scripts/README.md` for the full API. Quick form:

```python
from brij_doc import BrijDocument
doc = BrijDocument(title="Zentx One-Pager")
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

**Restraint**
- [ ] Page background is `--brij-cream`. Not white, not dark, not gradient.
- [ ] Orange (`--brij-orange`) appears at most once per section (gradient buttons exempt).
- [ ] No drop shadows.
- [ ] No grey tones as fills (only `--brij-t1` / `--brij-t2` / `--brij-t3` for text).
- [ ] Green and blue appear **only** inside the gradient, never as solid fills.
- [ ] No emoji, no Unicode glyphs (★ ➔ ✓), no Lucide/Heroicons/Material Icons unless the user explicitly approved a substitution.
- [ ] No grid patterns or noise textures on backgrounds (noise is marks-only).

**Type**
- [ ] Only Plus Jakarta Sans + Arbutus Slab loaded.
- [ ] Sentence case on headlines, titles, buttons. ALL CAPS only on tracked eyebrow labels.
- [ ] Sizes come from the five-step scale only (Display / Headline / Title / Body / Label). No arbitrary values.

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

If a check fails, state which one, fix it, then re-run the checklist from the top. Only then deliver.

---

## Logo Decision Tree

The brandbook defines exactly **3 logo variants**. Every use must map to one of these three. Never invent a fourth, never use legacy alt files in `assets/` that aren't listed below (e.g. `logo-b-mark.svg`, `logo-c-mark.svg`, `logo-3variants.svg`, `logotype-black.svg`, `logotype-white.svg`, `mark-3colors.svg` — these are reference / draft files, not brand variants).

| Brandbook variant | When to use | File |
|---|---|---|
| **Full logo** (mark + wordmark) | The brand named in full. Headers, footers, the top of decks, anywhere identification matters. Always on cream or white. | `assets/brij-wordmark.svg` |
| **Mark · gradient** | Standalone pentagon mark on a **dark / ink background**. Deck intros, video bumpers, dark surfaces. | `assets/mark-gradient-md.svg` |
| **Mark · ink** | Standalone pentagon mark on **cream or white**. Decorative anchor, section badge, contact CTA block at low opacity. Use `mark-dark-sm.svg` / `md` / `lg` for size — same variant, just sized. | `assets/mark-dark-md.svg` |

**Logo motion ident** (`assets/logo-motion.mp4`) is the canonical brand-open animation — 2× speed, looped, muted. Use at the top of decks, video bumpers, and the home page hero. It's not a fourth variant; it's the Full Logo in motion.

If a request seems to need something outside these three (e.g. wordmark only, mark on a colored background, custom color fill), STOP and ask the user before improvising. The brand is deliberately tight here.

---

## Reference file map (read on demand, not all at once)

- `README.md` — brand context, voice, visual foundations, full rule list. Read once at the start of any non-trivial task.
- `colors_and_type.css` — every CSS variable and primitive. Always link; never copy values into your output.
- `preview/*.html` — 25 component exemplars. Read the relevant one **before** building (e.g. before designing a button, open `preview/component-buttons.html`).
- `screenshots/*.png` — visual references for full sections of the brandbook. Open these to see what "good" looks like for a given section type.
- `assets/` — all logos, marks, arrows, lines. Copy required SVG into the working directory.
- `scripts/brij_doc.py` — Python helper for `.docx` generation. Read `scripts/README.md` for the API.
- `Brij Design System.html` — the full canonical brandbook (1.9 MB). Treat as law if a rule conflict comes up. Only open when a question can't be answered from `README.md`.

---

## Mode: production vs. throwaway

Decide based on the artifact type from Stage 2 Q1:

- **Production** (real shipped surface — website code in the brij.ai repo, a section being merged into the site, a product UI): work in the project's actual file structure, not a loose `lowfi.html` at the project root. Copy `colors_and_type.css` into the project's styles folder and align with the project's existing token names.
- **Throwaway** (decks, slides, mocks, social posts, banners, sketches): output static HTML files in the working directory that the user can open immediately.
- **Document** (one-pager, brief, proposal, internal doc — anything the team will edit in Google Docs / Word): use `scripts/brij_doc.py` to write a `.docx`. Pair it with an HTML preview when the visual matters too.

If unclear from Stage 2 alone, ask explicitly before Stage 4.

---

## When in doubt

The Brij brand prefers *less* over *more*. If you're choosing between two options, pick the simpler one. If a layout looks "designed", strip something out. Restraint is not a constraint, it's the brand.
