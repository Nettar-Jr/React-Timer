import React from 'react';
import './DisplayTimer.css';

export default function DisplayTimer(props) {
    return (
        <div className="timer-input-container">
           <ul className="timer-input">
               <li>{("0" + Math.floor((props.time / 360000) % 60)).slice(-2) + ":"} </li>
               <li>{("0" + Math.floor((props.time / 60000) % 60)).slice(-2) + ":"} </li>
               <li>{("0" + Math.floor((props.time / 1000) % 60)).slice(-2) }</li>
               <li className="milSec">{("0" + Math.floor((props.time / 100) % 60)).slice(-2)} </li>             
           </ul>
        </div>
    )
}
