const ButtonsGame = ({ backMenu, reset }) => {
  return (
    <section className="buttons-game">
      <button className="button-game " onClick={backMenu}>
        Volver al Menú
      </button>
      <button className="button-game" onClick={reset}>
        Reiniciar
      </button>
    </section>
  );
};

export default ButtonsGame;
