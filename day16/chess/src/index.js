import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
function Chessboard(){
  return (
    <div className="chessboard">
     <Evenline/>
     <Oddline/>
     <Evenline/>
     <Oddline/>
     <Evenline/>
     <Oddline/>
     <Evenline/>
     <Oddline/>
    </div>
  )
}
const Evenline=()=>{
  //0's black
  return(
    <div className="evenline">  
    {/* <p>Evenline</p> */}
   <div className="zero"></div>
   <div className="one"></div>
   <div className="zero"></div>
   <div className="one"></div>
   <div className="zero"></div>
   <div className="one"></div>
   <div className="zero"></div>
   <div className="one"></div>
   </div>
 
  )
}
const Oddline=()=>{
  //even white
  return(
    <div className="oddline">
   {/* <p>Oddline</p> */}
   <div className="even"></div>
   <div className="odd"></div>
    <div className="even"></div>
   <div className="odd"></div>
    <div className="even"></div>
   <div className="odd"></div>
    <div className="even"></div>
   <div className="odd"></div>
   </div>
  )
}

ReactDOM.render(
 <Chessboard/>,
  document.getElementById('root')
);
