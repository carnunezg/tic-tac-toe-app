import { Link, useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { turns } from "../utils/consts";

const ResultsPage = ({ reset }) => {
  const location = useLocation();
  const { modoGame } = useParams();
  const { playerX, playerO } = location.state || {};

  const storedResults = JSON.parse(localStorage.getItem("lastResult")) || {
    X: 0,
    O: 0,
    Empate: 0,
  };

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
          <Link to={`/${modoGame}/game`} state={{ playerX, playerO }}>
            <button
              className="button-results"
              onClick={() => {
                localStorage.removeItem("lastResult");
                reset;
              }}
            >
              Reiniciar Juego
            </button>
          </Link>
          <Link to={`/${modoGame}/game`} state={{ playerX, playerO }}>
            <button className="button-results">Seguir Jugando</button>
          </Link>
        </section>
      </section>
    </div>
  );
};

export default ResultsPage;
