import { motion } from "framer-motion";
import { profile } from "../data/profile";

function Hero() {
  return (
    <motion.section
      className="hero"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >

        <div className="container hero-container">

        <motion.p
          className="hero-kicker"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: 0.1,
          }}
        >
          FULL STACK DEVELOPER
        </motion.p>

      
        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.2,
          }}
        >
          {profile.name}
        </motion.h1>

        <motion.p
          className="hero-role"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.35,
          }}
        >
          {profile.role}
        </motion.p>

        <motion.p
          className="hero-description"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
          }}
        >
          {profile.description}
        </motion.p>

        <motion.div
          className="hero-tech"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.65,
          }}
        >
          {profile.skills.slice(0, 5).map((skill) => (
            <span key={skill} className="tech-chip">
              {skill}
            </span>
          ))}
        </motion.div>

        <motion.div
          className="hero-buttons"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.8,
          }}
        >
          <a href="#projects" className="btn-primary">
            Ver proyectos
          </a>

          <a
            href="/assets/cv/CV Miguel Angel Vargas.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            Descargar CV
          </a>
        </motion.div>

      </div>
    </motion.section>
  );
}

export default Hero;