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
  // Visual assets baked as base64 PNGs so Gmail and friends can't strip them.
  // Editable fields stay live in localStorage; the layout is locked.
  const ASSET_WORDMARK = 'data:image/png;base64,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';
  const ASSET_GRADIENT = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAACmCAIAAAByR7nMAAAABmJLR0QA/wD/AP+gvaeTAAAAb0lEQVRIiWP8fCCLAQZYGBgZEZz/DAxIMgyMyMoYkJXhkkHRg2oakj1MDMgyxJqGSwbNNJz2UOpTok0beJ8SZRremBu8Dh2YKCHStIH36UBk2v//caYd4pThNg13sqSupUPGocRaOmQcOhqNwzoaAfjgebyC++IXAAAAAElFTkSuQmCC';
  const ASSET_LINKEDIN = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAD1ElEQVRoge2ZT2ibZRzHP8/zDtKNEMrbvk0z02XpoT0o6HaagjC9DFToQd1wB2VsBzdEUQRd0YkoymRztaDssHbFg2zrBqOH6jx4Mj1t3ZyIzWBtk5I3ZP0TNYMmoXkfDzVxq2lJ3/dt3wT8nMLv/f35/vL8eZ/3fQWrYJrmti0+8ZxQogehdgEhQF/N32XuAQmBGlMW3xrG9vHVHMVKg1JKm8umj6DERyyLrgd+wrKOGcYj8ZUXHmogm51qLllNFxTs2zxtNaIoKMHRtpbQ+QfNlQay2anmJavpZ+DRTRdXO0oIjrfqoZNlg4TlaVOymi5Q3+IBhFJ8fm8+vb9skABz2fThupw21RECBjJ/ZDoBpGma2/5ZsI2EX5aszwBEZt58USIue63IBkrCY1IK0eO1EpsICw5IFLu9VuKAfRLY7rUKB0Ql0Oy1CgcYkirHiQZCSK8VOGWLk+D4xB0SyYQjAZHIDrq7u23H224gPnGHA68cpFQq2S4OoGkaly5+R1dXl61421MokUw4Fg9QKpWYmpq2He/KGgiHw/T3n+HTTz7G7/e7kbJmHK2BMm+9+QbP7N0LwPR0gnMDg26krQlXRmBubr7yO5PJuJGyZlwZgTN9XzE5NUkud59r1350I2XNuNJAsVhkePiKG6nWjSsNHDr0GvtffgmA3g8+5Ob4Lc4PnqO9PUhyZoarV0c4dvR1dF1n8u4kp05/yS+3b7tR2p0GAoEA4XAYgK2+rQC0twcJh8MYhsGTe/YgxPKJ5Yldj3P27Nc8/0IPCwsLjmtv+FHC5/MRi43x3vu9TPy+/FbE7/dXdi2nuDICa1EsFnn7nXfJ5/MsLS1x+tQXALQaLa7k3/ARyOcL5PN5AHJ/5f4tLN0p3fCn0f8b8BpXFvH16zcq22QqZQIwfPkKgUCAQqFQ8UulTAYGl19t3hy/5UZpdxqIxcaIxcYesg0ODv3HLzmTpK+v342SFWxPoUhkB5qmORagaRqdnVHb8WJ2Pq3sBsfjcRKJpO3iADt3Rmw/jYHDBuqBht+FJNDII6AkijmvVdhFwYJEMO21ELtIMCXwg9dC7GLBuJRwkQZdB1KpEdnSEvoNGPZazPoRqcXF0vcSwNJkL3DfY0XrQsGJjo6ORQkQbA7eVXCYxplKo4YeHIIHbmRtLaFLQnCcOm9CwK+a8B0UQliw4k7cqodOKsQRFIXq4Z4zKoXvaV3X/ywbqn6dmZ1NdSPlN8CzmyZtTURKwQlDDw6V//nKlbXCZmfN3ULyqkI8BUSAto2UWUbBPJAGbkilRnK5wmg0Gs1X8/0bxZcsisdydDYAAAAASUVORK5CYII=';
  const ASSET_EMAIL    = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAETElEQVRoge2YT0xcRRyAvxkIyzYc1oUFF7Np4UC1mhppwqEWrTWGWjBNtLGWP9UEAoWW1tpTPbTYWhCMKVqjsQlCbWxZRA49oCdTEySthV6MaaHB8ncpBVyQblbC7o6HFkIpi7y3Cw+Sfsd5M/O+33vze/ObJwiCy+VaE2kSO4QSOxHqBcAOWIP1DzN3gR6BalUBvrPZEq8H6yjmNiilIkbcgwUocZz70iuBXwgESmy2pzrmXngoALf7tsUfiK5XkLF8botEMakExfGx9trZzTMBuN23Lb5AdAvw7LLLLR4lBEfjrPbK6QYJ95eNPxBdz8qWBxBKUXF3dPDt6QYJMOIezF+Ry2Z+hICaobGhZADpcrnWPEjY1USM9AfKAcTQqOstiWg02kgHSsJzUgqx02gTnYgA7JYoUo02CYEMCSQabRECSRKwGG0RAjbJPOXEKkJIow1C5XEARhOpd6DH46G3tw+lVFhEzGYz69atRQhtKSmGRwc1G7gGXJz//gJPr0+huvoMI6MjWqd4iK1bX+aNrEw6OjopLd2vaayuN3Dl6lWy9+zG4XCQlpZG6aFDdNzs1DyPEIKC/HwOHChGSsmNGzc1z6ErB/z+AB+fKmfi3gR2+5OcP1fHq9te0TRHVFQUFeWnOHhwP1JK2tracTY0aHbRncStrVfY804e3d09mM1mTp/+jJLifYtaw5YnLJz95msyM18H4MemJgqL9jExcU+zR0hfoZ7eHnLz9vL7tWsIISguLqKqsgKTyRR0TEpKCs6LF9i0KRW/30919ReUlZ1kasqnyyHkz+j4+D8UFZVwsd4JwPbtGdTUnCUuNu6RvunpWzhXV0Nioh2Px8P7h49Q823tI/20EJZ9wOfzUV7+CR+dOInP5+P5jRtxOi+wYcMzM31yc3L48sznxMTE0N/fT27uu1y+/GvI99a9D8xHY2MTd+4MUVVVQXy8jbraGo6XneCl9HSysnYA0NbWzuEPjjA2Nh6We4Z9J25p+Y28vPfo6+vDbDZTVVkxIz+drOGShyUqJbq6/iI7J4+2tnYA/H4/lVWfhpSswQjrEprN2Ng4hYXF7Nr1Jp23btHeHvTvYEgsWQAAU76pma/TUqFrCUVGRoTb48G82p+nrgBe3LIZW5xNz9AFych4TfMYXdUogNfrpbu7J2zltMlkIjk5aXnK6ZXEqj+RPQ7AaCSwmnNASRShHWgNRMHfEkG30SJ6keCSwM9Gi+glANelBCerNA+kUpdkbKz9T+AHo2W0Iwa8Xv9PEiAQIT8EtP8SMBAFxxwOh1cCJFgSuhTks3qWUrPNmlAHszay+Fh7gxAcZYUHIeCPCGHKFkIEYM5OHGe1VypEAYpJY/T+l2YpTOlWq3XmUD1v7To8PLAeKb8Cti2b2oKIAQXHbNaEuuknP3NloWHDw65UIdmrEJuBtUD8UmpOo2AUGATapVKXJiYmm5OSkv6dr+9/sapqoCv1KH4AAAAASUVORK5CYII=';
  const ASSET_BRIJ     = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAFEUlEQVRogdWYW0xURxjHf3PcZc16owsrYkMRY9Mq9KFaC8WFZXdBk7aGhypWmvRFbWJfen0oamyKXNSkGIuuppdITWqBNtZ6r02tFoO+gK1iolRjrbKAXNbKRorLnukDYtQusOfs6uLvceab7/v/z8ycOXMEQ+DxeMwGk3hZSJGPkM8DiYBlqPgIcx24IpD1UmWn1Tq1cahA8WCDlHJMp7d1OVJ8zIDo0cBRVPVtq/XJCw923GfA670cG1DHVktY8Oi0hYikTwpWTo5L3HFv810DXu/l2H517Akg9ZGLCx0pBEXxlsQNgw0KDCybgDq2mtEtHkBISfn1rtaCwQYFoNPbumxULpvgCAFftd9onw6geDwe850N+zgxXgmoZQCivcvzmoL4PtqKdCAVSFMUIfKjrUQnQoUlCpLZ0VYSBgsUYGq0VYRBigLERltFGFgNBPmciARXr17lhz0/ApCfv5Dkp5IfRhkhOrpaZaSz7t23n5KSMnp7ewEwxhh5/713eKOwECEi+7wiaqDH10NxcSmHD/8UtD8zM4PS0nXEx8VHquTASRwJ/jhzhsUFS4cUD1Bff4pFi16nvv5kpMqGPwOBQICqr3eydcs2/P3+0IoKQeHSpXzw4bsYDcZwyodnoK2tnY+KVtHQMOR9Y1jSUlPZuLGcpKQkvRL0L6Ffjv7KosUFusUDNJ07R8GSQg4cOKQ7h+YZuH37NhUVm/lm1y7dRYOx8NVXWLNmFWazWdM4TQa6u7tZ8dZKmpubNQsMhZcyMtjq/kzTvjBoKeDetj3i4qdNS8bldOJ0OXguLU3zOaHJwJ8XL2pKHgwhBKmzZuHMdeByOJk+PeW+fimlJhOaDDw9YwaNDae1DBkoYjDwwpw5OF0OnA4HCQmTg8bV1Z3g/PkLrFixLPTcWoQ4nQ5qar4LKdZkMpGRkU6O3Y7DYScuLm7I2I7ODjZVbGbf/gNsc2/RIkmbgRfnziX2iVhueG8E7Z80aSLp6enY7dnkupwjvlFUVWX37j18WrEJn8/HhAnjSU9P1yJJmwGDwUCO3c6eO1+ZAFOmJGCzzcOenc08W2bIb5AL55v5pHgdZ5ua7rbl2O0YjZokaTMAkOty0nS2CYczh1yXi5kzn9W06Xw+H5WVbmpqawkEAvfnzs3VKieyX6MjcezYcUrLymlra/9fn9ls5rfjRzGZTJpyap4BPbRca6G0fD11dSeGjMnKsmkWDw/ZgL/fT01NLZWVbm7dujVsbF6uS1eNh2bgdOPvFK8r4eKlSyPGxsTEYLPN01Un4gZu3uzB7d7Ot9XVqKoa0hibLZNx48bpqhdRA0eO/ExJWTnebq+mcXm5ebprRsTAlb+vUFqynpOnTmkeazQYyc7O0l07LAN9fX18/sWX7NhRhd/fryvH/Pl5TJw4QbcGBdB9Dvj9flqueTDouNcajQZcTgerVxfpLQ8gRUdn63UE1nCyRAsJXQqCv6ItRC8KeBTgcLSF6EWFRkWBGsLYB9FEkXKvEheXeA4I7ZYyqhAtvb2BQwqAOkZZBfiirEgTEtYmJSX1KgAJsQmXJCzj8VlKB62WhCq458/c5LjEWiEoYpSbEHB2jDAVCiFUeODXYrwlcYNELEfSFx15I3JQEaYsi8Xyz2BD0LtgR0fLMyiKG3A+MmnDIlokrLVaEqoGn/zdnuGGdXR4ZguFNyUiE0gGgv/QiTASuoBWoEGRcm9PT9/BlJSUf4PF/geen6R54YBy7gAAAABJRU5ErkJggg==';

  // ── Editable fields ────────────────────────────────────
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
      const saved = localStorage.getItem('brij-signature-fields-v2');
      if (saved) setFields(JSON.parse(saved));
    } catch (e) {}
  }, []);
  React.useEffect(() => {
    try { localStorage.setItem('brij-signature-fields-v2', JSON.stringify(fields)); } catch (e) {}
  }, [fields]);

  // Helpers - normalize URL/email/phone for clean href values.
  const linkifyLinkedIn = (v) => {
    if (!v) return '#';
    if (/^https?:\/\//i.test(v)) return v;
    if (v.startsWith('/')) return `https://www.linkedin.com${v}`;
    return `https://www.linkedin.com/in/${v.replace(/^@/, '')}`;
  };
  const telHref = (v) => 'tel:' + (v || '').replace(/[^+0-9]/g, '');

  // ── Live HTML for clipboard ─────────────────────────────
  // Locked-layout signature: baked PNG assets + dir="ltr" + explicit widths
  // for cross-client safety. Editable parts are name, title, phone, email link,
  // linkedin link. Tagline removed; gradient line height matches right column.
  const SIG_HTML = `<div dir="ltr" style="direction:ltr; text-align:left;">
<table dir="ltr" cellpadding="0" cellspacing="0" border="0" role="presentation" width="330" style="direction:ltr; border-collapse:collapse; font-family: 'Plus Jakarta Sans', Helvetica, Arial, sans-serif; color:#181b18; width:330px;">
  <tr>
    <td width="130" valign="middle" align="left" style="width:130px; padding:0 8px 0 0;">
      <img src="${ASSET_WORDMARK}" alt="Brij" width="120" height="47" style="display:block; width:120px; height:47px; border:0; outline:none;" />
    </td>
    <td width="2" valign="middle" align="center" style="width:2px; padding:0;">
      <img src="${ASSET_GRADIENT}" alt="" width="2" height="83" style="display:block; width:2px; height:83px; border:0; outline:none;" />
    </td>
    <td valign="middle" style="padding:0 0 0 10px;">
      <div style="font-family: Helvetica, Arial, sans-serif; font-size:9px; color:#6b6b63; letter-spacing:1.8px; text-transform:uppercase; line-height:12px; margin:0 0 5px 0; mso-line-height-rule:exactly;">[ ${fields.title || 'Title'} ]</div>
      <div style="font-family: Georgia, 'Arbutus Slab', serif; font-size:17px; color:#181b18; line-height:20px; margin:0 0 2px 0; mso-line-height-rule:exactly;">${fields.name || 'Your Name'}</div>
      <div style="font-family: 'Plus Jakarta Sans', Helvetica, Arial, sans-serif; font-size:11px; font-weight:500; color:#6b6b63; letter-spacing:0.02em; line-height:14px; margin:0 0 8px 0; mso-line-height-rule:exactly;">
        ${fields.phone ? `<a href="${telHref(fields.phone)}" style="color:#6b6b63; text-decoration:none;">${fields.phone}</a>` : '&nbsp;'}
      </div>
      <table cellpadding="0" cellspacing="0" border="0" role="presentation" style="border-collapse:collapse;">
        <tr>
          <td valign="middle" style="padding:0 6px 0 0; line-height:0;">
            <a href="${linkifyLinkedIn(fields.linkedin)}" style="text-decoration:none; display:inline-block; line-height:0;">
              <img src="${ASSET_LINKEDIN}" alt="" width="22" height="22" style="display:block; width:22px; height:22px; border:0; outline:none;" />
            </a>
          </td>
          <td valign="middle" style="padding:0 6px 0 0; line-height:0;">
            <a href="mailto:${fields.email || 'hello@brijlabs.ai'}" style="text-decoration:none; display:inline-block; line-height:0;">
              <img src="${ASSET_EMAIL}" alt="" width="22" height="22" style="display:block; width:22px; height:22px; border:0; outline:none;" />
            </a>
          </td>
          <td valign="middle" style="padding:0; line-height:0;">
            <a href="https://brijlabs.ai" style="text-decoration:none; display:inline-block; line-height:0;">
              <img src="${ASSET_BRIJ}" alt="" width="22" height="22" style="display:block; width:22px; height:22px; border:0; outline:none;" />
            </a>
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>
</div>`;

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

  return (
    <Component id="signature" name="Email Signature - Editor" tag="Chrome"
      desc='Edit the fields on the left, watch the preview update on the right, then click "Copy signature" and paste into your mail client. Your edits are saved to this browser - they will still be here next time.'
      spec={[
        ['Logo',     'Full lockup PNG (mark + wordmark) · 120×47'],
        ['Divider',  'Vertical gradient PNG · 2×83'],
        ['Eyebrow',  '9px Helvetica · uppercase · 1.8 tracking · [ brackets ]'],
        ['Name',     '17px · Georgia / Arbutus Slab serif'],
        ['Phone',    '11px · Plus Jakarta Sans · 500 weight · muted'],
        ['Icons',    '22×22 · sage tile · LinkedIn · Email · Brij mark'],
      ]}>

      {/* Editor + preview side-by-side */}
      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(280px, 360px) 1fr', gap: 24, alignItems: 'start' }}>

        {/* ── Form ─────────────────────────────────── */}
        <div style={{ background: 'var(--brij-cream)', border: '1px solid var(--border)', borderRadius: 8, padding: 20 }}>
          <div style={{ fontFamily: 'var(--brij-sans)', fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--fg-3)', marginBottom: 16 }}>Your details</div>
          <SigField label="Full name"  value={fields.name}     onChange={update('name')}     placeholder="Adi Cohen" />
          <SigField label="Title"      value={fields.title}    onChange={update('title')}    placeholder="Head of Strategy" />
          <SigField label="Phone"      value={fields.phone}    onChange={update('phone')}    placeholder="+972 50 000 0000" />
          <SigField label="Email"      value={fields.email}    onChange={update('email')}    placeholder="you@brijlabs.ai" />
          <SigField label="LinkedIn"   value={fields.linkedin} onChange={update('linkedin')} placeholder="/in/your-handle" hint='You can paste "/in/handle", "@handle", or a full URL.' />
          <div style={{ marginTop: 18, paddingTop: 14, borderTop: '1px solid var(--border)', fontSize: 11, lineHeight: 1.55, color: 'var(--fg-3)' }}>
            <div style={{ fontFamily: 'var(--brij-sans)', fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 6 }}>Brand-locked</div>
            <div><strong style={{ color: 'var(--fg-2)' }}>Logo, gradient, icons:</strong> baked PNGs, fixed sizes.</div>
            <div><strong style={{ color: 'var(--fg-2)' }}>Brij mark icon links to:</strong> brijlabs.ai</div>
          </div>
        </div>

        {/* ── Preview ─────────────────────────────── */}
        <div>
          <div style={{ fontFamily: 'var(--brij-sans)', fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--fg-3)', marginBottom: 12 }}>Live preview</div>
          <div style={{ background: '#faf9f4', padding: 28, borderRadius: 8, border: '1px solid var(--border)' }}>
            <table cellPadding="0" cellSpacing="0" border="0" role="presentation" style={{ borderCollapse: 'collapse', fontFamily: "'Plus Jakarta Sans', Helvetica, Arial, sans-serif", color: '#181b18', width: 330 }}>
              <tbody>
                <tr>
                  <td valign="middle" align="left" style={{ width: 130, padding: '0 8px 0 0' }}>
                    <img src={ASSET_WORDMARK} alt="Brij" width="120" height="47" style={{ display: 'block' }} />
                  </td>
                  <td valign="middle" align="center" style={{ width: 2, padding: 0 }}>
                    <img src={ASSET_GRADIENT} alt="" width="2" height="83" style={{ display: 'block' }} />
                  </td>
                  <td valign="middle" style={{ padding: '0 0 0 10px' }}>
                    <div style={{ fontFamily: 'Helvetica, Arial, sans-serif', fontSize: 9, color: '#6b6b63', letterSpacing: '1.8px', textTransform: 'uppercase', lineHeight: '12px', margin: '0 0 5px 0' }}>[ {fields.title || 'Title'} ]</div>
                    <div style={{ fontFamily: "Georgia, 'Arbutus Slab', serif", fontSize: 17, color: '#181b18', lineHeight: '20px', margin: '0 0 2px 0' }}>{fields.name || 'Your Name'}</div>
                    <div style={{ fontFamily: "'Plus Jakarta Sans', Helvetica, Arial, sans-serif", fontSize: 11, fontWeight: 500, color: '#6b6b63', letterSpacing: '0.02em', lineHeight: '14px', margin: '0 0 8px 0' }}>
                      {fields.phone || '\u00a0'}
                    </div>
                    <table cellPadding="0" cellSpacing="0" border="0" role="presentation" style={{ borderCollapse: 'collapse' }}>
                      <tbody>
                        <tr>
                          <td valign="middle" style={{ padding: '0 6px 0 0', lineHeight: 0 }}><img src={ASSET_LINKEDIN} alt="" width="22" height="22" style={{ display: 'block' }} /></td>
                          <td valign="middle" style={{ padding: '0 6px 0 0', lineHeight: 0 }}><img src={ASSET_EMAIL} alt="" width="22" height="22" style={{ display: 'block' }} /></td>
                          <td valign="middle" style={{ padding: 0, lineHeight: 0 }}><img src={ASSET_BRIJ} alt="" width="22" height="22" style={{ display: 'block' }} /></td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div style={{ display: 'flex', gap: 8, marginTop: 12, flexWrap: 'wrap' }}>
            <button onClick={copyRich} style={{ fontFamily: 'var(--brij-serif)', fontSize: 13, padding: '10px 20px', border: '1px solid transparent', borderRadius: 40, background: 'var(--brij-gradient-reverse)', cursor: 'pointer', fontWeight: 500, color: 'var(--brij-ink)' }}>
              {copied ? 'Copied' : 'Copy signature'}
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
        <div style={{ marginTop: 10 }}><strong>Gmail:</strong> Settings → See all settings → General → Signature → Create new → paste → Save changes at the bottom of the page.</div>
        <div style={{ marginTop: 4 }}><strong>Apple Mail:</strong> Mail → Settings → Signatures → select your account → paste. Uncheck "Always match my default message font".</div>
        <div style={{ marginTop: 4 }}><strong>Outlook (web):</strong> Settings → Mail → Compose and reply → New signature → paste.</div>
      </div>
    </Component>
  );
}

Object.assign(window, { PentagonArrow, Btn, ActionButtons, ActionHeader, ActionFooter, ActionEmailSig });
