import { profile } from "../data/profile";
import ThemeToggle from "./ThemeToggle";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-content">

        <a href="#" className="navbar-logo">
          <img
            src="/assets/img/logo.png"
            alt="Miguel Vargas Logo"
          />
        </a>

        <div className="navbar-links">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="navbar-social">
          <a href={profile.github} target="_blank">
            GitHub
          </a>

          <a href={profile.linkedin} target="_blank">
            LinkedIn
          </a>

          <a
            href="/assets/cv/CV Miguel Angel Vargas.pdf"
            target="_blank"
          >
            CV
          </a>
        </div>

        <ThemeToggle />
      </div>
    </nav>
  );
}

export default Navbar;