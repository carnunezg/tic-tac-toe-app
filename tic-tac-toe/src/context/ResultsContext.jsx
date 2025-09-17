import { createContext, useState } from "react";
import { results } from "../utils/consts";

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
