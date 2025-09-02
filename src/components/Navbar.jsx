// src/components/Navbar.jsx

import "../styles/Navbar.css";
export default function Navbar() {
    return (
      <nav className="navbar">
        <div className="logo">
          <img src="./logo.svg" alt="Logo" />
        </div>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#products">Products</a></li>
          <li><a href="#work">Work</a></li>
        </ul>
      </nav>
    );
  }
  