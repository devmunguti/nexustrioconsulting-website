import { useState } from 'react'
import Navbar from '../components/layout/Navbar'
import CtaRay from '../components/sections/CtaRay'
import StatsSection from '../components/sections/StatsSection'
import heroImage from '../assets/reference-1.jpg'
import auditImage from '../assets/reference-3.jpg'
import advisoryImage from '../assets/reference-4.jpg'
import ngoImage from '../assets/reference-5.jpg'
import smeImage from '../assets/reference-6.jpg'
import corporateImage from '../assets/reference-7.jpg'
import strategyImage from '../assets/reference-8.jpg'
import financeImage from '../assets/reference-9.jpg'

const services = [
  ['$', 'NGO & Project Financial Management', 'Specialized grant accounting, donor-compliance monitoring, procurement reviews and external audit readiness.'],
  ['%', 'Tax Advisory & Compliance', 'Proactive tax planning, KRA VAT returns, eTIMS integration, withholding tax compliance and audit representation.'],
  ['#', 'Payroll & HR Administration', 'Accurate PAYE, SHIF, NSSF and Housing Levy computations, payslips and statutory filing.'],
  ['=', 'Accounting & Financial Management', 'Complete bookkeeping, management accounts, cash flow management and bank reconciliations.'],
  ['P', 'Business Registration & Corporate Services', 'Company incorporation, KRA PIN generation, business permits and secretarial compliance.'],
  ['↗', 'Business Advisory & Consultancy', 'Growth planning, financial modelling, capital structuring and institutional capacity development.'],
]

const audiences = [
  ['Civil Society', ngoImage, 'NGOs and Donor-Funded Projects', 'Transparent grant accounting, sub-grantee monitoring, donor procurement compliance and audit trails.', 'Explore NGO Solutions'],
  ['Growth Ventures', smeImage, 'SMEs and Fast-Growing Startups', 'Scalable outsourced bookkeeping, monthly payroll, eTIMS registration and statutory foundations.', 'Explore SME Packages'],
  ['Enterprises', corporateImage, 'Corporates and High-Net-Worth', 'Advanced corporate tax structuring, statutory risk mitigation and dedicated secretarial services.', 'Explore Advisory'],
]

const faqs = [
  ['Which KRA filings and taxes do you handle?', 'We handle Value Added Tax (VAT), Pay As You Earn (PAYE), Withholding Tax, Corporate Income Tax, eTIMS validation and annual KRA company returns.'],
  ['Can you prepare donor financial reports for international grants?', 'Yes. We prepare budget variance analyses, expenditure tracking and audit files compliant with major donor and foundation requirements.'],
  ['How do you structure your service pricing?', 'We offer monthly retainers, project-based pricing and fully outsourced finance management packages tailored to transaction volumes.'],
  ['Do you assist with new company incorporation in Kenya?', 'Yes. We manage name reservations, BRS incorporation, KRA PIN generation, bank account support and county permits.'],
  ['What accounting software do you support?', 'We work with QuickBooks Online, Xero, Sage Pastel, Zoho Books and Microsoft Dynamics.'],
]

