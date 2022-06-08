import { useContext } from "react";
import GlobalContext from "../context/GlobalProvider";

const useGlobalData = () => {
  return useContext(GlobalContext);
};

export default useGlobalData;
