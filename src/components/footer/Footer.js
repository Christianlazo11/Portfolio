import React from "react";
import "./footer.css";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer container">
      <div className="footer__content">
        <div className="footer__right">
          <p className="footer__name">
            {" "}
            <span>Christian</span> Lazo
          </p>
        </div>
        <p className="footer__copyright">&copy; All Rights Reserved</p>
        <div className="footer__socials">
          <div className="footer__socials_icons">
            <a
              href="https://www.linkedin.com/in/christian-lazo-649531206/"
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
