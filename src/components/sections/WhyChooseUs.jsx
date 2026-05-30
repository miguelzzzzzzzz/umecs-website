import { Clock, ShieldCheck, HardHat, Truck } from 'lucide-react'
import { whyChooseUs } from '../../data/content'
import AnimatedSection from '../ui/AnimatedSection'
import SectionHeading from '../ui/SectionHeading'

const iconMap = { Clock, ShieldCheck, HardHat, Truck }

export default function WhyChooseUs() {
  return (
    <AnimatedSection className="bg-brand-light py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Why UMECS"
              title="Built for Active Commercial Environments"
              description="Our clients describe us in three words: Reliable, Efficient, and Quality-driven."
              align="left"
            />
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {whyChooseUs.map((item) => {
              const Icon = iconMap[item.icon]
              return (
                <div
                  key={item.title}
                  className="rounded-2xl bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md"
                >
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-brand-blue/10 text-brand-blue">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-semibold text-brand-navy">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-brand-slate">
                    {item.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}
