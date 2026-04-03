export default function Footer() {
  const year = new Date().getFullYear()

  const WaIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12c0 1.77.46 3.44 1.28 4.9L2 22l5.32-1.26A9.95 9.95 0 0012 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm4.64 13.28c-.2.56-1.16 1.08-1.6 1.14-.44.06-.84.22-2.82-.58-2.38-.96-3.9-3.38-4.02-3.54-.12-.16-.98-1.3-.98-2.48s.62-1.76.86-2c.22-.24.48-.3.64-.3h.46c.14 0 .34-.06.52.4l.74 1.96c.08.2.04.44-.08.62l-.4.5c-.12.14-.26.3-.1.58.16.28.7 1.14 1.5 1.84.94.84 1.72 1.1 2 1.22.28.12.44.1.6-.06l.5-.58c.16-.2.4-.26.62-.18l1.96.92c.28.12.46.18.5.28.04.14.04.7-.16 1.26z"/>
    </svg>
  )
  const IgIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="2" y="2" width="20" height="20" rx="5"/>
      <circle cx="12" cy="12" r="5"/>
      <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none"/>
    </svg>
  )
  const MailIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="2" y="4" width="20" height="16" rx="2"/>
      <path d="m2 7 10 7 10-7"/>
    </svg>
  )

  return (
    <footer style={{ background: '#ffffff', borderTop: '1.5px solid rgba(0,184,204,0.16)', padding: '64px 0 0', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', bottom: 0, left: '50%', transform: 'translateX(-50%)', width: 600, height: 160, background: 'radial-gradient(ellipse, rgba(0,184,204,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />

      <div className="container" style={{ position: 'relative' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr', gap: 56, marginBottom: 56 }}>

          {/* ── Brand column ── */}
          <div>
            {/* Logo */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 18 }}>
              <img src="/logo.jpg" alt="VimlaJi" width="36" height="36" style={{ objectFit: 'contain', borderRadius: 8 }}
                onError={e => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex' }}
              />
              <div style={{ display: 'none', width: 36, height: 36, background: 'rgba(0,184,204,0.1)', border: '1px solid rgba(0,184,204,0.3)', borderRadius: 9, alignItems: 'center', justifyContent: 'center' }}>
                <svg width="20" height="20" viewBox="0 0 38 38" fill="none"><path d="M19 5L33 16V33H25V24H13V33H5V16L19 5Z" fill="none" stroke="#00b8cc" strokeWidth="2.2" strokeLinejoin="round"/><circle cx="19" cy="21" r="3" fill="#00b8cc"/></svg>
              </div>
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 22, color: '#0a3540', letterSpacing: '-0.3px' }}>VimlaJi</span>
            </div>

            <p style={{ fontFamily: 'var(--font-body)', fontWeight: 300, fontSize: 14, color: 'var(--text-muted)', lineHeight: 1.8, maxWidth: 240, marginBottom: 24 }}>
              Trained, verified house-help professionals at your doorstep — in minutes, not days.
            </p>

            {/* Social icons with logos */}
            <div style={{ display: 'flex', gap: 10 }}>
              {/* WhatsApp */}
              <a href="https://wa.me/917973626242" target="_blank" rel="noopener noreferrer" title="WhatsApp"
                style={{ width: 40, height: 40, background: 'rgba(0,184,204,0.08)', border: '1px solid rgba(0,184,204,0.2)', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#00b8cc', transition: 'all 0.3s' }}
                onMouseEnter={e => { e.currentTarget.style.background = '#25D366'; e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderColor = '#25D366' }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(0,184,204,0.08)'; e.currentTarget.style.color = '#00b8cc'; e.currentTarget.style.borderColor = 'rgba(0,184,204,0.2)' }}
              ><WaIcon /></a>

              {/* Instagram */}
              <a href="https://instagram.com/vimlaji.in" target="_blank" rel="noopener noreferrer" title="Instagram"
                style={{ width: 40, height: 40, background: 'rgba(0,184,204,0.08)', border: '1px solid rgba(0,184,204,0.2)', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#00b8cc', transition: 'all 0.3s' }}
                onMouseEnter={e => { e.currentTarget.style.background = 'linear-gradient(135deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)'; e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderColor = 'transparent' }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(0,184,204,0.08)'; e.currentTarget.style.color = '#00b8cc'; e.currentTarget.style.borderColor = 'rgba(0,184,204,0.2)' }}
              ><IgIcon /></a>

              {/* Gmail */}
              <a href="mailto:vimlajii18@gmail.com" title="Email"
                style={{ width: 40, height: 40, background: 'rgba(0,184,204,0.08)', border: '1px solid rgba(0,184,204,0.2)', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#00b8cc', transition: 'all 0.3s' }}
                onMouseEnter={e => { e.currentTarget.style.background = '#EA4335'; e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderColor = '#EA4335' }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(0,184,204,0.08)'; e.currentTarget.style.color = '#00b8cc'; e.currentTarget.style.borderColor = 'rgba(0,184,204,0.2)' }}
              ><MailIcon /></a>
            </div>
          </div>

          {/* ── Quick Links ── */}
          <div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '2.5px', color: 'var(--cyan-dark)', textTransform: 'uppercase', marginBottom: 20, fontWeight: 600 }}>Quick Links</div>
            {[
              { label: 'About VimlaJi', href: '#about' },
              { label: 'Our Services', href: '#services' },
              { label: 'How to Book', href: '#how-to-book' },
              { label: "FAQ's", href: '#faqs' },
              { label: 'Book Now', href: 'https://wa.me/917973626242' },
              { label: 'Join Community', href: 'https://chat.whatsapp.com/JH0LXCwLBA20LhtYDlwtKX' },
              { label: 'Instagram', href: 'https://instagram.com/vimlaji.in' },
            ].map(({ label, href }) => (
              <a key={label} href={href}
                style={{ display: 'flex', alignItems: 'center', gap: 8, fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--text-muted)', marginBottom: 11, transition: 'color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--cyan-dark)'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}
              >
                <div style={{ width: 4, height: 4, borderRadius: '50%', background: 'var(--cyan)', opacity: 0.5 }} />
                {label}
              </a>
            ))}
          </div>

          {/* ── Contact ── */}
          <div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '2.5px', color: 'var(--cyan-dark)', textTransform: 'uppercase', marginBottom: 20, fontWeight: 600 }}>Contact</div>

            {[
              { Icon: WaIcon, label: 'WhatsApp', val: '+91 7973626242', href: 'https://wa.me/917973626242', hoverColor: '#25D366' },
              { Icon: MailIcon, label: 'Email', val: 'vimlajii18@gmail.com', href: 'mailto:vimlajii18@gmail.com', hoverColor: '#EA4335' },
              { Icon: IgIcon, label: 'Instagram', val: '@vimlaji.in', href: 'https://instagram.com/vimlaji.in', hoverColor: '#C13584' },
            ].map(({ Icon, label, val, href, hoverColor }) => (
              <div key={label} style={{ marginBottom: 18 }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--text-dim)', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: 5 }}>{label}</div>
                <a href={href} target={href.startsWith('mailto') ? '_self' : '_blank'} rel="noopener noreferrer"
                  style={{ display: 'flex', alignItems: 'center', gap: 8, fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--text-muted)', transition: 'color 0.2s' }}
                  onMouseEnter={e => e.currentTarget.style.color = hoverColor}
                  onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}
                >
                  <span style={{ color: 'var(--cyan)', opacity: 0.7 }}><Icon /></span>
                  {val}
                </a>
              </div>
            ))}

            <div style={{ marginTop: 8 }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--text-dim)', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: 5 }}>Website</div>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--text-muted)' }}>vimlaji.com</div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: 1, background: 'linear-gradient(90deg, transparent, rgba(0,184,204,0.28), transparent)' }} />

        {/* Bottom bar */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px 0 24px', flexWrap: 'wrap', gap: 14 }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--text-dim)' }}>
            © {year} VimlaJi. All rights reserved.
          </div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--text-dim)', display: 'flex', alignItems: 'center', gap: 6 }}>
            Made with <span style={{ color: '#e25252', margin: '0 2px' }}>♥</span> for clean homes
          </div>
          <div style={{ display: 'flex', gap: 22 }}>
            {['Privacy Policy', 'Terms of Service'].map(item => (
              <a key={item} href="#"
                style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--text-dim)', transition: 'color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--cyan-dark)'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--text-dim)'}
              >{item}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
