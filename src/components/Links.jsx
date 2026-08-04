import { useState } from 'react'
import StoreButtons from './StoreButtons.jsx'

const faqs = [
  {
    q: 'How do I book VimlaJi now?',
    a: 'Download the VimlaJi app, select your hourly slot, add your address, and complete payment securely. The app is now the main booking experience.',
  },
  {
    q: 'Can I still contact VimlaJi on WhatsApp?',
    a: 'Yes. WhatsApp remains available for customer support, but service booking is designed to happen through the mobile app for cleaner tracking and records.',
  },
  {
    q: 'What services can I choose during a slot?',
    a: 'You can use your hourly slot for sweeping and mopping, dusting, utensils, washing clothes, ironing and folding, kitchen help, and general home help.',
  },
  {
    q: 'Do you provide cleaning equipment?',
    a: 'No. Equipment and materials are provided by the customer. VimlaJi helpers use the tools and supplies available at your home.',
  },
  {
    q: 'Where is VimlaJi available?',
    a: 'VimlaJi is live in Pathankot. New cities and new service categories will be added carefully as operations expand.',
  },
  {
    q: 'Is there live GPS tracking?',
    a: 'The customer app shows clear booking status updates and helper details after confirmation. It is designed to stay simple and privacy-friendly.',
  },
  {
    q: 'How do payments work?',
    a: 'Payments are made securely. Booking updates are shared clearly so customers know the current status of their service.',
  },
  {
    q: 'What if I need help after booking?',
    a: 'Use the support section in the app or contact VimlaJi through WhatsApp, email, or Instagram. The team will help with booking, support, and refund-related queries.',
  },
]

export default function FAQs() {
  const [open, setOpen] = useState(0)

  return (
    <section id="faqs" className="relative overflow-hidden bg-[linear-gradient(180deg,#eefdff_0%,#ffffff_100%)] py-[90px] lg:py-[110px]">
      <div className="pointer-events-none absolute right-[-120px] top-1/2 h-[520px] w-[520px] -translate-y-1/2 rounded-full border border-[rgba(69,238,255,0.16)]" />
      <div className="pointer-events-none absolute right-[-80px] top-1/2 h-[370px] w-[370px] -translate-y-1/2 rounded-full border border-[rgba(69,238,255,0.12)]" />

      <div className="app-container relative">
        <div className="mb-12 text-center lg:mb-16">
          <div className="reveal mb-[14px] font-mono text-[11px] uppercase tracking-[3px] text-[var(--cyan-deep)]">
            Support
          </div>
          <h2 className="reveal reveal-delay-1 mb-[14px] font-display text-[clamp(2rem,4vw,3rem)] font-black leading-[1.1] tracking-[-0.5px] text-[#0a3540]">
            Questions before downloading?
          </h2>
          <p className="reveal reveal-delay-2 mx-auto max-w-[430px] font-body text-base font-light text-[var(--text-muted)]">
            Simple answers about VimlaJi services, availability, payments, and customer support.
          </p>
        </div>

        <div className="mx-auto flex max-w-[820px] flex-col gap-3">
          {faqs.map((faq, i) => {
            const isOpen = open === i
            return (
              <div key={faq.q} className={`reveal reveal-delay-${Math.min(i + 1, 5)} overflow-hidden rounded-[24px] border bg-white transition-all duration-300 ${isOpen ? 'border-[rgba(69,238,255,0.5)] shadow-[0_18px_46px_rgba(69,238,255,0.16)]' : 'border-[rgba(69,238,255,0.22)] shadow-[0_8px_24px_rgba(10,53,64,0.04)]'}`}>
                <button onClick={() => setOpen(isOpen ? null : i)} className="flex w-full items-center justify-between gap-4 bg-transparent px-4 py-5 text-left sm:px-6">
                  <span className="font-body text-[15px] font-black leading-[1.4] text-[#0a3540] sm:text-base">{faq.q}</span>
                  <div className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-xl border transition-all duration-300 ${isOpen ? 'rotate-45 border-transparent bg-[linear-gradient(135deg,#45eeff,#08aeca)]' : 'rotate-0 border-[rgba(69,238,255,0.32)] bg-[rgba(69,238,255,0.1)]'}`}>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M6 1v10M1 6h10" stroke={isOpen ? '#07313b' : 'var(--cyan-deep)'} strokeWidth="1.8" strokeLinecap="round" />
                    </svg>
                  </div>
                </button>

                <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                  <p className="px-4 pb-[22px] font-body text-[14.5px] font-light leading-[1.75] text-[var(--text-muted)] sm:px-6">{faq.a}</p>
                </div>
              </div>
            )
          })}
        </div>

        <div className="reveal mt-12 rounded-[34px] border border-[rgba(69,238,255,0.28)] bg-white p-7 text-center shadow-[0_22px_60px_rgba(10,53,64,0.08)] lg:mt-14">
          <p className="mb-5 font-display text-2xl font-black text-[#0a3540]">Ready to try VimlaJi?</p>
          <StoreButtons className="justify-center" />
        </div>
      </div>
    </section>
  )
}
