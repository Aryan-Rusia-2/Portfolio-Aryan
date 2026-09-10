import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { HiArrowUpRight } from "react-icons/hi2";
import type { ProjectCard, ProjectCategory } from "../data";
import { projects } from "../data";

const filters: { id: "all" | ProjectCategory; label: string }[] = [
  { id: "all", label: "All" },
  { id: "hardware", label: "Hardware & Embedded" },
  { id: "ai", label: "AI / ML" },
  { id: "software", label: "Software & Data" },
  { id: "research", label: "Research" },
];

const categoryLabel: Record<ProjectCategory, string> = {
  hardware: "Hardware",
  ai: "AI / ML",
  software: "Software",
  research: "Research",
};

function matchesFilter(project: ProjectCard, filter: "all" | ProjectCategory) {
  if (filter === "all") return true;
  return project.category === filter || project.extraCategories?.includes(filter);
}

function ProjectMedia({ project, featured = false }: { project: ProjectCard; featured?: boolean }) {
  return (
    <div
      className={`relative overflow-hidden bg-zinc-100 dark:bg-[#0c0e11] ${
        featured ? "aspect-[16/10] sm:aspect-[16/9]" : "aspect-[16/10]"
      }`}
    >
      <img
        src={project.image}
        alt=""
        className="absolute inset-0 h-full w-full object-contain p-3 transition duration-500 group-hover:scale-[1.03]"
      />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent px-4 pb-3 pt-16">
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-white/15 px-2.5 py-0.5 text-[11px] uppercase tracking-[0.16em] text-white/90 backdrop-blur-sm">
            {categoryLabel[project.category]}
          </span>
          {project.year && (
            <span className="text-[11px] uppercase tracking-[0.16em] text-white/70">{project.year}</span>
          )}
        </div>
        <h3 className={`mt-1.5 font-medium text-white ${featured ? "text-xl sm:text-2xl" : "text-lg"}`}>
          {project.title}
        </h3>
      </div>
    </div>
  );
}

function ProjectTile({
  project,
  featured = false,
}: {
  project: ProjectCard;
  featured?: boolean;
}) {
  const inner = (
    <>
      <ProjectMedia project={project} featured={featured} />
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-3">
          <p className="text-sm leading-relaxed text-zinc-600 dark:text-mist">{project.blurb}</p>
          <HiArrowUpRight className="mt-0.5 shrink-0 text-gold opacity-0 transition group-hover:opacity-100" />
        </div>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-zinc-100 px-2.5 py-1 text-[11px] text-zinc-600 dark:bg-ink dark:text-zinc-400"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </>
  );

  const className =
    "group flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white/80 shadow-sm transition hover:-translate-y-1 hover:border-gold/70 dark:border-line dark:bg-panel/80";

  if (project.external) {
    return (
      <a href={project.href} target="_blank" rel="noreferrer" className={className}>
        {inner}
      </a>
    );
  }

  return (
    <Link to={project.href} className={className}>
      {inner}
    </Link>
  );
}

export function Projects() {
  const [filter, setFilter] = useState<(typeof filters)[number]["id"]>("all");
  const visible = useMemo(
    () => projects.filter((item) => matchesFilter(item, filter)),
    [filter],
  );
  const featured = visible.filter((item) => item.featured);
  const rest = visible.filter((item) => !item.featured);

  return (
    <section id="projects" className="scroll-mt-20 border-t border-zinc-200 dark:border-line">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-zinc-500 dark:text-mist">
              Selected work
            </p>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl">Projects with a paper trail</h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-zinc-600 dark:text-mist">
              Hardware, AI systems, archival software, and research — shown with the real
              screenshots and renders, not cropped fragments.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {filters.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setFilter(item.id)}
                className={`rounded-full px-3.5 py-1.5 text-sm transition ${
                  filter === item.id
                    ? "bg-zinc-900 text-paper dark:bg-gold dark:text-ink"
                    : "border border-zinc-300 text-zinc-600 hover:border-gold dark:border-line dark:text-mist"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="popLayout">
          {featured.length > 0 && (
            <motion.div
              key={`featured-${filter}`}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-12 grid gap-6 lg:grid-cols-2"
            >
              {featured.map((project) => (
                <motion.article key={project.id} layout>
                  <ProjectTile project={project} featured />
                </motion.article>
              ))}
            </motion.div>
          )}

          <motion.div
            key={`grid-${filter}`}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {rest.map((project, index) => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.03 }}
              >
                <ProjectTile project={project} />
              </motion.article>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
