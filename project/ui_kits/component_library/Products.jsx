// ══════════════════════════════════════════════════════════════
// Products - sub-brand architecture (Brij Signal, Brij Agents)
// Adapted from "Brij Sub-Brand Architecture" exploration.
// ══════════════════════════════════════════════════════════════

const PENT_TOP = "M58.0296 2.65002C62.8929 -0.88334 69.4789 -0.883342 74.3421 2.65002L126.651 40.6549C127.535 41.2974 128.324 42.0314 129.015 42.8346C88.8973 55.4675 48.7791 68.1001 8.66146 80.733L0.68001 56.1686C-1.17759 50.4515 0.857793 44.1883 5.72103 40.6549L58.0296 2.65002Z";
const PENT_BOT = "M132.147 54.3483C132.036 54.9583 131.886 55.5668 131.691 56.1686L111.711 117.661C109.854 123.378 104.525 127.249 98.514 127.249H33.8568C29.5303 127.249 25.5581 125.243 22.9788 121.988C59.3679 99.4412 95.7577 76.895 132.147 54.3483Z";
const PENT_FULL = PENT_BOT + PENT_TOP;

// One shared <defs> block: gradients + reusable marks
function ProductDefs() {
  return (
    <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true">
      <defs>
        <linearGradient id="pg-full" x1="0" y1="128" x2="133" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#98C6E7"/><stop offset="0.5" stopColor="#D8E094"/><stop offset="1" stopColor="#F3C06A"/>
        </linearGradient>
        <linearGradient id="pg-signal" x1="0" y1="128" x2="133" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#98C6E7"/><stop offset="0.4" stopColor="#98C6E7"/><stop offset="1" stopColor="#D8E094"/>
        </linearGradient>
        <linearGradient id="pg-agents" x1="0" y1="128" x2="133" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#D8E094"/><stop offset="0.6" stopColor="#F3C06A"/><stop offset="1" stopColor="#F3C06A"/>
        </linearGradient>
        <linearGradient id="pg-next" x1="0" y1="128" x2="133" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#98C6E7"/><stop offset="0.45" stopColor="#D8E094"/><stop offset="1" stopColor="#D8E094"/>
        </linearGradient>
        <symbol id="pm-full" viewBox="0 0 133 128"><path d={PENT_FULL} fill="url(#pg-full)"/></symbol>
        <symbol id="pm-signal" viewBox="0 0 133 128"><path d={PENT_FULL} fill="url(#pg-signal)"/></symbol>
        <symbol id="pm-agents" viewBox="0 0 133 128"><path d={PENT_FULL} fill="url(#pg-agents)"/></symbol>
        <symbol id="pm-next" viewBox="0 0 133 128"><path d={PENT_FULL} fill="url(#pg-next)"/></symbol>
      </defs>
    </svg>
  );
}

const Pent = ({ id, w = 64 }) => (
  <svg width={w} height={Math.round(w * 128 / 133)} viewBox="0 0 133 128"><use href={`#${id}`} /></svg>
);

