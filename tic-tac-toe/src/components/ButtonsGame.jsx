import { Link } from "react-router";

const ButtonsGame = ({ resetGameResults, resetGame }) => {
  return (
    <section className="buttons-game">
      <Link to="/">
        <button className="button-menu" onClick={resetGameResults}>
          Volver al Menú
        </button>
      </Link>

      <button className="button-reset" onClick={resetGame}>
        Reiniciar
      </button>
    </section>
  );
};

export default ButtonsGame;
