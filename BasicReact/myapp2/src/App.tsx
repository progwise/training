import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { CountDisplay } from './countDisplay';


function App() {
  console.log('app was called')
  
  const [ count, setCount ] = useState(0)
  
  const handleCountClick = () => {
    console.log('handleCountClick was called', count)
    setCount(count + 1)
  }

  const handleResetClick = () => {
    console.log('handleResetClick was called', count)
    setCount(0)
  }

  return (
    <div className="App">
     <button onClick={handleCountClick}>Click me</button>
     <CountDisplay countForDisplay={count}></CountDisplay>
     <button onClick={handleResetClick}>Reset</button>
    </div>
  );
}

export default App;
