export interface LeaderProfile {
  role?: string
  name: string
  title?: string
  credential?: string
  bio?: string
  practice?: string
  image?: string
  containImage?: boolean
}

export interface StatItem {
  id: string
  label: string
  value: number | null
  prefix?: string
  suffix?: string
  description?: string
  decimals?: number
}

export interface SiteConfig {
  whatsappNumber: string | null
  whatsappMessage: string
  company: {
    name: string
    legalName: string
    registrationNumber: string | null
    email: string
    phone: {
      display: string
      href: string
    } | null
    whatsapp: {
      display: string
      href: string
      number: string
    } | null
    address: {
      physical: string | null
      postal: string | null
    } | null
    workingHours: string | null
  }
  socials: {
    linkedin: string | null
    x: string | null
    facebook: string | null
    whatsapp: string | null
  }
  legal: {
    privacyPolicyHref: string | null
    termsHref: string | null
  }
  stats: StatItem[]
  leaders: LeaderProfile[] | null
  accreditations: Array<{ id: string; label: string; number: string }> | null
  firmDetails: {
    registration: string | null
    background: string | null
    delivery: string | null
    mission: string | null
  } | null
  guarantees: Array<{ number: string; title: string; text: string }> | null
  whyUs: {
    metrics: Array<{ value: string; title: string; text: string }> | null
    pillars: Array<{ icon: string; title: string; text: string; result: string }> | null
    comparisons: Array<{ metric: string; details: string; status: string }> | null
  }
  advantages: Array<{
    type: string
    title: string
    text: string
    icon?: string
  }> | null
  sectorDetails: {
    points: Record<string, string[]> | null
    comparison: Array<[string, string, string, string]> | null
  }
}

const whatsappNumber = (import.meta.env.VITE_WHATSAPP_NUMBER || '').replace(/\D/g, '')
const configuredWhatsapp = /^\d{8,15}$/.test(whatsappNumber)
  ? {
      display: `+${whatsappNumber}`,
      href: `https://wa.me/${whatsappNumber}`,
      number: whatsappNumber,
    }
  : null
const whatsappMessage = 'Hello Nexus Trio Consulting, I would like to make an enquiry.'

/**
 * Centralised client-supplied facts.
 * When client facts (phone, WhatsApp, address, stats, leaders, registration)
 * are unconfirmed or unknown, values are explicitly set to null.
 * Public UI components must NOT render any section, row, or card whose value is null.
 */
export const siteConfig: SiteConfig = {
  whatsappNumber: configuredWhatsapp?.number ?? null,
  whatsappMessage,
  company: {
    name: 'Nexus Trio Consulting',
    legalName: 'Nexus Trio Consulting Ltd',
    registrationNumber: null,
    email: 'info@nexustrioconsultancy.co.ke',
    phone: null,
    whatsapp: configuredWhatsapp,
    address: null,
    workingHours: null,
  },
  socials: {
    linkedin: null,
    x: null,
    facebook: null,
    whatsapp: null,
  },
  legal: {
    privacyPolicyHref: null,
    termsHref: null,
  },
  stats: [
    {
      id: 'years',
      value: null,
      label: 'Years of experience',
    },
    {
      id: 'clients',
      value: null,
      label: 'Clients served',
    },
    {
      id: 'ngos',
      value: null,
      label: 'NGOs supported',
    },
    {
      id: 'returns',
      value: null,
      label: 'Returns filed',
    },
  ],
  leaders: null,
  accreditations: null,
  firmDetails: null,
  guarantees: null,
  whyUs: {
    metrics: null,
    pillars: null,
    comparisons: null,
  },
  advantages: null,
  sectorDetails: {
    points: null,
    comparison: null,
  },
}
