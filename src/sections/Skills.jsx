import { profile } from "../data/profile";
import SkillCard from "../components/SkillCard";
import FadeIn from "../components/FadeIn";

function Skills() {
  return (
    <FadeIn>
    <section className="skills-section">

      <div className="container">

        <FadeIn>
          <h2 className="section-title">
            Tech Stack
          </h2>
        </FadeIn>

        <FadeIn>
          <p className="section-description">
            Tecnologías y herramientas que utilizo para desarrollar
            aplicaciones web, backend e inteligencia artificial.
          </p>
        </FadeIn>

        <div className="skills-grid">
          {profile.skills.map((skill) => (
            <SkillCard
              key={skill}
              skill={skill}
            />
          ))}
        </div>

      </div>

    </section>
    </FadeIn>
  );
}

export default Skills;