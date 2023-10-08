import { useEffect, useState } from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import './Navbar.css';

const Navbar = () => {
  const [active, setActive] = useState<string | null>('home');
  const [elements, setElements] = useState<Element[]>([]);

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll('[data-section]'));
    if (sections.length > 0) {
      setElements(sections);
    }
    
  }, []); // Run this effect only once when the component mounts

  const { activeSection, updateTargetElements } = useIntersectionObserver(
    elements,
    { threshold: 0.5 }
  );

  useEffect(() => {
    if (activeSection != null) {
      setActive(activeSection); // Update activeSection when it changes
    }
    
    
  }, [activeSection]);

  console.log('act',active);

  return (
    <nav className="navbar">
      <div className="navbar-logo">Mars.io</div>
      <ul>
        <li className={active === 'home' ? 'active' : ''}>
          <a href="#home">Home</a>
        </li>
        <li className={active === 'experience' ? 'active' : ''}>
          <a href="#experience">Experience</a>
        </li>
        <li className={active === 'projects' ? 'active' : ''}>
          <a href="#projects">Projects</a>
        </li>
        <li className={active === 'contact' ? 'active' : ''}>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

