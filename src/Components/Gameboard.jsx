import React, {useState} from "react";
import Column from "./Column";
import Scoreboard from "./Scoreboard";
import Button from "./Button";




function Gameboard() {
    const [ScoreP1, setScoreP1] = useState(0); 
    const [ScoreP2, setScoreP2] = useState(0);
    const [redIsNext, setXIsNext] = useState(true); 
    const numRows = 6;
	const numCols = 7;
    const [gameBoard, setGameBoard] = useState(Array(numCols).fill(0));
    const [finish,setFinish] = useState(false);
    const [result,setResult] = useState(''); // Dynamically show who won
    const [matrix,setMatrix] = useState([
        ['0', '1', '2', '3', '4', '5', '6'],
        ['7', '8', '9', '10', '11', '12', '13'],
        ['14', '15', '16', '17', '18', '19', '20'],
        ['21', '22', '23', '24', '25', '26', '27'],
        ['28', '29', '30', '31', '32', '33', '34'],
        ['1', '2', '3', '4', '5', '6', '7'],
      ]);
        
    

    function handleClick(i){
        if(finish) return;
      const nextGameboard = gameBoard.slice(); // create an copy of the array gameboard created above
      const row = GetFreeSpace(nextGameboard,i)
      const MatrixPlays = matrix.slice();

      if (row === null || CheckWinner(MatrixPlays)){return;}

      if(redIsNext){
            
        MatrixPlays[row][i] = 'r';
        document.querySelector('#column-'+i+' .row-'+row+' circle').setAttribute("class","red") // Define Color 
   }
   else{

        MatrixPlays[row][i] = 'y';
        document.querySelector('#column-'+i+' .row-'+row+' circle').setAttribute("class","yellow") // Define Color 

   }

      if(CheckWinner(MatrixPlays)){
        redIsNext ? setScoreP1(ScoreP1 + 1 )  : setScoreP2(ScoreP2+1) ;
        redIsNext ? setResult("Player 1 Wins") : setResult("Player 2 Wins");
        setFinish(true);
        return;
    }
      
      
    
       setXIsNext(!redIsNext); // Define who plays next
       setGameBoard(nextGameboard);
       setMatrix(MatrixPlays)
    }

    function GetFreeSpace(nextGameboard,i){
        if(!finish){
        if(nextGameboard[i] !=6){
            const RowID = nextGameboard[i];
            nextGameboard[i] = nextGameboard[i] +1;
            setGameBoard(nextGameboard);
            return RowID;
        }
            alert('No free spaces in this column. Try another.');
            return null;
    }
            
            return null;
        
    }

    function CheckWinner(MatrixPlays){

        // Verificação das linhas
    for (let row = 0; row < MatrixPlays.length; row++) {
        for (let col = 0; col <= MatrixPlays[row].length - 4; col++) {
          if (
            MatrixPlays[row][col] === MatrixPlays[row][col + 1] &&
            MatrixPlays[row][col] === MatrixPlays[row][col + 2] &&
            MatrixPlays[row][col] === MatrixPlays[row][col + 3]
          ) {
            return matrix[row][col];
          }
        }
      }
  
      // Verificação das colunas
      for (let col = 0; col < MatrixPlays[0].length; col++) {
        for (let row = 0; row <= MatrixPlays.length - 4; row++) {
          if (
            MatrixPlays[row][col] === MatrixPlays[row + 1][col] &&
            MatrixPlays[row][col] === MatrixPlays[row + 2][col] &&
            MatrixPlays[row][col] === MatrixPlays[row + 3][col]
          ) {
            return matrix[row][col];
          }
        }
      }
  
      // Verificação das diagonais principais (top-left para bottom-right)
      for (let row = 0; row <= MatrixPlays.length - 4; row++) {
        for (let col = 0; col <= MatrixPlays[row].length - 4; col++) {
          if (
            MatrixPlays[row][col] === MatrixPlays[row + 1][col + 1] &&
            MatrixPlays[row][col] === MatrixPlays[row + 2][col + 2] &&
            MatrixPlays[row][col] === MatrixPlays[row + 3][col + 3]
          ) {
            return matrix[row][col];
          }
        }
      }
  
      // Verificação das diagonais secundárias (top-right para bottom-left)
      for (let row = 0; row <= MatrixPlays.length - 4; row++) {
        for (let col = 3; col < MatrixPlays[row].length; col++) {
          if (
            MatrixPlays[row][col] === MatrixPlays[row + 1][col - 1] &&
            MatrixPlays[row][col] === MatrixPlays[row + 2][col - 2] &&
            MatrixPlays[row][col] === MatrixPlays[row + 3][col - 3]
          ) {
            return matrix[row][col];
          }
        }
      }
      
      
      return false;
    };

    function handleClickButton(){
        const gameClean = gameBoard.slice(); 
        console.log(gameBoard);
       
        for(let y = 0; y < numCols; y++){
            for(let x=0; x < numRows; x++){
              document.querySelector('#column-'+y+' .row-'+x+' circle').setAttribute("class","free") // Define Color 
            }
            
        }
        setGameBoard(Array(numCols).fill(0));
        setFinish(false);
        setResult('');
        setMatrix([
            ['0', '1', '2', '3', '4', '5', '6'],
            ['7', '8', '9', '10', '11', '12', '13'],
            ['14', '15', '16', '17', '18', '19', '20'],
            ['21', '22', '23', '24', '25', '26', '27'],
            ['28', '29', '30', '31', '32', '33', '34'],
            ['1', '2', '3', '4', '5', '6', '7'],
          ]);
    }
    

    return (
        <>
        <Scoreboard P1Score={ScoreP1} P2Score={ScoreP2}/>
      <div id="game-board">
        <Column idColumn = "column-0" data="0" onColumnClick={() => handleClick(0)}/>
        <Column idColumn = "column-1" data="1" onColumnClick={() => handleClick(1)}/>
        <Column idColumn = "column-2" data="2" onColumnClick={() => handleClick(2)}/>
        <Column idColumn = "column-3" data="3" onColumnClick={() => handleClick(3)}/>
        <Column idColumn = "column-4" data="4" onColumnClick={() => handleClick(4)}/>
        <Column idColumn = "column-5" data="5" onColumnClick={() => handleClick(5)}/>
        <Column idColumn = "column-6" data="6" onColumnClick={() => handleClick(6)}/>
      </div>
      <p className="Result" style={redIsNext ? { color: "dodgerblue" } : { color: "#ff4c4c" } }>{result}</p>
      <Button finish={finish} onClick={() => handleClickButton()}/>
      </>
      
    );
}
  
  export default Gameboard;


  