import React from "react";
import "./home.css";
import imageReact from "../../assets/img/react-image.png";
import imageNode from "../../assets/img/node-image.png";
import imageJs from "../../assets/img/javascript-image.png";
import avatar from "../../assets/img/AvatarMaker.svg";

const Home = () => {
  return (
    <div className="Home" id="home">
      <div className="home__container">
        <div className="home__left">
          <p className="home__left__subtitle">Full Stack Developer</p>
          <div className="home__left__title">
            <p>Talk is cheap.</p>
            <p>Show me the code</p>
          </div>
          <div className="home__left__info">
            <p>I desing and code beatifully simple things,</p>
            <p>and I love what I do.</p>
          </div>
          <a className="home__left__a" href="#contact">
            let's chat!
          </a>
        </div>
        <div className="home__right">
          <img src={avatar} alt="avatar" className="home__right__avatar" />
          <div className="home__right__circle home__right__react">
            <img src={imageReact} alt="react" className="icon" />
          </div>
          <div className="home__right__circle home__right__node">
            <img src={imageNode} alt="node" className="icon" />
          </div>
          <div className="home__right__circle home__right__javascript">
            <img src={imageJs} alt="javascript" className="icon" />
          </div>
        </div>

        <div className="home__miniInfo">
          <p className="info__number">3</p>
          <p className="info__desc">Months Experience Freelancer</p>
          <p className="info__number">10</p>
          <p className="info__desc">Projects Complete in different countries</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
