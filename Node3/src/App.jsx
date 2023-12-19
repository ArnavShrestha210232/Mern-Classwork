import React from 'react'; // Added import statement for React
import { useState } from 'react';



// const App = () => {
//   const [counter, setCounter] = useState(5)
  
//   setTimeout(
//     () => setCounter(counter + 15),
    
//     1000)
//   return <h1>{counter}</h1>
// }

const App = () => {
  const [counter, setCounter] = useState(10)
  
  // setTimeout(
  //   () => setCounter(counter + 15),
    
  //   1000)
  const handleClick = () => {
    setCounter(counter+1)
  }
  return (
    <>
      <div>{counter}</div>
      <hr/>
        <button onClick={handleClick} >Click Me</button>
    </>
  
  )
}

export default App
