import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.querySelector('canvas');
  canvas.width = 900;
  canvas.height = 900;

  ReactDOM.render(<App />, document.getElementById('root'));
});
