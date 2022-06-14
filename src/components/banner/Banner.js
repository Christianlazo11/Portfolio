import React, { useState } from "react";
import "./banner.css";
import imageReact from "../../assets/img/react-image.png";
import imageNode from "../../assets/img/node-image.png";
import imageJs from "../../assets/img/javascript-image.png";
// import avatar from "../../assets/img/AvatarMaker.svg";
import avatar02 from "../../assets/img/AvatarChris.svg";
import Loader from "../loader/Loader";
import AOS from "aos";
import useGlobalData from "../../hooks/useGlobalData";

const Home = () => {
  AOS.init();

  const [load, setLoad] = useState(true);
  const { globalData, language } = useGlobalData();

  setTimeout(() => {
    setLoad(false);
  }, 2000);
  return load ? (
    <Loader />
  ) : (
    <div className="Banner" id="home">
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
          <img src={avatar02} alt="avatar" className="banner__right__avatar" />
          <div className="banner__right__circle banner__right__react">
            <img src={imageReact} alt="react" className="icon" />
          </div>
          <div className="banner__right__circle banner__right__node">
            <img src={imageNode} alt="node" className="icon" />
          </div>
          <div className="banner__right__circle banner__right__javascript">
            <img src={imageJs} alt="javascript" className="icon" />
          </div>
        </div>

        <div className="banner__info">
          <p className="banner__info__number">3</p>
          <p className="banner__info__desc">
            {globalData[language].bannerData.experience}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
