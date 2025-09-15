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
  setShowModal,
  setWinnerCombo,
}) => {
  if (winner) return;
  // Busca ganar
  for (let combo of winningCombinations) {
    const [a, b, c] = combo;
    const values = [newBoards[a], newBoards[b], newBoards[c]];
    if (
      values.filter((v) => v === turns.O).length === 2 && //['O', 'O','']
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

        setTimeout(() => {
          setShowModal(true);
        }, 1500);
      } else if (boardCopy.every((c) => c !== "")) {
        setWinner("Empate");
        setResult({
          ...result,
          Empate: result.Empate + 1,
        });

        setTimeout(() => {
          setShowModal(true);
        }, 1500);
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
        setTimeout(() => {
          setShowModal(true);
        }, 1500);
      } else if (boardCopy.every((c) => c !== "")) {
        setWinner("Empate");
        setResult({
          ...result,
          Empate: result.Empate + 1,
        });

        setTimeout(() => {
          setShowModal(true);
        }, 1500);
      } else {
        setTurn(turns.X);
      }
      return;
    }
  }

  const currentBoards = [...newBoards];
  const selectCells = currentBoards
    .map((val, i) => (val === "" ? i : null)) // [null,1,2,null,4,null,6,null,null]
    .filter((val) => val !== null); // [1,2,4,6]

  if (selectCells.length > 0) {
    const randomCell =
      selectCells[Math.floor(Math.random() * selectCells.length)];

    currentBoards[randomCell] = turns.O;
    setBoards(currentBoards);

    const win = checkWinner(currentBoards);
    if (win) {
      setWinner(win.winner);
      setWinnerCombo(win.combo);
      setTimeout(() => {
        setShowModal(true);
      }, 1500);
    } else if (currentBoards.every((c) => c !== "")) {
      setWinner("Empate");
      setResult({
        ...result,
        Empate: result.Empate + 1,
      });

      setTimeout(() => {
        setShowModal(true);
      }, 1500);
    } else {
      setTurn(turns.X);
    }
  }
};
