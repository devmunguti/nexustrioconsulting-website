import Navbar from './Navbar'
import Footer from './Footer'

function PageShell({ active, eyebrow, title, lead, hideHero = false, children }) {
  return (
    <div className="inner-page">
      <Navbar active={active} />

      <main>
        {!hideHero && <section className="inner-hero">
          <div className="container">
            <nav className="breadcrumb" aria-label="Breadcrumb"><a href="#/">Home</a><span>/</span><b>{eyebrow}</b></nav>
            <h1>{title}</h1>
            {lead && <p>{lead}</p>}
          </div>
        </section>}
        {children}
      </main>

      <Footer />
    </div>
  )
}

export default PageShell
