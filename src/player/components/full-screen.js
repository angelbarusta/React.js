import React from 'react';
import FullScreenIcon from '../../icons/components/fullscreem.js'
import './full-screen.css';

const FullScreen = (props) => (
  <div
    className="FullScreenstylo"
    onClick={props.handleFullScreenClick}
  >
    <FullScreenIcon
      size={25}
      color="white"
    />
  </div>
)

export default FullScreen;