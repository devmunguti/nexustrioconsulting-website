import { motion, useReducedMotion } from 'motion/react'

const ROLL_DURATION_SECONDS = 1.65
const DIGIT_STAGGER_SECONDS = 0.08

interface OdometerCounterProps {
  value: number
  prefix?: string
  suffix?: string
  decimals?: number
  isInView: boolean
}

function OdometerCounter({ value, prefix = '', suffix = '', decimals = 0, isInView }: OdometerCounterProps) {
  const prefersReducedMotion = useReducedMotion()
  const precision = Number.isInteger(decimals) && decimals >= 0 ? Math.min(decimals, 20) : 0
  const formattedValue = new Intl.NumberFormat('en-US', {
    minimumFractionDigits: precision,
    maximumFractionDigits: precision,
  }).format(value)
  const shouldRoll = isInView && prefersReducedMotion !== true
  const finalValue = `${prefix}${formattedValue}${suffix}`

  return (
    <span className="odometer-counter">
      <span className="odometer-counter__visual" aria-hidden="true">
        {prefix && <span className="odometer-counter__adornment">{prefix}</span>}
        <span className="odometer-counter__digits">
          <span className={`odometer-counter__final${shouldRoll ? ' odometer-counter__final--hidden' : ''}`}>{formattedValue}</span>
          {shouldRoll && (
            <span className="odometer-counter__rolling">
              {Array.from(formattedValue).map((character, index) => {
                if (!/\d/.test(character)) {
                  return <span className="odometer-counter__symbol" key={`symbol-${index}`}>{character}</span>
                }

                const digit = Number(character)
                return (
                  <span className="odometer-counter__digit-window" key={`digit-${index}`}>
                    <motion.span
                      className="odometer-counter__digit-strip"
                      initial={{ y: '0%' }}
                      animate={{ y: `${-digit * 10}%` }}
                      transition={{
                        type: 'tween',
                        ease: 'easeOut',
                        duration: ROLL_DURATION_SECONDS,
                        delay: index * DIGIT_STAGGER_SECONDS,
                      }}
                    >
                      {Array.from({ length: 10 }, (_, number) => (
                        <span className="odometer-counter__digit" key={number}>{number}</span>
                      ))}
                    </motion.span>
                  </span>
                )
              })}
            </span>
          )}
        </span>
        {suffix && <span className="odometer-counter__adornment">{suffix}</span>}
      </span>
      <span className="odometer-counter__screen-reader">{finalValue}</span>
    </span>
  )
}

export default OdometerCounter
