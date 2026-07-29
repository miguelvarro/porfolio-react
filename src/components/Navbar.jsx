import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiBars3, HiXMark } from "react-icons/hi2";
import { profile } from "../data/profile";
import ThemeToggle from "./ThemeToggle";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-content">

        <a
          href="#"
          className="navbar-logo"
          aria-label="Ir al inicio"
          onClick={closeMenu}
        >
          <img
            src="/assets/img/logo.png"
            alt="Miguel Vargas Logo"
          />
        </a>

        <div className="navbar-desktop">

          <div className="navbar-links">
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="navbar-social">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>

            <a
              href="/assets/cv/CV Miguel Angel Vargas.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              CV
            </a>
          </div>

        </div>

        <div className="navbar-actions">

          <ThemeToggle />

          <button
            type="button"
            className="navbar-menu-button"
            onClick={() => setIsMenuOpen((current) => !current)}
            aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
          >
            {isMenuOpen ? <HiXMark /> : <HiBars3 />}
          </button>

        </div>

      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            id="mobile-navigation"
            className="mobile-menu"
            initial={{
              opacity: 0,
              y: -12,
              scale: 0.98,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: -12,
              scale: 0.98,
            }}
            transition={{
              duration: 0.2,
              ease: "easeOut",
            }}
          >
            <div className="mobile-menu-main">

              <a href="#about" onClick={closeMenu}>
                About
              </a>

              <a href="#projects" onClick={closeMenu}>
                Projects
              </a>

              <a href="#contact" onClick={closeMenu}>
                Contact
              </a>

            </div>

            <div className="mobile-menu-divider" />

            <div className="mobile-menu-social">

              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
              >
                GitHub
              </a>

              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
              >
                LinkedIn
              </a>

              <a
                href="/assets/cv/CV Miguel Angel Vargas.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
              >
                CV
              </a>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;