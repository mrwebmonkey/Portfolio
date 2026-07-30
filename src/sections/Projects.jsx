import { ArrowUpRight } from "lucide-react";
import SectionTitle from "../components/SectionTitle";
import ProjectCard from "../components/ProjectCard";
import Reveal from "../components/Reveal";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section id="work" className="section container work-section">
      <SectionTitle
        eyebrow="04 / Projects"
        title="Things I've Built"
        // copy="A few systems I've helped turn into useful, durable products."
      />
      <div className="project-grid">
        {projects.map((project, index) => (
          <Reveal
            key={project.id}
            className={project.featured ? "project-first" : ""}
            delay={index * 0.08}
          >
            <ProjectCard project={project} featured={project.featured} />
          </Reveal>
        ))}
      </div>
      <a className="quiet-link" href="mailto:saurabhpk2005@gmail.com">
        More projects available on request <ArrowUpRight size={16} />
      </a>
    </section>
  );
}
