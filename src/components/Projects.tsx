import { useEffect, useMemo, useState } from 'react';
import { projects, projectFilters, type Project, type ProjectImage } from '../data';

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

function assetUrl(src: string) {
  return `${import.meta.env.BASE_URL}${src}`;
}

function ProjectCarousel({
  projectName,
  images,
  accentText,
  accentRing,
}: {
  projectName: string;
  images: ProjectImage[];
  accentText: string;
  accentRing: string;
}) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (images.length < 2) return;
    const timer = setInterval(() => setActive((i) => (i + 1) % images.length), 4000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="flex w-full flex-col items-center">
      <div className="relative flex h-[320px] w-full items-center justify-center overflow-hidden rounded-2xl bg-ink-950/40 sm:h-[380px] md:h-[420px]">
        {images.map((img, i) => (
          <div
            key={img.src}
            className={`absolute inset-0 flex items-center justify-center p-4 transition-opacity duration-700 ${
              i === active ? 'opacity-100' : 'pointer-events-none opacity-0'
            }`}
          >
            {img.mockup === 'phone' ? (
              <div className="aspect-[9/19.5] h-full max-h-[380px] overflow-hidden rounded-[1.75rem] border-[6px] border-ink-800 bg-ink-900 shadow-2xl">
                <img
                  src={assetUrl(img.src)}
                  alt={`${projectName} — ${img.label}`}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
            ) : (
              <div className="w-full max-w-2xl overflow-hidden rounded-xl border border-ink-800 bg-ink-900 shadow-2xl">
                <div className="flex items-center gap-1.5 border-b border-ink-800 bg-ink-900 px-3 py-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-500/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/70" />
                </div>
                <img
                  src={assetUrl(img.src)}
                  alt={`${projectName} — ${img.label}`}
                  loading="lazy"
                  className="max-h-[340px] w-full object-contain"
                />
              </div>
            )}
          </div>
        ))}
      </div>

      {images.length > 1 && (
        <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
          {images.map((img, i) => (
            <button
              key={img.src}
              onClick={() => setActive(i)}
              className={`rounded-full px-3 py-1.5 text-xs font-medium transition-all duration-300 ${
                i === active
                  ? `${accentText} bg-ink-800/70 ring-1 ring-inset ${accentRing}`
                  : 'text-ink-500 hover:text-ink-300'
              }`}
            >
              {img.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function ProjectShowcase({ project, index }: { project: Project; index: number }) {
  const a = accentMap[project.accent] ?? accentMap.accent;

  const info = (
    <div className="flex flex-col justify-center">
      <div className="flex flex-wrap items-center gap-2">
        <span className={`rounded-full bg-ink-800/50 px-3 py-1 text-xs font-medium ${a.text} ring-1 ring-inset ${a.ring}`}>
          {project.category}
        </span>
      </div>
      <h3 className="mt-5 font-display text-2xl font-bold leading-snug text-white md:text-3xl">{project.name}</h3>
      <p className="mt-4 text-sm leading-relaxed text-ink-400 md:text-base">{project.description}</p>
      <div className="mt-6 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className={`rounded-md bg-ink-800/50 px-2.5 py-1 text-xs font-medium ${a.text} ring-1 ring-inset ${a.ring}`}
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="mt-6 flex items-center gap-2">
        <span className={`h-2 w-2 rounded-full ${a.dot}`} />
        <span className="text-xs font-medium text-ink-500">{project.stack.join(' · ')}</span>
      </div>
    </div>
  );

  const carousel = (
    <div className="flex items-center justify-center">
      <ProjectCarousel
        projectName={project.name}
        images={project.images}
        accentText={a.text}
        accentRing={a.ring}
      />
    </div>
  );

  return (
    <article
      className={`reveal reveal-delay-${(index % 3) + 1} grid gap-8 overflow-hidden rounded-3xl glass-light p-6 transition-colors duration-500 hover:border-accent-500/20 md:p-8 lg:grid-cols-2 lg:items-center lg:gap-12 lg:p-10`}
    >
      {project.reverse ? (
        <>
          {carousel}
          {info}
        </>
      ) : (
        <>
          {info}
          {carousel}
        </>
      )}
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

        {/* Showcases */}
        <div className="mt-12 flex flex-col gap-8">
          {filtered.map((project, i) => (
            <ProjectShowcase key={project.name} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
