import React, {useState} from "react";


function Button(props) {

    
    return (
        <button onClick={props.onClick} className="ButtonNewGame" style={props.finish ? { display: "block" } :{ display: "none" }  } >New Game</button>
    );
  }
  
  export default Button;