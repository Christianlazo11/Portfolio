import React from "react";
import "./skill.css";
import { dataSkills } from "../../data/dataSkills";

const Skill = () => {
  return (
    <div className="Skills" id="#skills">
      <h2>Skills</h2>
      <div className="skills__container">
        {dataSkills.map((item, index) => (
          <div className="skills__item" key={index}>
            <img src={item.img} alt={item.skillName} />
            <h3>{item.skillName}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skill;
