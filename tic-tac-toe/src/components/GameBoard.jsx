const GameBoard = ({
  boards,
  turn,
  turns,
  playerX,
  winner,
  playerO,
  click,
}) => {
  return (
    <div>
      <h1 className="game-title">
        Tic <span className="game-tac">Tac</span> Toe
      </h1>
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
          {playerO || "O"}
        </p>
      </div>

      <div className="boards">
        {boards.map((_, i) => (
          <button key={i} className="cell" onClick={() => click(i)}>
            <h1 className={boards[i] === turns.X ? "x" : "o"}>{boards[i]}</h1>
          </button>
        ))}
      </div>
    </div>
  );
};

export default GameBoard;
