---
name: brij-design
description: Use this skill to generate well-branded interfaces and assets for Brij (Intelligence Lab), either for production or throwaway prototypes/mocks/decks. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files (colors_and_type.css, assets/, preview/, ui_kits/website/).

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. Always load:

```html
<link href="https://fonts.googleapis.com/css2?family=Arbutus+Slab&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">
<link rel="stylesheet" href="colors_and_type.css" />
```

Use `--brij-*` tokens. Cream surface, ink text, orange accent (max once per section), pentagon mark as icon, gradient `#F3C06A → #D8E094 → #98C6E7` reserved for CTAs / mark fills. No shadows, no emoji, no dark backgrounds.

If working on production code, copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.
