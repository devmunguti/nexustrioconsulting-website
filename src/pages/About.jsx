import Navbar from '../components/layout/Navbar'
import CtaRay from '../components/sections/CtaRay'
import jacobKiokoImage from '../assets/jacob-kioko.jpeg'
import nicholasMuasaImage from '../assets/nicholas-muasa.jpeg'

const pillars = [
  ['01', 'Deep Regulatory Insight', 'Rigorous interpretation of the Kenya Revenue Authority framework, eTIMS standards, National Treasury policies and county tax mandates.'],
  ['02', 'Strategic Opportunity', 'Commercial advisory, capital readiness, cost restructuring and corporate modeling for secure business growth.'],
  ['03', 'Fiduciary Success', 'Audit defense, institutional transparency and financial controls for international donors and cross-border partnerships.'],
]

const guarantees = [
  ['⚖', 'Fiduciary Integrity', 'Ethical governance and absolute adherence to legal statutes and donor mandates.'],
  ['◎', 'Technical Precision', 'Zero tolerance for miscalculations across eTIMS, VAT reconciliations and payroll.'],
  ['▣', 'Client Confidentiality', 'Institutional-grade data protection governed by NDAs and secure fiscal repositories.'],
  ['↯', 'Agile Problem-Solving', 'Rapid regulatory dispute mitigation and proactive risk adjustments before deadlines.'],
]

const leaders = [
  ['MANAGING PARTNER', 'David Mwangi, CPA-K', 'Managing Partner & Statutory Lead', 'ICPAK Practicing Member #4892', 'Over 16 years leading corporate audits, tax restructuring and national revenue appeals across East Africa.', 'Corporate & Tax Practice'],
  ['PARTNER', 'Dr. Rosemary Kamau', 'Partner, NGO & Donor Fiduciary', 'Ph.D. Dev. Finance / CPA-K', 'Specialist in grant compliance, consortium monitoring and fiduciary standards for USAID, EU and Global Fund operations.', 'Grant Assurance'],
  ['TAX DIRECTOR', 'Sarah Ochieng, CPA', 'Senior Tax Director & KRA Disputes', 'KRA Registered Tax Agent', 'Directs dispute resolution with deep mastery of transfer pricing, customs valuation and corporate excise duties.', 'Tribunal & KRA Practice'],
  ['TECH LEAD', 'Brian Kiprono', 'Head of Accounting Tech & eTIMS', 'ERP & API Integration Lead', 'Specializes in ERP-to-eTIMS middleware, automated VAT reconciliations and digital workflow migrations.', 'eTIMS Systems'],
  ['ACCOUNTING TEAM LEAD', 'CPA JACOB KIOKO', 'Team lead -Accounting', 'CPA', 'Leads the accounting team, supporting clear and accurate financial reporting.', 'Accounting', jacobKiokoImage],
  ['LEADERSHIP TEAM', 'CPA Nicholas Muasa, Msc', '', 'CPA · MSc', 'Brings his accounting expertise and professional qualifications to the firm’s leadership and client work.', 'Leadership Team', nicholasMuasaImage, true],
]

