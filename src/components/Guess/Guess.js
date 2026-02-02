import React from 'react';

function Guess({ guess }) {
  return (
    <p class="guess">
      {guess.map((letter, index) => (
        <span key={index} className="cell">{letter}</span>
      ))}
    </p>
  );
}

export default Guess;
