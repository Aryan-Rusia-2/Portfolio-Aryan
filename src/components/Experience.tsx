import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { experience } from "../data";

function JobLink({ href, label }: { href: string; label: string }) {
  if (href.startsWith("http")) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="mt-5 inline-block text-sm text-gold hover:underline"
      >
        {label}
      </a>
    );
  }
  return (
    <Link to={href} className="mt-5 inline-block text-sm text-gold hover:underline">
      {label}
    </Link>
  );
}

export function Experience() {
  const [openId, setOpenId] = useState(experience[0]?.id ?? "");

  return (
    <section id="work" className="scroll-mt-20 border-t border-zinc-200 dark:border-line">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <p className="text-xs uppercase tracking-[0.28em] text-zinc-500 dark:text-mist">
          Experience
        </p>
        <h2 className="mt-3 font-display text-4xl sm:text-5xl">A path through product and research</h2>
        <p className="mt-4 max-w-2xl text-zinc-600 dark:text-mist">
          Freelance work now, plus founding SnowBotics, full-stack delivery, and research. Click a
          role for the details.
        </p>

        <div className="mt-12 space-y-4">
          {experience.map((job, index) => {
            const open = openId === job.id;
            return (
              <motion.article
                key={job.id}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.04 }}
                className="overflow-hidden rounded-2xl border border-zinc-200 bg-white/60 dark:border-line dark:bg-panel/60"
              >
                <button
                  type="button"
                  onClick={() => setOpenId(open ? "" : job.id)}
                  className="flex w-full flex-col gap-3 px-5 py-5 text-left sm:flex-row sm:items-start sm:justify-between sm:px-7"
                >
                  <div>
                    <h3 className="text-lg font-medium">{job.role}</h3>
                    <p className="text-sm text-gold">{job.company}</p>
                    {(job.type || job.location) && (
                      <p className="mt-1 text-sm text-zinc-500 dark:text-mist">
                        {[job.type, job.location].filter(Boolean).join(" · ")}
                      </p>
                    )}
                  </div>
                  <p className="shrink-0 text-sm text-zinc-500 dark:text-mist">{job.dates}</p>
                </button>
                {open && (
                  <div className="border-t border-zinc-200 px-5 py-5 sm:px-7 dark:border-line">
                    <ul className="space-y-2 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                      {job.points.map((point) => (
                        <li key={point} className="flex gap-3">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                    {job.skills && job.skills.length > 0 && (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {job.skills.map((skill) => (
                          <span
                            key={skill}
                            className="rounded-full bg-zinc-100 px-2.5 py-1 text-xs text-zinc-600 dark:bg-ink dark:text-mist"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}
                    {job.href && (
                      <JobLink href={job.href} label={job.hrefLabel ?? "Learn more →"} />
                    )}
                  </div>
                )}
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
