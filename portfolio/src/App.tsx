import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import WorkExperience from './components/WorkExperience'

function App() {

  return (
    <div style={{ display: 'flex', flexDirection: 'column', backgroundColor: '#14141c'}}>
      <Navbar />
      <Home />
      <Projects />
      <WorkExperience />
      
    </div>
  )
}

export default App
