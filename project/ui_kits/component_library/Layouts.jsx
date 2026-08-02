// ══════════════════════════════════════════════════════════════
// Deck & Doc Layouts + Templates + Rules
// ══════════════════════════════════════════════════════════════

// Slide frame - fixed 16:9 scaled to fit
function Slide({ children, tone = 'cream' }) {
  const bg = tone === 'ink' ? 'var(--brij-ink)' : 'var(--brij-cream)';
  const fg = tone === 'ink' ? 'var(--brij-cream)' : 'var(--fg-1)';
  return (
    <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9', background: bg, color: fg, border: '1px solid var(--border)', borderRadius: 8, overflow: 'hidden', containerType: 'inline-size' }}>
      {children}
    </div>
  );
}

function SlideTitle() {
  return (
    <Component id="slide-title" name="Title Slide" tag="Deck" desc="Opens a deck. Wordmark small top-left, big display headline center, coordinate divider bottom.">
      <Slide>
        <div style={{ position: 'absolute', top: '4%', left: '5%' }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.8cqi' }}><img src="../../assets/logos/brij-light.svg" alt="Brij" style={{ height: '3cqi' }} /><span style={{ fontFamily: 'var(--brij-serif)', fontSize: '2.4cqi', letterSpacing: '0.05em' }}>Brij</span></span>
        </div>
        <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 5%', containerType: 'inline-size' }}>
          <div style={{ fontSize: '1.3cqi', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--fg-3)', marginBottom: '2cqi' }}>[ Intelligence Lab · Q1 2025 ]</div>
          <div style={{ fontFamily: 'var(--brij-sans)', fontWeight: 700, fontSize: '7cqi', lineHeight: 1.02, letterSpacing: '-0.01em' }}>Decisive competitive<br/>advantage.</div>
        </div>
        <div style={{ position: 'absolute', bottom: '3%', left: '5%', right: '5%', display: 'flex', justifyContent: 'space-between', fontSize: '1.1cqi', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--fg-3)', borderTop: '1px solid var(--border)', paddingTop: '1.6cqi' }}>
          <span>Intelligence Lab.</span><span>Tel Aviv</span>
        </div>
      </Slide>
    </Component>
  );
}

function SlideSection() {
  return (
    <Component id="slide-section" name="Section Divider" tag="Deck" desc="Big number + category label + serif headline. Signals a new chapter.">
      <Slide tone="ink">
        <div style={{ position: 'absolute', inset: 0, display: 'grid', gridTemplateColumns: '22% 1fr', alignItems: 'center', padding: '0 5%', gap: '3cqi' }}>
          <div style={{ fontFamily: 'var(--brij-serif)', fontSize: '14cqi', lineHeight: 1, color: 'var(--brij-cream)' }}>02</div>
          <div>
            <div style={{ fontSize: '1.3cqi', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--brij-t3)', marginBottom: '2cqi' }}>Strategy</div>
            <div style={{ fontFamily: 'var(--brij-serif)', fontSize: '5.5cqi', fontWeight: 400, lineHeight: 1.1 }}>How we move from here.</div>
          </div>
        </div>
      </Slide>
    </Component>
  );
}

function SlideQuote() {
  return (
    <Component id="slide-quote" name="Big Quote Slide" tag="Deck" desc="Full-bleed pull quote. Attribution small bottom-right.">
      <Slide>
        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', padding: '0 8%' }}>
          <blockquote style={{ position: 'relative', paddingLeft: '3cqi' }}>
            <span aria-hidden style={{ position: 'absolute', left: 0, top: 4, bottom: 4, width: 1, background: 'linear-gradient(180deg, #f3c06a 0%, #d8e094 50%, #98c6e7 100%)' }} />
            <p style={{ fontFamily: 'var(--brij-serif)', fontSize: '4.2cqi', lineHeight: 1.2, color: 'var(--fg-1)', marginBottom: '2.4cqi' }}>
              We don{'’'}t wait for things to settle. We move with the current.
            </p>
            <cite style={{ fontSize: '1.1cqi', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--fg-3)', fontStyle: 'normal' }}>Brand manifesto</cite>
          </blockquote>
        </div>
      </Slide>
    </Component>
  );
}

function SlideStat() {
  return (
    <Component id="slide-stat" name="Stat Callout Slide" tag="Deck" desc="One number. One sentence. Nothing else.">
      <Slide>
        <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 6%' }}>
          <div style={{ fontSize: '1.3cqi', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--fg-3)', marginBottom: '1.2cqi' }}>Outcome</div>
          <div style={{ fontFamily: 'var(--brij-sans)', fontWeight: 700, fontSize: '18cqi', lineHeight: 0.95, letterSpacing: '-0.02em', marginBottom: '1.6cqi' }}>+34%</div>
          <div style={{ fontFamily: 'var(--brij-serif)', fontSize: '2.6cqi', color: 'var(--fg-2)', maxWidth: '70%' }}>90-day retention lift for a European neobank after six weeks of work.</div>
        </div>
      </Slide>
    </Component>
  );
}

function SlideCase() {
  return (
    <Component id="slide-case" name="Case Study Slide" tag="Deck" desc="Image left, case copy right. Split 5:4.">
      <Slide>
        <div style={{ position: 'absolute', inset: 0, display: 'grid', gridTemplateColumns: '5fr 4fr' }}>
          <div style={{ background: 'linear-gradient(135deg,#f3c06a,#d8e094 46%,#98c6e7)' }} />
          <div style={{ padding: '0 5%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div style={{ fontSize: '1.3cqi', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--fg-3)', marginBottom: '1.6cqi' }}>[ Case · FinTech 2025 ]</div>
            <div style={{ fontFamily: 'var(--brij-serif)', fontSize: '3.2cqi', lineHeight: 1.15, color: 'var(--fg-1)', marginBottom: '2.2cqi' }}>Retention AI for a neobank</div>
            <div style={{ fontSize: '1.6cqi', lineHeight: 1.55, color: 'var(--fg-2)' }}>Shipped a churn-prediction system into production in 6 weeks. Tripled the retention team{'’'}s reach without new headcount.</div>
          </div>
        </div>
      </Slide>
    </Component>
  );
}

function SlideClose() {
  return (
    <Component id="slide-close" name="Closing Slide" tag="Deck" desc='Final slide. "Time to brij." as the last word.'>
      <Slide tone="ink">
        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img src="../../assets/logos/brij-light.svg" alt="" style={{ position: 'absolute', width: '32%', opacity: 0.12 }} />
          <div style={{ textAlign: 'center', position: 'relative' }}>
            <div style={{ fontFamily: 'var(--brij-serif)', fontSize: '7.5cqi', color: 'var(--brij-cream)' }}>Time to brij.</div>
            <div style={{ marginTop: '2.2cqi', fontSize: '1.4cqi', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--brij-t3)' }}>hello@brijlabs.ai</div>
          </div>
        </div>
      </Slide>
    </Component>
  );
}

// ─── Doc Layouts ───────────────────────────────────────
function DocPage({ children }) {
  return (
    <div style={{ background: 'var(--brij-white)', border: '1px solid var(--border)', borderRadius: 4, aspectRatio: '8.5/11', overflow: 'hidden', position: 'relative', boxShadow: '0 1px 0 var(--border)' }}>
      {children}
    </div>
  );
}

function DocHeader() {
  return (
    <Component id="doc-header" name="Page Header" tag="Document" desc="Logo left, doc title center, date right. Thin rule below.">
      <div style={{ maxWidth: 520 }}>
        <DocPage>
          <div style={{ padding: '28px 36px 0' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', paddingBottom: 14, borderBottom: '1px solid transparent', borderImage: 'linear-gradient(90deg, #f3c06a 0%, #d8e094 50%, #98c6e7 100%) 1', borderImageSlice: '0 0 1 0', borderImageWidth: '0 0 1px 0' }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 10 }}><img src="../../assets/logos/brij-light.svg" alt="Brij" style={{ height: 16 }} /><span style={{ fontFamily: 'var(--brij-serif)', fontSize: 13, letterSpacing: '0.05em' }}>Brij</span></span>
              <div style={{ fontFamily: 'var(--brij-serif)', fontSize: 14, color: 'var(--fg-1)' }}>Engagement Brief</div>
              <div style={{ fontSize: 10, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--fg-3)' }}>Jan 2025</div>
            </div>
            <div style={{ marginTop: 36 }}>
              <div style={{ fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--fg-3)', marginBottom: 8 }}>[ Client · Acme Financial ]</div>
              <div style={{ fontFamily: 'var(--brij-serif)', fontSize: 24, color: 'var(--fg-1)', lineHeight: 1.15 }}>Retention AI - engagement scope.</div>
            </div>
          </div>
        </DocPage>
      </div>
    </Component>
  );
}

function DocSection() {
  return (
    <Component id="doc-section" name="Document Section" tag="Document" desc="Section header inside a doc. Label + headline + body. Lower scale than web.">
      <div style={{ padding: '8px 16px', maxWidth: 560 }}>
        <div style={{ fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--fg-3)', marginBottom: 10 }}>[ 02 - Scope ]</div>
        <div style={{ fontFamily: 'var(--brij-serif)', fontSize: 22, color: 'var(--fg-1)', marginBottom: 14 }}>What we're building together.</div>
        <div style={{ fontSize: 14, lineHeight: 1.6, color: 'var(--fg-2)' }}>A production churn-prediction model integrated into your retention team's daily workflow. Six-week build, two-week pilot, then a 90-day continuous-improvement window.</div>
      </div>
    </Component>
  );
}

function DocCallout() {
  return (
    <Component id="doc-callout" name="Callout Box" tag="Document"
      desc="In-document pull quote. Per the brandbook, the signature decorative element is a 2px horizontal gradient beam - same language as the ambient background lines. The callout is bracketed top + bottom by these beams. One per page maximum."
      spec={[
        ['Beams',      '2px · horizontal · signature gradient (top + bottom)'],
        ['Padding',    '24px 0 (vertical) · 0 (horizontal - flush)'],
        ['Background', 'var(--brij-cream) - same as page'],
        ['Type',       '20px Arbutus Slab · color: --fg-1'],
        ['Frequency',  'One callout per page maximum.'],
      ]}
      code={`<aside class="brij-callout">
  <p>We don't wait for things to settle. We move with the current.</p>
</aside>

<style>
.brij-callout {
  padding: 24px 0;
  background: var(--brij-cream);
  max-width: 600px;
  border-top: 2px solid;
  border-bottom: 2px solid;
  border-image: linear-gradient(90deg, #f3c06a 0%, #d8e094 50%, #98c6e7 100%) 1;
}
.brij-callout p {
  font-family: var(--brij-serif);
  font-size: 20px;
  line-height: 1.3;
  color: var(--fg-1);
  margin: 0;
}
</style>`}>
      <div style={{
        padding: '24px 0',
        background: 'var(--brij-cream)',
        maxWidth: 600,
        borderTop: '2px solid',
        borderBottom: '2px solid',
        borderImage: 'linear-gradient(90deg, #f3c06a 0%, #d8e094 50%, #98c6e7 100%) 1',
      }}>
        <div style={{ fontFamily: 'var(--brij-serif)', fontSize: 20, color: 'var(--fg-1)', lineHeight: 1.3 }}>We don't wait for things to settle. We move with the current.</div>
      </div>
    </Component>
  );
}

// ─── Templates ─────────────────────────────────────────
function Templates() {
  const items = [
    { file: 'templates/blank-slide.html',     title: 'Slide Deck',      sub: '16:9 · 1920×1080 · cream' },
    { file: 'templates/blank-doc.html',       title: 'Document',        sub: 'US Letter · 8.5×11 · white' },
    { file: 'templates/blank-onepager.html',  title: 'One-Pager',       sub: 'Web · 1200 wide · cream' },
  ];
  return (
    <Component id="templates" name="Starter Templates" tag="Templates" desc="One workflow for everything - slides, documents, and pages are all HTML files. Duplicate, edit, and present from your browser." stageTone="cream">
      <div style={{ background: 'var(--brij-cream)', border: '1px solid var(--border)', borderRadius: 8, padding: '24px 28px', marginBottom: 24 }}>
        <div style={{ fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--fg-3)', marginBottom: 12 }}>How to use</div>
        <ol style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 10, counterReset: 'how' }}>
          {[
            <span key="1"><b>Duplicate</b> the template into your project folder.</span>,
            <span key="2"><b>Edit in Claude Code or VS Code</b> - content, structure, anything. The Design System tokens are pre-wired.</span>,
            <span key="3"><b>Open in your browser</b> to preview, present, or print to PDF (Cmd+P).</span>,
          ].map((node, i) => (
            <li key={i} style={{ display: 'grid', gridTemplateColumns: '28px 1fr', gap: 14, alignItems: 'baseline', fontSize: 14, lineHeight: 1.6, color: 'var(--fg-2)' }}>
              <span style={{ fontFamily: 'var(--brij-serif)', fontSize: 16, color: 'var(--fg-3)' }}>{String(i + 1).padStart(2, '0')}</span>
              <span>{node}</span>
            </li>
          ))}
        </ol>
      </div>
      <div className="lib-variants">
        {items.map((t) => (
          <a key={t.file} href={t.file} target="_blank" rel="noopener" style={{ textDecoration: 'none', color: 'inherit', display: 'block', background: 'var(--brij-white)', border: '1px solid var(--border)', borderRadius: 12, padding: 24, transition: 'border-color 120ms' }}>
            <div style={{ fontFamily: 'var(--brij-serif)', fontSize: 22, marginBottom: 6 }}>{t.title}</div>
            <div style={{ fontSize: 12, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--fg-3)', marginBottom: 18 }}>{t.sub}</div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, fontFamily: 'var(--brij-serif)', fontSize: 14, color: 'var(--fg-1)', paddingBottom: 2 }}>
              Open template <PentagonArrow />
            </div>
          </a>
        ))}
      </div>
    </Component>
  );
}

// ─── Never-do rules ────────────────────────────────────
const NEVERS = [
  'Hardcode colors, fonts, or spacing outside of colors_and_type.css',
  'Use the accent color more than once per section',
  'Use dark backgrounds, grey tones, or shadows',
  'Write passive, hedging, or filler copy',
  'Use generic AI/tech buzzwords ("leverage", "seamless", "cutting-edge", "digital transformation")',
  'Add grid patterns, noise textures, or busy backgrounds',
  'Use the logo mark decoratively in more than one section / slide',
  'Design something so clinical it loses its humanity - we are impressive AND warm',
  'Confuse restraint with emptiness - every element must earn its place, but the page must breathe',
];

function Rules() {
  return (
    <Component id="rules" name="Things we never do" tag="Usage" desc="Verbatim from the brandbook. If a design breaks one of these, stop and revisit." stageTone="cream">
      <div style={{ background: 'var(--brij-cream)', border: '1px solid var(--border)', borderRadius: 12, padding: 32 }}>
        <ol style={{ listStyle: 'none', counterReset: 'n', display: 'grid', gap: 10 }}>
          {NEVERS.map((r, i) => (
            <li key={r} style={{ display: 'grid', gridTemplateColumns: '44px 1fr', gap: 16, alignItems: 'baseline', padding: '14px 0', borderBottom: i === NEVERS.length - 1 ? 'none' : '1px solid transparent', borderImage: i === NEVERS.length - 1 ? 'none' : 'linear-gradient(90deg, #f3c06a 0%, #d8e094 50%, #98c6e7 100%) 1', borderImageSlice: '0 0 1 0', borderImageWidth: '0 0 1px 0' }}>
              <div style={{ fontFamily: 'var(--brij-serif)', fontSize: 22, color: 'var(--fg-3)' }}>{String(i + 1).padStart(2, '0')}</div>
              <div style={{ fontSize: 15, lineHeight: 1.55, color: 'var(--fg-1)' }}>{r}</div>
            </li>
          ))}
        </ol>
      </div>
    </Component>
  );
}

Object.assign(window, {
  SlideTitle, SlideSection, SlideQuote, SlideStat, SlideCase, SlideClose,
  DocHeader, DocSection, DocCallout,
  Templates, Rules,
});
