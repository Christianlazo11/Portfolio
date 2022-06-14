import React from "react";
import "./tooglebutton.css";
import useGlobalData from "../../hooks/useGlobalData";

const ToogleButton = () => {
  const { language, setLanguage } = useGlobalData();
  const handleChange = () => {
    setLanguage(language === "english" ? "spanish" : "english");
  };
  return (
    <div className="toogle__button">
      <input
        className="toogle__button__input"
        type="checkbox"
        id="switch"
        onChange={() => handleChange()}
      />
      <label className="toogle__button__label" htmlFor="switch">
        Toggle
      </label>
    </div>
  );
};

export default ToogleButton;
