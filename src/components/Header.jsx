import React, { useState } from "react";
import "../style/Header.css"; // Add custom styles here

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header container-fluid w-100 p-0 m-0 d-flex flex-column" id="header">
      <div className="d-flex w-100 nav-cant">
        <div id="logocant" className=" d-flex align-items-center justify-content-center">
          <a href="#home"><img loading="lazy" id="logoimg" src="src\assets\logo.jpg" alt="logo" /></a>
        </div>
        <div className="header-left">
          <button className="menu-toggle" onClick={toggleMenu}>
            ☰
          </button>
          <nav className={`nav-links  ${isMenuOpen ? "open" : ""}`}>
            <a href="#home" className="nav" onClick={toggleMenu}>Home</a>
            <a href="#Academics" className="nav" onClick={toggleMenu}>Academic</a>
            <a href="#Gallery" className="nav" onClick={toggleMenu}>Gallery</a>
            <a href="#About" className="nav" onClick={toggleMenu}>About us</a>
            <a href="#Faq" className="nav" onClick={toggleMenu}>FAQ's</a>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLScf6actMecVBa2hly2ztjmOHBaH9VzQ0Ee4c2-11ayaCgCoog/viewform?usp=sharing" target="new" className="nav" onClick={toggleMenu}>Contact us</a>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;