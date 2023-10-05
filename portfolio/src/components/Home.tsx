import './Home.css';

const Home = () => {
  return (
    <section data-section id='home' className='home'>
      <div className='header-section'>
        <h1>
          Hello, I'm <span>Mars</span>
          <br/>
          Welcome to my page.
        </h1>
        <p>Currently located in California, United States. I am a self-taught engineer with a passion for <span>web development</span>.</p>
      </div>
            {/* <h1 className=''>Marcus <span>'Mars'</span> Biddle</h1>
            <div className='desc'>
              <p>Self-Taught</p>
              <p className='divider'> |</p>
              <p>Innovator</p>
            </div>

          <div className='icon-container'>
            <div>
              <BsGithub style={{ height: '100%', width: '100%'}} />
            </div>
            <div>
              <BsLinkedin style={{ height: '100%', width: '100%'}} />
            </div>
            
          </div> */}
    </section>
  )
}

export default Home