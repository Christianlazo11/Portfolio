import React from "react";
import "./contact.css";
import { FaPhoneAlt } from "react-icons/fa";
import resume from "../../assets/Curriculum/Resume__English.pdf";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const Contact = () => {
  AOS.init();
  return (
    <div className="Contact" id="contact">
      <div
        className="contact__container"
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-once="false"
        data-aos-easing="ease-in-cubic"
      >
        <div className="contact__left">
          <p className="contact__left__desc">
            Let's make something amazing together
          </p>
          <p className="contact__left__connect">
            Start by{" "}
            <span>
              {" "}
              <Link to="/formcontact">saying hi</Link>
            </span>{" "}
          </p>
          <div className="contact__left__links">
            <a
              href={resume}
              download="Resume_Christian_Lazo"
              className="contact__left__cv"
            >
              👉🏾Download Resume.
            </a>
            <a
              href="https://drive.google.com/file/d/13PWXE-K9GH-W50LxFTm1L6egYsZLHTPQ/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="contact__left__cv"
            >
              🔎View Resume.
            </a>
          </div>
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
