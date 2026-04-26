# Brij Design System

Single source of truth for Brij's brand. Colors, type, components, templates, logos, and a Claude Code skill that knows how to use them.

## What's inside

| Path | What it is |
| --- | --- |
| [project/Brij Design System.html](project/Brij%20Design%20System.html) | The brandbook. Open in a browser to see the full visual system. |
| [project/README.md](project/README.md) | Brand guidelines in detail: voice, color, type, spacing, do / don't. |
| [project/colors_and_type.css](project/colors_and_type.css) | All design tokens as CSS variables. |
| [project/SKILL.md](project/SKILL.md) | Claude Code skill manifest. |
| [project/assets/](project/assets/) | Logos, marks, arrows, gradient lines, logo motion video. |
| [project/preview/](project/preview/) | 25 standalone HTML specimens, one per design concept. |
| [project/ui_kits/](project/ui_kits/) | Component library + website overview in JSX. |
| [project/ui_kits/component_library/templates/](project/ui_kits/component_library/templates/) | Ready-to-use templates: doc, onepager, slide, sales pitch. |

## Use the Claude Code skill

Run this once on your machine to install:

```bash
git clone https://github.com/brij-ai-main/brij-design-system ~/code/brij-design-system
mkdir -p ~/.claude/skills
ln -s ~/code/brij-design-system/project ~/.claude/skills/brij-design
```

Then in any project, in Claude Code:

```
/brij-design
```

Claude will ask what you want to build (slide, one-pager, email signature, landing mock, etc.) and produce it on-brand.

## Update to the latest version

```bash
cd ~/code/brij-design-system
git pull
```

That's it. The symlink keeps your local skill in sync.

## See the brandbook in your browser

```bash
open ~/code/brij-design-system/project/Brij\ Design\ System.html
```

## Notes

- Brand SSOT: when in doubt, [project/README.md](project/README.md) and [project/colors_and_type.css](project/colors_and_type.css) win. Everything else derives from them.
- Two competing themes used to live in `brij/src/styles/index.css` (legacy dark / purple / Poppins). That one is deprecated. The brandbook is the correct system: cream surface, ink text, orange accent, Plus Jakarta Sans + Arbutus Slab.
- The Claude Design handoff notes are in [HANDOFF.md](HANDOFF.md) for context.
