import React from "react";
import "./footer.css";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import useGlobalData from "../../hooks/useGlobalData";

const Footer = () => {
  const { globalData, language, theme } = useGlobalData();

  return (
    <div
      className={`footer container ${
        theme === "dark" ? "theme__dark" : "theme__light"
      }`}
    >
      <div className="footer__content">
        <div className="footer__right">
          <p className="footer__name">
            {" "}
            <span>Christian</span> Lazo
          </p>
        </div>
        <p className="footer__copyright">
          &copy; {globalData[language].footerData.text}
        </p>
        <div className="footer__socials">
          <div className="footer__socials_icons">
            <a
              href="https://www.linkedin.com/in/christian-lazo-u/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>
          </div>
          <div className="footer__socials_icons">
            <a
              href="https://github.com/christianlazo2020"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
