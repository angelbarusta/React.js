import React from 'react';
import Logo from '../../imagenes/az_tech_logo.png';
import './related.css';

  const Related =(props)=>{
    return(
        <div className="Related">
            <img  className="Related-img" src={Logo} width={100} height={100}/>
        </div>
    )
}
export default Related;