import { checkGuess } from '../../game-helpers';

const keyboardRows = [
  ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
  ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
  ['Z', 'X', 'C', 'V', 'B', 'N', 'M'],
];

function Keyboard({ guesses, answer }) {
  const letterStates = {};
  guesses.map((guess) => {
    const result = checkGuess(guess, answer);
    result.map(({ letter, status }) => {
      if (letterStates[letter] === 'correct') {
        // If 'correct', keep it
      } else if (letterStates[letter] === 'misplaced') {
        // If not 'correct' but 'misplaced', keep it too
      } else {
        // It can be updated at this point
        letterStates[letter] = status;
      }
    })
  });

  return (
    <div className="keyboard">
      {keyboardRows.map((row, rowIndex) => (
        <div key={rowIndex} className="keyboard-row">{row.map((letter, letterIndex) => (
          <div key={letterIndex} className={`keyboard-letter ${letterStates[letter] ?? ''}`}>{letter}</div>
        ))}</div>
      ))}
    </div>
  );
}

export default Keyboard;
