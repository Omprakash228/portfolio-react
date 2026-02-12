import './App.css'
// import { About } from './components/About/About'
import { Contact } from './components/Contact/Contact'
import { Experience } from './components/Experience/Experience'
import { Footer } from './components/Footer/Footer'
import Home from './components/Home/Home'
import { ThreeProjects } from './components/ThreeProjects/ThreeProjects'
import { WebProjects } from './components/WebProjects/WebProjects'

function App() {

  return (
    <>
      <Home />
      {/* <About /> */}
      <Experience />
      <WebProjects />
      <ThreeProjects />
      <Contact />
      <Footer />
    </>
  )
}

export default App
