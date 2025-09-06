const ModoGameForm = ({
  modoGame,
  playerX,
  playerO,
  startGame,
  backMenu,
  setPlayerX,
  setPlayerO,
}) => {
  return (
    <section className="modal">
      <div className="card">
        <h2 className="form-title">
          {modoGame === "computer"
            ? "Ingresa tu nombre"
            : "Ingresa los nombres"}
        </h2>
        <form className="form-inputs">
          <input
            className="input"
            type="text"
            placeholder="Nombre Jugador X"
            maxLength={6}
            value={playerX}
            onChange={(e) => setPlayerX(e.target.value)}
          />
          {modoGame === "2players" && (
            <input
              className="input"
              type="text"
              placeholder="Nombre Jugador O"
              maxLength={6}
              value={playerO}
              onChange={(e) => setPlayerO(e.target.value)}
            />
          )}
        </form>
        <section className="button-form">
          <button onClick={backMenu} className="button-back">
            Volver
          </button>
          <button className="button-start" onClick={startGame}>
            Jugar
          </button>
        </section>
      </div>
    </section>
  );
};

export default ModoGameForm;
