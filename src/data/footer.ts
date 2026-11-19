import { services } from './services.js'

export type FooterLink = {
  label: string
  href: string
}

export type FooterSocial = {
  label: string
  platform: 'linkedin' | 'x' | 'facebook' | 'whatsapp'
  href: string | null
  todo?: string
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
    phone: { label: string; href: string }
    address: string
    hours: string
  }
  socials: FooterSocial[]
  legalLinks: Array<{
    label: string
    href: string | null
    todo?: string
  }>
  unavailableLinks: Array<{
    label: string
    todo: string
  }>
  registrationNumberTodo: string
}

export const footerData: FooterData = {
  companyName: 'Nexus Trio Consulting Ltd',
  logoAlt: 'Nexus Trio Consulting Ltd',
  description: 'Financial, tax, payroll, and donor-compliance support for organisations across Kenya.',
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
    href: '#/contact#contact-main',
  },
  companyLinks: [
    { label: 'About', href: '#/about' },
    { label: 'Who We Serve', href: '#/who-we-serve' },
    { label: 'How We Work', href: '#/services#how-we-work' },
    { label: 'Testimonials', href: '#/#testimonials' },
    { label: 'FAQ', href: '#/faq' },
  ],
  services: services.map((service) => ({
    label: service.title,
    href: `#/services#service-${service.slug}`,
  })),
  contact: {
    email: {
      label: 'info@nexustrio.co.ke',
      href: 'mailto:info@nexustrio.co.ke',
    },
    phone: {
      label: '+254 700 000 000',
      href: 'tel:+254700000000',
    },
    address: 'Valley View Office Park, Westlands, Nairobi',
    hours: 'Monday–Friday, 8:00 AM–5:00 PM EAT',
  },
  socials: [
    { label: 'LinkedIn', platform: 'linkedin', href: null, todo: 'TODO: Add the official LinkedIn URL.' },
    { label: 'X', platform: 'x', href: null, todo: 'TODO: Add the official X URL.' },
    { label: 'Facebook', platform: 'facebook', href: null, todo: 'TODO: Add the official Facebook URL.' },
    { label: 'WhatsApp', platform: 'whatsapp', href: 'https://wa.me/254700000000' },
  ],
  legalLinks: [
    { label: 'Privacy Policy', href: null, todo: 'TODO: Add the verified Privacy Policy route or URL.' },
    { label: 'Terms', href: null, todo: 'TODO: Add the verified Terms route or URL.' },
  ],
  unavailableLinks: [
    { label: 'Blog', todo: 'TODO: Add a Blog link after a real blog route or URL is available.' },
  ],
  registrationNumberTodo: 'TODO: Add a verified company registration number if it should appear in the footer.',
}
