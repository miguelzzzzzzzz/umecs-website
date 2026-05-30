import { Phone, Mail, MapPin } from 'lucide-react'
import { contactInfo, navLinks } from '../../data/content'
import { assets } from '../../data/assets'

export default function Footer() {
  return (
    <footer className="bg-brand-navy text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3">
              <img
                src={assets.logo}
                alt="UMECS Logo"
                className="h-14 w-14 rounded-full object-cover ring-2 ring-brand-yellow/30"
              />
              <div>
                <p className="font-bold">UMECS</p>
                <p className="text-xs text-white/60">Since 2017</p>
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-white/70">
              Reliable. Efficient. Quality-driven. Delivering cost-effective
              construction services across the Philippines.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-brand-yellow">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-brand-yellow">
              Contact
            </h3>
            <ul className="space-y-3 text-sm text-white/70">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-yellow" />
                {contactInfo.address}
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-brand-yellow" />
                <a href={`tel:${contactInfo.phone}`} className="hover:text-white">
                  {contactInfo.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0 text-brand-yellow" />
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="hover:text-white"
                >
                  {contactInfo.email}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-brand-yellow">
              Service Area
            </h3>
            <p className="text-sm leading-relaxed text-white/70">
              {contactInfo.serviceArea}
            </p>
            <p className="mt-4 text-sm text-white/50">{contactInfo.hours}</p>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-sm text-white/50">
            &copy; {new Date().getFullYear()} Unika Mechanical Engineering
            Construction Services. All rights reserved.
          </p>
          <p className="text-xs text-white/40">
            Built with excellence — just like our projects.
          </p>
        </div>
      </div>
    </footer>
  )
}
