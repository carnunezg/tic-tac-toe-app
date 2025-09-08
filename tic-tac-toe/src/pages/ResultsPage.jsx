import { Link, useParams, useSearchParams } from "react-router-dom";
import { turns, results } from "../utils/consts";

const ResultsPage = () => {
  const { modoGame } = useParams();
  const [searchParams] = useSearchParams();
  const playerX = searchParams.get("playerX") || turns.X;
  const playerO = searchParams.get("playerO") || turns.O;

  const storedResults =
    JSON.parse(localStorage.getItem("lastResult")) || results;

  return (
    <div className="modal-results">
      <div className="title-results-h1">
        <h1 className="game-title">
          Tic <span className="game-tac">Tac</span> Toe
        </h1>
      </div>

      <section className="card-results">
        <h2 className="results-title">Resultados</h2>
        <table className="results-table">
          <thead>
            <tr>
              <th>Jugador</th>
              <th>Puntaje</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="title-x">{playerX || turns.X}</td>
              <td>{storedResults.X}</td>
            </tr>
            <tr>
              <td className="title-o">{playerO || turns.O}</td>
              <td>{storedResults.O}</td>
            </tr>
            <tr>
              <td className="title-empate">Empate</td>
              <td>{storedResults.Empate}</td>
            </tr>
          </tbody>
        </table>
        <section className="buttons-results">
          <Link to="/">
            <button
              className="button-results"
              onClick={() => {
                localStorage.removeItem("lastResult");
              }}
            >
              Volver al Menú
            </button>
          </Link>
          <Link
            to={`/${modoGame}/game?playerX=${encodeURIComponent(
              playerX
            )}&playerO=${encodeURIComponent(playerO)}`}
          >
            <button
              className="button-results"
              onClick={() => {
                localStorage.removeItem("lastResult");
              }}
            >
              Reiniciar Juego
            </button>
          </Link>

          <Link
            to={`/${modoGame}/game?playerX=${encodeURIComponent(
              playerX
            )}&playerO=${encodeURIComponent(playerO)}`}
          >
            <button className="button-results">Seguir Jugando</button>
          </Link>
        </section>
      </section>
    </div>
  );
};

export default ResultsPage;
