import { useState } from 'react'
import Navbar from '../components/layout/Navbar'
import CtaRay from '../components/sections/CtaRay'
import StatsSection from '../components/sections/StatsSection'
import TestimonialSection from '../components/sections/TestimonialSection'
import PageMetadata from '../components/layout/PageMetadata'
import Button from '../components/ui/Button'
import ImagePlaceholder from '../components/ui/ImagePlaceholder'
import SectionHeading from '../components/ui/SectionHeading'
import { Calculator, FileCheck2, HandCoins, Lightbulb, ReceiptText, Users } from 'lucide-react'
import jacobPortrait from '../assets/jacob-kioko.jpeg'
import nicholasPortrait from '../assets/nicholas-muasa.jpeg'
import companyLogo from '../assets/nexus-trio-logo-landscape.png'
import { useInquiryForm } from '../hooks/useInquiryForm'
import { services as servicesData } from '../data/services'
import { siteConfig } from '../data/siteConfig'

const services = [
  [HandCoins, 'ngo-project-financial-management', 'Making every donor shilling count'],
  [FileCheck2, 'business-registration-corporate-services', 'Start legally. Stay compliant.'],
  [Users, 'payroll-hr-administration', 'Pay your people right, on time, every time'],
  [Lightbulb, 'business-advisory-consultancy', 'Smart decisions for growing businesses'],
  [Calculator, 'accounting-financial-management', 'Know your numbers. Run your business with confidence.'],
  [ReceiptText, 'tax-advisory-compliance', 'Pay what you owe, not a shilling more'],
]

const audiences = [
  ['NGOs', 'NGOs and community projects', 'Financial and project support shaped around your organisation’s needs.', 'Explore Services'],
  ['SMEs', 'Small and medium-sized businesses', 'Practical support with the day-to-day numbers and obligations of running a business.', 'Explore Services'],
  ['Startups', 'Startups and founders', 'Support as you set up, organise records and plan your next steps.', 'Explore Services'],
]

const faqs = [
  ['How do I register my company?', 'The steps depend on the type of business and its owners. Contact us to discuss the setup support you need and the documents to prepare.'],
  ['I’m struggling with KRA. What should I do?', 'Keep any KRA notice and note its response date. If you are unsure what it means, contact us so we can discuss the next steps for your situation.'],
  ['Do you work with NGOs and donor-funded projects?', 'NGO and project financial management is one of our service areas. Contact us to discuss the records and reporting your project needs.'],
  ['Can you help a new business get started?', 'Business registration and corporate services are among our service areas. The right next steps depend on your business structure and needs.'],
]

