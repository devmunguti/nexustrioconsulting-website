import companyLogo from '../../assets/nexus-trio-logo.png'

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <div className="footer-logo"><img src={companyLogo} alt="Nexus Trio Consulting Ltd" /></div>
              <p>Nexus Trio Consulting Ltd is a licensed professional consultancy providing financial architecture, tax representation and fiduciary oversight across Nairobi and East Africa.</p>
              <div className="footer-socials">
                <a href="#linkedin" aria-label="LinkedIn">in</a>
                <a href="#x" aria-label="X">X</a>
                <a href="#facebook" aria-label="Facebook">f</a>
                <a href="#instagram" aria-label="Instagram">◎</a>
              </div>
            </div>
            <div>
              <h4>Quick Links</h4>
              <a href="#/">Home Overview</a>
              <a href="#/about">About Our Firm</a>
              <a href="#/about">Leadership Team</a>
              <a href="#/services">Our Practice Areas</a>
              <a href="#/contact">Contact Nairobi Office</a>
            </div>
            <div>
              <h4>Specialisms</h4>
              <a href="#/services">KRA Tax Audit Representation</a>
              <a href="#/services">eTIMS Middleware Integration</a>
              <a href="#/services">NGO &amp; Grant Fiduciary Defense</a>
              <a href="#/services">Payroll &amp; Statutory Reviews</a>
              <a href="#/services">SME CFO Advisory</a>
            </div>
            <div>
              <h4>Nairobi Office</h4>
              <p>● Valley View Office Park, Westlands, Nairobi</p>
              <a href="tel:+254700000000">☎ +254 700 000 000</a>
              <a href="mailto:info@nexustrio.co.ke">✉ info@nexustrio.co.ke</a>
              <p>◷ Mon - Fri: 8:00 AM - 5:00 PM EAT</p>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© 2026 Nexus Trio Consulting Ltd. All rights reserved.</span>
            <div><a href="#privacy">Privacy Policy</a><a href="#terms">Terms of Engagement</a><a href="#statutory">KRA Compliance Notice</a></div>
          </div>
        </div>
      </footer>
      <a className="whatsapp" href="https://wa.me/254700000000" aria-label="Chat on WhatsApp">◉ <span>WhatsApp Advisors</span></a>
    </>
  )
}

export default Footer
