import { useCallback, useEffect, useState } from 'react';
import './App.css';
function App() {


  const scoreArray = [];
  for(let i = 0; i < 9; i++) {
      scoreArray[i] = "";
    }
  
  const [playerOne , setPlayerOne] = useState(true);
  const [playerTwo , setPlayerTwo] = useState(false);
  const [score , setScore] = useState(scoreArray);
  const [winner, setWinner] = useState("No Winner");
  const [winnerSectionsIndex, setWinnerSectionsIndex] = useState([]);
  
  const onClickHandler = (e, arg) => {

    if(winner === "No Winner") {
      if (playerOne) {
        setPlayerOne(false);
        setPlayerTwo(true);
  
        const newScore = score.map((item, index) => {
          if (index === arg - 1 && item === "") {
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
          if (index === arg - 1 && item === "") {
            return item = 1;
          }
          else {
            return item;
          }
        })
        setScore(newScore)
      }
    }

  }

  useEffect(() => {
    let i = 0; 
   while(i < 7) {
    if (score[i] === score[i+1] && score[i] === score[i+2] && score[i] !== "") {
      setWinner(playerOne ? "Player Two" : "Player One")
      setWinnerSectionsIndex([i, i+1, i+2]);
      break;
    }
    i = i + 3;
   }

   let j = 0;
   while(j < 3) {
    if (score[j] === score[j+3] && score[j] === score[j+6] && score[j] !== "") {
      setWinner(playerOne ? "Player Two" : "Player One");
      setWinnerSectionsIndex([j, j+3, j+6]);
      break;
    }
    j = j + 1;
   }

   let k = 0;
   if (score[k] === score[k+4] && score[k+4] === score[k+8] && score[k+4] !== "") {
    setWinner(playerOne ? "Player Two" : "Player One");
    setWinnerSectionsIndex([k, k+4, k+8]);
    }
   else if (score[k+2] === score[k+4] && score[k+4] === score[k+6] && score[k+4] !== "") {
    setWinner(playerOne ? "Player Two" : "Player One");
    setWinnerSectionsIndex([k+2, k+6, k+4]);
   }
  }, [score])

  const getSectionsStyle = (buttonNumber) => {
    if (winnerSectionsIndex.includes(buttonNumber)) {
      return { backgroundColor: '#C27664', transition: '2s'}
    }
    else {
      return { backgroundColor: '' }
    }
  }

  return (
    <>
    <div className="gameBoard">
      {winner === "No Winner" ?  <div className='showWinner'>{`Next move: ${playerOne ? "Player One" : "Player Two"}`}</div> :
      <div className='showWinner'>Winner: {winner}</div>
      }
      <div className='boardRow'>
        <button className='boardSection' style={getSectionsStyle(0)} onClick={(e) => onClickHandler(e, 1)}>{score[0]}</button>
        <button className='boardSection' style={getSectionsStyle(1)} onClick={(e) => onClickHandler(e, 2)}>{score[1]}</button>
        <button className='boardSection' style={getSectionsStyle(2)} onClick={(e) => onClickHandler(e, 3)}>{score[2]}</button>
      </div>
      <div className='boardRow'>
        <button className='boardSection' style={getSectionsStyle(3)} onClick={(e) => onClickHandler(e, 4)}>{score[3]}</button>
        <button className='boardSection' style={getSectionsStyle(4)} onClick={(e) => onClickHandler(e, 5)}>{score[4]}</button>
        <button className='boardSection' style={getSectionsStyle(5)} onClick={(e) => onClickHandler(e, 6)}>{score[5]}</button>
      </div>
      <div className='boardRow'>
        <button className='boardSection' style={getSectionsStyle(6)} onClick={(e) => onClickHandler(e, 7)}>{score[6]}</button>
        <button className='boardSection' style={getSectionsStyle(7)} onClick={(e) => onClickHandler(e, 8)}>{score[7]}</button>
        <button className='boardSection' style={getSectionsStyle(8)}onClick={(e) => onClickHandler(e, 9)}>{score[8]}</button>
      </div>
    </div>
    </>
  );
}

export default App;
