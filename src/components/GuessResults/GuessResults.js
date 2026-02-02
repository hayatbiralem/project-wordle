import React from 'react';

function GuessResults({ guesses }) {
  return (
    <div class="guess-results">
      {guesses.map(({ id, guess }) => (
        <p key={id} className="guess">{guess}</p>
      ))}
    </div>
  );
}

export default GuessResults;
