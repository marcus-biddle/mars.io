import useIntersectionObserver from '../hooks/useIntersectionObserver';
import './Navbar.css';

const Navbar = () => {
  const sections = Array.from(document.querySelectorAll('[data-section]'));
  const activeSection = useIntersectionObserver(sections, { threshold: .5 });


  return (
    <nav className="navbar">
      <div className="navbar-logo">Mars.io</div>
      <ul>
        <li>
          <a href="#home" className={activeSection === 'home' ? 'active' : ''}>
            Home
          </a>
        </li>
        <li>
          <a
            href="#experience"
            className={activeSection === 'experience' ? 'active' : ''}
          >
            Experience
          </a>
        </li>
        <li>
          <a
            href="#projects"
            className={activeSection === 'projects' ? 'active' : ''}
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className={activeSection === 'contact' ? 'active' : ''}
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

