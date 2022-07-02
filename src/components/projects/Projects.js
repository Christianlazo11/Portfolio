import React, { useState } from "react";
import "./projects.css";

import { FaGithubAlt, FaWifi } from "react-icons/fa";
import { GiRead } from "react-icons/gi";
import { icons } from "../../data/icons";

import AOS from "aos";
import "aos/dist/aos.css";

import useGlobalData from "../../hooks/useGlobalData";
import Modal from "../modal/Modal";

const Projects = () => {
  AOS.init();
  const { globalData, language, theme } = useGlobalData();
  const [viewModal, setViewModal] = useState(false);
  const [dataModal, setDataModal] = useState({
    title: "hola",
    description: "hola",
  });

  return (
    <div
      className={`projects ${
        theme === "dark" ? "theme__dark" : "theme__light"
      }`}
      id="projects"
    >
      <div className="projects__container">
        <h2 className="projects__title">
          {globalData[language].projectsTitle}
        </h2>
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
                loading="lazy"
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
                  <span
                    className="projects__right__box__a"
                    onClick={() => {
                      setViewModal(true);
                      setDataModal({
                        title: item.projectName,
                        description: item.description,
                      });
                    }}
                  >
                    <GiRead className="icon" />
                  </span>
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
      {/* Modal Info*/}
      {viewModal && (
        <Modal
          handleModal={setViewModal}
          handleHeader={true}
          title={dataModal.title}
        >
          <p className="overlay__modal__content__text">
            {dataModal.description}
          </p>
        </Modal>
      )}
    </div>
  );
};

export default Projects;
