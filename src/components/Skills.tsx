import { Server, Layout, Database, Cloud, Plug, type LucideIcon } from 'lucide-react';
import { skillCategories } from '../data';

const iconMap: Record<string, LucideIcon> = {
  Server,
  Layout,
  Database,
  Cloud,
  Plug,
};

export default function Skills() {
  return (
    <section id="skills" className="section-pad relative">
      <div className="absolute inset-0 -z-10 bg-dots opacity-30" />

      <div className="container-px">
        {/* Header */}
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="section-label">
            <span className="h-1 w-1 rounded-full bg-accent-400" />
            Core Skills
          </span>
          <h2 className="mt-5 font-display text-4xl font-bold tracking-tight text-white md:text-5xl">
            Technologies I build with
          </h2>
          <p className="mt-4 text-base text-ink-400 md:text-lg">
            Five years of deep, hands-on experience across the full stack . from backend architecture and database design to cloud deployment and payment integrations.
          </p>
        </div>

        {/* Skill grid */}
        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((cat, i) => {
            const Icon = iconMap[cat.icon] ?? Server;
            return (
              <div
                key={cat.title}
                className={`reveal reveal-delay-${(i % 3) + 1} group relative overflow-hidden rounded-2xl glass-light p-7 card-hover`}
              >
                {/* Hover glow */}
                <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-accent-500/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

                {/* Icon */}
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-accent-500/15 to-cyan-500/10 text-accent-400 ring-1 ring-accent-500/20 transition-transform duration-300 group-hover:scale-110">
                  <Icon className="h-6 w-6" strokeWidth={2} />
                </div>

                <h3 className="font-display text-lg font-semibold text-white">{cat.title}</h3>

                {/* Skills */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span key={skill} className="chip">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}

          {/* Education card */}
          <div className="reveal reveal-delay-3 group relative overflow-hidden rounded-2xl border border-ink-800 bg-gradient-to-br from-accent-500/10 to-cyan-500/5 p-7 card-hover">
            <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-accent-500/15 blur-3xl" />
            <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent-500/20 text-accent-300 ring-1 ring-accent-500/30">
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 10v6M2 10l10-5 10 5-10 5" />
                <path d="M6 12v5c0 1.66 4 3 6 3s6-1.34 6-3v-5" />
              </svg>
            </div>
            <h3 className="font-display text-lg font-semibold text-white">Education & Certification</h3>
            <div className="mt-4 space-y-3">
              <div>
                <p className="text-sm font-medium text-accent-300">B.S. Computer Science</p>
                <p className="text-xs text-ink-400">University of Engineering & Technology (UET), Lahore</p>
              </div>
              <div className="h-px bg-ink-800" />
              <div>
                <p className="text-sm font-medium text-accent-300">Certified Full Stack Developer</p>
                <p className="text-xs text-ink-400">Udemy</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
