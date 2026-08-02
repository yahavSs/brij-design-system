// ══════════════════════════════════════════════════════════════
// LinkedIn - square 1:1 post templates + motion openers + content bank
// Visual companions for the team's text posts. 1080×1080 export.
// ══════════════════════════════════════════════════════════════

// Starter punchline bank - grows over time as the textual language matures.
const LI_LINES = [
  'We don’t wait for things to settle. We move with the current.',
  'Time to brij.',
  'Structured movement through change.',
  'Signals in. Strategy out.',
  'Institutional memory that learns.',
  'We stay ahead of the curve so you can focus on what matters.',
];

const liKeyframes = `
@keyframes li-line { 0%,8% { opacity:0; transform:translateY(14px); } 20%,88% { opacity:1; transform:translateY(0); } 96%,100% { opacity:0; transform:translateY(-8px); } }
@keyframes li-logo { 0%,18% { opacity:0; transform:translateY(48px); } 34%,88% { opacity:1; transform:translateY(0); } 96%,100% { opacity:0; } }
@keyframes li-rule { 0%,26% { transform:scaleX(0); } 44%,88% { transform:scaleX(1); } 96%,100% { transform:scaleX(0); } }
@keyframes li-num  { 0%,10% { opacity:0; transform:translateY(24px) scale(0.96); } 26%,88% { opacity:1; transform:translateY(0) scale(1); } 96%,100% { opacity:0; } }
`;
function LiStyle() { return <style>{liKeyframes}</style>; }

// Square post frame, scaled to fit - exports at 1080×1080
function LiFrame({ children, tone = 'cream', label }) {
  const bg = tone === 'ink' ? 'var(--brij-ink)' : 'var(--brij-cream)';
  const fg = tone === 'ink' ? 'var(--brij-cream)' : 'var(--fg-1)';
  return (
    <div style={{ maxWidth: 440, margin: '0 auto' }}>
      <div style={{ position: 'relative', width: '100%', aspectRatio: '1/1', background: bg, color: fg, border: '1px solid var(--border)', borderRadius: 8, overflow: 'hidden', containerType: 'inline-size' }}>
        {children}
      </div>
      {label && <div style={{ marginTop: 10, fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--fg-3)', textAlign: 'center' }}>{label}</div>}
    </div>
  );
}

// Small footer lockup used inside frames
function LiLockup({ tone = 'cream' }) {
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '1.6cqi' }}>
      <img src="../../assets/logos/brij-light.svg" alt="" style={{ height: '4cqi' }} />
      <span style={{ fontFamily: 'var(--brij-serif)', fontSize: '3.4cqi', letterSpacing: '0.05em', color: tone === 'ink' ? 'var(--brij-cream)' : 'var(--fg-1)' }}>Brij</span>
    </span>
  );
}

