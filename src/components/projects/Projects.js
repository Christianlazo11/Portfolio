import React from "react";
import "./projects.css";
import { FaGithubAlt, FaWifi } from "react-icons/fa";
import { GiRead } from "react-icons/gi";
import { Icon } from "@iconify/react";
import AOS from "aos";
import "aos/dist/aos.css";
import useGlobalData from "../../hooks/useGlobalData";
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
  tailwind: <Icon icon="logos:tailwindcss-icon" />,
  typescript: <Icon icon="logos:typescript-icon" />,
  loopback: <Icon icon="logos:loopback-icon" />,
};

const Projects = () => {
  AOS.init();
  const { globalData, language } = useGlobalData();

  return (
    <div className="Projects" id="projects">
      <div className="projects__container">
        <button className="projects__btn">
          {globalData[language].projectsTitle}
        </button>
        <div className="projects__right">
          {globalData[language].projectsData.map((item) => (
            <div
              className="projects__right__box"
              data-aos="zoom-in-up"
              data-aos-offset="200"
              data-aos-once="false"
              data-aos-easing="ease-in-out-quart"
              key={item.id}
            >
              <img
                src={item.img}
                className="projects__img"
                alt={item.projectName}
              />
              <div className="projects__right__box__content">
                <span className="projects__right__box__span">
                  {item.projectName}
                  {item.technologies.map((item, index) => (
                    <div key={index}>{icons[item]}</div>
                  ))}
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
                    <GiRead className="icon" />
                  </a>
                  <a
                    className="projects__right__box__a"
                    href={item.linkGithub}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaGithubAlt className="icon" />
                    <span>{language === "english" ? "Code" : "Código"}</span>
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
