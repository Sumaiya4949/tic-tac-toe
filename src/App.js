import { useEffect, useState } from 'react';
import './App.css';
function App() {
  const [playerOne , setPlayerOne] = useState(true);
  const [playerTwo , setPlayerTwo] = useState(false);
  const [score , setScore] = useState([]);

  const onClickHandler = (e) => {
    if (playerOne) {
      setPlayerOne(false);
      setPlayerTwo(true);
      setScore((oldArry) => [...oldArry, 0] );
    }
    else {
      setPlayerTwo(false); 
      setPlayerOne(true);
      setScore((oldArry) => [...oldArry, 1] );
    }
  }

  return (
    <div className="gameBoard">
      <div>
        <button className='boardSection' value="1" onClick={onClickHandler}>{score[0]}</button>
        <button className='boardSection' value="2" onClick={onClickHandler}>{score[1]}</button>
        <button className='boardSection'  value="3" onClick={onClickHandler}>{score[2]}</button>
      </div>
      <div>
        <button className='boardSection' value="4" onClick={onClickHandler}>{score[3]}</button>
        <button className='boardSection' value="5" onClick={onClickHandler}>{score[4]}</button>
        <button className='boardSection' value="6" onClick={onClickHandler}>{score[5]}</button>
      </div>
      <div>
        <button className='boardSection' value="7" onClick={onClickHandler}>{score[6]}</button>
        <button className='boardSection' value="8" onClick={onClickHandler}>{score[7]}</button>
        <button className='boardSection' value="9" onClick={onClickHandler}>{score[8]}</button>
      </div>
    </div>
  );
}

export default App;
