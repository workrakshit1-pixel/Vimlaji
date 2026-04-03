export default function About() {
  return (
    <section style={{ padding: '120px 0', background: '#ffffff', position: 'relative', overflow: 'hidden' }}>
      {/* Soft bg tint */}
      <div style={{ position: 'absolute', top: 0, right: 0, width: 500, height: 500, background: 'radial-gradient(circle at top right, rgba(0,184,204,0.07) 0%, transparent 65%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: 0, left: 0, width: 400, height: 400, background: 'radial-gradient(circle at bottom left, rgba(0,200,220,0.05) 0%, transparent 65%)', pointerEvents: 'none' }} />

      <div className="container" style={{ position: 'relative' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>

          {/* LEFT card */}
          <div className="reveal" style={{ position: 'relative' }}>
            <div style={{ background: 'linear-gradient(135deg, rgba(0,184,204,0.08) 0%, rgba(0,152,170,0.04) 100%)', border: '1px solid rgba(0,184,204,0.2)', borderRadius: 24, padding: 48, position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: 0, right: 0, width: 120, height: 120, background: 'radial-gradient(circle at top right, rgba(0,184,204,0.12), transparent 70%)' }} />

              <svg width="68" height="68" viewBox="0 0 72 72" fill="none" style={{ marginBottom: 28 }}>
                <rect width="72" height="72" rx="18" fill="rgba(0,184,204,0.1)" stroke="rgba(0,184,204,0.3)" strokeWidth="1.5"/>
                <path d="M36 14L56 30V56H46V42H26V56H16V30L36 14Z" fill="none" stroke="#00b8cc" strokeWidth="2.5" strokeLinejoin="round"/>
                <circle cx="36" cy="38" r="5" fill="#00b8cc" opacity="0.9"/>
                <path d="M36 26V22M36 54V50M24 38H20M52 38H48" stroke="#00b8cc" strokeWidth="1.5" strokeLinecap="round" opacity="0.4"/>
              </svg>

              <div style={{ fontFamily: 'var(--font-display)', fontSize: 36, fontWeight: 900, color: '#0d3d47', lineHeight: 1, marginBottom: 6 }}>VimlaJi</div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '3px', color: 'var(--cyan)', textTransform: 'uppercase', marginBottom: 28 }}>Househelp Services</div>
              <div style={{ height: 1, background: 'linear-gradient(90deg, var(--cyan), transparent)', marginBottom: 28, opacity: 0.3 }} />

              {['Trained Professionals', 'Background Verified', 'Insured Services', 'Instant Booking'].map((f) => (
                <div key={f} style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
                  <div style={{ width: 20, height: 20, borderRadius: '50%', background: 'rgba(0,184,204,0.12)', border: '1px solid rgba(0,184,204,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <div style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--cyan)' }} />
                  </div>
                  <span style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--text-muted)' }}>{f}</span>
                </div>
              ))}
            </div>

            {/* Floating badge */}
            <div style={{ position: 'absolute', bottom: -20, right: -20, background: 'linear-gradient(135deg, #00b8cc, #0099aa)', borderRadius: 16, padding: '16px 22px', boxShadow: '0 8px 32px rgba(0,184,204,0.35)', animation: 'float 5s ease-in-out infinite' }}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 28, fontWeight: 900, color: '#fff', lineHeight: 1 }}>30</div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 9, color: 'rgba(255,255,255,0.8)', letterSpacing: '1.5px', textTransform: 'uppercase', marginTop: 4 }}>Min Avg.<br/>Arrival</div>
            </div>
          </div>

          {/* RIGHT text */}
          <div>
            <div className="reveal" style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '3px', color: 'var(--cyan)', textTransform: 'uppercase', marginBottom: 18 }}>About Vimlaji</div>

            <h2 className="reveal reveal-delay-1" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 900, lineHeight: 1.12, color: '#0d3d47', letterSpacing: '-0.5px', marginBottom: 24 }}>
              Because your home<br/>deserves more than<br/>
              <span style={{ fontStyle: 'italic', background: 'linear-gradient(135deg, #00b8cc, #0077aa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>"theek-thak."</span>
            </h2>

            <p className="reveal reveal-delay-2" style={{ fontFamily: 'var(--font-body)', fontWeight: 300, fontSize: 16, color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: 18 }}>
              Vimlaji was built on one simple belief — every household deserves professional, reliable, and affordable help. We match you with trained, background-verified house-help professionals who arrive at your doorstep within minutes of booking.
            </p>

            <p className="reveal reveal-delay-3" style={{ fontFamily: 'var(--font-body)', fontWeight: 300, fontSize: 16, color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: 36 }}>
              No more waiting days. No more unreliable help. Just book on WhatsApp, and we handle the rest — from sweeping to dish washing, laundry to deep cleaning.
            </p>

            <div className="reveal reveal-delay-4" style={{ borderLeft: '2px solid var(--cyan)', paddingLeft: 24 }}>
              <p style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: 18, color: '#2a7080', lineHeight: 1.6 }}>"Trained help. Honest pricing. At your door in minutes."</p>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--text-dim)', letterSpacing: '2px', textTransform: 'uppercase', marginTop: 10 }}>— The VimlaJi Promise</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
