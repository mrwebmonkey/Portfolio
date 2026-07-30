import { motion } from "framer-motion";
export default function AnimatedBackground() {
  return (
    <div className="ambient" aria-hidden="true">
      <motion.div
        className="orb orb-one"
        animate={{ x: [0, 40, -10, 0], y: [0, -35, 20, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="orb orb-two"
        animate={{ x: [0, -50, 20, 0], y: [0, 30, -20, 0] }}
        transition={{ duration: 19, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="grid-overlay" />
    </div>
  );
}
