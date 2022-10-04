// CSS
import './App.css';

// React
import { useCallback, useEffect, useState } from 'react';

// Data
import { wordsList } from './data/words.js';

// Components
import StartScreen from './components/StartScreen';
import Game from './components/Game';
import GameOver from './components/GameOver';

const stages = [
  {id: 1, name: 'start'},
  {id: 2, name: 'game'},
  {id: 3, name: 'end'},
];

const pickedCategoryAndWord = (words) => {
  // Pick category
  const categories = Object.keys(words[0]);
  const pickedCategory = categories[Math.floor(Math.random() * categories.length)];

  // Pick word
  const wordsInCategory = words[0][pickedCategory];
  const pickedWord = wordsInCategory[Math.floor(Math.random() * wordsInCategory.length)];

  return { pickedCategory, pickedWord };
}

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name);
  const words = useState(wordsList);

  const [pickedCategory, setPickedCategory] = useState('');
  const [pickedWord, setPickedWord] = useState('');
  const [letters, setLetters] = useState('');

  const startGame = () => {
    const { pickedCategory, pickedWord } = pickedCategoryAndWord(words);

    // split letters
    let wordLetters = pickedWord.split('');
    wordLetters = wordLetters.map((l) => l.toLowerCase());

    setGameStage(stages[1].name);
  }

  const verifyLetter = () => {
    setGameStage(stages[2].name);
  }

  const retry = () => {
    setGameStage(stages[0].name);
  }

  return (
    <div className="App">
      {gameStage === 'start' && <StartScreen startGame={startGame} />}
      {gameStage === 'game' && <Game verifyLetter={verifyLetter} />}
      {gameStage === 'end' && <GameOver retry={retry} />}
    </div>
  );
}

export default App;
