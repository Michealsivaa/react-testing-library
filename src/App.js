import React, { useState } from 'react';
import './App.css';

export function replaceCamelWithSpaces(colorName){
    return colorName.replace(/\B([A-Z])\B/g, ' $1');
}

function App() {

  const [color, setColor] = useState('MediumVioletRed');
  const [disabled, setDisabled] = useState(false);

  const newColor = color === 'MediumVioletRed' ? 'MidnightBlue' : 'MediumVioletRed' 
  
  const changeColor = () => {
    setColor(newColor)
  }

  return (
    <>
    <div className="App">
      <div>
        <button
          onClick={changeColor}
          style={{backgroundColor: disabled ? 'grey' : color}} 
          disabled={disabled}>Change to {newColor}
        </button>
      </div>
      <div>
          <input
          type='checkbox'
          id='enable-button-checkbox'
          defaultChecked={disabled}
          aria-checked={disabled}
          onChange={(e) => setDisabled(e.target.checked)}
        />
        <label htmlFor="enable-button-checkbox" >Disabled button</label>
      </div>
    </div>
    </>
  );
}

export default App;
