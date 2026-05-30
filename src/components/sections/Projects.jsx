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

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.name}
              className="group overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-brand-navy/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-lg font-bold text-white sm:text-xl">
                    {project.name}
                  </h3>
                  <p className="mt-1 flex items-center gap-1.5 text-sm text-white/70">
                    <Calendar className="h-4 w-4" />
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
