import TurnsGame from "./TurnsGame";

const GameBoard = ({
  boards,
  turn,
  turns,
  playerX,
  winner,
  playerO,
  click,
  result,
}) => {
  return (
    <div>
      <h1 className="game-title">
        Tic <span className="game-tac">Tac</span> Toe
      </h1>
      <TurnsGame
        winner={winner}
        turn={turn}
        turns={turns}
        playerX={playerX}
        playerO={playerO}
        result={result}
      />

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
