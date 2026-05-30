import { team, certifications } from '../../data/content'
import AnimatedSection from '../ui/AnimatedSection'
import SectionHeading from '../ui/SectionHeading'

export default function Team() {
  return (
    <AnimatedSection id="team" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Leadership"
          title="Our Key Personnel"
          description="Seasoned construction professionals dedicated to your project's success."
        />

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member) => (
            <div
              key={member.name}
              className="group overflow-hidden rounded-2xl border border-brand-muted transition-all duration-300 hover:-translate-y-1 hover:border-brand-red/20 hover:shadow-lg"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-brand-navy">{member.name}</h3>
                <p className="mt-1 text-sm font-medium text-brand-red">
                  {member.role}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-brand-slate">
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-2xl bg-brand-navy p-8 sm:p-10">
          <h3 className="text-center font-display text-xl font-bold text-white sm:text-2xl">
            Safety, Quality & Compliance
          </h3>
          <p className="mx-auto mt-4 max-w-3xl text-center text-sm leading-relaxed text-white/70 sm:text-base">
            Before any project commences, we conduct site risk assessments and
            implement project-specific safety plans aligned with Philippine
            construction regulations. Mandatory PPE, daily toolbox meetings, and
            rigorous quality control ensure every deliverable meets structural and
            aesthetic requirements.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            {certifications.map((cert) => (
              <span
                key={cert}
                className="rounded-full border border-brand-yellow/30 bg-brand-yellow/10 px-4 py-2 text-sm font-medium text-brand-yellow"
              >
                {cert}
              </span>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}
