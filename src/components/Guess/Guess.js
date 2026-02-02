import React from 'react';

import { checkGuess } from '../../game-helpers';

function Guess({ guess, answer }) {
  const result = checkGuess(guess, answer);

  return (
    <p className="guess">
      {guess.split('').map((char, index) => {
        return (
          <span key={index} className={`cell ${char !== ' ' ? result[index].status : ''}`}>{char}</span>
        );
      })}
    </p>
  );
}

export default Guess;
