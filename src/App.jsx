import { useEffect, useMemo, useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Ticker from './components/Ticker.jsx'
import About from './components/About.jsx'
import Services from './components/Services.jsx'
import Feedback from './components/Feedback.jsx'
import HowToOrder from './components/HowToOrder.jsx'
import JoinHelper from './components/JoinHelper.jsx'
import FAQs from './components/Links.jsx'
import Footer from './components/Footer.jsx'
import LegalPage from './components/LegalPage.jsx'
import ContactPage from './components/ContactPage.jsx'

const pageMeta = {
  home: {
    title: 'VimlaJi | Home Help, Cleaning, Laundry & Cooking in Pathankot',
    description: 'Download VimlaJi to book home help, cleaning, laundry, utensils, kitchen help, and cooking services in Pathankot.',
    path: '/',
  },
  about: {
    title: 'About VimlaJi | App-Based Househelp in Pathankot',
    description: 'Learn about VimlaJi, a home-service platform built for reliable everyday househelp, cleaning, laundry, and cooking support.',
    path: '/about',
  },
  services: {
    title: 'VimlaJi Services | Cleaning, Laundry, Utensils & Cooking',
    description: 'Explore VimlaJi services including sweeping, mopping, utensils, laundry, kitchen help, cooking, and general home help.',
    path: '/services',
  },
  download: {
    title: 'Download VimlaJi App | Book Househelp in Pathankot',
    description: 'Get the VimlaJi app on Play Store and App Store to book home help with simple slots and secure payments.',
    path: '/download-app',
  },
  helper: {
    title: 'Join VimlaJi as Helper | Helper Jobs in Pathankot',
    description: 'Apply to work with VimlaJi as a helper. Share your details for helper onboarding and work opportunities.',
    path: '/join-helper',
  },
  feedback: {
    title: 'VimlaJi Customer Feedback | Reviews from Pathankot Users',
    description: 'Read reviewed customer feedback from VimlaJi users and see how families use VimlaJi for home support.',
    path: '/feedback',
  },
  faq: {
    title: 'VimlaJi FAQs | Booking, Payments, Services & Support',
    description: 'Find answers about VimlaJi bookings, services, support, availability, payments, and app downloads.',
    path: '/faq',
  },
  contact: {
    title: 'Contact VimlaJi | Customer Support in Pathankot',
    description: 'Contact VimlaJi for booking support, service help, helper onboarding, and customer queries in Pathankot.',
    path: '/contact-us',
  },
  privacy: {
    title: 'Privacy Policy | VimlaJi',
    description: 'Read the VimlaJi privacy policy for app users, helpers, and website visitors.',
    path: '/privacy-policy',
  },
  terms: {
    title: 'Terms and Conditions | VimlaJi',
    description: 'Read VimlaJi terms and conditions for service usage, bookings, payments, cancellations, and support.',
    path: '/terms-and-conditions',
  },
}

function currentPageFromLocation() {
  const hash = window.location.hash.replace('#', '')
  const path = window.location.pathname.replace(/^\//, '').replace(/\/$/, '')

  if (hash === 'privacy-policy' || path === 'privacy-policy') return 'privacy'
  if (hash === 'terms-and-conditions' || path === 'terms-and-conditions') return 'terms'
  if (hash === 'about' || path === 'about') return 'about'
  if (hash === 'services' || path === 'services') return 'services'
  if (hash === 'download' || hash === 'download-app' || path === 'download-app') return 'download'
  if (hash === 'join-helper' || path === 'join-helper') return 'helper'
  if (hash === 'feedback' || path === 'feedback') return 'feedback'
  if (hash === 'faqs' || hash === 'faq' || path === 'faq' || path === 'faqs') return 'faq'
  if (hash === 'contact-us' || path === 'contact-us' || path === 'contact') return 'contact'
  return 'home'
}

function setMetaTag(selector, attrs) {
  let tag = document.head.querySelector(selector)
  if (!tag) {
    tag = document.createElement('meta')
    document.head.appendChild(tag)
  }
  Object.entries(attrs).forEach(([key, value]) => tag.setAttribute(key, value))
}

function updateSeo(page) {
  const meta = pageMeta[page] ?? pageMeta.home
  const canonicalUrl = `https://vimlaji.com${meta.path === '/' ? '/' : meta.path}`

  document.title = meta.title
  setMetaTag('meta[name="description"]', { name: 'description', content: meta.description })
  setMetaTag('meta[property="og:title"]', { property: 'og:title', content: meta.title })
  setMetaTag('meta[property="og:description"]', { property: 'og:description', content: meta.description })
  setMetaTag('meta[property="og:url"]', { property: 'og:url', content: canonicalUrl })
  setMetaTag('meta[name="twitter:title"]', { name: 'twitter:title', content: meta.title })
  setMetaTag('meta[name="twitter:description"]', { name: 'twitter:description', content: meta.description })

  let canonical = document.head.querySelector('link[rel="canonical"]')
  if (!canonical) {
    canonical = document.createElement('link')
    canonical.setAttribute('rel', 'canonical')
    document.head.appendChild(canonical)
  }
  canonical.setAttribute('href', canonicalUrl)
}

function PageHero({ eyebrow, title, copy }) {
  return (
    <section className="relative isolate overflow-hidden bg-[#eefdff] pt-[118px] text-[#082f38] lg:pt-[132px]">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_20%,rgba(69,238,255,0.42),transparent_28%),radial-gradient(circle_at_88%_16%,rgba(255,255,255,0.94),transparent_24%),linear-gradient(135deg,rgba(238,253,255,0.98),rgba(255,255,255,0.88)_52%,rgba(69,238,255,0.28))]" />
      <div className="aurora-field absolute inset-0 -z-10 opacity-35 mix-blend-multiply" />
      <div className="app-container pb-12 pt-9 lg:pb-16 lg:pt-12">
        <div className="max-w-[900px]">
          <div className="reveal mb-4 font-mono text-[11px] font-semibold uppercase tracking-[3px] text-[var(--cyan-deep)]">{eyebrow}</div>
          <h1 className="reveal reveal-delay-1 font-display text-[clamp(2.7rem,6vw,5.7rem)] font-black leading-[0.95] tracking-[-1.6px] text-[#082f38]">{title}</h1>
          <p className="reveal reveal-delay-2 mt-5 max-w-[680px] font-body text-[17px] font-light leading-[1.85] text-[#477783]">{copy}</p>
        </div>
      </div>
    </section>
  )
}

