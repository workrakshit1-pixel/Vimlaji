import { useEffect, useRef, useState } from 'react'
import StoreButtons from './StoreButtons.jsx'

export default function Navbar({ activePage = 'home' }) {
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
    { label: 'About', href: '/about', page: 'about' },
    { label: 'Services', href: '/services', page: 'services' },
    { label: 'Download App', href: '/download-app', page: 'download' },
    { label: 'Join as Helper', href: '/join-helper', page: 'helper' },
    { label: "FAQ's", href: '/faq', page: 'faq' },
    { label: 'Contact', href: '/contact-us', page: 'contact' },
  ]

  return (
    <nav
      className={`fixed left-0 right-0 top-0 z-[500] border-b border-[rgba(255,255,255,0.35)] px-4 transition-all duration-300 sm:px-6 lg:px-7 ${
        scrolled
          ? 'bg-[rgba(69,238,255,0.96)] shadow-[0_14px_44px_rgba(10,53,64,0.11)]'
          : 'bg-[rgba(69,238,255,0.94)] shadow-[0_10px_34px_rgba(69,238,255,0.22)]'
      } backdrop-blur-[20px]`}
    >
      <div className="app-container relative" ref={mobileMenuRef}>
        <div className="flex h-[68px] items-center justify-between sm:h-[74px]">
          <a href="/" className="flex items-center gap-[11px]" aria-label="VimlaJi home">
            <img
              src="/app/brand/vimlaji_text_logo.png"
              alt="VimlaJi"
              className="h-9 w-[112px] object-contain object-left"
              onError={(e) => {
                e.currentTarget.style.display = 'none'
                e.currentTarget.nextSibling.style.display = 'block'
              }}
            />
            <span className="hidden font-display text-[24px] font-black leading-none tracking-[-0.6px] text-[#0a3540] sm:text-[26px]">
              VimlaJi
            </span>
          </a>

          <div className="hidden items-center gap-[34px] md:flex">
            {navLinks.map(({ label, href, page }) => (
              <a
                key={label}
                href={href}
                className={`font-body text-[14.5px] font-semibold tracking-[0.1px] transition-colors hover:text-white ${activePage === page ? 'text-white' : 'text-[#07313b]'}`}
              >
                {label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href="/download-app"
              className="rounded-full bg-white px-4 py-[9px] font-body text-xs font-black tracking-[0.2px] text-[#07313b] shadow-[0_8px_26px_rgba(10,53,64,0.16)] transition-all duration-300 hover:-translate-y-[1px] hover:bg-[#07313b] hover:text-white sm:px-[24px] sm:py-[10px] sm:text-sm"
            >
              Download
            </a>

            <button
              type="button"
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav"
              aria-label="Toggle menu"
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/45 bg-white/40 text-[#07313b] transition-colors hover:bg-white/70 md:hidden"
            >
              <span className="relative block h-[14px] w-[16px]">
                <span className={`absolute left-0 top-0 h-[2px] w-full rounded bg-current transition-all ${mobileOpen ? 'top-[6px] rotate-45' : ''}`} />
                <span className={`absolute left-0 top-[6px] h-[2px] w-full rounded bg-current transition-opacity ${mobileOpen ? 'opacity-0' : 'opacity-100'}`} />
                <span className={`absolute left-0 top-3 h-[2px] w-full rounded bg-current transition-all ${mobileOpen ? 'top-[6px] -rotate-45' : ''}`} />
              </span>
            </button>
          </div>
        </div>

        <div
          id="mobile-nav"
          className={`overflow-hidden transition-all duration-300 md:hidden ${
            mobileOpen ? 'max-h-[440px] pb-4 opacity-100' : 'max-h-0 pb-0 opacity-0'
          }`}
        >
          <div className="rounded-3xl border border-[rgba(69,238,255,0.28)] bg-[rgba(255,255,255,0.97)] p-3 shadow-[0_18px_44px_rgba(10,53,64,0.12)] backdrop-blur-md">
            {navLinks.map(({ label, href, page }) => (
              <a
                key={label}
                href={href}
                onClick={() => setMobileOpen(false)}
                className={`block rounded-2xl px-3 py-2.5 font-body text-[15px] font-semibold transition-colors hover:bg-[rgba(69,238,255,0.11)] hover:text-[var(--cyan-deep)] ${activePage === page ? 'bg-[rgba(69,238,255,0.14)] text-[var(--cyan-deep)]' : 'text-[var(--text-muted)]'}`}
              >
                {label}
              </a>
            ))}
            <StoreButtons compact className="mt-3" />
          </div>
        </div>
      </div>
    </nav>
  )
}
