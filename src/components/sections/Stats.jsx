import { motion, animate } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { stats } from '../../data/content'

function AnimatedCounter({ value, suffix = '' }) {
  const ref = useRef(null)
  const [display, setDisplay] = useState('0')
  const numericOnly = /^\d+$/.test(value)

  useEffect(() => {
    if (!numericOnly) return
    const target = parseInt(value, 10)
    if (target > 100) {
      setDisplay(value)
      return
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const controls = animate(0, target, {
            duration: 2,
            ease: 'easeOut',
            onUpdate: (v) => setDisplay(String(Math.round(v))),
          })
          observer.disconnect()
          return () => controls.stop()
        }
      },
      { threshold: 0.5 },
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [numericOnly, value])

  if (!numericOnly) return <span>{value}</span>

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  )
}

export default function Stats() {
  return (
    <section className="relative overflow-hidden bg-brand-red py-16 sm:py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,235,0,0.1),transparent_50%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <p className="text-4xl font-bold text-white sm:text-5xl">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-2 text-sm font-medium text-white/70 sm:text-base">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
