import { Code2, ArrowUp, Github, Briefcase } from 'lucide-react';
import { profile } from '../data';

export default function Footer() {
  return (
    <footer className="border-t border-ink-800 bg-ink-950">
      <div className="container-px py-12">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          {/* Logo */}
          <a href="#home" className="group flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-accent-500 to-cyan-500 text-ink-950">
              <Code2 className="h-5 w-5" strokeWidth={2.5} />
            </span>
            <span className="font-display text-base font-bold text-white">
              Zahoor Ahmed<span className="text-accent-400">.</span>
            </span>
          </a>

          {/* Links */}
          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-ink-400">
            <a href="#skills" className="transition-colors hover:text-accent-400">Skills</a>
            <a href="#experience" className="transition-colors hover:text-accent-400">Experience</a>
            <a href="#projects" className="transition-colors hover:text-accent-400">Projects</a>
            <a href="#testimonials" className="transition-colors hover:text-accent-400">Testimonials</a>
            <a href="#contact" className="transition-colors hover:text-accent-400">Contact</a>
          </nav>

          {/* Socials */}
          <div className="flex items-center gap-3">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-ink-700 text-ink-300 transition-all duration-300 hover:border-accent-500/40 hover:text-accent-400 hover:-translate-y-0.5"
              aria-label="GitHub"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href={profile.upwork}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-ink-700 text-ink-300 transition-all duration-300 hover:border-accent-500/40 hover:text-accent-400 hover:-translate-y-0.5"
              aria-label="Upwork"
            >
              <Briefcase className="h-4 w-4" />
            </a>
            <a
              href="#home"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-ink-700 text-ink-300 transition-all duration-300 hover:border-accent-500/40 hover:text-accent-400 hover:-translate-y-0.5"
              aria-label="Back to top"
            >
              <ArrowUp className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 border-t border-ink-800 pt-6 text-center">
          <p className="text-xs text-ink-500">
            © {new Date().getFullYear()} Zahoor Ahmed. Senior Software Engineer . Laravel, PHP & Django Specialist.
          </p>
        </div>
      </div>
    </footer>
  );
}
