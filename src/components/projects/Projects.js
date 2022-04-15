import React from "react";
import "./projects.css";
import { dataProjects } from "../../data/dataProjects";
import { FaGithubAlt, FaWifi } from "react-icons/fa";
import { Icon } from "@iconify/react";
import AOS from "aos";
import "aos/dist/aos.css";
const icons = {
  html: <Icon icon="vscode-icons:file-type-html" />,
  css: <Icon icon="vscode-icons:file-type-css" />,
  javascript: <Icon icon="logos:javascript" />,
  git: <Icon icon="logos:git-icon" />,
  react: <Icon icon="logos:react" />,
  angular: <Icon icon="logos:angular-icon" />,
  node: <Icon icon="vscode-icons:file-type-node" />,
  mongo: <Icon icon="logos:mongodb" />,
  bootstrap: <Icon icon="logos:bootstrap" />,
  sass: <Icon icon="vscode-icons:file-type-sass" />,
};

const Projects = () => {
  AOS.init();
  return (
    <div className="Projects" id="projects">
      <div className="projects__container">
        <button className="projects__btn">All Projects</button>
        <div className="projects__right">
          {dataProjects.map((item, index) => (
            <div
              className="projects__right__box"
              data-aos="zoom-in-up"
              data-aos-offset="200"
              data-aos-once="false"
              data-aos-easing="ease-in-out-quart"
              key={index}
            >
              <img
                src={item.img}
                className="projects__img"
                alt={item.projectName}
              />
              <div className="projects__right__box__content">
                <span className="projects__right__box__span">
                  {item.projectName}
                  {item.technologies.map((item) => icons[item])}
                </span>
                <div className="projects__right__box__buttons">
                  <a
                    className="projects__right__box__a"
                    href={item.linkDemo}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaWifi className="icon" />
                    <span>Demo</span>
                  </a>
                  <a
                    className="projects__right__box__a"
                    href={item.linkGithub}
                    target="_blank"
                    rel="noreferrer"
                  >
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
