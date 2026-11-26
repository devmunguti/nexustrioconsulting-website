import { useRef } from 'react'
import { motion, useInView, useReducedMotion, type Variants } from 'motion/react'
import companyLogo from '../../assets/nexus-trio-logo.png'
import { footerData, type FooterLink, type FooterSocial } from '../../data/footer'
import './Footer.css'

const COPYRIGHT_YEAR = new Date().getFullYear()

const gridVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.06,
    },
  },
}

const reducedGridVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0, delayChildren: 0 } },
}

const columnVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: 'easeOut' },
  },
}

function SocialIcon({ platform }: Pick<FooterSocial, 'platform'>) {
  return (
    <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24">
      {platform === 'linkedin' && (
        <>
          <path d="M6.5 9v10M6.5 5.5v.1M11 19V9m0 4a4 4 0 0 1 8 0v6" />
          <circle cx="6.5" cy="6" r="1" />
        </>
      )}
      {platform === 'x' && <path d="m5 4 14 16M19 4 5 20" />}
      {platform === 'facebook' && (
        <path d="M14 8h3V5h-3a4 4 0 0 0-4 4v2H7v3h3v6h3v-6h3l1-3h-4V9a1 1 0 0 1 1-1Z" />
      )}
      {platform === 'whatsapp' && (
        <>
          <path d="M20 11.6a8 8 0 0 1-11.8 7L4 20l1.4-4.1A8 8 0 1 1 20 11.6Z" />
          <path d="M9 8.5c.5 2.2 2.3 4 4.5 4.5l1-1 2 1c-.2 1.5-1.1 2.2-2.5 2.1-3.1-.4-5.8-3.1-6.2-6.2-.1-1.4.6-2.3 2.1-2.5l1 2-1 1.1Z" />
        </>
      )}
    </svg>
  )
}

type FooterColumnProps = {
  title: string
  navLabel: string
  links: FooterLink[]
}

function FooterColumn({ title, navLabel, links }: FooterColumnProps) {
  return (
    <motion.section className="snapshot-footer__column" variants={columnVariants}>
      <h2>{title}</h2>
      <nav aria-label={navLabel}>
        <ul>
          {links.map((link) => (
            <li key={link.href}>
              <a className="snapshot-footer__link" href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </motion.section>
  )
}

function SocialLinks() {
  const activeSocials = footerData.socials.filter((social): social is typeof social & { href: string } => Boolean(social.href))
  if (activeSocials.length === 0) return null

  return (
    <nav className="snapshot-footer__socials" aria-label={footerData.navLabels.social}>
      <ul>
        {activeSocials.map((social) => (
          <li key={social.platform}>
            <a
              href={social.href}
              aria-label={`${social.label} ${footerData.opensInNewTab}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <SocialIcon platform={social.platform} />
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

function Footer() {
  const gridRef = useRef<HTMLDivElement>(null)
  const gridInView = useInView(gridRef, { once: true, amount: 0.12 })
  const reducedMotion = useReducedMotion() ?? false
  const gridAnimation = reducedMotion || gridInView ? 'visible' : 'hidden'
  const activeGridVariants = reducedMotion ? reducedGridVariants : gridVariants

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: reducedMotion ? 'auto' : 'smooth',
    })
  }

  const whatsapp = footerData.socials.find((social) => social.platform === 'whatsapp')

  return (
    <>
      <footer className="snapshot-footer">
        <div className="snapshot-footer__container">
          <section className="snapshot-footer__cta" aria-labelledby="footer-cta-heading">
            <div>
              <h2 id="footer-cta-heading">{footerData.cta.heading}</h2>
              {whatsapp?.href && <p className="snapshot-footer__whatsapp-note">Chat with us on WhatsApp</p>}
            </div>
            <a className="snapshot-footer__button" href={footerData.cta.href}>
              {footerData.cta.label}<span aria-hidden="true">→</span>
            </a>
          </section>

          <motion.div
            ref={gridRef}
            className="snapshot-footer__grid"
            variants={activeGridVariants}
            initial={reducedMotion ? 'visible' : 'hidden'}
            animate={gridAnimation}
          >
            <motion.section className="snapshot-footer__brand" variants={columnVariants}>
              <h2 className="snapshot-footer__sr-only">About {footerData.companyName}</h2>
              <a className="snapshot-footer__logo" href="#/" aria-label={`${footerData.companyName} home`}>
                <img src={companyLogo} alt={footerData.logoAlt} width="750" height="504" />
              </a>
              <p>{footerData.description}</p>
              <SocialLinks />
            </motion.section>

            <FooterColumn title={footerData.columnHeadings.company} navLabel={footerData.navLabels.company} links={footerData.companyLinks} />
            <FooterColumn title={footerData.columnHeadings.services} navLabel={footerData.navLabels.services} links={footerData.services} />

            <motion.section className="snapshot-footer__column snapshot-footer__contact" variants={columnVariants}>
              <h2>{footerData.columnHeadings.contact}</h2>
              <address>
                <nav aria-label={footerData.navLabels.contact}>
                  <ul>
                    <li><a className="snapshot-footer__link" href={footerData.contact.email.href}>{footerData.contact.email.label}</a></li>
                    {footerData.contact.phone && (
                      <li><a className="snapshot-footer__link" href={footerData.contact.phone.href}>{footerData.contact.phone.label}</a></li>
                    )}
                  </ul>
                </nav>
                {footerData.contact.address && <p>{footerData.contact.address}</p>}
                {footerData.contact.hours && <p>{footerData.contact.hours}</p>}
              </address>
            </motion.section>
          </motion.div>

          <div className="snapshot-footer__bottom">
            <p>© {COPYRIGHT_YEAR} {footerData.companyName}. {footerData.copyrightSuffix}</p>
            <nav className="snapshot-footer__legal" aria-label={footerData.navLabels.legal}>
              {footerData.legalLinks
                .filter((link): link is typeof link & { href: string } => Boolean(link.href))
                .map((link) => (
                  <a className="snapshot-footer__link" key={link.label} href={link.href}>{link.label}</a>
                ))}
            </nav>
            <button className="snapshot-footer__back-top" type="button" onClick={scrollToTop}>
              {footerData.backToTop} <span aria-hidden="true">↑</span>
            </button>
          </div>
        </div>
      </footer>

      {whatsapp?.href && (
        <a
          className="whatsapp"
          href={whatsapp.href}
          aria-label={`Chat on ${whatsapp.label} ${footerData.opensInNewTab}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <SocialIcon platform="whatsapp" />
          <span>WhatsApp Advisors</span>
        </a>
      )}
    </>
  )
}

export default Footer
