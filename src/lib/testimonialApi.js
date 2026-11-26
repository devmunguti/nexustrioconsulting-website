const API_BASE_URL = (import.meta.env.VITE_API_URL || 'http://localhost:3001').replace(/\/$/, '')

export async function testimonialApi(path, options = {}) {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    ...options,
    credentials: 'include',
    headers: {
      ...(options.body ? { 'Content-Type': 'application/json' } : {}),
      ...options.headers,
    },
  })

  if (response.status === 204) return null

  const responseText = await response.text()
  let payload = null
  if (responseText) {
    try {
      payload = JSON.parse(responseText)
    } catch {
      if (response.ok) {
        throw new Error('The API returned an invalid response. Check VITE_API_URL and confirm the API is running.')
      }
    }
  }

  if (!response.ok) {
    throw new Error(payload?.error || `The request failed (${response.status}). Please try again later.`)
  }

  if (!payload || typeof payload !== 'object' || Array.isArray(payload)) {
    throw new Error('The API returned an invalid response. Check VITE_API_URL and confirm the API is running.')
  }

  return payload
}
