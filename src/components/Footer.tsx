import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { SiUpwork } from "react-icons/si";
import { profile } from "../data";

const links = [
  { href: profile.socials.linkedin, icon: FaLinkedin, label: "LinkedIn" },
  { href: profile.socials.upwork, icon: SiUpwork, label: "Upwork" },
  { href: profile.socials.github, icon: FaGithub, label: "GitHub" },
  { href: profile.socials.instagram, icon: FaInstagram, label: "Instagram" },
];

export function Footer() {
  return (
    <footer className="border-t border-zinc-200 dark:border-line">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-8 sm:flex-row sm:px-8">
        <p className="text-sm text-zinc-500 dark:text-mist">
          © {new Date().getFullYear()} {profile.name}. Built from the original Portfolio-Aryan work.
        </p>
        <div className="flex gap-5">
          {links.map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="text-zinc-500 transition hover:text-gold dark:text-mist"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
