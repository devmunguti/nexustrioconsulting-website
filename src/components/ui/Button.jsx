const variantClasses = {
  gold: 'gold-button',
  outline: 'outline-button',
  ghost: 'ghost-button',
}

function Button({
  href,
  variant = 'gold',
  size = 'md',
  className = '',
  type = 'button',
  ...props
}) {
  const classes = [
    variantClasses[variant],
    `button-size-${size}`,
    className,
  ].filter(Boolean).join(' ')

  if (href !== undefined && href !== null) {
    return <a {...props} className={classes} href={href} />
  }

  return <button {...props} className={classes} type={type} />
}

export default Button
