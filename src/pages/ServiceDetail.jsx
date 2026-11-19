import PageShell from '../components/layout/PageShell'
import PageMetadata from '../components/layout/PageMetadata'
import FaqAccordion from '../components/sections/FaqAccordion'
import FaqPageJsonLd from '../components/sections/FaqPageJsonLd'
import { services } from '../data/services'
import { faqs } from '../data/faqs'

function ServiceDetail() {
  const routePath = window.location.hash.split('#')[1] || ''
  const slug = routePath.split('/').pop()
  const service = services.find((item) => item.slug === slug)
  const serviceFaqs = service ? faqs.filter((faq) => faq.serviceSlugs?.includes(service.slug)) : []
  const description = service?.summary || 'Tailored financial and statutory advisory support.'

  return (
    <PageShell active="Services" eyebrow="Services" title={service?.title || 'Service'} lead={description}>
      <PageMetadata
        title={`${service?.title || 'Service'} | Nexus Trio Consulting`}
        description={description}
      />
      <section className="inner-content"><div className="container service-detail-card"><h2>How we support you</h2><ul>{(service?.bullets || ['Initial diagnostic', 'Tailored delivery plan', 'Ongoing review and assurance']).map((item) => <li key={item}>✓ {item}</li>)}</ul><a className="gold-button" href="#/contact">Request a Consultation</a></div></section>
      {serviceFaqs.length > 0 && (
        <>
          <FaqPageJsonLd items={serviceFaqs} />
          <section className="service-detail-faq">
            <div className="container">
              <FaqAccordion
                items={serviceFaqs}
                title="Frequently asked questions"
                subtitle={`Answers to common questions about ${service.title}.`}
              />
            </div>
          </section>
        </>
      )}
    </PageShell>
  )
}

export default ServiceDetail
