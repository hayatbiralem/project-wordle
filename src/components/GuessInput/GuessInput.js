import { useState } from 'react';

import { NUM_OF_GUESS_LENGTH } from '../../constants';

import Banner from '../Banner';

function SubmitGuess({ addGuess, guessesLength, status }) {

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

      {status === 'sad' && <Banner type="sad">
        <p>Sorry, the correct answer was <strong>LEARN</strong>.</p>
      </Banner>}

      {status === 'happy' && <Banner type="happy">
        <p>
          <strong>Congratulations!</strong> Got it in{' '}
          <strong>{guessesLength} guesses</strong>.
        </p>
      </Banner>}
    </form>
  );
}

export default SubmitGuess;
