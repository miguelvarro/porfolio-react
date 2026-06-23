import { profile } from "../data/profile";
import FadeIn from "../components/FadeIn";

function Contact() {
  return (
    <FadeIn>
    <section className="contact-section" id="contact">

      <div className="container">

        <FadeIn>
          <p className="contact-label">
            LET'S WORK TOGETHER
          </p>
        </FadeIn>

        <FadeIn>
          <h2 className="contact-title">
            ¿Tienes una oportunidad,
            una colaboración o un proyecto?
          </h2>
        </FadeIn>

        <a
          href={`mailto:${profile.email}`}
          className="contact-email"
        >
          {profile.email}
        </a>

        <div className="contact-links">

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
            Descargar CV
          </a>

        </div>

      </div>

    </section>
    </FadeIn>
  );
}

export default Contact;