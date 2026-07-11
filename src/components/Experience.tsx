import { Briefcase, MapPin } from 'lucide-react';
import { experience } from '../data';

export default function Experience() {
  return (
    <section id="experience" className="section-pad relative">
      <div className="absolute left-1/2 top-0 -z-10 h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-cyan-500/5 blur-[140px]" />

      <div className="container-px">
        {/* Header */}
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="section-label">
            <span className="h-1 w-1 rounded-full bg-accent-400" />
            Experience
          </span>
          <h2 className="mt-5 font-display text-4xl font-bold tracking-tight text-white md:text-5xl">
            5+ years of engineering impact
          </h2>
          <p className="mt-4 text-base text-ink-400 md:text-lg">
            A track record of building reliable backend systems, improving performance, and shipping products across multiple industries.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mx-auto mt-16 max-w-3xl">
          {/* Vertical line */}
          <div className="absolute left-4 top-2 h-full w-px bg-gradient-to-b from-accent-500/50 via-ink-700 to-transparent md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-8">
            {experience.map((job, i) => (
              <div
                key={`${job.company}-${i}`}
                className={`reveal reveal-delay-${(i % 3) + 1} relative pl-12 md:pl-0 ${
                  i % 2 === 0 ? 'md:pr-[52%]' : 'md:pl-[52%]'
                }`}
              >
                {/* Node */}
                <div
                  className={`absolute left-4 top-6 z-10 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full bg-ink-900 ring-2 ring-accent-500/40 md:left-1/2 ${
                    i % 2 === 0 ? 'md:translate-x-0' : 'md:-translate-x-1/2'
                  }`}
                >
                  <span className="h-2.5 w-2.5 rounded-full bg-accent-400 shadow-[0_0_10px_rgba(16,185,129,0.6)]" />
                </div>

                {/* Card */}
                <div className="group rounded-2xl glass-light p-6 transition-all duration-500 hover:border-accent-500/30 hover:-translate-y-0.5">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-500/10 text-accent-400 ring-1 ring-accent-500/20">
                        <Briefcase className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-display text-base font-semibold text-white">{job.role}</h3>
                        <p className="text-sm text-accent-400">{job.company}</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-ink-400">
                    <span className="font-mono">{job.period}</span>
                    {job.location && (
                      <span className="inline-flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        {job.location}
                      </span>
                    )}
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-ink-300">{job.description}</p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {job.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md bg-ink-800/60 px-2.5 py-1 text-xs font-medium text-ink-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
