import React, { useState, useEffect } from 'react';
import { wordOptions } from '../data/words.js';
import './HangmanGame.css';

const HangmanGame = () => {
  const [selected, setSelected] = useState(null);
  const [displayed, setDisplayed] = useState([]);
  const [wrongGuesses, setWrongGuesses] = useState([]);
  const [guessInput, setGuessInput] = useState('');
  const [fullGuess, setFullGuess] = useState('');
  const [status, setStatus] = useState('playing');

  useEffect(() => {
    const choice = wordOptions[
      Math.floor(Math.random() * wordOptions.length)
    ];
    setSelected(choice);
    setDisplayed(Array(choice.word.length).fill('_'));
  }, []);

  const handleLetterGuess = (e) => {
    e.preventDefault();
    if (!selected || status !== 'playing') return;
    const letter = guessInput.toLowerCase();
    setGuessInput('');

    if (selected.word.includes(letter)) {
      const updated = displayed.map((ch, i) =>
        selected.word[i] === letter ? letter : ch
      );
      setDisplayed(updated);
      if (!updated.includes('_')) setStatus('won');
    } else {
      setWrongGuesses([...wrongGuesses, letter]);
      if (wrongGuesses.length + 1 >= 6) setStatus('lost');
    }
  };

  const handleFullGuess = (e) => {
    e.preventDefault();
    if (!selected || status !== 'playing') return;

    if (fullGuess.toLowerCase() === selected.word) {
      setDisplayed(selected.word.split(''));
      setStatus('won');
    } else {
      setWrongGuesses([...wrongGuesses, fullGuess]);
      setStatus('lost');
    }
    setFullGuess('');
  };

  if (!selected) return <p>Loading...</p>;

  return (
    <div className="hangman-game">
      <h2>Mystic Hangman</h2>
      <p className="hint">Hint: {selected.hint}</p>
      <p className="word">{displayed.join(' ')}</p>
      <p className="wrong-guesses">Wrong: {wrongGuesses.join(', ')}</p>

      {status === 'playing' && (
        <>
          <form onSubmit={handleLetterGuess} className="form-wrapper">
            <label>
              Guess Letter:
              <input
                maxLength={1}
                value={guessInput}
                onChange={(e) => setGuessInput(e.target.value.toLowerCase())}
                required
              />
            </label>
            <button type="submit">Guess</button>
          </form>

          <form onSubmit={handleFullGuess} className="form-wrapper">
            <label>
              Guess Word:
              <input
                value={fullGuess}
                onChange={(e) => setFullGuess(e.target.value)}
                required
              />
            </label>
            <button type="submit">Submit</button>
          </form>
        </>
      )}

      {status === 'won' && (
        <p className="result">🎉 You won! The word was {selected.word}.</p>
      )}
      {status === 'lost' && (
        <p className="result">😞 You lost. The word was {selected.word}.</p>
      )}

      <button onClick={() => window.location.reload()}>Play Again</button>
    </div>
  );
};

export default HangmanGame;