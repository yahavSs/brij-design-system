// WhatWeDo.jsx — three capability panels
function WhatWeDo() {
  const items = [
    { n: '01', title: 'Strategic Clarity', body: 'We translate every shift in the AI landscape into a focused, decisive plan — not another white-paper.' },
    { n: '02', title: 'AI Products That Ship', body: 'We build with you, not for you. Real products, built around real pain, shipped on real timelines.' },
    { n: '03', title: 'Continuous Advantage', body: 'AI does not sit still. We stay ahead so you can focus on what matters — ongoing guidance as the landscape evolves.' },
  ];
  return (
    <section id="what" style={{ padding: '80px clamp(20px, 4vw, 48px)', maxWidth: 1120, margin: '0 auto' }}>
      <SectionHeader num="05" tag="Capability" title="What we do" />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12 }}>
        {items.map((it, i) => (
          <Panel key={i} halo={i === 0 ? { right: -60, top: -60 } : i === 1 ? { left: -60, bottom: -60, background: 'var(--brij-green)' } : { right: -50, bottom: -40, background: 'var(--brij-blue)' }}
            style={{ padding: 32, minHeight: 260, display: 'flex', flexDirection: 'column', gap: 14 }}>
            <PentagonBadge n={it.n} size="md" />
            <div style={{ marginTop: 'auto' }}>
              <div style={{ fontFamily: 'var(--brij-serif)', fontSize: 24, color: 'var(--brij-ink)', marginBottom: 10 }}>{it.title}</div>
              <div style={{ fontSize: 15, lineHeight: 1.55, color: 'var(--brij-t2)' }}>{it.body}</div>
            </div>
          </Panel>
        ))}
      </div>
    </section>
  );
}
window.WhatWeDo = WhatWeDo;
