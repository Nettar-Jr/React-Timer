import React from 'react';
import { FaPlay, FaPause, FaRedoAlt } from 'react-icons/fa';
import './TimerBtn.css';

export default function TimerBtn(props) {

    let btnStyle = { color: "black", fontSize: "inherit" };

    return (
        <div className="timer-button">
            { props.displayActive ? 
            <>
            <span style={btnStyle}
            onClick={props.pause}>
                {props.displayPaused ? 
                <FaPlay onClick={props.pause} /> : 
                <FaPause onClick={props.pause} />}
            </span>
            <span style={btnStyle}>
                <FaRedoAlt onClick={props.reset} />
            </span>
            </> :
            <span style={btnStyle}>
                <FaPlay   onClick={props.start} />
            </span>
            }
        </div>
    )
}

