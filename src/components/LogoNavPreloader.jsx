import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { motion } from 'motion/react'
import logo from '../assets/nexus-trio-logo.png'
import './LogoNavPreloader.css'

const INTRO_DURATION_MS = 1000
const REDUCED_MOTION_DURATION_MS = 240
const HARD_TIMEOUT_MS = 3000
const PENDING_CLASS = 'logo-nav-preloader-pending'

function LogoNavPreloader() {
  const [isVisible, setIsVisible] = useState(false)
  const [isExiting, setIsExiting] = useState(false)
  const [reducedMotion, setReducedMotion] = useState(false)
  const finishRef = useRef(() => {})

  useEffect(() => {
    const prefersReducedMotion =
      window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false
    const totalDuration = prefersReducedMotion
      ? REDUCED_MOTION_DURATION_MS
      : INTRO_DURATION_MS
    const exitDuration = totalDuration * 0.4
    const previousBodyOverflow = document.body.style.overflow
    const previousHtmlOverflow = document.documentElement.style.overflow
    let hasFinished = false

    document.body.style.overflow = 'hidden'
    document.documentElement.style.overflow = 'hidden'
    document.documentElement.classList.add(PENDING_CLASS)
    const showFrame = window.requestAnimationFrame(() => {
      setReducedMotion(prefersReducedMotion)
      setIsVisible(true)
    })

    const finish = () => {
      if (hasFinished) return
      hasFinished = true

      setIsVisible(false)
      document.body.style.overflow = previousBodyOverflow
      document.documentElement.style.overflow = previousHtmlOverflow
      document.documentElement.classList.remove(PENDING_CLASS)
    }
    finishRef.current = finish

    const exitTimer = window.setTimeout(
      () => setIsExiting(true),
      totalDuration - exitDuration,
    )
    const finishTimer = window.setTimeout(finish, totalDuration + 100)
    const safetyTimer = window.setTimeout(finish, HARD_TIMEOUT_MS)

    return () => {
      window.clearTimeout(exitTimer)
      window.clearTimeout(finishTimer)
      window.clearTimeout(safetyTimer)
      window.cancelAnimationFrame(showFrame)
      document.body.style.overflow = previousBodyOverflow
      document.documentElement.style.overflow = previousHtmlOverflow
      document.documentElement.classList.remove(PENDING_CLASS)
    }
  }, [])

  if (!isVisible) return null

  const exitAnimation = reducedMotion
    ? { opacity: 0 }
    : { opacity: 0, clipPath: 'inset(0 0 100% 0)' }

  return createPortal(
    <motion.div
      className="logo-nav-preloader"
      initial={false}
      animate={isExiting ? exitAnimation : { opacity: 1, clipPath: 'inset(0 0 0% 0)' }}
      transition={{
        duration:
          (reducedMotion ? REDUCED_MOTION_DURATION_MS : INTRO_DURATION_MS) *
          0.4 /
          1000,
        ease: 'easeInOut',
      }}
      aria-hidden={isExiting}
      onAnimationComplete={() => {
        if (isExiting) finishRef.current()
      }}
    >
      <motion.img
        className="logo-nav-preloader__logo"
        src={logo}
        alt="Nexus Trio Consulting"
        width={750}
        height={504}
        initial={reducedMotion ? { opacity: 0 } : { opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration:
            (reducedMotion ? REDUCED_MOTION_DURATION_MS : INTRO_DURATION_MS) *
            0.4 /
            1000,
          ease: 'easeOut',
        }}
      />
      <motion.span
        className="logo-nav-preloader__progress"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isExiting ? 1 : 0.82 }}
        transition={{
          duration:
            (reducedMotion ? REDUCED_MOTION_DURATION_MS : INTRO_DURATION_MS) *
            0.7 /
            1000,
          ease: 'easeOut',
        }}
      />
    </motion.div>,
    document.body,
  )
}

export default LogoNavPreloader
