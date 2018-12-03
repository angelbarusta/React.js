import React from 'react';
import './progressbar.css';

const ProgressBar = (props) => {
    return(
        <div className= "ProgresBar">
            <input
            type="range"
            min={0}
            max={props.duration}
            value={props.value}
            onChange={props.handleProgressChange}
            />
        </div>
    )
}
export default ProgressBar;