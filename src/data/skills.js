import {
  SiBootstrap, SiC, SiCss, SiExpress, SiGit, SiGithub, SiHtml5, SiOpenjdk,
  SiJavascript, SiJupyter, SiMongodb, SiMysql, SiNodedotjs, SiNumpy,
  SiPandas, SiPostman, SiPython, SiReact, SiScikitlearn, SiTailwindcss,
  SiVite, SiTypescript, SiNextdotjs, SiMongoose, SiVercel, SiRender
} from 'react-icons/si'
import { VscVscode } from 'react-icons/vsc'

// Add new skills here only; the section groups and renders every entry automatically.
export const skills = [
  { name: 'C', icon: SiC, category: 'Languages' },
  { name: 'Java', icon: SiOpenjdk, category: 'Languages' },
  { name: 'JavaScript', icon: SiJavascript, category: 'Languages' },
  { name: 'TypeScript', icon: SiTypescript, category: 'Languages' },
  { name: 'Python', icon: SiPython, category: 'Languages' },
  { name: 'Next.js', icon: SiNextdotjs, category: 'Frontend' },
  { name: 'React.js', icon: SiReact, category: 'Frontend' },
  { name: 'HTML5', icon: SiHtml5, category: 'Frontend' },
  { name: 'CSS3', icon: SiCss, category: 'Frontend' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, category: 'Frontend' },
  { name: 'Bootstrap', icon: SiBootstrap, category: 'Frontend' },
  { name: 'Node.js', icon: SiNodedotjs, category: 'Backend & Data' },
  { name: 'Express', icon: SiExpress, category: 'Backend & Data' },
  { name: 'MongoDB', icon: SiMongodb, category: 'Backend & Data' },
  { name: 'Mongoose', icon: SiMongoose, category: 'Backend & Data' },
  { name: 'MySQL', icon: SiMysql, category: 'Backend & Data' },
  // { name: 'NumPy', icon: SiNumpy, category: 'AI & ML' },
  // { name: 'Pandas', icon: SiPandas, category: 'AI & ML' },
  // { name: 'Scikit-learn', icon: SiScikitlearn, category: 'AI & ML' },
  // { name: 'Jupyter', icon: SiJupyter, category: 'AI & ML' },
  { name: 'Git', icon: SiGit, category: 'Tools' },
  { name: 'GitHub', icon: SiGithub, category: 'Tools' },
  { name: 'VS Code', icon: VscVscode, category: 'Tools' },
  { name: 'Postman', icon: SiPostman, category: 'Tools' },
  { name: 'Vite', icon: SiVite, category: 'Tools' },
  { name: 'Vercel', icon: SiVercel, category: 'Tools' },
  { name: 'Render', icon: SiRender, category: 'Tools' },
]
