import React from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
    </header>

    <main>
      <canvas style={{ border: '1px solid black' }} />
    </main>
  </div>
);

export default App;
