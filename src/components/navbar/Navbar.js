import React, { useState, useEffect } from "react";
import "./navbar.css";

import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";

import useGlobalData from "../../hooks/useGlobalData";
import ToogleButton from "../button/ToogleButton";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const { globalData, language } = useGlobalData();

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);
  return (
    <div className="navbar">
      <nav className="navbar__nav container">
        <div className="logo">
          <Link to="/" className="logo__span">
            Christian Lazo
          </Link>
        </div>
        {(toggleMenu || screenWidth > 1024) && (
          <ul className="list">
            <li className="links">
              <a href="/#about">{globalData[language].navbarData[0]}</a>
            </li>
            <li className="links">
              <a href="/#projects">{globalData[language].navbarData[1]}</a>
            </li>
            <li className="links">
              <a href="/#contact">{globalData[language].navbarData[2]}</a>
            </li>
          </ul>
        )}

        <div className="menuIcons">
          {toggleMenu ? (
            <FaTimes onClick={() => setToggleMenu(false)} />
          ) : (
            <FaBars onClick={() => setToggleMenu(true)} />
          )}
        </div>
        <div className="navbar__socials">
          <div className="navbar__language">
            <ToogleButton />
          </div>
          <div className="navbar__github">
            <a
              href="https://github.com/Christianlazo11"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub className="navbar__item" />
            </a>
          </div>
          <div className="navbar__linkedin">
            <a
              href="https://www.linkedin.com/in/christian-lazo-u/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin className="navbar__item" />
            </a>
          </div>
          <div className="navbar__email">
            <Link to="/formcontact">
              <MdEmail className="navbar__item" />
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
