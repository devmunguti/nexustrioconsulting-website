const configuredApiUrl = import.meta.env.VITE_API_URL?.trim()
const API_BASE_URL = (configuredApiUrl || (import.meta.env.DEV ? 'http://localhost:3001' : '')).replace(/\/$/, '')

export class ApiRequestError extends Error {
  constructor(message, status = null) {
    super(message)
    this.name = 'ApiRequestError'
    this.status = status
  }
}

export async function testimonialApi(path, options = {}) {
  if (!API_BASE_URL) {
    throw new ApiRequestError('The booking service is not configured. Set VITE_API_URL to the deployed backend URL and rebuild the website.')
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
      throw new ApiRequestError('Could not reach the booking service. Check that the backend is running, VITE_API_URL points to its public URL, and FRONTEND_ORIGIN allows this website.')
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
        throw new ApiRequestError('The API returned an invalid response. Check VITE_API_URL and confirm the API is running.', response.status)
      }
    }
  }

  if (!response.ok) {
    throw new ApiRequestError(payload?.error || `The request failed (${response.status}). Please try again later.`, response.status)
  }

  if (!payload || typeof payload !== 'object' || Array.isArray(payload)) {
    throw new ApiRequestError('The API returned an invalid response. Check VITE_API_URL and confirm the API is running.', response.status)
  }

  return payload
}
