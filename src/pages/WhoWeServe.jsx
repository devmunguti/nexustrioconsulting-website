import PageShell from '../components/layout/PageShell'
import TestimonialSection from '../components/sections/TestimonialSection'
import PageMetadata from '../components/layout/PageMetadata'
import { siteConfig } from '../data/siteConfig'

const sectors = [
  {
    number: '01',
    category: 'NGOs',
    title: 'NGOs and project teams',
    text: 'Support for NGOs and projects with financial management needs.',
    icon: '01',
  },
  {
    number: '02',
    category: 'SMEs',
    title: 'Small and medium-sized businesses',
    text: 'Accounting, tax, payroll and advisory support for SMEs.',
    icon: '02',
  },
  {
    number: '03',
    category: 'STARTUPS',
    title: 'Startups and business owners',
    text: 'Support for people starting or running a business.',
    icon: '03',
  },
]

function WhoWeServe() {
  const activeStats = siteConfig.stats.filter((s) => s.value !== null)
  const sectorPoints = siteConfig.sectorDetails.points
  const sectorComparison = siteConfig.sectorDetails.comparison

  return (
    <PageShell active="Who We Serve" hideHero>
      <PageMetadata
        title="Who We Help | Nexus Trio Consulting"
        description="Nexus Trio Consulting supports NGOs, SMEs, startups and business owners worldwide with financial and business services."
      />
      <section className="who-hero">
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb"><a href="#/">Home</a><span>/</span><b>Who We Serve</b></nav>
          <div className="who-hero-grid">
            <div>
              <h1>Who we help</h1>
              <p>Nexus Trio supports NGOs, SMEs, startups and individual business owners around the world.</p>
            </div>
          </div>
          {activeStats.length > 0 && (
            <div className="who-metrics">
              {activeStats.map((stat) => (
                <div key={stat.id}>
                  <strong>{stat.prefix}{stat.value}{stat.suffix}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="who-sectors">
        <div className="container">
          <div className="who-section-heading">
            <span>Who we help</span>
            <h2>Support for your organisation or business</h2>
            <p>Targeted accounting, tax, payroll and advisory support shaped around your entity.</p>
          </div>

          {sectors.map((sector) => {
            const points = sectorPoints?.[sector.category] ?? []
            const hasPanel = points.length > 0

            return (
              <article className={`sector-section ${!hasPanel ? 'sector-section--single' : ''}`} key={sector.title}>
                <div className="sector-copy">
                  <div className="sector-label"><span>{sector.category}</span><i /><small>{sector.number}</small></div>
                  <h3>{sector.title}</h3>
                  <p>{sector.text}</p>
                  {points.length > 0 && (
                    <div className="sector-points">
                      {points.slice(0, 2).map((point) => <div key={point}><b>{sector.icon}</b><span>{point}</span></div>)}
                    </div>
                  )}
                  <a href="#/services">Explore services →</a>
                </div>
                {hasPanel && (
                  <aside className="sector-panel">
                    <span>Service information</span>
                    <h3>Key focus areas</h3>
                    <ul>
                      {points.map((point) => <li key={point}><i>✓</i>{point}</li>)}
                    </ul>
                  </aside>
                )}
              </article>
            )
          })}
        </div>
      </section>

      {sectorComparison && sectorComparison.length > 0 && (
        <section className="sector-scope">
          <div className="container">
            <div className="who-section-heading"><span>Service guide</span><h2>Details for each audience</h2></div>
            <div className="comparison-table" role="table" aria-label="Sector comparison">
              <div className="comparison-row comparison-head" role="row"><span>Service area</span><span>NGOs</span><span>SMEs and startups</span><span>Business owners</span></div>
              {sectorComparison.map((row) => (
                <div className="comparison-row" role="row" key={row[0]}>{row.map((cell, index) => <span role={index === 0 ? 'rowheader' : 'cell'} key={index}>{cell}</span>)}</div>
              ))}
            </div>
          </div>
        </section>
      )}

      <TestimonialSection />

      <section className="who-cta">
        <div className="container">
          <span>Let’s talk about your needs</span>
          <h2>Find the support that fits your organisation or business.</h2>
          <p>Book a consultation or email us.</p>
          <div><a href={`mailto:${siteConfig.company.email}`}>Email us</a><a href="#/consultation">Book a consultation</a></div>
        </div>
      </section>
    </PageShell>
  )
}

export default WhoWeServe
