import { Building2, Wrench, Store } from 'lucide-react'
import { services } from '../../data/content'
import AnimatedSection from '../ui/AnimatedSection'
import SectionHeading from '../ui/SectionHeading'

const iconMap = { Building2, Wrench, Store }

export default function Services() {
  return (
    <AnimatedSection id="services" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="What We Do"
          title="Core Services & Capabilities"
          description="Comprehensive construction and mechanical solutions tailored for commercial environments."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = iconMap[service.icon]
            const imageAspect = service.imageAspect ?? 'aspect-video'
            return (
              <div
                key={service.category}
                className="group flex flex-col overflow-hidden rounded-2xl border border-brand-muted bg-brand-light/50 transition-all duration-300 hover:-translate-y-1 hover:border-brand-red/20 hover:shadow-xl"
              >
                <div
                  className={`relative overflow-hidden ${imageAspect}`}
                >
                  <img
                    src={service.image}
                    alt={service.category}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    style={
                      service.imagePosition
                        ? { objectPosition: service.imagePosition }
                        : undefined
                    }
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-brand-navy/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 flex h-11 w-11 items-center justify-center rounded-lg bg-brand-red text-white">
                    <Icon className="h-5 w-5" />
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-8">
                  <h3 className="font-display text-xl font-bold text-brand-navy">
                    {service.category}
                  </h3>
                  <ul className="mt-6 flex-1 space-y-3">
                    {service.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm text-brand-slate"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-red" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </AnimatedSection>
  )
}
