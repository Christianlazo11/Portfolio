import React from "react";
import "./about.css";
import { FaFeatherAlt, FaCode } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import useGlobalData from "../../hooks/useGlobalData";

const About = () => {
  AOS.init();
  const { globalData, language, theme } = useGlobalData();

  return (
    <div
      className={`about ${theme === "dark" ? "theme__dark" : "theme__light"}`}
      id="about"
    >
      <div className="about__left">
        <div className="about__cards">
          <div
            className={`about__card ${
              theme === "dark" ? "bg__dark" : "bg__light"
            }`}
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-once="false"
            data-aos-easing="ease-in-cubic"
          >
            <div className="card__top">
              <p className="card__title">
                {globalData[language].aboutData.card01.title}
              </p>
              <FaCode className="card__icon" />
            </div>
            <p className="card__desc">
              {globalData[language].aboutData.card01.span}
            </p>
            <p className="card__link">
              {globalData[language].aboutData.card01.text}
            </p>
          </div>
          {/* card */}
          <div
            className={`about__card ${
              theme === "dark" ? "bg__dark" : "bg__light"
            }`}
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-once="false"
            data-aos-easing="ease-in-cubic"
          >
            <div className="card__top">
              <p className="card__title">
                {globalData[language].aboutData.card02.title}
              </p>
              <FaFeatherAlt className="card__icon" />
            </div>
            <p className="card__desc">
              {globalData[language].aboutData.card02.span}
            </p>
            <p className="card__link">
              {globalData[language].aboutData.card01.text}
            </p>
          </div>
          {/* card */}
        </div>
      </div>

      <div
        className="about__right"
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-once="false"
      >
        <p className="about__subtitle">
          {globalData[language].aboutData.aboutme.text01}
        </p>
        <p className="about__info">
          {globalData[language].aboutData.aboutme.text02}
        </p>
        <p className="about__desc">
          {globalData[language].aboutData.aboutme.text03}
        </p>
      </div>
    </div>
  );
};

export default About;
