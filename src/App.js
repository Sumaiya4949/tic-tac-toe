import { useState } from 'react';
import './App.css';
function App() {
  const [playerOne , setPlayerOne] = useState(true);
  const [playerTwo , setPlayerTwo] = useState(false);
  const [score , setScore] = useState([]);

  const scoreArray = [];
  scoreArray.length = 9;

  const onClickHandler = (e, arg) => {

    if (playerOne) {
      setPlayerOne(false);
      setPlayerTwo(true);

      for(let i = 0; i < scoreArray.length; i++) {
        if (i === arg - 1) {
          scoreArray[i] = 0;
        }
      }
      setScore(scoreArray);
    }
    else {
      setPlayerTwo(false); 
      setPlayerOne(true);

      for(let i = 0; i < scoreArray.length; i++) {
        if (i === arg - 1) {
          scoreArray[i] = 1;
        }
      }
      setScore(scoreArray);
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
