const Menu = ({ selectModo }) => {
  return (
    <div>
      <h1 className="main-title">Tic Tac Toe</h1>
      <section className="button-main">
        <button className="button" onClick={() => selectModo("2players")}>
          Jugador Vs Jugador
        </button>
        <button className="button" onClick={() => selectModo("computer")}>
          Jugador Vs Computador
        </button>
      </section>
    </div>
  );
};

export default Menu;
