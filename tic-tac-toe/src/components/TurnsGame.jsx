const TurnsGame = ({ winner, turn, turns, playerX, playerO, modoGame }) => {
  return (
    <div className="game-turns">
      <p
        className={`player ${turn === turns.X ? "turn-x" : ""} ${
          winner === "X" ? "winner" : ""
        }`}
      >
        {playerX || "X"}
      </p>

      <p
        className={`player ${turn === turns.O ? "turn-o" : ""} ${
          winner === "O" ? "winner" : ""
        }`}
      >
        {modoGame === "computer" ? "PC" : playerO || "O"}
      </p>
    </div>
  );
};

export default TurnsGame;
