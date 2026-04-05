import { useEffect } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Ticker from './components/Ticker.jsx'
import About from './components/About.jsx'
import Services from './components/Services.jsx'
import HowToOrder from './components/HowToOrder.jsx'
import FAQs from './components/Links.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
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
  }, [])

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Ticker />
        <About />
        <Services />
        <HowToOrder />
        <FAQs />
      </main>
      <Footer />
    </>
  )
}
