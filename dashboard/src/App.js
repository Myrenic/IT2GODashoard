// App.js

import React from 'react';
import './App.css';

function App() {
  return (
    <div className="container">
      <div className="header-section">
        <h1>Welcome to My App</h1>
        <p>Some introductory text here.</p>
      </div>
      <div className="button-grid">
        <button className="middle-button" onClick={() => handleButtonClick(1)}>Button 1</button>
        <button className="middle-button" onClick={() => handleButtonClick(2)}>Button 2</button>
        <button className="middle-button" onClick={() => handleButtonClick(3)}>Button 3</button>
        <button className="middle-button" onClick={() => handleButtonClick(4)}>Button 4</button>
      </div>
      <div className="footer-section">
        <p>The world leader in serving science</p>
      </div>
    </div>
  );
}

function handleButtonClick(buttonNumber) {
  console.log(`Button ${buttonNumber} clicked`);
  // Add your logic here to send POST request or perform other actions
}

export default App;
