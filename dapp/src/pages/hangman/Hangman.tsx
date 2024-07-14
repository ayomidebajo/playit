import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import { buttonStyles } from '@gear-js/ui';

const words: string[] = ['javascript', 'react', 'typescript', 'coding', 'programmer'];

const getRandomWord = (): string => {
  return words[Math.floor(Math.random() * words.length)].toUpperCase();
};

const Hangman: React.FC = () => {
	const className = clsx(buttonStyles.button, buttonStyles.primary, buttonStyles.medium);

  const [word, setWord] = useState<string>(getRandomWord());
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const [incorrectGuesses, setIncorrectGuesses] = useState<number>(0);
  const [gameWon, setGameWon] = useState<boolean>(false);
  const [gameOver, setGameOver] = useState<boolean>(false);

  const maxGuesses: number = 9;

  const handleGuess = (letter: string): void => {
	setIncorrectGuesses((prev: number) => (prev += 1));
    if (!guessedLetters.includes(letter)) {
      setGuessedLetters((prev: string[]) => [...prev, letter]);
      if (!word.includes(letter)) {
      }
    }
  };

  const checkWin = (): void => {
    const wordLetters: string[] = word.split('');
    const filteredLetters: string[] = wordLetters.filter((letter) => guessedLetters.includes(letter));
    if (filteredLetters.length === wordLetters.length) {
      setGameWon(true);
    }
  };

  const checkGameOver = (): void => {
    if (incorrectGuesses >= maxGuesses) {
      setGameOver(true);
    }
  };

  useEffect(() => {
    checkWin();
    checkGameOver();
  }, [guessedLetters, incorrectGuesses]);

  const renderWord = (): string => {
    return word
      .split('')
      .map((letter: string) => (guessedLetters.includes(letter) ? letter : '_'))
      .join(' ');
  };

  const handleRestart = (): void => {
    setWord(getRandomWord());
    setGuessedLetters([]);
    setIncorrectGuesses(0);
    setGameWon(false);
    setGameOver(false);
  };

  return (
    <div className="App">
      <h1>Hangman Game</h1>
      <p>Guess the word:</p>
      <p>{renderWord()}</p>
      <p>Incorrect guesses: {incorrectGuesses}</p>
      <div>
        {'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map((letter: string, index: number) => (
          <button
            key={index}
            onClick={() => handleGuess(letter)}
            disabled={guessedLetters.includes(letter) || gameWon || gameOver}>
            {letter}
          </button>
        ))}
      </div>
      {gameWon && <p>Congratulations! You've won!</p>}
      {gameOver && <p>Game Over! The word was: {word}</p>}
      {(gameWon || gameOver) && <button className={className} onClick={handleRestart}>Restart</button>}
    </div>
  );
};

export default Hangman;
