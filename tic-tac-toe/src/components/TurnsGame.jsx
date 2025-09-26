import WinnerModal from "./WinnerModal";

const TurnsGame = ({
  winner,
  turn,
  turns,
  playerX,
  playerO,
  modoGame,
  result,
  showWinnerBanner,
}) => {
  return (
    <div className="game-turns">
      {showWinnerBanner ? (
        <WinnerModal
          winner={winner}
          turns={turns}
          modoGame={modoGame}
          playerX={playerX}
          playerO={playerO}
        />
      ) : (
        <>
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
              {modoGame === "computer" ? playerO || "PC" : playerO || "O"}
            </h1>
            <p className="turn-o">{result.O}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default TurnsGame;
