import React, {useState} from "react";




function Column(props) {
  


    return (
      <>
      <div className="column" id={props.idColumn} data-x={props.data} onClick={props.onColumnClick}>
		<svg height="100" width="100" className="row-5">
		  <circle className="free" cx="50" cy="50" r="40" stroke="#0B4E72" strokeWidth="3" />
		</svg> 
		<svg height="100" width="100" className="row-4">
		  <circle cx="50" cy="50" r="40" stroke="#0B4E72" strokeWidth="3" className="free" />
		</svg> 
		<svg height="100" width="100" className="row-3">
		  <circle cx="50" cy="50" r="40" stroke="#0B4E72" strokeWidth="3" className="free" />
		</svg> 
		<svg height="100" width="100" className="row-2">
		  <circle cx="50" cy="50" r="40" stroke="#0B4E72" strokeWidth="3" className="free" />
		</svg> 
		<svg height="100" width="100" className="row-1">
		  <circle cx="50" cy="50" r="40" stroke="#0B4E72" strokeWidth="3" className="free" />
		</svg> 
		<svg height="100" width="100" className="row-0">
		  <circle cx="50" cy="50" r="40" stroke="#0B4E72" strokeWidth="3" className="free" />
		</svg> 
	</div>
      </>
      
    );
  }
  
  export default Column;