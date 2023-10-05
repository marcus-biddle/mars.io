
import { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
        <div className="navbar-logo">
          Mars.io
        </div>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
    </nav>
  );
};

export default Navbar;
