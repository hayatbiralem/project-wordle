import { useState } from 'react';

function SubmitGuess() {

  const [guess, setGuess] = useState('');

  const requiredGuesLength = 5;
  const helpText = `Please enter exactly ${requiredGuesLength} characters.`;

  function handleSubmit(event) {
    event.preventDefault();

    if (guess.length !== requiredGuesLength) {
      return window.alert(helpText);
    }

    console.log({ guess });

    setGuess('');
  }

  return <form className="guess-input-wrapper" onSubmit={handleSubmit}>
    <label htmlFor="guess-input">Enter guess:</label>
    <input id="guess-input" type="text" value={guess}
      onChange={(event) => {
        setGuess(event.target.value.toUpperCase());
        event.target.setCustomValidity("");
      }}
      required={true}
      pattern={`^[A-Z]{${requiredGuesLength}}$`}
      maxLength={requiredGuesLength}
      onInvalid={(event) => {
        event.target.setCustomValidity(helpText);
      }}
      autoComplete="off"
    />
    <div className="guess-help">{helpText}</div>
  </form>;
}

export default SubmitGuess;
