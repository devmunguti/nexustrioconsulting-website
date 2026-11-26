import PageShell from '../components/layout/PageShell'
import PageMetadata from '../components/layout/PageMetadata'
import Button from '../components/ui/Button'
import SectionHeading from '../components/ui/SectionHeading'
import { useInquiryForm } from '../hooks/useInquiryForm'
import { siteConfig } from '../data/siteConfig'

function Contact() {
  const { status, error, message, handleSubmit } = useInquiryForm()
  const hasPhoneOrWhatsapp = Boolean(siteConfig.company.phone || siteConfig.company.whatsapp)

  return (
    <PageShell active="Contact" hideHero>
      <PageMetadata
        title="Contact | Nexus Trio Consulting"
        description="Contact Nexus Trio Consulting to discuss accounting, tax, payroll, registration, project finance or business advisory support."
      />
      <section className="contact-hero">
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb"><a href="#/">Home</a><span>/</span><b>Contact Us</b></nav>
          <h1>Get in touch with Nexus Trio</h1>
          <p>Contact us about accounting, tax, payroll, business registration, project finance or business advisory support. We work with clients worldwide.</p>
        </div>
      </section>

      <section className="contact-main" id="contact-main">
        <div className="container contact-main-grid">
          <aside className="contact-office-column">
            <SectionHeading
              className="contact-intro"
              eyebrow="Contact our team"
              title="Tell us what support you need"
              description="Email us to discuss your organisation, business or question. We will confirm what information is useful for your enquiry."
            />

            <article className="emergency-card">
              <div>⚠</div>
              <div>
                <h3>Received a notice from KRA?</h3>
                <p>Keep the notice and note its response date. If you are unsure what it means, email us to discuss your situation.</p>
                <a href={`mailto:${siteConfig.company.email}`}>Email our team</a>
              </div>
            </article>

            <div className="office-detail-list">
              {siteConfig.company.address && (
                <article>
                  <div>▥</div>
                  <section>
                    <h3>Business location</h3>
                    <p>
                      {siteConfig.company.address.physical && <b>{siteConfig.company.address.physical}</b>}
                      {siteConfig.company.address.postal && <span>{siteConfig.company.address.postal}</span>}
                    </p>
                  </section>
                </article>
              )}
              {hasPhoneOrWhatsapp && (
                <article>
                  <div>☎</div>
                  <section>
                    <h3>Phone and WhatsApp</h3>
                    <p>
                      {siteConfig.company.phone && (
                        <span>
                          <a className="contact-channel-link contact-channel-link--call" href={siteConfig.company.phone.href}>
                            Call {siteConfig.company.phone.display}
                          </a>
                        </span>
                      )}
                      {siteConfig.company.phone && siteConfig.company.whatsapp && <br />}
                      {siteConfig.company.whatsapp && (
                        <span>
                          <a className="contact-channel-link contact-channel-link--whatsapp" href={siteConfig.company.whatsapp.href}>
                            WhatsApp: {siteConfig.company.whatsapp.display}
                          </a>
                        </span>
                      )}
                    </p>
                  </section>
                </article>
              )}
              <article>
                <div>✉</div>
                <section>
                  <h3>Email</h3>
                  <div className="department-links">
                    <a href={`mailto:${siteConfig.company.email}`}>
                      <b>General enquiries:</b>
                      <span>{siteConfig.company.email}</span>
                    </a>
                  </div>
                </section>
              </article>
              {siteConfig.company.workingHours && (
                <article>
                  <div>◷</div>
                  <section>
                    <h3>Working hours</h3>
                    <p><b>{siteConfig.company.workingHours}</b></p>
                  </section>
                </article>
              )}
            </div>

            <div className="map-preview"><p>We work with clients worldwide. Contact us by email to discuss your location and requirements.</p></div>
          </aside>

          <div className="inquiry-card" id="inquiry-form">
            <SectionHeading
              className="inquiry-heading"
              eyebrow="Contact form"
              title="Send us an inquiry"
              description="Your inquiry will be emailed through Resend and is not stored on this website. Do not include passwords or confidential financial documents."
            />
            {status === 'success' ? (
              <div className="form-notice form-success" role="status"><strong>Enquiry sent</strong><p>{message}</p></div>
            ) : (
              <form onSubmit={(event) => handleSubmit(event, { type: 'contact' })}>
                {error && <p className="form-error" id="contact-error" role="alert">{error} You can also email <a href={`mailto:${siteConfig.company.email}`}>{siteConfig.company.email}</a>.</p>}
                <div className="contact-form-row">
                  <label htmlFor="contact-fullName">Full Name <span aria-hidden="true">*</span></label>
                  <input
                    id="contact-fullName"
                    required
                    aria-required="true"
                    aria-invalid={Boolean(error)}
                    aria-describedby={error ? 'contact-error' : undefined}
                    name="fullName"
                    placeholder="Your name"
                  />
                  <label htmlFor="contact-organization">Organization / Company Name <span aria-hidden="true">*</span></label>
                  <input
                    id="contact-organization"
                    required
                    aria-required="true"
                    aria-invalid={Boolean(error)}
                    aria-describedby={error ? 'contact-error' : undefined}
                    name="organization"
                    placeholder="Your organisation or business"
                  />
                </div>
                <div className="contact-form-row">
                  <label htmlFor="contact-email">Business Email Address <span aria-hidden="true">*</span></label>
                  <input
                    id="contact-email"
                    required
                    aria-required="true"
                    aria-invalid={Boolean(error)}
                    aria-describedby={error ? 'contact-error' : undefined}
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                  />
                  <label htmlFor="contact-phone">Phone Number (optional; include country code)</label>
                  <input
                    id="contact-phone"
                    aria-invalid={Boolean(error)}
                    aria-describedby={error ? 'contact-error' : undefined}
                    name="phone"
                    placeholder="+country code and number"
                  />
                </div>
                <label htmlFor="contact-service">Primary Area of Interest <span aria-hidden="true">*</span></label>
                <select
                  id="contact-service"
                  required
                  aria-required="true"
                  aria-invalid={Boolean(error)}
                  aria-describedby={error ? 'contact-error' : undefined}
                  name="service"
                  defaultValue=""
                >
                  <option value="" disabled>Select an advisory service...</option>
                  <option>NGO and Project Financial Management</option>
                  <option>Business Registration and Corporate Services</option>
                  <option>Payroll and HR Administration</option>
                  <option>Business Advisory and Consultancy</option>
                  <option>Accounting and Financial Management</option>
                  <option>Tax Advisory and Compliance</option>
                </select>
                <label htmlFor="contact-message">Context &amp; Specific Requirements <span aria-hidden="true">*</span></label>
                <textarea
                  id="contact-message"
                  required
                  aria-required="true"
                  aria-invalid={Boolean(error)}
                  aria-describedby={error ? 'contact-error' : undefined}
                  name="message"
                  rows={6}
                  placeholder="Briefly outline your organization's statutory situation, audit timeline or current tax needs..."
                />
                <label className="form-consent" htmlFor="contact-consent">
                  <input
                    id="contact-consent"
                    required
                    aria-required="true"
                    aria-invalid={Boolean(error)}
                    aria-describedby={error ? 'contact-error' : undefined}
                    type="checkbox"
                    name="consent"
                    value="true"
                  />
                  <span>I agree that Nexus Trio can use these details to respond to my enquiry.</span>
                </label>
                <div className="inquiry-submit">
                  <Button type="submit" disabled={status === 'sending'}>
                    {status === 'sending' ? 'Sending…' : 'Send enquiry'}
                  </Button>
                  <span>Your details are sent by email.</span>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      <section className="regional-advisory">
        <div className="container">
          <div className="regional-card">
            <div className="regional-copy"><span>Worldwide service</span><h2>Business support for clients around the world</h2><p>Tell us where your organisation operates and what support you are looking for. We can discuss whether the services listed on this website fit your needs.</p><div><b>Accounting</b><b>Tax</b><b>Business advisory</b></div></div>
            <aside><span>Contact</span><h3>Start a conversation</h3><p>Send your enquiry to our public contact email.</p><a href="mailto:info@nexustrioconsultancy.co.ke">✉ Email Nexus Trio</a></aside>
          </div>
        </div>
      </section>

      <section className="contact-cta">
        <div className="container"><h2>Would you like to discuss your needs?</h2><p>Book a consultation or email us directly.</p><div><Button href="#/consultation">Book a consultation</Button><a className="phone-button" href="mailto:info@nexustrioconsultancy.co.ke">Email Nexus Trio</a></div></div>
      </section>
    </PageShell>
  )
}

export default Contact
