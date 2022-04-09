import React, { useState, useEffect } from "react";
import "./navbar.css";
import { MdEmail } from "react-icons/md";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

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
      <nav>
        <div className="logo">
          <span className="logo__span">Christian Lazo</span>
        </div>
        {(toggleMenu || screenWidth > 1024) && (
          <ul className="list">
            <li className="links">
              <a href="#about">About</a>
            </li>
            <li className="links">
              <a href="#projects">Projects</a>
            </li>
            <li className="links">
              <a href="#contact">Contact</a>
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
          <div className="navbar__github">
            <FaGithub color="blue" className="navbar__item" />
          </div>
          <div className="navbar__linkedin">
            <FaLinkedin className="navbar__item" />
          </div>
          <div className="navbar__email">
            <MdEmail className="navbar__item" />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
