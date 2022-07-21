import React, { useState } from 'react';
import './App.css';

function App() {

  const [color, setColor] = useState('red');
  const [disabled, setDisabled] = useState(false);

  const newColor = color === 'red' ? 'blue' : 'red' 
  
  const changeColor = () => {
    setColor(newColor)
  }

  return (
    <div className="App">
      <div>
        <button
          onClick={changeColor}
          style={{backgroundColor: color, color: 'white'}} 
          disabled={disabled}>Change to {newColor}
        </button>
      </div>
      <div><input
        type='checkbox'
        id='enable-button-checkbox'
        defaultChecked={disabled}
        aria-checked={disabled}
        onChange={(e) => setDisabled(e.target.checked)}
      /></div>
    </div>
  );
}

export default App;
