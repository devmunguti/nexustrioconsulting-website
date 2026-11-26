import { useEffect, useRef } from 'react'
import { siteConfig } from '../../data/siteConfig'
import './WhatsAppButton.css'

function WhatsAppButton() {
  const { whatsappNumber, whatsappMessage } = siteConfig
  const buttonRef = useRef(null)

  useEffect(() => {
    if (!whatsappNumber) return undefined

    const protectedElements = 'form button[type="submit"], form input[type="submit"], [role="dialog"], .testimonial-modal'
    let frame = 0

    const updateVisibility = () => {
      frame = 0
      const button = buttonRef.current
      if (!button) return

      const buttonRect = button.getBoundingClientRect()
      const overlapsProtectedElement = [...document.querySelectorAll(protectedElements)].some((element) => {
        const rect = element.getBoundingClientRect()
        return rect.width > 0
          && rect.height > 0
          && rect.left < buttonRect.right
          && rect.right > buttonRect.left
          && rect.top < buttonRect.bottom
          && rect.bottom > buttonRect.top
      })

      button.toggleAttribute('data-obstructed', overlapsProtectedElement)
    }

    const scheduleVisibilityUpdate = () => {
      if (frame) window.cancelAnimationFrame(frame)
      frame = window.requestAnimationFrame(updateVisibility)
    }

    const mutationObserver = new MutationObserver(scheduleVisibilityUpdate)
    mutationObserver.observe(document.body, { childList: true, subtree: true })
    window.addEventListener('scroll', scheduleVisibilityUpdate, { passive: true })
    window.addEventListener('resize', scheduleVisibilityUpdate)
    scheduleVisibilityUpdate()

    return () => {
      mutationObserver.disconnect()
      window.removeEventListener('scroll', scheduleVisibilityUpdate)
      window.removeEventListener('resize', scheduleVisibilityUpdate)
      if (frame) window.cancelAnimationFrame(frame)
    }
  }, [whatsappNumber])

  if (!whatsappNumber) return null

  const href = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`

  return (
    <a
      ref={buttonRef}
      className="whatsapp-button"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
    >
      <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24">
        <path d="M20.2 3.8A11.5 11.5 0 0 0 2.1 17.7L.7 23l5.5-1.4A11.5 11.5 0 0 0 20.2 3.8Z" />
        <path d="M8.2 7.2c-.3-.7-.6-.7-.9-.7h-.8c-.3 0-.7.1-1 .5-.4.4-1.3 1.3-1.3 3.1s1.3 3.6 1.5 3.8c.2.3 2.5 4 6.1 5 3 .8 3.6-.4 4.2-1 .5-.6.7-1.3.8-1.8.1-.4 0-.7-.3-.8l-2.7-1.3c-.4-.2-.7-.3-1 .2l-1.1 1.4c-.2.3-.5.3-.9.1a9.5 9.5 0 0 1-2.8-1.7 10.4 10.4 0 0 1-1.9-2.4c-.2-.4 0-.6.2-.8l.7-.8.4-.7c.1-.3 0-.5 0-.7L8.2 7.2Z" />
      </svg>
    </a>
  )
}

export default WhatsAppButton
