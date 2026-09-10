import { useEffect } from "react";
import { About } from "../components/About";
import { Contact } from "../components/Contact";
import { Education } from "../components/Education";
import { Experience } from "../components/Experience";
import { Hero } from "../components/Hero";
import { Projects } from "../components/Projects";
import { Skills } from "../components/Skills";
import { SocialDock } from "../components/SocialDock";

export function HomePage() {
  useEffect(() => {
    const id = window.location.hash.replace("#", "");
    if (!id) return;
    requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    });
  }, []);

  return (
    <main>
      <SocialDock />
      <Hero />
      <Experience />
      <Projects />
      <About />
      <Education />
      <Skills />
      <Contact />
    </main>
  );
}
