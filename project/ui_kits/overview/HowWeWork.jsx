// HowWeWork.jsx — 2×2 phase grid with pentagon badges
function HowWeWork() {
  const phases = [
    { n: '01', title: 'Discovery', body: 'We embed with your team and find where AI actually bends the curve — not where it looks good in a slide.' },
    { n: '02', title: 'Strategy', body: 'A focused, opinionated plan. Three directions, sorted by leverage and speed-to-value.' },
    { n: '03', title: 'Build', body: 'We ship in weeks, not years. You get access to everything we develop during the partnership.' },
    { n: '04', title: 'Evolve', body: 'The landscape moves. So do we. Ongoing guidance as models, capabilities, and markets shift.' },
  ];
  return (
    <section id="work" style={{ padding: '80px clamp(20px, 4vw, 48px)', maxWidth: 1120, margin: '0 auto' }}>
      <SectionHeader num="06" tag="Process" title="How we work" />
      <p style={{ fontSize: 18, lineHeight: 1.5, letterSpacing: '.02em', color: 'var(--brij-t2)', maxWidth: 560, marginBottom: 40 }}>
        Partnership, not projects. We build with you, and your needs shape the product.
      </p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 12 }}>
        {phases.map((p, i) => (
          <div key={i} style={{
            background: 'rgba(235,237,231,0.5)', borderRadius: 28, padding: 36,
            display: 'flex', gap: 24, alignItems: 'flex-start', minHeight: 180,
          }}>
            <PentagonBadge n={p.n} size="md" />
            <div>
              <div style={{ fontFamily: 'var(--brij-serif)', fontSize: 24, color: 'var(--brij-ink)', marginBottom: 8 }}>{p.title}</div>
              <div style={{ fontSize: 15, lineHeight: 1.55, color: 'var(--brij-t2)' }}>{p.body}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
window.HowWeWork = HowWeWork;
