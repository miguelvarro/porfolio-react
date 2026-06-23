import {
  SiPython,
  SiReact,
  SiFastapi,
  SiMysql,
  SiGit,
  SiDocker,
  SiJavascript,
  SiOllama,
} from "react-icons/si";

const icons = {
  Python: SiPython,
  React: SiReact,
  FastAPI: SiFastapi,
  JavaScript: SiJavascript,
  MySQL: SiMysql,
  Git: SiGit,
  Docker: SiDocker,
  Ollama: SiOllama,
};

function SkillCard({ skill }) {
  const Icon = icons[skill];

  return (
    <div className="skill-card">
      {Icon && <Icon size={20} />}
      <span>{skill}</span>
    </div>
  );
}

export default SkillCard;