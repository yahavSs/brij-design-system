// ══════════════════════════════════════════════════════════════
// Content Patterns - Capability Row, Process Grid, Case Study, CTA, Do/Don't
// ══════════════════════════════════════════════════════════════

const CAPABILITIES = [
  { n: '01', title: 'Strategic Clarity',       desc: 'We cut through AI noise into a focused roadmap aligned with your business.' },
  { n: '02', title: 'AI Products That Ship',   desc: 'From prototype to production. Real systems, real users, measurable outcomes.' },
  { n: '03', title: 'Continuous Advantage',    desc: 'We stay ahead of model shifts so your edge compounds instead of eroding.' },
];

function PatternCapabilityRow() {
  return (
    <Component id="capability-row" name="Capability Row" tag="Content"
      desc="Numbered list item with big serif number, title, and body. Stack 3–5 of these in a structured rows pattern."
      stageTone="cream"
      spec={[
        ['Columns', '80px number · 200px title · 1fr body'],
        ['Number',  '36px · Arbutus Slab 400 · ink'],
        ['Title',   '22px · Arbutus Slab 400 · ink'],
        ['Body',    '15px · Jakarta 400 · line-height 1.55 · max 460px'],
        ['Rules',   '1px top + bottom · var(--brij-border)'],
        ['Padding', '24px 0 per row'],
      ]}>
      <div style={{ display: 'grid', gap: 0 }}>
        {CAPABILITIES.map((c, i) => (
          <div key={c.n} style={{ display: 'grid', gridTemplateColumns: '80px 200px 1fr', gap: 32, alignItems: 'baseline', padding: '24px 0', borderTop: i === 0 ? '1px solid var(--border)' : 'none', borderBottom: '1px solid var(--border)' }}>
            <div style={{ fontFamily: 'var(--brij-serif)', fontSize: 36, color: 'var(--fg-1)' }}>{c.n}</div>
            <div style={{ fontFamily: 'var(--brij-serif)', fontSize: 22, color: 'var(--fg-1)' }}>{c.title}</div>
            <div style={{ fontSize: 15, lineHeight: 1.55, color: 'var(--fg-2)', maxWidth: 460 }}>{c.desc}</div>
          </div>
        ))}
      </div>
    </Component>
  );
}

const PROCESS = [
  { n: '01', title: 'Discovery', desc: 'We read the current - your business, data, and where AI creates leverage.' },
  { n: '02', title: 'Strategy',  desc: 'We map the bridge - a focused plan for where to build, buy, and adapt.' },
  { n: '03', title: 'Build',     desc: 'We ship - production-grade AI systems designed for your reality.' },
  { n: '04', title: 'Evolve',    desc: 'We stay ahead - continuous recalibration as the landscape shifts.' },
];

function PatternProcessGrid() {
  return (
    <Component id="process-grid" name="Process 2×2 Grid" tag="Content"
      desc="Four phases in a 2×2. Each cell: small number, serif title, body. Thin interior rules. Do not decorate - the grid is the structure."
      stageTone="cream"
      spec={[
        ['Layout',    '2 × 2 · equal cells'],
        ['Cell',      'padding 28px · white bg'],
        ['Eyebrow',   '11px · tracking .12 · uppercase · muted'],
        ['Title',     '24px · Arbutus Slab 400'],
        ['Body',      '14px · Jakarta · line-height 1.55'],
        ['Container', '1px border · radius 8px · overflow hidden'],
      ]}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0, border: '1px solid var(--border)', borderRadius: 8, overflow: 'hidden' }}>
        {PROCESS.map((p, i) => (
          <div key={p.n} style={{ padding: 28, background: 'var(--brij-white)', borderRight: i % 2 === 0 ? '1px solid var(--border)' : 'none', borderBottom: i < 2 ? '1px solid var(--border)' : 'none' }}>
            <div style={{ fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--fg-3)', marginBottom: 12 }}>{p.n}</div>
            <div style={{ fontFamily: 'var(--brij-serif)', fontSize: 24, color: 'var(--fg-1)', marginBottom: 10 }}>{p.title}</div>
            <div style={{ fontSize: 14, lineHeight: 1.55, color: 'var(--fg-2)' }}>{p.desc}</div>
          </div>
        ))}
      </div>
    </Component>
  );
}

