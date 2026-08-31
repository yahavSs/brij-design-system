// Primitives.jsx — shared atoms used across the Brij website.
// Expects colors_and_type.css to be loaded (--brij-* tokens available).

const { useState } = React;

// ── Eyebrow / Label ─────────────────────────────────────────────
function Eyebrow({ children, style }) {
  return (
    <span style={{
      fontSize: 11, fontWeight: 500, letterSpacing: '0.12em',
      textTransform: 'uppercase', color: 'var(--brij-t3)', ...style
    }}>{children}</span>
  );
}

function Label({ children, style }) {
  return (
    <span style={{
      fontSize: 13, letterSpacing: '0.08em', color: 'var(--brij-t3)', ...style
    }}>{`[ ${children} ]`}</span>
  );
}

// ── Section header (num + tag + title) ──────────────────────────
function SectionHeader({ num, tag, title, children }) {
  return (
    <div style={{ marginBottom: 28 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
        <span style={{ fontFamily: 'var(--brij-serif)', fontSize: 13, letterSpacing: '.06em', color: 'var(--brij-t3)' }}>{num}</span>
        <Eyebrow>{tag}</Eyebrow>
      </div>
      <h2 style={{ fontFamily: 'var(--brij-serif)', fontWeight: 400, fontSize: 'clamp(32px, 4.5vw, 48px)', lineHeight: 1.1, color: 'var(--brij-ink)', margin: 0 }}>
        {title}
      </h2>
      {children && <div style={{ marginTop: 16 }}>{children}</div>}
    </div>
  );
}

// ── Button (outline / gradient / solid) ─────────────────────────
function Button({ variant = 'outline', children, onClick, href, style }) {
  const [hover, setHover] = useState(false);
  const [pressed, setPressed] = useState(false);

  const base = {
    display: 'inline-flex', alignItems: 'center', gap: 16,
    padding: '12px 20px', borderRadius: 52,
    fontFamily: 'var(--brij-serif)', fontSize: 18, color: 'var(--brij-ink)',
    cursor: 'pointer', textDecoration: 'none', textTransform: 'capitalize',
    opacity: hover ? 0.85 : 1,
    transform: pressed ? 'scale(0.98)' : 'scale(1)',
    transition: 'opacity 160ms ease, transform 120ms ease',
  };
  const variants = {
    outline:  { border: '1px solid var(--brij-border)', background: 'transparent' },
    gradient: { border: 'none', background: 'var(--brij-gradient-reverse)' },
    solid:    { border: 'none', background: 'var(--brij-sage)' },
  };
  const arrow = variant === 'gradient' ? 'arrow-white.svg' : 'arrow-dark.svg';

  const Tag = href ? 'a' : 'button';
  return (
    <Tag href={href} onClick={onClick}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => { setHover(false); setPressed(false); }}
      onMouseDown={() => setPressed(true)} onMouseUp={() => setPressed(false)}
      style={{ ...base, ...variants[variant], ...style }}>
      {children}
      <img src={`../../assets/${arrow}`} alt="" style={{ width: 19, height: 18, flexShrink: 0 }} />
    </Tag>
  );
}

// ── Panel (glass + optional blur circle) ────────────────────────
function Panel({ children, halo, haloColor = 'var(--brij-grad-orange)', style }) {
  return (
    <div style={{
      position: 'relative', overflow: 'hidden',
      background: 'var(--brij-panel-bg)',
      borderRadius: 'var(--brij-panel-radius)',
      padding: 40, backdropFilter: 'blur(4px)',
      ...style,
    }}>
      {halo && (
        <div style={{
          position: 'absolute', width: 280, height: 280, borderRadius: '50%',
          background: haloColor, filter: 'blur(60px)', opacity: 0.3, pointerEvents: 'none',
          ...halo,
        }} />
      )}
      <div style={{ position: 'relative', zIndex: 1 }}>{children}</div>
    </div>
  );
}

// ── Pentagon badge (number inside) ──────────────────────────────
// Uses logo-b-mark.svg (the cut pentagon, scaled per size) + absolutely-positioned Arbutus Slab number.
function PentagonBadge({ n, size = 'md', active = false }) {
  const sizes = {
    sm: { w: 37, h: 35, f: 13 },
    md: { w: 54, h: 52, f: 18 },
    lg: { w: 90, h: 87, f: 28 },
  };
  const s = sizes[size];
  return (
    <div style={{ position: 'relative', width: s.w, height: s.h, flexShrink: 0 }}>
      <img src="../../assets/logo-b-mark.svg" alt="" style={{ width: '100%', height: '100%' }} />
      <span style={{
        position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontFamily: 'var(--brij-serif)', fontSize: s.f,
        color: active ? 'var(--brij-grad-orange)' : '#fff',
        paddingBottom: 3,
      }}>{n}</span>
    </div>
  );
}

// ── Gradient lines (ambient background motion) ──────────────────
function GradientLines() {
  const lines = [
    { top: '8%', w: '35%', dur: 7, delay: 0 },
    { top: '16%', w: '25%', dur: 9, delay: 1.2 },
    { top: '28%', w: '45%', dur: 11, delay: 2.4 },
    { top: '44%', w: '30%', dur: 8, delay: 0.8 },
    { top: '58%', w: '50%', dur: 13, delay: 3.2 },
    { top: '72%', w: '28%', dur: 10, delay: 1.8 },
    { top: '86%', w: '38%', dur: 12, delay: 2.6 },
  ];
  return (
    <div aria-hidden style={{ position: 'fixed', inset: 0, pointerEvents: 'none', overflow: 'hidden', zIndex: 0 }}>
      <style>{`
        @keyframes brij-flow { 0% { transform: translateX(-30%); } 100% { transform: translateX(calc(100vw + 30%)); } }
      `}</style>
      {lines.map((l, i) => (
        <div key={i} style={{
          position: 'absolute', top: l.top, left: 0, height: 2, width: l.w,
          background: 'linear-gradient(90deg, transparent 0%, rgba(243,192,106,0.35) 20%, rgba(216,224,148,0.6) 50%, rgba(152,198,231,0.35) 80%, transparent 100%)',
          animation: `brij-flow ${l.dur}s linear ${l.delay}s infinite`,
          opacity: 0.55,
        }} />
      ))}
    </div>
  );
}

Object.assign(window, { Eyebrow, Label, SectionHeader, Button, Panel, PentagonBadge, GradientLines });
