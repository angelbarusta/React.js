import React from 'react';
import './VideoPlayerLayout.css';

const VideoPlayerLayout = (props) => (
    <div 
    className="Video-Player"
    ref={props.setRef}
    >
       {props.children}
    </div>
)
export default VideoPlayerLayout;


