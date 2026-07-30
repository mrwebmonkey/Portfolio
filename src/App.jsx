import { useEffect, useState } from "react";
import Lenis from "lenis";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./components/Navbar";
import AnimatedBackground from "./components/AnimatedBackground";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Certificates from "./sections/Certificates";
import Education from "./sections/Education";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.08, smoothWheel: true });
    let frame;
    const raf = (time) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };
    frame = requestAnimationFrame(raf);
    const timer = setTimeout(() => setLoaded(true), 450);
    return () => {
      cancelAnimationFrame(frame);
      clearTimeout(timer);
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <AnimatePresence>
        {!loaded && (
          <motion.div
            className="loader"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.45 }}
          >
            <span className="loader-mark">SS</span>
            <span className="loader-line" />
          </motion.div>
        )}
      </AnimatePresence>
      <div className="page-shell">
        <AnimatedBackground />
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          {/* <Experience /> */}
          <Projects />
          <Certificates />
          <Education />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
