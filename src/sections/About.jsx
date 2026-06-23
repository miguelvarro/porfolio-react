import { profile } from "../data/profile";
import FadeIn from "../components/FadeIn";

function About() {
  return (
    <section className="about-section" id="about">

      <div className="container">

        <FadeIn>
          <p className="about-label">
            ABOUT
          </p>
        </FadeIn>

        <FadeIn>
          <h2 className="about-title">
            Construyo aplicaciones web,
          </h2>
        </FadeIn>

        <FadeIn>
          <p className="about-description">
            Soy desarrollador Full Stack con formación en Desarrollo de Aplicaciones Multiplataforma.

          Me gusta construir productos reales utilizando tecnologías modernas, combinando desarrollo web, backend e inteligencia artificial para resolver problemas complejos de forma sencilla.

            Actualmente trabajo en proyectos propios como Axiom AI mientras continúo ampliando experiencia en arquitectura software, sistemas cloud y aplicaciones basadas en IA.
          </p>
        </FadeIn>

        <div className="about-tags">

          <span>Valencia, España</span>

          <span>DAM</span>

          <span>Python</span>

          <span>React</span>

          <span>FastAPI</span>

          <span>IA</span>

          <span>Backend</span>

        </div>

      </div>

    </section>
  );
}

export default About;