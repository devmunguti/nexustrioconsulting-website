import type { FaqEntry } from '../../data/faqs'
import { createFaqPageJsonLd } from '../../lib/faqPageSchema'

type FaqPageJsonLdProps = {
  items: FaqEntry[]
}

function FaqPageJsonLd({ items }: FaqPageJsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: createFaqPageJsonLd(items) }}
    />
  )
}

export default FaqPageJsonLd
