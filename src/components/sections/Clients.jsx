import { clients } from '../../data/content'
import AnimatedSection from '../ui/AnimatedSection'
import SectionHeading from '../ui/SectionHeading'

export default function Clients() {
  return (
    <AnimatedSection className="border-y border-brand-muted bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Trusted By"
          title="Key Clients"
          description="We build long-term partnerships with highly recognizable brands in the commercial sector."
        />

        <div className="mt-12 flex flex-wrap items-center justify-center gap-10 sm:gap-16">
          {clients.map((client) => (
            <div
              key={client.name}
              className="flex h-24 w-48 items-center justify-center rounded-xl border border-brand-muted bg-white px-6 py-4 transition-all duration-300 hover:border-brand-red/30 hover:shadow-md sm:h-28 sm:w-56"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="max-h-16 w-full object-contain sm:max-h-20"
              />
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}
