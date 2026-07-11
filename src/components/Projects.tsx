import { useMemo, useState } from 'react';
import { FolderGit2, Lock, Building2 } from 'lucide-react';
import { projects, projectFilters, type Project } from '../data';

const accentMap: Record<string, { ring: string; text: string; bg: string; dot: string }> = {
  accent: {
    ring: 'ring-accent-500/20',
    text: 'text-accent-400',
    bg: 'from-accent-500/15 to-cyan-500/5',
    dot: 'bg-accent-400',
  },
  cyan: {
    ring: 'ring-cyan-500/20',
    text: 'text-cyan-400',
    bg: 'from-cyan-500/15 to-accent-500/5',
    dot: 'bg-cyan-400',
  },
  amber: {
    ring: 'ring-amber-500/20',
    text: 'text-amber-400',
    bg: 'from-amber-500/15 to-accent-500/5',
    dot: 'bg-amber-400',
  },
};

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const a = accentMap[project.accent] ?? accentMap.accent;
  const isPrivate = project.company.toLowerCase().includes('client');

  return (
    <article
      className={`reveal reveal-delay-${(index % 3) + 1} group relative flex flex-col overflow-hidden rounded-2xl glass-light card-hover`}
    >
      {/* Visual header */}
      <div className={`relative h-40 overflow-hidden bg-gradient-to-br ${a.bg}`}>
        <div className="absolute inset-0 bg-dots opacity-30" />
        <div className="absolute inset-0 flex items-center justify-center">
          <FolderGit2 className={`h-16 w-16 ${a.text} opacity-20 transition-all duration-500 group-hover:scale-110 group-hover:opacity-30`} />
        </div>
        {/* Company badge */}
        <div className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-ink-950/70 px-3 py-1 text-xs font-medium text-ink-200 backdrop-blur-sm">
          {isPrivate ? <Lock className="h-3 w-3" /> : <Building2 className="h-3 w-3" />}
          {project.company}
        </div>
        {/* Category badge */}
        <div className="absolute right-4 top-4 rounded-full bg-ink-950/70 px-3 py-1 text-xs font-medium text-ink-300 backdrop-blur-sm">
          {project.category}
        </div>
        {/* Bottom gradient fade */}
        <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-ink-950/80 to-transparent" />
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-lg font-semibold leading-snug text-white">{project.name}</h3>
        <p className="mt-3 text-sm leading-relaxed text-ink-400">{project.description}</p>

        {/* Tags */}
        <div className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className={`rounded-md bg-ink-800/50 px-2.5 py-1 text-xs font-medium ${a.text} ring-1 ring-inset ${a.ring}`}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-auto flex items-center gap-2 pt-5">
          <span className={`h-2 w-2 rounded-full ${a.dot}`} />
          <span className="text-xs font-medium text-ink-500">{project.stack.join(' · ')}</span>
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState('All');

  const filtered = useMemo(
    () => (filter === 'All' ? projects : projects.filter((p) => p.filters.includes(filter))),
    [filter]
  );

  return (
    <section id="projects" className="section-pad relative">
      <div className="absolute inset-0 -z-10 bg-grid opacity-20" />

      <div className="container-px">
        {/* Header */}
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="section-label">
            <span className="h-1 w-1 rounded-full bg-accent-400" />
            Featured Projects
          </span>
          <h2 className="mt-5 font-display text-4xl font-bold tracking-tight text-white md:text-5xl">
            Real platforms built in production
          </h2>
          <p className="mt-4 text-base text-ink-400 md:text-lg">
            Real platforms built across full-time engineering roles and client engagements — spanning HR-tech, civic-tech, healthcare, energy, and SaaS.
          </p>
        </div>

        {/* Filters */}
        <div className="reveal mt-10 flex flex-wrap justify-center gap-2">
          {projectFilters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 ${
                filter === f
                  ? 'bg-accent-500 text-ink-950 shadow-lg shadow-accent-500/20'
                  : 'border border-ink-700 text-ink-300 hover:border-accent-500/40 hover:text-white'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project, i) => (
            <ProjectCard key={project.name} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
