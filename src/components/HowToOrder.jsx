import StoreButtons from './StoreButtons.jsx'

const steps = [
  ['01', 'Download VimlaJi', 'Install the app and continue with phone login.'],
  ['02', 'Choose your service', 'Pick hourly househelp or cooking support from the app.'],
  ['03', 'Select slot & address', 'Choose date, time, location, and review your receipt.'],
  ['04', 'Pay and relax', 'Complete secure payment and receive booking updates.'],
]

export default function HowToOrder() {
  return (
    <section id="download" className="relative isolate overflow-hidden bg-[#f8feff] py-[90px] lg:py-[118px]">
      <div className="download-motion-bg absolute inset-0 -z-10" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(255,255,255,0.88),rgba(239,253,255,0.82)_52%,rgba(255,255,255,0.94))]" />
      <div className="app-container relative">
        <div className="mb-14 text-center lg:mb-[72px]">
          <div className="reveal mb-[14px] font-mono text-[11px] uppercase tracking-[3px] text-[var(--cyan-deep)]">Download VimlaJi</div>
          <h2 className="reveal reveal-delay-1 mx-auto mb-[14px] max-w-[860px] font-display text-[clamp(2.35rem,5vw,4.45rem)] font-black leading-[0.98] tracking-[-1px] text-[#082f38]">Daily chores, handled with trust.</h2>
          <p className="reveal reveal-delay-2 mx-auto max-w-[640px] font-body text-base font-light leading-[1.8] text-[#477783]">Choose hourly househelp, laundry, utensils, cleaning, and cooking support for a home that feels lighter every day.</p>
          <StoreButtons className="reveal reveal-delay-3 mt-7 justify-center" />
        </div>

        <div className="grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
          <div className="reveal relative min-h-[520px] overflow-hidden rounded-[46px] border border-white/80 bg-white/56 p-4 shadow-[0_34px_92px_rgba(10,53,64,0.12)] backdrop-blur-xl">
            <div className="phone-world absolute inset-4 rounded-[34px] border border-[rgba(69,238,255,0.30)] bg-[#eefdff]">
              <img src="/app/banners/hero_daily_chores.png" alt="VimlaJi app booking" className="absolute inset-0 h-full w-full rounded-[34px] object-cover object-center opacity-70" />
              <div className="absolute inset-0 rounded-[34px] bg-[linear-gradient(180deg,rgba(255,255,255,0.58),rgba(239,253,255,0.26),rgba(6,31,39,0.38))]" />
              <div className="app-floating-card app-card-a">Slot selected</div>
              <div className="app-floating-card app-card-b">Payment secure</div>
              <div className="app-floating-card app-card-c">Helper update</div>
            </div>
          </div>

          <div className="grid gap-4">
            {steps.map(([n, title, desc], index) => (
              <div key={title} className={`reveal reveal-delay-${Math.min(index + 1, 5)} group rounded-[30px] border border-[rgba(69,238,255,0.30)] bg-white/88 p-5 shadow-[0_18px_52px_rgba(10,53,64,0.08)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:shadow-[0_26px_72px_rgba(69,238,255,0.18)] sm:p-6`}>
                <div className="flex gap-4">
                  <div className="grid h-12 w-12 flex-shrink-0 place-items-center rounded-2xl bg-[linear-gradient(135deg,#45eeff,#08aeca)] font-display text-lg font-black text-[#07313b] shadow-[0_10px_26px_rgba(69,238,255,0.34)]">{n}</div>
                  <div>
                    <h3 className="font-display text-[22px] font-black text-[#082f38]">{title}</h3>
                    <p className="mt-1.5 font-body text-sm font-light leading-[1.7] text-[#477783]">{desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
