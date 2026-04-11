// ── SERVICE DATA ──────────────────────────────────────────────────────────────
const services = [
  {
    title: 'Sweeping',
    desc: 'Thorough sweeping of all rooms, corridors and common areas for a dust-free home.',
    image: '/sweeping.jpg',
    emoji: '',
  },
  {
    title: 'Mopping',
    desc: 'Deep floor mopping with clean water - leaving every surface spotless and fresh.',
    image: '/mopping.webp',
    emoji: '',
  },
  {
    title: 'Room Cleaning',
    desc: 'Dusting, organising, bed-making and full room tidying done with care.',
    image: '/room.jpeg',
    emoji: '',
  },
  {
    title: 'Laundry',
    desc: 'Washing, drying, folding and ironing - your clothes handled neatly.',
    image: '/laundry.png',
    emoji: '',
  },
  {
    title: 'Kitchen Prep',
    desc: 'Cutting vegetables, cleaning counters and prepping your kitchen for cooking.',
    image: '/kitchen.avif',
    emoji: '',
  },
  {
    title: 'Bathroom Cleaning',
    desc: 'Scrubbing tiles, sanitising fixtures and leaving your bathroom hygienically clean.',
    image: '/bathroom.avif',
    emoji: '',
  },
  {
    title: 'Dish Washing',
    desc: 'All utensils washed, scrubbed and neatly arranged - kitchen sparkling clean.',
    image: '/utensils.png',
    emoji: '',
  },
]

const doubled = [...services, ...services]

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[linear-gradient(180deg,#f0fafd_0%,#e6f8fc_100%)] py-[90px] lg:py-[110px]"
    >
      <div className="pointer-events-none absolute -right-[60px] -top-[60px] h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle,rgba(0,184,204,0.08)_0%,transparent_70%)]" />
      <div className="pointer-events-none absolute -bottom-10 -left-10 h-[320px] w-[320px] rounded-full bg-[radial-gradient(circle,rgba(0,184,204,0.06)_0%,transparent_70%)]" />

      <div className="app-container">
        <div className="mb-12 text-center lg:mb-16">
          <div className="reveal mb-[14px] font-mono text-[11px] uppercase tracking-[3px] text-[var(--cyan-dark)]">
            What We Do
          </div>
          <div className="reveal mb-4 inline-flex animate-[float_3.4s_ease-in-out_infinite] items-center gap-2 rounded-full border border-[rgba(0,184,204,0.28)] bg-[linear-gradient(135deg,rgba(255,255,255,0.92),rgba(224,247,252,0.9))] px-4 py-1.5 shadow-[0_6px_24px_rgba(0,184,204,0.16)]">
            <span className="h-2 w-2 animate-pulse rounded-full bg-[var(--cyan)]" />
            <span className="font-mono text-[10px] font-semibold uppercase tracking-[1.8px] text-[var(--cyan-dark)]">
              Coming Soon
            </span>
          </div>
          <h2 className="reveal reveal-delay-1 mb-[14px] font-display text-[clamp(2rem,4vw,3rem)] font-black leading-[1.1] tracking-[-0.5px] text-[#0a3540]">
            Services We{' '}
            <span className="bg-[linear-gradient(135deg,#00a8bc,#006f88)] bg-clip-text italic text-transparent">
              Offer
            </span>
          </h2>
          <p className="reveal reveal-delay-2 mx-auto max-w-[440px] font-body text-base font-light text-[var(--text-muted)]">
            Everything your home needs - done by trained, verified helpers at your doorstep.
          </p>
        </div>
      </div>

      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute bottom-0 left-0 top-0 z-[2] w-12 bg-[linear-gradient(to_right,#eaf8fb,transparent)] sm:w-20" />
        <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-[2] w-12 bg-[linear-gradient(to_left,#e6f8fc,transparent)] sm:w-20" />

        <div className="flex w-max gap-4 px-4 pb-4 pt-2 animate-slide-track hover:[animation-play-state:paused] sm:gap-6 sm:px-10">
          {doubled.map((svc, i) => (
            <div
              key={`${svc.title}-${i}`}
              className="w-[250px] flex-shrink-0 overflow-hidden rounded-[20px] border border-[rgba(0,184,204,0.16)] bg-white shadow-[0_4px_24px_rgba(0,184,204,0.09)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_14px_40px_rgba(0,184,204,0.2)] sm:w-[280px]"
            >
              <div className="relative h-[170px] w-full overflow-hidden bg-[linear-gradient(135deg,#cff2f8_0%,#b8eaf4_100%)] sm:h-[190px]">
                <img
                  src={svc.image}
                  alt={svc.title}
                  className="h-full w-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none'
                  }}
                />
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center text-[52px]">
                  {svc.emoji}
                </div>
              </div>

              <div className="px-5 pb-6 pt-5 sm:px-[22px] sm:pb-6 sm:pt-5">
                <h3 className="mb-2 font-display text-[18px] font-bold text-[#0a3540]">{svc.title}</h3>
                <p className="font-body text-[13.5px] font-light leading-[1.65] text-[var(--text-muted)]">
                  {svc.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
