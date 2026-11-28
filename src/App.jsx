import Footer from './components/sections/Footer'
import WhatsAppButton from './components/ui/WhatsAppButton'
import { EnquiryDialogProvider } from './components/ui/EnquiryDialogProvider'
import { lazy, Suspense, useEffect, useState } from 'react'
import './App.css'

const Home = lazy(() => import('./pages/Home'))
const Services = lazy(() => import('./pages/Services'))
const About = lazy(() => import('./pages/About'))
const WhoWeServe = lazy(() => import('./pages/WhoWeServe'))
const WhyUs = lazy(() => import('./pages/WhyUs'))
const Team = lazy(() => import('./pages/Team'))
const Contact = lazy(() => import('./pages/Contact'))
const Consultation = lazy(() => import('./pages/Consultation'))
const ServiceDetail = lazy(() => import('./pages/ServiceDetail'))
const TestimonialsAdmin = lazy(() => import('./pages/TestimonialsAdmin'))

function HashTargetScroller({ targetId }) {
  useEffect(() => {
    if (!targetId) return undefined

    const frame = window.requestAnimationFrame(() => {
      document.getElementById(targetId)?.scrollIntoView({
        behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
        block: 'start',
      })
    })

    return () => window.cancelAnimationFrame(frame)
  }, [targetId])

  return null
}

function App() {
  const [route, setRoute] = useState(window.location.hash)
  const routeParts = route.split('#')
  const routePath = routeParts[1] ? `#${routeParts[1]}` : route
  const targetId = routeParts[2]

  useEffect(() => {
    const previousScrollRestoration = window.history.scrollRestoration
    window.history.scrollRestoration = 'manual'
    if (!window.location.hash || window.location.hash === '#/') {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    }

    return () => {
      window.history.scrollRestoration = previousScrollRestoration
    }
  }, [])

  useEffect(() => {
    const updateRoute = () => setRoute(window.location.hash)
    window.addEventListener('hashchange', updateRoute)
    return () => window.removeEventListener('hashchange', updateRoute)
  }, [])

  useEffect(() => {
    if (routePath !== '#/faq') return

    window.history.replaceState(null, '', `${window.location.pathname}${window.location.search}#/team`)
  }, [routePath])

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || typeof IntersectionObserver === 'undefined') {
      return undefined
    }

    const root = document.getElementById('root')
    if (!root) return undefined

    const selector = 'main section:not([class*="hero"]), main .service-card, main .catalog-card, main .audience-card'
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-scroll-visible')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.08, rootMargin: '0px 0px -24px 0px' })

    const observeTargets = (node) => {
      if (!(node instanceof Element)) return
      if (node.matches(selector)) {
        node.setAttribute('data-scroll-reveal', '')
        observer.observe(node)
      }
      node.querySelectorAll(selector).forEach((target) => {
        target.setAttribute('data-scroll-reveal', '')
        observer.observe(target)
      })
    }

    observeTargets(root)
    const mutationObserver = new MutationObserver((records) => {
      records.forEach((record) => record.addedNodes.forEach(observeTargets))
    })
    mutationObserver.observe(root, { childList: true, subtree: true })
    document.documentElement.classList.add('scroll-reveal-active')

    return () => {
      mutationObserver.disconnect()
      observer.disconnect()
      document.documentElement.classList.remove('scroll-reveal-active')
      root.querySelectorAll('[data-scroll-reveal]').forEach((node) => {
        node.removeAttribute('data-scroll-reveal')
        node.classList.remove('is-scroll-visible')
      })
    }
  }, [])

  let page
  if (routePath === '#/admin/testimonials') page = <TestimonialsAdmin />
  else if (routePath === '#/services') page = <Services />
  else if (routePath === '#/about') page = <About />
  else if (routePath === '#/who-we-serve') page = <WhoWeServe />
  else if (routePath === '#/why-us') page = <WhyUs />
  else if (routePath === '#/team' || routePath === '#/faq') page = <Team />
  else if (routePath === '#/contact') page = <Contact />
  else if (routePath === '#/consultation') page = <Consultation />
  else if (routePath.startsWith('#/services/')) page = <ServiceDetail />
  else page = <Home />

  return (
    <EnquiryDialogProvider>
      <>
        <Suspense fallback={<div className="page-loading" role="status">Loading page…</div>}>
          <HashTargetScroller targetId={targetId} />
          {page}
        </Suspense>
        {routePath !== '#/admin/testimonials' && (
          <>
            <Footer />
            <WhatsAppButton />
          </>
        )}
      </>
    </EnquiryDialogProvider>
  )
}

export default App
