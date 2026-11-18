import { useState } from 'react'
import PageShell from '../components/layout/PageShell'

const focusOptions = [
  ['Tax Advisory & eTIMS Health Check', 'KRA audits, tax clearance certificates and VAT dispute resolution.', '1'],
  ['NGO Donor Grant Oversight', 'Fund accounting, USAID/EU donor audit readiness and compliance.', '2'],
  ['Monthly Accounting & Payroll Retainer', 'Outsourced ledger management, PAYE, SHIF and Housing Levy.', '3'],
  ['New Business & Foreign Entity Setup', 'BRS incorporation, licensing, bank setup and KRA PIN registration.', '4'],
]

const dates = [
  ['Tomorrow', 'Thu, 24 Oct'],
  ['Available', 'Fri, 25 Oct'],
  ['Available', 'Mon, 28 Oct'],
  ['Available', 'Tue, 29 Oct'],
]

const times = ['09:30 AM EAT', '11:00 AM EAT', '02:00 PM EAT', '04:00 PM EAT']

const faqs = [
  ['Is the complimentary 45-minute consultation truly free of financial obligation?', 'Yes. The session is exploratory. We review your compliance posture, potential KRA exposures and operational bottlenecks. A fee quotation is provided only if you choose to engage ongoing advisory or audit support.'],
  ['Can the session take place virtually or at our Nairobi office?', 'Both options are available through Microsoft Teams or Google Meet, or at our Nairobi office. On-site visits can be arranged for qualified organizations with complex accounting systems.'],
  ['What specific documents should we prepare for the call?', 'Not mandatory, but useful documents include your latest Tax Compliance Certificate, trial balance and prior-year audited financial statements.'],
]

