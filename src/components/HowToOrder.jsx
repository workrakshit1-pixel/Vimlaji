export default function HowToOrder() {
  const chatbotScreenshot = '/screenshot.jpeg'

  return (
    <section id="how-to-book" className="relative overflow-hidden bg-white py-[90px] lg:py-[110px]">
      <div className="pointer-events-none absolute left-1/2 top-[40%] h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(0,184,204,0.05)_0%,transparent_70%)]" />

      <div className="app-container relative">
        <div className="mb-14 text-center lg:mb-[72px]">
          <div className="reveal mb-[14px] font-mono text-[11px] uppercase tracking-[3px] text-[var(--cyan-dark)]">
            Simple & Fast
          </div>
          <h2 className="reveal reveal-delay-1 mb-[14px] font-display text-[clamp(2rem,4vw,3rem)] font-black leading-[1.1] tracking-[-0.5px] text-[#0a3540]">
            How to{' '}
            <span className="bg-[linear-gradient(135deg,#00a8bc,#006f88)] bg-clip-text italic text-transparent">
              Book
            </span>
          </h2>
          <p className="reveal reveal-delay-2 mx-auto max-w-[400px] font-body text-base font-light text-[var(--text-muted)]">
            Two ways to get a VimlaJi helper at your door - pick what works for you.
          </p>
        </div>

        <div className="grid items-start gap-6 lg:grid-cols-2 lg:gap-8">
          <div className="reveal overflow-hidden rounded-3xl border-[1.5px] border-[rgba(0,184,204,0.28)] bg-[linear-gradient(135deg,rgba(0,184,204,0.07)_0%,rgba(0,146,168,0.03)_100%)] shadow-[0_4px_32px_rgba(0,184,204,0.1)]">
            <div className="flex justify-center bg-[linear-gradient(135deg,#b8ecf5_0%,#cdf4fa_100%)] px-4 pb-0 pt-9 sm:px-9">
              <div className="relative w-[210px] rounded-[38px] border border-[rgba(255,255,255,0.28)] bg-[linear-gradient(180deg,#1c1c20_0%,#0b0b0d_100%)] p-[7px] shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
                <div className="pointer-events-none absolute left-[-2px] top-[70px] h-8 w-[3px] rounded-r bg-[#2d2d32]" />
                <div className="pointer-events-none absolute left-[-2px] top-[120px] h-10 w-[3px] rounded-r bg-[#2d2d32]" />
                <div className="pointer-events-none absolute right-[-2px] top-[108px] h-12 w-[3px] rounded-l bg-[#2d2d32]" />

                <div className="relative h-[430px] overflow-hidden rounded-[31px] bg-[#f0f8fa]">
                  <div className="pointer-events-none absolute left-1/2 top-2.5 z-20 h-[26px] w-[104px] -translate-x-1/2 rounded-[16px] bg-black/90 shadow-[0_2px_6px_rgba(0,0,0,0.4)]" />
                  <img
                    src={chatbotScreenshot}
                    alt="VimlaJi AI Chatbot"
                    className="h-full w-full object-cover object-top"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none'
                      e.currentTarget.nextSibling.style.display = 'flex'
                    }}
                  />
                  <div className="hidden h-full flex-col items-center justify-center gap-2.5 bg-[#e8f8fb] p-5">
                    <div className="text-4xl">📱</div>
                    <div className="text-center font-mono text-[11px] tracking-[1px] text-[var(--cyan-dark)]">
                      SCREENSHOT
                      <br />
                      IMAGE
                      <br />
                      HERE
                    </div>
                    <div className="mt-1 text-center font-body text-[11px] text-[var(--text-dim)]">
                      Add /public/screenshot.jpg
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="px-6 pb-8 pt-7 sm:px-8 sm:pb-8 sm:pt-7">
              <div className="mb-[14px] flex items-center gap-2.5">
                <div className="flex h-[34px] w-[34px] items-center justify-center rounded-[10px] border border-[rgba(0,184,204,0.3)] bg-[rgba(0,184,204,0.15)] text-base">
                  💬
                </div>
                <span className="font-mono text-[11px] uppercase tracking-[2px] text-[var(--cyan-dark)]">
                  Option 1
                </span>
              </div>
              <h3 className="mb-2.5 font-display text-[22px] font-bold leading-[1.2] text-[#0a3540]">
                Book via AI Chatbot
              </h3>
              <p className="mb-6 font-body text-[14.5px] font-light leading-[1.7] text-[var(--text-muted)]">
                Chat with our smart WhatsApp AI assistant 24/7. Just tell it what you need - it
                handles everything from service selection to payment confirmation in minutes.
              </p>
              <a
                href="https://wa.me/917973626242?text=Hi%20VimlaJi%2C%20I%20want%20to%20book%20a%20service"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 rounded-full bg-[linear-gradient(135deg,#00b8cc,#0092a8)] px-[26px] py-3 font-body text-sm font-bold text-white shadow-[0_6px_24px_rgba(0,184,204,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(0,184,204,0.5)]"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12c0 1.77.46 3.44 1.28 4.9L2 22l5.32-1.26A9.95 9.95 0 0012 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm4.64 13.28c-.2.56-1.16 1.08-1.6 1.14-.44.06-.84.22-2.82-.58-2.38-.96-3.9-3.38-4.02-3.54-.12-.16-.98-1.3-.98-2.48s.62-1.76.86-2c.22-.24.48-.3.64-.3h.46c.14 0 .34-.06.52.4l.74 1.96c.08.2.04.44-.08.62l-.4.5c-.12.14-.26.3-.1.58.16.28.7 1.14 1.5 1.84.94.84 1.72 1.1 2 1.22.28.12.44.1.6-.06l.5-.58c.16-.2.4-.26.62-.18l1.96.92c.28.12.46.18.5.28.04.14.04.7-.16 1.26z" />
                </svg>
                Chat with AI - Book Now
              </a>
            </div>
          </div>

          <div className="reveal reveal-delay-2 rounded-3xl border-[1.5px] border-[rgba(0,184,204,0.18)] bg-white px-6 py-8 shadow-[0_4px_24px_rgba(0,184,204,0.08)] sm:px-8 sm:py-9">
            <div className="mb-5 flex items-center gap-2.5">
              <div className="flex h-[34px] w-[34px] items-center justify-center rounded-[10px] border border-[rgba(0,184,204,0.25)] bg-[rgba(0,184,204,0.1)] text-base">
                👥
              </div>
              <span className="font-mono text-[11px] uppercase tracking-[2px] text-[var(--cyan-dark)]">
                Option 2
              </span>
            </div>
            <h3 className="mb-2.5 font-display text-[22px] font-bold text-[#0a3540]">
              Join WhatsApp Group
            </h3>
            <p className="mb-7 font-body text-[14.5px] font-light leading-[1.7] text-[var(--text-muted)]">
              Join our VimlaJi WhatsApp community. Post your requirement, our team responds
              instantly. Get exclusive member deals and early access to new services.
            </p>

            {[
              { n: '1', text: 'Tap the button below to join our group' },
              { n: '2', text: 'Tell us your service need & address' },
              { n: '3', text: 'We confirm & dispatch a helper' },
            ].map(({ n, text }) => (
              <div key={n} className="mb-4 flex items-start gap-3.5">
                <div className="flex h-[26px] w-[26px] flex-shrink-0 items-center justify-center rounded-[7px] border border-[rgba(0,184,204,0.28)] bg-[rgba(0,184,204,0.12)] font-mono text-xs font-semibold text-[var(--cyan-dark)]">
                  {n}
                </div>
                <p className="pt-[3px] font-body text-sm leading-[1.55] text-[var(--text-muted)]">
                  {text}
                </p>
              </div>
            ))}

            <a
              href="https://chat.whatsapp.com/JH0LXCwLBA20LhtYDlwtKX"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center gap-2.5 rounded-full border-[1.5px] border-[rgba(0,184,204,0.4)] bg-transparent px-[26px] py-3 font-body text-sm font-bold text-[var(--cyan-dark)] transition-all duration-300 hover:border-[rgba(0,184,204,0.65)] hover:bg-[rgba(0,184,204,0.1)]"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-[#00b8cc]">
                <path d="M12 2C6.48 2 2 6.48 2 12c0 1.77.46 3.44 1.28 4.9L2 22l5.32-1.26A9.95 9.95 0 0012 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm4.64 13.28c-.2.56-1.16 1.08-1.6 1.14-.44.06-.84.22-2.82-.58-2.38-.96-3.9-3.38-4.02-3.54-.12-.16-.98-1.3-.98-2.48s.62-1.76.86-2c.22-.24.48-.3.64-.3h.46c.14 0 .34-.06.52.4l.74 1.96c.08.2.04.44-.08.62l-.4.5c-.12.14-.26.3-.1.58.16.28.7 1.14 1.5 1.84.94.84 1.72 1.1 2 1.22.28.12.44.1.6-.06l.5-.58c.16-.2.4-.26.62-.18l1.96.92c.28.12.46.18.5.28.04.14.04.7-.16 1.26z" />
              </svg>
              Join the Community
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
