import React, { useState } from "react";
import "./Header.css"; // Add custom styles here

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header container-fluid " id="header">
      <div id="logocant">
        <a href="#home"><img id="logoimg" src="src\assets\logo.jpg" alt="logo" /></a>
      </div>
      <button className="menu-toggle" onClick={toggleMenu}>
        ☰
      </button>
      <nav className={`nav-links  ${isMenuOpen ? "open" : ""}`}>
        <a href="#home" className="nav" onClick={toggleMenu}>Home</a>
        <a href="#Academics" className="nav" onClick={toggleMenu}>Acadamics</a>
        <a href="#Gallery" className="nav" onClick={toggleMenu}>Gallery</a>
        <a href="#About" className="nav" onClick={toggleMenu}>About us</a>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLScf6actMecVBa2hly2ztjmOHBaH9VzQ0Ee4c2-11ayaCgCoog/viewform?usp=sharing" target="new" className="nav" onClick={toggleMenu}>Contact us</a>
      </nav>
    </header>
  );
}

export default Header;