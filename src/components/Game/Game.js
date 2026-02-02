import { useState } from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import SubmitGuess from '../SubmitGuess';
import GuessResults from '../GuessResults';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = useState([]);

  function addGuess(guess) {
    setGuesses([...guesses, {
      id: crypto.randomUUID(),
      guess,
    }]);
  }

  return (
    <>
      <GuessResults guesses={guesses} />
      <SubmitGuess addGuess={addGuess} />
    </>
  );
}

export default Game;
