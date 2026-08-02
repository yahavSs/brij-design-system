// Proof.jsx — case studies
function Proof() {
  const studies = [
    {
      tag: 'Flagship Product', name: 'Brij Signal',
      desc: 'Started as a service engagement with one of Israel\'s biggest PR firms. We built custom AI tooling for media monitoring and crisis detection — and realized this was a product.',
      outcome: 'Brij Signal is now a full AI-powered reputation intelligence platform. Production-ready, actively selling in Israel, expanding to the US.',
      features: [
        'Real-time media monitoring across news and social',
        'AI-powered crisis detection and sentiment analysis',
        'Actionable insights — not just data, but what to do next',
      ],
    },
    {
      tag: 'Sector Partnership', name: 'Eldar Group',
      desc: 'Eldar Group is one of Israel\'s major real estate players. We completed an initial AI engagement and are now in discussions to build a sector-wide product for Israeli real estate.',
      outcome: 'The partnership model in action: start with a real company, prove the value, then scale across the sector.',
      features: [],
    },
  ];
  return (
    <section id="proof" style={{ padding: '80px clamp(20px, 4vw, 48px)', maxWidth: 1120, margin: '0 auto' }}>
      <SectionHeader num="07" tag="Proof" title="From engagement to product" />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 12 }}>
        {studies.map((s, i) => (
          <div key={i} style={{
            background: 'rgba(235,237,231,0.5)', borderRadius: 28, padding: 40,
            display: 'flex', flexDirection: 'column', gap: 18,
          }}>
            <div style={{
              display: 'inline-flex', alignSelf: 'flex-start',
              padding: '4px 12px', borderRadius: 52,
              background: 'var(--brij-gradient)', color: 'var(--brij-ink)',
              fontSize: 11, fontWeight: 600, letterSpacing: '.12em', textTransform: 'uppercase',
            }}>{s.tag}</div>
            <div style={{ fontFamily: 'var(--brij-serif)', fontSize: 32, color: 'var(--brij-ink)' }}>{s.name}</div>
            <p style={{ fontSize: 15, lineHeight: 1.7, color: 'var(--brij-t2)' }}>{s.desc}</p>
            <p style={{ fontSize: 15, lineHeight: 1.7, color: 'var(--brij-t1)' }}>{s.outcome}</p>
            {s.features.length > 0 && (
              <div style={{ marginTop: 8 }}>
                <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--brij-t3)', marginBottom: 10 }}>What it does</div>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {s.features.map((f, j) => (
                    <li key={j} style={{ fontSize: 14, color: 'var(--brij-t2)', padding: '8px 0', borderBottom: '1px solid var(--brij-border)', display: 'flex', gap: 10 }}>
                      <span style={{ color: 'var(--brij-t3)' }}>—</span>{f}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
window.Proof = Proof;
