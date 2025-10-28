import './App.css'
import { About } from './components/About/About'
import { Experience } from './components/Experience/Experience'
import Home from './components/Home/Home'
import { ThreeProjects } from './components/ThreeProjects/ThreeProjects'
import { WebProjects } from './components/WebProjects/WebProjects'

function App() {

  return (
    <>
      <Home />
      <About />
      <Experience />
      <WebProjects />
      <ThreeProjects />
    </>
  )
}

export default App
