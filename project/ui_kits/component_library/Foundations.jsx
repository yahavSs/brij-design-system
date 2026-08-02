// ══════════════════════════════════════════════════════════════
// Foundations - Colors, Gradient, Type, Spacing, Logo
// ══════════════════════════════════════════════════════════════

// Grouped color system - surfaces / text / gradient stops.
// Three groups, max five swatches each. Names match how the brand book talks.
const COLOR_GROUPS = [
  {
    title: 'Surface',
    desc: 'Backgrounds and surfaces. Cream is the page; white is for stages and cards.',
    swatches: [
      ['White',  '--brij-white',  '#ffffff', 'Page surface - every page, slide, doc and card'],
      ['Sage',   '--brij-sage',   '#ebede7', 'Soft panels, solid buttons'],
      ['Ink',    '--brij-ink',    '#181b18', 'Dark surfaces (rare)'],
    ],
  },
  {
    title: 'Text',
    desc: 'Three steps of contrast - headline, body, caption. Never use a tone outside these.',
    swatches: [
      ['Primary',   '--brij-t1', '#181b18', 'Headlines, primary text'],
      ['Secondary', '--brij-t2', '#6b6b63', 'Body copy'],
      ['Muted',     '--brij-t3', '#a3a39b', 'Labels, captions'],
      ['Border',    '--brij-border', '#e8e6e1', 'Hairlines, dividers'],
    ],
  },
  {
    title: 'Gradient stops',
    desc: 'The three gradient anchors. Never used as standalone solid fills - only as stops within the signature gradient.',
    swatches: [
      ['Sun',  '--brij-grad-orange', '#f3c06a', ''],
      ['Sage', '--brij-green',       '#d8e094', ''],
      ['Sky',  '--brij-blue',        '#98c6e7', ''],
    ],
  },
];

function FoundationColors() {
  return (
    <Component id="colors" name="Colors" tag="Foundation"
      desc="A small system. Cream dominates. Text uses three steps of contrast. The three gradient stops appear together - never as standalone fills."
      stageTone="cream">
      {COLOR_GROUPS.map((g) => (
        <div key={g.title} className="lib-color-group">
          <div className="lib-color-group-head">
            <div className="lib-color-group-title">{g.title}</div>
            <div className="lib-color-group-desc">{g.desc}</div>
          </div>
          <div className="lib-color-grid">
            {g.swatches.map(([name, varName, hex, use]) => (
              <div className="lib-swatch" key={varName}>
                <div className="lib-swatch-chip" style={{ background: hex }} />
                <div className="lib-swatch-meta">
                  <div className="lib-swatch-name">{name}</div>
                  <div className="lib-swatch-hex">{hex.toUpperCase()}</div>
                  <div className="lib-swatch-use">{use}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </Component>
  );
}

function FoundationGradient() {
  return (
    <Component id="gradient" name="Signature Gradient" tag="Foundation"
      desc="The only multi-color element. Used sparingly - as a 1px decorative hairline (rules, rings, dividers), in the logo mark, and on select headline words via .text-gradient-brand. Never as a solid background or large fill.">
      <div style={{ display: 'grid', gap: 56, padding: '32px 0' }}>
        <div style={{ display: 'grid', gap: 18, justifyItems: 'center' }}>
          <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, letterSpacing: '0.12em', color: 'var(--fg-3)', textTransform: 'uppercase' }}>135°  ·  brand sweep</div>
          <hr style={{ width: '80%', height: 1, border: 0, background: 'linear-gradient(135deg,#f3c06a 0%,#d8e094 46%,#98c6e7 100%)' }} />
        </div>
        <div style={{ display: 'grid', gap: 18, justifyItems: 'center' }}>
          <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, letterSpacing: '0.12em', color: 'var(--fg-3)', textTransform: 'uppercase' }}>28°  ·  reverse</div>
          <hr style={{ width: '80%', height: 1, border: 0, background: 'linear-gradient(28deg,#98c6e7 14%,#d8e094 49%,#f3c06a 91%)' }} />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 10, fontSize: 12, color: 'var(--fg-3)', fontFamily: 'JetBrains Mono, monospace' }}>
          <span>#E3BC79</span><span>→</span><span>#D4DB95</span><span>→</span><span>#98C6E7</span>
        </div>
      </div>
    </Component>
  );
}

