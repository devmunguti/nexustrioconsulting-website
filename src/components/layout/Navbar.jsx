import { useEffect, useRef, useState } from 'react'
import { Calculator, ChevronDown, FileCheck2, HandCoins, Lightbulb, Menu, ReceiptText, Users, X } from 'lucide-react'
import Button from '../ui/Button'
import landscapeLogo from '../../assets/nexus-trio-logo-landscape.png'
import './Navbar.css'

const navItems = [
  ['Home', '#/'],
  ['About Us', '#/about'],
  ['Services', '#/services'],
  ['Who We Serve', '#/who-we-serve'],
  ['Why Us', '#/why-us'],
  ['Team', '#/team'],
  ['Contact', '#/contact'],
]

const serviceMenuItems = [
  {
    slug: 'tax-advisory-compliance',
    label: 'Tax Advisory and Compliance',
    description: 'Corporate tax, VAT, PAYE, eTIMS and KRA support',
    Icon: Calculator,
  },
  {
    slug: 'accounting-financial-management',
    label: 'Accounting and Financial Management',
    description: 'Bookkeeping, financial statements, accounts and reconciliations',
    Icon: ReceiptText,
  },
  {
    slug: 'business-advisory-consultancy',
    label: 'Business Advisory and Consultancy',
    description: 'Business plans, strategic planning, financial modelling and controls',
    Icon: Lightbulb,
  },
  {
    slug: 'payroll-hr-administration',
    label: 'Payroll and HR Administration',
    description: 'Payroll processing, statutory deductions, payslips and HR policy support',
    Icon: Users,
  },
  {
    slug: 'business-registration-corporate-services',
    label: 'Business Registration and Corporate Services',
    description: 'Company registration, KRA PIN, annual returns and licensing guidance',
    Icon: FileCheck2,
  },
  {
    slug: 'ngo-project-financial-management',
    label: 'NGO and Project Financial Management',
    description: 'Donor budgets, grant reporting, project finance and audit support',
    Icon: HandCoins,
  },
]

