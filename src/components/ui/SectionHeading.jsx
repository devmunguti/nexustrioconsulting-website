function SectionHeading({
  eyebrow,
  title,
  description,
  className = 'section-heading',
  divider = false,
}) {
  return (
    <header className={className}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2>{title}</h2>
      {divider && <i aria-hidden="true" />}
      {description && <p>{description}</p>}
    </header>
  )
}

export default SectionHeading
