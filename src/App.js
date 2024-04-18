import React, { useMemo, useState } from 'react'
import './App.css'

function App() {
  const [weight, setweight] = useState(60);
  const [height, setheight] = useState(160)

  function handleWeight(event){
    setweight(event.target.value);
  }

  function handleHeight(event){
    setheight(event.target.value)
  }

  // Use memo is used for optimization
  // Tips: Use UseMemo only when there is some calculation regarding height and weight etc.
  const output = useMemo(() => {
    const calculateHeight = height / 100;

    return (weight/(calculateHeight * calculateHeight)).toFixed(1);
  },[weight, height])

  return (
    <main>
      <h1>Project: BMI CALCULATOR</h1>
      <div className="input-section">
        <p className='slider-output'>Weight: {weight}Kg</p>
        <input className='input-silder' type='range' step="1" min="40" max="200" onChange={handleWeight} />

        <p className='slider-output'>Height: {height} cm</p>
        <input type='range' className='input-slider' onChange={handleHeight} min={140} max={220}/>

      </div>
      <div className='output-section'>
        <p>Your BMI is: </p>
        <p className='output'>{output}</p>
      </div>

    </main>
  )
}

export default App
