import React from 'react';
import Play from '../../icons/components/play';
import Pause from '../../icons/components/pause';


const PlayPause =(props)=> {
    return (
        <div className="PlayPause">
        {
            props.pause  ? // si pausado esta true
            <button
              onClick={props.handleClick}
            >
                <Play size={25} color="white" />
            </button>
            :                // si no lo esta
            <button         
            onClick={props.handleClick}
            >
                <Pause size={25} color="white"/>
            </button>   
        }
        
        </div>
    )
}
export default PlayPause;