import StoreButtons from './StoreButtons.jsx'

const backgroundScenes = [
  '/app/services/sweeping_mopping.png',
  '/app/services/utensils.png',
  '/app/services/washing_clothes.png',
  '/app/services/cooking_services.png',
  '/app/services/dusting.png',
  '/app/services/general_homehelp.png',
]

const heroSlides = [
  '/app/banners/hero_daily_chores.png',
  '/app/banners/hero_99_offer.png',
  '/app/banners/hero_cooking_service_banner.png',
]

const liveMoments = [
  ['09:00 AM', 'Sweeping & mopping', 'Slot booked'],
  ['11:30 AM', 'Utensils support', 'Helper confirmed'],
  ['02:00 PM', 'Cooking service', 'Now launched'],
]

export default function Hero() {
  return (
    <section id="about" className="relative isolate min-h-screen overflow-hidden bg-[#eefdff] pt-[104px] text-[#082f38] sm:pt-[124px]">
      <div className="living-home-backdrop absolute inset-0 -z-20">
        <div className="living-track living-track-one">
          {[...backgroundScenes, ...backgroundScenes].map((src, index) => (
            <img key={`one-${src}-${index}`} src={src} alt="" />
          ))}
        </div>
        <div className="living-track living-track-two">
          {[...backgroundScenes.slice().reverse(), ...backgroundScenes.slice().reverse()].map((src, index) => (
            <img key={`two-${src}-${index}`} src={src} alt="" />
          ))}
        </div>
      </div>
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_18%,rgba(69,238,255,0.40),transparent_28%),radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.92),transparent_25%),linear-gradient(115deg,rgba(238,253,255,0.98)_0%,rgba(255,255,255,0.88)_42%,rgba(69,238,255,0.34)_100%)]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(255,255,255,0.94),rgba(238,253,255,0.78)_48%,rgba(69,238,255,0.28)_100%)]" />
      <div className="aurora-field absolute inset-0 -z-10 opacity-45 mix-blend-multiply" />
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.20] [background-image:linear-gradient(rgba(8,174,202,0.16)_1px,transparent_1px),linear-gradient(90deg,rgba(8,174,202,0.12)_1px,transparent_1px)] [background-size:64px_64px]" />

      <div className="app-container relative z-[2] pb-20 lg:pb-24">
        <div className="grid min-h-[calc(100vh-150px)] items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div className="max-w-[660px]">
            <div className="animate-[fadeInUp_0.8s_ease_0.05s_both] mb-5 inline-flex items-center gap-2 rounded-full border border-[rgba(69,238,255,0.38)] bg-white/74 px-4 py-2 font-mono text-[11px] font-semibold uppercase tracking-[2.7px] text-[var(--cyan-deep)] shadow-[0_18px_44px_rgba(69,238,255,0.18)] backdrop-blur-2xl">
              <span className="relative h-2 w-2 rounded-full bg-[#45eeff] shadow-[0_0_18px_rgba(69,238,255,0.95)]">
                <span className="absolute inset-0 animate-ping rounded-full bg-[#45eeff]" />
              </span>
              VimlaJi is moving into the app era
            </div>

            <h1 className="animate-[fadeInUp_0.9s_ease_0.14s_both] font-display text-[clamp(3.45rem,8.4vw,7.85rem)] font-black leading-[0.86] tracking-[-2.8px] text-[#082f38] drop-shadow-[0_18px_54px_rgba(69,238,255,0.18)]">
              Your home,
              <span className="block bg-[linear-gradient(125deg,#082f38_0%,#08aeca_30%,#45eeff_56%,#082f38_100%)] bg-clip-text pb-3 italic text-transparent">
                handled with Ji.
              </span>
            </h1>

            <p className="animate-[fadeInUp_0.9s_ease_0.28s_both] mt-5 max-w-[580px] font-body text-[17px] font-light leading-[1.9] text-[#477783] sm:text-[19px]">
              Book trusted hourly househelp, laundry, utensils, cleaning, and cooking support from a calm, premium app built around real homes and real daily routines.
            </p>

            <StoreButtons className="animate-[fadeInUp_0.9s_ease_0.42s_both] mt-9" />

            <div className="animate-[fadeInUp_0.9s_ease_0.58s_both] mt-9 grid max-w-[620px] gap-3 sm:grid-cols-3">
              {liveMoments.map(([time, title, status]) => (
                <div key={title} className="live-chip">
                  <span>{time}</span>
                  <strong>{title}</strong>
                  <em>{status}</em>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[690px] animate-[fadeInUp_1s_ease_0.32s_both]">
            <div className="absolute -left-8 top-8 z-[4] hidden rounded-[28px] border border-white/80 bg-white/76 p-3 shadow-[0_22px_58px_rgba(69,238,255,0.18)] backdrop-blur-2xl sm:block">
              <img src="/app/brand/vimlaji_text_logo.png" alt="VimlaJi" className="h-10 w-[154px] object-contain" />
            </div>

            <div className="absolute -right-4 bottom-14 z-[4] hidden max-w-[196px] rounded-[26px] border border-white/80 bg-white/78 p-4 text-[#082f38] shadow-[0_24px_64px_rgba(69,238,255,0.18)] backdrop-blur-2xl sm:block">
              <div className="mb-2 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[2px] text-[var(--cyan-deep)]"><span className="h-2 w-2 rounded-full bg-[#45eeff]" />Home care</div>
              <p className="font-body text-xs font-semibold leading-[1.55] text-[#245d69]">Clean rooms, fresh clothes, warm meals, and help that feels close.</p>
            </div>

            <div className="hero-device-shell relative rounded-[48px] border border-white/35 bg-white/18 p-3 shadow-[0_44px_120px_rgba(0,0,0,0.36)] backdrop-blur-2xl sm:p-4">
              <div className="relative overflow-hidden rounded-[36px] border border-white/25 bg-[#eefdff]">
                <div className="flex animate-hero-pan">
                  {heroSlides.map((src) => (
                    <img key={src} src={src} alt="VimlaJi app visual" className="h-[340px] min-w-full object-cover object-center sm:h-[500px] lg:h-[550px]" />
                  ))}
                </div>
                <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.10),transparent_34%,rgba(69,238,255,0.08))]" />
              </div>
            </div>

            <div className="floating-service-orbit pointer-events-none absolute inset-0 z-[5]">
              <div className="orbit-card orbit-card-one"><img src="/app/services/sweeping_mopping.png" alt="" /><span>Sweeping</span></div>
              <div className="orbit-card orbit-card-two"><img src="/app/services/cooking_services.png" alt="" /><span>Cooking</span></div>
              <div className="orbit-card orbit-card-three"><img src="/app/services/washing_clothes.png" alt="" /><span>Laundry</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
