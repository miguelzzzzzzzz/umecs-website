import { Calendar } from 'lucide-react'
import { projects } from '../../data/content'
import AnimatedSection from '../ui/AnimatedSection'
import SectionHeading from '../ui/SectionHeading'

export default function Projects() {
  return (
    <AnimatedSection id="projects" className="bg-brand-light py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Portfolio"
          title="Notable Recent Projects"
          description="Commercial renovations and fit-outs delivered on time with minimal business disruption."
        />

        <div className="mt-16 grid gap-10 lg:grid-cols-2">
          {projects.map((project, index) => (
            <article
              key={project.name}
              className={`group overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                index === projects.length - 1 && projects.length % 2 !== 0
                  ? 'lg:col-span-2'
                  : ''
              }`}
            >
              <div className="relative aspect-[4/3] min-h-[280px] overflow-hidden sm:min-h-[360px] lg:min-h-[420px]">
                <img
                  src={project.image}
                  alt={project.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-brand-navy/80 via-brand-navy/10 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 sm:bottom-6 sm:left-6 sm:right-6">
                  <h3 className="text-xl font-bold text-white sm:text-2xl lg:text-3xl">
                    {project.name}
                  </h3>
                  <p className="mt-2 flex items-center gap-2 text-sm text-white/80 sm:text-base">
                    <Calendar className="h-5 w-5" />
                    {project.year}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}
