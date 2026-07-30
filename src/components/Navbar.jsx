import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { profile } from "../data/profile";

const links = [
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "work" },
  // { label: "Experience", id: "experience" },
  { label: "Contact", id: "contact" },
];
export default function Navbar() {
  const [open, setOpen] = useState(false),
    [scrolled, setScrolled] = useState(false),
    [active, setActive] = useState("top");
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 18);
      const current = [...links]
        .reverse()
        .find(
          (link) =>
            document.getElementById(link.id)?.getBoundingClientRect().top < 170,
        );
      setActive(current?.id || "top");
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const go = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };
  return (
    <header className={`nav-wrap ${scrolled ? "nav-scrolled" : ""}`}>
      <nav className="nav container" aria-label="Main navigation">
        <button
          type="button"
          className="wordmark"
          onClick={() => go("top")}
          aria-label="Back to the top"
        >
          S<span>.</span>S
        </button>
        <div className="nav-links">
          {links.map((link) => (
            <button
              type="button"
              key={link.id}
              className={active === link.id ? "active" : ""}
              onClick={() => go(link.id)}
            >
              {link.label}
            </button>
          ))}
        </div>
        <a href={`mailto:${profile.email}`} className="nav-status">
          <i /> Available for opportunities
        </a>
        <button
          className="menu-button"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
          >
            {links.map((link) => (
              <button
                type="button"
                className={active === link.id ? "active" : ""}
                key={link.id}
                onClick={() => go(link.id)}
              >
                {link.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
