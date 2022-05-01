import React from "react";
import "./about.css";
import { FaFeatherAlt, FaCode, FaCubes } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  AOS.init();
  return (
    <div className="About" id="about">
      <div className="about__left">
        <div className="about__cards">
          <div
            className="about__card"
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-once="false"
            data-aos-easing="ease-in-cubic"
          >
            <div className="card__top">
              <p className="card__title">Desing</p>
              <FaCode className="card__icon" />
            </div>
            <p className="card__desc">
              Create digital products with unique ideas
            </p>
            <p className="card__link">10 Projects</p>
          </div>
          {/* card */}
          <div
            className="about__card"
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-once="false"
            data-aos-easing="ease-in-cubic"
          >
            <div className="card__top">
              <p className="card__title">Front End</p>
              <FaFeatherAlt className="card__icon" />
            </div>
            <p className="card__desc">I develop front-end with clean code</p>
            <p className="card__link">10 Projects</p>
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
        <p className="about__subtitle">Introduce</p>
        <p className="about__subtitle">Hello! I'm Christian Lazo</p>
        <p className="about__info">
          Every great design begin with an even better story
        </p>
        <p className="about__desc">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia id
          debitis laudantium, voluptates soluta placeat, impedit ipsum vitae
          molestiae quaerat, aspernatur non ad nobis atque ullam! Doloremque et
          officia reiciendis!
        </p>
      </div>
    </div>
  );
};

export default About;
