import React from 'react'; // Added import statement for React
import { useState } from 'react';


//Exercise 1 Create Feedback System

const App = () => {

  // console.log('Hello Bro 1');
  // return (console.log('Hello Bro 5')
  //   // <><div><p>Hello2</p></div></>
    
  // )
  //  const [counter, setCounter] = useState(0)

  const [value, setValue] = useState(0)


  // if (good === 6) {
  //   return (
  //    <div>The Grade is good</div>
  //   )
  // }
  
  const handleClick = () => {
    setValue(value + 1)
    
  }



  return(
    <div>
      <h1>Give Feedback</h1>
    
      
     {value}
      <br />
      
      <button onClick={handleClick}>Check Grade</button>
      {/* <button onClick={handleNeutralClick}>Neutral</button>
      <button onClick={handleBadClick}>Bad</button> */}

      <hr />

      <div> 
        <h1>The grade is :</h1>
        {
          value >= 6 ? <p>Good</p> : <p>Bad</p> &&
          value == 0 ? <p>Neutral</p> : <p>Bad</p>
        }

      </div>
    
     
</div>
  )
  
}

export default App