function About() {
  return (
    <div className="about-page">
      <Navbar active="About Us" />

      <main>
        <section className="about-hero">
          <div className="container">
            <nav className="breadcrumb" aria-label="Breadcrumb"><a href="#/">Home</a><span>/</span><b>About Us</b></nav>
            <div className="about-hero-grid">
              <div>
                <h1>Connecting Insights, Opportunities, &amp; <span>Sustainable Growth</span> in East Africa</h1>
                <p>Nexus Trio Consulting Ltd is a distinguished Kenyan financial stewardship and statutory advisory firm. Headquartered in Nairobi, we bridge institutional governance, eTIMS compliance and international grant management to foster uncompromised integrity and long-term enterprise resilience.</p>
              </div>
              <blockquote><span>Our Mandate</span><p>&ldquo;To engineer clear pathways through East Africa&apos;s complex regulatory and fiscal matrix with precision, ethics, and strategic foresight.&rdquo;</p></blockquote>
            </div>
            <div className="about-metrics">
              <div><strong>10+</strong><span>Years of Excellence</span></div>
              <div><strong>100%</strong><span>KRA Compliance Track</span></div>
              <div><strong>KSh 1.2B+</strong><span>Donor Funds Supervised</span></div>
              <div><strong>350+</strong><span>Entities Advised</span></div>
            </div>
          </div>
        </section>

        <section className="philosophy-section">
          <div className="container philosophy-grid">
            <div className="philosophy-copy">
              <span>Our Heritage &amp; Identity</span>
              <h2>The Architecture Behind the <b>&ldquo;Trio&rdquo;</b> Philosophy</h2>
              <p>Founded on the belief that sustainable commercial and social enterprise requires more than basic bookkeeping, <strong>Nexus Trio Consulting Ltd</strong> was architected as the convergence point of three indispensable institutional pillars.</p>
              <div className="pillar-list">
                {pillars.map(([number, title, text]) => (
                  <article key={title}><div>{number}</div><div><h3>{title}</h3><p>{text}</p></div></article>
                ))}
              </div>
            </div>
            <aside className="three-pillars">
              <div className="pillar-emblem">▥</div>
              <h3>The Three Pillars</h3>
              <span>Connecting Value, Legality &amp; Scale</span>
              <div className="pillar-rows">
                <div><p>Regulatory Oversight</p><b>Tax &amp; Legal</b></div>
                <div><p>Financial Strategy</p><b>Scale &amp; Capital</b></div>
                <div><p>Donor &amp; NGO Fiduciary</p><b>Audits &amp; Grants</b></div>
              </div>
              <blockquote>&ldquo;Our mission is to establish East Africa&apos;s highest benchmark for financial governance and client fidelity.&rdquo;<b>Nexus Trio Executive Committee</b></blockquote>
            </aside>
          </div>
        </section>

        <section className="guarantees-section">
          <div className="container">
            <div className="about-section-heading"><span>Our Operating Charter</span><h2>Core Institutional Guarantees</h2><p>Every partner, analyst and associate operates under a standardized fiduciary and confidentiality covenant.</p></div>
            <div className="guarantees-grid">
              {guarantees.map(([icon, title, text]) => <article key={title}><div>{icon}</div><h3>{title}</h3><p>{text}</p></article>)}
            </div>
          </div>
        </section>

        <section className="leadership-section">
          <div className="container">
            <div className="leadership-heading"><div><span>Our Stewards</span><h2>Leadership &amp; Senior Partners</h2></div><p>Led by accredited Certified Public Accountants with experience across Big Four firms, revenue authorities and global non-profits.</p></div>
            <div className="leader-grid">
              {leaders.map(([role, name, title, credential, text, practice, image, containImage]) => (
                <article className="leader-card" key={name}>
                  <div className="leader-portrait">{image ? <img className={`leader-image${containImage ? ' leader-image--contain' : ''}`} src={image} alt={name} /> : <div>♟</div>}{role && <span>{role}</span>}</div>
                  <div className="leader-info"><h3>{name}</h3>{title && <b>{title}</b>}{credential && <em>{credential}</em>}{text && <p>{text}</p>}</div>
                  <div className="leader-footer"><span>{practice}</span><a href="#linkedin" aria-label={`${name} LinkedIn`}>in</a></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="accreditations-section">
          <div className="container">
            <p>Accredited and regulated in accordance with Kenyan &amp; global standards</p>
            <div className="accreditation-grid">
              <div><b>▥</b><strong>ICPAK Kenya</strong><span>Practicing Member Firm</span></div>
              <div><b>◆</b><strong>KRA Tax Agent</strong><span>Licensed Advisory Agent</span></div>
              <div><b>▤</b><strong>BRS Kenya</strong><span>Corporate Compliance Certified</span></div>
              <div><b>$</b><strong>USAID &amp; Global Fund</strong><span>Fiduciary Standards Compliant</span></div>
            </div>
          </div>
        </section>

        <section className="cta-section" id="contact">
          <CtaRay />
          <div className="container cta-copy"><span>Speak With Our Partners</span><h2>Need Guidance With Tax Compliance or Donor Grant Reporting?</h2><p>Whether you are navigating a KRA inquiry, transitioning to eTIMS or managing donor audits, our senior team is ready to evaluate your position under full NDA.</p><div><a className="gold-button" href="#/consultation">▣ Book a Free Consultation</a><a className="phone-button" href="tel:+254700000000">☎ Call +254 700 000 000</a></div></div>
        </section>
      </main>
    </div>
  )
}

export default About
