const WinnerModal = ({ winner, turns, modoGame, playerX, playerO }) => {
  return (
    <div className="card-winner">
      {winner === "Empate" ? (
        <h2 className="card-winner-h2-empate">¡Es un Empate!</h2>
      ) : winner === turns.O && modoGame === "computer" ? (
        <h2 className="card-winner-h2">
          ¡Perdiste!
          <br />
          Ha ganado el <span className="winner-o">PC</span>!
        </h2>
      ) : (
        <h2 className="card-winner-h2">
          ¡Felicidades{" "}
          <span className={winner === turns.X ? "winner-x " : "winner-o"}>
            {winner === turns.X ? playerX || "X" : playerO}
          </span>
          !<br />
          Has ganado
        </h2>
      )}
    </div>
  );
};

export default WinnerModal;
