import SectionHeading from '../ui/SectionHeading'

function Process() {
  const steps = ['Discover', 'Define', 'Deliver', 'Improve']
  return (
    <section className="section">
      <SectionHeading eyebrow="Our process" title="A clear, collaborative approach" />
      <ol className="process-list">
        {steps.map((step, index) => <li key={step}><span>{index + 1}</span>{step}</li>)}
      </ol>
    </section>
  )
}

export default Process
