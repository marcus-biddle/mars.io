import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar'
import WorkExperience from './components/WorkExperience'

function App() {

  return (
    <div style={{ display: 'flex', flexDirection: 'column'}}>
      <Navbar />
      <Home />
      <WorkExperience />
    </div>
  )
}

export default App
