import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ModoGameForm from "../components/ModoGameForm";
import NotFound from "./NotFound";
import { PlayerContext } from "../context/PlayerContext";

const ModoGamePage = () => {
  const { playerX, playerO, setPlayerX, setPlayerO } =
    useContext(PlayerContext);

  const { modoGame } = useParams();
  const validModo = ["2players", "computer"];
  if (!validModo.includes(modoGame)) {
    return <NotFound />;
  }
  const navigate = useNavigate();

  const startGame = () => {
    const finalPlayerX = playerX || "X";
    const finalPlayerO = modoGame === "computer" ? "Pc" : playerO || "O";

    setPlayerX(finalPlayerX);
    setPlayerO(finalPlayerO);

    navigate(`/${modoGame}/game`);
  };

  const backMenu = () => {
    navigate("/");
    setPlayerX("");
    setPlayerO("");
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
