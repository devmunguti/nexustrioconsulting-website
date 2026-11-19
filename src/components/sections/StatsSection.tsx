import { useRef } from 'react'
import { useInView } from 'motion/react'
import SectionHeading from '../ui/SectionHeading'
import OdometerCounter from '../ui/OdometerCounter'
import { stats } from '../../data/stats'
import './StatsSection.css'

function StatsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.4 })

  return (
    <section className="section stats-section" ref={sectionRef} aria-label="Pillar at a glance">
      <div className="container">
        <SectionHeading
          eyebrow="Our impact"
          title="Financial clarity, in numbers"
          description="Our work spans accounting, compliance and donor reporting support."
        />
        <div className="stats-grid">
          {stats.map((stat) => (
            <article className="stats-card" key={stat.id}>
              <div className="stats-card__number">
                <OdometerCounter
                  value={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  decimals={stat.decimals}
                  isInView={isInView}
                />
              </div>
              <h3 className="stats-card__label">{stat.label}</h3>
              {stat.description && <p className="stats-card__description">{stat.description}</p>}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default StatsSection
