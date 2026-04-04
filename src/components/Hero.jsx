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
    <section
      id="about"
      className="relative flex min-h-screen items-center overflow-hidden bg-[linear-gradient(145deg,#cff4f9_0%,#e2f8fc_30%,#edfafe_60%,#d4f3f9_100%)]"
    >
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full opacity-[0.85]" />

      <div className="animate-float absolute right-[5%] top-[10%] h-[320px] w-[320px] rounded-full bg-[radial-gradient(circle,rgba(0,184,204,0.14)_0%,transparent_70%)] sm:h-[420px] sm:w-[420px] lg:h-[520px] lg:w-[520px]" />
      <div className="animate-float-reverse absolute bottom-[10%] left-[3%] h-[220px] w-[220px] rounded-full bg-[radial-gradient(circle,rgba(0,200,220,0.1)_0%,transparent_70%)] sm:h-[280px] sm:w-[280px] lg:h-[360px] lg:w-[360px]" />

      <div className="animate-spin-slow absolute right-[10%] top-[18%] hidden h-[290px] w-[290px] rounded-full border-[1.5px] border-[rgba(0,184,204,0.2)] lg:block">
        <div className="absolute left-1/2 top-[-5px] h-[10px] w-[10px] -translate-x-1/2 rounded-full bg-[var(--cyan)] shadow-[0_0_14px_rgba(0,184,204,0.7)]" />
      </div>

      <div className="app-container relative z-[2] pb-20 pt-36">
        <div className="max-w-[700px]">
          <h1 className="animate-[fadeInUp_0.9s_ease_0.1s_both] font-display text-[clamp(2.6rem,6vw,5rem)] font-black leading-[1.08] tracking-[-1px]">
            <span className="block text-[#0a3540]">The Only</span>
            <span className="block bg-[linear-gradient(135deg,#00a8bc_0%,#007a90_100%)] bg-clip-text text-transparent">
              'Ji'
            </span>
            <span className="block text-[#0a3540]">our Bharat needs.</span>
          </h1>

          <p className="animate-[fadeInUp_0.9s_ease_0.25s_both] mt-5 font-body text-[20px] font-normal tracking-[0.2px] text-[var(--cyan-dark)] sm:text-[22px]">
            Househelp in minutes.
          </p>

          <p className="animate-[fadeInUp_0.9s_ease_0.35s_both] mt-4 max-w-[480px] font-body text-[16px] font-light leading-[1.75] text-[var(--text-muted)] sm:text-[17px]">
            Trained, verified house-help professionals - sweeping, mopping, Kitchen Prep, laundry &
            more - delivered to your doorstep in{' '}
            <strong className="font-semibold text-[var(--cyan-dark)]">under 30 minutes</strong>.
          </p>

          <div className="animate-[fadeInUp_0.9s_ease_0.5s_both] mt-11 flex flex-wrap gap-4">
            <a
              href="https://wa.me/917973626242?text=Hi%20VimlaJi%2C%20I%20want%20to%20book%20a%20service"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 rounded-full bg-[linear-gradient(135deg,#00b8cc,#0092a8)] px-7 py-3 text-[15px] font-bold text-white shadow-[0_8px_28px_rgba(0,184,204,0.38)] transition-all duration-300 hover:-translate-y-[3px] hover:shadow-[0_14px_36px_rgba(0,184,204,0.52)] sm:px-8 sm:py-[14px]"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12c0 1.77.46 3.44 1.28 4.9L2 22l5.32-1.26A9.95 9.95 0 0012 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm4.64 13.28c-.2.56-1.16 1.08-1.6 1.14-.44.06-.84.22-2.82-.58-2.38-.96-3.9-3.38-4.02-3.54-.12-.16-.98-1.3-.98-2.48s.62-1.76.86-2c.22-.24.48-.3.64-.3h.46c.14 0 .34-.06.52.4l.74 1.96c.08.2.04.44-.08.62l-.4.5c-.12.14-.26.3-.1.58.16.28.7 1.14 1.5 1.84.94.84 1.72 1.1 2 1.22.28.12.44.1.6-.06l.5-.58c.16-.2.4-.26.62-.18l1.96.92c.28.12.46.18.5.28.04.14.04.7-.16 1.26z" />
              </svg>
              Book via WhatsApp
            </a>

            <a
              href="#services"
              className="flex items-center gap-2 rounded-full border-[1.5px] border-[rgba(0,184,204,0.35)] bg-[rgba(255,255,255,0.75)] px-7 py-3 text-[15px] font-semibold text-[var(--cyan-dark)] backdrop-blur-[8px] transition-all duration-300 hover:border-[rgba(0,184,204,0.55)] hover:bg-[rgba(0,184,204,0.1)] sm:px-7 sm:py-[14px]"
            >
              Our Services ↓
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex">
        <div className="font-mono text-[10px] uppercase tracking-[2px] text-[var(--text-dim)]">Scroll</div>
        <div className="h-11 w-px animate-[float_2s_ease-in-out_infinite] bg-[linear-gradient(to_bottom,var(--cyan),transparent)]" />
      </div>
    </section>
  )
}
