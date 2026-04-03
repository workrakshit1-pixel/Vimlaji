import { useRef, useEffect, useState } from 'react'

// ── SERVICE DATA ──────────────────────────────────────────────────────────────
// Replace each `image` path with your actual image file placed in /public/services/
// e.g. /public/services/sweeping.jpg  →  src="/services/sweeping.jpg"
const services = [
  {
    title: 'Sweeping',
    desc: 'Thorough sweeping of all rooms, corridors and common areas for a dust-free home.',
    image: '/sweeping.jpg',          // ← replace with your image
    emoji: '',
  },
  {
    title: 'Mopping',
    desc: 'Deep floor mopping with clean water — leaving every surface spotless and fresh.',
    image: '/mopping.webp',           // ← replace with your image
    emoji: '',
  },
  {
    title: 'Room Cleaning',
    desc: 'Dusting, organising, bed-making and full room tidying done with care.',
    image: '/room.jpeg',     // ← replace with your image
    emoji: '',
  },
  {
    title: 'Laundry',
    desc: 'Washing, drying, folding and ironing — your clothes handled neatly.',
    image: '/laundry.png',           // ← replace with your image
    emoji: '',
  },
  {
    title: 'Kitchen Prep',
    desc: 'Cutting vegetables, cleaning counters and prepping your kitchen for cooking.',
    image: '/kitchen.avif',      // ← replace with your image
    emoji: '',
  },
  {
    title: 'Bathroom Cleaning',
    desc: 'Scrubbing tiles, sanitising fixtures and leaving your bathroom hygienically clean.',
    image: '/bathroom.avif', // ← replace with your image
    emoji: '',
  },
  {
    title: 'Dish Washing',
    desc: 'All utensils washed, scrubbed and neatly arranged — kitchen sparkling clean.',
    image: '/utensils.png',      // ← replace with your image
    emoji: '',
  },
]

// Duplicate for infinite loop effect
const doubled = [...services, ...services]

export default function Services() {
  const trackRef = useRef(null)
  const [paused, setPaused] = useState(false)

  // CSS animation is used for the slide — pause on hover via state
  const cardW = 280
  const gap = 24
  const totalW = services.length * (cardW + gap)

  return (
    <section id="services" style={{
      padding: '110px 0 120px',
      background: 'linear-gradient(180deg, #f0fafd 0%, #e6f8fc 100%)',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* BG blobs */}
      <div style={{ position: 'absolute', top: -60, right: -60, width: 400, height: 400, background: 'radial-gradient(circle, rgba(0,184,204,0.08) 0%, transparent 70%)', borderRadius: '50%', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: -40, left: -40, width: 320, height: 320, background: 'radial-gradient(circle, rgba(0,184,204,0.06) 0%, transparent 70%)', borderRadius: '50%', pointerEvents: 'none' }} />

      {/* Section header */}
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <div className="reveal" style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '3px', color: 'var(--cyan-dark)', textTransform: 'uppercase', marginBottom: 14 }}>What We Do</div>
          <h2 className="reveal reveal-delay-1" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, color: '#0a3540', letterSpacing: '-0.5px', lineHeight: 1.1, marginBottom: 14 }}>
            Services We{' '}
            <span style={{ fontStyle: 'italic', background: 'linear-gradient(135deg, #00a8bc, #006f88)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Offer</span>
          </h2>
          <p className="reveal reveal-delay-2" style={{ fontFamily: 'var(--font-body)', fontWeight: 300, fontSize: 16, color: 'var(--text-muted)', maxWidth: 440, margin: '0 auto' }}>
            Everything your home needs — done by trained, verified helpers at your doorstep.
          </p>
        </div>
      </div>

      {/* ── SLIDING IMAGE CARDS ── */}
      <div
        style={{ overflow: 'hidden', position: 'relative' }}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {/* Fade edges */}
        <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 80, background: 'linear-gradient(to right, #eaf8fb, transparent)', zIndex: 2, pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: 80, background: 'linear-gradient(to left, #e6f8fc, transparent)', zIndex: 2, pointerEvents: 'none' }} />

        <div
          ref={trackRef}
          style={{
            display: 'flex',
            gap: gap,
            width: 'max-content',
            padding: '8px 40px 16px',
            animation: `slideTrack ${services.length * 4}s linear infinite`,
            animationPlayState: paused ? 'paused' : 'running',
          }}
        >
          {doubled.map((svc, i) => (
            <div key={i} style={{
              width: cardW, flexShrink: 0,
              background: '#ffffff',
              border: '1px solid rgba(0,184,204,0.16)',
              borderRadius: 20,
              overflow: 'hidden',
              boxShadow: '0 4px 24px rgba(0,184,204,0.09)',
              transition: 'transform 0.35s ease, box-shadow 0.35s ease',
              cursor: 'default',
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = '0 14px 40px rgba(0,184,204,0.2)' }}
              onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '0 4px 24px rgba(0,184,204,0.09)' }}
            >
              {/* Service image */}
              <div style={{ width: '100%', height: 190, background: 'linear-gradient(135deg, #cff2f8 0%, #b8eaf4 100%)', position: 'relative', overflow: 'hidden' }}>
                <img
                  src={svc.image}
                  alt={svc.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  onError={e => { e.target.style.display = 'none' }}
                />
                {/* Emoji fallback shown on top always until real image loads */}
                <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 52, pointerEvents: 'none' }}>
                  {svc.emoji}
                </div>
              </div>

              {/* Card text */}
              <div style={{ padding: '20px 22px 24px' }}>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 18, fontWeight: 700, color: '#0a3540', marginBottom: 8 }}>{svc.title}</h3>
                <p style={{ fontFamily: 'var(--font-body)', fontWeight: 300, fontSize: 13.5, color: 'var(--text-muted)', lineHeight: 1.65 }}>{svc.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
