import React from 'react'; // Added import statement for React
import { useState } from 'react';

import './App.css';

const PArt = (props) => {
  return <p>{ props.part.name}{<props className="part exercises"></props></p>
}

const App = () => {
  const course = 'Half Stack application';
  const parts = [
    { name: 'Fundamental Of React', exercises: 10 },
    { name: 'Fundamental Of Mern', exercises: 7 },
    { name: 'Fundamental Of Dart', exercises: 12 },
  ];

  return (
    <div>
      {parts.map((value) => { // Corrected the method name to map
        console.log(value);
        return (
          <div key={value.name}>
            {value.name}: {value.exercises}
          </div>
        );
      })}
    </div>
  );
};

export default App;
