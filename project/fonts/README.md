# Fonts

## Families

- **Arbutus Slab** — self-hosted. `fonts/ArbutusSlab-Regular.ttf` is the brand-supplied copy. `@font-face` is declared in `colors_and_type.css`. Weight 400 only. Accent family: titles, buttons, badges, wordmark. (`1-` and `2-` prefixed TTFs are backup copies of the same file.)
- **Plus Jakarta Sans** — Google Fonts, weights 400/500/600/700/800. Primary family: headings (Display), body, labels.

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">
```

## Offline / self-host Plus Jakarta Sans too

If a prototype needs to run fully offline, download Plus Jakarta Sans from fonts.google.com and drop here as:

```
fonts/
  PlusJakartaSans-Regular.ttf
  PlusJakartaSans-Medium.ttf
  PlusJakartaSans-SemiBold.ttf
  PlusJakartaSans-Bold.ttf
  PlusJakartaSans-ExtraBold.ttf
```
