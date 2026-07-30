import SectionTitle from "../components/SectionTitle";
import Reveal from "../components/Reveal";
import { experiences } from "../data/experience";
export default function Experience() {
  return (
    <section id="experience" className="section container experience-section">
      <SectionTitle
        eyebrow="03 / Experience"
        title="A record of building momentum."
      />
      <div className="timeline">
        {experiences.map((item, i) => (
          <Reveal className="timeline-item" key={item.company} delay={i * 0.1}>
            <span className="timeline-period">{item.period}</span>
            <div className="timeline-dot" />
            <div>
              <h3>{item.role}</h3>
              <h4>{item.company}</h4>
              <p>{item.description}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
