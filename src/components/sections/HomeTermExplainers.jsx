import { taxTerms } from '../../data/taxTerms'

const HOME_TERMS = ['eTIMS', 'WHT', 'PAYE', 'SHIF', 'KRA PIN']

function HomeTermExplainers() {
  const terms = HOME_TERMS.map((term) => taxTerms.find((item) => item.term === term)).filter(Boolean)

  return (
    <section className="nx-home-terms" aria-labelledby="nx-home-terms-heading">
      <div className="container">
        <div className="nx-home-terms__heading">
          <span>Plain-language guide</span>
          <h2 id="nx-home-terms-heading">What do these tax terms mean?</h2>
        </div>
        <div className="nx-home-terms__list">
          {terms.map(({ term, definition }) => (
            <details className="nx-home-terms__item" key={term}>
              <summary>What is {term}?</summary>
              <p>{definition}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HomeTermExplainers
