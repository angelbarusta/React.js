
// Los componentes siempre empiezan en mayuscula
import React from 'react';
import { render } from 'react-dom';
import Home from '../pages/containers/home';
//import Playlist from './src/playlist/components/playlist';
//import data from './src/api.json';


//console.log('Hola mundo')

const app = document.getElementById('app');

//const holamundo = <h1>AZ-Tech!!</h1>;

//ReactDOM.render(que voy a realizar, en dónde lo haré);
//render(<Playlist data={data}/>, app);
render(<Home />, app)