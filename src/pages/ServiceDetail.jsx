import PageShell from '../components/layout/PageShell'
import PageMetadata from '../components/layout/PageMetadata'
import FaqAccordion from '../components/sections/FaqAccordion'
import FaqPageJsonLd from '../components/sections/FaqPageJsonLd'
import Glossary from '../components/sections/Glossary'
import { services } from '../data/services'
import { faqs } from '../data/faqs'

function ServiceDetail() {
  const routePath = window.location.hash.split('#')[1] || ''
  const slug = routePath.split('/').pop()
  const service = services.find((item) => item.slug === slug)
  const serviceFaqs = service ? faqs.filter((faq) => faq.serviceSlugs?.includes(service.slug)) : []
  const description = service?.summary || 'Professional advisory and compliance services from Nexus Trio Consulting.'

  return (
    <PageShell active="Services" eyebrow="Services" title={service?.headline || 'Service'} lead={description}>
      <PageMetadata
        title={`${service?.headline || 'Service'} | Nexus Trio Consulting`}
        description={description}
      />
      <section className="inner-content">
        <div className="container service-detail-card">
          <h2>{service ? service.title : 'Service details'}</h2>
          {service?.summary && <p className="service-lead">{service.summary}</p>}
          {service?.bullets && (
            <ul className="service-bullets">
              {service.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          )}
          <a className="gold-button" href="#/consultation">Book a consultation</a>
        </div>
      </section>
      <Glossary />
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
