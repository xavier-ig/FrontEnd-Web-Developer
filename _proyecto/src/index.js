/*
  Autor: Javier Ibarra
  v1.0  fecha: 2022-04-24   Proyecto Módulo 3: Curso Front End Web Developer BEDU-UTM
*/

//Importa las funciones, css e imgágen
import { loadImage } from './utils';
import { searchProfilePSN } from './utils';
import './css/index.css';
import imgCenter from './images/home.jpeg';

//Agrega imagen dentro del DIV imgCenter
document.getElementById('imgCenter').appendChild(loadImage(imgCenter));

//Obtener el input y el botón
let psnProfile = document.getElementById('psnProfile');
let btnSearchProfile = document.getElementById('btnSearchProfile');

//Evento se detona al dar clic en el botón
btnSearchProfile.addEventListener('click', () => { searchProfilePSN(psnProfile.value)  });

//Evento se detona al dar enter en el input
psnProfile.addEventListener('keydown', (event) => { if(event.key === 'Enter') searchProfilePSN(psnProfile.value);});
