import { useEffect, useState } from 'react'
import { Plus } from 'lucide-react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/accordion'
import type { FaqEntry } from '../../data/faqs'
import './FaqAccordion.css'

type FaqAccordionProps = {
  items: FaqEntry[]
  defaultOpenId?: string
  allowMultiple?: boolean
  title?: string
  subtitle?: string
}

function getInitialOpenId(items: FaqEntry[], defaultOpenId?: string) {
  const hashId = window.location.hash.split('#').slice(2).join('#')
  if (items.some((item) => item.id === hashId)) return hashId
  return items.some((item) => item.id === defaultOpenId) ? defaultOpenId : ''
}

function getRouteHash() {
  return window.location.hash.split('#').slice(0, 2).join('#') || '#/'
}

function updateQuestionHash(questionId: string) {
  const routeHash = getRouteHash()
  const nextHash = questionId ? `${routeHash}#${encodeURIComponent(questionId)}` : routeHash
  window.history.replaceState(null, '', nextHash)
}

function FaqItems({ items }: Pick<FaqAccordionProps, 'items'>) {
  return (
    <>
      {items.map((item) => (
        <AccordionItem value={item.id} id={item.id} key={item.id}>
          <AccordionTrigger>
            <span>{item.question}</span>
            <Plus className="faq-accordion__icon" aria-hidden="true" focusable="false" />
          </AccordionTrigger>
          <AccordionContent>
            <p>{item.answer}</p>
          </AccordionContent>
        </AccordionItem>
      ))}
    </>
  )
}

function FaqAccordion({
  items,
  defaultOpenId,
  allowMultiple = false,
  title,
  subtitle,
}: FaqAccordionProps) {
  const [singleValue, setSingleValue] = useState(() => getInitialOpenId(items, defaultOpenId))
  const [multipleValue, setMultipleValue] = useState<string[]>(() => {
    const initialId = getInitialOpenId(items, defaultOpenId)
    return initialId ? [initialId] : []
  })

  useEffect(() => {
    const syncOpenQuestion = () => {
      const questionId = window.location.hash.split('#').slice(2).join('#')
      if (!questionId) return
      setSingleValue(questionId)
      setMultipleValue([questionId])
    }

    window.addEventListener('hashchange', syncOpenQuestion)
    return () => window.removeEventListener('hashchange', syncOpenQuestion)
  }, [])

  const handleSingleValueChange = (value: string) => {
    setSingleValue(value)
    updateQuestionHash(value)
  }

  const handleMultipleValueChange = (values: string[]) => {
    setMultipleValue(values)
    updateQuestionHash(values[values.length - 1] ?? '')
  }

  return (
    <section className="faq-accordion">
      {(title || subtitle) && (
        <header className="faq-accordion__heading section-heading">
          {title && <h2>{title}</h2>}
          {subtitle && <p>{subtitle}</p>}
        </header>
      )}
      {allowMultiple ? (
        <Accordion type="multiple" value={multipleValue} onValueChange={handleMultipleValueChange}>
          <FaqItems items={items} />
        </Accordion>
      ) : (
        <Accordion type="single" collapsible value={singleValue} onValueChange={handleSingleValueChange}>
          <FaqItems items={items} />
        </Accordion>
      )}
    </section>
  )
}

export default FaqAccordion
