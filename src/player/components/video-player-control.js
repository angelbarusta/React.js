import React from 'react';
import './video-player-control.css';


const VideoPlayerControl =(props)=> {
    return (
        <div className="VideoPlayerControl"> 
           {props.children}
        </div>
    )
}
export default VideoPlayerControl;