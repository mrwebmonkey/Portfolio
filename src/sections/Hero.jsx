import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Sparkles } from "lucide-react";
import Button from "../components/Button";
import { profile } from "../data/profile";

const rise = { hidden: { opacity: 0, y: 22 }, visible: { opacity: 1, y: 0 } };

export default function Hero() {
  return (
    <section id="top" className="hero container">
      <div className="hero-main">
        <motion.p
          className="hero-pre"
          variants={rise}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.15 }}
        >
          {/* <Sparkles size={15} /> {profile.shortRole}{" "} */}
          <span aria-hidden="true">·</span> {profile.location}
        </motion.p>
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={rise}
          transition={{ delay: 0.25, duration: 0.7 }}
        >
          Building modern
          <br />
          <em>full-stack</em> web applications.
        </motion.h1>
        <motion.p
          className="hero-copy"
          variants={rise}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.42 }}
        >
          {profile.bio}
        </motion.p>
        <motion.div
          className="hero-actions"
          variants={rise}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.56 }}
        >
          <Button href="#work">Explore Work</Button>
          <Button href="#contact" variant="secondary">
            Let's talk
          </Button>
        </motion.div>
        <motion.a
          href="#about"
          className="scroll-cue"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
        >
          Scroll to discover{" "}
          <span>
            <ArrowDown size={15} />
          </span>
        </motion.a>
      </div>
      <motion.aside
        className="profile-card"
        initial={{ opacity: 0, scale: 0.96, y: 22 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.7 }}
      >
        <div
          className="portrait"
          role="img"
          aria-label={`${profile.name}'s professional profile card`}
        >
          <div className="portrait-glow" />
          {profile.image ? (
            <img src={profile.image} alt={`${profile.name} portrait`} />
          ) : (
            <span>SS</span>
          )}
        </div>

        {/* <div className="profile-card-meta">
          <span>Currently</span>
          <strong>{profile.availability}</strong>
        </div>
  
        <ArrowUpRight className="profile-arrow" size={19} /> */}


      </motion.aside>
    </section>
  );
}
