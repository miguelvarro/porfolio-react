import { Parallax } from "react-scroll-parallax";

function BackgroundGlow() {
  return (
    <Parallax speed={-15}>
      <div className="background-glow"></div>
    </Parallax>
  );
}

export default BackgroundGlow;