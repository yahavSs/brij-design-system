# Brij.AI — Website UI Kit

High-fidelity recreation of the Brij marketing site, built to the **brandbook system** (cream surface, Plus Jakarta Sans + Arbutus Slab, orange accent, pentagon mark).

This kit supersedes the in-progress React code at `brij-brandbook/src/` (which uses a deprecated dark/purple theme). Components here follow `brandbook.html` exactly.

## Files

- `index.html` — runnable single-file preview of the whole landing page
- `Header.jsx` — fixed top nav with backdrop blur
- `Hero.jsx` — display headline + subhead + CTA
- `Manifesto.jsx` — glass panel with orange left accent
- `WhatWeDo.jsx` — 3-column numbered panels
- `HowWeWork.jsx` — 4-phase grid using pentagon badges
- `Proof.jsx` — case study cards (Zentx, Eldar Group)
- `ContactCTA.jsx` — closing CTA with low-opacity mark backdrop
- `Footer.jsx` — logo + email + Tel Aviv
- `Primitives.jsx` — Button, Panel, SectionHeader, Eyebrow, Label

## Components imported from the design system
All typography + color tokens come from `../../colors_and_type.css`.
Pentagon + arrow + logo SVGs come from `../../assets/`.
