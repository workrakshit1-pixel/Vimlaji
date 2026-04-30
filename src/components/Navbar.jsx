import { useEffect, useRef, useState } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const mobileMenuRef = useRef(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setMobileOpen(false)
    }
    const onOutsideClick = (event) => {
      if (!mobileMenuRef.current) return
      if (!mobileMenuRef.current.contains(event.target)) setMobileOpen(false)
    }

    document.addEventListener('keydown', onKeyDown)
    document.addEventListener('mousedown', onOutsideClick)
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.removeEventListener('mousedown', onOutsideClick)
    }
  }, [])

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'How to Book', href: '#how-to-book' },
    { label: "FAQ's", href: '#faqs' },
  ]

  return (
    <nav
      className={`fixed left-0 right-0 top-0 z-[500] border-b border-[rgba(0,184,204,0.22)] px-4 transition-all duration-300 sm:px-6 lg:px-7 ${
        scrolled
          ? 'bg-[rgba(255,255,255,0.97)] shadow-[0_3px_32px_rgba(0,184,204,0.14),0_1px_0_rgba(0,184,204,0.08)]'
          : 'bg-[rgba(225,248,252,0.85)] shadow-[0_2px_20px_rgba(0,184,204,0.1)]'
      } backdrop-blur-[18px]`}
    >
      <div className="app-container relative" ref={mobileMenuRef}>
        <div className="flex h-[66px] items-center justify-between sm:h-[70px]">
          <a href="#" className="flex items-center gap-[11px]">
            <img
              src="/logo.jpg"
              alt="VimlaJi Logo"
              width="40"
              height="40"
              className="h-10 w-10 rounded-lg object-contain"
              onError={(e) => {
                e.currentTarget.style.display = 'none'
                e.currentTarget.nextSibling.style.display = 'flex'
              }}
            />
            <div className="hidden h-10 w-10 items-center justify-center rounded-[10px] border-[1.5px] border-[rgba(0,184,204,0.4)] bg-[rgba(0,184,204,0.12)]">
              <svg width="22" height="22" viewBox="0 0 38 38" fill="none">
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
            <span className="font-display text-[22px] font-black leading-none tracking-[-0.5px] text-[#0a3540] sm:text-2xl">
              VimlaJi
            </span>
          </a>

          <div className="hidden items-center gap-[34px] md:flex">
            {navLinks.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="font-body text-[14.5px] font-medium tracking-[0.1px] text-[var(--text-muted)] transition-colors hover:text-[var(--cyan-dark)]"
              >
                {label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href="https://wa.me/917973626242?text=Hi%20VimlaJi%2C%20I%20want%20to%20book%20a%20service"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body rounded-full bg-[linear-gradient(135deg,#00b8cc,#0092a8)] px-4 py-[9px] text-xs font-bold tracking-[0.2px] text-white shadow-[0_4px_18px_rgba(0,184,204,0.35)] transition-all duration-300 hover:-translate-y-[1px] hover:shadow-[0_8px_28px_rgba(0,184,204,0.5)] sm:px-[26px] sm:py-[10px] sm:text-sm"
            >
              Book Now →
            </a>

            <button
              type="button"
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav"
              aria-label="Toggle menu"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[rgba(0,184,204,0.25)] bg-white/70 text-[#0a3540] transition-colors hover:bg-[rgba(0,184,204,0.1)] md:hidden"
            >
              <span className="relative block h-[14px] w-[16px]">
                <span
                  className={`absolute left-0 top-0 h-[2px] w-full rounded bg-current transition-all ${
                    mobileOpen ? 'top-[6px] rotate-45' : ''
                  }`}
                />
                <span
                  className={`absolute left-0 top-[6px] h-[2px] w-full rounded bg-current transition-opacity ${
                    mobileOpen ? 'opacity-0' : 'opacity-100'
                  }`}
                />
                <span
                  className={`absolute left-0 top-3 h-[2px] w-full rounded bg-current transition-all ${
                    mobileOpen ? 'top-[6px] -rotate-45' : ''
                  }`}
                />
              </span>
            </button>
          </div>
        </div>

        <div
          id="mobile-nav"
          className={`overflow-hidden transition-all duration-300 md:hidden ${
            mobileOpen ? 'max-h-[360px] pb-4 opacity-100' : 'max-h-0 pb-0 opacity-0'
          }`}
        >
          <div className="rounded-2xl border border-[rgba(0,184,204,0.2)] bg-[rgba(255,255,255,0.96)] p-3 shadow-[0_12px_32px_rgba(0,184,204,0.14)] backdrop-blur-md">
            {navLinks.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                onClick={() => setMobileOpen(false)}
                className="block rounded-xl px-3 py-2 font-body text-[15px] font-medium text-[var(--text-muted)] transition-colors hover:bg-[rgba(0,184,204,0.08)] hover:text-[var(--cyan-dark)]"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}
