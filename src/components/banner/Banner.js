import React, { useState } from "react";
import "./banner.css";
import imageReact from "../../assets/img/react-image.png";
import imageNode from "../../assets/img/node-image.png";
import imageJs from "../../assets/img/javascript-image.png";
import avatar from "../../assets/img/AvatarMaker.svg";
import Loader from "../loader/Loader";
import AOS from "aos";

const Home = () => {
  AOS.init();

  const [load, setLoad] = useState(true);

  setTimeout(() => {
    setLoad(false);
  }, 2000);
  return load ? (
    <Loader />
  ) : (
    <div className="Banner" id="banner">
      <div
        className="banner__container"
        data-aos="zoom-in"
        data-aos-offset="200"
        data-aos-once="false"
        data-aos-easing="ease-in"
      >
        <div className="banner__left">
          <p className="banner__left__subtitle">Front End Developer</p>
          <div className="banner__left__title">
            <p>Show me the code</p>
          </div>
          <div className="banner__left__info">
            <p>I desing and code beatifully simple things,</p>
            <p>and I love what I do.</p>
          </div>
          <a
            className="banner__left__a"
            target="_blank"
            rel="noreferrer"
            href="https://api.whatsapp.com/send?phone=+573163746523&text=Hi,%20tell%20me%20more"
          >
            let's chat!
          </a>
        </div>
        <div className="banner__right">
          <img src={avatar} alt="avatar" className="banner__right__avatar" />
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
          <p className="banner__info__desc">Months Experience Freelancer</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
