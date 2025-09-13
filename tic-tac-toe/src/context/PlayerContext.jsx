import { createContext, useState } from "react";

export const PlayerContext = createContext();

export const PlayerProvider = ({ children }) => {
  const [playerX, setPlayerX] = useState("");
  const [playerO, setPlayerO] = useState("");

  return (
    <PlayerContext.Provider
      value={{ playerX, playerO, setPlayerX, setPlayerO }}
    >
      {children}
    </PlayerContext.Provider>
  );
};
