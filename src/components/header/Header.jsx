import React, { useState } from "react";
import "./header.scss";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-left">
          {/* <img src="logo.png" alt="Logo" className="logo" /> */}
          <h2>Logo</h2>
        </div>
        <nav className={`nav-menu ${isOpen ? "open" : ""}`}>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#service">Service</a>
            </li>
            <li>
              <a href="#news-events">News & Events</a>
            </li>
            <li>
              <a href="#partners">Partners</a>
            </li>
            <li>
              <a href="#faq">FAQ</a>
            </li>
            <li>
              <a href="#uz">UZ</a>
            </li>
          </ul>
        </nav>
        <div className="header-right">
          <div className="phone">
            <span>Call Us:</span>
            <a href="tel:+998 33 752 20 22">+998 33 752 20 22</a>
          </div>
          <button className="contact-btn">Contact Us</button>
        </div>
        <div className="hamburger" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
};

export default Header;
