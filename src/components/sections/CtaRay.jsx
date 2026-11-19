import { useEffect, useRef, useState } from 'react'
import { motion, useAnimate, useReducedMotion } from 'motion/react'

const RAY_SWEEP_DURATION = 10
const RAY_REPEAT_DELAY = 1.5
const RAY_OPACITY = 0.3
const HAS_INTERSECTION_OBSERVER = typeof IntersectionObserver !== 'undefined'

function CtaRay() {
  const [scope, animate] = useAnimate()
  const animationRef = useRef(null)
  const [isBannerInView, setIsBannerInView] = useState(false)
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    const banner = scope.current?.parentElement
    if (!banner || !HAS_INTERSECTION_OBSERVER) return undefined

    const observer = new IntersectionObserver(([entry]) => {
      setIsBannerInView(entry.isIntersecting)
    }, { threshold: 0.01 })

    observer.observe(banner)
    return () => observer.disconnect()
  }, [scope])

  useEffect(() => {
    const ray = scope.current
    if (!ray) return undefined

    if (prefersReducedMotion || !HAS_INTERSECTION_OBSERVER) {
      animationRef.current?.stop()
      animationRef.current = null
      animate(ray, { x: '0vw', opacity: RAY_OPACITY }, { duration: 0 })
      return undefined
    }

    if (isBannerInView) {
      animationRef.current ??= animate(ray, {
        x: ['40vw', '-120vw'],
        opacity: [0, RAY_OPACITY, RAY_OPACITY, 0],
      }, {
        x: {
          duration: RAY_SWEEP_DURATION,
          ease: 'linear',
          repeat: Infinity,
          repeatDelay: RAY_REPEAT_DELAY,
        },
        opacity: {
          duration: RAY_SWEEP_DURATION,
          ease: 'linear',
          times: [0, 0.08, 0.92, 1],
          repeat: Infinity,
          repeatDelay: RAY_REPEAT_DELAY,
        },
      })
      animationRef.current.play()
    } else {
      animationRef.current?.pause()
    }

    return undefined
  }, [animate, isBannerInView, prefersReducedMotion, scope])

  useEffect(() => () => animationRef.current?.stop(), [])

  return (
    <motion.div
      ref={scope}
      className="cta-ray"
      aria-hidden="true"
      style={{ x: '40vw', opacity: 0, rotate: 12 }}
    />
  )
}

export default CtaRay
