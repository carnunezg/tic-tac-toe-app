import FormPlayers from "./components/FormPlayers";
import FormComputer from "./components/FormComputer";
import TicTacToe from "./components/TicTacToe";
import "./components/css/Menu.css";
import { useState } from "react";
import { turns, users } from "./consts";

const Menu = () => {
  const [showForm, setShowForm] = useState(null);
  const [turn, setTurn] = useState(turns.X);
  const [winner, setWinner] = useState(null);

  const clic = (i) => {
    if (boards[i] !== null) return;

    const newBoards = [...boards];
    newBoards[i] = turn;
    setBoards(newBoards);

    setTurn(turn === turns.X ? turns.O : turns.X);
  };

  const reset = () => {
    setBoards(Array(9).fill(null));
    setTurn(turns.X);
  };

  return (
    <main className="menu">
      <h1 className="menu-title">Modo de Juego</h1>
      <div className="button-menu">
        <button onClick={() => setShowForm("players")} className="button">
          Jugador VS Jugador
        </button>
        <button onClick={() => setShowForm("computer")} className="button">
          Jugador VS Computadora
        </button>
      </div>

      {showForm === "players" && (
        <section className="modal">
          <div className="card">
            <FormPlayers onClose={() => setShowForm(false)} />
          </div>
        </section>
      )}

      {showForm === "computer" && (
        <section className="modal">
          <div className="card">
            <FormComputer onClose={() => setShowForm(false)} />
          </div>
        </section>
      )}
      {showForm === "game" && <TicTacToe />}
    </main>
  );
};

export default Menu;
