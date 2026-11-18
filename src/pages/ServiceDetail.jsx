import PageShell from '../components/layout/PageShell'
import { services } from '../data/services'

function ServiceDetail() {
  const slug = window.location.hash.split('/').pop()
  const service = services.find((item) => item.slug === slug)

  return (
    <PageShell active="Services" eyebrow="Services" title={service?.title || 'Service'} lead={service?.summary || 'Tailored financial and statutory advisory support.'}>
      <section className="inner-content"><div className="container service-detail-card"><h2>How we support you</h2><ul>{(service?.bullets || ['Initial diagnostic', 'Tailored delivery plan', 'Ongoing review and assurance']).map((item) => <li key={item}>✓ {item}</li>)}</ul><a className="gold-button" href="#/contact">Request a Consultation</a></div></section>
    </PageShell>
  )
}

export default ServiceDetail
