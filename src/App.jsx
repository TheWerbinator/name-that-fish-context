import React from "react";
import "./App.css";
import { GameBoard } from "./Components/GameBoard";
import { ScoreBoard } from "./Components/ScoreBoard";
import { AppProvider, useAppContext } from "../app.context";
import "./Components/styles/final-score.css";

function App() {
  const { 
    fish, 
    setFish,
    correctCount, 
    setCorrectCount, 
    incorrectCount, 
    setIncorrectCount } = useAppContext();
  return (
    <AppProvider>
      <div className="App">
        <header>
          <ScoreBoard
          correctCount={correctCount} 
          incorrectCount={incorrectCount}
          fish={fish} />
          <GameBoard 
          correctCount={correctCount} 
          setCorrectCount={setCorrectCount}
          incorrectCount={incorrectCount} 
          setIncorrectCount={setIncorrectCount}
          fish={fish}
          setFish={setFish}/>
        </header>
      </div>
    </AppProvider>
  );
}

export default App;
