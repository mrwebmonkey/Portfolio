import SectionTitle from "../components/SectionTitle";
import Reveal from "../components/Reveal";
import { education } from "../data/education";
export default function Education() {
  return (
    <section className="section container education-section">
      <SectionTitle
        eyebrow="06 / Education"
        title="Academic Foundation"
      />
      <div className="education-list">
        {education.map((item, i) => (
          <Reveal className="education-item" key={item.degree} delay={i * 0.1}>
            <span>{item.period}</span>
            <div>
              <h3>{item.degree}</h3>
              <h4>{item.school}</h4>
              <p>{item.detail}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
