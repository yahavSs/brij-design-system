# Scripts

Helpers the `brij-design` skill uses to produce non-HTML outputs.

## brij_doc.py

Generates brand-styled `.docx` files. Word and Google Docs both render the result; Google Docs fonts come from the Google Fonts library, so Plus Jakarta Sans + Arbutus Slab render natively there.

### Install once

```bash
pip3 install -r requirements.txt
```

### Use it

```python
from brij_doc import BrijDocument

doc = BrijDocument(title="Zentx One-Pager")
doc.eyebrow("[ 01 — Introduction ]")
doc.display("Time to brij.")
doc.lead("Brij is an Intelligence Lab. We guide organizations across the bridge of transformation.")
doc.divider()
doc.headline("What we do")
doc.bullet_list([
    "Diagnose where AI changes your competitive landscape.",
    "Build the lab. Focused agents, real workflows, decisive outputs.",
    "Hand it off. Your team owns it.",
])
doc.callout("We are not a vendor. We are a home lab.")
doc.save("output.docx")
```

### Available blocks

| Method | What it produces |
| --- | --- |
| `eyebrow(text)` | Small uppercase tracked label, like `[ 01 — FOUNDATION ]`. |
| `display(text)` | The biggest title, 32pt Plus Jakarta bold. |
| `headline(text)` | Section headline, 22pt. |
| `title(text)` | Sub-section title, 14pt. |
| `serif_title(text)` | Accent title in Arbutus Slab, 18pt. |
| `body(text)` | Default 11pt paragraph. |
| `lead(text)` | Larger 13pt intro paragraph in T2 grey. |
| `caption(text)` | Small 9pt muted text. |
| `bullet_list([...])` | Sentence-case bullets. |
| `numbered_list([...])` | Numbered items. |
| `callout(text)` | Sage-tint pull-quote block in Arbutus Slab. |
| `panel([(kind, text), ...])` | Sage-tint multi-line panel. `kind` is `title`, `body`, or `caption`. |
| `divider()` | 1px sage-grey horizontal line. |
| `page_break()` | New page. |
| `save(path)` | Writes the file. |

### Notes

- **Sentence case in copy.** Display, headline, and title are not auto-cased: use brand voice ("What we do", not "WHAT WE DO" or "What We Do").
- **Eyebrows are auto-uppercased.** Pass them in mixed case; the helper handles tracking.
- **Cream page background.** Renders in Word; Google Docs ignores page-background. The tone still reads correct because most surfaces stay light.
- **Fonts.** Plus Jakarta Sans + Arbutus Slab. Both load natively in Google Docs. In Word, they substitute if not installed locally.