// Agent avatar: circle filled with the product's climate tint, serif letter in ink.
// No pentagon inside the letterform - the climate color alone names the product.
function AgentAvatar({ letter, tint, accent, size = 56 }) {
  return (
    <span style={{ width: size, height: size, borderRadius: '50%', background: tint, border: `1.5px solid ${accent}`, display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
      <span style={{ fontFamily: 'var(--brij-serif)', fontSize: size * 0.43, lineHeight: 1, color: 'var(--fg-1)' }}>{letter}</span>
    </span>
  );
}

function ProductsOverview() {
  return (
    <Component id="products-overview" name="Family Overview" tag="Architecture"
      desc="One lab, many bridges. Each product claims a climate of the parent gradient: Brij Signal runs sky, Brij Agents runs sun. Sage is the shared middle - it belongs to both and to neither."
      stageTone="cream">
      <ProductDefs />
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 48, flexWrap: 'wrap', padding: '16px 0' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 }}>
          <Pent id="pm-full" w={96} />
          <span style={{ fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--fg-3)', fontWeight: 600 }}>Brij · full spectrum</span>
        </div>
        <div style={{ width: 72, height: 1, background: 'linear-gradient(90deg, #f3c06a, #d8e094, #98c6e7)' }} />
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 }}>
          <Pent id="pm-signal" w={68} />
          <span style={{ fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--fg-3)', fontWeight: 600 }}>Signal · sky-led</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 }}>
          <Pent id="pm-agents" w={68} />
          <span style={{ fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--fg-3)', fontWeight: 600 }}>Agents · sun-led</span>
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 16, marginTop: 24 }}>
        {[
          ['01', 'One wordmark', 'Brij stays in Arbutus Slab. Product names sit beside it in Plus Jakarta Sans - quiet, functional.'],
          ['02', 'One palette', 'Sun, sage, sky. Signal re-anchors cool; Agents re-anchors warm. Sage holds the third seat.'],
          ['03', 'One climate each', 'Agents carry a serif initial inside a climate-tinted circle - the color alone names the product.'],
        ].map(([n, t, d]) => (
          <div key={n} style={{ background: 'var(--brij-white)', border: '1px solid var(--border)', borderRadius: 12, padding: '24px 28px' }}>
            <span style={{ fontFamily: 'var(--brij-serif)', fontSize: 13 }}>{n}</span>
            <p style={{ fontSize: 15, fontWeight: 600, margin: '10px 0 6px' }}>{t}</p>
            <p style={{ fontSize: 13, lineHeight: 1.5, letterSpacing: '0.02em', color: 'var(--fg-2)', margin: 0 }}>{d}</p>
          </div>
        ))}
      </div>
    </Component>
  );
}

// ─── Gradient usage ──────────────────────────────────────────
const GRAD_ROWS = [
  { name: 'Brij · full spectrum', css: 'linear-gradient(135deg,#F3C06A 0%,#D8E094 50%,#98C6E7 100%)', stops: '#F3C06A → #D8E094 → #98C6E7', use: 'Parent brand only - the corporate logo, brand-level decks, the website. Three stops, always.' },
  { name: 'Signal · sage → sky',  css: 'linear-gradient(135deg,#D8E094 0%,#98C6E7 100%)', stops: '#D8E094 → #98C6E7', use: 'Everything Brij Signal - its mark, hairlines, and highlight words. Two stops only, never three.' },
  { name: 'Agents · sage → sun',  css: 'linear-gradient(135deg,#D8E094 0%,#F3C06A 100%)', stops: '#D8E094 → #F3C06A', use: 'Everything Brij Agents - its mark, hairlines, and highlight words. Two stops only, never three.' },
];

