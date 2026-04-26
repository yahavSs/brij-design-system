// Hero.jsx
function Hero() {
  return (
    <section style={{ padding: '160px clamp(20px, 4vw, 48px) 120px', maxWidth: 1120, margin: '0 auto', position: 'relative' }}>
      <div style={{ marginBottom: 32 }}>
        <span style={{ fontSize: 13, letterSpacing: '0.08em', color: 'var(--brij-t3)' }}>[ 01 — Who we are ]</span>
      </div>
      <h1 style={{
        fontFamily: 'var(--brij-sans)', fontWeight: 700,
        fontSize: 'clamp(48px, 9vw, 104px)', lineHeight: 1.02, letterSpacing: '-0.02em',
        color: 'var(--brij-ink)', margin: 0, maxWidth: 980,
      }}>
        Intelligence<br/>Lab.
      </h1>
      <p style={{
        fontFamily: 'var(--brij-sans)', fontSize: 20, lineHeight: 1.4,
        letterSpacing: '0.02em', color: 'var(--brij-t2)',
        margin: '36px 0 48px', maxWidth: 560,
      }}>
        We guide organizations across the bridge of transformation — translating complex AI into focused, strategic solutions that deliver a decisive competitive advantage.
      </p>
      <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
        <Button variant="gradient" href="#contact">Time to brij</Button>
        <Button variant="outline" href="#work">How we work</Button>
      </div>
      {/* coordinate divider */}
      <div style={{ marginTop: 96, display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: 24, borderTop: '1px solid transparent', borderImage: 'linear-gradient(90deg, #f3c06a 0%, #d8e094 50%, #98c6e7 100%) 1', borderImageSlice: '1 0 0 0', borderImageWidth: '1px 0 0 0' }}>
        <span style={{ fontSize: 11, letterSpacing: '.14em', color: 'var(--brij-t3)', textTransform: 'uppercase' }}>Intelligence Lab.</span>
        <span style={{ fontSize: 11, letterSpacing: '.14em', color: 'var(--brij-t3)', textTransform: 'uppercase' }}>Tel Aviv · Home Lab</span>
      </div>
    </section>
  );
}
window.Hero = Hero;
