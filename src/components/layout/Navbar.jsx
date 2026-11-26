import { useEffect, useRef, useState } from 'react'
import { Menu, X } from 'lucide-react'
import Button from '../ui/Button'
import landscapeLogo from '../../assets/nexus-trio-logo-landscape.png'
import { siteConfig } from '../../data/siteConfig'

const navItems = [
  ['Home', '#/'],
  ['About Us', '#/about'],
  ['Services', '#/services'],
  ['Who We Serve', '#/who-we-serve'],
  ['Why Us', '#/why-us'],
  ['FAQ', '#/faq'],
  ['Contact', '#/contact'],
]

function Navbar({ active = '' }) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const toggleRef = useRef(null)
  const menuRef = useRef(null)
  const activeSocials = Object.entries(siteConfig.socials).filter(([, url]) => Boolean(url))

  useEffect(() => {
    if (!mobileOpen) return undefined

    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const focusable = menuRef.current?.querySelectorAll('a[href], button:not([disabled])')
    if (focusable && focusable.length > 0) {
      focusable[0].focus()
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        setMobileOpen(false)
        toggleRef.current?.focus()
        return
      }

      if (event.key === 'Tab') {
        const elements = menuRef.current?.querySelectorAll('a[href], button:not([disabled])')
        if (!elements || elements.length === 0) return

        const first = elements[0]
        const last = elements[elements.length - 1]

        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault()
          last.focus()
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault()
          first.focus()
        }
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = originalOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [mobileOpen])

  const handleToggle = () => {
    if (mobileOpen) {
      setMobileOpen(false)
      toggleRef.current?.focus()
    } else {
      setMobileOpen(true)
    }
  }

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <header className="site-header">
        <div className="utility-bar">
          <div className="container utility-inner">
            <div className="utility-contact">
              <a href={`mailto:${siteConfig.company.email}`}>✉ <span>{siteConfig.company.email}</span></a>
              <span>Support for clients worldwide</span>
            </div>
            <div className="socials">
              <span>Accounting · Tax · Business Support</span>
              {activeSocials.map(([platform, url]) => (
                <a href={url} key={platform} target="_blank" rel="noopener noreferrer">
                  {platform}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="main-header">
          <nav className="container navbar" aria-label="Main navigation">
            <a className="brand" href="#/" aria-label="Nexus Trio Consulting home">
              <img
                className="header-logo"
                src={landscapeLogo}
                alt="Nexus Trio Consulting Ltd"
                width="750"
                height="220"
                decoding="async"
                fetchPriority="high"
              />
            </a>
            <div className="nav-links">
              {navItems.map(([label, href]) => <a className={active === label ? 'active' : ''} href={href} key={label}>{label}</a>)}
            </div>
            <Button href="#/consultation" className={`navbar-button ${active === 'Consultation' ? 'active-cta' : ''}`}>
              Book a consultation <span>→</span>
            </Button>
            <button
              ref={toggleRef}
              className="menu-button"
              type="button"
              aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileOpen}
              aria-controls="mobile-primary-navigation"
              onClick={handleToggle}
            >
              {mobileOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
            </button>
          </nav>
          <nav
            ref={menuRef}
            className="mobile-menu"
            id="mobile-primary-navigation"
            aria-label="Mobile navigation"
            hidden={!mobileOpen}
          >
            {navItems.map(([label, href]) => (
              <a
                key={label}
                href={href}
                onClick={() => {
                  setMobileOpen(false)
                  toggleRef.current?.focus()
                }}
              >
                {label}
              </a>
            ))}
            <Button
              className="mobile-menu__cta"
              href="#/consultation"
              onClick={() => {
                setMobileOpen(false)
                toggleRef.current?.focus()
              }}
            >
              Book a consultation <span aria-hidden="true">→</span>
            </Button>
          </nav>
        </div>
      </header>
    </>
  )
}

export default Navbar
