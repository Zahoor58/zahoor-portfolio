import { useEffect, useState } from 'react';
import { Menu, X, Code2 } from 'lucide-react';
import { useActiveSection } from '../hooks/useScrollReveal';
import { profile } from '../data';

const links = [
  { id: 'home', label: 'Home' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'testimonials', label: 'Testimonials' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const active = useActiveSection(links.map((l) => l.id));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'glass shadow-lg shadow-ink-950/40' : 'bg-transparent'
      }`}
    >
      <nav className="container-px flex h-16 items-center justify-between md:h-20">
        {/* Logo */}
        <a href="#home" className="group flex items-center gap-2.5">
          <span className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-accent-500 to-cyan-500 text-ink-950 shadow-lg shadow-accent-500/20 transition-transform duration-300 group-hover:scale-105">
            <Code2 className="h-5 w-5" strokeWidth={2.5} />
          </span>
          <span className="font-display text-base font-bold tracking-tight text-white">
            Zahoor<span className="text-accent-400">.</span>
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                active === link.id ? 'text-white' : 'text-ink-400 hover:text-ink-100'
              }`}
            >
              {link.label}
              <span
                className={`absolute inset-0 -z-10 rounded-full bg-accent-500/10 transition-opacity duration-300 ${
                  active === link.id ? 'opacity-100' : 'opacity-0'
                }`}
              />
              <span
                className={`absolute -bottom-0.5 left-1/2 h-0.5 -translate-x-1/2 rounded-full bg-accent-400 transition-all duration-300 ${
                  active === link.id ? 'w-5 opacity-100' : 'w-0 opacity-0'
                }`}
              />
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href={profile.github}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 rounded-full border border-ink-700 px-5 py-2 text-sm font-semibold text-ink-200 transition-all duration-300 hover:border-accent-500/50 hover:text-white hover:-translate-y-0.5"
        >
          GitHub ↗
        </a>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-ink-200 transition-colors hover:text-white md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden transition-all duration-400 md:hidden ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="container-px flex flex-col gap-1 pb-6">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => setOpen(false)}
              className={`rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                active === link.id
                  ? 'bg-accent-500/10 text-white'
                  : 'text-ink-300 hover:bg-ink-900 hover:text-white'
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl border border-ink-700 px-4 py-3 text-sm font-semibold text-ink-200"
          >
            View GitHub ↗
          </a>
        </div>
      </div>
    </header>
  );
}
