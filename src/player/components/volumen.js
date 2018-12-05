import React from 'react';
import VolumenIcon from '../../icons/components/volumen';
import './volumen.css';

const Volumen =(props)=> {
    return(

        <button
          className="Volumenstylo"
         >
           <VolumenIcon
             color ="white"
             size ={25}
           />

          <div className="Volumen-range">

               <input 
                 type="range"
                 min={0}
                 max={1}
                 step={.005} 
                 onChange={props.handleVolumenChange}
                />

           </div>

        </button>
    )
}
    

export default Volumen;