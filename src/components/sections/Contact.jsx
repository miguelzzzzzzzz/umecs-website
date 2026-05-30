import { useState } from 'react'
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react'
import { contactInfo } from '../../data/content'
import AnimatedSection from '../ui/AnimatedSection'
import SectionHeading from '../ui/SectionHeading'
import Button from '../ui/Button'

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Project Inquiry from ${formState.name}`)
    const body = encodeURIComponent(
      `Name: ${formState.name}\nEmail: ${formState.email}\nPhone: ${formState.phone}\n\nMessage:\n${formState.message}`,
    )
    window.location.href = `mailto:${contactInfo.email}?subject=${subject}&body=${body}`
    setSubmitted(true)
  }

  const inputClass =
    'w-full rounded-lg border border-brand-muted bg-white px-4 py-3 text-brand-navy placeholder:text-brand-slate/50 transition-colors focus:border-brand-red focus:outline-none focus:ring-2 focus:ring-brand-red/20'

  return (
    <AnimatedSection id="contact" className="bg-brand-light py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Get In Touch"
          title="Let's Build Something Together"
          description="Ready to start your next commercial project? Reach out for a consultation."
        />

        <div className="mt-16 grid gap-12 lg:grid-cols-5">
          <div className="space-y-6 lg:col-span-2">
            {[
              { icon: MapPin, label: 'Headquarters', value: contactInfo.address },
              { icon: Phone, label: 'Phone', value: contactInfo.phone, href: `tel:${contactInfo.phone}` },
              { icon: Mail, label: 'Email', value: contactInfo.email, href: `mailto:${contactInfo.email}` },
              { icon: Clock, label: 'Hours', value: contactInfo.hours },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-brand-red/10 text-brand-red">
                  <item.icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-brand-navy">{item.label}</p>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="mt-1 text-sm text-brand-slate transition-colors hover:text-brand-red"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="mt-1 text-sm text-brand-slate">{item.value}</p>
                  )}
                </div>
              </div>
            ))}

            <div className="rounded-xl border border-brand-muted bg-white p-6">
              <p className="text-sm font-semibold text-brand-navy">Service Area</p>
              <p className="mt-2 text-sm leading-relaxed text-brand-slate">
                {contactInfo.serviceArea}
              </p>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-brand-muted bg-white p-8 shadow-sm lg:col-span-3"
          >
            {submitted ? (
              <div className="flex h-full flex-col items-center justify-center py-12 text-center">
                <p className="text-lg font-semibold text-brand-navy">
                  Thank you for reaching out!
                </p>
                <p className="mt-2 text-sm text-brand-slate">
                  Your email client should open shortly. We&apos;ll get back to you
                  within 1–2 business days.
                </p>
              </div>
            ) : (
              <>
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-2 block text-sm font-medium text-brand-navy">
                      Full Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formState.name}
                      onChange={handleChange}
                      className={inputClass}
                      placeholder="Juan Dela Cruz"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="mb-2 block text-sm font-medium text-brand-navy">
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formState.phone}
                      onChange={handleChange}
                      className={inputClass}
                      placeholder="09XX XXX XXXX"
                    />
                  </div>
                </div>
                <div className="mt-6">
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-brand-navy">
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formState.email}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="you@company.com"
                  />
                </div>
                <div className="mt-6">
                  <label htmlFor="message" className="mb-2 block text-sm font-medium text-brand-navy">
                    Project Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={formState.message}
                    onChange={handleChange}
                    className={`${inputClass} resize-none`}
                    placeholder="Tell us about your project scope, timeline, and location..."
                  />
                </div>
                <Button type="submit" size="lg" className="mt-8 w-full sm:w-auto">
                  Send Inquiry
                  <Send className="h-4 w-4" />
                </Button>
              </>
            )}
          </form>
        </div>
      </div>
    </AnimatedSection>
  )
}
