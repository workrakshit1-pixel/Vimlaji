const promises = [
  ['Homes feel lighter', 'Daily chores are handled with care, timing, and a respectful helper experience.'],
  ['Services feel clear', 'Every task has simple expectations, real service visuals, and practical timings.'],
  ['Support feels close', 'VimlaJi stays reachable for customers, helpers, and every home we serve.'],
]

export default function About() {
  return (
    <section className="relative overflow-hidden bg-[#f8feff] py-[90px] lg:py-[124px]">
      <div className="home-scene-bg absolute inset-0 opacity-80" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(248,254,255,0.92),rgba(255,255,255,0.76)_48%,rgba(238,253,255,0.96))]" />

      <div className="app-container relative">
        <div className="grid items-center gap-12 lg:grid-cols-[1.04fr_0.96fr] lg:gap-20">
          <div className="reveal relative mx-auto w-full max-w-[650px]">
            <div className="reality-window relative overflow-hidden rounded-[46px] border border-white/80 bg-white/50 p-3 shadow-[0_34px_98px_rgba(10,53,64,0.13)] backdrop-blur-xl">
              <div className="grid gap-3 sm:grid-cols-2">
                {['/app/services/sweeping_mopping.png', '/app/services/utensils.png', '/app/services/cooking_services.png', '/app/services/general_homehelp.png'].map((src, index) => (
                  <div key={src} className={`reality-tile ${index === 1 ? 'translate-y-7' : ''} ${index === 2 ? '-translate-y-5' : ''}`}>
                    <img src={src} alt="VimlaJi service moment" />
                  </div>
                ))}
              </div>
              <div className="absolute bottom-6 left-6 right-6 rounded-[30px] border border-white/80 bg-white/88 p-5 shadow-[0_20px_56px_rgba(10,53,64,0.20)] backdrop-blur-2xl">
                <img src="/app/brand/vimlaji_text_logo.png" alt="VimlaJi" className="mb-3 h-10 w-[160px] object-contain object-left" />
                <p className="font-body text-sm font-bold leading-[1.7] text-[#245d69]">Daily home support with trust, clarity, and a little more peace.</p>
              </div>
            </div>
          </div>

          <div>
            <div className="reveal mb-[18px] font-mono text-[11px] uppercase tracking-[3px] text-[var(--cyan-deep)]">About VimlaJi</div>
            <h2 className="reveal reveal-delay-1 mb-6 font-display text-[clamp(2.3rem,4.4vw,4.35rem)] font-black leading-[0.98] tracking-[-1px] text-[#082f38]">
              Househelp that feels clean, calm, and dependable.
            </h2>
            <p className="reveal reveal-delay-2 mb-8 max-w-[620px] font-body text-[17px] font-light leading-[1.9] text-[#477783]">
              VimlaJi brings hourly househelp, laundry, utensils, cleaning, and homestyle cooking support into one premium everyday service for modern homes.
            </p>

            <div className="grid gap-4">
              {promises.map(([title, desc], index) => (
                <div key={title} className={`reveal reveal-delay-${index + 3} living-point group rounded-[30px] border border-[rgba(69,238,255,0.28)] bg-white/86 p-5 shadow-[0_18px_52px_rgba(10,53,64,0.07)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-[rgba(69,238,255,0.62)] hover:shadow-[0_26px_70px_rgba(69,238,255,0.16)]`}>
                  <div className="flex gap-4">
                    <div className="grid h-12 w-12 flex-shrink-0 place-items-center rounded-2xl bg-[linear-gradient(135deg,#45eeff,#08aeca)] font-display text-lg font-black text-[#07313b] shadow-[0_12px_30px_rgba(69,238,255,0.28)]">{index + 1}</div>
                    <div>
                      <h3 className="font-display text-xl font-black text-[#082f38]">{title}</h3>
                      <p className="mt-1 font-body text-sm font-light leading-[1.7] text-[#477783]">{desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
