import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { LuFileText } from "react-icons/lu";
import { SiUpwork } from "react-icons/si";
import { profile } from "../data";

const items = [
  { href: profile.socials.linkedin, label: "LinkedIn", icon: FaLinkedin },
  { href: profile.socials.upwork, label: "Upwork", icon: SiUpwork },
  { href: profile.socials.github, label: "GitHub", icon: FaGithub },
  { href: `mailto:${profile.email}`, label: "Email", icon: HiOutlineMail },
  { href: profile.resume, label: "Resume", icon: LuFileText, download: true },
];

export function SocialDock() {
  return (
    <aside className="pointer-events-none fixed top-1/2 left-6 z-30 hidden -translate-y-1/2 flex-col items-center lg:flex">
      <ul className="pointer-events-auto flex flex-col gap-4">
        {items.map(({ href, label, icon: Icon, download }) => (
          <li key={label}>
            <a
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noreferrer" : undefined}
              download={download}
              aria-label={label}
              className="grid h-10 w-10 place-items-center rounded-full border border-zinc-300 bg-paper/80 text-zinc-600 transition hover:-translate-y-0.5 hover:border-gold hover:text-zinc-950 dark:border-line dark:bg-panel/80 dark:text-mist dark:hover:text-white"
            >
              <Icon size={16} />
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}