function LiPunchline() {
  const [line, setLine] = React.useState(LI_LINES[0]);
  return (
    <Component id="li-punchline" name="Punchline Post" tag="LinkedIn"
      desc="One sentence, serif, on cream. The visual anchor for a text post - pick a line from the content bank or write your own. Gradient hairline above, lockup below."
      stageTone="cream"
      spec={[
        ['Canvas',   '1080×1080 · cream'],
        ['Type',     'Arbutus Slab · ~72px at full size · sentence case'],
        ['Hairline', '1px · signature gradient · above the line'],
        ['Lockup',   'Mark + Brij · bottom-left'],
        ['Rule',     'One sentence. No secondary copy, no hashtags baked in.'],
      ]}>
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 20, justifyContent: 'center' }}>
        {LI_LINES.map((l) => (
          <button key={l} onClick={() => setLine(l)} style={{ fontSize: 11, fontFamily: 'var(--brij-sans)', letterSpacing: '0.02em', padding: '6px 12px', borderRadius: 52, border: `1px solid ${line === l ? 'var(--fg-1)' : 'var(--border)'}`, background: line === l ? 'var(--brij-white)' : 'transparent', color: 'var(--fg-2)', cursor: 'pointer' }}>{l.length > 38 ? l.slice(0, 36) + '…' : l}</button>
        ))}
      </div>
      <LiFrame label="1080 × 1080 · punchline">
        <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 10%' }}>
          <div style={{ width: '18cqi', height: 1, background: 'linear-gradient(90deg,#F3C06A,#D8E094,#98C6E7)', marginBottom: '5cqi' }} />
          <div style={{ fontFamily: 'var(--brij-serif)', fontSize: '6.6cqi', lineHeight: 1.22, color: 'var(--fg-1)' }}>{line}</div>
        </div>
        <div style={{ position: 'absolute', bottom: '7%', left: '10%', right: '10%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <LiLockup />
          <span style={{ fontSize: '2cqi', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--fg-3)' }}>Intelligence Lab</span>
        </div>
      </LiFrame>
    </Component>
  );
}

function LiStat() {
  return (
    <Component id="li-stat" name="Big Number Post" tag="LinkedIn"
      desc="One number, huge, bold sans. One sentence of context in serif. For results, milestones, and market data - the number does the talking."
      stageTone="cream"
      spec={[
        ['Canvas',  '1080×1080 · cream'],
        ['Number',  'Plus Jakarta Sans 700 · ~280px · -0.02em'],
        ['Context', 'Arbutus Slab · one sentence · max two lines'],
        ['Rule',    'One number per post. Never a chart.'],
      ]}>
      <LiFrame label="1080 × 1080 · stat">
        <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 10%' }}>
          <div style={{ fontSize: '2.2cqi', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--fg-3)', marginBottom: '2cqi' }}>[ Outcome ]</div>
          <div style={{ fontFamily: 'var(--brij-sans)', fontWeight: 700, fontSize: '26cqi', lineHeight: 0.95, letterSpacing: '-0.02em', color: 'var(--fg-1)' }}>+34%</div>
          <div style={{ fontFamily: 'var(--brij-serif)', fontSize: '4cqi', lineHeight: 1.3, color: 'var(--fg-2)', marginTop: '3cqi', maxWidth: '80%' }}>Retention lift in 90 days for a European neobank.</div>
        </div>
        <div style={{ position: 'absolute', bottom: '7%', left: '10%' }}><LiLockup /></div>
      </LiFrame>
    </Component>
  );
}

function LiAnnounce() {
  return (
    <Component id="li-announce" name="Announcement Post" tag="LinkedIn"
      desc="Ink background for weight - launches, hires, events. Label on top, display headline center, lockup bottom. The only LinkedIn template allowed on ink."
      stageTone="cream"
      spec={[
        ['Canvas',   '1080×1080 · ink'],
        ['Headline', 'Plus Jakarta Sans 700 · ~96px · cream'],
        ['Label',    'Uppercase · muted · bracketed'],
        ['Rule',     'Reserve ink for real news - not weekly posts.'],
      ]}>
      <LiFrame tone="ink" label="1080 × 1080 · announcement">
        <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 10%' }}>
          <div style={{ fontSize: '2.2cqi', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--brij-t3)', marginBottom: '3cqi' }}>[ Announcement ]</div>
          <div style={{ fontFamily: 'var(--brij-sans)', fontWeight: 700, fontSize: '8.8cqi', lineHeight: 1.05, letterSpacing: '-0.01em', color: 'var(--brij-cream)' }}>Brij Signal is live.</div>
          <div style={{ width: '18cqi', height: 1, background: 'linear-gradient(90deg,#D8E094,#98C6E7)', marginTop: '5cqi' }} />
        </div>
        <div style={{ position: 'absolute', bottom: '7%', left: '10%', right: '10%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <LiLockup tone="ink" />
          <span style={{ fontSize: '2cqi', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--brij-t3)' }}>brijlabs.ai</span>
        </div>
      </LiFrame>
    </Component>
  );
}

function LiMotionLogo() {
  const [line, setLine] = React.useState(LI_LINES[1]);
  return (
    <Component id="li-motion-logo" name="Motion · Logo Reveal" tag="LinkedIn"
      desc="The animated opener: the punchline rises, a gradient rule draws, the mark lifts in from below. Export as a short MP4/GIF loop (~6s) to lead a text post. Pick any line from the bank."
      stageTone="cream"
      spec={[
        ['Canvas',   '1080×1080 · cream · ~6s loop'],
        ['Sequence', 'Line rises → rule draws → mark lifts in'],
        ['Easing',   'ease-out · nothing bounces'],
        ['Rule',     'One motion post per thread - motion is an accent, not a habit.'],
      ]}>
      <LiStyle />
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 20, justifyContent: 'center' }}>
        {LI_LINES.map((l) => (
          <button key={l} onClick={() => setLine(l)} style={{ fontSize: 11, fontFamily: 'var(--brij-sans)', letterSpacing: '0.02em', padding: '6px 12px', borderRadius: 52, border: `1px solid ${line === l ? 'var(--fg-1)' : 'var(--border)'}`, background: line === l ? 'var(--brij-white)' : 'transparent', color: 'var(--fg-2)', cursor: 'pointer' }}>{l.length > 38 ? l.slice(0, 36) + '…' : l}</button>
        ))}
      </div>
      <LiFrame label="1080 × 1080 · motion · 6s loop">
        <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '0 10%', textAlign: 'center' }}>
          <div key={line} style={{ fontFamily: 'var(--brij-serif)', fontSize: '6cqi', lineHeight: 1.25, color: 'var(--fg-1)', animation: 'li-line 6s ease-out infinite' }}>{line}</div>
          <div style={{ width: '22cqi', height: 1, background: 'linear-gradient(90deg,#F3C06A,#D8E094,#98C6E7)', margin: '4.5cqi 0', transformOrigin: 'left', animation: 'li-rule 6s ease-out infinite' }} />
          <img src="../../assets/logos/brij-light.svg" alt="" style={{ height: '11cqi', animation: 'li-logo 6s ease-out infinite' }} />
        </div>
      </LiFrame>
    </Component>
  );
}

function LiMotionStat() {
  return (
    <Component id="li-motion-stat" name="Motion · Number" tag="LinkedIn"
      desc="The stat post, animated: the number lands first, context follows, the gradient rule closes. Same 6s loop grammar as the logo reveal."
      stageTone="cream"
      spec={[
        ['Canvas',   '1080×1080 · cream · ~6s loop'],
        ['Sequence', 'Number lands → context fades up → rule draws'],
        ['Rule',     'The number enters once - no counting-up tickers.'],
      ]}>
      <LiStyle />
      <LiFrame label="1080 × 1080 · motion · 6s loop">
        <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 10%' }}>
          <div style={{ fontFamily: 'var(--brij-sans)', fontWeight: 700, fontSize: '24cqi', lineHeight: 0.95, letterSpacing: '-0.02em', color: 'var(--fg-1)', animation: 'li-num 6s ease-out infinite' }}>6 wks</div>
          <div style={{ fontFamily: 'var(--brij-serif)', fontSize: '4cqi', lineHeight: 1.3, color: 'var(--fg-2)', marginTop: '3cqi', maxWidth: '80%', animation: 'li-line 6s ease-out infinite' }}>From kickoff to a churn model in production.</div>
          <div style={{ width: '18cqi', height: 1, background: 'linear-gradient(90deg,#F3C06A,#D8E094,#98C6E7)', marginTop: '4cqi', transformOrigin: 'left', animation: 'li-rule 6s ease-out infinite' }} />
        </div>
        <div style={{ position: 'absolute', bottom: '7%', left: '10%' }}><LiLockup /></div>
      </LiFrame>
    </Component>
  );
}

function LiBank() {
  return (
    <Component id="li-bank" name="Content Bank" tag="LinkedIn"
      desc="Approved punchlines, ready to drop into any template above. This bank grows as the textual language matures - add lines here, not ad-hoc in posts."
      stageTone="cream">
      <div style={{ background: 'var(--brij-cream)', border: '1px solid var(--border)', borderRadius: 12, padding: 32 }}>
        <ol style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 4 }}>
          {LI_LINES.map((l, i) => (
            <li key={l} style={{ display: 'grid', gridTemplateColumns: '44px 1fr', gap: 16, alignItems: 'baseline', padding: '14px 0', borderBottom: i === LI_LINES.length - 1 ? 'none' : '1px solid transparent', borderImage: i === LI_LINES.length - 1 ? 'none' : 'linear-gradient(90deg, #f3c06a 0%, #d8e094 50%, #98c6e7 100%) 1', borderImageSlice: '0 0 1 0', borderImageWidth: '0 0 1px 0' }}>
              <span style={{ fontFamily: 'var(--brij-serif)', fontSize: 20, color: 'var(--fg-3)' }}>{String(i + 1).padStart(2, '0')}</span>
              <span style={{ fontFamily: 'var(--brij-serif)', fontSize: 17, lineHeight: 1.5, color: 'var(--fg-1)' }}>{l}</span>
            </li>
          ))}
        </ol>
      </div>
    </Component>
  );
}

Object.assign(window, { LiPunchline, LiStat, LiAnnounce, LiMotionLogo, LiMotionStat, LiBank });
