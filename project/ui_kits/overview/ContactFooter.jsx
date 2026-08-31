// ContactCTA.jsx + Footer.jsx
function ContactCTA() {
  return (
    <section id="contact" style={{ padding: '120px clamp(20px, 4vw, 48px)', maxWidth: 1120, margin: '0 auto', position: 'relative', overflow: 'hidden' }}>
      {/* Pentagon mark at ~4% opacity behind content */}
      <img src="../../assets/logo-b-mark.svg" alt="" aria-hidden style={{
        position: 'absolute', right: -80, top: '50%', transform: 'translateY(-50%)',
        width: 520, height: 'auto', opacity: 0.04, pointerEvents: 'none',
      }} />
      <div style={{ position: 'relative', textAlign: 'center', maxWidth: 720, margin: '0 auto' }}>
        <Eyebrow>Contact</Eyebrow>
        <h2 style={{
          fontFamily: 'var(--brij-sans)', fontWeight: 700,
          fontSize: 'clamp(40px, 6vw, 72px)', lineHeight: 1.05, letterSpacing: '-0.01em',
          color: 'var(--brij-ink)', margin: '20px 0 24px',
        }}>Ready to lead<br/>the new era?</h2>
        <p style={{ fontSize: 18, lineHeight: 1.5, letterSpacing: '.02em', color: 'var(--brij-t2)', marginBottom: 40 }}>
          We're looking for partners who want to build real AI products — not run more experiments.
        </p>
        <Button variant="gradient" href="mailto:support@brijlabs.ai">Time to brij</Button>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid transparent',
      borderImage: 'linear-gradient(90deg, #f3c06a 0%, #d8e094 50%, #98c6e7 100%) 1',
      borderImageSlice: '1 0 0 0',
      borderImageWidth: '1px 0 0 0',
      padding: '40px clamp(20px, 4vw, 48px)',
      maxWidth: 1120, margin: '0 auto',
      display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 24,
    }}>
      <img src="../../assets/brij-wordmark.svg" alt="Brij" style={{ height: 20 }} />
      <div style={{ display: 'flex', gap: 32, alignItems: 'center' }}>
        <span style={{ fontSize: 13, color: 'var(--brij-t3)' }}>© 2026 · Tel Aviv, Israel</span>
        <a href="mailto:support@brijlabs.ai" style={{ fontSize: 13, color: 'var(--brij-t2)', textDecoration: 'none' }}>support@brijlabs.ai</a>
      </div>
    </footer>
  );
}

Object.assign(window, { ContactCTA, Footer });
