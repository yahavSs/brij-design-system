// ══════════════════════════════════════════════════════════════
// Sidebar navigation + per-page routing
// ══════════════════════════════════════════════════════════════
const { useState, useEffect, useRef, useMemo } = React;

// Two-tier hierarchy:
//   - "primary" tier: Foundations + Templates (the things you actually use)
//   - "secondary" tier: text blocks, actions, patterns, usage rules
//     (the building blocks the templates are made of - reference only)
const NAV = [
  { tier: 'primary', route: 'foundations', title: 'Foundations', items: [
    { id: 'logo',        label: 'Logo & Mark' },
    { id: 'logo-motion',  label: 'Logo · Motion' },
    { id: 'colors',   label: 'Colors' },
    { id: 'gradient', label: 'Signature Gradient' },
    { id: 'type',     label: 'Type Scale' },
    { id: 'spacing',  label: 'Spacing' },
  ]},
  { tier: 'primary', route: 'products', title: 'Products', items: [
    { id: 'products-overview', label: 'Family Overview' },
    { id: 'product-gradients', label: 'Gradient Usage' },
    { id: 'product-signal',    label: 'Brij Signal' },
    { id: 'product-signal-interface', label: 'Signal · Interface' },
    { id: 'product-signal-charts',    label: 'Signal · Chart Palette' },
    { id: 'product-agents',    label: 'Brij Agents · CorpBrain' },
  ]},
  { tier: 'primary', route: 'templates', title: 'Templates', items: [
    { id: 'templates',     label: 'Starter Templates', tab: 'starter' },
    { kind: 'subhead', label: 'Slides' },
    { id: 'slide-title',   label: 'Title',           tab: 'slides' },
    { id: 'slide-section', label: 'Section Divider', tab: 'slides' },
    { id: 'slide-quote',   label: 'Big Quote',       tab: 'slides' },
    { id: 'slide-stat',    label: 'Stat Callout',    tab: 'slides' },
    { id: 'slide-case',    label: 'Case Study',      tab: 'slides' },
    { id: 'slide-close',   label: 'Closing',         tab: 'slides' },
    { kind: 'subhead', label: 'Documents' },
    { id: 'doc-header',    label: 'Page Header',  tab: 'documents' },
    { id: 'doc-section',   label: 'Section',      tab: 'documents' },
    { id: 'doc-callout',   label: 'Callout Box',  tab: 'documents' },
    { kind: 'subhead', label: 'Email' },
    { id: 'signature',     label: 'Email Signature', tab: 'email' },
    { kind: 'subhead', label: 'LinkedIn' },
    { id: 'li-punchline',   label: 'Punchline Post',        tab: 'linkedin' },
    { id: 'li-stat',        label: 'Big Number Post',       tab: 'linkedin' },
    { id: 'li-announce',    label: 'Announcement Post',     tab: 'linkedin' },
    { id: 'li-motion-logo', label: 'Motion · Logo Reveal',  tab: 'linkedin' },
    { id: 'li-motion-stat', label: 'Motion · Number',       tab: 'linkedin' },
    { id: 'li-bank',        label: 'Content Bank',          tab: 'linkedin' },
  ]},
  { tier: 'secondary', route: 'building-blocks', title: 'Building Blocks', items: [
    { kind: 'subhead', label: 'Text Blocks' },
    { id: 'label-headline', label: 'Label → Headline → Body' },
    { id: 'section-opener', label: 'Numbered Section Opener' },
    { id: 'pull-quote',     label: 'Pull Quote' },
    { id: 'coordinate',     label: 'Coordinate Divider' },
    { kind: 'subhead', label: 'Buttons & Chrome' },
    { id: 'buttons',   label: 'Buttons' },
    { id: 'header',    label: 'Header Bar' },
    { id: 'footer',    label: 'Footer Bar' },
    { kind: 'subhead', label: 'Content Patterns' },
    { id: 'capability-row', label: 'Capability Row' },
    { id: 'process-grid',   label: 'Process 2×2 Grid' },
    { id: 'case-study',     label: 'Case Study Card' },
    { id: 'cta-block',      label: 'CTA Block' },
    { id: 'dodont',         label: 'Do / Don’t pair' },
    { kind: 'subhead', label: 'Usage Rules' },
    { id: 'rules', label: 'Things We Never Do' },
  ]},
];

