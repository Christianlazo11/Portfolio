import React, { useState } from "react";
import "./banner.css";

import { images } from "../../data/images";

import Loader from "../loader/Loader";
import AOS from "aos";
import useGlobalData from "../../hooks/useGlobalData";

const Home = () => {
  AOS.init();

  const { globalData, language, theme } = useGlobalData();
  const [load, setLoad] = useState(true);

  setTimeout(() => {
    setLoad(false);
  }, 2000);
  return load ? (
    <Loader />
  ) : (
    <div
      className={`banner ${theme === "dark" ? "theme__dark" : "theme__light"}`}
      id="home"
    >
      <div
        className="banner__container"
        data-aos="zoom-in"
        data-aos-offset="200"
        data-aos-once="false"
        data-aos-easing="ease-in"
      >
        <div className="banner__left">
          <p className="banner__left__subtitle">
            {globalData[language].bannerData.title}
          </p>
          <div className="banner__left__title">
            <p>{globalData[language].bannerData.title02}</p>
          </div>
          <div className="banner__left__info">
            <p>{globalData[language].bannerData.span}</p>
            <p>{globalData[language].bannerData.span02}</p>
          </div>
          <a
            className="banner__left__a"
            target="_blank"
            rel="noreferrer"
            href="https://api.whatsapp.com/send?phone=+573163746523&text=Hi,%20tell%20me%20more"
          >
            {globalData[language].bannerData.chat}
          </a>
        </div>
        <div className="banner__right">
          <img
            src={images.avatar}
            alt="avatar"
            className="banner__right__avatar"
          />
          <div className="banner__right__circle banner__right__react">
            <img
              src={images.react}
              alt="react"
              className="icon"
              loading="lazy"
            />
          </div>
          <div className="banner__right__circle banner__right__node">
            <img src={images.node} alt="node" className="icon" loading="lazy" />
          </div>
          <div className="banner__right__circle banner__right__javascript">
            <img
              src={images.javascript}
              alt="javascript"
              className="icon"
              loading="lazy"
            />
          </div>
        </div>

        <div className="banner__info">
          <p className="banner__info__number">6</p>
          <p className="banner__info__desc">
            {globalData[language].bannerData.experience}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
