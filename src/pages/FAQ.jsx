import { useState } from 'react'
import PageShell from '../components/layout/PageShell'

const categories = [
  ['all', 'All Statutory Topics', '▦'],
  ['kra', '1. KRA Taxes & eTIMS', '▤'],
  ['ngo', '2. NGO & Donor Grants', '$'],
  ['retainer', '3. Outsourced Accounting', '='],
  ['setup', '4. Company Registration', '▥'],
]

const faqGroups = [
  {
    id: 'kra',
    number: '1',
    title: 'KRA Taxes & eTIMS Compliance',
    subtitle: 'Statutory corporate obligations under Kenya Revenue Authority rules & Tax Procedures Act.',
    items: [
      ['Is my business required to onboard onto KRA eTIMS, and what are the penalties for non-compliance?', 'Yes. Registered businesses in Kenya are generally required to issue electronic tax invoices. From 2024, unsupported expenses may be disallowed for corporation tax deductions, and non-compliance can attract significant penalties. Nexus Trio configures and supports both portal and system-to-system eTIMS integration.'],
      ['What are the critical statutory filing deadlines each month in Kenya?', 'PAYE, Affordable Housing Levy and SHIF/NSSF are generally due by the 9th. VAT and withholding tax returns are generally due by the 20th. Quarterly instalment tax and annual corporate returns follow separate statutory schedules.'],
      ['How do we obtain and maintain an active Tax Compliance Certificate (TCC)?', 'A TCC requires current filing compliance, no unresolved tax ledgers and clean director PIN profiles. Nexus Trio can reconcile outstanding items and prepare penalty waiver applications where applicable.'],
    ],
  },
  {
    id: 'ngo',
    number: '2',
    title: 'NGO & Donor Grant Management',
    subtitle: 'Grant accounting, multi-currency burn rates and donor pre-audit verification.',
    items: [
      ['What financial controls do donor-funded projects require?', 'Common controls include segregated grant ledgers, time-and-effort reports, competitive procurement records, asset registers and documented cost allocation methods.'],
      ['How do you prevent disallowed costs and shared overhead allocations?', 'We establish a defensible Cost Allocation Methodology using approved bases such as direct labor, occupied space or direct expenditure ratios.'],
      ['Are NGOs automatically exempt from Kenyan withholding tax?', 'No. NGO registration does not automatically confer income tax exemption. Organizations may require a formal exemption certificate; PAYE and withholding obligations may still apply.'],
    ],
  },
  {
    id: 'retainer',
    number: '3',
    title: 'Outsourced Accounting & Retainers',
    subtitle: 'SLA agreements, cloud software setup and bookkeeper handover protocols.',
    items: [
      ['What deliverables are included in a monthly accounting retainer?', 'Typical deliverables include bookkeeping, reconciliations, statutory filing support, management accounts, cashflow reports and scheduled CFO advisory.'],
      ['Which cloud accounting platforms do you support?', 'We support QuickBooks, Xero, Sage, Zoho Books, Odoo and Microsoft Dynamics, including migration and chart-of-accounts setup.'],
    ],
  },
  {
    id: 'setup',
    number: '4',
    title: 'Company Registration & Business Setup',
    subtitle: 'BRS incorporation, foreign company branches and county business permits.',
    items: [
      ['How long does it take to register a private limited company?', 'Standard BRS incorporation is commonly completed within 3 to 5 business days after name reservation, subject to document accuracy and authority processing.'],
      ['Can foreign nationals own 100% of an enterprise in Kenya?', 'Yes. Foreign individuals or entities may generally hold full ownership, subject to sector-specific restrictions and normal banking, tax-agent and secretarial requirements.'],
    ],
  },
]