function HomePage() {
  return (
    <main>
      <Hero />
      <Ticker />
      <About />
      <Services />
      <JoinHelper />
      <Feedback />
      <HowToOrder />
      <FAQs />
    </main>
  )
}

function RoutedPage({ page }) {
  if (page === 'privacy' || page === 'terms') return <LegalPage page={page} />
  if (page === 'contact') return <ContactPage />
  if (page === 'about') {
    return (
      <main>
        <PageHero eyebrow="About VimlaJi" title="Built for homes that need dependable help." copy="VimlaJi brings everyday househelp into a cleaner, clearer, app-based experience for families in Pathankot." />
        <About />
        <Ticker />
        <Feedback />
      </main>
    )
  }
  if (page === 'services') {
    return (
      <main>
        <PageHero eyebrow="Services" title="Home services made simple." copy="Explore VimlaJi services for cleaning, laundry, utensils, kitchen help, cooking, and general home support." />
        <Services />
        <HowToOrder />
      </main>
    )
  }
  if (page === 'download') {
    return (
      <main>
        <PageHero eyebrow="Download App" title="Book VimlaJi from your phone." copy="Install VimlaJi from Play Store or App Store and manage bookings, payments, and support from one clean app." />
        <HowToOrder />
        <FAQs />
      </main>
    )
  }
  if (page === 'helper') {
    return (
      <main>
        <PageHero eyebrow="Join VimlaJi" title="Become a VimlaJi helper." copy="Share your details for helper onboarding, training, and respectful home-service work opportunities." />
        <JoinHelper />
      </main>
    )
  }
  if (page === 'feedback') {
    return (
      <main>
        <PageHero eyebrow="Customer Feedback" title="What VimlaJi customers say." copy="Reviewed customer feedback from families who use VimlaJi for daily home support." />
        <Feedback />
      </main>
    )
  }
  if (page === 'faq') {
    return (
      <main>
        <PageHero eyebrow="FAQs" title="Answers before you book." copy="Quick answers about VimlaJi services, app downloads, booking support, and availability." />
        <FAQs />
      </main>
    )
  }
  return <HomePage />
}

export default function App() {
  const [page, setPage] = useState(currentPageFromLocation)
  const legalPage = page === 'privacy' || page === 'terms' ? page : null

  useEffect(() => {
    const onLocationChange = () => {
      setPage(currentPageFromLocation())
      window.scrollTo({ top: 0, behavior: 'instant' })
    }
    window.addEventListener('hashchange', onLocationChange)
    window.addEventListener('popstate', onLocationChange)
    return () => {
      window.removeEventListener('hashchange', onLocationChange)
      window.removeEventListener('popstate', onLocationChange)
    }
  }, [])

  useEffect(() => {
    updateSeo(page)
  }, [page])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.setAttribute('data-revealed', 'true')
            observer.unobserve(e.target)
          }
        }),
      { threshold: 0.1 }
    )
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [page, legalPage])

  const activePage = useMemo(() => page, [page])

  return (
    <>
      <Navbar activePage={activePage} />
      <RoutedPage page={activePage} />
      <Footer />
    </>
  )
}
