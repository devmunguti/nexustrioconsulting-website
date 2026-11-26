import './ImagePlaceholder.css'

function ImagePlaceholder({ label, searchTerms, aspectRatio, altText, className = '' }) {
  if (import.meta.env.PROD) {
    return null
  }

  return (
    <div
      className={`image-placeholder ${className}`.trim()}
      role="img"
      aria-label={`Image placeholder. ${altText}`}
      style={{ aspectRatio }}
    >
      <span className="image-placeholder__badge">Image placeholder</span>
      <strong>{label}</strong>
      <span>Search: {searchTerms}</span>
      <small>Suggested alt text: {altText}</small>
    </div>
  )
}

export default ImagePlaceholder
