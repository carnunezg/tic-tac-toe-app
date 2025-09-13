import { createContext, useContext, useState } from "react";
import { results } from "../utils/consts";
import { PlayerContext } from "./PlayerContext";

export const ResultsContext = createContext();

export const ResultsProvider = ({ children }) => {
  const [result, setResult] = useState(results);

  const resetResults = () => {
    setResult(results);
  };
  return (
    <ResultsContext.Provider value={{ result, setResult, resetResults }}>
      {children}
    </ResultsContext.Provider>
  );
};