const TYPES = [
  { name: 'Display',  sample: 'Intelligence Lab.',                                family: 'var(--brij-sans)',  weight: 700, size: 72, spec: 'Plus Jakarta Sans · 700 · 72/48/36' },
  { name: 'Headline', sample: 'Structured movement through change.',              family: 'var(--brij-serif)', weight: 400, size: 40, spec: 'Arbutus Slab · 400 · 48/36/30 · sentence case' },
  { name: 'Title',    sample: 'Strategic Clarity',                                family: 'var(--brij-serif)', weight: 400, size: 24, spec: 'Arbutus Slab · 400 · 24px' },
  { name: 'Body',     sample: 'We stay ahead of the curve so you can focus on what matters.', family: 'var(--brij-sans)', weight: 400, size: 18, spec: 'Plus Jakarta Sans · 400 · 18 · tracking .02' },
  { name: 'Label',    sample: '[ 02 - WHAT WE DO ]',                              family: 'var(--brij-sans)',  weight: 500, size: 13, spec: 'Plus Jakarta Sans · 500 · 13 · tracking .08 · uppercase' },
];

function FoundationType() {
  return (
    <Component id="type" name="Type Scale" tag="Foundation"
      desc="Only five sizes. No in-between values. Hierarchy does the work - size, weight, and family contrast. Arbutus Slab is sentence case only."
      stageTone="cream">
      <div style={{ display: 'grid', gap: 28 }}>
        {TYPES.map((t) => (
          <div key={t.name} style={{ display: 'grid', gridTemplateColumns: '120px 1fr', gap: 24, alignItems: 'baseline', borderBottom: '1px solid transparent', borderImage: 'linear-gradient(90deg, #f3c06a 0%, #d8e094 50%, #98c6e7 100%) 1', borderImageSlice: '0 0 1 0', borderImageWidth: '0 0 1px 0', paddingBottom: 16 }}>
            <div>
              <div style={{ fontFamily: 'var(--brij-serif)', fontSize: 18, color: 'var(--fg-1)' }}>{t.name}</div>
              <div style={{ fontSize: 10, color: 'var(--fg-3)', letterSpacing: '0.08em', textTransform: 'uppercase', marginTop: 3 }}>{t.spec}</div>
            </div>
            <div style={{ fontFamily: t.family, fontSize: t.size, fontWeight: t.weight, letterSpacing: t.name === 'Body' ? '0.02em' : (t.name === 'Label' ? '0.08em' : '-0.005em'), color: 'var(--fg-1)', lineHeight: t.name === 'Display' ? 1.02 : 1.2, textTransform: t.name === 'Label' ? 'uppercase' : 'none' }}>
              {t.sample}
            </div>
          </div>
        ))}
      </div>
    </Component>
  );
}

function FoundationSpacing() {
  const steps = [
    { token: '--space-xs', value:   8, use: 'Tight gaps - icon ↔ label, list items' },
    { token: '--space-sm', value:  16, use: 'Default rhythm - paragraphs, form fields' },
    { token: '--space-md', value:  32, use: 'Card padding, between content blocks' },
    { token: '--space-lg', value:  64, use: 'Section breaks within a page' },
    { token: '--space-xl', value: 128, use: 'Hero margins, page-level breathing room' },
  ];
  return (
    <Component id="spacing" name="Spacing" tag="Foundation"
      desc="A 5-step scale on a base of 8 - each step doubles the previous. Five tokens you can hold in your head, instead of ten you'll have to look up. Layout feels like a lab interface: structured sections, deliberate negative space, max-width 1100px content."
      spec={[
        ['Base unit',  '8px'],
        ['Steps',      '5 - xs, sm, md, lg, xl'],
        ['Doubling',   '8 → 16 → 32 → 64 → 128'],
        ['Half-steps', 'Rare. Use calc(var(--space-xs) / 2) if truly needed.'],
      ]}
      code={`/* Tokens - defined once in colors_and_type.css */
--space-xs:    8px;
--space-sm:   16px;
--space-md:   32px;
--space-lg:   64px;
--space-xl:  128px;

/* Use them */
.card     { padding: var(--space-md); }
.section  { padding-block: var(--space-lg); }
.hero     { padding-block: var(--space-xl); }`}>
      <div style={{ display: 'grid', gap: 14 }}>
        {steps.map((s) => (
          <div key={s.token} style={{ display: 'grid', gridTemplateColumns: '128px 56px 1fr', gap: 20, alignItems: 'center' }}>
            <div style={{ fontSize: 12, color: 'var(--fg-2)', fontFamily: 'JetBrains Mono, monospace' }}>{s.token}</div>
            <div style={{ fontSize: 12, color: 'var(--fg-3)', fontFamily: 'JetBrains Mono, monospace' }}>{s.value}px</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
              <div style={{ height: 14, width: `${s.value}px`, background: 'var(--brij-gradient)', borderRadius: 2, flexShrink: 0 }} />
              <div style={{ fontSize: 12, color: 'var(--fg-3)', fontFamily: 'var(--brij-sans)' }}>{s.use}</div>
            </div>
          </div>
        ))}
      </div>
    </Component>
  );
}

