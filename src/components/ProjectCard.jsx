import { ArrowUpRight, ExternalLink } from 'lucide-react'
import { motion } from 'framer-motion'
import { FaGithub } from 'react-icons/fa'
export default function ProjectCard({ project, featured }) {
  return <motion.article className={`project-card ${project.accent} ${featured ? 'project-featured' : ''}`} whileHover={{ y: -7 }} transition={{ type: 'spring', stiffness: 300, damping: 20 }}>
    <div className="project-visual"><span className="project-number">{project.number}</span>{project.image ? <img src={project.image} alt={`${project.title} project preview`} /> : <><div className="visual-shape" /><div className="visual-line line-one" /><div className="visual-line line-two" /></>}</div>
    <div className="project-content"><div className="project-kicker">{project.category}<ArrowUpRight size={17} /></div><h3>{project.title}</h3><p>{project.description}</p><div className="metrics">{project.metrics.map(metric => <span key={metric}>{metric}</span>)}</div><div className="tags">{project.technologies.map(technology => <span key={technology}>{technology}</span>)}</div><div className="project-actions">{project.githubUrl && <motion.a whileHover={{ y: -2 }} whileTap={{ scale: .98 }} href={project.githubUrl} target="_blank" rel="noopener noreferrer"><FaGithub size={15} /> GitHub</motion.a>}{project.liveUrl && <motion.a whileHover={{ y: -2 }} whileTap={{ scale: .98 }} href={project.liveUrl} target="_blank" rel="noopener noreferrer"><ExternalLink size={15} /> Live demo</motion.a>}</div></div>
  </motion.article>
}
