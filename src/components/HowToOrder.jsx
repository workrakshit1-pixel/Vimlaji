export default function HowToOrder() {
  // ── AI CHATBOT SCREENSHOT ──────────────────────────────────────────────────
  // Replace the src below with your actual chatbot screenshot.
  // Place the image in /public/  e.g. /public/chatbot-screenshot.png
  // then set: src="/chatbot-screenshot.png"
  const chatbotScreenshot = '/chatbot-screenshot.png'   // ← replace path here

  return (
    <section id="how-to-book" style={{
      padding: '110px 0 120px',
      background: '#ffffff',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* BG blobs */}
      <div style={{ position: 'absolute', top: '40%', left: '50%', transform: 'translate(-50%,-50%)', width: 700, height: 700, background: 'radial-gradient(circle, rgba(0,184,204,0.05) 0%, transparent 70%)', borderRadius: '50%', pointerEvents: 'none' }} />

      <div className="container" style={{ position: 'relative' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 72 }}>
          <div className="reveal" style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '3px', color: 'var(--cyan-dark)', textTransform: 'uppercase', marginBottom: 14 }}>Simple & Fast</div>
          <h2 className="reveal reveal-delay-1" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, color: '#0a3540', letterSpacing: '-0.5px', lineHeight: 1.1, marginBottom: 14 }}>
            How to{' '}
            <span style={{ fontStyle: 'italic', background: 'linear-gradient(135deg, #00a8bc, #006f88)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Book</span>
          </h2>
          <p className="reveal reveal-delay-2" style={{ fontFamily: 'var(--font-body)', fontWeight: 300, fontSize: 16, color: 'var(--text-muted)', maxWidth: 400, margin: '0 auto' }}>
            Two ways to get a VimlaJi helper at your door — pick what works for you.
          </p>
        </div>

        {/* Two option cards */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32, alignItems: 'start' }}>

          {/* ── OPTION 1: AI Chatbot ── */}
          <div className="reveal" style={{ background: 'linear-gradient(135deg, rgba(0,184,204,0.07) 0%, rgba(0,146,168,0.03) 100%)', border: '1.5px solid rgba(0,184,204,0.28)', borderRadius: 24, overflow: 'hidden', boxShadow: '0 4px 32px rgba(0,184,204,0.1)' }}>
            {/* Phone mockup with chatbot screenshot */}
            <div style={{ background: 'linear-gradient(135deg, #b8ecf5 0%, #cdf4fa 100%)', padding: '36px 36px 0', display: 'flex', justifyContent: 'center' }}>
              {/* Phone frame */}
              <div style={{ width: 180, background: '#0a1a20', borderRadius: '28px 28px 0 0', padding: '12px 8px 0', boxShadow: '0 16px 48px rgba(0,0,0,0.25)' }}>
                {/* Notch */}
                <div style={{ width: 60, height: 6, background: '#1a2a30', borderRadius: 3, margin: '0 auto 10px' }} />
                {/* Screenshot */}
                <div style={{ background: '#f0f8fa', borderRadius: '16px 16px 0 0', overflow: 'hidden', height: 280 }}>
                  <img
                    src={chatbotScreenshot}
                    alt="VimlaJi AI Chatbot"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', display: 'block' }}
                    onError={e => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex' }}
                  />
                  {/* Placeholder when screenshot not found */}
                  <div style={{ display: 'none', height: '100%', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 10, background: '#e8f8fb', padding: 20 }}>
                    <div style={{ fontSize: 36 }}>💬</div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--cyan-dark)', textAlign: 'center', letterSpacing: '1px' }}>CHATBOT<br/>SCREENSHOT<br/>HERE</div>
                    <div style={{ fontFamily: 'var(--font-body)', fontSize: 11, color: 'var(--text-dim)', textAlign: 'center', marginTop: 4 }}>Replace /public/chatbot-screenshot.png</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Text */}
            <div style={{ padding: '28px 32px 32px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
                <div style={{ width: 34, height: 34, background: 'rgba(0,184,204,0.15)', border: '1px solid rgba(0,184,204,0.3)', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16 }}>💬</div>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--cyan-dark)', letterSpacing: '2px', textTransform: 'uppercase' }}>Option 1</span>
              </div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 700, color: '#0a3540', marginBottom: 10, lineHeight: 1.2 }}>Book via AI Chatbot</h3>
              <p style={{ fontFamily: 'var(--font-body)', fontWeight: 300, fontSize: 14.5, color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: 24 }}>
                Chat with our smart WhatsApp AI assistant 24/7. Just tell it what you need — it handles everything from service selection to payment confirmation in minutes.
              </p>
              <a
                href="https://wa.me/917973626242?text=Hi%20VimlaJi%2C%20I%20want%20to%20book%20a%20service"
                target="_blank" rel="noopener noreferrer"
                style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: 'linear-gradient(135deg, #00b8cc, #0092a8)', color: '#fff', fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 14, padding: '12px 26px', borderRadius: 100, boxShadow: '0 6px 24px rgba(0,184,204,0.35)', transition: 'all 0.3s ease' }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,184,204,0.5)' }}
                onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '0 6px 24px rgba(0,184,204,0.35)' }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12c0 1.77.46 3.44 1.28 4.9L2 22l5.32-1.26A9.95 9.95 0 0012 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm4.64 13.28c-.2.56-1.16 1.08-1.6 1.14-.44.06-.84.22-2.82-.58-2.38-.96-3.9-3.38-4.02-3.54-.12-.16-.98-1.3-.98-2.48s.62-1.76.86-2c.22-.24.48-.3.64-.3h.46c.14 0 .34-.06.52.4l.74 1.96c.08.2.04.44-.08.62l-.4.5c-.12.14-.26.3-.1.58.16.28.7 1.14 1.5 1.84.94.84 1.72 1.1 2 1.22.28.12.44.1.6-.06l.5-.58c.16-.2.4-.26.62-.18l1.96.92c.28.12.46.18.5.28.04.14.04.7-.16 1.26z"/></svg>
                Chat with AI — Book Now
              </a>
            </div>
          </div>

          {/* ── OPTION 2: WhatsApp Group ── */}
          <div className="reveal reveal-delay-2" style={{ background: '#ffffff', border: '1.5px solid rgba(0,184,204,0.18)', borderRadius: 24, padding: '36px 32px', boxShadow: '0 4px 24px rgba(0,184,204,0.08)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
              <div style={{ width: 34, height: 34, background: 'rgba(0,184,204,0.1)', border: '1px solid rgba(0,184,204,0.25)', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16 }}>👥</div>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--cyan-dark)', letterSpacing: '2px', textTransform: 'uppercase' }}>Option 2</span>
            </div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 700, color: '#0a3540', marginBottom: 10 }}>Join WhatsApp Group</h3>
            <p style={{ fontFamily: 'var(--font-body)', fontWeight: 300, fontSize: 14.5, color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: 28 }}>
              Join our VimlaJi WhatsApp community. Post your requirement, our team responds instantly. Get exclusive member deals and early access to new services.
            </p>

            {/* Steps mini */}
            {[
              { n: '1', text: 'Tap the button below to join our group' },
              { n: '2', text: 'Tell us your service need & address' },
              { n: '3', text: 'We confirm & dispatch a helper' },
            ].map(({ n, text }) => (
              <div key={n} style={{ display: 'flex', alignItems: 'flex-start', gap: 14, marginBottom: 16 }}>
                <div style={{ width: 26, height: 26, background: 'rgba(0,184,204,0.12)', border: '1px solid rgba(0,184,204,0.28)', borderRadius: 7, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--cyan-dark)', fontWeight: 600 }}>{n}</div>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--text-muted)', lineHeight: 1.55, paddingTop: 3 }}>{text}</p>
              </div>
            ))}

            <a
              href="https://chat.whatsapp.com/JH0LXCwLBA20LhtYDlwtKX"
              target="_blank" rel="noopener noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: 'transparent', border: '1.5px solid rgba(0,184,204,0.4)', color: 'var(--cyan-dark)', fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 14, padding: '12px 26px', borderRadius: 100, transition: 'all 0.3s ease', marginTop: 8 }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(0,184,204,0.1)'; e.currentTarget.style.borderColor = 'rgba(0,184,204,0.65)' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'rgba(0,184,204,0.4)' }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style={{ color: '#00b8cc' }}><path d="M12 2C6.48 2 2 6.48 2 12c0 1.77.46 3.44 1.28 4.9L2 22l5.32-1.26A9.95 9.95 0 0012 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm4.64 13.28c-.2.56-1.16 1.08-1.6 1.14-.44.06-.84.22-2.82-.58-2.38-.96-3.9-3.38-4.02-3.54-.12-.16-.98-1.3-.98-2.48s.62-1.76.86-2c.22-.24.48-.3.64-.3h.46c.14 0 .34-.06.52.4l.74 1.96c.08.2.04.44-.08.62l-.4.5c-.12.14-.26.3-.1.58.16.28.7 1.14 1.5 1.84.94.84 1.72 1.1 2 1.22.28.12.44.1.6-.06l.5-.58c.16-.2.4-.26.62-.18l1.96.92c.28.12.46.18.5.28.04.14.04.7-.16 1.26z"/></svg>
              Join the Community
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
