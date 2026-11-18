import PageShell from '../components/layout/PageShell'

const sectors = [
  {
    number: '01',
    category: 'SECTOR 01',
    title: 'NGOs, Non-Profits & International Donor-Funded Projects',
    text: 'Fiduciary oversight and accountable finance for international donors such as USAID, the European Union, FCDO and Global Fund.',
    icon: '◎',
    points: ['Custom donor-compliant chart of accounts', 'Grant and sub-grantee monitoring', 'Procurement and asset audit trails', 'Pre-audit and donor reporting support'],
  },
  {
    number: '02',
    category: 'SECTOR 02',
    title: 'High-Growth SMEs, Tech Startups & Modern Founders',
    text: 'Scalable finance systems for founders navigating fundraising, payroll, statutory obligations and growth-stage reporting.',
    icon: '↗',
    points: ['Automated monthly management accounts', 'eTIMS onboarding and statutory filing', 'Financial models and cashflow forecasts', 'Lean outsourced finance team support'],
  },
  {
    number: '03',
    category: 'SECTOR 03',
    title: 'Established Corporates, Multinationals & High-Net-Worth Entities',
    text: 'Strategic statutory, tax and corporate governance support for complex organizations and senior decision-makers.',
    icon: '▥',
    points: ['Corporate tax and transfer pricing advisory', 'Executive tax and governance review', 'Board and consolidated reporting', 'Secretarial and statutory compliance'],
  },
]

const comparison = [
  ['Primary Accounting', 'IFRS / Modified Cash Basis', 'IFRS / SME / SaaS', 'Full IFRS / Group Consolidation'],
  ['KRA Compliance', 'Specialized donor KRA reporting', 'iTax / eTIMS / Automated payroll', 'Full CIT / CIT / Custom withholding'],
  ['Governance', 'Audit trail & sub-grantee oversight', 'Founder-led / Board of Directors', 'Executive Committee / Audit Committee'],
  ['Strategy / Payroll', 'Restricted vs unrestricted funding', 'Monthly operating burn & cash runway', 'Quarterly forecasting & executive salary'],
  ['Audit Readiness', 'External donor audits and field visits', 'Tax health checks and lender reporting', 'Annual statutory audits & regulatory reviews'],
  ['Typical Frequency', 'Monthly reports / lower grant cycles', 'Weekly reconciliations / monthly board packs', 'Continuous advisory / monthly and annual control'],
]

const testimonials = [
  ['★★★★★', '“Managing a $2.4M multi-donor consortium meant navigating complex KRA and donor reporting. Nexus Trio delivered clarity, audit readiness and dependable financial governance.”', 'DM', 'Dr. Miriam O. Mwangi', 'Regional Director, International NGO'],
  ['★★★★★', '“When our Kenya subsidiary grew, we needed reliable KRA, payroll and eTIMS support. The team integrated quickly and gave us a transparent, scalable finance function.”', 'KM', 'Kevin Mwangi', 'COO, Scaling Technology Enterprise'],
]

