import React from "react";
import "./projects.css";
import { dataProjects } from "../../data/dataProjects";
import { FaGithubAlt, FaWifi } from "react-icons/fa";

const Projects = () => {
  console.log(dataProjects);
  return (
    <div className="Projects" id="projects">
      <div className="projects__container">
        <button className="projects__btn">All Projects</button>
        <div className="projects__right">
          {dataProjects.map((item, index) => (
            <div className="projects__right__box">
              <img
                src={item.img}
                key={index}
                className="projects__img"
                alt={item.projectName}
              />
              <div className="projects__right__box__content">
                <span className="projects__right__box__span">
                  {item.projectName}
                </span>
                <div className="projects__right__box__buttons">
                  <a className="projects__right__box__a">
                    <FaWifi className="icon" />
                    <span>Demo</span>
                  </a>
                  <a className="projects__right__box__a">
                    <FaGithubAlt className="icon" />
                    <span>Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
