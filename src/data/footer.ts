import { services } from './services.js'
import { siteConfig } from './siteConfig.js'

export type FooterLink = {
  label: string
  href: string
}

export type FooterSocial = {
  label: string
  platform: 'linkedin' | 'x' | 'facebook' | 'whatsapp'
  href: string | null
}

type FooterData = {
  companyName: string
  logoAlt: string
  description: string
  columnHeadings: {
    company: string
    services: string
    contact: string
  }
  navLabels: {
    company: string
    services: string
    contact: string
    social: string
    legal: string
  }
  backToTop: string
  copyrightSuffix: string
  opensInNewTab: string
  cta: {
    heading: string
    label: string
    href: string
  }
  companyLinks: FooterLink[]
  services: FooterLink[]
  contact: {
    email: { label: string; href: string }
    phone: { label: string; href: string } | null
    address: string
    hours: string
  }
  socials: FooterSocial[]
  legalLinks: Array<{
    label: string
    href: string | null
  }>
  registrationNumber: string | null
}

export const footerData: FooterData = {
  companyName: 'Nexus Trio Consulting Ltd',
  logoAlt: 'Nexus Trio Consulting Ltd',
  description: 'Accounting, tax, payroll, project finance and business advisory for clients worldwide.',
  columnHeadings: {
    company: 'Company',
    services: 'Services',
    contact: 'Contact',
  },
  navLabels: {
    company: 'Company links',
    services: 'Services',
    contact: 'Contact links',
    social: 'Social media',
    legal: 'Legal links',
  },
  backToTop: 'Back to top',
  copyrightSuffix: 'All rights reserved.',
  opensInNewTab: '(opens in a new tab)',
  cta: {
    heading: 'Ready for financial clarity?',
    label: 'Book a consultation',
    href: '#/consultation',
  },
  companyLinks: [
    { label: 'About', href: '#/about' },
    { label: 'Who We Serve', href: '#/who-we-serve' },
    { label: 'How We Work', href: '#/services#how-we-work' },
    { label: 'Testimonials', href: '#/#testimonials' },
    { label: 'Team', href: '#/team' },
  ],
  services: services.map((service) => ({
    label: service.title,
    href: `#/services#service-${service.slug}`,
  })),
  contact: {
    email: {
      label: siteConfig.company.email,
      href: `mailto:${siteConfig.company.email}`,
    },
    phone: siteConfig.company.phone
      ? { label: siteConfig.company.phone.display, href: siteConfig.company.phone.href }
      : null,
    address: siteConfig.company.address?.physical ?? '',
    hours: siteConfig.company.workingHours ?? '',
  },
  socials: [
    { label: 'LinkedIn', platform: 'linkedin', href: siteConfig.socials.linkedin },
    { label: 'X', platform: 'x', href: siteConfig.socials.x },
    { label: 'Facebook', platform: 'facebook', href: siteConfig.socials.facebook },
    { label: 'WhatsApp', platform: 'whatsapp', href: siteConfig.company.whatsapp?.href ?? null },
  ],
  legalLinks: [
    { label: 'Privacy Policy', href: siteConfig.legal.privacyPolicyHref },
    { label: 'Terms', href: siteConfig.legal.termsHref },
  ],
  registrationNumber: siteConfig.company.registrationNumber,
}
