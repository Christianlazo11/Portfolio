import { createContext, useState } from "react";
import { dataPortfolio } from "../data/dataProjects";

const GlobalContext = createContext({});

export const GlobalProvider = ({ children }) => {
  const [globalData, setGLobalData] = useState(dataPortfolio);
  const [language, setLanguage] = useState("english");

  return (
    <GlobalContext.Provider
      value={{
        globalData,
        setGLobalData,
        language,
        setLanguage,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContext;
