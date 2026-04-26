// Header.jsx — fixed top nav, backdrop blur
function Header() {
  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      height: 72, display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '0 clamp(20px, 4vw, 48px)',
      background: 'rgba(250, 249, 244, 0.85)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid var(--brij-border)',
    }}>
      <img src="../../assets/brij-wordmark.svg" alt="Brij" style={{ height: 24 }} />
      <nav style={{ display: 'flex', alignItems: 'center', gap: 28 }}>
        <a href="#manifesto" style={{ fontSize: 11, fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--brij-t2)', textDecoration: 'none' }}>Manifesto</a>
        <a href="#work" style={{ fontSize: 11, fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--brij-t2)', textDecoration: 'none' }}>How we work</a>
        <a href="#proof" style={{ fontSize: 11, fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--brij-t2)', textDecoration: 'none' }}>Proof</a>
        <Button variant="outline" href="#contact" style={{ fontSize: 14, padding: '8px 16px' }}>
          Time to brij
        </Button>
      </nav>
    </header>
  );
}

window.Header = Header;
