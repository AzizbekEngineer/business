import React, { useState } from "react";
import "./header.scss";
import { Link } from "react-router";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header id="header">
      <div className="container">
        <div className="header">
          <div className="header-left">
            <h2>Logo</h2>
          </div>
          <nav className={`nav-menu ${isOpen ? "open" : ""}`}>
            <ul>
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <Link to={"about"}>About</Link>
              </li>
              <li>
                <Link to={"service"}>Service</Link>
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
      </div>
    </header>
  );
};

export default Header;
