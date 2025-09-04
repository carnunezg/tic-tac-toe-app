import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "../css/App.css";
import { launchConfetti } from "../utils/launchConfetti";
import { computerMove } from "../utils/computerMove";
import { turns, winningCombinations, results } from "../utils/consts";
import GameBoard from "../components/GameBoard";
import WinnerModal from "../components/WinnerModal";
import ScoreBoard from "../components/ScoreBoard";
import ButtonsGame from "../components/ButtonsGame";

const GameBoardPage = () => {
  const { modoGame } = useParams();
  const [boards, setBoards] = useState(Array(9).fill(""));
  const [turn, setTurn] = useState(turns.X);
  const [winner, setWinner] = useState("");
  const [result, setResult] = useState(results);

  const location = useLocation();
  const { playerX, playerO } = location.state || {};

  const checkWinner = (newBoards) => {
    for (let combo of winningCombinations) {
      const [a, b, c] = combo;
      if (
        newBoards[a] &&
        newBoards[a] === newBoards[b] &&
        newBoards[a] === newBoards[c]
      ) {
        return newBoards[a];
      }
    }
    return null;
  };

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
      setResult({
        ...result,
        [win]: result[win] + 1,
      });
    } else if (newBoards.every((c) => c !== "")) {
      setWinner("Empate");
      setResult({
        ...result,
        Empate: result.Empate + 1,
      });
    }

    if (modoGame === "computer" && nextTurn === turns.O) {
      setTimeout(() => {
        const winCheck = checkWinner(newBoards);
        if (!winCheck && newBoards.some((c) => c === ""))
          computerMove({
            newBoards,
            setBoards,
            setWinner,
            setTurn,
            winner,
            checkWinner,
            setResult,
            result,
          });
      }, 500);
    }
  };

  const reset = () => {
    setBoards(Array(9).fill(""));
    setTurn(turns.X);
    setWinner("");
  };

  return (
    <main className="main-card">
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

        <ButtonsGame reset={reset} />
        {winner && (
          <WinnerModal
            winner={winner}
            turns={turns}
            modoGame={modoGame}
            playerX={playerX}
            playerO={playerO}
            reset={reset}
          />
        )}
      </section>
    </main>
  );
};

export default GameBoardPage;
