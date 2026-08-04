import { useEffect, useState } from 'react'
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

function currentPageFromLocation() {
  const hash = window.location.hash.replace('#', '')
  const path = window.location.pathname.replace(/^\//, '').replace(/\/$/, '')
  if (hash === 'privacy-policy' || path === 'privacy-policy') return 'privacy'
  if (hash === 'terms-and-conditions' || path === 'terms-and-conditions') return 'terms'
  return null
}

export default function App() {
  const [legalPage, setLegalPage] = useState(currentPageFromLocation)

  useEffect(() => {
    const onHashChange = () => setLegalPage(currentPageFromLocation())
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

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
  }, [legalPage])

  if (legalPage) {
    return (
      <>
        <Navbar />
        <LegalPage page={legalPage} />
        <Footer />
      </>
    )
  }

  return (
    <>
      <Navbar />
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
      <Footer />
    </>
  )
}
