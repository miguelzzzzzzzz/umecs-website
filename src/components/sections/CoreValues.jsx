import { motion } from 'framer-motion'
import { coreValues } from '../../data/content'
import AnimatedSection from '../ui/AnimatedSection'
import SectionHeading from '../ui/SectionHeading'

export default function CoreValues() {
  return (
    <AnimatedSection className="bg-brand-navy py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="What We Stand For"
          title="Our Core Values — B.U.I.L.D."
          description="The foundation of every structure we create and every relationship we build."
          light
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {coreValues.map((value, index) => (
            <motion.div
              key={value.letter}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:border-brand-yellow/30 hover:bg-white/10"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-red text-xl font-bold text-white">
                {value.letter}
              </span>
              <h3 className="mt-4 font-semibold text-white">{value.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/60">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}