// ─── Routing ──────────────────────────────────────────
// URL format: #/<route>            → category page, no anchor
//             #/<route>/<itemId>   → category page, scroll to component
function parseHash() {
  const h = (location.hash || '').replace(/^#\/?/, '');
  const [route, anchor] = h.split('/');
  return { route: route || NAV[0].route, anchor: anchor || '' };
}

function useRoute() {
  const [state, setState] = useState(parseHash);
  useEffect(() => {
    const onChange = () => setState(parseHash());
    window.addEventListener('hashchange', onChange);
    return () => window.removeEventListener('hashchange', onChange);
  }, []);
  return state;
}

// ─── Sidebar ──────────────────────────────────────────
function Sidebar({ route, anchor }) {
  const activeGroup = useMemo(
    () => NAV.find((g) => g.route === route) || NAV[0],
    [route]
  );

  // Auto-scroll the right panel to the anchor when it changes.
  // Avoid scrollIntoView (it can fight the iframe / cause jank); use scrollTo
  // on the scrolling container directly.
  useEffect(() => {
    const main = document.querySelector('.lib-main');
    if (!main) return;
    if (!anchor) {
      main.scrollTo({ top: 0, behavior: 'auto' });
      return;
    }
    // Wait a tick for the page to render
    const t = setTimeout(() => {
      const el = document.getElementById(anchor);
      if (!el) return;
      const top = el.getBoundingClientRect().top - main.getBoundingClientRect().top + main.scrollTop - 8;
      main.scrollTo({ top, behavior: 'smooth' });
    }, 60);
    return () => clearTimeout(t);
  }, [route, anchor]);

  const primary = NAV.filter(g => g.tier === 'primary');
  const secondary = NAV.filter(g => g.tier === 'secondary');

  const renderGroup = (g) => {
    const isActive = g.route === route;
    return (
      <div key={g.route} className={`lib-nav-group ${isActive ? 'open has-active' : ''}`}>
        <a
          className="lib-nav-group-header"
          href={`#/${g.route}`}
          aria-current={isActive ? 'page' : undefined}
        >
          <span>{g.title}</span>
          <span className="chev">›</span>
        </a>
        {isActive && (
          <ul>
            {g.items.map((i, idx) => {
              if (i.kind === 'subhead') {
                return (
                  <li key={`sh-${idx}`} className="lib-nav-subhead">{i.label}</li>
                );
              }
              return (
                <li key={i.id}>
                  <a
                    href={`#/${g.route}/${i.id}`}
                    className={anchor === i.id ? 'active' : ''}
                  >
                    {i.label}
                  </a>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    );
  };

  return (
    <aside className="lib-side">
      <a href="#/foundations" className="lib-side-logo" style={{ textDecoration: 'none' }}>
        <img src="../../assets/logos/brij-light.svg" alt="Brij" /><span style={{ fontFamily: 'var(--brij-serif)', fontSize: 18, letterSpacing: '0.05em' }}>Brij</span>
        <span className="lib-side-logo-kit">Design System</span>
      </a>
      <div className="lib-nav-tier primary">
        {primary.map(renderGroup)}
      </div>
      <div className="lib-nav-tier secondary">
        {secondary.map(renderGroup)}
      </div>
    </aside>
  );
}

// ─── Primitive UI chrome ──────────────────────────────
function Section({ num, title, desc, children, id }) {
  return (
    <section className="lib-section" id={id}>
      {num && <div className="lib-section-num">{num}</div>}
      {title && <h2 className="lib-section-title">{title}</h2>}
      {desc && <p className="lib-section-desc">{desc}</p>}
      {children}
    </section>
  );
}

function Component({ id, name, tag, desc, stageTone = 'light', children, spec, dodont, code }) {
  return (
    <div className="lib-comp" id={id}>
      <div className="lib-comp-head">
        <div className="lib-comp-name">{name}</div>
        {tag && <div className="lib-comp-tag">{tag}</div>}
      </div>
      {desc && <p className="lib-comp-desc">{desc}</p>}
      <div className={`lib-stage ${stageTone}`}>
        {children}
      </div>
      {spec && (
        <details className="lib-spec-toggle">
          <summary>
            <span className="lib-spec-toggle-label">View specs</span>
          </summary>
          <dl className="lib-spec">
            {spec.map(([k, v]) => <React.Fragment key={k}><dt>{k}</dt><dd>{v}</dd></React.Fragment>)}
          </dl>
        </details>
      )}
      {dodont && (
        <div className="lib-dodont">
          <div className="do"><h4>Do</h4>{dodont.do}</div>
          <div className="dont"><h4>Don{'’'}t</h4>{dodont.dont}</div>
        </div>
      )}
      {code && (
        <details className="lib-code-toggle">
          <summary>
            <span className="lib-spec-toggle-label">View code</span>
          </summary>
          <CodeBlock>{code}</CodeBlock>
        </details>
      )}
    </div>
  );
}

function CodeBlock({ children }) {
  const [ok, setOk] = useState(false);
  const copy = () => {
    navigator.clipboard.writeText(children).then(() => {
      setOk(true); setTimeout(() => setOk(false), 1400);
    });
  };
  return (
    <div style={{ position: 'relative' }}>
      <pre className="lib-code">{children}</pre>
      <button className={`lib-copy ${ok ? 'ok' : ''}`} onClick={copy}>{ok ? 'Copied' : 'Copy'}</button>
    </div>
  );
}

Object.assign(window, { Sidebar, Section, Component, CodeBlock, NAV, useRoute });
