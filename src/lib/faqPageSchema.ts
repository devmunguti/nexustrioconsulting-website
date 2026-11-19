import type { FaqEntry } from '../data/faqs'

export function createFaqPageJsonLd(items: FaqEntry[]) {
  const plainText = (value: string) => value
    .replace(/<[^>]*>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()

  return JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: plainText(item.question),
      acceptedAnswer: {
        '@type': 'Answer',
        text: plainText(item.answer),
      },
    })),
  }).replace(/</g, '\\u003c')
}
