const faqs = [
  {
    q: 'What is VimlaJi?',
    a: 'VimlaJi is a doorstep house-help service that connects you with trained, verified helpers in minutes. Whether you need sweeping, mopping, laundry, kitchen prep or bathroom cleaning - we send a professional to your home fast.',
  },
  {
    q: 'How do I book a service?',
    a: 'Simply click the "Book via WhatsApp" button anywhere on this page. Our AI chatbot will guide you through selecting a service, entering your address, and completing payment - all within WhatsApp in under 3 minutes.',
  },
  {
    q: 'How quickly does the helper arrive?',
    a: 'Our helpers typically arrive within 15-30 minutes for instant bookings. You can also schedule a service for a specific date and time that works for you.',
  },
  {
    q: 'Are your helpers verified and trained?',
    a: 'Yes. Every VimlaJi helper goes through a background verification process and is trained in the specific service they provide. Your safety and comfort is our first priority.',
  },
  {
    q: 'What services does VimlaJi offer?',
    a: 'We offer sweeping, mopping, room cleaning, laundry, kitchen prep, bathroom cleaning, and dish washing. More services are being added regularly - follow us on Instagram or join our WhatsApp group to stay updated.',
  },
  {
    q: 'How do I pay for the service?',
    a: 'After booking, you receive a secure payment link directly on WhatsApp. You can pay via UPI, debit/credit card, or net banking. Payment is collected before the helper is dispatched.',
  },
  {
    q: 'What if I am not satisfied with the service?',
    a: 'Your satisfaction is our guarantee. If you are not happy with the service quality, contact us immediately on WhatsApp or email and we will make it right - either with a re-service or a resolution.',
  },
]

import { useState } from 'react'

export default function FAQs() {
  const [open, setOpen] = useState(null)

  return (
    <section
      id="faqs"
      className="relative overflow-hidden bg-[linear-gradient(180deg,#edf9fc_0%,#e4f7fb_100%)] py-[90px] lg:py-[110px]"
    >
      <div className="pointer-events-none absolute right-[-120px] top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full border border-[rgba(0,184,204,0.1)]" />
      <div className="pointer-events-none absolute right-[-80px] top-1/2 h-[360px] w-[360px] -translate-y-1/2 rounded-full border border-[rgba(0,184,204,0.08)]" />

      <div className="app-container relative">
        <div className="mb-12 text-center lg:mb-16">
          <div className="reveal mb-[14px] font-mono text-[11px] uppercase tracking-[3px] text-[var(--cyan-dark)]">
            Got Questions?
          </div>
          <h2 className="reveal reveal-delay-1 mb-[14px] font-display text-[clamp(2rem,4vw,3rem)] font-black leading-[1.1] tracking-[-0.5px] text-[#0a3540]">
            Frequently Asked{' '}
            <span className="bg-[linear-gradient(135deg,#00a8bc,#006f88)] bg-clip-text italic text-transparent">
              Questions
            </span>
          </h2>
          <p className="reveal reveal-delay-2 mx-auto max-w-[400px] font-body text-base font-light text-[var(--text-muted)]">
            Everything you need to know about VimlaJi.
          </p>
        </div>

        <div className="mx-auto flex max-w-[760px] flex-col gap-3">
          {faqs.map((faq, i) => {
            const isOpen = open === i
            return (
              <div
                key={faq.q}
                className={`reveal reveal-delay-${Math.min(
                  i + 1,
                  5,
                )} overflow-hidden rounded-2xl border-[1.5px] bg-white transition-colors ${
                  isOpen
                    ? 'border-[rgba(0,184,204,0.4)] shadow-[0_6px_28px_rgba(0,184,204,0.12)]'
                    : 'border-[rgba(0,184,204,0.15)] shadow-[0_2px_12px_rgba(0,184,204,0.05)]'
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 bg-transparent px-4 py-5 text-left sm:px-6"
                >
                  <span className="font-body text-[15px] font-semibold leading-[1.4] text-[#0a3540] sm:text-base">
                    {faq.q}
                  </span>
                  <div
                    className={`flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg border transition-all duration-300 ${
                      isOpen
                        ? 'rotate-45 border-transparent bg-[linear-gradient(135deg,#00b8cc,#0092a8)]'
                        : 'rotate-0 border-[rgba(0,184,204,0.25)] bg-[rgba(0,184,204,0.1)]'
                    }`}
                  >
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path
                        d="M6 1v10M1 6h10"
                        stroke={isOpen ? '#fff' : 'var(--cyan-dark)'}
                        strokeWidth="1.8"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="px-4 pb-[22px] font-body text-[14.5px] font-light leading-[1.75] text-[var(--text-muted)] sm:px-6">
                    {faq.a}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        <div className="reveal mt-12 text-center lg:mt-14">
          <p className="mb-5 font-body text-base text-[var(--text-muted)]">Still have questions?</p>
          <a
            href="https://wa.me/917973626242"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 rounded-full bg-[linear-gradient(135deg,#00b8cc,#0092a8)] px-[30px] py-[13px] font-body text-sm font-bold text-white shadow-[0_6px_24px_rgba(0,184,204,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(0,184,204,0.5)]"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12c0 1.77.46 3.44 1.28 4.9L2 22l5.32-1.26A9.95 9.95 0 0012 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm4.64 13.28c-.2.56-1.16 1.08-1.6 1.14-.44.06-.84.22-2.82-.58-2.38-.96-3.9-3.38-4.02-3.54-.12-.16-.98-1.3-.98-2.48s.62-1.76.86-2c.22-.24.48-.3.64-.3h.46c.14 0 .34-.06.52.4l.74 1.96c.08.2.04.44-.08.62l-.4.5c-.12.14-.26.3-.1.58.16.28.7 1.14 1.5 1.84.94.84 1.72 1.1 2 1.22.28.12.44.1.6-.06l.5-.58c.16-.2.4-.26.62-.18l1.96.92c.28.12.46.18.5.28.04.14.04.7-.16 1.26z" />
            </svg>
            Ask us on WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
