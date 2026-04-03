// FAQ Section — replaces old Contact/Links section

const faqs = [
  {
    q: 'What is VimlaJi?',
    a: 'VimlaJi is a doorstep house-help service that connects you with trained, verified helpers in minutes. Whether you need sweeping, mopping, laundry, kitchen prep or bathroom cleaning — we send a professional to your home fast.',
  },
  {
    q: 'How do I book a service?',
    a: 'Simply click the "Book via WhatsApp" button anywhere on this page. Our AI chatbot will guide you through selecting a service, entering your address, and completing payment — all within WhatsApp in under 3 minutes.',
  },
  {
    q: 'How quickly does the helper arrive?',
    a: 'Our helpers typically arrive within 15–30 minutes for instant bookings. You can also schedule a service for a specific date and time that works for you.',
  },
  {
    q: 'Are your helpers verified and trained?',
    a: 'Yes. Every VimlaJi helper goes through a background verification process and is trained in the specific service they provide. Your safety and comfort is our first priority.',
  },
  {
    q: 'What services does VimlaJi offer?',
    a: 'We offer sweeping, mopping, room cleaning, laundry, kitchen prep, bathroom cleaning, and dish washing. More services are being added regularly — follow us on Instagram or join our WhatsApp group to stay updated.',
  },
  {
    q: 'How do I pay for the service?',
    a: 'After booking, you receive a secure payment link directly on WhatsApp. You can pay via UPI, debit/credit card, or net banking. Payment is collected before the helper is dispatched.',
  },
  {
    q: 'What if I am not satisfied with the service?',
    a: 'Your satisfaction is our guarantee. If you are not happy with the service quality, contact us immediately on WhatsApp or email and we will make it right — either with a re-service or a resolution.',
  },
]

import { useState } from 'react'

export default function FAQs() {
  const [open, setOpen] = useState(null)

  return (
    <section id="faqs" style={{
      padding: '110px 0 120px',
      background: 'linear-gradient(180deg, #edf9fc 0%, #e4f7fb 100%)',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* BG rings */}
      <div style={{ position: 'absolute', top: '50%', right: -120, transform: 'translateY(-50%)', width: 500, height: 500, border: '1px solid rgba(0,184,204,0.1)', borderRadius: '50%', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', top: '50%', right: -80, transform: 'translateY(-50%)', width: 360, height: 360, border: '1px solid rgba(0,184,204,0.08)', borderRadius: '50%', pointerEvents: 'none' }} />

      <div className="container" style={{ position: 'relative' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <div className="reveal" style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '3px', color: 'var(--cyan-dark)', textTransform: 'uppercase', marginBottom: 14 }}>Got Questions?</div>
          <h2 className="reveal reveal-delay-1" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, color: '#0a3540', letterSpacing: '-0.5px', lineHeight: 1.1, marginBottom: 14 }}>
            Frequently Asked{' '}
            <span style={{ fontStyle: 'italic', background: 'linear-gradient(135deg, #00a8bc, #006f88)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Questions</span>
          </h2>
          <p className="reveal reveal-delay-2" style={{ fontFamily: 'var(--font-body)', fontWeight: 300, fontSize: 16, color: 'var(--text-muted)', maxWidth: 400, margin: '0 auto' }}>
            Everything you need to know about VimlaJi.
          </p>
        </div>

        {/* FAQ accordion */}
        <div style={{ maxWidth: 760, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 12 }}>
          {faqs.map((faq, i) => {
            const isOpen = open === i
            return (
              <div key={i}
                className={`reveal reveal-delay-${Math.min(i + 1, 5)}`}
                style={{ background: '#ffffff', border: `1.5px solid ${isOpen ? 'rgba(0,184,204,0.4)' : 'rgba(0,184,204,0.15)'}`, borderRadius: 16, overflow: 'hidden', transition: 'border-color 0.3s', boxShadow: isOpen ? '0 6px 28px rgba(0,184,204,0.12)' : '0 2px 12px rgba(0,184,204,0.05)' }}
              >
                {/* Question row */}
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, padding: '20px 24px', background: 'transparent', border: 'none', cursor: 'pointer', textAlign: 'left' }}
                >
                  <span style={{ fontFamily: 'var(--font-body)', fontSize: 16, fontWeight: 600, color: '#0a3540', lineHeight: 1.4 }}>{faq.q}</span>
                  <div style={{ width: 28, height: 28, flexShrink: 0, background: isOpen ? 'linear-gradient(135deg, #00b8cc, #0092a8)' : 'rgba(0,184,204,0.1)', border: `1px solid ${isOpen ? 'transparent' : 'rgba(0,184,204,0.25)'}`, borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s ease', transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)' }}>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M6 1v10M1 6h10" stroke={isOpen ? '#fff' : 'var(--cyan-dark)'} strokeWidth="1.8" strokeLinecap="round"/>
                    </svg>
                  </div>
                </button>

                {/* Answer */}
                <div style={{ maxHeight: isOpen ? 300 : 0, overflow: 'hidden', transition: 'max-height 0.4s ease' }}>
                  <p style={{ fontFamily: 'var(--font-body)', fontWeight: 300, fontSize: 14.5, color: 'var(--text-muted)', lineHeight: 1.75, padding: '0 24px 22px' }}>
                    {faq.a}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Still have questions CTA */}
        <div className="reveal" style={{ textAlign: 'center', marginTop: 56 }}>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, color: 'var(--text-muted)', marginBottom: 20 }}>Still have questions?</p>
          <a href="https://wa.me/917973626242"
            target="_blank" rel="noopener noreferrer"
            style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: 'linear-gradient(135deg, #00b8cc, #0092a8)', color: '#fff', fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 14, padding: '13px 30px', borderRadius: 100, boxShadow: '0 6px 24px rgba(0,184,204,0.35)', transition: 'all 0.3s' }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,184,204,0.5)' }}
            onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '0 6px 24px rgba(0,184,204,0.35)' }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12c0 1.77.46 3.44 1.28 4.9L2 22l5.32-1.26A9.95 9.95 0 0012 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm4.64 13.28c-.2.56-1.16 1.08-1.6 1.14-.44.06-.84.22-2.82-.58-2.38-.96-3.9-3.38-4.02-3.54-.12-.16-.98-1.3-.98-2.48s.62-1.76.86-2c.22-.24.48-.3.64-.3h.46c.14 0 .34-.06.52.4l.74 1.96c.08.2.04.44-.08.62l-.4.5c-.12.14-.26.3-.1.58.16.28.7 1.14 1.5 1.84.94.84 1.72 1.1 2 1.22.28.12.44.1.6-.06l.5-.58c.16-.2.4-.26.62-.18l1.96.92c.28.12.46.18.5.28.04.14.04.7-.16 1.26z"/></svg>
            Ask us on WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
