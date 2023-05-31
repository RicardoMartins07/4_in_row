import React, {useState} from "react";


function Scoreboard(props) {

    
    return (
      <div className="scoreboard">
      <div className="scoreboard_name_1">
        <p>Player 1</p></div>
        <div className="scoreboard_name_2">
        <p>Player 2</p></div>
       
      
      <div className="scoreboard_score_1">
        <p>{props.P1Score}</p></div>
        <div className="scoreboard_score_2">
        <p>{props.P2Score}</p></div>
      
      </div>
    );
  }
  
  export default Scoreboard;