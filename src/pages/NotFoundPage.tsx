import { Link } from "react-router-dom";

export function NotFoundPage() {
  return (
    <main className="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-start justify-center px-5 py-20 sm:px-8">
      <p className="text-xs uppercase tracking-[0.28em] text-gold">404</p>
      <h1 className="mt-3 font-display text-5xl">This page is not on the map</h1>
      <p className="mt-4 text-zinc-600 dark:text-mist">
        The route you opened is not part of this portfolio.
      </p>
      <Link
        to="/"
        className="mt-8 rounded-full bg-zinc-900 px-5 py-2.5 text-sm text-paper dark:bg-gold dark:text-ink"
      >
        Back home
      </Link>
    </main>
  );
}
