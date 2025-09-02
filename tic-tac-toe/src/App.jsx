import React, { useState } from "react";
import "./css/App.css";
import { launchConfetti } from "./utils/launchConfetti";
import { computerMove } from "./utils/computerMove";
import { turns, winningCombinations, results } from "./utils/consts";
import Menu from "./components/Menu";
import ModoGameForm from "./components/ModoGameForm";
import GameBoard from "./components/GameBoard";
import WinnerModal from "./components/WinnerModal";
import ScoreBoard from "./components/ScoreBoard";
import ButtonsGame from "./components/ButtonsGame";

const App = () => {
  const [showModal, setShowModal] = useState("menu");
  const [ModoGame, setModoGame] = useState(null);
  const [playerX, setPlayerX] = useState("");
  const [playerO, setPlayerO] = useState("");
  const [boards, setBoards] = useState(Array(9).fill(""));
  const [turn, setTurn] = useState(turns.X);
  const [winner, setWinner] = useState(null);
  const [result, setResult] = useState(results);

  const click = (i) => {
    if (boards[i] !== "" || winner) return;

    const newBoards = [...boards];
    newBoards[i] = turn;
    setBoards(newBoards);

    const nextTurn = turn === turns.X ? turns.O : turns.X;
    setTurn(nextTurn);

    const win = checkWinner(newBoards);

    if (win) {
      setWinner(win);
      launchConfetti();
      setResult((prevResult) => ({
        ...prevResult,
        [win]: prevResult[win] + 1,
      }));
    } else if (newBoards.every((c) => c !== "")) {
      setWinner("Empate");
      setResult((prevResult) => ({
        ...prevResult,
        Empate: prevResult.Empate + 1,
      }));
    }

    if (ModoGame === "computer" && nextTurn === turns.O) {
      setTimeout(() => {
        const winCheck = checkWinner(newBoards);
        if (!winCheck && newBoards.some((c) => c === ""))
          computerMove({
            updatedBoards: newBoards,
            setBoards,
            setWinner,
            setTurn,
            winner,
            checkWinner,
            setResult,
          });
      }, 500);
    }
  };

  const checkWinner = (boards) => {
    for (let combo of winningCombinations) {
      const [a, b, c] = combo;
      if (boards[a] && boards[a] === boards[b] && boards[a] === boards[c]) {
        return boards[a];
      }
    }
    return null;
  };

  const startGame = () => {
    if (ModoGame === "computer" && !playerO) setPlayerO("Pc");
    setShowModal("game");
  };

  const back = () => {
    setShowModal("menu");
    setPlayerX("");
    setPlayerO("");
  };

  const reset = () => {
    setBoards(Array(9).fill(""));
    setTurn(turns.X);
    setWinner(null);
  };

  const backMenu = () => {
    setBoards(Array(9).fill(""));
    setTurn(turns.X);
    setShowModal("menu");
    setPlayerX("");
    setPlayerO("");
    setResult(results);
  };

  const selectModo = (selectedMode) => {
    setModoGame(selectedMode);
    setShowModal("modoGame");
  };
  return (
    <main className="main-card">
      {showModal === "menu" && <Menu selectModo={selectModo} />}

      {showModal === "modoGame" && (
        <ModoGameForm
          ModoGame={ModoGame}
          playerX={playerX}
          playerO={playerO}
          setPlayerX={setPlayerX}
          setPlayerO={setPlayerO}
          startGame={startGame}
          back={back}
        />
      )}

      {showModal === "game" && (
        <section className="game">
          <GameBoard
            boards={boards}
            turn={turn}
            turns={turns}
            playerX={playerX}
            playerO={playerO}
            winner={winner}
            click={click}
          />
          <ScoreBoard result={result} />

          <ButtonsGame backMenu={backMenu} reset={reset} />

          {winner && (
            <WinnerModal
              winner={winner}
              turns={turns}
              ModoGame={ModoGame}
              playerX={playerX}
              playerO={playerO}
              reset={reset}
            />
          )}
        </section>
      )}
    </main>
  );
};

export default App;
