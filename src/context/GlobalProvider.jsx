import { createContext, useState } from "react";
import { dataPortfolio } from "../data/dataProjects";

const GlobalContext = createContext({});

export const GlobalProvider = ({ children }) => {
  const [globalData, setGLobalData] = useState(dataPortfolio);
  const [language, setLanguage] = useState("english");
  const [theme, setTheme] = useState("dark");

  const handleTheme = function () {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <GlobalContext.Provider
      value={{
        globalData,
        setGLobalData,
        language,
        setLanguage,
        theme,
        handleTheme,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContext;
