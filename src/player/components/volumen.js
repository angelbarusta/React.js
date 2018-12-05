import React from 'react';
import VolumenIcon from '../../icons/components/volumen';
import './volumen.css';

const Volumen =(props)=> {
    return(

        <button
          className="Volumenstylo"
         >
          <div onClick={props.handleVolumenToggle}>
            <VolumenIcon
              color ="white"
              size ={25}
            />
          </div>

          <div className="Volumen-range">

               <input 
                 type="range"
                 min={0}
                 max={1}
                 step={.005} 
                 onChange={props.handleVolumenChange}
                 value={props.value}
                />

           </div>

        </button>
    )
}
    

export default Volumen;