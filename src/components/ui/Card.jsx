function Card({ title, children, className = '' }) {
  return <article className={`card ${className}`}>{title && <h3>{title}</h3>} {children}</article>
}

export default Card
