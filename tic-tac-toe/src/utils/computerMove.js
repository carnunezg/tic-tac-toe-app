import { turns, winningCombinations } from "./consts";

export const computerMove = ({
  updatedBoards,
  setBoards,
  setWinner,
  setTurn,
  winner,
  checkWinner,
  setResult,
}) => {
  if (winner) return;
  // Busca ganar
  for (let combo of winningCombinations) {
    const [a, b, c] = combo;
    const values = [updatedBoards[a], updatedBoards[b], updatedBoards[c]];
    if (
      values.filter((v) => v === turns.O).length === 2 &&
      values.includes("")
    ) {
      const index = combo[values.indexOf("")];
      const newBoards = [...updatedBoards];
      newBoards[index] = turns.O;
      setBoards(newBoards);

      const win = checkWinner(newBoards);
      if (win) {
        setWinner(win);
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
      } else {
        setTurn(turns.X);
      }
      return;
    }
  }

  // Bloquea al jugador X si está por ganar
  for (let combo of winningCombinations) {
    const [a, b, c] = combo;
    const values = [updatedBoards[a], updatedBoards[b], updatedBoards[c]];
    if (
      values.filter((v) => v === turns.X).length === 2 &&
      values.includes("")
    ) {
      const index = combo[values.indexOf("")];
      const newBoards = [...updatedBoards];
      newBoards[index] = turns.O;
      setBoards(newBoards);

      const win = checkWinner(newBoards);
      if (win) {
        setWinner(win);
      } else if (newBoards.every((c) => c !== "")) {
        setWinner("Empate");
        setResult((prevResult) => ({
          ...prevResult,
          Empate: prevResult.Empate + 1,
        }));
      } else {
        setTurn(turns.X);
      }
      return;
    }
  }

  const currentBoards = [...updatedBoards];
  const selectCells = currentBoards
    .map((val, i) => (val === "" ? i : null))
    .filter((val) => val !== null);

  if (selectCells.length > 0) {
    const randomCell =
      selectCells[Math.floor(Math.random() * selectCells.length)];

    currentBoards[randomCell] = turns.O; // PC juega como O
    setBoards(currentBoards);

    const win = checkWinner(currentBoards);
    if (win) {
      setWinner(win);
    } else if (currentBoards.every((c) => c !== "")) {
      setWinner("Empate");
      setResult((prevResult) => ({
        ...prevResult,
        Empate: prevResult.Empate + 1,
      }));
    } else {
      setTurn(turns.X); // vuelve el turno al jugador
    }
  }
};