function FoundationLogo() {
  // Literal src paths (not template strings) so the standalone bundle can
  // rewrite them to packed assets.
  const LOGOS = [
    { src: '../../assets/logos/brij-light.svg', label: 'Brij · light' },
    { src: '../../assets/logos/brij-dark.svg',  label: 'Brij · dark' },
  ];
  return (
    <Component id="logo" name="Logo & Mark" tag="Foundation"
      desc='The pentagon mark is the only logo. The parent brand has two official files: light (gradient fill) and dark (ink fill). Product lockups (Brij Signal, Brij Agents) live in the Products chapter - never mix them here. The name is always typeset live in Arbutus Slab next to the mark - never baked into the asset.'
      stageTone="cream"
      spec={[
        ['Mark',    'Pentagon · 170×165 viewBox · never redrawn'],
        ['Light',   'Gradient fill · #7DC0F0 → #DDE782 → #F3C06A'],
        ['Dark',    'Ink fill · #272727'],
        ['Lockup',  'Mark + "Brij" in Arbutus Slab · 0.05em tracking'],
        ['Files',   'assets/logos/brij-light.svg · brij-dark.svg'],
        ['Products','See Products → Brij Signal / Brij Agents for their lockups'],
      ]}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 12 }}>
        {LOGOS.map((l) => (
          <div key={l.src} style={{ background: 'var(--brij-white)', border: '1px solid var(--border)', borderRadius: 8, padding: '40px 24px', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', minHeight: 160 }}>
            <img src={l.src} alt={l.label} style={{ height: 72 }} />
            <div style={{ position: 'absolute', top: 8, left: 12, fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--fg-3)' }}>{l.label}</div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: 16, background: 'var(--brij-white)', border: '1px solid var(--border)', borderRadius: 8, padding: '40px 24px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 14, position: 'relative', minHeight: 140 }}>
        <img src="../../assets/logos/brij-light.svg" alt="Brij" style={{ height: 44 }} />
        <span style={{ fontFamily: 'var(--brij-serif)', fontSize: 34, letterSpacing: '0.05em' }}>Brij</span>
        <div style={{ position: 'absolute', top: 8, left: 12, fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--fg-3)' }}>Lockup · mark + live type</div>
      </div>
    </Component>
  );
}

function FoundationLogoMotion() {
  return (
    <Component id="logo-motion" name="Logo · Motion" tag="Foundation"
      desc="The animated mark. The canonical opener for videos, deck intros, and social motion posts. Use it once, at the start - never looping as page decoration."
      stageTone="cream"
      spec={[
        ['File',    'ui_kits/component_library/assets/logo-motion.mp4'],
        ['Use',     'Video openers, deck intros, LinkedIn motion posts'],
        ['Rule',    'Plays once at the start of a piece - not ambient decoration'],
      ]}>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <video src="./assets/logo-motion.mp4" autoPlay loop muted playsInline style={{ width: '100%', maxWidth: 560, borderRadius: 8, border: '1px solid var(--border)', background: 'var(--brij-white)' }} />
      </div>
    </Component>
  );
}

Object.assign(window, { FoundationColors, FoundationGradient, FoundationType, FoundationSpacing, FoundationLogo, FoundationLogoMotion });
