import React from 'react';
import HangmanGame from '../../components/HangmanGame.jsx';

const GamePage = () => {
  return (
    <div className="game-page">
      <h1>Play Mystic Hangman</h1>
      <HangmanGame />
    </div>
  );
};

export default GamePage;