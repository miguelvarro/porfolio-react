import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiBars3, HiXMark } from "react-icons/hi2";
import { profile } from "../data/profile";
import ThemeToggle from "./ThemeToggle";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Cerrar al cambiar a escritorio
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Bloquear scroll cuando el menú está abierto
  useEffect(() => {
    if (isMenuOpen) {
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    }

    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  // Cerrar al pulsar Escape
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  // Cerrar al pulsar fuera
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-content">

        <a
          href="#"
          className="navbar-logo"
          aria-label="Go to home"
          onClick={closeMenu}
        >
          <img
            src="/assets/img/logo.png"
            alt="Miguel Vargas Logo"
          />
        </a>

        <div className="navbar-desktop">

          <div className="navbar-links">
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

          <div className="navbar-social">
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

        </div>

        <div className="navbar-actions">

          <ThemeToggle />

          <button
            type="button"
            className="navbar-menu-button"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
          >
            <motion.div
              animate={{
                rotate: isMenuOpen ? 180 : 0,
                scale: isMenuOpen ? 1.1 : 1,
              }}
              transition={{
                duration: 0.25,
                ease: "easeOut",
              }}
            >
              {isMenuOpen ? <HiXMark /> : <HiBars3 />}
            </motion.div>
          </button>

        </div>

      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            ref={menuRef}
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