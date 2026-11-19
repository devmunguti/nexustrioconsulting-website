import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import landscapeLogo from '../../assets/nexus-trio-logo-landscape.png'

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

  return (
    <>
      <aside className="utility-bar">
        <div className="container utility-inner">
          <div className="utility-contact">
            <a href="tel:+254700000000">☎ <span>+254 700 000 000</span></a>
            <a href="mailto:info@nexustrio.co.ke">✉ <span>info@nexustrio.co.ke</span></a>
            <span>● Westlands, Nairobi, Kenya</span>
          </div>
          <div className="socials">
            <span>CERTIFIED KRA TAX AGENTS &amp; ADVISORS</span>
            <a href="#linkedin" aria-label="LinkedIn">in</a>
            <a href="#facebook" aria-label="Facebook">f</a>
            <a href="#instagram" aria-label="Instagram">◎</a>
            <a href="#x" aria-label="X">X</a>
          </div>
        </div>
      </aside>
      <header className="main-header">
        <nav className="container navbar" aria-label="Main navigation">
          <a className="brand" href="#/" aria-label="Nexus Trio Consulting home">
            <img className="header-logo" src={landscapeLogo} alt="Nexus Trio Consulting Ltd" />
          </a>
          <div className="nav-links">
            {navItems.map(([label, href]) => <a className={active === label ? 'active' : ''} href={href} key={label}>{label}</a>)}
          </div>
          <a className={`gold-button navbar-button ${active === 'Consultation' ? 'active-cta' : ''}`} href="#/consultation">Book a Consultation <span>→</span></a>
          <button
            className="menu-button"
            type="button"
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-primary-navigation"
            onClick={() => setMobileOpen((open) => !open)}
          >
            {mobileOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </nav>
        {mobileOpen && (
          <nav className="mobile-menu" id="mobile-primary-navigation" aria-label="Mobile navigation">
            {navItems.map(([label, href]) => <a key={label} href={href} onClick={() => setMobileOpen(false)}>{label}</a>)}
            <a className="gold-button mobile-menu__cta" href="#/consultation" onClick={() => setMobileOpen(false)}>
              Book a Consultation <span aria-hidden="true">→</span>
            </a>
          </nav>
        )}
      </header>
    </>
  )
}

export default Navbar
