import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Education from './components/Education'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-slate-50 font-sans text-slate-900 selection:bg-blue-200 selection:text-blue-900">
      <Hero />
      <Skills />
      <Projects />
      <Education />
      <Footer />
    </div>
  )
}

export default App