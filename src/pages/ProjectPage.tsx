import { Link, useParams } from "react-router-dom";
import { HiArrowLeft } from "react-icons/hi";
import { getCaseStudy } from "../caseStudies";
import { NotFoundPage } from "./NotFoundPage";

export function ProjectPage() {
  const { slug } = useParams();
  const study = slug ? getCaseStudy(slug) : undefined;

  if (!study) return <NotFoundPage />;

  return (
    <main className="mx-auto max-w-3xl px-5 py-12 sm:px-8">
      <Link
        to="/#projects"
        className="inline-flex items-center gap-2 text-sm text-zinc-500 transition hover:text-gold dark:text-mist"
      >
        <HiArrowLeft /> All projects
      </Link>
      <p className="mt-8 text-xs uppercase tracking-[0.28em] text-gold">{study.kicker}</p>
      <h1 className="mt-3 font-display text-4xl leading-tight sm:text-5xl">{study.title}</h1>
      <p className="mt-5 text-lg leading-relaxed text-zinc-600 dark:text-mist">{study.summary}</p>
      {study.demo && (
        <a
          href={study.demo.href}
          target="_blank"
          rel="noreferrer"
          className="mt-6 inline-flex rounded-full bg-zinc-900 px-5 py-2.5 text-sm text-paper dark:bg-gold dark:text-ink"
        >
          {study.demo.label}
        </a>
      )}
      <div className="mt-10 overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-100 dark:border-line dark:bg-ink-soft">
        <img src={study.hero} alt="" className="mx-auto max-h-[28rem] w-full object-contain" />
      </div>

      <article className="mt-12 space-y-6">
        {study.blocks.map((block, index) => {
          if (block.type === "h2") {
            return (
              <h2 key={index} className="pt-4 font-display text-3xl">
                {block.text}
              </h2>
            );
          }
          if (block.type === "h3") {
            return (
              <h3 key={index} className="text-xl font-medium">
                {block.text}
              </h3>
            );
          }
          if (block.type === "p") {
            return (
              <p key={index} className="leading-relaxed text-zinc-700 dark:text-zinc-300">
                {block.text}
              </p>
            );
          }
          if (block.type === "ul") {
            return (
              <ul key={index} className="space-y-2 text-zinc-700 dark:text-zinc-300">
                {block.items.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            );
          }
          if (block.type === "ol") {
            return (
              <ol key={index} className="list-decimal space-y-2 pl-5 text-zinc-700 dark:text-zinc-300">
                {block.items.map((item) => (
                  <li key={item} className="pl-1">
                    {item}
                  </li>
                ))}
              </ol>
            );
          }
          if (block.type === "quote") {
            return (
              <blockquote
                key={index}
                className="border-l-2 border-gold pl-4 text-zinc-700 dark:text-zinc-300"
              >
                {block.text}
              </blockquote>
            );
          }
          if (block.type === "hr") {
            return <hr key={index} className="border-zinc-200 dark:border-line" />;
          }
          if (block.type === "links") {
            return (
              <div key={index} className="flex flex-wrap gap-3">
                {block.items.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex rounded-full border border-zinc-300 px-4 py-2 text-sm text-zinc-700 transition hover:border-gold dark:border-line dark:text-zinc-300"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            );
          }
          if (block.type !== "img") return null;
          return (
            <figure key={index} className="py-2">
              <img
                src={block.src}
                alt={block.alt}
                className="w-full rounded-xl border border-zinc-200 bg-zinc-50 object-contain dark:border-line dark:bg-ink-soft"
              />
              {block.caption && (
                <figcaption className="mt-2 text-sm text-zinc-500">{block.caption}</figcaption>
              )}
            </figure>
          );
        })}
      </article>
    </main>
  );
}
