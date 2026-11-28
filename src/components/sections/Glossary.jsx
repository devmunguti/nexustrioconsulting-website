import './Glossary.css'
import { taxTerms } from '../../data/taxTerms'

function Glossary() {
  return (
    <section className="glossary-section" aria-labelledby="glossary-heading">
      <div className="container">
        <div className="glossary-heading">
          <span className="eyebrow">Plain-language guide</span>
          <h2 id="glossary-heading">Kenyan tax and payroll terms</h2>
          <p>These short definitions are general information, not advice for a specific tax situation.</p>
        </div>
        <div className="glossary-list">
          {taxTerms.map(({ term, definition }) => (
            <details className="glossary-item" key={term}>
              <summary>{term}<span aria-hidden="true">+</span></summary>
              <p>{definition}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Glossary
