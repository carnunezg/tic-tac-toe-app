const ScoreBoard = ({ result }) => {
  return (
    <section className="score-board">
      <p className="title-empate">Empate: {result.Empate}</p>
    </section>
  );
};

export default ScoreBoard;
