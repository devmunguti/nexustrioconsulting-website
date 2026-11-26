import Navbar from '../components/layout/Navbar'
import CtaRay from '../components/sections/CtaRay'
import ImagePlaceholder from '../components/ui/ImagePlaceholder'
import SectionHeading from '../components/ui/SectionHeading'
import PageMetadata from '../components/layout/PageMetadata'
import { services } from '../data/services'
import { siteConfig } from '../data/siteConfig'

function About() {
  const activeStats = siteConfig.stats.filter((s) => s.value !== null)
  const leaders = siteConfig.leaders ?? []
  const accreditations = siteConfig.accreditations ?? []
  const guarantees = siteConfig.guarantees ?? []

  return (
    <div className="about-page">
      <Navbar active="About Us" />
      <PageMetadata
        title="About | Nexus Trio Consulting"
        description="Learn about Nexus Trio Consulting and its accounting, tax, payroll, registration and business advisory services for clients worldwide."
      />

      <main id="main-content" tabIndex="-1">
        <section className="about-hero">
          <div className="container">
            <nav className="breadcrumb" aria-label="Breadcrumb"><a href="#/">Home</a><span>/</span><b>About Us</b></nav>
            <div className="about-hero-grid">
              <div>
                <h1>About <span>Nexus Trio Consulting</span></h1>
                <p>Nexus Trio Consulting provides accounting, tax, payroll, registration and business advisory services for NGOs, SMEs, startups and business owners worldwide.</p>
              </div>
              <blockquote><span>Our approach</span><p>We start by understanding your needs, then agree on the support and next steps.</p></blockquote>
            </div>
            {activeStats.length > 0 && (
              <div className="about-metrics">
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

        <section className="philosophy-section">
          <div className={`container philosophy-grid ${!siteConfig.firmDetails ? 'philosophy-grid--full' : ''}`}>
            <div className="philosophy-copy">
              <SectionHeading
                className="philosophy-copy__heading"
                eyebrow="Our services"
                title={<>Support across six <span className="philosophy-highlight">service areas</span></>}
                description="Accounting, tax, payroll, project finance and business advisory support for organisations and business owners worldwide."
              />
              <div className="pillar-list">
                {services.map((service, index) => (
                  <article key={service.slug}>
                    <div>{String(index + 1).padStart(2, '0')}</div>
                    <div>
                      <h3>{service.title}</h3>
                      <p>{service.summary}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
            {siteConfig.firmDetails && (
              <aside className="three-pillars">
                <div className="pillar-emblem">N</div>
                <h3>Firm details</h3>
                {siteConfig.firmDetails.background && <span>{siteConfig.firmDetails.background}</span>}
                <div className="pillar-rows">
                  {siteConfig.firmDetails.registration && <div><p>Registration details</p><b>{siteConfig.firmDetails.registration}</b></div>}
                  {siteConfig.firmDetails.delivery && <div><p>Service delivery details</p><b>{siteConfig.firmDetails.delivery}</b></div>}
                </div>
                {siteConfig.firmDetails.mission && <blockquote>{siteConfig.firmDetails.mission}</blockquote>}
              </aside>
            )}
          </div>
        </section>

        {guarantees.length > 0 && (
          <section className="guarantees-section">
            <div className="container">
              <div className="about-section-heading"><span>Why choose us</span><h2>What makes Nexus Trio the right fit?</h2></div>
              <div className="guarantees-grid">
                {guarantees.map((item) => <article key={item.title}><div>{item.number}</div><h3>{item.title}</h3><p>{item.text}</p></article>)}
              </div>
            </div>
          </section>
        )}

        {leaders.length > 0 && (
          <section className="leadership-section">
            <div className="container">
              <div className="leadership-heading"><div><span>Our team</span><h2>Meet the team</h2></div></div>
              <div className="leader-grid">
                {leaders.map((leader) => (
                  <article className="leader-card" key={leader.name}>
                    <div className="leader-portrait">
                      {leader.image ? (
                        <img
                          className={`leader-image${leader.containImage ? ' leader-image--contain' : ''}`}
                          src={leader.image}
                          alt={leader.name}
                          width="600"
                          height="800"
                          loading="lazy"
                          decoding="async"
                        />
                      ) : (
                        <ImagePlaceholder label="Team portrait" searchTerms="professional portrait of a Nexus Trio team member" aspectRatio="4 / 3" altText={`Portrait of ${leader.name}`} className="image-placeholder--portrait" />
                      )}
                      {leader.role && <span>{leader.role}</span>}
                    </div>
                    <div className="leader-info">
                      <h3>{leader.name}</h3>
                      {leader.title && <b>{leader.title}</b>}
                      {leader.credential && <em>{leader.credential}</em>}
                      {leader.bio && <p>{leader.bio}</p>}
                    </div>
                    {leader.practice && <div className="leader-footer"><span>{leader.practice}</span></div>}
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}

        {accreditations.length > 0 && (
          <section className="accreditations-section">
            <div className="container">
              <div className="accreditation-grid">
                {accreditations.map((item, index) => (
                  <div key={item.id}><b>{String(index + 1).padStart(2, '0')}</b><strong>{item.number}</strong><span>{item.label}</span></div>
                ))}
              </div>
            </div>
          </section>
        )}

        <section className="cta-section" id="contact">
          <CtaRay />
          <div className="container cta-copy"><span>Speak with our team</span><h2>Would you like to discuss your support needs?</h2><p>Book a consultation or email our team.</p><div><a className="gold-button" href="#/consultation">Book a consultation</a><a className="phone-button" href={`mailto:${siteConfig.company.email}`}>Email us</a></div></div>
        </section>
      </main>
    </div>
  )
}

export default About
