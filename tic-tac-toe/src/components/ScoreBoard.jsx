const ScoreBoard = ({ result }) => {
  return (
    <section className="score-board">
      <p className="title-x">X: {result.X}</p>

      <p className="title-o">O: {result.O}</p>

      <p className="title-empate">Empate: {result.Empate}</p>
    </section>
  );
};

export default ScoreBoard;
