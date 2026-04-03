import { useEffect, useState } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 500,
      padding: '0 28px',
      transition: 'all 0.35s cubic-bezier(0.22,1,0.36,1)',
      /* Always visible & bold — slightly opaque even when at top */
      background: scrolled ? 'rgba(255,255,255,0.97)' : 'rgba(225,248,252,0.85)',
      backdropFilter: 'blur(18px)',
      WebkitBackdropFilter: 'blur(18px)',
      borderBottom: '1.5px solid rgba(0,184,204,0.22)',
      boxShadow: scrolled
        ? '0 3px 32px rgba(0,184,204,0.14), 0 1px 0 rgba(0,184,204,0.08)'
        : '0 2px 20px rgba(0,184,204,0.1)',
    }}>
      <div style={{ maxWidth: 1160, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 70 }}>

        {/* LOGO — image + bold name */}
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: 11 }}>
          {/* ── LOGO IMAGE ──
               Replace the src below with your actual logo file path.
               Put your logo image inside the /public folder (e.g. /public/logo.png)
               then set src="/logo.png"  */}
          <img
            src="public/logo.jpg"
            alt="VimlaJi Logo"
            width="40"
            height="40"
            style={{ objectFit: 'contain', borderRadius: 8 }}
            onError={e => {
              // Fallback SVG icon if logo.png not found
              e.target.style.display = 'none'
              e.target.nextSibling.style.display = 'flex'
            }}
          />
          {/* Fallback icon (hidden when logo loads) */}
          <div style={{ display: 'none', width: 40, height: 40, background: 'rgba(0,184,204,0.12)', border: '1.5px solid rgba(0,184,204,0.4)', borderRadius: 10, alignItems: 'center', justifyContent: 'center' }}>
            <svg width="22" height="22" viewBox="0 0 38 38" fill="none">
              <path d="M19 5L33 16V33H25V24H13V33H5V16L19 5Z" fill="none" stroke="#00b8cc" strokeWidth="2.2" strokeLinejoin="round"/>
              <circle cx="19" cy="21" r="3" fill="#00b8cc"/>
            </svg>
          </div>

          <span style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 900,
            fontSize: 24,
            color: '#0a3540',
            letterSpacing: '-0.5px',
            lineHeight: 1,
          }}>VimlaJi</span>
        </a>

        {/* NAV LINKS */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 34 }}>
          {[
            { label: 'About', href: '#about' },
            { label: 'Services', href: '#services' },
            { label: 'How to Book', href: '#how-to-book' },
            { label: "FAQ's", href: '#faqs' },
          ].map(({ label, href }) => (
            <a key={label} href={href}
              style={{ fontFamily: 'var(--font-body)', fontSize: 14.5, fontWeight: 500, color: 'var(--text-muted)', transition: 'color 0.2s', letterSpacing: '0.1px' }}
              onMouseEnter={e => e.target.style.color = 'var(--cyan-dark)'}
              onMouseLeave={e => e.target.style.color = 'var(--text-muted)'}
            >{label}</a>
          ))}
        </div>

        {/* CTA */}
        <a href="https://wa.me/91XXXXXXXXXX?text=Hi%20VimlaJi%2C%20I%20want%20to%20book%20a%20service"
          target="_blank" rel="noopener noreferrer"
          style={{ background: 'linear-gradient(135deg, #00b8cc, #0092a8)', color: '#fff', fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 14, padding: '10px 26px', borderRadius: 100, transition: 'all 0.3s', boxShadow: '0 4px 18px rgba(0,184,204,0.35)', letterSpacing: '0.2px' }}
          onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 8px 28px rgba(0,184,204,0.5)'; e.currentTarget.style.transform = 'translateY(-1px)' }}
          onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 4px 18px rgba(0,184,204,0.35)'; e.currentTarget.style.transform = '' }}
        >Book Now →</a>
      </div>
    </nav>
  )
}