function Home() {
  const [openFaq, setOpenFaq] = useState(0)
  const [submitted, setSubmitted] = useState(false)

  return (
    <div className="home-page">
      <Navbar active="Home" />

      <main>
        <section className="hero-section" id="home">
          <div className="container hero-card">
            <div className="hero-copy">
              <p className="eyebrow">Kenya Regulatory &amp; Statutory Specialists</p>
              <h1>Financial clarity for <span>NGOs and growing</span> businesses</h1>
              <p className="hero-lead">Accounting, tax, payroll and donor-compliance support for organisations across Kenya. Ensuring seamless KRA eTIMS adherence and rigorous donor reporting.</p>
              <div className="hero-actions">
                <a className="gold-button" href="#/consultation">Book a Consultation <span>→</span></a>
                <a className="outline-button" href="#services">View Services</a>
              </div>
            </div>
            <div className="hero-image">
              <img src={heroImage} alt="Nexus Trio financial advisory team" />
              <div className="image-badge">
                <span className="badge-icon">✓</span>
                <div><strong>100% Tax &amp; Grant Compliance</strong><small>KRA, eTIMS, SHIF, NSSF and donor requirements verified.</small></div>
              </div>
            </div>
          </div>
        </section>

        <section className="trust-strip">
          <p>Trusted compliance partner for NGOs, SMEs and corporates across East Africa</p>
          <div className="container trust-items">
            <span>◉ East Africa NGO Forum</span><span>♧ Kenya Agri-Dev Fund</span><span>⌘ Nairobi Tech Hub</span><span>▰ Rift Logistics PLC</span><span>▥ Horizon Group East</span>
          </div>
        </section>

        <StatsSection />

        <section className="section intro-section" id="about">
          <div className="container">
            <div className="section-heading"><h2>Expertise that keeps you <span>compliant and growing</span></h2><i /></div>
            <div className="intro-grid">
              <div className="intro-copy">
                <h3>Navigating Kenyan regulatory complexities with unwavering precision</h3>
                <p>At Nexus Trio Consulting Ltd, we bridge the gap between strategic vision and day-to-day statutory requirements. From eTIMS transitions to complex multi-donor sub-awards, our practitioners safeguard your organization&apos;s legal standing.</p>
                <p>Whether you are an international NGO, a rising tech venture or an established enterprise, we deliver clarity, accountability and measurable peace of mind.</p>
                <div className="intro-actions"><a className="gold-button" href="#services">About Our Firm</a><span>✓ <b>ICPAK Affiliated Experts</b></span></div>
              </div>
              <div className="arch-gallery">
                <div className="arch arch-one"><img src={auditImage} alt="Compliance consultant reviewing records" /></div>
                <div className="arch arch-two"><img src={advisoryImage} alt="Corporate financial advisory consultation" /></div>
                <div className="experience-badge"><strong>10+</strong><span>YEARS OF <b>EXCELLENCE</b></span></div>
              </div>
            </div>
          </div>
        </section>

        <section className="section services-section" id="services">
          <div className="container">
            <div className="services-panel">
              <div className="panel-heading">
                <div><span className="eyebrow">What We Offer</span><h2>Our Core Services</h2><p>Comprehensive statutory, accounting and advisory solutions for the East African institutional and commercial ecosystem.</p></div>
                <div className="carousel-arrows"><button type="button" aria-label="Previous services">←</button><button type="button" aria-label="Next services">→</button></div>
              </div>
              <div className="services-grid">
                {services.map(([icon, title, text]) => (
                  <article className="service-card" key={title}>
                    <div className="service-icon">{icon}</div><h3>{title}</h3><p>{text}</p><a href="#contact">Learn More <span>→</span></a>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section audience-section" id="who-we-serve">
          <div className="container">
            <div className="section-heading"><span className="eyebrow">Tailored Competence</span><h2>Who We Serve</h2><p>Customized accounting frameworks designed for the unique obligations of your industry.</p></div>
            <div className="audience-grid">
              {audiences.map(([tag, image, title, text, link]) => (
                <article className="audience-card" key={title}>
                  <div className="audience-image"><img src={image} alt={title} /><span>{tag}</span></div>
                  <div className="audience-copy"><h3>{title}</h3><p>{text}</p><a href="#contact">{link} <span>→</span></a></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="testimonial-section" id="testimonials">
          <div className="container testimonial-card">
            <div className="testimonial-author">
              <span className="eyebrow">Client Validation</span><h3>Partnering with Proven Leaders</h3>
              <div className="author-profile"><div className="initials">DR</div><div><strong>Dr. Rosemary K.</strong><small>Country Director</small><em>Regional Health Initiative NGO, Nairobi</em></div></div>
              <div className="testimonial-arrows"><button type="button" aria-label="Previous testimonial">‹</button><button type="button" aria-label="Next testimonial">›</button></div>
            </div>
            <blockquote><span>“</span><p>&ldquo;Nexus Trio Consulting streamlined our entire donor reporting pipeline and resolved our historical KRA audit queries with total professionalism. Their team gives us complete confidence in our financial governance.&rdquo;</p><div className="stars">★★★★★ <small>5.0 Star Audit Compliance Rating</small></div></blockquote>
          </div>
        </section>

        <section className="section advantage-section" id="why-us">
          <div className="container">
            <div className="section-heading"><span className="eyebrow">The Nexus Advantage</span><h2>Why clients choose Nexus Trio</h2><p>Combining deep institutional donor know-how with agile commercial accounting practice.</p></div>
            <div className="bento-grid">
              <article className="bento visual"><img src={strategyImage} alt="Consultants collaborating on financial models" /><div><span>Our Philosophy</span><h3>Safeguarding donor capital &amp; corporate growth</h3></div></article>
              <article className="bento light"><div className="bento-icon">◎</div><div><h3>Donor Compliance</h3><p>Proven mastery of USAID, Global Fund and European grant procedures.</p></div><small>✓ Zero-disallowance target</small></article>
              <article className="bento navy"><div><span>Tax Track Record</span><b>◷</b></div><div><strong>99.8%</strong><p>On-time filing across KRA VAT, PAYE and SHIF returns.</p></div><small>ZERO LATE PENALTIES</small></article>
              <article className="bento light"><div className="bento-icon gold">✓</div><div><strong>100%</strong><h3>KRA Statutory Focus</h3><p>Active eTIMS compliance verification for every expenditure line.</p></div></article>
              <article className="bento light"><div className="bento-icon">≡</div><div><h3>Tailored Systems</h3><p>Workflows customized to QuickBooks, Xero or Sage.</p></div><small>Seamless Migration</small></article>
              <article className="bento wide"><div><span>Dedicated Attention</span><h3>Direct Senior Consultant Access</h3><p>Every client is paired with an accredited senior accountant—no junior runaround.</p></div><a className="gold-button" href="#contact">Get Matched Today</a></article>
            </div>
          </div>
        </section>

        <section className="section scope-section">
          <div className="container scope-grid">
            <div className="scope-copy">
              <span className="eyebrow">End-to-End Capabilities</span><h2>Everything your finances need in one place</h2>
              <p>We function as your complete outsourced finance department or provide targeted statutory intervention to resolve bottlenecks and audit queries.</p>
              <div className="checklist">
                {['Donor budget preparation & variance analysis', 'KRA PIN registration & statutory setup', 'PAYE, SHIF, NSSF & statutory payroll', 'Financial modelling & cash flow forecasts', 'Monthly bank & ledger reconciliations', 'VAT & eTIMS onboarding & monthly filing', 'Business plans & bankability studies', 'Audit preparation & external liaison support'].map((item) => <div key={item}><span>✓</span>{item}</div>)}
              </div>
              <a className="gold-button" href="#contact">Get Started <span>→</span></a>
            </div>
            <div className="scope-image"><img src={financeImage} alt="Financial advisor reviewing KRA tax schedules" /><div><strong>Fast Turnaround Guaranteed</strong><span>Clean books delivered every month with zero backlog.</span></div></div>
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
              <span className="eyebrow">Fast Callback</span><h3>Book a Free Consultation</h3><p>Let&apos;s discuss your statutory needs or donor compliance roadmap.</p>
              {submitted ? <div className="form-success">Thank you. A senior consultant will contact you within 24 hours.</div> : (
                <form onSubmit={(event) => { event.preventDefault(); setSubmitted(true) }}>
                  <label>Full Name<input required name="name" placeholder="e.g. Samuel Mwangi" /></label>
                  <div className="form-row"><label>Phone Number<input required name="phone" placeholder="+254 700 000 000" /></label><label>Email Address<input required type="email" name="email" placeholder="smwangi@domain.co.ke" /></label></div>
                  <label>Service Required<select name="service"><option>NGO &amp; Donor Grant Management</option><option>KRA Tax Compliance &amp; eTIMS</option><option>Payroll &amp; Statutory</option><option>Bookkeeping &amp; Financial Accounts</option><option>Business Registration &amp; Corporate</option><option>Strategic Financial Advisory</option></select></label>
                  <label>Message / Key Requirements<textarea name="message" rows="3" placeholder="Tell us briefly about your organisation or query..." /></label>
                  <button className="gold-button" type="submit">Send Consultation Request</button><small className="privacy">♙ Your information is held in strict professional confidentiality.</small>
                </form>
              )}
            </div>
          </div>
        </section>

        <section className="cta-section">
          <CtaRay />
          <div className="container cta-copy"><span>Ready for Complete Peace of Mind?</span><h2>Need help with tax compliance or <b>donor reporting?</b></h2><p>Speak with a certified consultant today and safeguard your financial integrity with tailored, rigorous oversight.</p><div><a className="gold-button" href="#contact">Book a Free Consultation <b>▣</b></a><a className="phone-button" href="tel:+254700000000">☎ Call +254 700 000 000</a></div></div>
        </section>
      </main>
    </div>
  )
}

export default Home
