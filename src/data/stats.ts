import { siteConfig } from './siteConfig'

export interface StatEntry {
  id: string
  value: number | null
  prefix?: string
  suffix?: string
  label: string
  description?: string
  decimals?: number
}

export const stats: StatEntry[] = siteConfig.stats

