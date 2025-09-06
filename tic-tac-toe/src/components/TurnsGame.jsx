const TurnsGame = ({
  winner,
  turn,
  turns,
  playerX,
  playerO,
  modoGame,
  result,
}) => {
  return (
    <div className="game-turns">
      <div>
        <h1
          className={`player ${turn === turns.X ? "turn-x" : ""} ${
            winner === "X" ? "winner" : ""
          }`}
        >
          {playerX || "X"}
        </h1>
        <p className="turn-x">{result.X}</p>
      </div>

      <div>
        <h1
          className={`player ${turn === turns.O ? "turn-o" : ""} ${
            winner === "O" ? "winner" : ""
          }`}
        >
          {modoGame === "computer" ? "PC" : playerO || "O"}
        </h1>
        <p className="turn-o">{result.O}</p>
      </div>
    </div>
  );
};

export default TurnsGame;
