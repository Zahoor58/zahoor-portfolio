import { Star, Quote, Repeat } from 'lucide-react';
import { testimonials, type Testimonial } from '../data';

function flagEmoji(countryCode: string) {
  return String.fromCodePoint(
    ...countryCode
      .toUpperCase()
      .split('')
      .map((c) => 127397 + c.charCodeAt(0))
  );
}

function TestimonialCard({ t }: { t: Testimonial }) {
  const fullStars = Math.round(t.rating);

  return (
    <figure className="flex w-[320px] shrink-0 flex-col rounded-2xl glass-light p-6 sm:w-[360px]">
      <div className="flex items-center justify-between">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-500/10 text-accent-400 ring-1 ring-accent-500/20">
          <Quote className="h-4 w-4" />
        </div>
        <div className="flex items-center gap-1">
          <div className="flex gap-0.5">
            {Array.from({ length: 5 }).map((_, s) => (
              <Star
                key={s}
                className={`h-3.5 w-3.5 ${s < fullStars ? 'fill-amber-400 text-amber-400' : 'text-ink-700'}`}
              />
            ))}
          </div>
          <span className="ml-1 text-xs font-medium text-ink-500">{t.rating}</span>
        </div>
      </div>

      <blockquote className="mt-5 line-clamp-5 flex-1 text-sm leading-relaxed text-ink-200">
        "{t.quote}"
      </blockquote>

      <figcaption className="mt-5 flex items-center justify-between border-t border-ink-800 pt-4">
        <div>
          <p className="flex items-center gap-1.5 text-sm font-semibold text-white">
            {t.client}
            {t.repeatClient && (
              <span className="inline-flex items-center gap-1 rounded-full bg-accent-500/10 px-2 py-0.5 text-[10px] font-medium text-accent-400 ring-1 ring-inset ring-accent-500/20">
                <Repeat className="h-2.5 w-2.5" />
                Repeat
              </span>
            )}
          </p>
          <p className="mt-1 text-xs text-ink-500">
            {flagEmoji(t.countryCode)} {t.location} · {t.timeAgo}
          </p>
        </div>
        <span className="whitespace-nowrap rounded-md bg-ink-800/50 px-2 py-1 text-[10px] font-medium text-ink-400">
          {t.gig}
        </span>
      </figcaption>
    </figure>
  );
}

export default function Testimonials() {
  const mid = Math.ceil(testimonials.length / 2);
  const rowA = testimonials.slice(0, mid);
  const rowB = testimonials.slice(mid);

  return (
    <section id="testimonials" className="section-pad relative overflow-hidden">
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
            {testimonials.length}+ five-star reviews from clients on Upwork — trusted to deliver clean, scalable, and well-structured solutions on time.
          </p>
        </div>
      </div>

      {/* Marquee rows */}
      <div className="reveal mt-14 flex flex-col gap-5">
        <div className="group mask-fade-x overflow-hidden">
          <div className="flex w-max gap-5 animate-marquee group-hover:[animation-play-state:paused]">
            {[...rowA, ...rowA].map((t, i) => (
              <TestimonialCard key={`a-${i}`} t={t} />
            ))}
          </div>
        </div>
        <div className="group mask-fade-x overflow-hidden">
          <div className="flex w-max gap-5 animate-marquee-reverse group-hover:[animation-play-state:paused]">
            {[...rowB, ...rowB].map((t, i) => (
              <TestimonialCard key={`b-${i}`} t={t} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
