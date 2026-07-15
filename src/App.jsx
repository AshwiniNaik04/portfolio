import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Certifications />
      <Projects/>
      <Contact />
      <Footer/>
    </>
  );
}

export default App;