function FAQ() {
  const [category, setCategory] = useState('all')
  const [query, setQuery] = useState('')
  const [open, setOpen] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const visibleGroups = faqGroups
    .filter((group) => category === 'all' || group.id === category)
    .map((group) => ({
      ...group,
      items: group.items.filter(([question, answer]) =>
        `${question} ${answer}`.toLowerCase().includes(query.trim().toLowerCase())
      ),
    }))
    .filter((group) => group.items.length > 0)

  return (
    <PageShell active="FAQ" hideHero>
      <section className="faq-directory-hero">
        <div className="container faq-directory-hero-inner">
          <nav className="breadcrumb" aria-label="Breadcrumb"><a href="#/">Home</a><span>/</span><b>FAQ</b></nav>
          <h1>Frequently Asked Questions &amp; Statutory Guidance</h1>
          <p>Clear, authoritative answers to common inquiries regarding Kenyan tax obligations, KRA eTIMS mandates, donor grant accounting, and outsourced advisory retainer packages.</p>
          <div className="faq-search">
            <span>⌕</span>
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search tax deadlines, eTIMS rules, USAID grant audits, retainers..."
              type="search"
              aria-label="Search frequently asked questions"
            />
            <button type="button" onClick={() => setQuery(query)}>Search</button>
          </div>
          <div className="faq-popular">Popular searches:
            <button type="button" onClick={() => setQuery('eTIMS')}>eTIMS exemption</button>
            <span>•</span>
            <button type="button" onClick={() => setQuery('VAT')}>VAT 20th</button>
            <span>•</span>
            <button type="button" onClick={() => setQuery('USAID')}>USAID pre-audit</button>
          </div>
        </div>
      </section>

      <section className="faq-directory">
        <div className="container">
          <div className="faq-category-tabs" aria-label="FAQ categories">
            {categories.map(([id, label, icon]) => (
              <button
                type="button"
                className={category === id ? 'faq-category active' : 'faq-category'}
                onClick={() => setCategory(id)}
                key={id}
              >
                <span>{icon}</span>{label}
              </button>
            ))}
          </div>

          <div className="faq-directory-grid">
            <div className="faq-accordion-column">
              {visibleGroups.length === 0 ? (
                <div className="faq-empty">No matching questions were found. Try another search term.</div>
              ) : visibleGroups.map((group) => (
                <section className="faq-directory-group" key={group.id}>
                  <div className="faq-group-heading">
                    <span>{group.number}</span>
                    <div><h2>{group.title}</h2><p>{group.subtitle}</p></div>
                  </div>
                  <div className="faq-group-items">
                    {group.items.map(([question, answer]) => {
                      const itemKey = `${group.id}-${question}`
                      const isOpen = open === itemKey
                      return (
                        <article className={isOpen ? 'faq-directory-item open' : 'faq-directory-item'} key={itemKey}>
                          <button type="button" onClick={() => setOpen(isOpen ? '' : itemKey)}>
                            <span>{question}</span><b>{isOpen ? '⌃' : '⌄'}</b>
                          </button>
                          {isOpen && <p>{answer}</p>}
                        </article>
                      )
                    })}
                  </div>
                </section>
              ))}
            </div>

            <aside className="faq-sidebar">
              <div className="advisor-card" id="inquiry">
                <div className="advisor-title"><div>♙</div><div><h3>Have a Specific Question?</h3><span><i /> ICPAK Advisor Available</span></div></div>
                <p>Can&apos;t find the answer you&apos;re looking for? Speak directly with an ICPAK-certified advisor for confidential guidance.</p>
                {submitted ? (
                  <div className="form-success">Thank you. An advisor will contact you within 4 working hours.</div>
                ) : (
                  <form onSubmit={(event) => { event.preventDefault(); setSubmitted(true) }}>
                    <label>Your Full Name<input required name="name" placeholder="e.g. David Mwangi" /></label>
                    <label>Phone / WhatsApp<input required name="phone" placeholder="+254 700 000 000" /></label>
                    <label>Subject of Inquiry<select name="subject"><option>KRA eTIMS &amp; Tax Audit</option><option>NGO Grant Compliance &amp; Audit</option><option>Monthly Accounting Retainer</option><option>Business Incorporation (BRS)</option><option>Other Statutory Matter</option></select></label>
                    <label>Brief Question<textarea name="message" rows="3" placeholder="Outline your issue or question..." /></label>
                    <button type="submit" className="advisor-submit">Submit Inquiry</button>
                  </form>
                )}
              </div>

              <div className="resource-card">
                <span>▾ Free Resource</span>
                <h3>2026 Kenya Tax &amp; Statutory Compliance Calendar</h3>
                <p>Never miss a filing date. Review our statutory roadmap for PAYE, SHIF, Housing Levy, VAT and income tax deadlines.</p>
                <a href="#calendar">▧ Download PDF</a>
              </div>

              <div className="office-card">
                <h3>Nairobi Office Hours</h3>
                <dl><div><dt>Monday – Friday</dt><dd>8:00 AM – 5:00 PM</dd></div><div><dt>Saturday</dt><dd>9:00 AM – 1:00 PM</dd></div><div><dt>Sunday &amp; Holidays</dt><dd className="closed">Closed</dd></div></dl>
                <div className="office-phone"><span>☎</span><div><small>Direct Support Desk</small><a href="tel:+254700000000">+254 700 000 000</a></div></div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="faq-cta">
        <div className="container faq-cta-inner">
          <div><h2>Need Help With Tax Compliance or Donor Reporting?</h2><p>Book an in-depth session with our registered KRA tax agents and ICPAK consultants.</p></div>
          <div><a className="gold-button" href="#/consultation">Book a Free Consultation</a><a className="phone-button" href="tel:+254700000000">☎ Call +254 700 000 000</a></div>
        </div>
      </section>
    </PageShell>
  )
}

export default FAQ
