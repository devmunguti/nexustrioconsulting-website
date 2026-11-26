import './Glossary.css'

const terms = [
  ['PAYE', 'Pay As You Earn. In Kenya, employers generally deduct income tax from employees’ pay and send it to the Kenya Revenue Authority.'],
  ['NSSF', 'The National Social Security Fund, which provides social security benefits and collects contributions under Kenya’s rules.'],
  ['SHA', 'The Social Health Authority, Kenya’s public body responsible for administering the national social health insurance system.'],
  ['eTIMS', 'The Kenya Revenue Authority’s Electronic Tax Invoice Management System for managing electronic tax invoices.'],
  ['VAT', 'Value Added Tax, a tax on certain goods and services. Registration, charging and filing rules depend on the business and current law.'],
  ['KRA PIN', 'A taxpayer identification number issued by the Kenya Revenue Authority for tax-related transactions.'],
]

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
          {terms.map(([term, definition]) => (
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
