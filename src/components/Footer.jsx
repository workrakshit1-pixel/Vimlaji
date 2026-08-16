import StoreButtons from './StoreButtons.jsx'

export default function Footer() {
  const year = new Date().getFullYear()

  const IgIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none" />
    </svg>
  )
  const MailIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m2 7 10 7 10-7" />
    </svg>
  )
  const PhoneIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.77.62 2.61a2 2 0 0 1-.45 2.11L8.09 9.63a16 16 0 0 0 6.28 6.28l1.19-1.19a2 2 0 0 1 2.11-.45c.84.29 1.71.5 2.61.62A2 2 0 0 1 22 16.92z" />
    </svg>
  )

  const socialBtn = 'flex h-10 w-10 items-center justify-center rounded-[12px] border border-[rgba(69,238,255,0.28)] bg-[rgba(69,238,255,0.08)] text-[var(--cyan-deep)] transition-all duration-300'

  return (
    <footer className="relative overflow-hidden border-t border-[rgba(69,238,255,0.22)] bg-white pb-0 pt-14 lg:pt-16">
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-52 w-[700px] -translate-x-1/2 bg-[radial-gradient(ellipse,rgba(69,238,255,0.1)_0%,transparent_70%)]" />

      <div className="app-container relative">
        <div className="mb-12 grid gap-10 md:grid-cols-2 lg:grid-cols-[1.35fr_1fr_1fr] lg:gap-14 lg:mb-14">
          <div>
            <img src="/app/brand/vimlaji_text_logo.png" alt="VimlaJi" className="mb-5 h-14 w-[210px] object-contain object-left" />
            <p className="mb-6 max-w-[300px] font-body text-sm font-light leading-[1.85] text-[var(--text-muted)]">
              A premium app-based hourly househelp service for families who want reliable home support without the stress.
            </p>
            <StoreButtons compact />
          </div>

          <div>
            <div className="mb-5 font-mono text-[10px] font-semibold uppercase tracking-[2.5px] text-[var(--cyan-deep)]">Quick Links</div>
            {[
              { label: 'Home', href: '/' },
              { label: 'About VimlaJi', href: '/about' },
              { label: 'Services', href: '/services' },
              { label: 'Download App', href: '/download-app' },
              { label: 'Join as Helper', href: '/join-helper' },
              { label: 'Customer Feedback', href: '/feedback' },
              { label: "FAQ's", href: '/faq' },
              { label: 'Contact Us', href: '/contact-us' },
              { label: 'Instagram', href: 'https://www.instagram.com/vimlaji.in/' },
            ].map(({ label, href }) => (
              <a key={label} href={href} className="mb-[11px] flex items-center gap-2 font-body text-sm font-semibold text-[var(--text-muted)] transition-colors hover:text-[var(--cyan-deep)]">
                <div className="h-1.5 w-1.5 rounded-full bg-[#45eeff]" />
                {label}
              </a>
            ))}
          </div>

          <div>
            <div className="mb-5 font-mono text-[10px] font-semibold uppercase tracking-[2.5px] text-[var(--cyan-deep)]">Contact</div>
            {[
              { Icon: PhoneIcon, label: 'Call', val: '+91 7973736177', href: 'tel:+917973736177' },
              { Icon: MailIcon, label: 'Email', val: 'vimlaji.official@gmail.com', href: 'mailto:vimlaji.official@gmail.com' },
              { Icon: IgIcon, label: 'Instagram', val: '@vimlaji.in', href: 'https://www.instagram.com/vimlaji.in/' },
            ].map(({ Icon, label, val, href }) => (
              <div key={label} className="mb-[18px]">
                <div className="mb-1 font-mono text-[10px] uppercase tracking-[1.5px] text-[var(--text-dim)]">{label}</div>
                <a href={href} target={href.startsWith('mailto') ? '_self' : '_blank'} rel="noopener noreferrer" className="group flex items-center gap-2 font-body text-sm font-semibold text-[var(--text-muted)] transition-colors hover:text-[var(--cyan-deep)]">
                  <span className="text-[var(--cyan-deep)]"><Icon /></span>
                  {val}
                </a>
              </div>
            ))}
            <div className="flex gap-2.5 pt-1">
              <a href="tel:+917973736177" title="Call" className={`${socialBtn} hover:border-[var(--cyan-deep)] hover:bg-[var(--cyan-deep)] hover:text-white`}><PhoneIcon /></a>
              <a href="https://www.instagram.com/vimlaji.in/" target="_blank" rel="noopener noreferrer" title="Instagram" className={`${socialBtn} hover:border-transparent hover:bg-[linear-gradient(135deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)] hover:text-white`}><IgIcon /></a>
              <a href="mailto:vimlaji.official@gmail.com" title="Email" className={`${socialBtn} hover:border-[#EA4335] hover:bg-[#EA4335] hover:text-white`}><MailIcon /></a>
            </div>
          </div>
        </div>

        <div className="h-px bg-[linear-gradient(90deg,transparent,rgba(69,238,255,0.34),transparent)]" />

        <div className="flex flex-wrap items-center justify-between gap-3.5 py-5 pb-6">
          <div className="font-mono text-[11px] text-[var(--text-dim)]">© {year} VimlaJi. All rights reserved.</div>
          <div className="font-display text-[18px] font-black text-[#8ca4aa]">
            The only <span className="text-[var(--cyan-deep)]">Ji</span> our Bharat needs
          </div>
          <div className="flex gap-[22px]">
            {[
              { label: 'Privacy Policy', href: '/privacy-policy' },
              { label: 'Terms', href: '/terms-and-conditions' },
              { label: 'Contact', href: '/contact-us' },
            ].map(({ label, href }) => (
              <a key={label} href={href} className="font-mono text-[11px] text-[var(--text-dim)] transition-colors hover:text-[var(--cyan-deep)]">{label}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
