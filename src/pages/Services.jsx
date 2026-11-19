import { useState } from 'react'
import Navbar from '../components/layout/Navbar'
import CtaRay from '../components/sections/CtaRay'
import { services } from '../data/services'

const faqs = [
  ['Which KRA filings and statutory taxes do you handle?', 'We handle PAYE, SHIF, NSSF, Affordable Housing Levy, VAT, eTIMS, Corporate Income Tax, withholding tax and annual KRA returns.'],
  ['Can you prepare donor-compliant financial reports for international grants?', 'Yes. We support USAID, EU, FCDO, Global Fund and UN-funded organizations with budgets, variance reviews, currency controls and audit-ready documentation.'],
  ['How do you structure your service pricing and outsourced retainers?', 'We offer fixed monthly retainers, modular project fees and fully outsourced finance packages based on transaction volume, headcount and reporting needs.'],
  ['Do you assist with new company incorporation and eTIMS setup in Kenya?', 'Yes. We handle BRS incorporation, CR12 retrieval, KRA PIN creation, NSSF and SHIF registration, permits and eTIMS deployment.'],
  ['What accounting software and cloud platforms do you support?', 'We support QuickBooks Online, Xero, Sage Business Cloud, Zoho Books, Microsoft Dynamics 365 and specialized grant systems.'],
]

function Services() {
  const [openFaq, setOpenFaq] = useState(0)
  const [submitted, setSubmitted] = useState(false)

  return (
    <div className="services-page">
      <Navbar active="Services" />

      <main>
        <section className="services-hero">
          <div className="container">
            <nav className="breadcrumb" aria-label="Breadcrumb"><a href="#/">Home</a><span>/</span><b>Our Services</b></nav>
            <h1>Comprehensive Financial &amp; <span>Statutory Advisory</span></h1>
            <i />
            <p>Robust accounting, tax advisory, regulatory compliance, and strategic financial management tailored for NGOs, growing enterprises, and established institutions across Kenya.</p>
            <div className="services-metrics">
              <div><strong>100%</strong><span>KRA Statutory Accuracy</span></div>
              <div><strong>KSh 1.2B+</strong><span>Donor Funds Monitored</span></div>
              <div><strong>350+</strong><span>Incorporated Entities</span></div>
              <div><strong>24/7</strong><span>eTIMS Compliance Support</span></div>
            </div>
          </div>
        </section>

        <section className="catalog-section" id="service-catalog">
          <div className="container">
            <div className="catalog-heading"><span>Practice Areas &amp; Expertise</span><h2>End-to-End Financial &amp; Statutory Solutions</h2><i /><p>Every business lifecycle phase demands precision. Explore our core service capabilities delivered by experienced consultants in Nairobi.</p></div>
            <div className="catalog-grid">
              {services.map((service) => (
                <article className="catalog-card" id={`service-${service.slug}`} key={service.slug}>
                  <div className="catalog-icon">{service.icon}</div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <ul>{service.bullets.map((bullet) => <li key={bullet}><span>✓</span>{bullet}</li>)}</ul>
                  <a href="#consultation-booking">View service <b>→</b></a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="workflow-section" id="how-we-work">
          <div className="container">
            <div className="workflow-heading"><span>Our Working Protocol</span><h2>How We Engage With Your Organization</h2></div>
            <div className="workflow-grid">
              {[
                ['01', 'Discovery & Diagnostic', 'We review your ledgers, KRA iTax status, donor terms and corporate documentation.'],
                ['02', 'Custom Scope & Plan', 'We tailor a retainer or project schedule around your deadlines and statutory calendar.'],
                ['03', 'Fiduciary Execution', 'We process the books, payroll, eTIMS transactions, filings and donor reporting.'],
                ['04', 'Review & Assurance', 'We deliver management briefings, audit support and forward tax optimization.'],
              ].map(([number, title, text]) => <article key={title}><div>{number}</div><h3>{title}</h3><p>{text}</p></article>)}
            </div>
          </div>
        </section>

        <section className="services-faq-section" id="faq-section">
          <div className="container services-faq-grid">
            <div>
              <div className="faq-heading"><span>Answers to Common Inquiries</span><h2>Frequently Asked Questions</h2><i /><p>Clear insights regarding statutory timelines, compliance scopes, donor grants and engagement terms.</p></div>
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
              <h3>Book a Free Consultation</h3>
              <p>Let&apos;s discuss your statutory needs or donor compliance roadmap. No obligation.</p>
              {submitted ? <div className="form-success">Thank you. A senior consultant will contact you within 2 business hours.</div> : (
                <form onSubmit={(event) => { event.preventDefault(); setSubmitted(true) }}>
                  <label>Full Name *<input required name="name" placeholder="e.g. David Mwangi" /></label>
                  <label>Phone Number *<input required name="phone" placeholder="+254 700 000 000" /></label>
                  <label>Corporate / Official Email *<input required type="email" name="email" placeholder="dmwangi@company.co.ke" /></label>
                  <label>Service Required *<select required defaultValue=""><option value="" disabled>Select an area of expertise</option><option>NGO &amp; Project Financial Management</option><option>Business Registration &amp; Corporate Services</option><option>Payroll &amp; HR Administration</option><option>Business Advisory &amp; Financial Modelling</option><option>Outsourced Accounting &amp; Bookkeeping</option><option>Tax Advisory, eTIMS &amp; KRA Compliance</option></select></label>
                  <label>Specific Requirements or Timelines<textarea name="message" rows="3" placeholder="Briefly describe your entity, upcoming grant, tax issue or preferred onboarding date..." /></label>
                  <button type="submit" className="gold-button">Send Consultation Request <b>→</b></button>
                  <small>♙ Strict NDA confidentiality guaranteed. Your data is protected.</small>
                </form>
              )}
            </div>
          </div>
        </section>

        <section className="cta-section">
          <CtaRay />
          <div className="container cta-copy"><span>Ready for Complete Peace of Mind?</span><h2>Need Help With Tax Compliance or <b>Donor Reporting?</b></h2><i /><p>Speak with a certified consultant today and safeguard your financial integrity with tailored, rigorous oversight.</p><div><a className="gold-button" href="#/consultation">Book a Free Consultation</a><a className="phone-button" href="tel:+254700000000">☎ Call +254 700 000 000</a></div></div>
        </section>
      </main>
    </div>
  )
}

export default Services
