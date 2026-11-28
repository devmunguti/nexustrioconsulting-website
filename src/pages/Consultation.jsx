import { useState } from 'react'
import PageShell from '../components/layout/PageShell'
import PageMetadata from '../components/layout/PageMetadata'
import Button from '../components/ui/Button'
import SectionHeading from '../components/ui/SectionHeading'
import TypedHeading from '../components/ui/TypedHeading'
import { useEnquiryDialog } from '../components/ui/EnquiryDialogContext'
import './Consultation.css'

const faqs = [
  ['Is the consultation free?', 'The website offers a free consultation. Please confirm the format, timing and any follow-up scope with the team.'],
  ['Can we meet online?', 'Please email us to confirm the available meeting format and arrange a suitable time.'],
  ['What should I prepare?', 'A short description of your organisation or business and the support you are looking for is a useful starting point. Do not send sensitive documents until a secure sharing method has been agreed.'],
]

function Consultation() {
  const [openFaq, setOpenFaq] = useState(0)
  const { openEnquiry } = useEnquiryDialog()

  return (
    <PageShell active="Consultation" hideHero>
      <PageMetadata
        title="Book a consultation | Nexus Trio Consulting"
        description="Arrange a conversation with Nexus Trio Consulting about accounting, tax, payroll, business registration or advisory support."
      />
      <section className="consult-hero">
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb"><a href="#/">Home</a><span>/</span><b>Book a Consultation</b></nav>
          <TypedHeading>Book a consultation</TypedHeading>
          <p>Use the contact options to discuss your needs and arrange a suitable time with the team.</p>
          <div className="consult-assurances"><span>Free consultation</span><span>Time to be agreed</span><span>Share documents only after agreeing a secure method</span></div>
        </div>
      </section>

      <section className="consultation-main">
        <div className="container">
          <div className="consultation-quick">
            <SectionHeading
              className="consultation-quick__heading"
              eyebrow="One simple step"
              title="Tell us what you need"
              description="Choose whether you would like to reach us by WhatsApp or email. For email, you only need to provide your email address and the kind of help you need."
            />
            <Button
              onClick={(event) => openEnquiry('Consultation', event.currentTarget)}
            >
              How would you like to reach us?
            </Button>
            <p className="consultation-quick__note">Please do not include passwords or confidential financial documents in your first message.</p>
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