function PatternCaseStudy() {
  return (
    <Component id="case-study" name="Case Study Card" tag="Content"
      desc="Image top · label + title · outcome stat · tags. Use the pentagon arrow on hover-able cards to suggest action."
      stageTone="cream"
      spec={[
        ['Card',    '1px border · radius 12px · white bg'],
        ['Image',   'aspect 16:10 · gradient or photo'],
        ['Tag',     '11px · tracking .12 · uppercase · muted'],
        ['Title',   '22px · Arbutus Slab · sentence case'],
        ['Outcome', '28px · Arbutus Slab · bordered below'],
        ['Chips',   '11px pill · 1px border · 4px 10px'],
      ]}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
        {[
          { tag: 'FinTech · 2025', title: 'Retention AI for a neobank', outcome: '+34% 90-day retention', tags: ['Strategy', 'ML systems', 'Ongoing'] },
          { tag: 'Logistics · 2024', title: 'Demand forecast at port scale', outcome: '$2.1M saved / quarter', tags: ['Forecasting', 'Shipped'] },
        ].map((c) => (
          <div key={c.title} style={{ background: 'var(--brij-white)', border: '1px solid var(--border)', borderRadius: 12, overflow: 'hidden' }}>
            <div style={{ aspectRatio: '16/10', background: 'linear-gradient(135deg,#f3c06a 0%,#d8e094 46%,#98c6e7 100%)' }} />
            <div style={{ padding: 24 }}>
              <div style={{ fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--fg-3)', marginBottom: 10 }}>{c.tag}</div>
              <div style={{ fontFamily: 'var(--brij-serif)', fontSize: 22, color: 'var(--fg-1)', marginBottom: 18, lineHeight: 1.2 }}>{c.title}</div>
              <div style={{ fontFamily: 'var(--brij-serif)', fontSize: 28, color: 'var(--fg-1)', marginBottom: 16, paddingBottom: 16, borderBottom: '1px solid var(--border)' }}>{c.outcome}</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {c.tags.map((t) => <span key={t} style={{ fontSize: 11, padding: '4px 10px', border: '1px solid var(--border)', borderRadius: 40, color: 'var(--fg-2)' }}>{t}</span>)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Component>
  );
}

function PatternCTABlock() {
  return (
    <Component id="cta-block" name="CTA Block" tag="Content"
      desc="Centered headline, subcopy, one button. Faint pentagon mark at 3–4% opacity centered behind the content - this is the only place you may use the mark decoratively.">
      <div style={{ position: 'relative', padding: '80px 40px', textAlign: 'center', background: 'var(--brij-cream)', borderRadius: 12, border: '1px solid var(--border)', overflow: 'hidden' }}>
        <img src="../../assets/logo-b-mark.svg" alt="" style={{ position: 'absolute', inset: 0, margin: 'auto', width: 320, opacity: 0.05, pointerEvents: 'none' }} />
        <div style={{ position: 'relative' }}>
          <h2 style={{ fontFamily: 'var(--brij-serif)', fontSize: 40, color: 'var(--fg-1)', marginBottom: 18, lineHeight: 1.1 }}>Ready to lead the new era?</h2>
          <p style={{ fontSize: 17, color: 'var(--fg-2)', marginBottom: 32, maxWidth: 540, margin: '0 auto 32px' }}>Those who learn to move with the current will define what comes next.</p>
          <Btn variant="primary">Time to brij</Btn>
        </div>
      </div>
    </Component>
  );
}

function PatternDoDont() {
  return (
    <Component id="dodont" name="Do / Don't Pair" tag="Content"
      desc="Two columns - green for do, muted red for don't. Use for brand rules in docs or onboarding decks. Keep copy short and concrete; one rule per line."
      stageTone="cream"
      spec={[
        ['Layout',  '2 columns · equal width · 12px gap'],
        ['Padding', '16px 20px · border-radius 8px'],
        ['Label',   '10px · Jakarta 600 · tracking .14 · uppercase'],
        ['Do',      'bg #eef4ee · border #cfe0d0 · text #2d5f34'],
        ['Don\u2019t', 'bg #f7ecec · border #e5c9c9 · text #7a3a3a'],
      ]}
      dodont={{
        do: (
          <>
            <div>White space as a design element</div>
            <div>Thin rule lines as section markers</div>
            <div>Serif + sans contrast for the bridge metaphor</div>
          </>
        ),
        dont: (
          <>
            <div>Dark backgrounds or grey tones</div>
            <div>Grid patterns, noise, busy textures</div>
            <div>Heavy drop shadows or glow effects</div>
          </>
        )
      }}>
      <div style={{ fontFamily: 'var(--brij-serif)', fontSize: 20, color: 'var(--fg-1)', marginBottom: 6 }}>Rules, plain and paired.</div>
      <div style={{ fontSize: 14, color: 'var(--fg-2)', lineHeight: 1.55, maxWidth: 520 }}>
        The pattern renders below - green for what to do, muted red for what to avoid. Use it verbatim in decks, docs, or onboarding.
      </div>
    </Component>
  );
}

Object.assign(window, { PatternCapabilityRow, PatternProcessGrid, PatternCaseStudy, PatternCTABlock, PatternDoDont });
