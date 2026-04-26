// ══════════════════════════════════════════════════════════════
// Actions & Chrome - Buttons, Header, Footer
// ══════════════════════════════════════════════════════════════

function PentagonArrow({ color = 'currentColor' }) {
  return (
    <svg width="18" height="14" viewBox="0 0 18 14" fill="none">
      <path d="M11 1L17 7L11 13M17 7H1" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function Btn({ variant = 'primary', children }) {
  const base = { display: 'inline-flex', alignItems: 'center', gap: 14, padding: '12px 22px', borderRadius: 52, fontFamily: 'var(--brij-serif)', fontSize: 17, color: 'var(--fg-1)', border: '1px solid var(--border)', cursor: 'pointer' };
  const variants = {
    primary:   { background: 'var(--brij-gradient-reverse)', border: 'none' },
    secondary: { background: 'transparent' },
    ghost:     { background: 'transparent', border: 'none', padding: '6px 0' },
    dark:      { background: 'var(--brij-ink)', color: 'var(--brij-cream)', border: '1px solid var(--brij-ink)' },
  };
  return <button style={{ ...base, ...variants[variant] }}>{children} <PentagonArrow color={variant === 'dark' ? '#faf9f4' : '#181b18'} /></button>;
}

function ActionButtons() {
  return (
    <Component id="buttons" name="Buttons" tag="Action"
      desc='Pill shape, serif label, pentagon-arrow icon. The primary CTA across the brand is "Time to brij →". Use one primary per screen.'
      spec={[
        ['Shape',    'Pill · border-radius 52px'],
        ['Label',    'Arbutus Slab · 17px · sentence case'],
        ['Icon',     'Pentagon arrow · 18×14 · 1.6 stroke · 14px gap'],
        ['Padding',  '12px 22px'],
        ['Primary',  'fill: var(--brij-gradient-reverse)'],
        ['Hover',    'opacity 0.85 · scale(0.98) on active'],
      ]}>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, alignItems: 'center' }}>
        <Btn variant="primary">Time to brij</Btn>
        <Btn variant="secondary">Read the manifesto</Btn>
        <Btn variant="dark">Get in touch</Btn>
        <Btn variant="ghost">Learn more</Btn>
      </div>
    </Component>
  );
}