function ProductGradients() {
  return (
    <Component id="product-gradients" name="Gradient Usage" tag="Architecture"
      desc="Which gradient belongs to whom. The three-stop spectrum is the parent's alone. Each product keeps sage and swaps the far stop for its own climate - so any two-tone gradient instantly names the product."
      stageTone="cream"
      spec={[
        ['Parent',  '3 stops · #F3C06A → #D8E094 → #98C6E7 · 135°'],
        ['Signal',  '2 stops · #D8E094 → #98C6E7 (sage → sky)'],
        ['Agents',  '2 stops · #D8E094 → #F3C06A (sage → sun)'],
        ['Rule',    'Product material never carries the 3-stop spectrum'],
        ['Rule',    'Sky and sun never meet without sage between them'],
      ]}
      dodont={{
        do: <p>Use the product's two-tone gradient on hairlines, marks, and one highlight word. Sage is always one of the two stops.</p>,
        dont: <p>Put the full 3-stop spectrum on Signal or Agents material, or build a sky→sun gradient that skips sage.</p>,
      }}>
      <div style={{ display: 'grid', gap: 24 }}>
        {GRAD_ROWS.map((g) => (
          <div key={g.name} style={{ display: 'grid', gap: 10 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 16, flexWrap: 'wrap' }}>
              <span style={{ fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--fg-1)', fontWeight: 600 }}>{g.name}</span>
              <span style={{ fontSize: 11, color: 'var(--fg-3)', fontFamily: 'JetBrains Mono, monospace' }}>{g.stops}</span>
            </div>
            <div style={{ height: 10, borderRadius: 52, background: g.css }} />
            <div style={{ fontSize: 13, lineHeight: 1.5, letterSpacing: '0.02em', color: 'var(--fg-2)' }}>{g.use}</div>
          </div>
        ))}
      </div>
    </Component>
  );
}

// Official logo files strip for a product.
// Each entry: [src (literal path), label, file basename] - the src stays a
// literal string so the standalone bundle can rewrite it to a packed asset.
function ProductLogoFiles({ files }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginTop: 24 }}>
      {files.map(([src, label, file]) => (
        <div key={src} style={{ background: 'var(--brij-white)', border: '1px solid var(--border)', borderRadius: 8, padding: '32px 24px', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', minHeight: 130 }}>
          <img src={src} alt={label} style={{ height: 56 }} />
          <div style={{ position: 'absolute', top: 8, left: 12, fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--fg-3)' }}>{label}</div>
          <div style={{ position: 'absolute', bottom: 8, right: 12, fontSize: 10, color: 'var(--fg-3)', fontFamily: 'JetBrains Mono, monospace' }}>assets/logos/{file}.svg</div>
        </div>
      ))}
    </div>
  );
}

// Shared product identity card
function ProductCard({ label, markId, name, sub, barBg, accentHex, accentName, surface, blurb }) {
  return (
    <div style={{ background: 'var(--brij-white)', border: '1px solid var(--border)', borderRadius: 16, padding: 32, display: 'flex', flexDirection: 'column', gap: 20 }}>
      <span style={{ fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--fg-3)', fontWeight: 600 }}>{label}</span>
      <div style={{ height: 120, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Pent id={markId} w={112} />
      </div>
      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'center', gap: 8 }}>
        <svg width="20" height="19" viewBox="0 0 133 128" style={{ alignSelf: 'center' }}><use href={`#${markId}`} /></svg>
        <span style={{ fontFamily: 'var(--brij-serif)', fontSize: 19, letterSpacing: '0.05em' }}>Brij</span>
        <span style={{ fontSize: 15, letterSpacing: '0.04em', color: 'var(--fg-2)' }}>{name}</span>
        {sub && <span style={{ fontSize: 11, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--fg-3)' }}>{sub}</span>}
      </div>
      <div style={{ borderTop: '1px solid var(--border)', paddingTop: 16, display: 'flex', flexDirection: 'column', gap: 10 }}>
        <div style={{ height: 8, borderRadius: 52, background: barBg }} />
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ width: 12, height: 12, borderRadius: 4, background: accentHex }} />
          <span style={{ fontSize: 13, letterSpacing: '0.02em', color: 'var(--fg-2)' }}>Accent — {accentName} {accentHex}</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ width: 12, height: 12, borderRadius: 4, background: surface, border: '1px solid var(--border)' }} />
          <span style={{ fontSize: 13, letterSpacing: '0.02em', color: 'var(--fg-2)' }}>Surface — {accentName} at 14%</span>
        </div>
      </div>
      <p style={{ margin: 0, fontSize: 13, lineHeight: 1.5, letterSpacing: '0.02em', color: 'var(--fg-2)' }}>{blurb}</p>
    </div>
  );
}

