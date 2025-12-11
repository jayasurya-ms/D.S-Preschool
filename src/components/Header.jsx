import React, { useState } from "react";
import "../style/Header.css";
import logo from "../assets/logo.jpg"; // <-- Import the image

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header container-fluid w-100 p-0 m-0 d-flex flex-column" id="header">
      <div className="d-flex w-100 nav-cant">
        <div id="logocant" className="d-flex align-items-center justify-content-center">
          <a href="#home">
            <img loading="lazy" id="logoimg" src={logo} alt="logo" />
          </a>
        </div>
        <div className="header-left">
          <button className="menu-toggle" onClick={toggleMenu}>
            ☰
          </button>
          <nav className={`nav-links ${isMenuOpen ? "open" : ""}`}>
            <a href="#home" className="nav" onClick={toggleMenu}>Home</a>
            <a href="#Academics" className="nav" onClick={toggleMenu}>Academics</a>
            <a href="#Gallery" className="nav" onClick={toggleMenu}>Gallery</a>
            <a href="#About" className="nav" onClick={toggleMenu}>About us</a>
            <a href="#Faq" className="nav" onClick={toggleMenu}>FAQ's</a>
            <a href="https://forms.gle/2nNudGuLeSpWeQ1Y9" target="new"   className="nav" onClick={toggleMenu}>Contact us</a>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
