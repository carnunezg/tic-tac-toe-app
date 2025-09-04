import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div>
      <h1 className="main-title">Tic Tac Toe</h1>
      <section className="button-main">
        <Link className="link" to="/2players">
          <button className="button">Jugador Vs Jugador</button>
        </Link>
        <Link className="link" to="/computer">
          <button className="button">Jugador Vs Computador</button>
        </Link>
      </section>
    </div>
  );
};

export default Menu;