function ActionHeader() {
  return (
    <Component id="header" name="Header Bar" tag="Chrome"
      desc="Fixed top bar, cream background with backdrop blur. Logo left, primary CTA right. Thin bottom rule only when scrolled.">
      <div style={{ background: 'var(--brij-cream)', border: '1px solid var(--border)', borderRadius: 8, padding: '18px 28px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <img src="../../assets/brij-wordmark.svg" alt="Brij" style={{ height: 22 }} />
        <Btn variant="primary">Time to brij</Btn>
      </div>
    </Component>
  );
}

function ActionFooter() {
  return (
    <Component id="footer" name="Footer Bar" tag="Chrome"
      desc="Three zones: full logo left · contact email center-right · meta row below (copyright + coordinates). Thin 1px rule separates the rows.">
      <div style={{ background: 'var(--brij-cream)', border: '1px solid var(--border)', borderRadius: 8, padding: 32 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: 24, borderBottom: '1px solid transparent', borderImage: 'linear-gradient(90deg, #f3c06a 0%, #d8e094 50%, #98c6e7 100%) 1', borderImageSlice: '0 0 1 0', borderImageWidth: '0 0 1px 0' }}>
          <img src="../../assets/brij-wordmark.svg" alt="Brij" style={{ height: 24 }} />
          <a href="mailto:hello@brijlabs.ai" style={{ fontFamily: 'var(--brij-serif)', fontSize: 18, color: 'var(--fg-1)', textDecoration: 'none' }}>hello@brijlabs.ai</a>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: 18, fontSize: 11, fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--fg-3)' }}>
          <span>© 2025 Brij Labs · All rights reserved</span>
          <span>Intelligence Lab. · Tel Aviv</span>
        </div>
      </div>
    </Component>
  );
}

// ── Reusable input row for the signature editor ──────────
// Defined OUTSIDE ActionEmailSig - if we defined this inside the parent
// component, every keystroke would create a fresh Field component, React
// would unmount the input, and the user would lose focus mid-typing.
const SigField = React.memo(({ label, value, onChange, placeholder, hint }) => {
  const labelStyle = { display: 'block', fontFamily: 'var(--brij-sans)', fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--fg-3)', marginBottom: 6 };
  const inputStyle = { width: '100%', padding: '9px 12px', border: '1px solid var(--border)', borderRadius: 6, background: '#fff', fontFamily: 'var(--brij-sans)', fontSize: 13, color: 'var(--fg-1)', boxSizing: 'border-box' };
  return (
    <div style={{ marginBottom: 14 }}>
      <label style={labelStyle}>{label}</label>
      <input type="text" value={value} onChange={onChange} placeholder={placeholder} style={inputStyle} />
      {hint && <div style={{ fontSize: 11, color: 'var(--fg-3)', marginTop: 4 }}>{hint}</div>}
    </div>
  );
});

function ActionEmailSig() {
  // Logo replaced with a typographic 'B' set in the brand serif - works in 100%
  // of email clients (Gmail/Outlook strip <img>; SVG and data: URIs are blocked).
  // Pure HTML, no images = no broken-image icons, no proxy fetches, no surprises.

  // ── Editable fields ────────────────────────────────────
  // Only personal fields are user-editable. Company, web, and tagline are
  // hard-coded brand constants - they appear in every signature identically.
  const SIG_COMPANY = 'Brij Labs';
  const SIG_WEB     = 'brijlabs.ai';
  const SIG_TAGLINE = 'Intelligence Lab.';

  const [fields, setFields] = React.useState({
    name:     '',
    title:    '',
    email:    '',
    linkedin: '',
  });
  const update = (key) => (e) => setFields(f => ({ ...f, [key]: e.target.value }));

  // ── Persist edits in localStorage so the user doesn't lose them on reload ──
  React.useEffect(() => {
    try {
      const saved = localStorage.getItem('brij-signature-fields');
      if (saved) setFields(JSON.parse(saved));
    } catch (e) {}
  }, []);
  React.useEffect(() => {
    try { localStorage.setItem('brij-signature-fields', JSON.stringify(fields)); } catch (e) {}
  }, [fields]);

  // Helpers - normalize URL/email so the user can paste raw "brijlabs.ai" or "https://brijlabs.ai"
  const linkifyWeb = (v) => /^https?:\/\//i.test(v) ? v : `https://${v}`;
  const linkifyLinkedIn = (v) => {
    if (/^https?:\/\//i.test(v)) return v;
    if (v.startsWith('/')) return `https://www.linkedin.com${v}`;
    return `https://www.linkedin.com/in/${v.replace(/^@/, '')}`;
  };

  // ── Live HTML for clipboard / download ─────────────────
  // Compact layout: logo on the left (vertically centered), gradient hairline divider,
  // then name/title/contacts in a tight column on the right.
  // The divider is a 1px-wide table cell with a vertical gradient background -
  // the only way to render a colored vertical rule that survives every email client.
  const sep = ' &nbsp;·&nbsp; ';
  const compactContacts = [
    fields.email    ? `<a href="mailto:${fields.email}" style="color:#181b18; text-decoration:none;">${fields.email}</a>` : '',
    `<a href="https://${SIG_WEB}" style="color:#181b18; text-decoration:none;">${SIG_WEB}</a>`,
    fields.linkedin ? `<a href="${linkifyLinkedIn(fields.linkedin)}" style="color:#181b18; text-decoration:none;">LinkedIn</a>` : '',
  ].filter(Boolean).join(sep);

  const SIG_HTML = `<table cellpadding="0" cellspacing="0" border="0" role="presentation" style="font-family: Helvetica, Arial, sans-serif; color:#181b18; line-height:1.4;">
  <tr>
    <td valign="middle" align="center" style="padding:0 22px 0 4px;">
      <div style="font-family: Georgia, 'Arbutus Slab', serif; font-size:48px; font-weight:400; line-height:1; color:#181b18; letter-spacing:2.9px;">Brij</div>
    </td>
    <td valign="middle" width="1" style="width:1px; padding:0; line-height:1px; font-size:1px; background:linear-gradient(180deg,#f3c06a 0%,#d8e094 50%,#98c6e7 100%); background-color:#d8e094;">&nbsp;</td>
    <td valign="middle" style="padding:0 0 0 18px;">
      <div style="font-family: Georgia, 'Arbutus Slab', serif; font-size:17px; color:#181b18; line-height:1.2; margin:0 0 1px 0;">${fields.name}</div>
      <div style="font-family: Helvetica, Arial, sans-serif; font-size:12px; color:#6b6b63; letter-spacing:0.02em; margin:0 0 6px 0;">${fields.title} · ${SIG_COMPANY}</div>
      ${compactContacts ? `<div style="font-family: Helvetica, Arial, sans-serif; font-size:12px; color:#181b18;">${compactContacts}</div>` : ''}
      <div style="margin-top:6px; font-family: Georgia, 'Arbutus Slab', serif; font-size:12px; color:#6b6b63; font-style:italic;">${SIG_TAGLINE}</div>
    </td>
  </tr>
</table>`;

  const [copied, setCopied] = React.useState(false);
  const copyRich = async () => {
    try {
      const blob = new Blob([SIG_HTML], { type: 'text/html' });
      const text = new Blob([SIG_HTML], { type: 'text/plain' });
      await navigator.clipboard.write([new ClipboardItem({ 'text/html': blob, 'text/plain': text })]);
      setCopied(true); setTimeout(() => setCopied(false), 1600);
    } catch (e) {
      navigator.clipboard.writeText(SIG_HTML).then(() => { setCopied(true); setTimeout(() => setCopied(false), 1600); });
    }
  };

  // ── Reusable input style ───────────────────────────────
  // (See SigField definition above - it lives outside this function so React
  //  doesn't rebuild it on every keystroke, which used to break typing.)

  return (
    <Component id="signature" name="Email Signature - Editor" tag="Chrome"
      desc='Edit the fields on the left, watch the preview update on the right, then click "Copy signature" and paste into your mail client. Your edits are saved to this browser - they will still be here next time.'
      spec={[
        ['Mark',     '"Brij" · 48px Georgia/Arbutus Slab serif'],
        ['Divider',  '1px vertical gradient hairline'],
        ['Name',     '17px · Georgia (Arbutus Slab fallback)'],
        ['Title',    '12px · Helvetica · muted (#6b6b63)'],
        ['Contacts', '12px · inline · bullet-separated'],
        ['Tagline',  '12px italic serif · muted'],
      ]}>

      {/* Editor + preview side-by-side */}
      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(280px, 360px) 1fr', gap: 24, alignItems: 'start' }}>

        {/* ── Form ─────────────────────────────────── */}
        <div style={{ background: 'var(--brij-cream)', border: '1px solid var(--border)', borderRadius: 8, padding: 20 }}>
          <div style={{ fontFamily: 'var(--brij-sans)', fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--fg-3)', marginBottom: 16 }}>Your details</div>
          <SigField label="Full name"  value={fields.name}     onChange={update('name')}     placeholder="Adi Cohen" />
          <SigField label="Title"      value={fields.title}    onChange={update('title')}    placeholder="Head of Strategy" />
          <SigField label="Email"      value={fields.email}    onChange={update('email')}    placeholder="you@brijlabs.ai" />
          <SigField label="LinkedIn"   value={fields.linkedin} onChange={update('linkedin')} placeholder="/in/your-handle" hint='You can paste "/in/handle", "@handle", or a full URL.' />
          <div style={{ marginTop: 18, paddingTop: 14, borderTop: '1px solid var(--border)', fontSize: 11, lineHeight: 1.55, color: 'var(--fg-3)' }}>
            <div style={{ fontFamily: 'var(--brij-sans)', fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 6 }}>Brand-locked fields</div>
            <div><strong style={{ color: 'var(--fg-2)' }}>Company:</strong> {SIG_COMPANY}</div>
            <div><strong style={{ color: 'var(--fg-2)' }}>Web:</strong> {SIG_WEB}</div>
            <div><strong style={{ color: 'var(--fg-2)' }}>Tagline:</strong> {SIG_TAGLINE}</div>
          </div>
        </div>

        {/* ── Preview ─────────────────────────────── */}
        <div>
          <div style={{ fontFamily: 'var(--brij-sans)', fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--fg-3)', marginBottom: 12 }}>Live preview</div>
          <div style={{ background: '#faf9f4', padding: 28, borderRadius: 8, border: '1px solid var(--border)' }}>
            {/* Compact layout: logo left (vertically centered) | gradient hairline | name/title/contacts.
                Vertical centering is the key fix - logo aligns to the optical center of the text block. */}
            <table cellPadding="0" cellSpacing="0" border="0" role="presentation" style={{ fontFamily: 'Helvetica, Arial, sans-serif', color: '#181b18', lineHeight: 1.4 }}>
              <tbody>
                <tr>
                  <td valign="middle" align="center" style={{ padding: '0 22px 0 4px' }}>
                    <div style={{ fontFamily: "Georgia, 'Arbutus Slab', serif", fontSize: 48, fontWeight: 400, lineHeight: 1, color: '#181b18', letterSpacing: '2.9px' }}>Brij</div>
                  </td>
                  <td valign="middle" width="1" style={{ width: 1, padding: 0, lineHeight: '1px', fontSize: 1, background: 'linear-gradient(180deg,#f3c06a 0%,#d8e094 50%,#98c6e7 100%)' }}>&nbsp;</td>
                  <td valign="middle" style={{ padding: '0 0 0 18px' }}>
                    <div style={{ fontFamily: "Georgia, 'Arbutus Slab', serif", fontSize: 17, color: '#181b18', lineHeight: 1.2, margin: '0 0 1px 0' }}>{fields.name || '\u00a0'}</div>
                    <div style={{ fontFamily: 'Helvetica, Arial, sans-serif', fontSize: 12, color: '#6b6b63', letterSpacing: '0.02em', margin: '0 0 6px 0' }}>
                      {fields.title} · {SIG_COMPANY}
                    </div>
                    <div style={{ fontFamily: 'Helvetica, Arial, sans-serif', fontSize: 12, color: '#181b18' }}>
                      {[
                        fields.email    && <a key="e" href={`mailto:${fields.email}`} style={{ color: '#181b18', textDecoration: 'none' }}>{fields.email}</a>,
                        <a key="w" href={`https://${SIG_WEB}`} style={{ color: '#181b18', textDecoration: 'none' }}>{SIG_WEB}</a>,
                        fields.linkedin && <a key="l" href={linkifyLinkedIn(fields.linkedin)} style={{ color: '#181b18', textDecoration: 'none' }}>LinkedIn</a>,
                      ].filter(Boolean).reduce((acc, el, i) => i === 0 ? [el] : [...acc, <span key={`s${i}`} style={{ color: '#c8c8be' }}> &nbsp;·&nbsp; </span>, el], [])}
                    </div>
                    <div style={{ marginTop: 6, fontFamily: "Georgia, 'Arbutus Slab', serif", fontSize: 12, color: '#6b6b63', fontStyle: 'italic' }}>{SIG_TAGLINE}</div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div style={{ display: 'flex', gap: 8, marginTop: 12, flexWrap: 'wrap' }}>
            <button onClick={copyRich} style={{ fontFamily: 'var(--brij-serif)', fontSize: 13, padding: '10px 20px', border: '1px solid transparent', borderRadius: 40, background: 'var(--brij-gradient-reverse)', cursor: 'pointer', fontWeight: 500, color: 'var(--brij-ink)' }}>
              {copied ? 'Copied ✓' : 'Copy signature'}
            </button>
            <button
              onClick={() => { if (confirm('Clear all fields?')) setFields({ name: '', title: '', email: '', linkedin: '' }); }}
              style={{ fontFamily: 'var(--brij-serif)', fontSize: 13, padding: '10px 20px', border: '1px solid var(--border)', borderRadius: 40, background: 'transparent', color: 'var(--fg-2)', cursor: 'pointer' }}>
              Reset
            </button>
          </div>
        </div>
      </div>

      {/* Install instructions */}
      <div style={{ marginTop: 24, padding: 18, background: 'var(--brij-cream)', border: '1px solid var(--border)', borderRadius: 8, fontSize: 12, lineHeight: 1.6, color: 'var(--fg-2)' }}>
        <strong style={{ color: 'var(--fg-1)', fontSize: 13 }}>How to install your signature</strong>
        <div style={{ marginTop: 10 }}><strong>Gmail:</strong> Settings (⚙️) → See all settings → General → Signature → Create new → paste → Save changes at the bottom of the page.</div>
        <div style={{ marginTop: 4 }}><strong>Apple Mail:</strong> Mail → Settings → Signatures → select your account → paste. Uncheck "Always match my default message font".</div>
        <div style={{ marginTop: 4 }}><strong>Outlook (web):</strong> Settings → Mail → Compose and reply → New signature → paste.</div>
      </div>
    </Component>
  );
}

Object.assign(window, { PentagonArrow, Btn, ActionButtons, ActionHeader, ActionFooter, ActionEmailSig });
