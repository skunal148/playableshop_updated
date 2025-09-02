// src/components/Navbar.jsx
import { useState } from "react";
import "../styles/Navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const handleNavClick = () => setOpen(false);

  return (
    <nav className={`navbar ${open ? "open" : ""}`}>
      <div className="logo">
        <img src="./logo.svg" alt="Logo" />
      </div>

      <button
        className="menu-toggle"
        aria-label="Toggle navigation menu"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <span className="bar" />
        <span className="bar" />
        <span className="bar" />
      </button>

      {/* Backdrop for off-canvas menu */}
      {open && <div className="backdrop" onClick={() => setOpen(false)} />}

      <ul className="mobile-menu" onClick={handleNavClick}>
        <li><a href="#home">Home</a></li>
        <li><a href="#products">Products</a></li>
        <li><a href="#work">Work</a></li>
      </ul>
    </nav>
  );
}