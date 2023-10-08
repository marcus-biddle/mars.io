import { useRef } from 'react';
import './Projects.css';

// const projects = [
//     {
//       id: 1,
//       title: 'Project 1',
//       description: 'Description of Project 1',
//       imageUrl: 'project1.jpg',
//       link: 'https://example.com/project1',
//     },
//     {
//       id: 2,
//       title: 'Project 2',
//       description: 'Description of Project 2',
//       imageUrl: 'project2.jpg',
//       link: 'https://example.com/project2',
//     },
//     {
//         id: 3,
//         title: 'Project 1',
//         description: 'Description of Project 1',
//         imageUrl: 'project1.jpg',
//         link: 'https://example.com/project1',
//       },
//       {
//         id: 4,
//         title: 'Project 2',
//         description: 'Description of Project 2',
//         imageUrl: 'project2.jpg',
//         link: 'https://example.com/project2',
//       },
//     // Add more projects as needed
//   ];

const Projects = () => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    // useHorizontalScrollSnap(containerRef);

    return (
        <section data-section id='projects' className="project-section">
            <div className='projects-title'>
                <h2>Featured <span>Projects</span></h2>
            </div>
            <div className='projects-container'>
                <div className='projects-header'>
                    <h3>Take a look at what I've created <br/>and the tools used <br />to craft them</h3>
                    <a href="https://github.com/marcus-biddle">
                        <button>View Repositories</button>
                    </a>
                </div>
                <div ref={containerRef} className="card-container">
                    <div className="card">Card 1</div>
                    <div className="card" >Card 2</div>
                    <div className="card" >Card 3</div>
                    <div className="card" >Card 4</div>
                </div>
            </div>
            
        </section>
      );
}

export default Projects