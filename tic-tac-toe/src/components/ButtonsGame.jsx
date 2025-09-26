import { Link } from "react-router";

const ButtonsGame = ({
  resetGameResults,
  resetGame,
  hasClicked,
  hasVictories,
  modoGame,
}) => {
  return (
    <section className="buttons-game">
      <Link to="/">
        <button className="button-menu" onClick={resetGameResults}>
          Menú
        </button>
      </Link>

      {hasVictories && (
        <Link to={`/${modoGame}/game/results`}>
          <button className="button-results">Resultados</button>
        </Link>
      )}

      {hasClicked && (
        <button className="button-reset" onClick={resetGame}>
          Reiniciar
        </button>
      )}
    </section>
  );
};

export default ButtonsGame;