function ProductSignal() {
  return (
    <Component id="product-signal" name="Brij Signal" tag="Product"
      desc="AI for communications, PR, and strategic analysis. Signals in, strategy out. Sky-led: cool, precise, always listening."
      spec={[
        ['Mark',     'Pentagon · sky-weighted gradient (#98C6E7 → #D8E094)'],
        ['Gradient', 'Two stops · sage → sky · never the 3-stop spectrum'],
        ['Accent',   'Sky · #98C6E7'],
        ['Surface',  'Sky at 14% on cream'],
        ['Lockup',   'Brij (serif) + Signal (sans, muted)'],
        ['Voice',    'Five sky bars · 1.1s ease-in-out loop'],
        ['Files',    'assets/logos/brij-signal-[light|dark].svg'],
      ]}
      dodont={{
        do: <p>Keep Signal cool: sky accent, sage→sky gradient, sky-tinted surfaces. One accent moment per screen.</p>,
        dont: <p>Use sun (#F3C06A) anywhere in Signal material, or borrow the parent's 3-stop gradient.</p>,
      }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, alignItems: 'stretch' }}>
        <ProductCard label="Brij Signal" markId="pm-signal" name="Signal"
          barBg="linear-gradient(90deg, #98C6E7 40%, #D8E094)" accentHex="#98C6E7" accentName="Sky"
          surface="rgba(152,198,231,0.14)"
          blurb="Sky-led. Cool, precise, always listening." />
        <div style={{ background: 'var(--brij-white)', border: '1px solid var(--border)', borderRadius: 16, padding: 32, display: 'flex', flexDirection: 'column', gap: 24, alignItems: 'center', justifyContent: 'center' }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 12, border: '1px solid var(--border)', borderRadius: 52, padding: '11px 20px' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 3, height: 18 }}>
              {[8, 14, 18, 12, 7].map((h, i) => (
                <span key={i} style={{ width: 3, height: h, borderRadius: 52, background: '#98C6E7', animation: `brij-vb 1.1s ease-in-out infinite`, animationDelay: `${i * 0.15}s` }} />
              ))}
            </span>
            <span style={{ fontSize: 14, fontWeight: 500 }}>Voice input</span>
          </span>
          <span style={{ fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--fg-3)', fontWeight: 600 }}>Voice indicator · sky</span>
        </div>
      </div>
      <ProductLogoFiles files={[
        ['../../assets/logos/brij-signal-light.svg', 'Brij Signal · light', 'brij-signal-light'],
        ['../../assets/logos/brij-signal-dark.svg',  'Brij Signal · dark',  'brij-signal-dark'],
      ]} />
    </Component>
  );
}

// ─── Signal interface tokens ─────────────────────────────────
// Extracted from the live Brij Signal product design system
// (shared/frontend/src/styles/design-system.css). Any page, deck,
// or mock about the product uses these values so it looks identical
// to the product itself. Full token set: signal/signal.css in this
// project.

function SignalDemoPanel({ dark }) {
  const page  = dark ? '#121721' : '#EEEFEC';
  const card  = dark ? '#1B202C' : '#FFFFFF';
  const ink   = dark ? '#EAEAEE' : '#1A2540';
  const muted = dark ? '#ACADB6' : '#6B6B63';
  const shadow = dark
    ? '0 2px 4px rgb(0 0 0 / 0.26), 0 14px 28px -6px rgb(0 0 0 / 0.30)'
    : '0 2px 6px rgb(26 37 64 / 0.03), 0 24px 56px -16px rgb(26 37 64 / 0.14)';
  return (
    <div style={{ background: page, borderRadius: 14, padding: 24 }}>
      <div style={{ background: card, borderRadius: 10, padding: '18px 20px', boxShadow: shadow }}>
        <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: muted }}>Narrative velocity</div>
        <div style={{ fontFamily: 'var(--brij-serif)', fontSize: 32, color: ink, marginTop: 6 }}>+38%</div>
        <div style={{ fontSize: 12, color: muted, marginTop: 4 }}>{dark ? 'Soft cool charcoal, never pure black' : 'White panel floating on the sage page'}</div>
      </div>
    </div>
  );
}

const SIGNAL_TOKENS = [
  ['Page',      '#EEEFEC', 'Sage greige · hsl(75 9% 93%)'],
  ['Card',      '#FFFFFF', 'Floating white panel'],
  ['Ink',       '#1A2540', 'Text + primary actions'],
  ['Secondary', '#6B6B63', 'Helper text'],
  ['Hairline',  '#E8E6E1', 'Dividers, inputs'],
  ['Dark page', '#121721', 'hsl(222 28% 10%)'],
];

