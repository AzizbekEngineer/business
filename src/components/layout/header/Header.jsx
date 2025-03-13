import React, { useState } from "react";
import "./header.scss";
import { NavLink } from "react-router";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import headerLogo from "../../../assets/icons/headerLogo.svg";
import menu from "../../../assets/icons/menu.svg";
import menuClose from "../../../assets/icons/menu-close.svg";

const Header = () => {
  const [hide, setHide] = useState(false);

  return (
    <header id="header">
      <div
        onClick={() => setHide(false)}
        className={`header__overlay ${hide ? "header__overlay-see" : ""}`}
      ></div>
      <div className="container">
        <div className="header">
          <div className="header-left">
            <NavLink onClick={() => setHide(false)} to={"/"}>
              <img src={headerLogo} width={110} height={35} alt="" />
            </NavLink>
          </div>
          <nav
            className={`header__nav__list ${
              hide ? "header__nav__list-show" : ""
            }`}
          >
            <ul>
              <button
                onClick={() => setHide(false)}
                className="header__nav__right-menu header__nav__right-menu-close"
              >
                <img src={menuClose} alt="" />
              </button>
              <li>
                <NavLink
                  onClick={() => setHide(false)}
                  className={"header__nav__link"}
                  to={"about"}
                >
                  Biz haqimizda
                </NavLink>
              </li>
              <li>
                <NavLink
                  onClick={() => setHide(false)}
                  className={"header__nav__link"}
                  to={"tariffs"}
                >
                  Xizmatlar va tariflar
                </NavLink>
              </li>
              <li>
                <NavLink
                  onClick={() => setHide(false)}
                  className={"header__nav__link"}
                  to={"news"}
                >
                  Yangilik va Tadbir
                </NavLink>
              </li>
              <li>
                <NavLink
                  onClick={() => setHide(false)}
                  className={"header__nav__link"}
                  to={"partner"}
                >
                  Hamkorlar
                </NavLink>
              </li>
              <li>
                <NavLink
                  onClick={() => setHide(false)}
                  className={"header__nav__link"}
                  to={"faq"}
                >
                  FAQ
                </NavLink>
              </li>
              <li className="header__nav__lang">
                <a href="#uz">UZ</a>
              </li>
            </ul>
            <div className="phone">
              <span>Qo’ng’iroq qiling:</span>
              <a href="tel:+998 33 752 20 22">+998 33 752 20 22</a>
            </div>
          </nav>
          <div className="header__menu__right-btn">
            <div className="header-right">
              <button className="contact-btn">Bog’lanish</button>
            </div>
            <button
              onClick={() => setHide(true)}
              className="header__nav__right-menu"
            >
              <img src={menu} alt="" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
