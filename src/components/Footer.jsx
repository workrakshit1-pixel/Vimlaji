export default function Footer() {
  const year = new Date().getFullYear()

  const WaIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12c0 1.77.46 3.44 1.28 4.9L2 22l5.32-1.26A9.95 9.95 0 0012 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm4.64 13.28c-.2.56-1.16 1.08-1.6 1.14-.44.06-.84.22-2.82-.58-2.38-.96-3.9-3.38-4.02-3.54-.12-.16-.98-1.3-.98-2.48s.62-1.76.86-2c.22-.24.48-.3.64-.3h.46c.14 0 .34-.06.52.4l.74 1.96c.08.2.04.44-.08.62l-.4.5c-.12.14-.26.3-.1.58.16.28.7 1.14 1.5 1.84.94.84 1.72 1.1 2 1.22.28.12.44.1.6-.06l.5-.58c.16-.2.4-.26.62-.18l1.96.92c.28.12.46.18.5.28.04.14.04.7-.16 1.26z" />
    </svg>
  )
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

  const socialBtn =
    'flex h-10 w-10 items-center justify-center rounded-[10px] border border-[rgba(0,184,204,0.2)] bg-[rgba(0,184,204,0.08)] text-[#00b8cc] transition-all duration-300'

  return (
    <footer className="relative overflow-hidden border-t-[1.5px] border-[rgba(0,184,204,0.16)] bg-white pb-0 pt-14 lg:pt-16">
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-40 w-[600px] -translate-x-1/2 bg-[radial-gradient(ellipse,rgba(0,184,204,0.06)_0%,transparent_70%)]" />

      <div className="app-container relative">
        <div className="mb-12 grid gap-10 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr] lg:gap-14 lg:mb-14">
          <div>
            <div className="mb-[18px] flex items-center gap-2.5">
              <img
                src="/logo.jpg"
                alt="VimlaJi"
                width="36"
                height="36"
                className="h-9 w-9 rounded-lg object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = 'none'
                  e.currentTarget.nextSibling.style.display = 'flex'
                }}
              />
              <div className="hidden h-9 w-9 items-center justify-center rounded-[9px] border border-[rgba(0,184,204,0.3)] bg-[rgba(0,184,204,0.1)]">
                <svg width="20" height="20" viewBox="0 0 38 38" fill="none">
                  <path
                    d="M19 5L33 16V33H25V24H13V33H5V16L19 5Z"
                    fill="none"
                    stroke="#00b8cc"
                    strokeWidth="2.2"
                    strokeLinejoin="round"
                  />
                  <circle cx="19" cy="21" r="3" fill="#00b8cc" />
                </svg>
              </div>
              <span className="font-display text-[22px] font-black tracking-[-0.3px] text-[#0a3540]">
                VimlaJi
              </span>
            </div>

            <p className="mb-6 max-w-[240px] font-body text-sm font-light leading-[1.8] text-[var(--text-muted)]">
              Trained, verified house-help professionals at your doorstep - in minutes, not days.
            </p>

            <div className="flex gap-2.5">
              <a
                href="https://wa.me/917973626242"
                target="_blank"
                rel="noopener noreferrer"
                title="WhatsApp"
                className={`${socialBtn} hover:border-[#25D366] hover:bg-[#25D366] hover:text-white`}
              >
                <WaIcon />
              </a>
              <a
                href="https://instagram.com/vimlaji.in"
                target="_blank"
                rel="noopener noreferrer"
                title="Instagram"
                className={`${socialBtn} hover:border-transparent hover:bg-[linear-gradient(135deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)] hover:text-white`}
              >
                <IgIcon />
              </a>
              <a
                href="mailto:vimlajii18@gmail.com"
                title="Email"
                className={`${socialBtn} hover:border-[#EA4335] hover:bg-[#EA4335] hover:text-white`}
              >
                <MailIcon />
              </a>
            </div>
          </div>

          <div>
            <div className="mb-5 font-mono text-[10px] font-semibold uppercase tracking-[2.5px] text-[var(--cyan-dark)]">
              Quick Links
            </div>
            {[
              { label: 'About VimlaJi', href: '#about' },
              { label: 'Our Services', href: '#services' },
              { label: 'How to Book', href: '#how-to-book' },
              { label: "FAQ's", href: '#faqs' },
              { label: 'Book Now', href: 'https://wa.me/917973626242' },
              { label: 'Join Community', href: 'https://chat.whatsapp.com/JH0LXCwLBA20LhtYDlwtKX' },
              { label: 'Instagram', href: 'https://instagram.com/vimlaji.in' },
            ].map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="mb-[11px] flex items-center gap-2 font-body text-sm text-[var(--text-muted)] transition-colors hover:text-[var(--cyan-dark)]"
              >
                <div className="h-1 w-1 rounded-full bg-[var(--cyan)] opacity-50" />
                {label}
              </a>
            ))}
          </div>

          <div>
            <div className="mb-5 font-mono text-[10px] font-semibold uppercase tracking-[2.5px] text-[var(--cyan-dark)]">
              Contact
            </div>

            {[
              {
                Icon: WaIcon,
                label: 'WhatsApp',
                val: '+91 7973626242',
                href: 'https://wa.me/917973626242',
                hoverClass: 'hover:text-[#25D366]',
              },
              {
                Icon: MailIcon,
                label: 'Email',
                val: 'vimlajii18@gmail.com',
                href: 'mailto:vimlajii18@gmail.com',
                hoverClass: 'hover:text-[#EA4335]',
              },
              {
                Icon: IgIcon,
                label: 'Instagram',
                val: '@vimlaji.in',
                href: 'https://instagram.com/vimlaji.in',
                hoverClass: 'hover:text-[#C13584]',
              },
            ].map(({ Icon, label, val, href, hoverClass }) => (
              <div key={label} className="mb-[18px]">
                <div className="mb-1 font-mono text-[10px] uppercase tracking-[1.5px] text-[var(--text-dim)]">
                  {label}
                </div>
                <a
                  href={href}
                  target={href.startsWith('mailto') ? '_self' : '_blank'}
                  rel="noopener noreferrer"
                  className={`group flex items-center gap-2 font-body text-sm text-[var(--text-muted)] transition-colors ${hoverClass}`}
                >
                  <span className="opacity-70 text-[var(--cyan)]">
                    <Icon />
                  </span>
                  {val}
                </a>
              </div>
            ))}

            <div className="mt-2">
              <div className="mb-1 font-mono text-[10px] uppercase tracking-[1.5px] text-[var(--text-dim)]">
                Website
              </div>
              <div className="font-body text-sm text-[var(--text-muted)]">vimlaji.com</div>
            </div>
          </div>
        </div>

        <div className="h-px bg-[linear-gradient(90deg,transparent,rgba(0,184,204,0.28),transparent)]" />

        <div className="flex flex-wrap items-center justify-between gap-3.5 py-5 pb-6">
          <div className="font-mono text-[11px] text-[var(--text-dim)]">
            © {year} VimlaJi. All rights reserved.
          </div>
          <div className="flex items-center gap-1.5 font-mono text-[11px] text-[var(--text-dim)]">
            Made with <span className="mx-0.5 text-[#e25252]">♥</span> for clean homes
          </div>
          <div className="flex gap-[22px]">
            {['Privacy Policy', 'Terms of Service'].map((item) => (
              <a
                key={item}
                href="#"
                className="font-mono text-[11px] text-[var(--text-dim)] transition-colors hover:text-[var(--cyan-dark)]"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
