import { profile } from "../data";

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 border-t border-zinc-200 dark:border-line">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-2">
        <div>
          <p className="text-xs uppercase tracking-[0.28em] text-zinc-500 dark:text-mist">
            Contact
          </p>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl">Let’s build the next thing</h2>
          <p className="mt-5 max-w-md text-zinc-600 dark:text-mist">
            Based in Lucknow, India. Available for freelance and contract work —
            I read every note.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {[
              "Computer Vision & AI",
              "ML & Data Pipelines",
              "Backend & APIs",
              "Embedded & Robotics",
            ].map((item) => (
              <span
                key={item}
                className="rounded-full border border-zinc-300 px-3 py-1 text-xs text-zinc-600 dark:border-line dark:text-mist"
              >
                {item}
              </span>
            ))}
          </div>
          <div className="mt-8 flex flex-col gap-2">
            <a
              href={`mailto:${profile.email}`}
              className="text-lg text-gold hover:underline"
            >
              {profile.email}
            </a>
            <a
              href={profile.socials.upwork}
              target="_blank"
              rel="noreferrer"
              className="text-sm text-zinc-500 hover:text-gold dark:text-mist"
            >
              Upwork profile →
            </a>
          </div>
        </div>

        <form
          action="https://getform.io/f/1e0e9125-35eb-41d3-bf8d-424d7f6f5e62"
          method="POST"
          className="space-y-4 rounded-2xl border border-zinc-200 bg-white/70 p-6 dark:border-line dark:bg-panel/70"
        >
          <label className="block text-sm">
            Name
            <input
              required
              name="Name"
              type="text"
              className="mt-2 w-full rounded-xl border border-zinc-300 bg-transparent px-4 py-3 outline-none focus:border-gold dark:border-line"
            />
          </label>
          <label className="block text-sm">
            Email
            <input
              required
              name="email"
              type="email"
              className="mt-2 w-full rounded-xl border border-zinc-300 bg-transparent px-4 py-3 outline-none focus:border-gold dark:border-line"
            />
          </label>
          <label className="block text-sm">
            Message
            <textarea
              required
              name="message"
              rows={5}
              className="mt-2 w-full resize-y rounded-xl border border-zinc-300 bg-transparent px-4 py-3 outline-none focus:border-gold dark:border-line"
            />
          </label>
          <button
            type="submit"
            className="w-full rounded-full bg-zinc-900 py-3 text-sm font-medium text-paper transition hover:bg-zinc-700 dark:bg-gold dark:text-ink dark:hover:bg-gold-bright"
          >
            Send message
          </button>
        </form>
      </div>
    </section>
  );
}
