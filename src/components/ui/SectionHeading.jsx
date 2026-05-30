import { motion } from 'framer-motion'

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  light = false,
}) {
  const alignClass =
    align === 'left' ? 'text-left items-start' : 'text-center items-center'

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5 }}
      className={`flex flex-col gap-4 ${alignClass} max-w-3xl ${align === 'center' ? 'mx-auto' : ''}`}
    >
      {eyebrow && (
        <span
          className={`text-sm font-semibold uppercase tracking-widest ${light ? 'text-brand-yellow' : 'text-brand-red'}`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`font-display text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl ${light ? 'text-white' : 'text-brand-navy'}`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`text-base leading-relaxed sm:text-lg ${light ? 'text-white/80' : 'text-brand-slate'}`}
        >
          {description}
        </p>
      )}
    </motion.div>
  )
}
