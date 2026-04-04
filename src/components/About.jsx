export default function About() {
  return (
    <section className="relative overflow-hidden bg-white py-[90px] lg:py-[120px]">
      <div className="pointer-events-none absolute right-0 top-0 h-[500px] w-[500px] bg-[radial-gradient(circle_at_top_right,rgba(0,184,204,0.07)_0%,transparent_65%)]" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-[400px] w-[400px] bg-[radial-gradient(circle_at_bottom_left,rgba(0,200,220,0.05)_0%,transparent_65%)]" />

      <div className="app-container relative">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="reveal relative mx-auto w-full max-w-[540px]">
            <div className="relative overflow-hidden rounded-3xl border border-[rgba(0,184,204,0.2)] bg-[linear-gradient(135deg,rgba(0,184,204,0.08)_0%,rgba(0,152,170,0.04)_100%)] p-8 sm:p-10 lg:p-12">
              <div className="absolute right-0 top-0 h-[120px] w-[120px] bg-[radial-gradient(circle_at_top_right,rgba(0,184,204,0.12),transparent_70%)]" />

              <svg width="68" height="68" viewBox="0 0 72 72" fill="none" className="mb-7">
                <rect
                  width="72"
                  height="72"
                  rx="18"
                  fill="rgba(0,184,204,0.1)"
                  stroke="rgba(0,184,204,0.3)"
                  strokeWidth="1.5"
                />
                <path
                  d="M36 14L56 30V56H46V42H26V56H16V30L36 14Z"
                  fill="none"
                  stroke="#00b8cc"
                  strokeWidth="2.5"
                  strokeLinejoin="round"
                />
                <circle cx="36" cy="38" r="5" fill="#00b8cc" opacity="0.9" />
                <path
                  d="M36 26V22M36 54V50M24 38H20M52 38H48"
                  stroke="#00b8cc"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  opacity="0.4"
                />
              </svg>

              <div className="mb-1.5 font-display text-[36px] font-black leading-none text-[#0d3d47]">
                VimlaJi
              </div>
              <div className="mb-7 font-mono text-[10px] uppercase tracking-[3px] text-[var(--cyan)]">
                Househelp Services
              </div>
              <div className="mb-7 h-px bg-[linear-gradient(90deg,var(--cyan),transparent)] opacity-30" />

              {['Trained Professionals', 'Background Verified', 'Insured Services', 'Instant Booking'].map(
                (feature) => (
                  <div key={feature} className="mb-[14px] flex items-center gap-2.5">
                    <div className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full border border-[rgba(0,184,204,0.3)] bg-[rgba(0,184,204,0.12)]">
                      <div className="h-1.5 w-1.5 rounded-full bg-[var(--cyan)]" />
                    </div>
                    <span className="font-body text-sm text-[var(--text-muted)]">{feature}</span>
                  </div>
                ),
              )}
            </div>

            <div className="animate-float absolute -bottom-4 -right-2 rounded-2xl bg-[linear-gradient(135deg,#00b8cc,#0099aa)] px-4 py-3 shadow-[0_8px_32px_rgba(0,184,204,0.35)] sm:-bottom-5 sm:-right-5 sm:px-[22px] sm:py-4">
              <div className="font-display text-2xl font-black leading-none text-white sm:text-[28px]">30</div>
              <div className="mt-1 font-mono text-[9px] uppercase leading-[1.4] tracking-[1.5px] text-[rgba(255,255,255,0.8)]">
                Min Avg.
                <br />
                Arrival
              </div>
            </div>
          </div>

          <div>
            <div className="reveal mb-[18px] font-mono text-[11px] uppercase tracking-[3px] text-[var(--cyan)]">
              About Vimlaji
            </div>

            <h2 className="reveal reveal-delay-1 mb-6 font-display text-[clamp(2rem,3.5vw,3rem)] font-black leading-[1.12] tracking-[-0.5px] text-[#0d3d47]">
              Because your home
              <br />
              deserves more than
              <br />
              <span className="bg-[linear-gradient(135deg,#00b8cc,#0077aa)] bg-clip-text italic text-transparent">
                "theek-thak."
              </span>
            </h2>

            <p className="reveal reveal-delay-2 mb-[18px] font-body text-base font-light leading-[1.8] text-[var(--text-muted)]">
              Vimlaji was built on one simple belief - every household deserves professional,
              reliable, and affordable help. We match you with trained, background-verified
              house-help professionals who arrive at your doorstep within minutes of booking.
            </p>

            <p className="reveal reveal-delay-3 mb-9 font-body text-base font-light leading-[1.8] text-[var(--text-muted)]">
              No more waiting days. No more unreliable help. Just book on WhatsApp, and we handle
              the rest - from sweeping to dish washing, laundry to deep cleaning.
            </p>

            <div className="reveal reveal-delay-4 border-l-2 border-[var(--cyan)] pl-6">
              <p className="font-display text-lg italic leading-[1.6] text-[#2a7080]">
                "Trained help. Honest pricing. At your door in minutes."
              </p>
              <div className="mt-2.5 font-mono text-[11px] uppercase tracking-[2px] text-[var(--text-dim)]">
                - The VimlaJi Promise
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
