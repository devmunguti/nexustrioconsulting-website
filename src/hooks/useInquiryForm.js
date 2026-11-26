import { useState } from 'react'
import { testimonialApi as apiRequest } from '../lib/testimonialApi'

export function useInquiryForm() {
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = async (event, details = {}) => {
    event.preventDefault()
    setStatus('sending')
    setError('')
    setMessage('')

    const formData = new FormData(event.currentTarget)
    const values = Object.fromEntries(formData.entries())
    values.consent = formData.get('consent') === 'true'

    try {
      const result = await apiRequest('/api/inquiries', {
        method: 'POST',
        body: JSON.stringify({ ...values, ...details, consent: values.consent }),
      })
      if (typeof result.message !== 'string') {
        throw new Error('The server returned an invalid response. Please email us directly.')
      }
      setMessage(result.message)
      setStatus('success')
    } catch (requestError) {
      setError(requestError instanceof Error
        ? requestError.message
        : 'Your enquiry could not be sent. Please try again or email us directly.')
      setStatus('error')
    }
  }

  return { status, error, message, handleSubmit }
}
