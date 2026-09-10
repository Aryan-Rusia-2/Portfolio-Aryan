import { profile } from "../data";

export function About() {
  return (
    <section id="about" className="scroll-mt-20 border-t border-zinc-200 dark:border-line">
      <div className="mx-auto max-w-3xl px-5 py-20 sm:px-8">
        <p className="text-xs uppercase tracking-[0.28em] text-zinc-500 dark:text-mist">About</p>
        <h2 className="mt-3 font-display text-4xl sm:text-5xl">Hi, I am Aryan</h2>
        <div className="mt-8 space-y-6 text-lg leading-relaxed text-zinc-600 dark:text-zinc-300">
          {profile.about.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <a
          href="#contact"
          className="mt-10 inline-flex rounded-full bg-zinc-900 px-5 py-3 text-sm font-medium text-paper transition hover:bg-zinc-700 dark:bg-gold dark:text-ink dark:hover:bg-gold-bright"
        >
          Let’s talk
        </a>
      </div>
    </section>
  );
}
