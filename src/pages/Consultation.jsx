import { useState } from 'react'
import PageShell from '../components/layout/PageShell'
import PageMetadata from '../components/layout/PageMetadata'
import Button from '../components/ui/Button'
import SectionHeading from '../components/ui/SectionHeading'
import { useInquiryForm } from '../hooks/useInquiryForm'
import { services } from '../data/services'
import { siteConfig } from '../data/siteConfig'

const focusOptions = services.map((service, index) => [
  service.title,
  service.headline,
  String(index + 1),
])

const dates = [['Arrange by email', 'Contact us']]

const times = ['Arrange by email']

const faqs = [
  ['Is the consultation free?', 'The website offers a free consultation. Please confirm the format, timing and any follow-up scope with the team.'],
  ['Can we meet online?', 'Please email us to confirm the available meeting format and arrange a suitable time.'],
  ['What should I prepare?', 'A short description of your organisation or business and the support you are looking for is a useful starting point. Do not send sensitive documents until a secure sharing method has been agreed.'],
]

function Consultation() {
  const [focus, setFocus] = useState(focusOptions[0][0])
  const [date, setDate] = useState(dates[0][1])
  const [time, setTime] = useState(times[0])
  const [openFaq, setOpenFaq] = useState(0)
  const { status, error, message, handleSubmit } = useInquiryForm()
  const leaders = siteConfig.leaders ?? []

  const handleFocusKeyDown = (event, currentIndex) => {
    let nextIndex = currentIndex
    if (event.key === 'ArrowDown' || event.key === 'ArrowRight') {
      event.preventDefault()
      nextIndex = (currentIndex + 1) % focusOptions.length
    } else if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') {
      event.preventDefault()
      nextIndex = (currentIndex - 1 + focusOptions.length) % focusOptions.length
    } else {
      return
    }
    setFocus(focusOptions[nextIndex][0])
    const nextButton = document.getElementById(`focus-opt-${nextIndex}`)
    nextButton?.focus()
  }

  return (
    <PageShell active="Consultation" hideHero>
      <PageMetadata
        title="Book a consultation | Nexus Trio Consulting"
        description="Arrange a conversation with Nexus Trio Consulting about accounting, tax, payroll, business registration or advisory support."
      />
      <section className="consult-hero">
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb"><a href="#/">Home</a><span>/</span><b>Book a Consultation</b></nav>
          <h1>Book a consultation</h1>
          <p>Use the contact email to discuss your needs and arrange a suitable time with the team.</p>
          <div className="consult-assurances"><span>Free consultation</span><span>Time to be agreed</span><span>Share documents only after agreeing a secure method</span></div>
        </div>
      </section>

      <section className="consultation-main">
        <div className="container consultation-grid">
          <aside className="consult-expect">
            <SectionHeading
              className="expect-heading"
              eyebrow="What to expect"
              title="How it works"
              description="Discuss your needs first, then agree on any information or next steps."
            />
            <div className="expect-steps">
              <article><span>01</span><div><h3>Consultation</h3><p>Tell us what support you are looking for.</p></div></article>
              <article><span>02</span><div><h3>Documents</h3><p>Agree what information is needed and how to share it.</p></div></article>
              <article><span>03</span><div><h3>Done</h3><p>We complete the work included in the agreed scope.</p></div></article>
            </div>
            {leaders.length > 0 && (
              <div className="advisor-spotlight">
                <h3>Our team</h3>
                <p>{leaders.map((l) => l.name).join(', ')}</p>
              </div>
            )}
            <div className="consult-confidential"><span>ℹ</span><p><strong>Before sharing documents:</strong> Please contact us first to agree on a suitable way to share information.</p></div>
          </aside>

          <div className="booking-card">
            {status === 'success' ? (
              <div className="booking-success"><span aria-hidden="true">✓</span><h2>Request sent</h2><p>{message} The team will confirm a suitable time with you by email.</p></div>
            ) : (
              <form onSubmit={(event) => handleSubmit(event, { type: 'consultation', service: focus, preferredDate: date, preferredTime: time })}>
                <p className="form-notice" role="note">Your inquiry will be emailed through Resend and is not stored on this website. The team will use it to arrange a consultation. Do not include passwords or confidential financial documents.</p>
                {error && <p className="form-error" id="consult-error" role="alert">{error} You can also email <a href={`mailto:${siteConfig.company.email}`}>{siteConfig.company.email}</a>.</p>}
                <input id="consult-service-value" type="hidden" name="service" value={focus} />
                <section className="booking-step">
                  <div className="booking-step-heading">
                    <div><span>1</span><h2 id="focus-heading">Select Advisory Focus</h2></div>
                    <small>Required</small>
                  </div>
                  <div
                    className="focus-grid"
                    role="radiogroup"
                    aria-labelledby="focus-heading"
                    aria-required="true"
                    aria-invalid={Boolean(error)}
                    aria-describedby={error ? 'consult-error' : undefined}
                  >
                    {focusOptions.map(([title, text], index) => (
                      <button
                        type="button"
                        id={`focus-opt-${index}`}
                        role="radio"
                        aria-checked={focus === title}
                        tabIndex={focus === title ? 0 : -1}
                        className={focus === title ? 'focus-option active' : 'focus-option'}
                        onClick={() => setFocus(title)}
                        onKeyDown={(e) => handleFocusKeyDown(e, index)}
                        key={title}
                      >
                        <i aria-hidden="true">{focus === title ? '●' : '○'}</i>
                        <span><strong>{title}</strong><small>{text}</small></span>
                      </button>
                    ))}
                  </div>
                </section>

                <section className="booking-step">
                  <div className="booking-step-heading"><div><span>2</span><h2>Organization &amp; Executive Details</h2></div><small>Step 2 of 3</small></div>
                  <div className="booking-form-grid">
                    <label htmlFor="consult-name">Full Name <span aria-hidden="true">*</span></label>
                    <input
                      id="consult-name"
                      required
                      aria-required="true"
                      aria-invalid={Boolean(error)}
                      aria-describedby={error ? 'consult-error' : undefined}
                      name="name"
                      placeholder="Your name"
                    />
                    <label htmlFor="consult-company">Company / Organization Name <span aria-hidden="true">*</span></label>
                    <input
                      id="consult-company"
                      required
                      aria-required="true"
                      aria-invalid={Boolean(error)}
                      aria-describedby={error ? 'consult-error' : undefined}
                      name="company"
                      placeholder="Your organisation or business"
                    />
                    <label htmlFor="consult-email">Official Work Email <span aria-hidden="true">*</span></label>
                    <input
                      id="consult-email"
                      required
                      aria-required="true"
                      aria-invalid={Boolean(error)}
                      aria-describedby={error ? 'consult-error' : undefined}
                      type="email"
                      name="email"
                      placeholder="you@example.com"
                    />
                    <label htmlFor="consult-phone">Phone Number (include country code) <span aria-hidden="true">*</span></label>
                    <input
                      id="consult-phone"
                      required
                      aria-required="true"
                      aria-invalid={Boolean(error)}
                      aria-describedby={error ? 'consult-error' : undefined}
                      name="phone"
                      placeholder="+country code and number"
                    />
                    <label className="booking-full" htmlFor="consult-turnover">
                      Estimated Annual Turnover or Grant Portfolio
                      <select
                        id="consult-turnover"
                        aria-invalid={Boolean(error)}
                        aria-describedby={error ? 'consult-error' : undefined}
                        name="turnover"
                        defaultValue=""
                      >
                        <option value="" disabled>Select bracket...</option>
                        <option>Below KES 10 Million</option>
                        <option>KES 10 Million - KES 50 Million</option>
                        <option>KES 50 Million - KES 250 Million</option>
                        <option>KES 250 Million+</option>
                        <option>Prefer to discuss during meeting</option>
                      </select>
                    </label>
                  </div>
                </section>

                <section className="booking-step">
                  <div className="booking-step-heading"><div><span>3</span><h2>Arrange a suitable time</h2></div><small>By email</small></div>
                  <span id="date-label" className="calendar-label">Select Date</span>
                  <div className="date-grid" role="group" aria-labelledby="date-label">
                    {dates.map(([label, value]) => (
                      <button
                        type="button"
                        aria-pressed={date === value}
                        className={date === value ? 'date-pill active' : 'date-pill'}
                        onClick={() => setDate(value)}
                        key={value}
                      >
                        <small>{label}</small><strong>{value}</strong>
                      </button>
                    ))}
                  </div>
                  <span id="time-label" className="calendar-label">Preferred time</span>
                  <div className="time-grid" role="group" aria-labelledby="time-label">
                    {times.map((value) => (
                      <button
                        type="button"
                        aria-pressed={time === value}
                        className={time === value ? 'time-pill active' : 'time-pill'}
                        onClick={() => setTime(value)}
                        key={value}
                      >
                        {value}
                      </button>
                    ))}
                  </div>
                  <label className="booking-notes" htmlFor="consult-notes">Key Questions or Primary Statutory Concern (Optional)</label>
                  <textarea
                    id="consult-notes"
                    aria-invalid={Boolean(error)}
                    aria-describedby={error ? 'consult-error' : undefined}
                    name="notes"
                    rows={3}
                    placeholder="Briefly describe your statutory status, upcoming audit or requirements..."
                  />
                </section>

                <label className="form-consent" htmlFor="consult-consent">
                  <input
                    id="consult-consent"
                    required
                    aria-required="true"
                    aria-invalid={Boolean(error)}
                    aria-describedby={error ? 'consult-error' : undefined}
                    type="checkbox"
                    name="consent"
                    value="true"
                  />
                  <span>I agree that Nexus Trio can use these details to respond to my enquiry.</span>
                </label>
                <div className="booking-submit">
                  <p>Your information will be sent by email. The team will confirm the appointment time.</p>
                  <Button type="submit" disabled={status === 'sending'}>
                    {status === 'sending' ? 'Sending…' : 'Send consultation request →'}
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      <section className="consult-faq">
        <div className="container consult-faq-inner">
          <SectionHeading
            className="consult-faq-heading"
            eyebrow="Before you book"
            title="Frequently asked questions"
            description="Frequently asked questions about booking an advisory consultation."
          />
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
