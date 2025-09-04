import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ModoGameForm from "../components/ModoGameForm";
import NotFound from "./NotFound";

const ModoGamePage = () => {
  const [playerX, setPlayerX] = useState("");
  const [playerO, setPlayerO] = useState("");

  const { modoGame } = useParams();
  const validModo = ["2players", "computer"];
  if (!validModo.includes(modoGame)) {
    return <NotFound />;
  }
  const navigate = useNavigate();

  const startGame = () => {
    navigate(`/${modoGame}/game`, {
      state: {
        playerX,
        playerO: modoGame === "computer" ? "PC" : playerO,
      },
    });
  };

  const backMenu = () => {
    navigate("/");
  };

  return (
    <ModoGameForm
      modoGame={modoGame}
      playerX={playerX}
      playerO={playerO}
      setPlayerX={setPlayerX}
      setPlayerO={setPlayerO}
      startGame={startGame}
      backMenu={backMenu}
    />
  );
};

export default ModoGamePage;
