import { useState } from 'react';

import Guess from '../Guess';
import { range } from '../../utils';

import { NUM_OF_GUESS_LENGTH } from '../../constants';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

function GuessResults({ guesses, answer }) {
  const filledGuesses = range(0, NUM_OF_GUESSES_ALLOWED).map((index) => {
    return guesses[index] ?? ''.padStart(NUM_OF_GUESS_LENGTH);
  });

  return (
    <div className="guess-results">
      {filledGuesses.map((guess, index) => (
        <Guess key={index} guess={guess} answer={answer} />
      ))}
    </div>
  );
}

export default GuessResults;
