// Manifesto.jsx
function Manifesto() {
  return (
    <section id="manifesto" style={{ padding: '80px clamp(20px, 4vw, 48px)', maxWidth: 1120, margin: '0 auto' }}>
      <SectionHeader num="04" tag="Voice" title="Manifesto" />
      <div style={{
        position: 'relative',
        background: 'rgba(235, 237, 231, 0.5)',
        borderRadius: '0 28px 28px 0',
        padding: '44px 56px',
        display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48,
      }}>
        <div aria-hidden style={{
          position: 'absolute', left: 0, top: 0, bottom: 0, width: 3,
          background: 'linear-gradient(180deg, #f3c06a 0%, #d8e094 50%, #98c6e7 100%)',
          borderRadius: '2px 0 0 2px',
        }} />
        <div>
          <p style={{ fontSize: 16, lineHeight: 1.85, color: 'var(--brij-t2)', marginBottom: 18 }}>
            The era of intelligence has arrived, and with it, a new kind of chaos. Entire industries reshaped by a single model release. And this is just the beginning.
          </p>
          <p style={{ fontSize: 16, lineHeight: 1.85, color: 'var(--brij-t2)', marginBottom: 18 }}>
            The current is growing stronger. The tide is rising higher. The advantage isn't jumping in with another generic solution. It's the ability to adapt to its changing rhythm with sharpness and creativity.
          </p>
          <p style={{ fontSize: 16, lineHeight: 1.85, color: 'var(--brij-t2)' }}>
            That's what brij enables — structured movement through change, and a clear path across the bridge.
          </p>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div>
            <p style={{ fontFamily: 'var(--brij-serif)', fontSize: 36, lineHeight: 1.15, color: 'var(--brij-ink)', marginBottom: 24 }}>
              Structured movement through change.
            </p>
            <p style={{ fontFamily: 'var(--brij-serif)', fontSize: 28, color: 'var(--brij-ink)' }}>
              Time to brij.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
window.Manifesto = Manifesto;
