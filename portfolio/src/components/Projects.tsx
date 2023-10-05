import './Projects.css';

const projects = [
    {
      id: 1,
      title: 'Project 1',
      description: 'Description of Project 1',
      imageUrl: 'project1.jpg',
      link: 'https://example.com/project1',
    },
    {
      id: 2,
      title: 'Project 2',
      description: 'Description of Project 2',
      imageUrl: 'project2.jpg',
      link: 'https://example.com/project2',
    },
    {
        id: 3,
        title: 'Project 1',
        description: 'Description of Project 1',
        imageUrl: 'project1.jpg',
        link: 'https://example.com/project1',
      },
      {
        id: 4,
        title: 'Project 2',
        description: 'Description of Project 2',
        imageUrl: 'project2.jpg',
        link: 'https://example.com/project2',
      },
    // Add more projects as needed
  ];

const Projects = () => {
    return (
        <section id='projects' className="project-section">
          <h2>My Projects</h2>
          <div className="projects-container">
            {projects.map((project) => (
              <div className="project" key={project.id}>
                <img src={project.imageUrl} alt={project.title} />
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  View Project
                </a>
              </div>
            ))}
          </div>
        </section>
      );
}

export default Projects