function Consultation() {
  const [focus, setFocus] = useState(focusOptions[0][0])
  const [date, setDate] = useState(dates[0][1])
  const [time, setTime] = useState(times[0])
  const [openFaq, setOpenFaq] = useState(0)
  const [submitted, setSubmitted] = useState(false)

  return (
    <PageShell active="Consultation" hideHero>
      <section className="consult-hero">
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb"><a href="#/">Home</a><span>/</span><b>Book a Consultation</b></nav>
          <h1>Schedule Your Complimentary Executive Consultation</h1>
          <p>Reserve a 45-minute confidential statutory diagnostic or grant fiduciary roadmap session with our ICPAK-accredited consultants and licensed KRA tax agents.</p>
          <div className="consult-assurances"><span>♙ Strict Mutual NDA</span><span>◷ Fast 2-Hour Confirmation</span><span>♟ Direct Senior Partner Session</span></div>
        </div>
      </section>

      <section className="consultation-main">
        <div className="container consultation-grid">
          <aside className="consult-expect">
            <div className="expect-heading"><span>Advisory Process</span><h2>What to Expect in Your Session</h2><p>Our initial discovery session is a structured, zero-obligation technical review tailored to your organization.</p></div>
            <div className="expect-steps">
              <article><span>01</span><div><h3>Preliminary Statutory &amp; eTIMS Check</h3><p>Analysis of KRA compliance, electronic invoicing and active ledger liabilities.</p></div></article>
              <article><span>02</span><div><h3>Statutory Deadline &amp; Penalty Exposure</h3><p>Risk review for PAYE, VAT, SHIF and Housing Levy reconciliations.</p></div></article>
              <article><span>03</span><div><h3>Actionable Roadmap &amp; Retainer SLA</h3><p>A prioritized checklist and exact scope with guaranteed turnaround SLAs.</p></div></article>
            </div>
            <div className="advisor-spotlight"><h3>Available Senior Advisors</h3>
              <article><div className="advisor-avatar navy">DM</div><div><strong>David Mwangi, CPA-K</strong><span>Corporate Tax &amp; eTIMS Specialist</span></div><b>● Open</b></article>
              <article><div className="advisor-avatar gold">RK</div><div><strong>Dr. Rosemary Kamau</strong><span>NGO Grant &amp; Fiduciary Lead</span></div><b>● Open</b></article>
            </div>
            <div className="consult-confidential"><span>♙</span><p><strong>100% Confidentiality Assured:</strong> All shared financial documentation is protected under formal mutual NDA regulations.</p></div>
          </aside>

          <div className="booking-card">
            {submitted ? (
              <div className="booking-success"><span>✓</span><h2>Consultation Request Confirmed</h2><p>Our advisory team will send a confirmation and meeting invitation within 2 business hours.</p></div>
            ) : (
              <form onSubmit={(event) => { event.preventDefault(); setSubmitted(true) }}>
                <section className="booking-step">
                  <div className="booking-step-heading"><div><span>1</span><h2>Select Advisory Focus</h2></div><small>Required</small></div>
                  <div className="focus-grid">
                    {focusOptions.map(([title, text]) => (
                      <button type="button" className={focus === title ? 'focus-option active' : 'focus-option'} onClick={() => setFocus(title)} key={title}>
                        <i>{focus === title ? '●' : '○'}</i><span><strong>{title}</strong><small>{text}</small></span>
                      </button>
                    ))}
                  </div>
                </section>

                <section className="booking-step">
                  <div className="booking-step-heading"><div><span>2</span><h2>Organization &amp; Executive Details</h2></div><small>Step 2 of 3</small></div>
                  <div className="booking-form-grid">
                    <label>Full Name *<input required name="name" placeholder="e.g. John Ochieng" /></label>
                    <label>Company / Organization Name *<input required name="company" placeholder="e.g. Acme Africa Ltd" /></label>
                    <label>Official Work Email *<input required type="email" name="email" placeholder="john@company.co.ke" /></label>
                    <label>Direct Phone Number *<input required name="phone" placeholder="+254 7XX XXX XXX" /></label>
                    <label className="booking-full">Estimated Annual Turnover or Grant Portfolio<select name="turnover" defaultValue=""><option value="" disabled>Select bracket...</option><option>Below KES 10 Million</option><option>KES 10 Million - KES 50 Million</option><option>KES 50 Million - KES 250 Million</option><option>KES 250 Million+</option><option>Prefer to discuss during meeting</option></select></label>
                  </div>
                </section>

                <section className="booking-step">
                  <div className="booking-step-heading"><div><span>3</span><h2>Preferred Date &amp; Session Slot (EAT)</h2></div><small>45 Minutes</small></div>
                  <label className="calendar-label">Select Date</label>
                  <div className="date-grid">
                    {dates.map(([label, value]) => <button type="button" className={date === value ? 'date-pill active' : 'date-pill'} onClick={() => setDate(value)} key={value}><small>{label}</small><strong>{value}</strong></button>)}
                  </div>
                  <label className="calendar-label">Select Time Window (East Africa Time)</label>
                  <div className="time-grid">
                    {times.map((value) => <button type="button" className={time === value ? 'time-pill active' : 'time-pill'} onClick={() => setTime(value)} key={value}>{value}</button>)}
                  </div>
                  <label className="booking-notes">Key Questions or Primary Statutory Concern (Optional)<textarea name="notes" rows="3" placeholder="Briefly describe your statutory status, upcoming audit or requirements..." /></label>
                </section>

                <div className="booking-submit"><p>◷ Confirmation &amp; Google Meet/office invite sent within <strong>2 business hours</strong>.</p><button type="submit" className="gold-button">Confirm Consultation Request →</button></div>
              </form>
            )}
          </div>
        </div>
      </section>

      <section className="consult-faq">
        <div className="container consult-faq-inner">
          <div className="consult-faq-heading"><span>Client Assurance</span><h2>Frequently Asked Questions Prior to Booking</h2><p>Transparent advisory standards for Kenyan corporations, SMEs and international NGOs.</p></div>
          <div className="consult-faq-list">
            {faqs.map(([question, answer], index) => (
              <article className={openFaq === index ? 'open' : ''} key={question}>
                <button type="button" onClick={() => setOpenFaq(openFaq === index ? -1 : index)}><span>{question}</span><b>{openFaq === index ? '⌃' : '⌄'}</b></button>
                {openFaq === index && <p>{answer}</p>}
              </article>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  )
}

export default Consultation
