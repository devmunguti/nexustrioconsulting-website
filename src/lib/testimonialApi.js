const configuredApiUrl = import.meta.env.VITE_API_URL?.trim()
const API_BASE_URL = (configuredApiUrl || (import.meta.env.DEV ? 'http://localhost:3001' : '')).replace(/\/$/, '')

export async function testimonialApi(path, options = {}) {
  if (!API_BASE_URL) {
    throw new Error('The booking service is not configured. Set VITE_API_URL to the deployed backend URL and rebuild the website.')
  }

  let response
  try {
    response = await fetch(`${API_BASE_URL}${path}`, {
      ...options,
      credentials: 'include',
      headers: {
        ...(options.body ? { 'Content-Type': 'application/json' } : {}),
        ...options.headers,
      },
    })
  } catch (error) {
    if (error instanceof TypeError) {
      throw new Error('Could not reach the booking service. Check that the backend is running, VITE_API_URL points to its public URL, and FRONTEND_ORIGIN allows this website.')
    }
    throw error
  }

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
