import { useState } from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';
import Keyboard from '../Keyboard';
import GameOverBanner from '../GameOverBanner';

import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

// Pick a random word on every pageload.
const initialAnswer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ initialAnswer });

function Game() {
  const [answer, setAnswer] = useState(`${initialAnswer}`);
  const [guesses, setGuesses] = useState([]);
  const [status, setStatus] = useState('');

  function addGuess(guess) {
    const nextGuesses = [...guesses, guess];

    setGuesses(nextGuesses);

    if (guess === answer) {
      setStatus('happy');
    } else if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setStatus('sad');
    }
  }

  function restartGame() {
    const nextAnswer = sample(WORDS);
    console.info({ nextAnswer });
    setAnswer(nextAnswer);
    setGuesses([]);
    setStatus('');
  }

  return (
    <>
      <GuessResults guesses={guesses} answer={answer} />
      {status === '' && <GuessInput addGuess={addGuess} status={status} />}
      <GameOverBanner answer={answer} status={status} guessesLength={guesses.length} restartGame={restartGame} />
      <Keyboard guesses={guesses} answer={answer} />
    </>
  );
}

export default Game;
