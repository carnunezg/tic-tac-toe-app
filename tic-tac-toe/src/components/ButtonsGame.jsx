import { Link } from "react-router";

const ButtonsGame = ({ backMenu, reset }) => {
  return (
    <section className="buttons-game">
      <Link to="/">
        <button className="button-game ">Volver al Menú</button>
      </Link>

      <button className="button-game" onClick={reset}>
        Reiniciar
      </button>
    </section>
  );
};

export default ButtonsGame;
