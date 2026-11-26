import { useState } from 'react'
import Navbar from '../components/layout/Navbar'
import CtaRay from '../components/sections/CtaRay'
import Glossary from '../components/sections/Glossary'
import PageMetadata from '../components/layout/PageMetadata'
import { services } from '../data/services'
import { useInquiryForm } from '../hooks/useInquiryForm'
import { siteConfig } from '../data/siteConfig'

const faqs = [
  ['How do I register my company?', 'The process depends on the type of business and its owners. Contact us to discuss the setup support you need and the documents to prepare.'],
  ['I’m struggling with KRA. What should I do?', 'Keep any notice you received and note its response date. If you are unsure what it means, contact us to discuss the next steps for your situation.'],
]

function Services() {
  const [openFaq, setOpenFaq] = useState(0)
  const { status, error, message, handleSubmit } = useInquiryForm()
  const activeStats = siteConfig.stats.filter((s) => s.value !== null)

  return (
    <div className="services-page">
      <Navbar active="Services" />
      <PageMetadata
        title="Services | Nexus Trio Consulting"
        description="Explore NGO project finance, business registration, payroll, business advisory, accounting and tax service areas from Nexus Trio Consulting."
      />

      <main id="main-content">
        <section className="services-hero">
          <div className="container">
            <nav className="breadcrumb" aria-label="Breadcrumb"><a href="#/">Home</a><span>/</span><b>Our Services</b></nav>
            <h1>Comprehensive Financial &amp; <span>Statutory Advisory</span></h1>
            <i />
            <p>Accounting, tax, payroll, project finance and business advisory for organisations and business owners worldwide, with support for Kenyan requirements.</p>
            {activeStats.length > 0 && (
              <div className="services-metrics">
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

        <section className="catalog-section" id="service-catalog">
          <div className="container">
            <div className="catalog-heading">
              <span>How we can help</span>
              <h2>Services for organisations and business owners</h2>
              <i />
              <p>Explore our six specialized service areas designed for NGOs, businesses, and founders.</p>
            </div>
            <div className="catalog-grid">
              {services.map((service) => (
                <article className="catalog-card" id={`service-${service.slug}`} key={service.slug}>
                  <div className="catalog-icon">{service.icon}</div>
                  <h3>{service.headline}</h3>
                  <p>{service.summary}</p>
                  <a href={`#/services/${service.slug}`}>View service <b>→</b></a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <Glossary />

        <section className="workflow-section" id="how-we-work">
          <div className="container">
            <div className="workflow-heading"><span>What to expect</span><h2>How it works</h2></div>
            <div className="workflow-grid">
              {[
                ['01', 'Consultation', 'We listen to what you need and discuss the right next step.'],
                ['02', 'Documents', 'We agree what information is needed for the work.'],
                ['03', 'Done', 'We complete the agreed work and explain the outcome.'],
              ].map(([number, title, text]) => <article key={title}><div>{number}</div><h3>{title}</h3><p>{text}</p></article>)}
            </div>
          </div>
        </section>

        <section className="services-faq-section" id="faq-section">
          <div className="container services-faq-grid">
            <div>
              <div className="faq-heading"><span>Answers to common questions</span><h2>Frequently Asked Questions</h2><i /><p>Practical first steps for common business and tax questions.</p></div>
              <div className="faq-list">
                {faqs.map(([question, answer], index) => (
                  <article className={openFaq === index ? 'faq-item open' : 'faq-item'} key={question}>
                    <button type="button" onClick={() => setOpenFaq(openFaq === index ? -1 : index)}><span>{question}</span><b>{openFaq === index ? '⌃' : '⌄'}</b></button>
                    {openFaq === index && <p>{answer}</p>}
                  </article>
                ))}
              </div>
            </div>
            <div className="services-contact-card" id="consultation-booking">
              <span className="callback-badge"><i />Fast Callback</span>
              <h3>Book a consultation</h3>
              <p>Let&apos;s discuss your statutory needs or donor compliance roadmap. No obligation.</p>
              {status === 'success' ? <div className="form-notice form-success" role="status"><strong>Request sent</strong><p>{message}</p></div> : (
                <form onSubmit={(event) => handleSubmit(event, { type: 'services' })}>
                  <p className="form-notice" role="note">Your inquiry will be emailed through Resend and is not stored on this website. Do not include passwords or confidential financial documents.</p>
                  {error && <p className="form-error" id="services-form-error" role="alert">{error} You can also email <a href={`mailto:${siteConfig.company.email}`}>{siteConfig.company.email}</a>.</p>}
                  <label htmlFor="services-name">Full Name <span aria-hidden="true">*</span></label>
                  <input
                    id="services-name"
                    required
                    aria-required="true"
                    aria-invalid={Boolean(error)}
                    aria-describedby={error ? 'services-form-error' : undefined}
                    name="name"
                    placeholder="Your name"
                  />
                  <label htmlFor="services-phone">Phone Number (include country code) <span aria-hidden="true">*</span></label>
                  <input
                    id="services-phone"
                    required
                    aria-required="true"
                    aria-invalid={Boolean(error)}
                    aria-describedby={error ? 'services-form-error' : undefined}
                    name="phone"
                    placeholder="+country code and number"
                  />
                  <label htmlFor="services-email">Corporate / Official Email <span aria-hidden="true">*</span></label>
                  <input
                    id="services-email"
                    required
                    aria-required="true"
                    aria-invalid={Boolean(error)}
                    aria-describedby={error ? 'services-form-error' : undefined}
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                  />
                  <label htmlFor="services-service">Service Required <span aria-hidden="true">*</span></label>
                  <select
                    id="services-service"
                    required
                    aria-required="true"
                    aria-invalid={Boolean(error)}
                    aria-describedby={error ? 'services-form-error' : undefined}
                    name="service"
                    defaultValue=""
                  >
                    <option value="" disabled>Select an area of expertise</option>
                    <option>NGO and Project Financial Management</option>
                    <option>Business Registration and Corporate Services</option>
                    <option>Payroll and HR Administration</option>
                    <option>Business Advisory and Consultancy</option>
                    <option>Accounting and Financial Management</option>
                    <option>Tax Advisory and Compliance</option>
                  </select>
                  <label htmlFor="services-message">Specific Requirements or Timelines</label>
                  <textarea
                    id="services-message"
                    aria-invalid={Boolean(error)}
                    aria-describedby={error ? 'services-form-error' : undefined}
                    name="message"
                    rows={3}
                    placeholder="Briefly describe your entity, upcoming grant, tax issue or preferred onboarding date..."
                  />
                  <label className="form-consent" htmlFor="services-consent">
                    <input
                      id="services-consent"
                      required
                      aria-required="true"
                      aria-invalid={Boolean(error)}
                      aria-describedby={error ? 'services-form-error' : undefined}
                      type="checkbox"
                      name="consent"
                      value="true"
                    />
                    <span>I agree that Nexus Trio can use these details to respond to my enquiry.</span>
                  </label>
                  <button type="submit" className="gold-button" disabled={status === 'sending'}>
                    {status === 'sending' ? 'Sending…' : 'Send consultation request'} <span aria-hidden="true">→</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>

        <section className="cta-section">
          <CtaRay />
          <div className="container cta-copy"><span>Let’s talk about your needs</span><h2>Looking for support with your organisation or business?</h2><i /><p>Book a consultation or email us to start a conversation.</p><div><a className="gold-button" href="#/consultation">Book a consultation</a><a className="phone-button" href="mailto:info@nexustrioconsultancy.co.ke">Email us</a></div></div>
        </section>
      </main>
    </div>
  )
}

export default Services
