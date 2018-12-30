import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


let gameCanvas;

document.addEventListener('DOMContentLoaded', () => {
  gameCanvas = document.querySelector('canvas');
  gameCanvas.width = 900;
  gameCanvas.height = 900;

  ReactDOM.render(<App />, document.getElementById('root'));
});

const canvas = gameCanvas;
export default canvas;
