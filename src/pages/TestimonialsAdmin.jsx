import { useCallback, useEffect, useState } from 'react'
import { testimonialApi } from '../lib/testimonialApi'
import TypedHeading from '../components/ui/TypedHeading'

function TestimonialsAdmin() {
  const [admin, setAdmin] = useState(null)
  const [testimonials, setTestimonials] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [busyId, setBusyId] = useState(null)

  const loadTestimonials = useCallback(async () => {
    const result = await testimonialApi('/api/admin/testimonials')
    setTestimonials(result.testimonials)
  }, [])

  useEffect(() => {
    let active = true

    testimonialApi('/api/admin/session')
      .then(async (result) => {
        if (!active) return
        setAdmin(result.admin)
        const list = await testimonialApi('/api/admin/testimonials')
        if (active) setTestimonials(list.testimonials)
      })
      .catch((requestError) => {
        if (active && !requestError.message.includes('401')) setError(requestError.message)
      })
      .finally(() => {
        if (active) setLoading(false)
      })

    return () => {
      active = false
    }
  }, [])

  const signIn = async (event) => {
    event.preventDefault()
    setError('')
    setLoading(true)
    try {
      const result = await testimonialApi('/api/admin/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
      })
      setAdmin(result.admin)
      setPassword('')
      await loadTestimonials()
    } catch (requestError) {
      setError(requestError.message)
    } finally {
      setLoading(false)
    }
  }

  const review = async (id, status) => {
    setBusyId(id)
    setError('')
    try {
      await testimonialApi(`/api/admin/testimonials/${id}`, {
        method: 'PATCH',
        body: JSON.stringify({ status }),
      })
      await loadTestimonials()
    } catch (requestError) {
      setError(requestError.message)
    } finally {
      setBusyId(null)
    }
  }

  const signOut = async () => {
    setError('')
    try {
      await testimonialApi('/api/admin/logout', { method: 'POST' })
      setAdmin(null)
      setTestimonials([])
    } catch (requestError) {
      setError(requestError.message)
    }
  }

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <main className="testimonial-admin" id="main-content" tabIndex="-1">
      <div className="container">
        <a className="testimonial-admin__back" href="#/">← Back to website</a>
        <header className="testimonial-admin__header">
          <div>
            <span className="eyebrow">Private review area</span>
            <TypedHeading>Testimonial moderation</TypedHeading>
            <p>Only the configured website owner and developer accounts can review submissions.</p>
          </div>
          {admin && <button className="outline-button" onClick={signOut} type="button">Sign out</button>}
        </header>

        {error && <p className="testimonial-admin__error" id="admin-error" role="alert">{error}</p>}
        {loading && <p role="status">Loading…</p>}

        {!loading && !admin && (
          <form className="testimonial-admin__login" onSubmit={signIn}>
            <h2>Sign in to review submissions</h2>
            <label htmlFor="admin-email">Email <span aria-hidden="true">*</span></label>
            <input
              id="admin-email"
              autoComplete="username"
              onChange={(event) => setEmail(event.target.value)}
              required
              aria-required="true"
              aria-invalid={Boolean(error)}
              aria-describedby={error ? 'admin-error' : undefined}
              type="email"
              value={email}
            />
            <label htmlFor="admin-password">Password <span aria-hidden="true">*</span></label>
            <input
              id="admin-password"
              autoComplete="current-password"
              onChange={(event) => setPassword(event.target.value)}
              required
              aria-required="true"
              aria-invalid={Boolean(error)}
              aria-describedby={error ? 'admin-error' : undefined}
              type="password"
              value={password}
            />
            <button className="gold-button" type="submit">Sign in</button>
          </form>
        )}

        {!loading && admin && (
          <section aria-label="Submitted testimonials" className="testimonial-admin__list">
            <h2>Submissions ({testimonials.length})</h2>
            {testimonials.length === 0 && <p>No testimonials have been submitted yet.</p>}
            {testimonials.map((item) => (
              <article className="testimonial-admin__item" key={item.id}>
                <div className="testimonial-admin__item-heading">
                  <div>
                    <h3>{item.name}</h3>
                    <p>{[item.role, item.organization].filter(Boolean).join(' · ') || 'No role or organisation provided'}</p>
                  </div>
                  <span className={`testimonial-admin__status testimonial-admin__status--${item.status}`}>{item.status}</span>
                </div>
                <blockquote>{item.quote}</blockquote>
                <p className="testimonial-admin__date">Submitted {new Date(item.created_at).toLocaleString()}</p>
                {item.status !== 'approved' && (
                  <div className="testimonial-admin__actions">
                    <button className="gold-button" disabled={busyId === item.id} onClick={() => review(item.id, 'approved')} type="button">Approve and publish</button>
                    {item.status !== 'rejected' && (
                      <button className="outline-button" disabled={busyId === item.id} onClick={() => review(item.id, 'rejected')} type="button">Reject</button>
                    )}
                  </div>
                )}
              </article>
            ))}
          </section>
        )}
      </div>
      </main>
    </>
  )
}

export default TestimonialsAdmin
