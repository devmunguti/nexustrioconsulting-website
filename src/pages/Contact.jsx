import { useState } from 'react'
import PageShell from '../components/layout/PageShell'

function Contact() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <PageShell active="Contact" hideHero>
      <section className="contact-hero">
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb"><a href="#/">Home</a><span>/</span><b>Contact Us</b></nav>
          <h1>Connect with Our Financial &amp; Statutory Advisors in Nairobi</h1>
          <p>Schedule confidential advisory sessions, arrange comprehensive KRA tax health checks, or initiate donor audit preparations with certified Kenyan specialists.</p>
        </div>
      </section>

      <section className="contact-main" id="contact-main">
        <div className="container contact-main-grid">
          <aside className="contact-office-column">
            <div className="contact-intro">
              <span>Nairobi Advisory Office</span>
              <h2>Get in Touch Directly</h2>
              <p>Our resident partners and tax agents maintain active consultations for corporate entities, international NGOs, and high-growth institutions across East Africa.</p>
            </div>

            <article className="emergency-card">
              <div>⚠</div>
              <div>
                <h3>Emergency KRA Notice &amp; Audit Hotline</h3>
                <p>Received an urgent demand notice, agency appointment or tax audit directive from KRA? Our statutory team provides a guaranteed 2-hour response.</p>
                <a href="tel:+254711000000">☎ +254 711 000 000 <span>(Urgent Hotline)</span></a>
              </div>
            </article>

            <div className="office-detail-list">
              <article><div>▥</div><section><h3>Office Headquarters</h3><p><b>Commercial Hub, Upper Hill &amp; Westlands Corridor</b><small>P.O. Box 48210 - 00100 GPO, Nairobi, Kenya</small></p></section></article>
              <article><div>☎</div><section><h3>Direct Telephony</h3><p><span>Advisory Desk:</span> <a href="tel:+254700000000">+254 700 000 000</a><br /><span>Office Switchboard:</span> <a href="tel:+254202000000">+254 (0)20 200 0000</a></p></section></article>
              <article><div>✉</div><section><h3>Departmental Inboxes</h3><div className="department-links"><a href="mailto:tax@nexustrio.co.ke"><b>Tax Advisory:</b><span>tax@nexustrio.co.ke</span></a><a href="mailto:grants@nexustrio.co.ke"><b>Donor Grants &amp; NGO:</b><span>grants@nexustrio.co.ke</span></a><a href="mailto:info@nexustrio.co.ke"><b>General Matters:</b><span>info@nexustrio.co.ke</span></a></div></section></article>
              <article><div>◷</div><section><h3>Working Hours</h3><p><b>Monday - Friday: 8:00 AM - 5:00 PM EAT</b><small>Saturday: 9:00 AM - 1:00 PM EAT (By appointment)</small><small>Sunday &amp; public holidays: Closed</small></p></section></article>
            </div>

            <div className="map-preview">
              <div><span>◉ Upper Hill Financial District, Nairobi</span><small>GPS: -1.2985, 36.8188</small></div>
              <div className="map-graphic">
                <div>●</div>
                <h3>Nexus Trio Consulting Ltd</h3>
                <p>Hospital Road, Upper Hill, Nairobi</p>
                <a href="https://maps.google.com/?q=Upper+Hill+Nairobi" target="_blank" rel="noreferrer">Open in Google Maps →</a>
              </div>
            </div>
          </aside>

          <div className="inquiry-card" id="inquiry-form">
            <div className="inquiry-heading"><span>Confidential Advisory Request</span><h2>Send Us an Inquiry</h2><p>♙ All submissions are handled under strict NDA by certified tax &amp; fiduciary professionals.</p></div>
            {submitted ? (
              <div className="form-success">Thank you. Your inquiry has been routed to our Nairobi advisory team.</div>
            ) : (
              <form onSubmit={(event) => { event.preventDefault(); setSubmitted(true) }}>
                <div className="contact-form-row">
                  <label>Full Name *<input required name="fullName" placeholder="e.g. David Mwangi" /></label>
                  <label>Organization / Company Name *<input required name="organization" placeholder="e.g. Apex Health Africa NGO" /></label>
                </div>
                <div className="contact-form-row">
                  <label>Business Email Address *<input required type="email" name="email" placeholder="david@company.co.ke" /></label>
                  <label>Phone Number *<div className="phone-field"><span>🇰🇪 +254</span><input required name="phone" placeholder="700 000 000" /></div></label>
                </div>
                <label>Primary Area of Interest *<select required defaultValue=""><option value="" disabled>Select an advisory service...</option><option>KRA Tax Advisory &amp; eTIMS</option><option>NGO Fiduciary &amp; Donor Audit</option><option>Payroll &amp; Statutory Levies</option><option>Corporate Structuring &amp; Registration</option><option>Bookkeeping &amp; Financial Reporting</option><option>Urgent KRA Audit Defense</option></select></label>
                <label>Context &amp; Specific Requirements *<textarea required name="message" rows="6" placeholder="Briefly outline your organization's statutory situation, audit timeline or current tax needs..." /></label>
                <label className="consent"><input required type="checkbox" /><span>I consent to Nexus Trio Consulting processing this inquiry under the Kenya Data Protection Act, 2019 and professional confidentiality mandates.</span></label>
                <div className="inquiry-submit"><button type="submit" className="gold-button">Submit Inquiry →</button><span>Typical response time: under 3 business hours.</span></div>
              </form>
            )}
          </div>
        </div>
      </section>

      <section className="regional-advisory">
        <div className="container">
          <div className="regional-card">
            <div className="regional-copy"><span>◉ Cross-Border East Africa Advisory</span><h2>Regional Fiduciary Capabilities: Kenya, Uganda, Tanzania &amp; Rwanda</h2><p>Operating multi-country entities or international non-profits in the East African Community? Nexus Trio provides synchronized statutory compliance across dual-currency ledgers, cross-border withholding tax reconciliation and transfer-pricing reviews aligned with regional customs conventions.</p><div><b>✓ Multi-Currency Reporting</b><b>✓ EAC Cross-Border WHT</b><b>✓ Consolidated Donor Audits</b></div></div>
            <aside><span>Regional Coordination Desk</span><h3>Cross-Border Engagements</h3><p>Speak with a senior partner regarding regional expansion or dual registrations.</p><a href="mailto:regional@nexustrio.co.ke">✉ Email Regional Desk</a></aside>
          </div>
        </div>
      </section>

      <section className="contact-cta">
        <div className="container"><h2>Need Immediate Statutory Guidance?</h2><p>Whether you need audit intervention, eTIMS configuration or an external review of your donor-funded books, our team is at your disposal.</p><div><a className="gold-button" href="#/consultation">Book a Free Consultation</a><a className="phone-button" href="tel:+254700000000">☎ Call +254 700 000 000</a></div></div>
      </section>
    </PageShell>
  )
}

export default Contact
