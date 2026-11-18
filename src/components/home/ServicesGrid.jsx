import { services } from '../../data/services'
import Card from '../ui/Card'
import SectionHeading from '../ui/SectionHeading'

function ServicesGrid() {
  return (
    <section className="section">
      <SectionHeading eyebrow="What we do" title="Services built for real outcomes" />
      <div className="grid">
        {services.map((service) => (
          <Card key={service.slug} title={service.title}>
            <p>{service.summary}</p>
            <ul>{service.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>
            <a href={`#/services/${service.slug}`}>Learn more</a>
          </Card>
        ))}
      </div>
    </section>
  )
}

export default ServicesGrid
