import {
  LuAward,
  LuBrain,
  LuCodeXml,
  LuDatabase,
  LuFileCheck,
  LuGlobe,
  LuMusic,
  LuSwords,
  LuWrench,
} from "react-icons/lu";
import type { IconType } from "react-icons";
import { awards, skillGroups } from "../data";

const skillIcons: Record<string, IconType> = {
  "Core Languages": LuCodeXml,
  "Computer Vision & AI": LuBrain,
  "Frameworks & Runtimes": LuGlobe,
  "Databases & Backend": LuDatabase,
  "DevOps & Cloud": LuWrench,
};

const awardIcons: Record<string, IconType> = {
  Scholarships: LuAward,
  Karate: LuSwords,
  Music: LuMusic,
  Certificates: LuFileCheck,
};

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-20 border-t border-zinc-200 dark:border-line">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-zinc-500 dark:text-mist">
              Capabilities
            </p>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl">A working stack, not a wishlist</h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-zinc-600 dark:text-mist">
            Languages, computer vision, frameworks, databases, and cloud tools I have used to ship
            products, labs, and research — not just logos I have hovered over.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {skillGroups.map((group, index) => {
            const Icon = skillIcons[group.title] ?? LuWrench;
            return (
              <article
                key={group.title}
                className="group relative overflow-hidden rounded-2xl border border-zinc-200 bg-white/70 p-6 transition duration-300 hover:-translate-y-0.5 hover:border-gold/50 dark:border-line dark:bg-panel/80"
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/70 to-transparent opacity-0 transition group-hover:opacity-100" />
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span className="grid h-10 w-10 place-items-center rounded-xl border border-gold/30 bg-gold/10 text-gold">
                      <Icon size={18} />
                    </span>
                    <div>
                      <h3 className="font-medium">{group.title}</h3>
                      <p className="mt-0.5 text-sm text-zinc-500 dark:text-mist">{group.blurb}</p>
                    </div>
                  </div>
                  <span className="font-display text-2xl text-zinc-300 dark:text-zinc-600">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-zinc-100 px-3 py-1.5 text-sm text-zinc-700 transition group-hover:bg-zinc-900/5 dark:bg-ink dark:text-zinc-300 dark:group-hover:bg-ink-soft"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>

        <div id="awards" className="mt-20">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-zinc-500 dark:text-mist">
                Recognition
              </p>
              <h3 className="mt-3 font-display text-3xl sm:text-4xl">Awards & other work</h3>
            </div>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {awards.map((group) => {
              const Icon = awardIcons[group.title] ?? LuAward;
              return (
                <article
                  key={group.title}
                  className="rounded-2xl border border-zinc-200 bg-white/70 p-6 dark:border-line dark:bg-panel/80"
                >
                  <div className="flex items-center gap-3">
                    <span className="grid h-9 w-9 place-items-center rounded-full border border-gold/30 text-gold">
                      <Icon size={16} />
                    </span>
                    <h4 className="text-lg font-medium">{group.title}</h4>
                  </div>
                  <ul className="mt-5 space-y-3 text-sm leading-relaxed text-zinc-600 dark:text-mist">
                    {group.items.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