function WhoWeServe() {
  return (
    <PageShell active="Who We Serve" hideHero>
      <section className="who-hero">
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb"><a href="#/">Home</a><span>/</span><b>Who We Serve</b></nav>
          <div className="who-hero-grid">
            <div>
              <h1>Specialised Financial &amp; Statutory Stewardship for Every Stage of Growth</h1>
              <p>Whether managing complex international donor funding, enterprise entities, Kenya&apos;s eTIMS revolution, or safeguarding established SMEs, Nexus Trio delivers precision, accountability, statutory tax agility, and long-term sustainable operational resilience.</p>
            </div>
          </div>
          <div className="who-metrics">
            <div><strong>100%</strong><span>KRA Statutory Audit Readiness</span></div>
            <div><strong>&gt; $25M+</strong><span>Donor Grants Covered</span></div>
            <div><strong>150+</strong><span>SMEs &amp; Corporates Served</span></div>
            <div><strong>0%</strong><span>Allowable Disallowances</span></div>
          </div>
        </div>
      </section>

      <section className="who-sectors">
        <div className="container">
          <div className="who-section-heading">
            <span>Institutional Specialisation</span>
            <h2>Tailored Systems for Distinct Operating Models</h2>
            <p>We help institutions align statutory precision with the distinct expectations of their regulatory and funding environment.</p>
          </div>

          {sectors.map((sector, index) => (
            <article className="sector-section" key={sector.title}>
              <div className="sector-copy">
                <div className="sector-label"><span>{sector.category}</span><i /><small>{sector.category === 'SECTOR 01' ? 'NGO' : sector.category === 'SECTOR 02' ? 'SME' : 'CORPORATE'}</small></div>
                <h3>{sector.title}</h3>
                <p>{sector.text}</p>
                <div className="sector-points">
                  {sector.points.slice(0, 2).map((point) => <div key={point}><b>{sector.icon}</b><span>{point}</span></div>)}
                </div>
                {index === 0 && <small className="sector-small">Regulated frameworks for grant-funded, cross-border and multi-currency operations.</small>}
                {index === 1 && <small className="sector-small">Lean, scalable systems for founders preparing to raise capital or expand quickly.</small>}
                {index === 2 && <small className="sector-small">Risk-focused advisory for boards, executives and complex corporate groups.</small>}
                <a href="#/contact">Explore {index === 0 ? 'NGO Solutions' : index === 1 ? 'SME Packages' : 'Corporate Advisory'} →</a>
              </div>
              <aside className="sector-panel">
                <span>Key performance assurance</span>
                <h3>{index === 0 ? 'Donor Accountability Guarantee' : index === 1 ? 'Scalable Growth Reception' : 'Strategic Governance Interface'}</h3>
                <ul>
                  {sector.points.map((point) => <li key={point}><i>✓</i>{point}</li>)}
                </ul>
              </aside>
            </article>
          ))}
        </div>
      </section>

      <section className="sector-scope">
        <div className="container">
          <div className="who-section-heading"><span>Comparative Matrix</span><h2>Scope of Stewardship Across Sectors</h2><p>Our model adapts to sector obligations and stakeholder expectations.</p></div>
          <div className="comparison-table" role="table" aria-label="Sector comparison">
            <div className="comparison-row comparison-head" role="row"><span>Service Dimension</span><span>NGOs &amp; Donor Projects</span><span>High-Growth SMEs &amp; Tech</span><span>Corporates &amp; Multinationals</span></div>
            {comparison.map((row) => (
              <div className="comparison-row" role="row" key={row[0]}>{row.map((cell, index) => <span role={index === 0 ? 'rowheader' : 'cell'} key={cell}>{cell}</span>)}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="who-testimonials">
        <div className="container">
          <div className="who-section-heading"><span>Demonstrated Impact</span><h2>Fiduciary Success in Practice</h2><p>Hear directly from leaders navigating Kenya&apos;s evolving fiscal and governance environment.</p></div>
          <div className="testimonial-grid">
            {testimonials.map(([rating, quote, initials, name, role]) => (
              <article key={name}><div className="testimonial-stars">{rating}</div><blockquote>{quote}</blockquote><div className="testimonial-person"><span>{initials}</span><div><strong>{name}</strong><small>{role}</small></div></div></article>
            ))}
          </div>
        </div>
      </section>

      <section className="who-cta">
        <div className="container">
          <span>Ready to Elevate Your Compliance and Financial Stewardship?</span>
          <h2>Let&apos;s design a service model aligned to your sector.</h2>
          <p>Schedule an initial statutory health check or financial discovery session with our team.</p>
          <div><a href="tel:+254700000000">☎ Call +254 700 000 000</a><a href="#/consultation">Request a Consultation</a></div>
        </div>
      </section>
    </PageShell>
  )
}

export default WhoWeServe
