import { ArrowUp } from 'lucide-react'
import { socialLinks } from '../data/socialLinks'

export default function Footer() {
  return <footer className="footer container"><span>© {new Date().getFullYear()} Saurabh Sharma</span><div>{socialLinks.map(({ label, href, icon: Icon }) => <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" aria-label={label}><Icon size={15} /><span>{label}</span></a>)}</div><a href="#top" className="to-top" aria-label="Back to top"><ArrowUp size={16} /></a></footer>
}
