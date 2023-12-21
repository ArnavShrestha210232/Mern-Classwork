import React from 'react'; // exercise5
import { useState } from 'react';


const App =()=>{
    const quotes = [
        'A rose by any other name would smell as sweet.',
        'All that glitters is not gold.',
        'All the world\'s a stage, and all the men and women merely players.'
    ]
    const [selected, setSelected] = useState(0);
    const nextQuote = () => {
        if (selected === quotes.length - 1) { 
            setSelected(0);

        } else {
              setSelected(selected+1);
        }
        
    }
    return (
        <><h1>QUotes</h1>
            <p>{quotes[selected]}</p>
            <button onClick={ nextQuote}>NextQuote</button>
            </>
    )
}
export default App


