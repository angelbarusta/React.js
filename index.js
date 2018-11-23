
// Los componentes siempre empiezan en mayuscula
import React from 'react';
import { render } from 'react-dom';
import Media from './src/playlist/componentes/media';

//console.log('Hola mundo')

const app = document.getElementById('app');

//const holamundo = <h1>AZ-Tech!!</h1>;

//ReactDOM.render(que voy a realizar, en dónde lo haré);
render(<Media/>, app);