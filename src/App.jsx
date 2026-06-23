import "./App.css"

import Navbar from "./components/Navbar"
import BackgroundGlow from "./components/BackgroundGlow";
import Footer from "./components/Footer";

import Hero from "./sections/Hero"
import About from "./sections/About"
import Skills from "./sections/Skills"
import Projects from "./sections/Projects"
import Contact from "./sections/Contact"

function App() {
  return (
    <>
      <BackgroundGlow />
      
      <Navbar />
      
      <Hero />

      <About />

      <Skills />

      <Projects />

      <Contact />
      
      <Footer />
    </>
  )
}

export default App