function ProductSignalInterface() {
  return (
    <Component id="product-signal-interface" name="Signal · Interface" tag="Product"
      desc="The product interface itself, extracted from Brij Signal's live design system. The page is sage greige - not cream, not white. Pure white panels float on it, lifted by two-layer shadows tinted with navy ink. Text and primary actions are navy ink #1A2540. Dark mode is a soft cool charcoal - never pure black."
      stageTone="cream"
      spec={[
        ['Page',       'Sage greige · hsl(75 9% 93%)'],
        ['Panels',     'White · floating · radius 8-24px'],
        ['Ink',        'Navy #1A2540 · text + primary buttons'],
        ['Text ramp',  '#1A2540 → #6B6B63 → #A3A39B (disabled only)'],
        ['Shadows',    'Two layers · tinted rgb(26 37 64 / …) · never black'],
        ['Status',     '#BB3325 · #3D7E2C · #E0A83E · #2563EB · tints via alpha'],
        ['Dark mode',  'Page hsl(222 28% 10%) · cards lift to 14%'],
        ['Type',       'Plus Jakarta Sans UI · Arbutus Slab display · Heebo Hebrew'],
        ['Motion',     '150/200/300ms · expo-out default'],
        ['Tokens',     'signal/signal.css (this project) · design-system.css (product repo)'],
      ]}
      dodont={{
        do: <p>Build Signal product surfaces on sage greige with floating white panels and navy ink. Compose status tints with alpha - hsl(var(--success) / 0.1).</p>,
        dont: <p>Use cream or plain white as the Signal page, outline panels instead of floating them, or use pure-black shadows and pure-black dark mode.</p>,
      }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
        <SignalDemoPanel />
        <SignalDemoPanel dark />
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: 10, marginTop: 20 }}>
        {SIGNAL_TOKENS.map(([name, hex, use]) => (
          <div key={name}>
            <div style={{ height: 40, background: hex, borderRadius: 8, border: '1px solid var(--border)' }} />
            <div style={{ fontSize: 11, fontWeight: 600, marginTop: 6, color: 'var(--fg-1)' }}>{name}</div>
            <div style={{ fontSize: 10, color: 'var(--fg-3)', fontFamily: 'JetBrains Mono, monospace' }}>{hex}</div>
            <div style={{ fontSize: 10, color: 'var(--fg-2)', marginTop: 2, lineHeight: 1.4 }}>{use}</div>
          </div>
        ))}
      </div>
    </Component>
  );
}

// ─── Signal chart palette - "Brij Bloom" ─────────────────────
const BLOOM = [
  ['#172542', 'navy'], ['#BCBEDF', 'lavender'], ['#DD7B43', 'orange'], ['#70CBA7', 'mint'], ['#F1C363', 'gold'],
  ['#DFDD73', 'citron'], ['#7C80E2', 'periwinkle'], ['#90D9D3', 'aqua'], ['#B991E7', 'lilac'], ['#A5C97C', 'sage'],
];

