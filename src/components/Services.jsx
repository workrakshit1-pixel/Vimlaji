const services = [
  { title: 'Sweeping & Mopping', desc: 'Daily floor care with neat sweeping and mopping support.', image: '/app/services/sweeping_mopping.png', time: '45-60 mins' },
  { title: 'Dusting', desc: 'Visible surfaces, light tidying, and fresh room upkeep.', image: '/app/services/dusting.png', time: '30-45 mins' },
  { title: 'Utensils', desc: 'Dish washing and kitchen sink cleanup for everyday homes.', image: '/app/services/utensils.png', time: '20-35 mins' },
  { title: 'Washing Clothes', desc: 'Hand-wash or machine-load support using customer supplies.', image: '/app/services/washing_clothes.png', time: '45-60 mins' },
  { title: 'Ironing & Folding', desc: 'Neat clothes finishing and simple wardrobe organization.', image: '/app/services/ironing_folding.png', time: '35-50 mins' },
  { title: 'Kitchen Help', desc: 'Counter cleaning, basic preparation, and light kitchen support.', image: '/app/services/kitchen_help.png', time: '25-45 mins' },
  { title: 'Cooking Service', desc: 'Homestyle meal support with simple family plans.', image: '/app/services/cooking_services.png', time: 'New launch', isNew: true },
]

const comingSoon = [
  { title: 'Bathroom Cleaning', image: '/app/services/bathroom_cleaning.png' },
]

export default function Services() {
  return (
    <section id="services" className="relative isolate overflow-hidden bg-[#f2fdff] py-[90px] text-[#082f38] lg:py-[118px]">
      <div className="service-cinema-bg absolute inset-0 -z-20" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_16%_20%,rgba(69,238,255,0.34),transparent_26%),radial-gradient(circle_at_88%_40%,rgba(255,255,255,0.88),transparent_24%),linear-gradient(180deg,rgba(242,253,255,0.95),rgba(255,255,255,0.86)_50%,rgba(230,251,255,0.96))]" />
      <div className="absolute inset-0 -z-10 opacity-[0.20] [background-image:linear-gradient(rgba(8,174,202,0.13)_1px,transparent_1px),linear-gradient(90deg,rgba(8,174,202,0.10)_1px,transparent_1px)] [background-size:52px_52px]" />

      <div className="app-container relative">
        <div className="mb-12 flex flex-col gap-5 lg:mb-16 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="reveal mb-[14px] font-mono text-[11px] uppercase tracking-[3px] text-[var(--cyan-deep)]">VimlaJi Services</div>
            <h2 className="reveal reveal-delay-1 max-w-[760px] font-display text-[clamp(2.35rem,5vw,4.65rem)] font-black leading-[0.98] tracking-[-1px] text-[#082f38]">
              Real chores, real images, real clarity.
            </h2>
          </div>
          <p className="reveal reveal-delay-2 max-w-[440px] font-body text-base font-light leading-[1.85] text-[#477783]">
            From sweeping and utensils to laundry and homestyle cooking, VimlaJi keeps everyday home support simple and trustworthy.
          </p>
        </div>

        <div className="service-gallery-grid">
          {services.map((svc, index) => (
            <article key={svc.title} className={`reveal service-live-card service-card-${index + 1}`}>
              <img src={svc.image} alt={svc.title} />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,31,39,0.02)_0%,rgba(6,31,39,0.18)_42%,rgba(6,31,39,0.78)_100%)]" />
              <div className="absolute left-4 top-4 flex gap-2">
                <span className="rounded-full bg-white/90 px-3 py-1.5 font-body text-[11px] font-black text-[var(--cyan-deep)] shadow-[0_10px_24px_rgba(0,0,0,0.12)]">{svc.time}</span>
                {svc.isNew ? <span className="rounded-full bg-[#45eeff] px-3 py-1.5 font-body text-[11px] font-black text-[#07313b] shadow-[0_10px_24px_rgba(69,238,255,0.22)]">NEW</span> : null}
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="font-display text-[24px] font-black leading-tight text-white drop-shadow-[0_8px_22px_rgba(0,0,0,0.35)]">{svc.title}</h3>
                <p className="mt-2 max-w-[310px] font-body text-sm font-light leading-[1.6] text-[#e9fdff]">{svc.desc}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 rounded-[38px] border border-[rgba(69,238,255,0.28)] bg-white/80 p-5 shadow-[0_28px_80px_rgba(10,53,64,0.10)] backdrop-blur-2xl sm:p-7">
          <div className="mb-5 flex flex-wrap items-end justify-between gap-4">
            <h3 className="reveal font-display text-[clamp(1.9rem,3vw,2.7rem)] font-black text-[#082f38]">Coming Soon</h3>
            <span className="reveal rounded-full border border-[rgba(69,238,255,0.34)] bg-[#eefdff] px-4 py-2 font-body text-xs font-black text-[var(--cyan-deep)]">Next on VimlaJi</span>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:max-w-[760px]">
            {comingSoon.map((svc) => (
              <article key={svc.title} className="reveal relative overflow-hidden rounded-[30px] border border-[rgba(69,238,255,0.26)] bg-white p-4 shadow-[0_18px_54px_rgba(10,53,64,0.08)] backdrop-blur-xl">
                <div className="relative h-[230px] overflow-hidden rounded-[24px]">
                  <img src={svc.image} alt={svc.title} className="h-full w-full object-cover object-center" />
                  <div className="absolute right-3 top-3 rounded-full bg-[linear-gradient(135deg,#0a3540,#08aeca)] px-4 py-2 font-body text-[11px] font-black uppercase tracking-[0.8px] text-white shadow-[0_10px_24px_rgba(10,53,64,0.18)]">Coming soon</div>
                </div>
                <h4 className="mt-4 font-display text-2xl font-black text-[#082f38]">{svc.title}</h4>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
