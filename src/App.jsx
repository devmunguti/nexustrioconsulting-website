import Home from './pages/Home'
import Services from './pages/Services'
import About from './pages/About'
import WhoWeServe from './pages/WhoWeServe'
import WhyUs from './pages/WhyUs'
import FAQ from './pages/FAQ'
import Contact from './pages/Contact'
import Consultation from './pages/Consultation'
import ServiceDetail from './pages/ServiceDetail'
import Footer from './components/sections/Footer'
import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [route, setRoute] = useState(window.location.hash)
  const routeParts = route.split('#')
  const routePath = routeParts[1] ? `#${routeParts[1]}` : route
  const targetId = routeParts[2]

  useEffect(() => {
    const updateRoute = () => setRoute(window.location.hash)
    window.addEventListener('hashchange', updateRoute)
    return () => window.removeEventListener('hashchange', updateRoute)
  }, [])

  useEffect(() => {
    if (!targetId) return undefined

    const frame = window.requestAnimationFrame(() => {
      document.getElementById(targetId)?.scrollIntoView({
        behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
        block: 'start',
      })
    })

    return () => window.cancelAnimationFrame(frame)
  }, [targetId, route])

  let page
  if (routePath === '#/services') page = <Services />
  else if (routePath === '#/about') page = <About />
  else if (routePath === '#/who-we-serve') page = <WhoWeServe />
  else if (routePath === '#/why-us') page = <WhyUs />
  else if (routePath === '#/faq') page = <FAQ />
  else if (routePath === '#/contact') page = <Contact />
  else if (routePath === '#/consultation') page = <Consultation />
  else if (routePath.startsWith('#/services/')) page = <ServiceDetail />
  else page = <Home />

  return (
    <>
      {page}
      <Footer />
    </>
  )
}

export default App
