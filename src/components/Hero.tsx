import { motion } from "framer-motion";
import { HiArrowDown } from "react-icons/hi";
import { profile } from "../data";

export function Hero() {
  return (
    <section id="home" className="hero-glow relative overflow-hidden">
      <div className="mx-auto grid min-h-[calc(100vh-4rem)] max-w-6xl items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:py-20">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs uppercase tracking-[0.28em] text-zinc-500 dark:text-mist"
          >
            Lucknow · Computer Engineering · Nanotechnology
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="mt-5 font-display text-6xl leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl"
          >
            {profile.name}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-600 dark:text-mist"
          >
            I build at the intersection of AI, software, and systems — computer vision,
            navigation, agents, and tools that stay reliable once they leave the notebook.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.16 }}
            className="mt-8 flex flex-wrap gap-2"
          >
            {profile.roles.map((role) => (
              <span
                key={role}
                className="rounded-full border border-zinc-300 px-3 py-1 text-sm text-zinc-700 dark:border-line dark:text-zinc-300"
              >
                {role}
              </span>
            ))}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.22 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-zinc-900 px-5 py-3 text-sm font-medium text-paper transition hover:bg-zinc-700 dark:bg-gold dark:text-ink dark:hover:bg-gold-bright"
            >
              See selected work
              <HiArrowDown />
            </a>
            <a
              href={profile.resume}
              className="inline-flex items-center rounded-full border border-zinc-300 px-5 py-3 text-sm font-medium transition hover:border-gold dark:border-line"
            >
              Download resume
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.12, duration: 0.5 }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="absolute -inset-3 rounded-[2rem] border border-zinc-200 dark:border-line" />
          <img
            src={profile.photo}
            alt={`${profile.name} portrait`}
            className="relative aspect-[4/5] w-full rounded-[1.6rem] object-cover object-top shadow-2xl shadow-black/20"
          />
          <p className="absolute -bottom-4 left-6 rounded-full border border-zinc-200 bg-paper px-4 py-2 text-xs uppercase tracking-[0.2em] dark:border-line dark:bg-panel">
            {profile.location}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
