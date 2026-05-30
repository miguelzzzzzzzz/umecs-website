import { motion } from 'framer-motion'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { assets } from '../../data/assets'
import Button from '../ui/Button'

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-brand-navy">
      {/* Logo as hero background */}
      <div className="absolute inset-0 flex items-center justify-center">
        <img
          src={assets.logo}
          alt=""
          aria-hidden="true"
          className="h-[min(90vw,720px)] w-[min(90vw,720px)] object-contain opacity-[0.12]"
        />
      </div>
      <div className="absolute inset-0 bg-linear-to-br from-brand-navy/90 via-brand-navy/80 to-brand-brown/85" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(227,30,36,0.08),transparent_70%)]" />

      <div className="relative mx-auto max-w-7xl px-4 py-32 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block rounded-full border border-brand-yellow/30 bg-brand-yellow/10 px-4 py-1.5 text-sm font-medium text-brand-yellow"
            >
              Established 2017 · Metro Manila & Nationwide
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-6 font-display text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl"
            >
              Building Structures That{' '}
              <span className="text-brand-yellow">Stand the Test of Time</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80 sm:text-xl"
            >
              Unika Mechanical Engineering Construction Services delivers quality,
              reliable, and cost-effective construction — specializing in commercial
              fit-outs, renovations, and maintenance for active business environments.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <Button href="#contact" size="lg">
                Request a Consultation
                <ArrowRight className="h-5 w-5" />
              </Button>
              <Button href="#projects" variant="outline" size="lg">
                View Our Projects
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-16 flex flex-wrap gap-8 border-t border-white/10 pt-8"
            >
              {['Reliable', 'Efficient', 'Quality-driven'].map((word) => (
                <div key={word}>
                  <p className="text-2xl font-bold text-brand-yellow">{word}</p>
                  <p className="text-sm text-white/50">Our clients describe us</p>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="hidden justify-center lg:flex"
          >
            <img
              src={assets.logo}
              alt="UMECS — Unika Mechanical Engineering Construction Services"
              className="h-80 w-80 rounded-full object-cover shadow-2xl ring-4 ring-brand-yellow/30 sm:h-96 sm:w-96"
            />
          </motion.div>
        </div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 transition-colors hover:text-white"
        aria-label="Scroll to about section"
      >
        <ChevronDown className="h-8 w-8 animate-bounce" />
      </motion.a>
    </section>
  )
}