function Navbar({ active = '' }) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [desktopServicesOpen, setDesktopServicesOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const toggleRef = useRef(null)
  const menuRef = useRef(null)
  const servicesRef = useRef(null)
  const servicesToggleRef = useRef(null)
  const closeTimerRef = useRef(null)

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

  useEffect(() => {
    if (!mobileOpen) return undefined

    const handleOutsidePointer = (event) => {
      if (!(event.target instanceof Node)) return
      if (menuRef.current?.contains(event.target) || toggleRef.current?.contains(event.target)) return
      setMobileOpen(false)
      setMobileServicesOpen(false)
    }

    document.addEventListener('pointerdown', handleOutsidePointer)
    return () => document.removeEventListener('pointerdown', handleOutsidePointer)
  }, [mobileOpen])

  useEffect(() => {
    const handleOutsidePointer = (event) => {
      if (event.target instanceof Node && !servicesRef.current?.contains(event.target)) {
        setDesktopServicesOpen(false)
      }
    }

    document.addEventListener('pointerdown', handleOutsidePointer)
    return () => document.removeEventListener('pointerdown', handleOutsidePointer)
  }, [])

  useEffect(() => () => window.clearTimeout(closeTimerRef.current), [])

  const cancelServicesClose = () => {
    window.clearTimeout(closeTimerRef.current)
  }

  const openDesktopServices = () => {
    cancelServicesClose()
    setDesktopServicesOpen(true)
  }

  const scheduleServicesClose = () => {
    cancelServicesClose()
    closeTimerRef.current = window.setTimeout(() => {
      if (!servicesRef.current?.contains(document.activeElement)) setDesktopServicesOpen(false)
    }, 180)
  }

  const handleDesktopServicesKeyDown = (event) => {
    if (event.key === 'Escape') {
      event.preventDefault()
      setDesktopServicesOpen(false)
      servicesToggleRef.current?.focus()
      return
    }

    if (event.target === servicesToggleRef.current && event.key === 'ArrowDown') {
      event.preventDefault()
      openDesktopServices()
      window.requestAnimationFrame(() => servicesRef.current?.querySelector('[role="menuitem"]')?.focus())
    } else if (event.target === servicesToggleRef.current && event.key === 'ArrowUp') {
      event.preventDefault()
      openDesktopServices()
      window.requestAnimationFrame(() => {
        const menuItems = servicesRef.current?.querySelectorAll('[role="menuitem"]')
        menuItems?.[menuItems.length - 1]?.focus()
      })
      return
    } else {
      const menuItems = servicesRef.current?.querySelectorAll('[role="menuitem"]')
      if (!menuItems?.length) return
      const currentIndex = Array.from(menuItems).indexOf(document.activeElement)

      if (event.key === 'ArrowDown' || event.key === 'ArrowRight') {
        event.preventDefault()
        menuItems[(currentIndex + 1 + menuItems.length) % menuItems.length]?.focus()
      } else if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') {
        event.preventDefault()
        menuItems[(currentIndex - 1 + menuItems.length) % menuItems.length]?.focus()
      } else if (event.key === 'Home') {
        event.preventDefault()
        menuItems[0]?.focus()
      } else if (event.key === 'End') {
        event.preventDefault()
        menuItems[menuItems.length - 1]?.focus()
      }
    }
  }

  const handleToggle = () => {
    if (mobileOpen) {
      setMobileOpen(false)
      setMobileServicesOpen(false)
      toggleRef.current?.focus()
    } else {
      setMobileOpen(true)
    }
  }

  const closeMobileMenu = () => {
    setMobileOpen(false)
    setMobileServicesOpen(false)
    toggleRef.current?.focus()
  }

  const renderServiceLinks = (mobile = false) => serviceMenuItems.map(({ slug, label, description, Icon }) => {
    return (
      <a
        className={mobile ? 'nx-mobile-services__link' : 'nx-services-dropdown__link'}
        href={`#/services/${slug}`}
        key={slug}
        role={mobile ? undefined : 'menuitem'}
        onClick={mobile ? closeMobileMenu : () => setDesktopServicesOpen(false)}
      >
        <Icon aria-hidden="true" size={18} strokeWidth={1.8} />
        <span>
          <strong>{label}</strong>
          <small>{description}</small>
        </span>
      </a>
    )
  })

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <header className="site-header nx-header">
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
              {navItems.map(([label, href]) => label === 'Services' ? (
                <div
                  className={`nx-services-nav-item${active === 'Services' ? ' nx-services-nav-item--active' : ''}`}
                  key={label}
                  ref={servicesRef}
                  onMouseEnter={openDesktopServices}
                  onMouseLeave={scheduleServicesClose}
                  onFocusCapture={(event) => {
                    if (event.target !== servicesToggleRef.current) openDesktopServices()
                  }}
                  onBlurCapture={(event) => {
                    if (!event.currentTarget.contains(event.relatedTarget)) scheduleServicesClose()
                  }}
                  onKeyDown={handleDesktopServicesKeyDown}
                >
                  <a className={active === label ? 'active' : ''} href={href}>Services</a>
                  <button
                    ref={servicesToggleRef}
                    className="nx-services-nav-item__toggle"
                    type="button"
                    aria-label="Open Services menu"
                    aria-haspopup="menu"
                    aria-expanded={desktopServicesOpen}
                    aria-controls="nx-services-dropdown"
                    onClick={() => {
                      cancelServicesClose()
                      setDesktopServicesOpen(true)
                    }}
                  >
                    <ChevronDown aria-hidden="true" size={14} />
                  </button>
                  {desktopServicesOpen && (
                    <div className="nx-services-dropdown" id="nx-services-dropdown" role="menu" aria-label="Services">
                      {renderServiceLinks()}
                    </div>
                  )}
                </div>
              ) : (
                <a className={active === label ? 'active' : ''} href={href} key={label}>{label}</a>
              ))}
            </div>
            <Button href="#/consultation" className={`navbar-button ${active === 'Consultation' ? 'active-cta' : ''}`}>
              Book a consultation <span></span>
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
            className="mobile-menu nx-header__mobile-nav"
            id="mobile-primary-navigation"
            aria-label="Mobile navigation"
            hidden={!mobileOpen}
          >
            {navItems.map(([label, href]) => (
              label === 'Services' ? (
                <div className="nx-mobile-services" key={label}>
                  <div className="nx-mobile-services__heading">
                    <a href={href} onClick={closeMobileMenu}>Services</a>
                    <button
                      type="button"
                      aria-label="Show service links"
                      aria-expanded={mobileServicesOpen}
                      aria-controls="nx-mobile-services-list"
                      onClick={() => setMobileServicesOpen((open) => !open)}
                    >
                      <ChevronDown aria-hidden="true" size={18} />
                    </button>
                  </div>
                  {mobileServicesOpen && (
                    <div className="nx-mobile-services__list" id="nx-mobile-services-list">
                      {renderServiceLinks(true)}
                    </div>
                  )}
                </div>
              ) : (
                <a
                  className="nx-mobile-nav-link"
                  key={label}
                  href={href}
                  onClick={closeMobileMenu}
                >
                  {label}
                </a>
              )
            ))}
            <Button
              className="mobile-menu__cta"
              href="#/consultation"
              onClick={closeMobileMenu}
            >
              Book a consultation<span aria-hidden="true"></span>
            </Button>
          </nav>
        </div>
      </header>
    </>
  )
}

export default Navbar
