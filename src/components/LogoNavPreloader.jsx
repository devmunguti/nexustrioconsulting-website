import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { motion } from 'motion/react'
import logo from '../assets/nexus-trio-logo.png'
import './LogoNavPreloader.css'

const INTRO_DURATION_MS = 500
const REDUCED_MOTION_DURATION_MS = 240
const SESSION_STORAGE_KEY = 'nexus-trio-preloader-shown'

function LogoNavPreloader() {
  const [isVisible, setIsVisible] = useState(false)
  const [isExiting, setIsExiting] = useState(false)
  const [reducedMotion, setReducedMotion] = useState(false)
  const finishRef = useRef(() => {})
  const hasCheckedSession = useRef(false)

  useEffect(() => {
    if (hasCheckedSession.current) return undefined
    hasCheckedSession.current = true

    let hasShownThisSession = false
    try {
      hasShownThisSession =
        window.sessionStorage.getItem(SESSION_STORAGE_KEY) === 'true'
      if (!hasShownThisSession) {
        window.sessionStorage.setItem(SESSION_STORAGE_KEY, 'true')
      }
    } catch {
      // Storage can be unavailable; show the preloader for this mount.
    }

    if (hasShownThisSession) return undefined

    const prefersReducedMotion =
      window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false
    const totalDuration = prefersReducedMotion
      ? REDUCED_MOTION_DURATION_MS
      : INTRO_DURATION_MS
    const exitDuration = totalDuration * 0.4
    let hasFinished = false

    const showFrame = window.requestAnimationFrame(() => {
      setReducedMotion(prefersReducedMotion)
      setIsVisible(true)
    })

    const finish = () => {
      if (hasFinished) return
      hasFinished = true

      setIsVisible(false)
    }
    finishRef.current = finish

    const exitTimer = window.setTimeout(
      () => setIsExiting(true),
      totalDuration - exitDuration,
    )
    const finishTimer = window.setTimeout(finish, totalDuration + 50)

    return () => {
      window.clearTimeout(exitTimer)
      window.clearTimeout(finishTimer)
      window.cancelAnimationFrame(showFrame)
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
