import React from "react";
import "./contact.css";
import { FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="Contact" id="contact">
      <div className="contact__container">
        <div className="contact__left">
          <p className="contact__left__desc">
            Let's make something amazing together
          </p>
          <p className="contact__left__connect">
            Start by <span>saying hi</span>{" "}
          </p>
        </div>
        <div className="contact__right">
          <p className="contact__right__title">Information</p>
          <p className="contact__right__address">Colombia Pasto, Nariño</p>
          <p className="contact__right__email">Kenishi.cristian@hotmail.com</p>
          <p className="contact__right__phone">
            <FaPhoneAlt className="icon" />
            3163746523
          </p>
          <ul className="contact__right__ul">
            <li className="contact__right__links">
              <a href="#home">Home</a>
            </li>
            <li className="contact__right__links">
              <a href="#about">About</a>
            </li>
            <li className="contact__right__links">
              <a href="#projects">Projects</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
