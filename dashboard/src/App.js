import React from 'react';
import './App.css';  // Import your CSS file for styling

function App() {
  return (
    <div className="button-grid">
      <button className='middle-button' onClick={() => handleButtonClick(1)}>Button 1</button>
      <button className='middle-button' onClick={() => handleButtonClick(2)}>Button 2</button>
      <button className='middle-button' onClick={() => handleButtonClick(3)}>Button 3</button>
      <button className='middle-button' onClick={() => handleButtonClick(4)}>Button 4</button>
    </div>
  );
}

function handleButtonClick(buttonNumber) {
  console.log(`Button ${buttonNumber} clicked`);
  // Add your logic here to send POST request or perform other actions
}

export default App;
