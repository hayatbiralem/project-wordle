import Banner from '../Banner';

function GameOverBanner({ status, guessesLength, restartGame }) {

  function RestartGameButton() {
    return <button autoFocus className="restart-button" onClick={restartGame}>Restart Game</button>;
  }

  return <div>
    {status === 'sad' && <Banner type="sad">
      <p>Sorry, the correct answer was <strong>LEARN</strong>.</p>
      <RestartGameButton />
    </Banner>}

    {status === 'happy' && <Banner type="happy">
      <p>
        <strong>Congratulations!</strong> Got it in{' '}
        <strong>{guessesLength} guesses</strong>.
      </p>
      <RestartGameButton />
    </Banner>}
  </div>;
}

export default GameOverBanner;
