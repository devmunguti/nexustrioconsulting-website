export interface StatEntry {
  id: string
  value: number
  prefix?: string
  suffix?: string
  label: string
  description?: string
  decimals?: number
}

export const stats: StatEntry[] = [
  {
    id: 'years',
    value: 2,
    label: 'Years of experience',
  },
  {
    id: 'clients',
    value: 4,
    prefix: '+',
    label: 'Clients served',
  },
  {
    id: 'ngos',
    value: 2,
    label: 'NGOs supported',
  },
  {
    id: 'returns',
    value: 10,
    label: 'Returns filed',
  },
]
