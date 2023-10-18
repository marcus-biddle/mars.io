import { useRef, useState } from 'react';
import './Projects.css';
import pokeCart from '../assets/poke_cart.jpeg';
import pokeHome from '../assets/poke_home.jpeg';
import pokeClp from '../assets/poke_clp.jpeg';
import pokePdp from '../assets/poke_pdp.jpeg';

const PROJECTS = [
    {
        title: 'Fuax Ecommerce Store',
        caption: 'In a world where Pokemon exists, this store has every type you need for battle!',
        images: [
            pokeHome, pokeClp, pokePdp, pokeCart
        ],
        tools: [
            'React', 'API', 'Typescript'
        ],
        description: 'This project uses an API found online to grab data for the store. It\'s integrated with a third party service, Stripe, for transactions.'
    }
  ];

const Projects = () => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedImg, setSelectedImg] = useState<string>('');

    const openModal = (img: string) => {
        setSelectedImg(img)
        setModalOpen(true);
        document.body.style.overflow = 'hidden'; // Disable scrolling while modal is open
      };
    
      const closeModal = () => {
        setModalOpen(false);
        document.body.style.overflow = 'auto'; // Re-enable scrolling
      };
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
                    {PROJECTS.map((project) => {
                        return (
                            <div className="card">
                                <h3>{project.title}</h3>
                                <span>{project.caption}</span>
                                <div className='img-container'>
                                    {project.images.map((img) => (
                                        <div onClick={() => openModal(img)}>
                                            <img src={img} alt='' />
                                        </div>
                                    ))}
                                </div>
                                <div className='tool-container'>
                                    {project.tools.map((tool) => (
                                        <span>{tool}</span>
                                    ))}
                                </div>
                                <p>{project.description}</p>
                                <div className='btn-container'>
                                    <button>Demo</button>
                                    <button>View Code</button>
                                </div>
                            </div>
                        )
                    })}
                    <div className="card">
                        <h3>Fuax Ecommerce Store</h3>
                        <span>In a world where Pokemon exists, this store has every type you need for battle!</span>
                        <div className='img-container'>
                            <div onClick={() => openModal(pokeHome)}>
                                <img src={pokeHome} alt='' />
                            </div>
                            <div onClick={() => openModal(pokeClp)}>
                                <img src={pokeClp} alt='' />
                            </div>
                            <div onClick={() => openModal(pokePdp)}>
                                <img src={pokePdp} alt='' />
                            </div>
                            <div onClick={() => openModal(pokeCart)}>
                                <img src={pokeCart} alt='' />
                            </div>
                        </div>
                        <div className='tool-container'>
                            <span>React</span>
                            <span>API</span>
                            <span>Typescript</span>
                        </div>
                        <p>This project uses an API found online to grab data for the store. It's integrated with a third party service, Stripe, for transactions. </p>
                        <div className='btn-container'>
                            <button>Demo</button>
                            <button>View Code</button>
                        </div>
                    </div>
                    <div className="card" >Card 2</div>
                    <div className="card" >Card 3</div>
                    <div className="card" >Card 4</div>
                </div>
            </div>
            {modalOpen && (
                <div className='project-modal'>
                    <span className="close" onClick={closeModal}>&times;</span>
                    <img src={selectedImg} alt='Full size' className='modal-image' />
                </div>
                )
            }
            
        </section>
      );
}

export default Projects