import './App.css'
import { About } from './components/About/About'
import Home from './components/Home/Home'
import { ThreeProjects } from './components/ThreeProjects/ThreeProjects'
import { WebProjects } from './components/WebProjects/WebProjects'

function App() {

  return (
    <>
      <Home />
      <WebProjects />
      <ThreeProjects />
      <About />
    </>
  )
}

export default App
