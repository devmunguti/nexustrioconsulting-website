import PageShell from '../components/layout/PageShell'

const metrics = [
  ['99.8%', 'On-Time Statutory Filing Rate', 'Flawless adherence across PAYE, VAT, SHIF, NSSF and Housing Levy.'],
  ['Zero', 'Disallowance Record', 'Clean certification across donor and multi-lateral grant audits.'],
  ['KSh 450M+', 'Tax Exposure Mitigated', 'Proactive statutory structuring and legitimate KRA exposure prevention.'],
  ['100%', 'Senior CPA-K Oversight', 'Every deliverable is actively managed by certified practicing accountants.'],
]

const pillars = [
  ['⚖', 'Accredited Kenyan Regulatory Authority', 'Fully accredited KRA Tax Agents and ICPAK corporate members bridging policy changes with strategic business realities.', 'Verified KRA & ICPAK Compliance'],
  ['▦', 'Seamless eTIMS & Cloud Integration', 'Modern accounting systems across QuickBooks, Xero and enterprise ERPs with real-time eTIMS synchronization.', 'Automated eTIMS Systems'],
  ['$', 'Specialized NGO & Multi-Currency Fiduciary', 'International development funds, sub-grantee oversight, foreign exchange risk and donor reporting protocols.', 'Strict Donor Grant Governance'],
  ['♙', 'Dedicated Partner-Level Advisory', 'Direct unrestricted access to senior partners for high-stakes transactions and complex audits.', 'Direct Partner Accessibility'],
  ['▣', 'Strict Confidentiality & Institutional Security', 'Binding NDA protections, encrypted repositories and Kenya Data Protection Act compliance.', 'NDA Secured & KDPA Compliant'],
  ['⚖', 'Rapid KRA Audit & Agency Notice Defense', 'Formal objections, desk inquiry management and tax tribunal dispute resolution with rapid mobilization.', '24-Hour Notice Mobilization'],
]

const comparisons = [
  ['Statutory Compliance Cadence', 'Reactive filing close to the 9th or 20th deadlines.', 'Standardized 5-day pre-deadline closure across PAYE, VAT and levies.'],
  ['Client Service Personnel', 'Entry-level clerks and frequent personnel turnover.', 'Direct lead CPA-K engagement and certified tax agent advisory.'],
  ['KRA & Regulatory Representation', 'Third-party intermediaries with limited audit standing.', 'Authorized KRA Tax Agents provide immediate formal representation.'],
  ['eTIMS & Tech Architecture', 'Manual invoice stamping and disconnected spreadsheets.', 'Automated APIs and synchronized ERP and eTIMS workflows.'],
  ['NGO & Donor Readiness', 'General accounting with limited grant trail controls.', 'Specialized cost centers, cost allocation models and donor reporting.'],
  ['Strategic Commercial Value', 'Limited historical compliance and cash flow reports.', 'Executive CFO insight, tax planning and capital growth support.'],
]

const testimonials = [
  ['★★★★★', 'Managing a $2.4M USAID grant across three Kenyan counties required exacting accounting precision. Nexus Trio eliminated our donor reporting backlog and transformed our audit readiness.', 'DK', 'Dr. Katherine Mwangi', 'Executive Director, East Africa NGO'],
  ['★★★★★', 'Before the Nexus mandate, our payment reconciliations relied on spreadsheets and year-end filing. Their team now provides disciplined monthly reports and dependable KRA compliance.', 'BD', 'Brian Ochieng', 'Chief Executive, PayPal Africa Payment Systems'],
  ['★★★★★', 'Their tax and compliance practice gave our regional team confidence to expand operations. Their advice is technically rigorous while remaining practical and commercially grounded.', 'WN', 'Wanjiru Ndoti', 'Financial Director, Regional Manufacturing Group'],
]

function WhyUs() {
  return (
    <PageShell active="Why Us" hideHero>
      <section className="why-hero">
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb"><a href="#/">Home</a><span>/</span><b>Why Us</b></nav>
          <div className="why-hero-copy">
            <span>The Nexus Trio Advantage</span>
            <h1>Institutional Rigor, Agile Commercial Insight</h1>
            <p>Discover why premier NGOs, enterprises and fast-growth ventures across Kenya entrust their strategic financial governance, continuous KRA compliance and strict donor audit readiness to Nexus Trio Consulting.</p>
          </div>
        </div>
      </section>

      <section className="why-metrics-section">
        <div className="container why-metrics">
          {metrics.map(([value, title, text]) => (
            <article key={title}><div><strong>{value}</strong><span>◷</span></div><h2>{title}</h2><p>{text}</p></article>
          ))}
        </div>
      </section>

      <section className="pillars-section">
        <div className="container">
          <div className="why-section-heading"><span>The Pillars of Distinction</span><h2>The 6 Pillars of Our Competitive Edge</h2><i /><p>In a dynamic regulatory landscape characterized by fiscal reform, eTIMS mandates and rigorous donor surveillance, Nexus Trio provides steadfast, elite-tier advisory.</p></div>
          <div className="pillars-grid">
            {pillars.map(([icon, title, text, result], index) => (
              <article key={title}>
                <div className="pillar-card-head"><div>{icon}</div><span>{String(index + 1).padStart(2, '0')}</span></div>
                <h3>{title}</h3>
                <p>{text}</p>
                <div className="pillar-result"><span>{result}</span><b>✓</b></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="comparison-section">
        <div className="container">
          <div className="why-section-heading"><span>Benchmark Our Value</span><h2>Traditional Accounting vs. Nexus Trio Advisory</h2><i /><p>Evaluate how our proactive, senior-led partnership compares to conventional bookkeeping bureaus.</p></div>
          <div className="why-comparison">
            <div className="why-comparison-head"><span>Evaluation Metric</span><span>Traditional Bookkeeping Firms</span><span>Nexus Trio Institutional Model</span></div>
            {comparisons.map(([metric, traditional, nexus]) => (
              <div className="why-comparison-row" key={metric}>
                <span>{metric}</span>
                <span><b>×</b>{traditional}</span>
                <span><b>✓</b>{nexus}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="confidence-section">
        <div className="container">
          <div className="why-section-heading"><span>Reputation Built on Trust</span><h2>Client Voices of Confidence</h2><p>Read verified accounts from organizations led by disciplined financial leaders.</p></div>
          <div className="confidence-grid">
            {testimonials.map(([rating, quote, initials, name, role]) => (
              <article key={name}>
                <div className="confidence-rating">{rating}</div>
                <blockquote>{quote}</blockquote>
                <div className="confidence-person"><span>{initials}</span><div><strong>{name}</strong><small>{role}</small></div></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="why-cta">
        <div className="container"><span>Institutional Peace of Mind</span><h2>Experience the Confidence of Uncompromising Financial Stewardship</h2><p>Schedule an executive session with our certified tax advisers and ICPAK consultants to safeguard your risk exposure, modernize statutory filings and strengthen financial governance.</p><div><a className="gold-button" href="#/consultation">Book a Free Consultation</a><a className="phone-button" href="tel:+254700000000">☎ Call +254 700 000 000</a></div></div>
      </section>
    </PageShell>
  )
}

export default WhyUs
