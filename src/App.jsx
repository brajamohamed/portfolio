import Navbar from "./components/navbar/Navbar";
import style from "./App.module.css";
import Hero from "./components/hero/Hero";
import Projects from "./components/Projects/Projects";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";
function App() {
  return (
    <div className={style.App}>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
