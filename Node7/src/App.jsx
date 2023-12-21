import React from 'react'; // exercise1 
import { useState } from 'react';

const App =()=>{
    const [good, setGood] = useState(0)  // this code specifies that setGood function which has good value is at first 0. 
   //And at line 14 the setGood function is called and the value good + 1 is written to add value 1 after each click
    const [neutral,setNeutral] = useState(0) // Same as good
    const [bad,setBad] = useState(0)// same as good
    // let total=good+neutral+bad

    return(
        <div>
            <h4><strong>give Feedback</strong></h4>
            <button onClick ={()=>{
                setGood(good+1)
            }}>good</button>

            <button onClick ={()=>
            setNeutral(neutral+1)}>neutral</button>

            <button onClick ={()=>
            setBad(bad+1)}>bad</button>
            <h4><strong>Statistics</strong></h4>
             <br/>
            <p>good:{good}</p>
            <p>neutral:{neutral}</p>
            <p>bad:{bad}</p>
         </div>
    )
}
export default App


