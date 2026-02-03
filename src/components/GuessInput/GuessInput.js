import { useState } from 'react';

import { NUM_OF_GUESS_LENGTH } from '../../constants';

function SubmitGuess({ addGuess, status }) {

  const [guess, setGuess] = useState('');

  const helpText = `Please enter exactly ${NUM_OF_GUESS_LENGTH} characters.`;

  function handleSubmit(event) {
    event.preventDefault();

    if (guess.length !== NUM_OF_GUESS_LENGTH) {
      return window.alert(helpText);
    }

    console.log({ guess });

    addGuess(guess);

    setGuess('');
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input id="guess-input" type="text" value={guess}
        onChange={(event) => {
          const nextGuess = event.target.value.toUpperCase();
          setGuess(nextGuess);
          event.target.setCustomValidity("");
        }}
        required={true}
        pattern={`^[A-Z]{${NUM_OF_GUESS_LENGTH}}$`}
        maxLength={NUM_OF_GUESS_LENGTH}
        onInvalid={(event) => {
          event.target.setCustomValidity(helpText);
        }}
        autoComplete="off"
        disabled={status !== ''}
        autoFocus={true}
      />
      <div className="guess-help">{helpText}</div>
    </form>
  );
}

export default SubmitGuess;
