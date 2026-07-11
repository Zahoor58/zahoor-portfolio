import { Star, Quote } from 'lucide-react';
import { testimonials } from '../data';

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-pad relative">
      <div className="absolute left-1/4 top-0 -z-10 h-[400px] w-[500px] rounded-full bg-accent-500/8 blur-[140px]" />

      <div className="container-px">
        {/* Header */}
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="section-label">
            <span className="h-1 w-1 rounded-full bg-accent-400" />
            Client Testimonials
          </span>
          <h2 className="mt-5 font-display text-4xl font-bold tracking-tight text-white md:text-5xl">
            Real feedback from completed projects
          </h2>
          <p className="mt-4 text-base text-ink-400 md:text-lg">
            Trusted by clients to deliver clean, scalable, and well-structured solutions — on time.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <figure
              key={i}
              className={`reveal reveal-delay-${(i % 3) + 1} group relative flex flex-col rounded-2xl glass-light p-7 card-hover`}
            >
              {/* Quote icon */}
              <div className="mb-5 flex items-center justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-500/10 text-accent-400 ring-1 ring-accent-500/20 transition-transform duration-300 group-hover:scale-110">
                  <Quote className="h-5 w-5" />
                </div>
                {/* Stars */}
                <div className="flex gap-0.5">
                  {Array.from({ length: t.rating }).map((_, s) => (
                    <Star key={s} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>

              {/* Quote */}
              <blockquote className="flex-1 text-sm leading-relaxed text-ink-200">
                "{t.quote}"
              </blockquote>

              {/* Footer */}
              <figcaption className="mt-6 border-t border-ink-800 pt-5">
                <p className="text-sm font-semibold text-white">{t.client}</p>
                <p className="mt-1 text-xs text-ink-400">{t.project}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
