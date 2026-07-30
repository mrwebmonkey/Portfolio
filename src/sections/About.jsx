import { BrainCircuit, Orbit, ScanLine } from "lucide-react";
import SectionTitle from "../components/SectionTitle";
import Reveal from "../components/Reveal";
import { profile } from "../data/profile";

const principles = [
  {
    icon: BrainCircuit,
    title: "AI & Machine Learning",
    copy: "Building practical machine learning solutions to solve real-world problems.",
  },
  {
    icon: ScanLine,
    title: "Full-Stack Development",
    copy: "Creating responsive and scalable web applications using the MERN stack.",
  },
  {
    icon: Orbit,
    title: "Continuous Learning",
    copy: "Constantly exploring new technologies, improving skills, and building impactful projects.",
  },
];

export default function About() {
  return (
    <section id="about" className="section container">
      <SectionTitle
        eyebrow="01 / About"
        title="Learning, building, and improving every day."
      />
      <div className="about-grid">
        <Reveal>
          <p className="about-lead">{profile.bio}</p>
        </Reveal>
        <div className="principles">
          {principles.map(({ icon: Icon, title, copy }, i) => (
            <Reveal className="principle" key={title} delay={i * 0.09}>
              <Icon />
              <div>
                <h3>{title}</h3>
                <p>{copy}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
      <div className="stat-row">
        {profile.stats.map((stat) => (
          <div key={stat.label}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
