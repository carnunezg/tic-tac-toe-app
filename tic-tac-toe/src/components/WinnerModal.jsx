import { Link } from "react-router";

const WinnerModal = ({ winner, turns, modoGame, playerX, playerO, reset }) => {
  return (
    <section className="modal">
      <div className="card-winner">
        {winner === "Empate" ? (
          <h2 className="card-winner-h2">¡Es un Empate!</h2>
        ) : winner === turns.O && modoGame === "computer" ? (
          <h2 className="card-winner-h2">
            ¡Perdiste!
            <br />
            Ha ganado el <span className="winner-o">Pc</span>!
          </h2>
        ) : (
          <h2 className="card-winner-h2">
            ¡Felicidades{" "}
            <span className={winner === turns.X ? "winner-x " : "winner-o"}>
              {winner === turns.X ? playerX || "X" : playerO || "O"}
            </span>
            !<br />
            Has ganado
          </h2>
        )}

        <section className="buttons-modal">
          <Link to={`/${modoGame}/game/results`} state={{ playerX, playerO }}>
            <button className="button-modal">Resultados</button>
          </Link>
          <button className="button-modal" onClick={reset}>
            Seguir Jugando
          </button>
        </section>
      </div>
    </section>
  );
};

export default WinnerModal;
