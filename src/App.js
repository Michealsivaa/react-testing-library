import React, { useState } from 'react';
import './App.css';

function App() {

  const [color, setColor] = useState('red');
  const newColor = color === 'red' ? 'blue' : 'red' 
  
  const changeColor = () => {
    setColor(newColor)
  }

  return (
    <div className="App">
      <div>
        <button onClick={changeColor} style={{backgroundColor: color}}>Change to {newColor}</button>
      </div>
    </div>
  );
}

export default App;
