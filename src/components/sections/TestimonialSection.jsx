import { useEffect, useState } from 'react'
import { testimonialApi } from '../../lib/testimonialApi'
import './TestimonialSection.css'

function TestimonialSection() {
  const [testimonials, setTestimonials] = useState([])
  const [loading, setLoading] = useState(true)
  const [loadError, setLoadError] = useState('')
  const [submitError, setSubmitError] = useState('')
  const [message, setMessage] = useState('')
  const [submitting, setSubmitting] = useState(false)

  useEffect(() => {
    let active = true

    testimonialApi('/api/testimonials')
      .then((result) => {
        if (active) setTestimonials(result.testimonials)
      })
      .catch((error) => {
        if (active) setLoadError(error.message)
      })
      .finally(() => {
        if (active) setLoading(false)
      })

    return () => {
      active = false
    }
  }, [])

  const submitTestimonial = async (event) => {
    event.preventDefault()
    setSubmitting(true)
    setSubmitError('')
    setMessage('')

    const form = event.currentTarget
    const formData = new FormData(form)
    const submission = {
      name: formData.get('name'),
      role: formData.get('role'),
      organization: formData.get('organization'),
      quote: formData.get('quote'),
      consent: formData.get('consent') === 'on',
    }

    try {
      const result = await testimonialApi('/api/testimonials', {
        method: 'POST',
        body: JSON.stringify(submission),
      })
      form.reset()
      setMessage(result.message)
    } catch (error) {
      setSubmitError(error.message)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section className="testimonial-module" id="testimonials" aria-labelledby="testimonial-heading">
      <div className="container testimonial-module__inner">
        <div className="testimonial-module__intro">
          <span className="eyebrow">Your experience</span>
          <h2 id="testimonial-heading">Share your experience</h2>
          <p>Have you worked with Nexus Trio? You can send us feedback for review. We publish a testimonial only after it has been approved.</p>
        </div>

        <div className="testimonial-module__content">
          <div className="testimonial-module__list" aria-live="polite">
            {loading && <p>Loading approved testimonials…</p>}
            {!loading && loadError && <p className="testimonial-module__notice" role="status">Approved testimonials are temporarily unavailable: {loadError}</p>}
            {!loading && !loadError && testimonials.length === 0 && (
              <p>No approved testimonials yet. If you have worked with us, you can share your experience for review.</p>
            )}
            {!loading && !loadError && testimonials.map((item) => (
              <figure className="testimonial-module__quote" key={item.id}>
                <blockquote>{item.quote}</blockquote>
                <figcaption>
                  <strong>{item.name}</strong>
                  {[item.role, item.organization].filter(Boolean).join(' · ')}
                </figcaption>
              </figure>
            ))}
          </div>

          <form className="testimonial-module__form" onSubmit={submitTestimonial}>
            <h3>Send a testimonial</h3>
            <label htmlFor="testimonial-name">
              Your name <span aria-hidden="true">*</span>
            </label>
            <input
              id="testimonial-name"
              autoComplete="name"
              maxLength={100}
              name="name"
              required
              aria-required="true"
              aria-invalid={Boolean(submitError)}
              aria-describedby={submitError ? 'testimonial-error' : undefined}
            />
            <label htmlFor="testimonial-role">
              Your role (optional)
            </label>
            <input
              id="testimonial-role"
              autoComplete="organization-title"
              maxLength={120}
              name="role"
              aria-invalid={Boolean(submitError)}
              aria-describedby={submitError ? 'testimonial-error' : undefined}
            />
            <label htmlFor="testimonial-organization">
              Organisation (optional)
            </label>
            <input
              id="testimonial-organization"
              autoComplete="organization"
              maxLength={160}
              name="organization"
              aria-invalid={Boolean(submitError)}
              aria-describedby={submitError ? 'testimonial-error' : undefined}
            />
            <label htmlFor="testimonial-quote">
              Your feedback <span aria-hidden="true">*</span>
            </label>
            <textarea
              id="testimonial-quote"
              maxLength={2000}
              name="quote"
              required
              aria-required="true"
              aria-invalid={Boolean(submitError)}
              aria-describedby={submitError ? 'testimonial-error' : undefined}
              rows={4}
            />
            <label className="testimonial-module__consent" htmlFor="testimonial-consent">
              <input
                id="testimonial-consent"
                name="consent"
                required
                aria-required="true"
                aria-invalid={Boolean(submitError)}
                aria-describedby={submitError ? 'testimonial-error' : undefined}
                type="checkbox"
              />
              <span>I give Nexus Trio permission to review this feedback and, if approved, publish it on the website with the details I provided.</span>
            </label>
            {submitError && <p className="testimonial-module__error" id="testimonial-error" role="alert">{submitError}</p>}
            {message && <p className="testimonial-module__success" role="status">{message}</p>}
            <button className="gold-button" disabled={submitting} type="submit">
              {submitting ? 'Sending…' : 'Submit for review'}
            </button>
            <small>Only approved testimonials are shown publicly. Please do not include confidential financial or personal information.</small>
          </form>
        </div>
      </div>
    </section>
  )
}

export default TestimonialSection
