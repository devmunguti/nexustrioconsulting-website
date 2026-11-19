import { useEffect, useMemo, useState } from 'react'
import PageShell from '../components/layout/PageShell'
import PageMetadata from '../components/layout/PageMetadata'
import FaqAccordion from '../components/sections/FaqAccordion'
import FaqPageJsonLd from '../components/sections/FaqPageJsonLd'
import { faqs, faqContactDetails } from '../data/faqs'
import './FAQ.css'

const categories = [
  'All',
  'General',
  'Pricing and engagement',
  'NGOs and donor reporting',
  'Tax and compliance',
  'Getting started',
]

function FAQ() {
  const [category, setCategory] = useState('All')
  const [query, setQuery] = useState('')

  useEffect(() => {
    const resetFiltersForQuestionLink = () => {
      const questionId = window.location.hash.split('#').slice(2).join('#')
      if (!faqs.some((faq) => faq.id === questionId)) return
      setCategory('All')
      setQuery('')
    }

    window.addEventListener('hashchange', resetFiltersForQuestionLink)
    return () => window.removeEventListener('hashchange', resetFiltersForQuestionLink)
  }, [])

  const visibleFaqs = useMemo(() => {
    const searchTerm = query.trim().toLowerCase()

    return faqs.filter((faq) => {
      const matchesCategory = category === 'All' || faq.category === category
      const matchesQuery = !searchTerm
        || `${faq.question} ${faq.answer}`.toLowerCase().includes(searchTerm)
      return matchesCategory && matchesQuery
    })
  }, [category, query])

  return (
    <PageShell active="FAQ" hideHero>
      <PageMetadata
        title="Frequently Asked Questions | Nexus Trio Consulting"
        description="Answers to common questions about financial management, donor reporting, bookkeeping, payroll and tax compliance support in Kenya."
      />
      <FaqPageJsonLd items={visibleFaqs} />

      <section className="faq-page-hero">
        <div className="container faq-page-hero__inner">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <a href="#/">Home</a><span>/</span><b>FAQ</b>
          </nav>
          <h1>Frequently asked questions</h1>
          <p>Practical information about working with our financial, accounting and compliance team.</p>
          <label className="faq-page-search" htmlFor="faq-search">
            <span>Search questions</span>
            <input
              id="faq-search"
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search by topic or keyword"
            />
          </label>
        </div>
      </section>

      <section className="faq-page-content" aria-label="Frequently asked questions">
        <div className="container">
          <div className="faq-category-tabs" role="group" aria-label="Filter FAQs by category">
            {categories.map((item) => (
              <button
                type="button"
                key={item}
                className={category === item ? 'faq-category active' : 'faq-category'}
                aria-pressed={category === item}
                onClick={() => setCategory(item)}
              >
                {item}
              </button>
            ))}
          </div>

          <p className="faq-result-count" aria-live="polite">
            {visibleFaqs.length} {visibleFaqs.length === 1 ? 'question' : 'questions'} found
          </p>

          {visibleFaqs.length > 0 ? (
            <FaqAccordion
              items={visibleFaqs}
              title="Answers to common questions"
              subtitle="Choose a question to read more."
            />
          ) : (
            <div className="faq-page-empty">
              <p>No results found. Try another keyword or <a href="#/contact#contact-main">contact us</a>.</p>
            </div>
          )}
        </div>
      </section>

      <section className="faq-page-cta">
        <div className="container faq-page-cta__inner">
          <div>
            <h2>Still have a question?</h2>
            <p>Talk with our team about the support that fits your organisation.</p>
          </div>
          <div className="faq-page-cta__actions">
            <a className="gold-button" href="#/consultation">Book a consultation</a>
            <a href={faqContactDetails.phone.href}>{faqContactDetails.phone.label}</a>
            <a href={faqContactDetails.email.href}>{faqContactDetails.email.label}</a>
          </div>
        </div>
      </section>
    </PageShell>
  )
}

export default FAQ
