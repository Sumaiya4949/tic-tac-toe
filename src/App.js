import { useState } from 'react';
import './App.css';
function App() {


  const scoreArray = [];
  for(let i = 0; i < 9; i++) {
      scoreArray[i] = "";
    }
  
  const [playerOne , setPlayerOne] = useState(true);
  const [playerTwo , setPlayerTwo] = useState(false);
  const [score , setScore] = useState(scoreArray);
  
  const onClickHandler = (e, arg) => {

    if (playerOne) {
      setPlayerOne(false);
      setPlayerTwo(true);

      const newScore = score.map((item, index) => {
        if (index === arg - 1) {
          return item = 0;
        }
        else {
          return item;
        }
      })
      setScore(newScore);
    }
    else {
      setPlayerTwo(false); 
      setPlayerOne(true);

      const newScore = score.map((item, index) => {
        if (index === arg - 1) {
          return item = 1;
        }
        else {
          return item;
        }
      })
      setScore(newScore)
    }
  }

  return (
    <div className="gameBoard">
      <div>
        <button className='boardSection' onClick={(e) => onClickHandler(e, 1)}>{score[0]}</button>
        <button className='boardSection' onClick={(e) => onClickHandler(e, 2)}>{score[1]}</button>
        <button className='boardSection' onClick={(e) => onClickHandler(e, 3)}>{score[2]}</button>
      </div>
      <div>
        <button className='boardSection' onClick={(e) => onClickHandler(e, 4)}>{score[3]}</button>
        <button className='boardSection' onClick={(e) => onClickHandler(e, 5)}>{score[4]}</button>
        <button className='boardSection' onClick={(e) => onClickHandler(e, 6)}>{score[5]}</button>
      </div>
      <div>
        <button className='boardSection' onClick={(e) => onClickHandler(e, 7)}>{score[6]}</button>
        <button className='boardSection' onClick={(e) => onClickHandler(e, 8)}>{score[7]}</button>
        <button className='boardSection' onClick={(e) => onClickHandler(e, 9)}>{score[8]}</button>
      </div>
    </div>
  );
}

export default App;
