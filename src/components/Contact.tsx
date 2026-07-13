import { MapPin, Github, Clock, Zap } from 'lucide-react';
import { profile } from '../data';

export default function Contact() {
  return (
    <section id="contact" className="section-pad relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-500/10 blur-[150px]" />
        <div className="absolute inset-0 bg-grid opacity-20" />
      </div>

      <div className="container-px">
        <div className="reveal mx-auto max-w-4xl">
          <div className="relative overflow-hidden rounded-3xl border border-ink-800 bg-gradient-to-br from-ink-900/80 to-ink-950/80 p-8 backdrop-blur-xl md:p-14">
            {/* Decorative top line */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-500/50 to-transparent" />

            <div className="text-center">
              <span className="section-label">
                <span className="h-1 w-1 rounded-full bg-accent-400" />
                Let's Work Together
              </span>
              <h2 className="mt-6 font-display text-4xl font-bold tracking-tight text-white md:text-5xl">
                Let's build something
                <span className="block text-gradient">that scales.</span>
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-base text-ink-400 md:text-lg">
                {profile.availableFor}
              </p>
            </div>

            {/* CTA buttons */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <a href={profile.github} target="_blank" rel="noopener noreferrer" className="btn-primary">
                <Github className="h-4 w-4" />
                View GitHub ↗
              </a>
            </div>

            {/* Info row */}
            <div className="mt-12 grid gap-4 border-t border-ink-800 pt-8 sm:grid-cols-3">
              <div className="flex items-center justify-center gap-2.5 text-sm text-ink-300">
                <MapPin className="h-4 w-4 text-accent-400" />
                {profile.location}
              </div>
              <div className="flex items-center justify-center gap-2.5 text-sm text-ink-300">
                <Zap className="h-4 w-4 text-accent-400" />
                Replies within 24h
              </div>
              <div className="flex items-center justify-center gap-2.5 text-sm text-ink-300">
                <Clock className="h-4 w-4 text-accent-400" />
                Available Now
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
