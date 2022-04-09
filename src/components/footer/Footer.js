import React from "react";
import "./footer.css";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
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
            <FaLinkedin />
          </div>
          <div className="footer__socials_icons">
            <FaGithub />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
