import "./styles/score-board.css";
import React from "react";
import { useAppContext } from "../../app.context";

// ! do not add props to scoreboard
export const ScoreBoard = () => {
  const {fish, correctCount, incorrectCount} = useAppContext();
  
  return (
    <div className="scoreboard-wrapper">
      <h2>Correct✅: {correctCount}</h2>
      <div className="fish-possibilities">
        {fish.length ? <h3>Possible Guesses</h3> : null}
        <div className="fish-tally">
          {fish.map((f) => <div className="fish-name" key={f.name}><h2>{f.name}</h2></div> )}
        </div>
      </div>
      <h2>Incorrect❌: {incorrectCount}</h2>
    </div>
  )
}
