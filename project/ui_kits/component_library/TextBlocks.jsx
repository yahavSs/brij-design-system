// ══════════════════════════════════════════════════════════════
// Text Blocks - Label-Headline, Section Opener, Pull Quote, Coordinates
// ══════════════════════════════════════════════════════════════

function TextLabelHeadline() {
  return (
    <Component id="label-headline" name="Label → Headline → Body" tag="Text block"
      desc="The core stack for any section opener - slide, doc page, or web. Bracketed label establishes hierarchy, serif headline anchors it, body clarifies."
      stageTone="cream"
      spec={[
        ['Label',    '13px · Jakarta 500 · tracking .08 · bracketed'],
        ['Headline', '32–48px · Arbutus Slab 400 · sentence case'],
        ['Body',     '18px · Jakarta 400 · tracking .02 · max 60ch'],
        ['Gap',      'label→headline 20px · headline→body 24px'],
      ]}
      code={`<div class="brij-label">[ 02 - What We Do ]</div>
<h2 class="brij-headline">We turn complexity into competitive advantage.</h2>
<p class="brij-body">We stay ahead so you can focus on what matters.</p>`}>
      <div style={{ maxWidth: 560 }}>
        <div className="brij-label" style={{ marginBottom: 20 }}>[ 02 - WHAT WE DO ]</div>
        <h2 className="brij-headline" style={{ marginBottom: 24 }}>We turn complexity into competitive advantage.</h2>
        <p className="brij-body">We stay ahead of the curve so you can focus on what matters. Fast-paced, collaborative, no surprises.</p>
      </div>
    </Component>
  );
}

function TextSectionOpener() {
  return (
    <Component id="section-opener" name="Numbered Section Opener" tag="Text block"
      desc="Big serif number + category label + headline. Use at the top of major sections in decks and documents to signal progression."
      stageTone="cream"
      spec={[
        ['Number',   '96–120px · Arbutus Slab 400'],
        ['Category', '11px · Jakarta 500 · uppercase · tracking .12'],
        ['Headline', '40–48px · Arbutus Slab 400'],
      ]}>
      <div style={{ maxWidth: 640 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '140px 1fr', gap: 32, alignItems: 'start' }}>
          <div style={{ fontFamily: 'var(--brij-serif)', fontSize: 96, lineHeight: 1, color: 'var(--fg-1)' }}>02</div>
          <div>
            <div style={{ fontSize: 11, fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--fg-3)', marginBottom: 16, paddingTop: 14 }}>Strategy</div>
            <h2 style={{ fontFamily: 'var(--brij-serif)', fontSize: 40, fontWeight: 400, lineHeight: 1.1, color: 'var(--fg-1)' }}>How we move from here.</h2>
          </div>
        </div>
      </div>
    </Component>
  );
}

function TextPullQuote() {
  return (
    <Component id="pull-quote" name="Pull Quote" tag="Text block"
      desc='The "Structured movement through change" treatment. Large Arbutus Slab, left-rule divider, attribution small below. Reserve for brand voice moments.'
      stageTone="cream"
      code={`<blockquote class="brij-pullquote">
  <p>Structured movement through change, and a clear path across the bridge.</p>
  <cite>Brand manifesto</cite>
</blockquote>`}>
      <blockquote style={{ maxWidth: 700, position: 'relative', paddingLeft: 28 }}>
        <span aria-hidden style={{ position: 'absolute', left: 0, top: 4, bottom: 4, width: 1, background: 'linear-gradient(180deg, #f3c06a 0%, #d8e094 50%, #98c6e7 100%)' }} />
        <p style={{ fontFamily: 'var(--brij-serif)', fontSize: 36, lineHeight: 1.25, color: 'var(--fg-1)', marginBottom: 20 }}>
          Structured movement through change, and a clear path across the bridge.
        </p>
        <cite style={{ fontSize: 11, fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--fg-3)', fontStyle: 'normal' }}>
          - Brand manifesto
        </cite>
      </blockquote>
    </Component>
  );
}

function TextCoordinate() {
  return (
    <Component id="coordinate" name="Coordinate Divider" tag="Text block"
      desc="The thin-rule + Tel Aviv coordinate detail. A small signature - use once per artifact, typically at a footer or hero base.">
      <div style={{ maxWidth: 680 }}>
        <hr style={{ border: 'none', height: 1, background: 'linear-gradient(90deg, #f3c06a 0%, #d8e094 50%, #98c6e7 100%)' }} />
        <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: 14, fontSize: 11, fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--fg-3)' }}>
          <span>Intelligence Lab.</span>
          <span>Tel Aviv · Israel</span>
        </div>
      </div>
    </Component>
  );
}

Object.assign(window, { TextLabelHeadline, TextSectionOpener, TextPullQuote, TextCoordinate });
