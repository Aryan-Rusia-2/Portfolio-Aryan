import { LuGraduationCap } from "react-icons/lu";
import { education } from "../data";

export function Education() {
  const [degree, ...earlier] = education;

  return (
    <section id="education" className="scroll-mt-20 border-t border-zinc-200 dark:border-line">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <p className="text-xs uppercase tracking-[0.28em] text-zinc-500 dark:text-mist">
          Education
        </p>
        <h2 className="mt-3 font-display text-4xl sm:text-5xl">Where I trained</h2>

        {degree && (
          <article className="mt-10 overflow-hidden rounded-3xl border border-zinc-200 bg-white/70 dark:border-line dark:bg-panel/80">
            <div className="flex gap-4 p-6 sm:p-8">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-gold/30 bg-gold/10 text-gold">
                <LuGraduationCap size={22} />
              </span>
              <div>
                <p className="text-sm text-gold">{degree.school}</p>
                <h3 className="mt-1 font-display text-3xl leading-tight sm:text-4xl">
                  {degree.credential}
                </h3>
                {degree.focus && (
                  <p className="mt-2 text-lg text-zinc-700 dark:text-zinc-300">{degree.focus}</p>
                )}
                <p className="mt-4 text-sm uppercase tracking-[0.18em] text-zinc-500 dark:text-mist">
                  {degree.dates}
                  {degree.note ? ` · ${degree.note}` : ""}
                </p>
              </div>
            </div>
          </article>
        )}

        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {earlier.map((item) => (
            <article
              key={item.school}
              className="rounded-2xl border border-zinc-200 bg-white/60 p-5 dark:border-line dark:bg-panel/60"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-medium">{item.credential}</h3>
                <span className="shrink-0 text-xs text-zinc-500 dark:text-mist">{item.dates}</span>
              </div>
              <p className="mt-1 text-sm text-gold">
                {item.school} · {item.place}
              </p>
              {item.note && (
                <p className="mt-2 text-sm text-zinc-600 dark:text-mist">{item.note}</p>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
