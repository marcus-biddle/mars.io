import './WorkExperience.css';

const WorkExperience = () => {
  return (
    <div className='workexp'>
        <h1>Work Experience</h1>
        <div className='timeline'>
            <div className='left-box'>
                <div className='year-btn'>
                <button>View Year</button>
                </div>
                
                <div className='year-description'>
                    <h4>Shift Lead, <span>Woodstock's Pizzeria Inc</span></h4>
                    <p>Began a job as a Shift Lead for Woodstock's Pizzeria Inc. During this time, I incorporated strict policies in food and waste management to reduce business costs by 10% during my time here. 
                    <br /> <br />While managing a team of 20, on my free time I was learning how to code with Python through books, youtube, and any other documentations I can get my hands on.
                    </p>
                </div>
                <div className='date'>
                    <p>April 2021</p>
                </div>
            </div>
            <div className='right-box'>
                <div className='date'>
                    <p>April 2022</p>
                </div>
                <div className='year-btn'>
                <button>View Year</button>
                </div>
                <div className='year-description'>
                    <h4>QA Engineer I, <span>Shasta QA</span></h4>
                    <p>Joined a leading software consulting company as a Quality Assurance Engineer and underwent rigorous training in QA methodologies. 
                        In collaboration with an Agile development team, I introduced Test Case Driven Testing and implemented Selenium/WebdriverIO automation, resulting in a substantial reduction in production bugs.
                    </p>
                </div>
            </div>
        </div>
        <div className='timeline'>
            <div className='left-box'>
                <div className='year-btn'>
                    <button>View Year</button>
                </div>
                <div className='year-description'>
                    <h4>Continued Development, <span>Web Development</span></h4>
                    <p>As I progress in my QA career, I've discovered a strong passion for web development. During my free time, I've been dedicated to self-learning various web development tools and technologies.
                         I've embarked on a journey to master the fundamentals of the React library, along with gaining proficiency in ExpressJS and MySQL for backend development. With each step, I'm committed to expanding my portfolio on GitHub and aspire to transition into my first developer role..</p>
                </div>
                <div className='date'>
                    <p>Present Day</p>
                </div>
            </div>
            <div className='right-box'>
                <div className='date'>
                    <p>?????</p>
                </div>
                <div className='year-btn'>
                    <button>View Year</button>
                </div>
                <div className='year-description'>
                    <h4>QA Engineer I, <span>Shasta QA</span></h4>
                    <p>Unsure of what the futre holds</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WorkExperience