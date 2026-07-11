import { ArrowUpRight, MapPin, Sparkles } from 'lucide-react';
import { profile, stats } from '../data';
import CountUp from './CountUp';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden pt-32 md:pt-40">
      {/* Background layers */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid mask-fade-b opacity-60" />
        <div className="absolute left-1/2 top-0 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-accent-500/10 blur-[140px]" />
        <div className="absolute right-0 top-1/4 h-[400px] w-[400px] rounded-full bg-cyan-500/8 blur-[120px]" />
        <div className="absolute bottom-0 left-0 h-[350px] w-[350px] rounded-full bg-amber-500/5 blur-[100px]" />
      </div>

      <div className="container-px">
        {/* Availability badge */}
        <div className="reveal flex justify-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-accent-500/20 bg-accent-500/5 px-4 py-2 text-xs font-medium text-accent-300">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-400" />
            </span>
            Available for new opportunities
          </div>
        </div>

        {/* Name + headline */}
        <div className="mt-8 text-center">
          <h1 className="reveal reveal-delay-1 font-display text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
            {profile.name.split(' ')[0]}
            <span className="block text-gradient text-shadow-glow">{profile.name.split(' ').slice(1).join(' ')}</span>
          </h1>

          <p className="reveal reveal-delay-2 mt-6 font-display text-lg font-medium text-ink-200 sm:text-xl md:text-2xl">
            {profile.role}
            <span className="mx-3 text-ink-600">.</span>
            <span className="text-accent-400">{profile.tagline}</span>
          </p>

          <p className="reveal reveal-delay-3 mx-auto mt-6 max-w-2xl text-base leading-relaxed text-ink-400 sm:text-lg">
            {profile.bio}
          </p>
        </div>

        {/* CTAs */}
        <div className="reveal reveal-delay-4 mt-10 flex flex-wrap items-center justify-center gap-4">
          <a href="#projects" className="btn-primary">
            View Featured Projects
            <ArrowUpRight className="h-4 w-4" />
          </a>
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="btn-ghost">
            View GitHub ↗
          </a>
        </div>

        {/* Location */}
        <div className="reveal reveal-delay-5 mt-6 flex items-center justify-center gap-2 text-sm text-ink-500">
          <MapPin className="h-4 w-4" />
          {profile.location}
        </div>

        {/* Stats */}
        <div className="reveal mt-20 grid grid-cols-2 gap-4 md:mt-28 md:grid-cols-4 md:gap-6">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="group relative overflow-hidden rounded-2xl glass-light p-6 text-center transition-all duration-500 hover:border-accent-500/30 md:p-8"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-accent-500/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="font-display text-4xl font-bold text-white md:text-5xl">
                <CountUp
                  value={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  decimals={stat.decimals}
                />
              </div>
              <div className="mt-2 text-xs font-medium uppercase tracking-wider text-ink-400 md:text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="mt-16 flex justify-center md:mt-24">
        <div className="flex h-10 w-6 items-start justify-center rounded-full border border-ink-700 p-1.5">
          <div className="h-2 w-1 animate-bounce rounded-full bg-accent-400" />
        </div>
      </div>

      {/* Decorative floating icon */}
      <div className="pointer-events-none absolute right-[8%] top-[22%] hidden lg:block">
        <div className="animate-float-slow">
          <Sparkles className="h-6 w-6 text-accent-400/40" />
        </div>
      </div>
    </section>
  );
}
