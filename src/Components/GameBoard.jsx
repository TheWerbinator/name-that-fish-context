import "./styles/game-board.css";
import React, {useState} from "react";
import { Images } from "../assets/images";
import { useAppContext } from "../../app.context";

// ! Do not add props to gameboard
export const GameBoard = () => {
  const {correctCount, incorrectCount, setCorrectCount, setIncorrectCount, fish, setFish} = useAppContext();
  const [fishGuess, setFishGuess] = useState('');
  const [gameOn, setGameOn] = useState(true);

  const compareFish = (e) => {
    e.preventDefault();
    fishGuess === fish[0].name ? setCorrectCount(correctCount + 1) : setIncorrectCount(incorrectCount + 1);
    if (fish.length > 1) {
      setFish(fish.slice(1));
      setFishGuess('');
    } else {
      setGameOn(false);
      setFish(fish.slice(1));
    }
  }

  return (
    <>
      {gameOn ? 
        <div className="gameboard-wrapper">
          <img src={fish[0].url} alt="Fish" />
          <h4>What is the name of this fish?</h4>
          <form onSubmit={(e) => compareFish(e)}>
            <input type="text" placeholder="Name this fish here..." value={fishGuess} onChange={(e) => setFishGuess(e.target.value)} />
            <input type="submit" />
          </form>
        </div>
      : <div className="finish-screen">
          <h2>Your Final Score Was</h2>
          <h2>{correctCount}/4</h2>
        </div>}
    </>
  )
}
