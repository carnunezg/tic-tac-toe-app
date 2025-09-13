import { Link } from "react-router-dom";
import "../css/Menu.css";

const Menu = () => {
  return (
    <main className="background-animated">
      <div className="modal-menu">
        <div className="card-menu">
          <h1 className="menu-title">
            Tic <span className="menu-tac">Tac</span> Toe
          </h1>
          <section className="button-main">
            <Link className="link" to="/2players">
              <button className="button">Jugador Vs Jugador</button>
            </Link>
            <Link className="link" to="/computer">
              <button className="button">Jugador Vs Computador</button>
            </Link>
          </section>
        </div>
      </div>
    </main>
  );
};

export default Menu;
