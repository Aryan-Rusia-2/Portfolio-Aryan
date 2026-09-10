import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { LuMoon, LuSun } from "react-icons/lu";
import { navLinks, profile } from "../data";
import { useTheme } from "./ThemeProvider";

export function Header() {
  const { theme, toggle } = useTheme();
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  const go = (id: string) => {
    if (location.pathname !== "/") {
      window.location.href = `/#${id}`;
      return;
    }
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-40 border-b transition-colors ${
        scrolled
          ? "border-zinc-200/80 bg-paper/80 backdrop-blur-xl dark:border-line/80 dark:bg-ink/75"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link to="/" className="flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-full border border-zinc-300 text-xs font-semibold tracking-[0.2em] dark:border-line">
            AR
          </span>
          <span className="hidden text-sm font-medium tracking-wide sm:block">
            {profile.name}
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <button
              key={link.id}
              type="button"
              onClick={() => go(link.id)}
              className="text-sm text-zinc-600 transition hover:text-zinc-950 dark:text-mist dark:hover:text-white"
            >
              {link.label}
            </button>
          ))}
          <a
            href={profile.resume}
            className="rounded-full border border-zinc-300 px-4 py-1.5 text-sm transition hover:border-gold hover:text-zinc-950 dark:border-line dark:hover:text-white"
          >
            Resume
          </a>
          <button
            type="button"
            onClick={toggle}
            aria-label="Toggle theme"
            className="grid h-9 w-9 place-items-center rounded-full border border-zinc-300 dark:border-line"
          >
            {theme === "dark" ? <LuSun size={16} /> : <LuMoon size={16} />}
          </button>
        </nav>

        <div className="flex items-center gap-3 md:hidden">
          <button
            type="button"
            onClick={toggle}
            aria-label="Toggle theme"
            className="grid h-9 w-9 place-items-center rounded-full border border-zinc-300 dark:border-line"
          >
            {theme === "dark" ? <LuSun size={16} /> : <LuMoon size={16} />}
          </button>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-label="Menu"
            className="grid h-9 w-9 place-items-center"
          >
            {open ? <HiX size={22} /> : <HiMenuAlt3 size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-zinc-200 bg-paper px-5 py-6 dark:border-line dark:bg-ink md:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <button
                key={link.id}
                type="button"
                onClick={() => go(link.id)}
                className="text-left text-lg"
              >
                {link.label}
              </button>
            ))}
            <a href={profile.resume} className="text-lg text-gold">
              Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
