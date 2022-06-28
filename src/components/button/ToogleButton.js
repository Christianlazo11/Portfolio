import React from "react";
import "./tooglebutton.css";
import useGlobalData from "../../hooks/useGlobalData";

const ToogleButton = () => {
  const { language, setLanguage } = useGlobalData();
  const handleChange = () => {
    setLanguage(language === "english" ? "spanish" : "english");
  };
  return (
    <div className="switch__container">
      <div className="switch__item">
        <label class="switch__content">
          <input type="checkbox" onChange={() => handleChange()} />
          <span class="slider"></span>
        </label>{" "}
        <span className="switch__text">
          {language === "english" ? "EN" : "ES"}
        </span>
      </div>
      <div className="switch__item">
        <label class="switch__content">
          <input type="checkbox" />
          <span class="slider"></span>
        </label>{" "}
        <span className="switch__text">Dark</span>
      </div>
    </div>
  );
};

export default ToogleButton;
