import { BsGithub, BsLinkedin } from 'react-icons/bs'
import './Home.css';

const Home = () => {
  return (
    <section id='home' className='home'>
            <h1 className=''>Marcus <span>'Mars'</span> Biddle</h1>
            <div className='desc'>
              <p>Self-Taught</p>
              <p className='divider'> |</p>
              <p>Innovator</p>
            </div>

          {/* Social Media Container */}
          <div className='icon-container'>
            <div>
              <BsGithub style={{ height: '100%', width: '100%'}} />
            </div>
            <div>
              <BsLinkedin style={{ height: '100%', width: '100%'}} />
            </div>
            
          </div>
    </section>
  )
}

export default Home