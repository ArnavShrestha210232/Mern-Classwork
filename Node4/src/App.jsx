import React from 'react'; // Added import statement for React
import { useState } from 'react';



const App=() => {
  const [counter, setCounter] = useState(0)

  const increaseByOne = () => setCounter(counter + 1)

    const descreaseByOne = () => setCounter(counter - 1)



  const setToSeven=()=> setCounter(7)
  
  const setToZero=()=> setCounter(0)
  return (
    <div>
      <div>{counter}</div>
      <button onClick={increaseByOne}>plus</button>
      <button onClick={setToSeven}>SEVEN</button>
    
      <button onClick={setToZero}>zero</button>
      
      <button onClick={descreaseByOne}>minus
      </button>
    </div>
  )
}

export default App
