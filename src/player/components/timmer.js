import React from 'react';
import './timmer.css';

const leftPad = (number)=> {
    const pad ='00'; 
    return pad.substring(0,pad.length - number.length) + number;
}

const formattedTime =(secs)=> {
    const minutes = parseInt(secs / 60, 10)
    const seconds = parseInt(secs % 60, 10)

    return `${minutes} : ${leftPad(seconds.toString())}`
}

const Timmer =(props)=> (
    <div className="Timmer">
     <p>
         <span> {formattedTime(props.currentTime)}/ {formattedTime(props.duration)} </span>
     </p>

    </div>
)
export default Timmer;