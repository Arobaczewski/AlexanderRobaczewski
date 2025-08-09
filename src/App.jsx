import Header from "./Components/Header"
import About from "./Components/About"
import Hero from "./Components/Hero"
import Skills from './Components/Skills'
import Projects from "./Components/Projects"
import Contact from "./Components/Contact"
import StarfieldBackground from "./Components/StarfieldBackground"

function App() {
  return (
    <>
      <StarfieldBackground />
      <div className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
        <Header/>
        <Hero/>
        <About />
        <Skills/>
        <Projects/>
        <Contact/>
      </div>
    </>
  )
}

export default App