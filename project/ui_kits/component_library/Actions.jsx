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
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 10 }}><img src="../../assets/logos/brij-light.svg" alt="Brij" style={{ height: 24 }} /><span style={{ fontFamily: 'var(--brij-serif)', fontSize: 19, letterSpacing: '0.05em' }}>Brij</span></span>
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
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 10 }}><img src="../../assets/logos/brij-light.svg" alt="Brij" style={{ height: 26 }} /><span style={{ fontFamily: 'var(--brij-serif)', fontSize: 20, letterSpacing: '0.05em' }}>Brij</span></span>
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
  // ⚠️ DO NOT PUT IMAGES IN THIS SIGNATURE. Read this before "improving" it.
  //
  // Commit 0e1c181 replaced this typographic lockup with five base64 PNGs
  // ("baked PNG assets"). That broke every signature the team generated from it:
  //   - A base64/inline image travels INSIDE the message. On send, mail clients
  //     convert it into a real MIME attachment referenced by cid:.
  //   - On FORWARD the forwarding client rebuilds the MIME tree and those cid:
  //     references go stale. The recipient sees alt text (<Brij>, ATT00001.png)
  //     where the logo should be, with the images loose in the attachments row.
  //   - Outlook for Windows blocks data: URIs outright.
  //   - The base64 pushed the signature past Gmail's 10,000-character signature
  //     limit, which truncates it silently.
  //
  // So the wordmark is typographic and the divider is a table cell with a
  // gradient background. No images means nothing can detach on forward.
  // If a future version genuinely needs a logo image it must be a hosted
  // https:// URL - never base64, never a file pasted from disk - because a URL
  // is a reference rather than message payload, and survives forwarding.

  // ── Editable fields ────────────────────────────────────
  // Only personal fields are user-editable. Company, web, and tagline are
  // hard-coded brand constants - they appear in every signature identically.
  const SIG_COMPANY = 'Brij Labs';
  const SIG_WEB     = 'brijlabs.ai';
  const SIG_TAGLINE = 'Intelligence Lab.';

  // Signature artwork is HOSTED, never embedded. These PNGs live in the website
  // repo at public/signature/ and deploy to the bucket behind brijlabs.ai.
  // A hosted URL is a reference, so it survives forwarding; a base64/inline image
  // becomes message payload and detaches. See the warning at the top of this file.
  // To change an icon: replace the PNG in the website repo and redeploy. Never inline.
  const SIG_IMG = 'https://brijlabs.ai/signature/';

  const [fields, setFields] = React.useState({
    name:     '',
    title:    '',
    phone:    '',
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

  // Escape anything the user typed before it goes into the clipboard HTML.
  // Without this an ampersand or angle bracket in a name or title produces
  // invalid markup that mail clients silently mangle.
  const esc = (v) => String(v || '')
    .replace(/&/g, '&amp;').replace(/</g, '&lt;')
    .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  // tel: links must not contain spaces or punctuation.
  const telHref = (v) => String(v || '').replace(/[^\d+]/g, '');

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
  // One icon cell. The <a> wraps the <img>, so when a client blocks images the
  // alt text renders as a normal clickable link instead of an empty box.
  const iconCell = (href, file, label) =>
    `<td valign="middle" style="padding:0 6px 0 0; line-height:0;">`
    + `<a href="${esc(href)}" style="text-decoration:none; display:inline-block; line-height:0;">`
    + `<img src="${SIG_IMG}${file}" alt="${esc(label)}" width="22" height="22" `
    + `style="display:block; width:22px; height:22px; border:0; outline:none;" /></a></td>`;

  const iconCells = [
    fields.linkedin ? iconCell(linkifyLinkedIn(fields.linkedin), 'linkedin.png', 'LinkedIn') : '',
    fields.email    ? iconCell(`mailto:${fields.email}`,          'email.png',    'Email')    : '',
    iconCell(`https://${SIG_WEB}`, 'site.png', SIG_COMPANY),
  ].filter(Boolean).join('');

  const phoneRow = fields.phone
    ? `<tr><td style="font-family: Helvetica, Arial, sans-serif; font-size:11px; font-weight:500; color:#6b6b63; letter-spacing:0.02em; line-height:14px; padding:0 0 8px 0; mso-line-height-rule:exactly;"><a href="tel:${esc(telHref(fields.phone))}" style="color:#6b6b63; text-decoration:none;">${esc(fields.phone)}</a></td></tr>`
    : '';

  // Structure notes, all deliberate:
  //  - Tables + inline styles only. No <div> layout, no classes, no <style> block:
  //    Gmail strips <style>, Outlook ignores most modern CSS.
  //  - Every <img> carries width/height as ATTRIBUTES as well as inline style,
  //    so Outlook reserves the right box before the image loads.
  //  - The divider cell has bgcolor AND background-color set to the mid-gradient
  //    tone, so a solid brand line still shows if its image is blocked.
  //  - mso-line-height-rule:exactly stops Outlook inflating the line spacing.
  const SIG_HTML = `<table cellpadding="0" cellspacing="0" border="0" role="presentation" width="330" style="border-collapse:collapse; font-family: Helvetica, Arial, sans-serif; color:#181b18; width:330px;">
  <tr>
    <td width="130" valign="middle" align="left" style="width:130px; padding:0 8px 0 0;">
      <a href="https://${SIG_WEB}" style="text-decoration:none; display:inline-block; line-height:0;"><img src="${SIG_IMG}brij-logo.png" alt="Brij" width="120" height="47" style="display:block; width:120px; height:47px; border:0; outline:none;" /></a>
    </td>
    <td width="2" valign="top" align="center" bgcolor="#d8e094" style="width:2px; padding:0; background-color:#d8e094;">
      <img src="${SIG_IMG}divider.png" alt="" width="2" height="83" style="display:block; width:2px; height:83px; border:0; outline:none;" />
    </td>
    <td valign="middle" style="padding:0 0 0 10px;">
      <table cellpadding="0" cellspacing="0" border="0" role="presentation" style="border-collapse:collapse;">
        <tr><td style="font-family: Helvetica, Arial, sans-serif; font-size:9px; color:#6b6b63; letter-spacing:1.8px; text-transform:uppercase; line-height:12px; padding:0 0 5px 0; mso-line-height-rule:exactly;">[ ${esc(fields.title)} ]</td></tr>
        <tr><td style="font-family: Georgia, 'Times New Roman', serif; font-size:17px; color:#181b18; line-height:20px; padding:0 0 2px 0; mso-line-height-rule:exactly;">${esc(fields.name)}</td></tr>
        ${phoneRow}
        <tr><td style="padding:0;"><table cellpadding="0" cellspacing="0" border="0" role="presentation" style="border-collapse:collapse;"><tr>${iconCells}</tr></table></td></tr>
      </table>
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
      desc='Edit the fields on the left, watch the preview update on the right, then click "Copy signature" and paste into your mail client. Your edits are saved to this browser - they will still be here next time. If you generated a signature here before May 2026 it contained embedded images that fall apart when a mail is forwarded: generate it again and replace the one in your mail client.'
      spec={[
        ['Mark',     'brij-logo.png · 120x47 · hosted, retina source'],
        ['Divider',  '2px gradient rule · bgcolor fallback #d8e094'],
        ['Title',    '9px · Helvetica · uppercase · bracketed'],
        ['Name',     '17px · Georgia (Times New Roman fallback)'],
        ['Phone',    '11px · Helvetica · muted · optional'],
        ['Icons',    '22x22 · LinkedIn / Email / Site · hosted'],
        ['Images',   'hosted https only · never base64 · survives forward'],
        ['Tagline',  '12px italic serif · muted'],
      ]}>

      {/* Editor + preview side-by-side */}
      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(280px, 360px) 1fr', gap: 24, alignItems: 'start' }}>

        {/* ── Form ─────────────────────────────────── */}
        <div style={{ background: 'var(--brij-cream)', border: '1px solid var(--border)', borderRadius: 8, padding: 20 }}>
          <div style={{ fontFamily: 'var(--brij-sans)', fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--fg-3)', marginBottom: 16 }}>Your details</div>
          <SigField label="Full name"  value={fields.name}     onChange={update('name')}     placeholder="Adi Cohen" />
          <SigField label="Title"      value={fields.title}    onChange={update('title')}    placeholder="Head of Strategy" />
          <SigField label="Phone"      value={fields.phone}    onChange={update('phone')}    placeholder="+972 50 000 0000" hint="Optional. Leave empty to hide it." />
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
          {/* The preview is rendered from SIG_HTML itself, the exact string the
              Copy button puts on the clipboard. Hand-maintaining a second JSX
              copy of the layout meant the two could silently drift; this cannot. */}
          <div style={{ background: '#faf9f4', padding: 28, borderRadius: 8, border: '1px solid var(--border)' }}
               dangerouslySetInnerHTML={{ __html: SIG_HTML }} />

          {/* Live self-check on the exact string being copied. These are the
              three failures that broke the previous signature. */}
          <div style={{ marginTop: 12, fontSize: 11.5, lineHeight: 1.9 }}>
            {(() => {
              const embedded = /data:image|src="file:|src='file:/i.test(SIG_HTML);
              const remote   = (SIG_HTML.match(/src="https:\/\//g) || []).length;
              const rows = [
                [!embedded, embedded
                  ? 'Embedded image found - this WILL detach when forwarded'
                  : 'No embedded images - nothing can detach when forwarded'],
                [SIG_HTML.length < 10000, SIG_HTML.length.toLocaleString() + ' characters - Gmail truncates above 10,000'],
                [remote > 0, remote + ' images, all loaded from ' + SIG_WEB],
              ];
              return rows.map(function (r, i) {
                return (
                  <div key={i} style={{ color: r[0] ? '#5a8a5e' : '#b35c5c', fontWeight: r[0] ? 400 : 600 }}>
                    {r[0] ? '\u2713' : '\u2717'} {r[1]}
                  </div>
                );
              });
            })()}
          </div>

          <div style={{ display: 'flex', gap: 8, marginTop: 12, flexWrap: 'wrap' }}>
            <button onClick={copyRich} style={{ fontFamily: 'var(--brij-serif)', fontSize: 13, padding: '10px 20px', border: '1px solid transparent', borderRadius: 40, background: 'var(--brij-gradient-reverse)', cursor: 'pointer', fontWeight: 500, color: 'var(--brij-ink)' }}>
              {copied ? 'Copied ✓' : 'Copy signature'}
            </button>
            <button
              onClick={() => { if (confirm('Clear all fields?')) setFields({ name: '', title: '', phone: '', email: '', linkedin: '' }); }}
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
