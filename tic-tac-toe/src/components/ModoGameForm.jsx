const ModoGameForm = ({
  ModoGame,
  playerX,
  playerO,
  startGame,
  back,
  setPlayerX,
  setPlayerO,
}) => {
  return (
    <section className="modal">
      <div className="card">
        <h2 className="form-title">
          {ModoGame === "computer"
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
          {ModoGame === "2players" && (
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
          <button className="button-start" onClick={startGame}>
            Jugar
          </button>
          <button onClick={back} className="button-back">
            Volver
          </button>
        </section>
      </div>
    </section>
  );
};

export default ModoGameForm;
