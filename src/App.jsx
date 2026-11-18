import Home from './pages/Home'
import Services from './pages/Services'
import About from './pages/About'
import WhoWeServe from './pages/WhoWeServe'
import WhyUs from './pages/WhyUs'
import FAQ from './pages/FAQ'
import Contact from './pages/Contact'
import Consultation from './pages/Consultation'
import ServiceDetail from './pages/ServiceDetail'
import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [route, setRoute] = useState(window.location.hash)

  useEffect(() => {
    const updateRoute = () => setRoute(window.location.hash)
    window.addEventListener('hashchange', updateRoute)
    return () => window.removeEventListener('hashchange', updateRoute)
  }, [])

  if (route === '#/services') return <Services />
  if (route === '#/about') return <About />
  if (route === '#/who-we-serve') return <WhoWeServe />
  if (route === '#/why-us') return <WhyUs />
  if (route === '#/faq') return <FAQ />
  if (route === '#/contact') return <Contact />
  if (route === '#/consultation') return <Consultation />
  if (route.startsWith('#/services/')) return <ServiceDetail />
  return <Home />
}

export default App
