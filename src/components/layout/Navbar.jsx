import { useState, useEffect } from 'react'
import { Menu, X, Phone } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { navLinks } from '../../data/content'
import { assets } from '../../data/assets'
import Button from '../ui/Button'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 shadow-md backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a href="#" className="flex items-center gap-3">
          <img
            src={assets.logo}
            alt="UMECS Logo"
            className="h-12 w-12 rounded-full object-cover ring-2 ring-brand-red/20 sm:h-14 sm:w-14"
          />
          <div className="hidden sm:block">
            <p
              className={`text-sm font-bold leading-tight ${scrolled ? 'text-brand-navy' : 'text-white'}`}
            >
              UMECS
            </p>
            <p
              className={`text-xs ${scrolled ? 'text-brand-slate' : 'text-white/70'}`}
            >
              Construction Services
            </p>
          </div>
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-brand-red ${
                  scrolled ? 'text-brand-navy' : 'text-white/90'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="tel:09551266247"
            className={`flex items-center gap-2 text-sm font-medium transition-colors hover:text-brand-red ${
              scrolled ? 'text-brand-navy' : 'text-white/90'
            }`}
          >
            <Phone className="h-4 w-4" />
            0955 126 6247
          </a>
          <Button href="#contact" size="sm">
            Get a Quote
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className={`rounded-lg p-2 lg:hidden ${scrolled ? 'text-brand-navy' : 'text-white'}`}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-brand-muted bg-white lg:hidden"
          >
            <ul className="flex flex-col gap-1 px-4 py-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block rounded-lg px-4 py-3 text-brand-navy transition-colors hover:bg-brand-light hover:text-brand-red"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="mt-2 px-4">
                <Button href="#contact" className="w-full" onClick={() => setIsOpen(false)}>
                  Get a Quote
                </Button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
