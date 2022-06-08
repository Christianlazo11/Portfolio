import React from "react";
import "./skill.css";
import { dataSkills } from "../../data/dataSkills";
import AOS from "aos";
import "aos/dist/aos.css";
import useGlobalData from "../../hooks/useGlobalData";

const Skill = () => {
  AOS.init();
  const { globalData, language } = useGlobalData();

  return (
    <div className="Skills" id="#skills">
      <h2>{globalData[language].skillsTitle}</h2>
      <div className="skills__container">
        {dataSkills.map((item, index) => (
          <div
            className="skills__item"
            data-aos="zoom-in-up"
            data-aos-offset="200"
            data-aos-once="false"
            data-aos-easing="ease-in-cubic"
            key={index}
          >
            {item.img}
            <h3>{item.skillName}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skill;
