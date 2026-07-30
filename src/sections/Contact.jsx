import { ArrowUpRight, Send } from "lucide-react";
import { motion } from "framer-motion";
import { profile } from "../data/profile";

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="container contact-inner">
        <motion.span
          className="eyebrow"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          07 / Contact
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          let's build something
          <br />
          <em>great</em> together.
        </motion.h2>
        <motion.a
          whileHover={{ x: 5 }}
          href={`mailto:${profile.email}`}
          className="contact-email"
        >
          {profile.email}
          <ArrowUpRight />
        </motion.a>
        <div className="contact-bottom">
          <span>
            <Send size={15} /> Usually replies within 48 hours
          </span>
          {/* <span>Available for ambitious work</span> */}
        </div>
      </div>
    </section>
  );
}
