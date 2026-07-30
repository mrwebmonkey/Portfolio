import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import SectionTitle from "../components/SectionTitle";
import Reveal from "../components/Reveal";
import { skills } from "../data/skills";

export default function Skills() {
  const categories = useMemo(
    () => [...new Set(skills.map((skill) => skill.category))],
    [],
  );
  const [activeCategory, setActiveCategory] = useState("All");
  const visibleSkills =
    activeCategory === "All"
      ? skills
      : skills.filter((skill) => skill.category === activeCategory);
  return (
    <section id="skills" className="section container skills-section">
      <SectionTitle
        eyebrow="02 / Toolkit"
        title="Technologies I Love Working With."
        // copy="A practical toolkit for turning ideas into thoughtful, dependable products."
      />
      <div
        className="skill-filters"
        role="tablist"
        aria-label="Filter skills by category"
      >
        {["All", ...categories].map((category) => (
          <button
            key={category}
            type="button"
            className={activeCategory === category ? "is-active" : ""}
            onClick={() => setActiveCategory(category)}
            role="tab"
            aria-selected={activeCategory === category}
          >
            {category}
          </button>
        ))}
      </div>
      <motion.div className="skills-logo-grid" layout>
        {visibleSkills.map((skill, index) => {
          const Icon = skill.icon;
          return (
            <Reveal
              key={skill.name}
              className="skill-logo-card"
              delay={Math.min(index * 0.035, 0.35)}
            >
              <motion.div
                whileHover={{ y: -5, rotate: -2 }}
                transition={{ type: "spring", stiffness: 340, damping: 18 }}
              >
                <span className="skill-icon">
                  <Icon aria-hidden="true" />
                </span>
                <span className="skill-name">{skill.name}</span>
                <small>{skill.category}</small>
              </motion.div>
            </Reveal>
          );
        })}
      </motion.div>
    </section>
  );
}
