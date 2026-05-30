const variants = {
  primary:
    'bg-brand-red text-white hover:bg-brand-red-dark shadow-lg shadow-brand-red/25 hover:shadow-brand-red/40',
  secondary:
    'bg-brand-blue text-white hover:bg-brand-blue-dark shadow-lg shadow-brand-blue/20',
  outline:
    'border-2 border-white/80 text-white hover:bg-white hover:text-brand-navy',
  outlineDark:
    'border-2 border-brand-navy/20 text-brand-navy hover:border-brand-red hover:text-brand-red',
  ghost: 'text-brand-navy hover:text-brand-red hover:bg-brand-light',
}

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-base',
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  className = '',
  ...props
}) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red focus-visible:ring-offset-2 ${variants[variant]} ${sizes[size]} ${className}`

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    )
  }

  const { type = 'button', ...buttonProps } = props

  return (
    <button type={type} className={classes} {...buttonProps}>
      {children}
    </button>
  )
}
