import { useRef } from 'react';
import './Projects.css';
import useHorizontalScrollSnap from '../hooks/useHorizontalScrollSnap';

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
    const containerRef = useRef(null);
    useHorizontalScrollSnap(containerRef, '.card');

    return (
        <section data-section id='projects' className="project-section">
            <h2>My Projects</h2>
            <div className='projects-container'>
                <div className='projects-header'>
                    <h2>My projects</h2>
                </div>
                <div ref={containerRef} className="card-container">
                    <div className="card">Card 1</div>
                    <div className="card">Card 2</div>
                    <div className="card">Card 3</div>
                    <div className="card">Card 1</div>
                    <div className="card">Card 2</div>
                    <div className="card">Card 3</div>
                    <div className="card">Card 1</div>
                    <div className="card">Card 2</div>
                    <div className="card">Card 3</div>
                </div>
            </div>
            
        </section>
      );
}

export default Projects