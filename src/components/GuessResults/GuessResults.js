import { useState } from 'react';

import Guess from '../Guess';
import { range } from '../../utils';

import { NUM_OF_GUESS_LENGTH } from '../../constants';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

function emptyGuesses() {
  return range(0, NUM_OF_GUESSES_ALLOWED).map(() => {
    return range(0, NUM_OF_GUESS_LENGTH).map(() => '');
  });
}

function GuessResults({ guesses }) {
  const filledGuesses = emptyGuesses().map((filledGuess, index) => {
    if (guesses[index]) {
      return guesses[index].split('');
    }
    return filledGuess;
  });

  return (
    <div class="guess-results">
      {filledGuesses.map((filledGuess, index) => (
        <Guess key={index} guess={filledGuess} />
      ))}
    </div>
  );
}

export default GuessResults;
