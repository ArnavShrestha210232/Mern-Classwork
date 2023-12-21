import React from 'react'; // exercise2
import { useState } from 'react';

// The following code is similiar to exercise 1 but in this code below we use a formulae to get the percentage of the value good, bad, and neutral
const App =()=>{
   const [good,setGood] = useState(0)
    const [neutral,setNeutral] = useState(0)
    const [bad,setBad] = useState(0)
    let total=good+neutral+bad

    return(
        <div>
            <h4><strong>give Feedback</strong></h4>
            <button onClick ={()=>{
                setGood(good+1)
            }}>good</button>

            <button onClick ={()=>
            setNeutral(neutral+1)}>neutral</button>

            <button onClick ={()=>
                setBad(bad + 1)}>bad</button>
            
            <h4><strong>Statistics</strong></h4>
            <p>good:{good}</p>
            <p>neutral:{neutral}</p>
            <p>bad:{bad}</p>
            <br/>
            <p>good:{good/total*100}%</p>
            <p>neutral:{neutral/total*100}%</p>
            <p>bad:{bad/total*100}%</p>
         </div>
    )
}
export default App


