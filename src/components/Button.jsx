import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { cn } from '../utils/cn'

export default function Button({ children, className, href, variant = 'primary', ...props }) {
  const styles = variant === 'primary' ? 'button-primary' : 'button-secondary'
  const content = <>{children}<span className="button-arrow" aria-hidden="true"><ArrowUpRight size={15} /></span></>

  return href ? (
    <motion.a whileHover={{ y: -2 }} whileTap={{ scale: .98 }} href={href} className={cn('button', styles, className)} {...props}>{content}</motion.a>
  ) : (
    <motion.button whileHover={{ y: -2 }} whileTap={{ scale: .98 }} className={cn('button', styles, className)} {...props}>{content}</motion.button>
  )
}
