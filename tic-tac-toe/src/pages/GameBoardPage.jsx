import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import "../css/App.css";
import { launchConfetti } from "../utils/launchConfetti";
import { computerMove } from "../utils/computerMove";
import { turns, winningCombinations, results } from "../utils/consts";
import GameBoard from "../components/GameBoard";
import WinnerModal from "../components/WinnerModal";
import ScoreBoard from "../components/ScoreBoard";
import ButtonsGame from "../components/ButtonsGame";
import { PlayerContext } from "../context/PlayerContext";
import { ResultsContext } from "../context/ResultsContext";

const GameBoardPage = () => {
  const { playerX, playerO, setPlayerX, setPlayerO } =
    useContext(PlayerContext);
  const { result, setResult } = useContext(ResultsContext);
  const { modoGame } = useParams();
  const [boards, setBoards] = useState(Array(9).fill(""));
  const [turn, setTurn] = useState(turns.X);
  const [winner, setWinner] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [winnerCombo, setWinnerCombo] = useState([]);

  const checkWinner = (checkBoard) => {
    for (let combo of winningCombinations) {
      const [a, b, c] = combo;
      if (
        checkBoard[a] &&
        checkBoard[a] === checkBoard[b] &&
        checkBoard[a] === checkBoard[c]
      ) {
        return { winner: checkBoard[a], combo };
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
      setWinner(win.winner);
      setWinnerCombo(win.combo);
      setResult({
        ...result,
        [win.winner]: result[win.winner] + 1,
      });

      setTimeout(() => {
        launchConfetti();
        setShowModal(true);
      }, 1600);
    } else if (newBoards.every((c) => c !== "")) {
      setWinner("Empate");
      setResult({
        ...result,
        Empate: result.Empate + 1,
      });

      setTimeout(() => {
        setShowModal(true);
      }, 1600);
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
            setShowModal,
            setWinnerCombo,
          });
      }, 700);
    }
  };

  const resetGameResults = () => {
    setBoards(Array(9).fill(""));
    setTurn(turns.X);
    setWinner("");
    setShowModal(false);
    setPlayerX("");
    setPlayerO("");
    setResult(results);
    setWinnerCombo([]);
  };

  const resetGame = () => {
    setBoards(Array(9).fill(""));
    setTurn(turns.X);
    setWinner("");
    setShowModal(false);
    setWinnerCombo([]);
  };

  return (
    <main className="background-animated">
      <div className="modal">
        <section className="game">
          <GameBoard
            boards={boards}
            turn={turn}
            turns={turns}
            playerX={playerX}
            playerO={playerO}
            winner={winner}
            click={click}
            result={result}
            winnerCombo={winnerCombo}
          />
          <ScoreBoard result={result} />

          <ButtonsGame
            resetGameResults={resetGameResults}
            resetGame={resetGame}
          />
          {showModal && (
            <WinnerModal
              winner={winner}
              turns={turns}
              modoGame={modoGame}
              playerX={playerX}
              playerO={playerO}
              resetGame={resetGame}
            />
          )}
        </section>
      </div>
    </main>
  );
};

export default GameBoardPage;
