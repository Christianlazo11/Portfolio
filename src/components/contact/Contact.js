import React from "react";
import "./contact.css";
import { FaPhoneAlt } from "react-icons/fa";
import resume from "../../assets/Curriculum/Resume__English.pdf";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import useGlobalData from "../../hooks/useGlobalData";

const Contact = () => {
  AOS.init();
  const { globalData, language } = useGlobalData();

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
            {globalData[language].contactData.contentLeft.text01}
          </p>
          <p className="contact__left__connect">
            {globalData[language].contactData.contentLeft.text02}
            <span>
              {" "}
              <Link to="/formcontact">
                {globalData[language].contactData.contentLeft.span02}
              </Link>
            </span>{" "}
          </p>
          <div className="contact__left__links">
            <a
              href={resume}
              download="Resume_Christian_Lazo"
              className="contact__left__cv"
            >
              👉🏾{globalData[language].contactData.contentLeft.text03}
            </a>
            <a
              href="https://drive.google.com/file/d/13PWXE-K9GH-W50LxFTm1L6egYsZLHTPQ/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="contact__left__cv"
            >
              🔎{globalData[language].contactData.contentLeft.text04}
            </a>
          </div>
        </div>
        <div className="contact__right">
          <p className="contact__right__title">
            {globalData[language].contactData.contentRigth.text01}
          </p>
          <p className="contact__right__address">
            {globalData[language].contactData.contentRigth.text02}
          </p>
          <p className="contact__right__email">
            {globalData[language].contactData.contentRigth.text03}
          </p>
          <p className="contact__right__phone">
            <FaPhoneAlt className="icon" />
            {globalData[language].contactData.contentRigth.text04}
          </p>
          <ul className="contact__right__ul">
            <li className="contact__right__links">
              <a href="#home">
                {globalData[language].contactData.contentRigth.links[0]}
              </a>
            </li>
            <li className="contact__right__links">
              <a href="#about">
                {globalData[language].contactData.contentRigth.links[1]}
              </a>
            </li>
            <li className="contact__right__links">
              <a href="#projects">
                {globalData[language].contactData.contentRigth.links[2]}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
