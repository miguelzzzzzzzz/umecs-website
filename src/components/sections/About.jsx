import { assets } from '../../data/assets'
import AnimatedSection from '../ui/AnimatedSection'
import SectionHeading from '../ui/SectionHeading'

export default function About() {
  return (
    <AnimatedSection id="about" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="About Us"
              title="A Trusted Partner in Commercial Construction"
              description="Privately owned and committed to excellence since day one."
              align="left"
            />
            <div className="mt-8 space-y-4 text-brand-slate leading-relaxed">
              <p>
                Unika Mechanical Engineering Construction Services (UMECS) is a
                privately owned construction company operating as a Sole
                Proprietorship. Established in 2019, UMECS is committed to
                delivering quality, reliable, and cost-effective construction
                services across the Philippines.
              </p>
              <p>
                We specialize in construction, renovation, repair, and maintenance
                works, with a strong focus on commercial projects — including
                restaurants, retail stores, offices, and warehouses where
                minimizing business disruption is paramount.
              </p>
              <p>
                Despite our rapid growth, we remain committed to maintaining
                personalized client service, efficient project management, and
                high-quality workmanship in every project we undertake.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-2xl shadow-2xl">
              <img
                src={assets.about}
                alt="UMECS project managers reviewing blueprints on site"
                className="aspect-4/3 w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 rounded-xl bg-brand-red px-6 py-4 text-white shadow-xl sm:-bottom-8 sm:-left-8">
              <p className="text-3xl font-bold">2019</p>
              <p className="text-sm text-white/80">Year Established</p>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}
