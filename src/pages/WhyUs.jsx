import PageShell from '../components/layout/PageShell'
import TestimonialSection from '../components/sections/TestimonialSection'
import PageMetadata from '../components/layout/PageMetadata'
import TypedHeading from '../components/ui/TypedHeading'
import { siteConfig } from '../data/siteConfig'

function WhyUs() {
  const metrics = siteConfig.whyUs.metrics ?? []
  const pillars = siteConfig.whyUs.pillars ?? []
  const comparisons = siteConfig.whyUs.comparisons ?? []

  return (
    <PageShell active="Why Us" hideHero>
      <PageMetadata
        title="Why Work With Us | Nexus Trio Consulting"
        description="Learn about Nexus Trio Consulting's service approach and client-first commitment to accounting, tax and compliance."
      />
      <section className="why-hero">
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb"><a href="#/">Home</a><span>/</span><b>Why Us</b></nav>
          <div className="why-hero-copy">
            <span>Why choose us</span>
            <TypedHeading>Support shaped around your needs</TypedHeading>
            <p>Practical, dependable financial and business advisory support shaped around the needs of your organisation.</p>
          </div>
        </div>
      </section>

      {metrics.length > 0 && (
        <section className="why-metrics-section">
          <div className="container why-metrics">
            {metrics.map((item) => (
              <article key={item.title}><div><strong>{item.value}</strong><span>◷</span></div><h2>{item.title}</h2><p>{item.text}</p></article>
            ))}
          </div>
        </section>
      )}

      {pillars.length > 0 && (
        <section className="pillars-section">
          <div className="container">
            <div className="why-section-heading"><span>Reasons to choose us</span><h2>What you can expect</h2><i /></div>
            <div className="pillars-grid">
              {pillars.map((item, index) => (
                <article key={item.title}>
                  <div className="pillar-card-head"><div>{item.icon}</div><span>{String(index + 1).padStart(2, '0')}</span></div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <div className="pillar-result"><span>{item.result}</span><b>✓</b></div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {comparisons.length > 0 && (
        <section className="comparison-section">
          <div className="container">
            <div className="why-section-heading"><span>How we work</span><h2>Service standards</h2><i /></div>
            <div className="why-comparison">
              <div className="why-comparison-head"><span>Topic</span><span>Standard</span><span>Coverage</span></div>
              {comparisons.map((row) => (
                <div className="why-comparison-row" key={row.metric}>
                  <span>{row.metric}</span>
                  <span>{row.details}</span>
                  <span>{row.status}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <TestimonialSection />

      <section className="why-cta">
        <div className="container"><span>Let’s talk</span><h2>Would you like to discuss your support needs?</h2><p>Book a consultation or email us.</p><div><a className="gold-button" href="#/consultation">Book a consultation</a><a className="phone-button" href={`mailto:${siteConfig.company.email}`}>Email us</a></div></div>
      </section>
    </PageShell>
  )
}

export default WhyUs
