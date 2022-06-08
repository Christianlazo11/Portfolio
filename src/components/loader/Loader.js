import React from "react";
import "./loader.scss";
import useGlobalData from "../../hooks/useGlobalData";

const Loader = () => {
  const { language } = useGlobalData();
  return (
    <div className="Loader">
      <div className="Loader__content">
        {language === "english" ? "Loading..." : "Cargando..."}
      </div>
    </div>
  );
};

export default Loader;
