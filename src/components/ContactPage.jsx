import StoreButtons from './StoreButtons.jsx'

const contactCards = [
  {
    label: 'Call support',
    value: '+91 7973736177',
    href: 'tel:+917973736177',
    note: 'For booking support, service queries, and urgent help.',
    icon: 'phone',
  },
  {
    label: 'Email',
    value: 'vimlaji.official@gmail.com',
    href: 'mailto:vimlaji.official@gmail.com',
    note: 'For business, support, and documentation queries.',
    icon: 'mail',
  },
  {
    label: 'Instagram',
    value: '@vimlaji.in',
    href: 'https://www.instagram.com/vimlaji.in/',
    note: 'Follow VimlaJi launches, updates, and service stories.',
    icon: 'instagram',
  },
]

function Icon({ name }) {
  if (name === 'mail') {
    return (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </svg>
    )
  }
  if (name === 'instagram') {
    return (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    )
  }
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.77.62 2.61a2 2 0 0 1-.45 2.11L8.09 9.63a16 16 0 0 0 6.28 6.28l1.19-1.19a2 2 0 0 1 2.11-.45c.84.29 1.71.5 2.61.62A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#eefdff_0%,#ffffff_46%,#effdff_100%)] pt-[118px]">
      <section className="relative isolate overflow-hidden pb-16 pt-8 lg:pb-24 lg:pt-14">
        <div className="pointer-events-none absolute -left-24 top-20 h-[430px] w-[430px] rounded-full bg-[radial-gradient(circle,rgba(69,238,255,0.24),transparent_70%)]" />
        <div className="pointer-events-none absolute -right-28 bottom-0 h-[460px] w-[460px] rounded-full bg-[radial-gradient(circle,rgba(8,174,202,0.12),transparent_70%)]" />

        <div className="app-container relative">
          <div className="mb-10 grid items-end gap-8 lg:grid-cols-[1fr_0.7fr]">
            <div>
              <div className="reveal mb-4 font-mono text-[11px] font-semibold uppercase tracking-[3px] text-[var(--cyan-deep)]">Contact VimlaJi</div>
              <h1 className="reveal reveal-delay-1 max-w-[780px] font-display text-[clamp(2.7rem,6vw,5.5rem)] font-black leading-[0.96] tracking-[-1.4px] text-[#082f38]">Support that feels close.</h1>
              <p className="reveal reveal-delay-2 mt-5 max-w-[660px] font-body text-[17px] font-light leading-[1.85] text-[#477783]">Reach VimlaJi for booking support, service questions, helper onboarding, and customer care in Pathankot.</p>
            </div>
            <div className="reveal reveal-delay-3 rounded-[32px] border border-[rgba(69,238,255,0.32)] bg-white/86 p-6 shadow-[0_22px_62px_rgba(10,53,64,0.09)] backdrop-blur-xl">
              <div className="mb-2 font-mono text-[10px] uppercase tracking-[2px] text-[var(--cyan-deep)]">Service city</div>
              <div className="font-display text-3xl font-black text-[#082f38]">Pathankot</div>
              <p className="mt-2 font-body text-sm font-light leading-[1.7] text-[#477783]">VimlaJi is currently focused on serving Pathankot homes with care and consistency.</p>
            </div>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {contactCards.map((card, index) => (
              <a key={card.label} href={card.href} target={card.href.startsWith('http') ? '_blank' : '_self'} rel="noopener noreferrer" className={`reveal reveal-delay-${index + 1} group rounded-[34px] border border-[rgba(69,238,255,0.28)] bg-white p-6 shadow-[0_18px_54px_rgba(10,53,64,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(69,238,255,0.68)] hover:shadow-[0_28px_76px_rgba(69,238,255,0.18)]`}>
                <div className="mb-5 grid h-14 w-14 place-items-center rounded-2xl bg-[linear-gradient(135deg,#45eeff,#08aeca)] text-[#07313b] shadow-[0_12px_30px_rgba(69,238,255,0.28)]"><Icon name={card.icon} /></div>
                <div className="font-mono text-[10px] uppercase tracking-[2px] text-[var(--cyan-deep)]">{card.label}</div>
                <div className="mt-2 break-words font-display text-[24px] font-black leading-tight text-[#082f38]">{card.value}</div>
                <p className="mt-3 font-body text-sm font-light leading-[1.7] text-[#477783]">{card.note}</p>
              </a>
            ))}
          </div>

          <div className="reveal mt-8 rounded-[38px] border border-[rgba(69,238,255,0.30)] bg-[linear-gradient(135deg,#ffffff,#eefdff)] p-7 shadow-[0_24px_70px_rgba(10,53,64,0.08)] sm:p-9">
            <div className="grid items-center gap-6 lg:grid-cols-[1fr_auto]">
              <div>
                <h2 className="font-display text-[clamp(2rem,4vw,3.2rem)] font-black leading-[1.05] text-[#082f38]">Download VimlaJi for bookings.</h2>
                <p className="mt-3 max-w-[620px] font-body text-base font-light leading-[1.8] text-[#477783]">Use the app for service booking, address selection, payments, status updates, and support.</p>
              </div>
              <StoreButtons />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
