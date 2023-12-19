import './App.scss'
import Home from './Component/Home'
import About from './Component/About'
import Contact from './Component/Contact'
import Navbar from './Component/Navbar/navbar'
import Skills from './Component/Skills/skills'

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Home />
        <About />
        <Skills />
        <Contact />
      </div>
    </>
  )
}

export default App
