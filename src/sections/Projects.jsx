import { profile } from "../data/profile";
import FadeIn from "../components/FadeIn";
import { Parallax } from "react-scroll-parallax";

function Projects() {
  return (
    <section
      id="projects"
      className="projects-section"
    >
      <div className="container">

        <FadeIn>
          <p className="projects-label">
            PROJECTS
          </p>
        </FadeIn>

        <FadeIn>
          <h2 className="projects-title">
            Proyectos Destacados
          </h2>
        </FadeIn>

        <FadeIn>

          <div className="projects-grid">

            {profile.projects.map((project) => (

              <FadeIn
                key={project.title}
                className={project.featured ? "project-card-featured" : ""}
              >

                <article className="project-card">

                  {project.image && (

                    <Parallax speed={-5}>

                      <img
                        src={project.image}
                        alt={project.title}
                        className="project-image"
                      />

                    </Parallax>

                  )}

                  <h3>
                    {project.title}
                  </h3>

                  <p>
                    {project.description}
                  </p>

                  <div className="project-tech">

                    {project.tech.map((tech) => (

                      <span key={tech}>
                        {tech}
                      </span>

                    ))}

                  </div>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    Ver proyecto →
                  </a>

                </article>
                </FadeIn>


            ))}

          </div>

        </FadeIn>

      </div>
    </section>
  );
}

export default Projects;