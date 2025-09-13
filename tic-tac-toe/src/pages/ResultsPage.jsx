import { Link, useNavigate, useParams } from "react-router-dom";
import { turns } from "../utils/consts";
import { useContext } from "react";
import { PlayerContext } from "../context/PlayerContext";
import { ResultsContext } from "../context/ResultsContext";

const ResultsPage = () => {
  const { modoGame } = useParams();
  const { playerX, playerO } = useContext(PlayerContext);
  const { result, resetResults } = useContext(ResultsContext);

  const navigate = useNavigate();

  return (
    <main className="background-animated">
      <div className="modal">
        <div className="modal-results">
          <div>
            <h1 className="result-title">
              Tic <span className="result-tac">Tac</span> Toe
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
                  <td>{result.X}</td>
                </tr>
                <tr>
                  <td className="title-o">{playerO || turns.O}</td>
                  <td>{result.O}</td>
                </tr>
                <tr>
                  <td className="title-empate">Empate</td>
                  <td>{result.Empate}</td>
                </tr>
              </tbody>
            </table>
            <section className="buttons-results">
              <Link to="/">
                <button className="button-results-menu" onClick={resetResults}>
                  Volver al Menú
                </button>
              </Link>

              <button
                className="button-results-reset-game"
                onClick={() => {
                  resetResults();
                  navigate(`/${modoGame}/game`);
                }}
              >
                Reiniciar Juego
              </button>

              <Link to={`/${modoGame}/game`}>
                <button className="button-results-reset">Seguir Jugando</button>
              </Link>
            </section>
          </section>
        </div>
      </div>
    </main>
  );
};

export default ResultsPage;
