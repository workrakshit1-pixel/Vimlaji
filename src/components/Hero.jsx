import { useEffect, useRef } from 'react'

export default function Hero() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let w = canvas.width = window.innerWidth
    let h = canvas.height = window.innerHeight

    const particles = Array.from({ length: 48 }, () => ({
      x: Math.random() * w, y: Math.random() * h,
      r: Math.random() * 1.8 + 0.4,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      opacity: Math.random() * 0.45 + 0.12,
    }))

    let raf
    const draw = () => {
      ctx.clearRect(0, 0, w, h)
      particles.forEach((p, i) => {
        particles.slice(i + 1).forEach((q) => {
          const dx = p.x - q.x, dy = p.y - q.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 150) {
            ctx.beginPath()
            ctx.strokeStyle = `rgba(0,184,204,${0.15 * (1 - dist / 150)})`
            ctx.lineWidth = 0.8
            ctx.moveTo(p.x, p.y); ctx.lineTo(q.x, q.y); ctx.stroke()
          }
        })
        p.x += p.vx; p.y += p.vy
        if (p.x < 0 || p.x > w) p.vx *= -1
        if (p.y < 0 || p.y > h) p.vy *= -1
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(0,184,204,${p.opacity})`; ctx.fill()
      })
      raf = requestAnimationFrame(draw)
    }
    draw()
    const onResize = () => { w = canvas.width = window.innerWidth; h = canvas.height = window.innerHeight }
    window.addEventListener('resize', onResize)
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', onResize) }
  }, [])

  return (
    <section id="about" style={{
      position: 'relative', minHeight: '100vh',
      display: 'flex', alignItems: 'center', overflow: 'hidden',
      background: 'linear-gradient(145deg, #cff4f9 0%, #e2f8fc 30%, #edfafe 60%, #d4f3f9 100%)',
    }}>
      <canvas ref={canvasRef} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.85 }} />

      {/* Colour blobs */}
      <div style={{ position: 'absolute', top: '10%', right: '5%', width: 520, height: 520, background: 'radial-gradient(circle, rgba(0,184,204,0.14) 0%, transparent 70%)', borderRadius: '50%', animation: 'float 7s ease-in-out infinite' }} />
      <div style={{ position: 'absolute', bottom: '10%', left: '3%', width: 360, height: 360, background: 'radial-gradient(circle, rgba(0,200,220,0.1) 0%, transparent 70%)', borderRadius: '50%', animation: 'float 9s ease-in-out infinite reverse' }} />

      {/* Spinning ring */}
      <div style={{ position: 'absolute', top: '18%', right: '10%', width: 290, height: 290, border: '1.5px solid rgba(0,184,204,0.2)', borderRadius: '50%', animation: 'spin-slow 30s linear infinite' }}>
        <div style={{ position: 'absolute', top: -5, left: '50%', width: 10, height: 10, background: 'var(--cyan)', borderRadius: '50%', transform: 'translateX(-50%)', boxShadow: '0 0 14px rgba(0,184,204,0.7)' }} />
      </div>

      {/* Content */}
      <div className="container" style={{ position: 'relative', zIndex: 2, paddingTop: 130, paddingBottom: 80 }}>
        <div style={{ maxWidth: 700 }}>

          {/* Main headline — Roca Two font */}
          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.6rem, 6vw, 5rem)',
            fontWeight: 900, lineHeight: 1.08,
            letterSpacing: '-1px',
            animation: 'fadeInUp 0.9s ease 0.1s both',
          }}>
            <span style={{ display: 'block', color: '#0a3540' }}>The Only</span>
            <span style={{
              display: 'block',
              background: 'linear-gradient(135deg, #00a8bc 0%, #007a90 100%)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
            }}>'Ji'</span>
            <span style={{ display: 'block', color: '#0a3540' }}>our Bharat needs.</span>
          </h1>

          {/* Sub heading */}
          <p style={{
            fontFamily: 'var(--font-body)', fontWeight: 400,
            fontSize: 22, color: 'var(--cyan-dark)',
            marginTop: 20, letterSpacing: '0.2px',
            animation: 'fadeInUp 0.9s ease 0.25s both',
          }}>Househelp in minutes.</p>

          <p style={{
            fontFamily: 'var(--font-body)', fontWeight: 300,
            fontSize: 17, color: 'var(--text-muted)',
            maxWidth: 480, marginTop: 16, lineHeight: 1.75,
            animation: 'fadeInUp 0.9s ease 0.35s both',
          }}>
            Trained, verified house-help professionals — sweeping, mopping, Kitchen Prep, laundry & more — delivered to your doorstep in <strong style={{ color: 'var(--cyan-dark)', fontWeight: 600 }}>under 30 minutes</strong>.
          </p>

          {/* CTAs */}
          <div style={{ display: 'flex', gap: 16, marginTop: 44, flexWrap: 'wrap', animation: 'fadeInUp 0.9s ease 0.5s both' }}>
            <a href="https://wa.me/917973626242?text=Hi%20VimlaJi%2C%20I%20want%20to%20book%20a%20service"
              target="_blank" rel="noopener noreferrer"
              style={{ display: 'flex', alignItems: 'center', gap: 10, background: 'linear-gradient(135deg, #00b8cc, #0092a8)', color: '#fff', fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 15, padding: '14px 32px', borderRadius: 100, boxShadow: '0 8px 28px rgba(0,184,204,0.38)', transition: 'all 0.3s ease' }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 14px 36px rgba(0,184,204,0.52)' }}
              onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '0 8px 28px rgba(0,184,204,0.38)' }}
            >
              {/* WhatsApp icon */}
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12c0 1.77.46 3.44 1.28 4.9L2 22l5.32-1.26A9.95 9.95 0 0012 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm4.64 13.28c-.2.56-1.16 1.08-1.6 1.14-.44.06-.84.22-2.82-.58-2.38-.96-3.9-3.38-4.02-3.54-.12-.16-.98-1.3-.98-2.48s.62-1.76.86-2c.22-.24.48-.3.64-.3h.46c.14 0 .34-.06.52.4l.74 1.96c.08.2.04.44-.08.62l-.4.5c-.12.14-.26.3-.1.58.16.28.7 1.14 1.5 1.84.94.84 1.72 1.1 2 1.22.28.12.44.1.6-.06l.5-.58c.16-.2.4-.26.62-.18l1.96.92c.28.12.46.18.5.28.04.14.04.7-.16 1.26z"/></svg>
              Book via WhatsApp
            </a>

            <a href="#services"
              style={{ display: 'flex', alignItems: 'center', gap: 8, background: 'rgba(255,255,255,0.75)', border: '1.5px solid rgba(0,184,204,0.35)', color: 'var(--cyan-dark)', fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 15, padding: '14px 28px', borderRadius: 100, transition: 'all 0.3s ease', backdropFilter: 'blur(8px)' }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(0,184,204,0.1)'; e.currentTarget.style.borderColor = 'rgba(0,184,204,0.55)' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.75)'; e.currentTarget.style.borderColor = 'rgba(0,184,204,0.35)' }}
            >Our Services ↓</a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{ position: 'absolute', bottom: 32, left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '2px', color: 'var(--text-dim)', textTransform: 'uppercase' }}>Scroll</div>
        <div style={{ width: 1, height: 44, background: 'linear-gradient(to bottom, var(--cyan), transparent)', animation: 'float 2s ease-in-out infinite' }} />
      </div>
    </section>
  )
}
