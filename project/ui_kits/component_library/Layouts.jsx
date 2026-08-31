// ══════════════════════════════════════════════════════════════
// Doc Layouts + Templates + Rules
// ══════════════════════════════════════════════════════════════

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

// ─── Presentation templates ────────────────────────────
// The two canonical clone sources for anything presentation-shaped.
// Literal hrefs and src paths (not template strings) so the standalone bundle
// can rewrite them the same way it rewrites every other asset path.
const PRESENTATION_TEMPLATES = [
  {
    file: '../../templates/client-deck-template.html',
    path: 'templates/client-deck-template.html',
    kind: 'Client-facing · dark',
    title: 'Client deck',
    sub: 'Anything a client sees',
    tone: 'ink',
    notes: [
      'Dark identity. The Signal / ifat deck visual language.',
      'Slide navigation on desktop, vertical scroll under 700px.',
      'Passes the mobile checker. Keep it passing when you edit.',
    ],
  },
  {
    file: '../../templates/internal-brief-template.html',
    path: 'templates/internal-brief-template.html',
    kind: 'Internal · light',
    title: 'Internal brief',
    sub: 'Idea, Plan, QA, Deliverable, Update',
    tone: 'sage',
    notes: [
      'Light: sage ground, white floating glass panels, navy or ink text.',
      'Gradient wash and scroll-reveal down one scrolling document.',
      'Media slot for a screenshot and a video.',
    ],
  },
];

function PresentationTemplates() {
  return (
    <Component id="presentation-templates" name="Presentation Templates" tag="Templates"
      desc="The two canonical clone sources for anything presentation-shaped. Pick by audience, not by taste: a client deck is dark, an internal brief is light. Clone the file, never rebuild from scratch."
      stageTone="cream"
      spec={[
        ['Client deck',    'templates/client-deck-template.html · dark · slide nav'],
        ['Internal brief', 'templates/internal-brief-template.html · light · scrolling'],
        ['Rule',           'Light means internal, dark means client. Absolute.'],
        ['Product',        'Set the PRODUCT TOKENS block and the LOGO first, before any other edit'],
        ['Mobile',         'Both pass the mobile checker. Keep them passing.'],
        ['Legacy',         'templates/deck-template.html is legacy. Reference only, never clone.'],
      ]}
      dodont={{
        do: (
          <>
            <div>Dark for anything a client sees</div>
            <div>Light for anything that stays inside the lab</div>
            <div>Clone the template, then set the product tokens and the logo</div>
          </>
        ),
        dont: (
          <>
            <div>Never turn a client deck light, for any product, for any reason</div>
            <div>Never clone deck-template.html, it fails the mobile checker</div>
            <div>Never mix two products in one artifact</div>
          </>
        ),
      }}>
      <div style={{ background: 'var(--brij-white)', border: '1px solid var(--border)', borderRadius: 8, padding: '20px 24px', marginBottom: 24, borderTop: '2px solid', borderImage: 'linear-gradient(90deg, #f3c06a 0%, #d8e094 50%, #98c6e7 100%) 1', borderImageSlice: '1 0 0 0', borderImageWidth: '2px 0 0 0' }}>
        <div style={{ fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--fg-3)', marginBottom: 8 }}>The absolute rule</div>
        <div style={{ fontFamily: 'var(--brij-serif)', fontSize: 22, lineHeight: 1.3, color: 'var(--fg-1)' }}>Light means internal. Dark means client.</div>
        <div style={{ fontSize: 14, lineHeight: 1.6, color: 'var(--fg-2)', marginTop: 8 }}>
          Anyone can tell at a glance which kind of artifact they are holding. Answer the audience question before you open a file.
        </div>
      </div>
      <div className="lib-variants">
        {PRESENTATION_TEMPLATES.map((t) => (
          <a key={t.path} href={t.file} target="_blank" rel="noopener" style={{ textDecoration: 'none', color: 'inherit', display: 'block', background: 'var(--brij-white)', border: '1px solid var(--border)', borderRadius: 12, padding: 24, transition: 'border-color 120ms' }}>
            <div style={{ height: 96, borderRadius: 8, border: '1px solid var(--border)', marginBottom: 18, background: t.tone === 'ink' ? 'var(--brij-ink)' : 'var(--brij-sage)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, overflow: 'hidden' }}>
              <img src={t.tone === 'ink' ? '../../assets/logo-b-mark-gradient.svg' : '../../assets/logo-b-mark.svg'} alt="" style={{ height: 26 }} />
              <span style={{ fontFamily: 'var(--brij-serif)', fontSize: 17, letterSpacing: '0.05em', color: t.tone === 'ink' ? 'var(--brij-cream)' : 'var(--fg-1)' }}>Brij</span>
            </div>
            <div style={{ fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--fg-3)', marginBottom: 8 }}>{t.kind}</div>
            <div style={{ fontFamily: 'var(--brij-serif)', fontSize: 22, marginBottom: 6 }}>{t.title}</div>
            <div style={{ fontSize: 12, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--fg-3)', marginBottom: 14 }}>{t.sub}</div>
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 16px', display: 'grid', gap: 6 }}>
              {t.notes.map((n) => (
                <li key={n} style={{ fontSize: 13, lineHeight: 1.5, letterSpacing: '0.02em', color: 'var(--fg-2)' }}>{n}</li>
              ))}
            </ul>
            <div style={{ fontSize: 11, color: 'var(--fg-3)', fontFamily: 'JetBrains Mono, monospace', marginBottom: 14 }}>{t.path}</div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, fontFamily: 'var(--brij-serif)', fontSize: 14, color: 'var(--fg-1)', paddingBottom: 2 }}>
              Open template <PentagonArrow />
            </div>
          </a>
        ))}
      </div>
      <div style={{ marginTop: 24, background: 'var(--brij-cream)', border: '1px solid var(--border)', borderRadius: 8, padding: '20px 24px' }}>
        <div style={{ fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--fg-3)', marginBottom: 10 }}>Legacy</div>
        <div style={{ fontSize: 14, lineHeight: 1.6, color: 'var(--fg-1)' }}>
          <b>templates/deck-template.html</b> is LEGACY. It fails the mobile checker: fixed 1920px width, local assets, hover-only content. Keep it as a reference for the HUD, the animation system, soft transitions, and print mode. Never clone it for new work.
        </div>
      </div>
    </Component>
  );
}

// ─── Templates ─────────────────────────────────────────
function Templates() {
  const items = [
    { file: 'templates/blank-doc.html',       title: 'Document',        sub: 'US Letter · 8.5×11 · white' },
    { file: 'templates/blank-onepager.html',  title: 'One-Pager',       sub: 'Web · 1200 wide · cream' },
  ];
  return (
    <Component id="templates" name="Starter Templates" tag="Templates" desc="Blank starting points for documents and one-pagers. One workflow for everything: documents and pages are HTML files. Duplicate, edit, and present from your browser. For anything presentation-shaped, clone one of the two canonical templates above instead." stageTone="cream">
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
  DocHeader, DocSection, DocCallout,
  PresentationTemplates, Templates, Rules,
});
