import React from 'react'; // Added import statement for React
import { useState } from 'react';




const App = () => {

  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])
  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    setLeft(left+1)
  }
  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    setLeft(right+1)
  }
  return (
    <div>
      {left}
      <button onClick={handleLeftClick} left></button>
      <button onClick={handleRightClick} right></button>
      {right}
      <p>{allClicks.join('')}</p>
    </div>
  )
  // const [update, setUpdate] = useState([     
  //   {
  //     left: 0,
  //     right: 0
  //   }
  
  //   ])

  

  // const handleClick = () => {
  //  setUpdate(update[0].left + 1 )
  // }

  // return (
  //   <>
  //     <div>
  //       <div style={{
  //         fontSize: "40px",
  //         fontStyle: "bold"
  //       }}>

  //         {update[0].left +1 }
        
  //       </div>
  //       <button
  //        onClick={handleClick}
  //       >left</button>
  //       {/* <button onClick={setUpdate(update.right+1)}>right</button> */}
  //     </div>
  //   </>
  // )
}

export default App