function Home() {
  const [openFaq, setOpenFaq] = useState(0)
  const { status, error, message, handleSubmit } = useInquiryForm()

  return (
    <div className="home-page">
      <Navbar active="Home" />
      <PageMetadata
        title="Nexus Trio Consulting | Accounting, Tax and Business Support"
        description="Accounting, tax, payroll, NGO project financial management, registration and business advisory support for organisations and business owners worldwide."
      />

      <main id="main-content" tabIndex="-1">
        <section className="hero-section" id="home">
          <div className="container hero-card">
            <div className="hero-copy">
              <p className="eyebrow hero-typewriter">
                <span className="hero-typewriter__animated" aria-hidden="true">Kenya Regulatory &amp; Statutory Specialists</span>
                <span className="hero-typewriter__accessible">Kenya Regulatory &amp; Statutory Specialists</span>
              </p>
              <h1>Financial clarity for <span>NGOs and growing</span> businesses</h1>
              <p className="hero-lead">Accounting, tax, payroll, project finance and business advisory support for organisations and business owners worldwide.</p>
              <div className="hero-actions">
                <Button href="#/consultation">Book a Consultation <span>→</span></Button>
                <Button href="#/#services" variant="outline">View Services</Button>
              </div>
            </div>
            <div className="hero-image hero-image--logo">
              <div className="hero-image__logo-frame">
                <img
                  className="hero-image__logo"
                  src={companyLogo}
                  alt="Nexus Trio Consulting Ltd logo"
                  width="750"
                  height="220"
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="trust-strip">
          <p>Support for NGOs, SMEs, startups and business owners worldwide</p>
          <div className="container trust-items">
            <span>NGOs</span><span>SMEs</span><span>Startups</span><span>Business owners</span>
          </div>
        </section>

        <StatsSection />

        <section className="section intro-section" id="about">
          <div className="container">
            <div className="section-heading"><h2>Clear support for <span>your business needs</span></h2><i /></div>
            <div className="intro-grid">
              <div className="intro-copy">
                <h3>Financial and business support, explained clearly</h3>
                <p>Nexus Trio Consulting supports NGOs, SMEs, startups and business owners with accounting, tax, payroll, registration and advisory services.</p>
                <p>We work with clients worldwide. Tell us what you are trying to do, and we can discuss the support that fits.</p>
                <div className="intro-actions"><Button href="#/about">About Our Firm</Button></div>
              </div>
              <div className="arch-gallery">
                <div className="arch arch-one"><img src={jacobPortrait} alt="Portrait of Jacob Kioko" width="1232" height="1277" loading="lazy" decoding="async" /></div>
                <div className="arch arch-two"><img src={nicholasPortrait} alt="Portrait of Nicholas Muasa" width="1103" height="1426" loading="lazy" decoding="async" /></div>
                <div className="brand-logo-badge">
                  <img src={companyLogo} alt="Nexus Trio Consulting Ltd logo" width="750" height="220" loading="lazy" decoding="async" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section services-section" id="services">
          <div className="container">
            <div className="services-panel">
              <div className="panel-heading">
                <SectionHeading
                  className="panel-heading__copy"
                  eyebrow="What we offer"
                  title="Our service areas"
                  description="Explore our core service areas for organisations and business owners."
                />
                <div className="carousel-arrows"><button type="button" aria-label="Previous services">←</button><button type="button" aria-label="Next services">→</button></div>
              </div>
              <div className="services-grid">
                {services.map(([Icon, slug, title]) => {
                  const serviceInfo = servicesData.find((s) => s.slug === slug)
                  return (
                    <a className="card service-card" href={`#/services/${slug}`} key={slug}>
                      <div className="service-icon"><Icon aria-hidden="true" size={22} strokeWidth={1.8} /></div>
                      <h3>{title}</h3>
                      {serviceInfo?.summary && <p>{serviceInfo.summary}</p>}
                      <span className="service-card__link">View service <span aria-hidden="true">→</span></span>
                    </a>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="section audience-section" id="who-we-serve">
          <div className="container">
            <SectionHeading
              eyebrow="Who we help"
              title="NGOs, SMEs and startups"
              description="We also support individual business owners around the world."
            />
            <div className="audience-grid">
              {audiences.map(([tag, title, text, link]) => (
                <article className="card audience-card" key={title}>
                  <div className="audience-image"><ImagePlaceholder label={tag} searchTerms={`${tag} team reviewing a project budget`} aspectRatio="16 / 9" altText={`${tag} reviewing their financial records`} /><span>{tag}</span></div>
                  <div className="audience-copy"><h3>{title}</h3><p>{text}</p><a href="#/#contact">{link} <span>→</span></a></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <TestimonialSection />

        {siteConfig.advantages && siteConfig.advantages.length > 0 && (
          <section className="section advantage-section" id="why-us">
            <div className="container">
              <div className="section-heading"><span className="eyebrow">Why choose us</span><h2>Reasons to work with Nexus Trio</h2></div>
              <div className="bento-grid">
                {siteConfig.advantages.map((adv) => (
                  <article className={`card bento ${adv.type}`} key={adv.title}>
                    <div><h3>{adv.title}</h3><p>{adv.text}</p></div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}

        <section className="section scope-section">
          <div className="container scope-grid">
            <div className="scope-copy">
              <SectionHeading
                className="scope-copy__heading"
                eyebrow="End-to-End Capabilities"
                title="Everything your finances need in one place"
                description="We function as your complete outsourced finance department or provide targeted statutory intervention to resolve bottlenecks and audit queries."
              />
              <Button href="#/#contact">Get Started <span>→</span></Button>
            </div>
            <div className="scope-image"><ImagePlaceholder label="Accounting and financial management" searchTerms="laptop, spreadsheet and calculator on a desk" aspectRatio="4 / 3" altText="Laptop displaying a spreadsheet beside a calculator" /><div><strong>Accounting and financial management</strong><span>Dedicated advisory and statutory compliance.</span></div></div>
          </div>
        </section>

        <section className="section faq-section" id="faq">
          <div className="container faq-grid">
            <div>
              <span className="eyebrow">Frequently Asked Questions</span><h2>Clear answers to your statutory questions</h2>
              <div className="faq-list">
                {faqs.map(([question, answer], index) => (
                  <article className={openFaq === index ? 'faq-item open' : 'faq-item'} key={question}>
                    <button type="button" onClick={() => setOpenFaq(openFaq === index ? -1 : index)}><span>{question}</span><b>{openFaq === index ? '⌃' : '⌄'}</b></button>
                    {openFaq === index && <p>{answer}</p>}
                  </article>
                ))}
              </div>
            </div>
            <div className="contact-card" id="contact">
              <SectionHeading
                className="contact-card__heading"
                eyebrow="Fast Callback"
                title="Book a consultation"
                description="Let&apos;s discuss your statutory needs or donor compliance roadmap."
              />
              {status === 'success' ? <div className="form-notice form-success" role="status"><strong>Enquiry sent</strong><p>{message}</p></div> : (
                <form onSubmit={(event) => handleSubmit(event, { type: 'homepage' })}>
                  <p className="form-notice" role="note">Your inquiry will be emailed through Resend and is not stored on this website. Do not include passwords or confidential financial documents.</p>
                  {error && <p className="form-error" id="home-form-error" role="alert">{error} You can also email <a href={`mailto:${siteConfig.company.email}`}>{siteConfig.company.email}</a>.</p>}
                  <label htmlFor="home-name">Full Name <span aria-hidden="true">*</span></label>
                  <input
                    id="home-name"
                    required
                    aria-required="true"
                    aria-invalid={Boolean(error)}
                    aria-describedby={error ? 'home-form-error' : undefined}
                    name="name"
                    placeholder="Your name"
                  />
                  <div className="form-row">
                    <div>
                      <label htmlFor="home-phone">Phone Number (include country code) <span aria-hidden="true">*</span></label>
                      <input
                        id="home-phone"
                        required
                        aria-required="true"
                        aria-invalid={Boolean(error)}
                        aria-describedby={error ? 'home-form-error' : undefined}
                        name="phone"
                        placeholder="+country code and number"
                      />
                    </div>
                    <div>
                      <label htmlFor="home-email">Email Address <span aria-hidden="true">*</span></label>
                      <input
                        id="home-email"
                        required
                        aria-required="true"
                        aria-invalid={Boolean(error)}
                        aria-describedby={error ? 'home-form-error' : undefined}
                        type="email"
                        name="email"
                        placeholder="you@example.com"
                      />
                    </div>
                  </div>
                  <label htmlFor="home-service">Service Required <span aria-hidden="true">*</span></label>
                  <select
                    id="home-service"
                    required
                    aria-required="true"
                    aria-invalid={Boolean(error)}
                    aria-describedby={error ? 'home-form-error' : undefined}
                    name="service"
                  >
                    <option>NGO and Project Financial Management</option>
                    <option>Business Registration and Corporate Services</option>
                    <option>Payroll and HR Administration</option>
                    <option>Business Advisory and Consultancy</option>
                    <option>Accounting and Financial Management</option>
                    <option>Tax Advisory and Compliance</option>
                  </select>
                  <label htmlFor="home-message">Message / Key Requirements</label>
                  <textarea
                    id="home-message"
                    aria-invalid={Boolean(error)}
                    aria-describedby={error ? 'home-form-error' : undefined}
                    name="message"
                    rows={3}
                    placeholder="Tell us briefly about your organisation or query..."
                  />
                  <label className="form-consent" htmlFor="home-consent">
                    <input
                      id="home-consent"
                      required
                      aria-required="true"
                      aria-invalid={Boolean(error)}
                      aria-describedby={error ? 'home-form-error' : undefined}
                      type="checkbox"
                      name="consent"
                      value="true"
                    />
                    <span>I agree that Nexus Trio can use these details to respond to my enquiry.</span>
                  </label>
                  <Button type="submit" disabled={status === 'sending'}>
                    {status === 'sending' ? 'Sending…' : 'Send enquiry'}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </section>

        <section className="cta-section">
          <CtaRay />
          <div className="container cta-copy"><span>Let’s talk about your needs</span><h2>Looking for accounting, tax or business support?</h2><p>Book a consultation or email us to start a conversation.</p><div><Button href="#/consultation">Book a consultation</Button><a className="phone-button" href="mailto:info@nexustrioconsultancy.co.ke">Email us</a></div></div>
        </section>
      </main>
    </div>
  )
}

export default Home
