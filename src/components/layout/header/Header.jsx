import React, { useState } from "react";
import "./header.scss";
import { Link } from "react-router";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import headerLogo from "../../../assets/icons/headerLogo.png";

const Header = () => {
  const [hide, setHide] = useState(false);

  return (
    <header id="header">
      <div className="container">
        <div className="header">
          <div className="header-left">
            <img src={headerLogo} width={110} height={35} alt="" />
          </div>
          <nav
            className={`header__nav__list ${
              hide ? "header__nav__list-show" : ""
            }`}
          >
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
                <Link to={"faq"}>Faq</Link>
              </li>
              <li>
                <a href="#uz">UZ</a>
              </li>
            </ul>
            <div className="phone">
              <span>Call Us:</span>
              <a href="tel:+998 33 752 20 22">+998 33 752 20 22</a>
            </div>
          </nav>
          <div className="header-right">
            <button className="contact-btn">Contact Us</button>
          </div>
          {!hide ? (
            <button
              onClick={() => setHide(true)}
              className="header__nav__right-menu"
            >
              <MenuIcon />
            </button>
          ) : (
            <button
              onClick={() => setHide(false)}
              className="header__nav__right-menu"
            >
              <CloseIcon />
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
