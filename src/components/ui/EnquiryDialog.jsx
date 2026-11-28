import { useEffect, useRef, useState } from 'react'
import { Check, X } from 'lucide-react'
import { getEnquiryMessage, getEnquiryWhatsAppUrl } from '../../data/enquiryConfig'
import { ApiRequestError, testimonialApi } from '../../lib/testimonialApi'
import './EnquiryDialog.css'

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const EMAIL_ERROR = 'Please enter a valid email like name@example.com.'
const FAILURE_MESSAGE = 'Something went wrong. Please try again or use WhatsApp instead.'
const REQUEST_TIMEOUT_MS = 15000
const FOCUSABLE_SELECTOR = 'a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'

function EnquiryDialog({ service, onClose, returnFocusRef }) {
  const [mode, setMode] = useState('choices')
  const [status, setStatus] = useState('idle')
  const [email, setEmail] = useState('')
  const [additionalDetails, setAdditionalDetails] = useState('')
  const [emailError, setEmailError] = useState('')
  const [honeypot, setHoneypot] = useState('')
  const dialogRef = useRef(null)
  const whatsappRef = useRef(null)
  const emailRef = useRef(null)
  const successRef = useRef(null)
  const sendingRef = useRef(null)
  const errorRef = useRef(null)
  const requestControllerRef = useRef(null)
  const mountedRef = useRef(true)
  const focusLifecycleRef = useRef(0)

  useEffect(() => {
    const previousOverflow = document.body.style.overflow
    const returnTarget = returnFocusRef.current
    const lifecycle = focusLifecycleRef.current + 1
    focusLifecycleRef.current = lifecycle
    mountedRef.current = true
    document.body.style.overflow = 'hidden'
    whatsappRef.current?.focus()

    return () => {
      mountedRef.current = false
      requestControllerRef.current?.abort()
      document.body.style.overflow = previousOverflow
      window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => {
          if (focusLifecycleRef.current === lifecycle && returnTarget instanceof HTMLElement && returnTarget.isConnected) {
            returnTarget.focus()
          }
        })
      })
    }
  }, [returnFocusRef])

  useEffect(() => {
    const handleKeyDown = (event) => {
      const dialog = dialogRef.current
      if (!dialog) return

      if (event.key === 'Escape') {
        event.preventDefault()
        onClose()
        return
      }

      if (event.key !== 'Tab') return
      const focusableElements = [...dialog.querySelectorAll(FOCUSABLE_SELECTOR)]
        .filter((element) => element.tabIndex >= 0 && element.getClientRects().length > 0)
      if (focusableElements.length === 0) {
        event.preventDefault()
        dialog.focus()
        return
      }

      const first = focusableElements[0]
      const last = focusableElements[focusableElements.length - 1]
      if (!dialog.contains(document.activeElement)) {
        event.preventDefault()
        first.focus()
      } else if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [onClose])

  useEffect(() => {
    if (mode === 'choices' && status === 'idle') whatsappRef.current?.focus()
    if (mode === 'email' && status === 'idle') emailRef.current?.focus()
    if (status === 'sending') sendingRef.current?.focus()
    if (status === 'success') successRef.current?.focus()
    if (status === 'error') errorRef.current?.focus()
  }, [mode, status])

  const handleSubmit = async (event) => {
    event.preventDefault()
    setEmailError('')

    const normalizedEmail = email.trim()
    if (!EMAIL_PATTERN.test(normalizedEmail)) {
      setEmailError(EMAIL_ERROR)
      emailRef.current?.focus()
      return
    }

    const controller = new AbortController()
    requestControllerRef.current = controller
    let timedOut = false
    const timeoutId = window.setTimeout(() => {
      timedOut = true
      controller.abort()
    }, REQUEST_TIMEOUT_MS)

    setStatus('sending')
    try {
      const message = getEnquiryMessage(service)
      const fullMessage = additionalDetails.trim()
        ? `${message}\n\nAnything to add: ${additionalDetails.trim()}`
        : message
      const result = await testimonialApi('/api/inquiries', {
        method: 'POST',
        body: JSON.stringify({
          type: 'quick-enquiry',
          service,
          email: normalizedEmail,
          message: fullMessage,
          website: honeypot,
        }),
        signal: controller.signal,
      })

      if (typeof result?.message !== 'string') {
        throw new Error('The enquiry endpoint returned an invalid success response.')
      }

      if (mountedRef.current) setStatus('success')
    } catch (error) {
      if (!mountedRef.current) return
      console.error('Quick enquiry submission failed:', error)
      if (error instanceof ApiRequestError && error.status === 400) {
        setEmailError(EMAIL_ERROR)
        setStatus('idle')
        emailRef.current?.focus()
      } else {
        setStatus('error')
      }
      if (timedOut) setStatus('error')
    } finally {
      window.clearTimeout(timeoutId)
      if (requestControllerRef.current === controller) requestControllerRef.current = null
    }
  }

  const handleBackdropClick = (event) => {
    if (event.target === event.currentTarget) onClose()
  }

  return (
    <div className="enquiry-dialog__backdrop" onClick={handleBackdropClick}>
      <section
        ref={dialogRef}
        className="enquiry-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="enquiry-dialog-title"
        aria-describedby="enquiry-dialog-service"
        tabIndex="-1"
      >
        <button className="enquiry-dialog__close" type="button" aria-label="Close enquiry panel" onClick={onClose}>
          <X aria-hidden="true" size={20} />
        </button>
        <h2 id="enquiry-dialog-title">How would you like to reach us?</h2>
        <p className="enquiry-dialog__service" id="enquiry-dialog-service">Enquiry: {service}</p>

        {status === 'success' ? (
          <div className="enquiry-dialog__success">
            <span className="enquiry-dialog__success-icon"><Check aria-hidden="true" size={26} /></span>
            <h3 ref={successRef} tabIndex="-1">Thank you, we’ve received your enquiry about {service}</h3>
            <p>We will reply to {email.trim()} within 24 hours.</p>
            <button className="enquiry-dialog__button enquiry-dialog__button--primary" type="button" onClick={onClose}>
              Close
            </button>
          </div>
        ) : (
          <>
            {mode === 'choices' && (
              <div className="enquiry-dialog__choices">
                <a
                  ref={whatsappRef}
                  className="enquiry-dialog__choice"
                  href={getEnquiryWhatsAppUrl(service)}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={onClose}
                >
                  <strong>WhatsApp</strong>
                  <span>Fastest</span>
                </a>
                <button className="enquiry-dialog__choice" type="button" onClick={() => setMode('email')}>
                  <strong>Email</strong>
                  <span>Send us your email</span>
                </button>
              </div>
            )}

            {mode === 'email' && (
              <form className="enquiry-dialog__form" noValidate onSubmit={handleSubmit}>
                <button className="enquiry-dialog__back" type="button" onClick={() => setMode('choices')}>
                  Back to contact options
                </button>
                <p className="enquiry-dialog__readonly">Enquiry: <strong>{service}</strong></p>
                <input type="hidden" name="service" value={service} />
                <div className="enquiry-dialog__honeypot" aria-hidden="true">
                  <label htmlFor="enquiry-website">Leave this field empty</label>
                  <input
                    id="enquiry-website"
                    name="website"
                    type="text"
                    tabIndex="-1"
                    autoComplete="off"
                    value={honeypot}
                    onChange={(event) => setHoneypot(event.target.value)}
                  />
                </div>
                <label className="enquiry-dialog__label" htmlFor="enquiry-email">Email address</label>
                <input
                  ref={emailRef}
                  className="enquiry-dialog__input"
                  id="enquiry-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  aria-invalid={Boolean(emailError)}
                  aria-describedby={emailError ? 'enquiry-email-error' : undefined}
                  onChange={(event) => {
                    setEmail(event.target.value)
                    setEmailError('')
                  }}
                  placeholder="name@example.com"
                />
                {emailError && <p className="enquiry-dialog__field-error" id="enquiry-email-error" role="alert">{emailError}</p>}
                <label className="enquiry-dialog__label" htmlFor="enquiry-details">Anything to add? (optional)</label>
                <textarea
                  className="enquiry-dialog__input enquiry-dialog__textarea"
                  id="enquiry-details"
                  name="additionalDetails"
                  rows="3"
                  maxLength="2000"
                  value={additionalDetails}
                  onChange={(event) => setAdditionalDetails(event.target.value)}
                />
                {status === 'sending' && <p className="enquiry-dialog__status" ref={sendingRef} tabIndex="-1" role="status">Sending your enquiry…</p>}
                {status === 'error' && (
                  <p className="enquiry-dialog__failure" ref={errorRef} tabIndex="-1" role="alert">
                    {FAILURE_MESSAGE}
                  </p>
                )}
                {status === 'error' ? (
                  <div className="enquiry-dialog__actions">
                    <button className="enquiry-dialog__button enquiry-dialog__button--primary" type="submit">
                      Try again
                    </button>
                    <a
                      className="enquiry-dialog__button enquiry-dialog__button--secondary"
                      href={getEnquiryWhatsAppUrl(service)}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={onClose}
                    >
                      WhatsApp instead
                    </a>
                  </div>
                ) : (
                  <button
                    className="enquiry-dialog__button enquiry-dialog__button--primary"
                    type="submit"
                    disabled={status === 'sending'}
                  >
                    {status === 'sending' ? 'Sending…' : 'Send email'}
                  </button>
                )}
                <p className="enquiry-dialog__privacy">We only use your email to reply to this enquiry.</p>
              </form>
            )}
          </>
        )}
      </section>
    </div>
  )
}

export default EnquiryDialog