function ProductSignalCharts() {
  return (
    <Component id="product-signal-charts" name="Signal · Chart Palette" tag="Product"
      desc="Brij Bloom - the ten-series data palette inside the Signal product. Sun, Sage, and Sky families only, the sun expressed as honey-gold, never dark amber. Chart hues encode data identity, not UI state: the same ten hues serve light and dark mode."
      stageTone="cream"
      spec={[
        ['Series',   '10 · --chart-1 … --chart-10'],
        ['Families', 'Sun / Sage / Sky · honey-gold, never dark amber'],
        ['Dark mode','Same hues - the palette never inverts'],
        ['Scope',    'Data visualization inside the product only'],
        ['Rule',     'The sun-family hues here are chart fills, not brand accents'],
      ]}
      dodont={{
        do: <p>Use the ten Bloom hues, in order, for multi-series charts in Signal product material. Keep them identical across themes.</p>,
        dont: <p>Reorder the palette per chart, use Bloom hues as UI accents outside data viz, or invent an eleventh series color.</p>,
      }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(10, 1fr)', gap: 8 }}>
        {BLOOM.map(([hex, name], i) => (
          <div key={hex}>
            <div style={{ height: 56, background: hex, borderRadius: 8 }} />
            <div style={{ fontSize: 10, color: 'var(--fg-2)', marginTop: 6, fontWeight: 600 }}>{name}</div>
            <div style={{ fontSize: 9, color: 'var(--fg-3)', fontFamily: 'JetBrains Mono, monospace' }}>{i + 1} · {hex}</div>
          </div>
        ))}
      </div>
    </Component>
  );
}

function ProductAgents() {
  return (
    <Component id="product-agents" name="Brij Agents · CorpBrain" tag="Product"
      desc="Education agents for large-scale institutions. Institutional memory that learns. Sun-led: warm, active, accumulating."
      spec={[
        ['Mark',     'Pentagon · sun-weighted gradient (#D8E094 → #F3C06A)'],
        ['Gradient', 'Two stops · sage → sun · never the 3-stop spectrum'],
        ['Accent',   'Sun · #F3C06A'],
        ['Surface',  'Sun at 14% on cream'],
        ['Lockup',   'Brij (serif) + Agents (sans, muted) + CorpBrain tag'],
        ['Agents',   'Serif initial in a climate-tinted circle · one per agent'],
        ['Files',    'assets/logos/brij-agents-[light|dark].svg'],
      ]}
      dodont={{
        do: <p>Keep Agents warm: sun accent, sage→sun gradient, sun-tinted surfaces. Agent avatars always use the serif initial in a tinted circle.</p>,
        dont: <p>Use sky (#98C6E7) anywhere in Agents material, put a pentagon inside an avatar, or borrow the parent's 3-stop gradient.</p>,
      }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, alignItems: 'stretch' }}>
        <ProductCard label="Brij Agents · CorpBrain" markId="pm-agents" name="Agents"
          sub="CorpBrain"
          barBg="linear-gradient(90deg, #D8E094, #F3C06A 60%)" accentHex="#F3C06A" accentName="Sun"
          surface="rgba(243,192,106,0.14)"
          blurb="Sun-led. Warm, active, institutional memory." />
        <div style={{ background: 'var(--brij-white)', border: '1px solid var(--border)', borderRadius: 16, padding: 32, display: 'flex', flexDirection: 'column', gap: 24, alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ display: 'flex', gap: 14 }}>
            {['n', 'i', 'o', 'm'].map((l) => (
              <AgentAvatar key={l} letter={l} tint="rgba(243,192,106,0.14)" accent="#F3C06A" />
            ))}
          </div>
          <span style={{ fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--fg-3)', fontWeight: 600, maxWidth: 280, textAlign: 'center' }}>Agent avatars — a letter per agent, a climate per product</span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 10, border: '1px solid var(--border)', borderRadius: 52, padding: '8px 18px 8px 8px' }}>
            <AgentAvatar letter="n" tint="rgba(243,192,106,0.14)" accent="#F3C06A" size={30} />
            <span style={{ fontSize: 14, fontWeight: 500 }}>Agent n is teaching</span>
          </span>
          <span style={{ fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--fg-3)', fontWeight: 600 }}>Agent chip · in the interface</span>
        </div>
      </div>
      <ProductLogoFiles files={[
        ['../../assets/logos/brij-agents-light.svg', 'Brij Agents · light', 'brij-agents-light'],
        ['../../assets/logos/brij-agents-dark.svg',  'Brij Agents · dark',  'brij-agents-dark'],
      ]} />
    </Component>
  );
}

Object.assign(window, { ProductsOverview, ProductGradients, ProductSignal, ProductSignalInterface, ProductSignalCharts, ProductAgents });
