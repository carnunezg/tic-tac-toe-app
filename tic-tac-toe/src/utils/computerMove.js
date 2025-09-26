import { turns, winningCombinations } from "./consts";

export const computerMove = ({
  newBoards,
  setBoards,
  setWinner,
  setTurn,
  winner,
  checkWinner,
  setResult,
  result,
  setShowWinnerBanner,
  resetGame,
  setWinnerCombo,
}) => {
  if (winner) return;
  // Busca ganar
  for (let combo of winningCombinations) {
    const [a, b, c] = combo;
    const values = [newBoards[a], newBoards[b], newBoards[c]];
    if (
      values.filter((v) => v === turns.O).length === 2 &&
      values.includes("")
    ) {
      const index = combo[values.indexOf("")];
      const boardCopy = [...newBoards];
      boardCopy[index] = turns.O;
      setBoards(boardCopy);

      const win = checkWinner(boardCopy);
      if (win) {
        setWinner(win.winner);
        setWinnerCombo(win.combo);
        setResult({
          ...result,
          [win.winner]: result[win.winner] + 1,
        });

        setShowWinnerBanner(true);

        setTimeout(() => {
          setShowWinnerBanner(false);
          resetGame();
        }, 4000);
      } else if (boardCopy.every((c) => c !== "")) {
        setWinner("Empate");
        setResult({
          ...result,
          Empate: result.Empate + 1,
        });

        setShowWinnerBanner(true);

        setTimeout(() => {
          setShowWinnerBanner(false);
          resetGame();
        }, 4000);
      } else {
        setTurn(turns.X);
      }
      return;
    }
  }

  // Bloquea X
  for (let combo of winningCombinations) {
    const [a, b, c] = combo;
    const values = [newBoards[a], newBoards[b], newBoards[c]];
    if (
      values.filter((v) => v === turns.X).length === 2 &&
      values.includes("")
    ) {
      const index = combo[values.indexOf("")];
      const boardCopy = [...newBoards];
      boardCopy[index] = turns.O;
      setBoards(boardCopy);

      const win = checkWinner(boardCopy);
      if (win) {
        setWinner(win.winner);
        setWinnerCombo(win.combo);
        setShowWinnerBanner(true);

        setTimeout(() => {
          setShowWinnerBanner(false);
          resetGame();
        }, 4000);
      } else if (boardCopy.every((c) => c !== "")) {
        setWinner("Empate");
        setResult({
          ...result,
          Empate: result.Empate + 1,
        });

        setShowWinnerBanner(true);

        setTimeout(() => {
          setShowWinnerBanner(false);
          resetGame();
        }, 4000);
      } else {
        setTurn(turns.X);
      }
      return;
    }
  }

  const currentBoards = [...newBoards];
  const selectCells = currentBoards
    .map((val, i) => (val === "" ? i : null))
    .filter((val) => val !== null);

  if (selectCells.length > 0) {
    const randomCell =
      selectCells[Math.floor(Math.random() * selectCells.length)];

    currentBoards[randomCell] = turns.O;
    setBoards(currentBoards);

    const win = checkWinner(currentBoards);
    if (win) {
      setWinner(win.winner);
      setWinnerCombo(win.combo);
      setShowWinnerBanner(true);

      setTimeout(() => {
        setShowWinnerBanner(false);
        resetGame();
      }, 4000);
    } else if (currentBoards.every((c) => c !== "")) {
      setWinner("Empate");
      setResult({
        ...result,
        Empate: result.Empate + 1,
      });

      setShowWinnerBanner(true);

      setTimeout(() => {
        setShowWinnerBanner(false);
        resetGame();
      }, 4000);
    } else {
      setTurn(turns.X);
    }
  }
};
