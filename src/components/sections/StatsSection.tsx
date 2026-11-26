import { useRef } from 'react'
import { useInView } from 'motion/react'
import SectionHeading from '../ui/SectionHeading'
import OdometerCounter from '../ui/OdometerCounter'
import { stats } from '../../data/stats'
import './StatsSection.css'

function StatsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.4 })

  const activeStats = stats.filter((stat) => stat.value !== null)
  if (activeStats.length === 0) {
    return null
  }

  return (
    <section className="section stats-section" ref={sectionRef} aria-label="Nexus Trio Consulting at a glance">
      <div className="container">
        <SectionHeading
          eyebrow="Key metrics"
          title="Our track record in numbers"
          description="Verified outcomes and service delivery figures."
        />
        <div className="stats-grid">
          {activeStats.map((stat) => (
            <article className="stats-card" key={stat.id}>
              <div className="stats-card__number">
                <OdometerCounter
                  value={stat.value!}
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
