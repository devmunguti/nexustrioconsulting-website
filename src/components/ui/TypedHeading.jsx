import { Children, cloneElement, isValidElement, useEffect, useRef, useState } from 'react'
import './TypedHeading.css'

const TYPING_SPEED_MS = 40
const ENABLE_HEADING_TYPING = true

function getText(children) {
  return Children.toArray(children).map((child) => {
    if (typeof child === 'string' || typeof child === 'number') return String(child)
    if (isValidElement(child)) return getText(child.props.children)
    return ''
  }).join('')
}

function TypedHeading({ children, className = '' }) {
  const text = getText(children)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(() => (
    typeof window === 'undefined' || window.matchMedia('(prefers-reduced-motion: reduce)').matches
  ))
  const [visibleCharacters, setVisibleCharacters] = useState(() => (
    prefersReducedMotion || !ENABLE_HEADING_TYPING ? text.length : 0
  ))
  const visibleCharactersRef = useRef(visibleCharacters)

  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)')
    const updatePreference = () => {
      if (preference.matches) {
        visibleCharactersRef.current = text.length
        setVisibleCharacters(text.length)
      }
      setPrefersReducedMotion(preference.matches)
    }
    preference.addEventListener('change', updatePreference)
    return () => preference.removeEventListener('change', updatePreference)
  }, [text])

  useEffect(() => {
    if (prefersReducedMotion || !ENABLE_HEADING_TYPING) return undefined

    let currentCharacter = Math.min(visibleCharactersRef.current, text.length)
    if (currentCharacter >= text.length) return undefined

    const intervalId = window.setInterval(() => {
      currentCharacter += 1
      visibleCharactersRef.current = currentCharacter
      setVisibleCharacters(currentCharacter)
      if (currentCharacter >= text.length) window.clearInterval(intervalId)
    }, TYPING_SPEED_MS)

    return () => window.clearInterval(intervalId)
  }, [prefersReducedMotion, text])

  const characterLimit = prefersReducedMotion || !ENABLE_HEADING_TYPING
    ? text.length
    : visibleCharacters
  const showCursor = ENABLE_HEADING_TYPING && !prefersReducedMotion && characterLimit < text.length
  let position = 0
  let cursorInserted = false

  const renderCharacters = (nodes) => Children.map(nodes, (child) => {
    if (typeof child === 'string' || typeof child === 'number') {
      return Array.from(String(child)).map((character) => {
        const index = position
        position += 1
        const parts = []

        if (showCursor && index === characterLimit) {
          parts.push(<span className="nx-typing-heading__cursor" key={`cursor-${index}`} aria-hidden="true" />)
          cursorInserted = true
        }

        parts.push(
          <span
            className="nx-typing-heading__character"
            key={`character-${index}`}
            style={{ visibility: index < characterLimit ? 'visible' : 'hidden' }}
          >
            {character}
          </span>,
        )

        if (showCursor && !cursorInserted && index === characterLimit - 1) {
          parts.push(<span className="nx-typing-heading__cursor" key={`cursor-${index + 1}`} aria-hidden="true" />)
          cursorInserted = true
        }

        return parts
      })
    }

    if (isValidElement(child)) {
      return cloneElement(child, {
        children: renderCharacters(child.props.children),
      })
    }

    return child
  })

  const visualHeading = renderCharacters(children)
  if (showCursor && !cursorInserted && text.length === 0) {
    visualHeading.push(<span className="nx-typing-heading__cursor" key="cursor-start" aria-hidden="true" />)
  }

  return (
    <h1 className={`nx-typing-heading ${className}`.trim()}>
      <span className="nx-typing-heading__accessible">{text}</span>
      <span className="nx-typing-heading__reserve" aria-hidden="true">{children}</span>
      <span className="nx-typing-heading__visual" aria-hidden="true">
        {visualHeading}
      </span>
    </h1>
  )
}

export default TypedHeading
