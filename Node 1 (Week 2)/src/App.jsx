import React from 'react'; // Added import statement for React
import { useState } from 'react';

import './App.css';

const Hello = ({ name, age }) => <h1>Hello,{name}age:{age}</h1>

const App = () => {
  return <div><Hello name="asss" age={23}></Hello></div>

}
// The above code can be writtn as
// const App = () => 
//   <div><Hello name="asss" age={23}></Hello></div>



// const Hello = (props) => {
//   const bornYear = () => {
//     const yearNow = new Date().getFullYear()
//     return yearNow-props.age
//   }

//   return (
//     <div><p>Hello{props.name}, you are {props.age} years old</p><p>So you were born in {bornYear()}</p></div>
//   )
// };

export default App
