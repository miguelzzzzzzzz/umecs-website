import { Target, Eye } from 'lucide-react'
import AnimatedSection from '../ui/AnimatedSection'
import SectionHeading from '../ui/SectionHeading'

export default function MissionVision() {
  return (
    <AnimatedSection className="bg-brand-light py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Purpose"
          title="Mission & Vision"
          description="Guiding principles that drive every project we deliver."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          <div className="group rounded-2xl border border-brand-muted bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-brand-red/10 text-brand-red transition-colors group-hover:bg-brand-red group-hover:text-white">
              <Target className="h-7 w-7" />
            </div>
            <h3 className="font-display text-2xl font-bold text-brand-navy">
              Our Mission
            </h3>
            <p className="mt-4 leading-relaxed text-brand-slate">
              To deliver reliable, high-quality construction services through
              skilled workmanship, timely project completion, and strong client
              relationships. Since our establishment, we have remained committed
              to building safe, durable, and cost-effective structures that meet
              the needs of our clients and communities.
            </p>
          </div>

          <div className="group rounded-2xl border border-brand-muted bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue transition-colors group-hover:bg-brand-blue group-hover:text-white">
              <Eye className="h-7 w-7" />
            </div>
            <h3 className="font-display text-2xl font-bold text-brand-navy">
              Our Vision
            </h3>
            <p className="mt-4 leading-relaxed text-brand-slate">
              To become a trusted and respected construction company known for
              excellence, integrity, and innovation in the industry — creating
              structures that contribute to long-term growth and development.
            </p>
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}
